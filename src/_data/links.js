const url = "https://feedbin.com/starred/d9cfbb00180924867776545444682027.xml";
const rssParser = require("rss-parser");
const { AssetCache } = require("@11ty/eleventy-fetch");

const parser = new rssParser();

module.exports = async function () {
  try {
    let cachedLinks = new AssetCache("links");

    if (cachedLinks.isCacheValid("1week")) {
      return cachedLinks.getCachedValue();
    }

    const response = await parser.parseURL(url);

    const links = response.items.map((item) => ({
      title: item.title,
      url: item.link,
      date: item.isoDate,
    }));

    await cachedLinks.save(links, "json");
    return links;
  } catch (e) {
    console.error(err);
    return [];
  }
};
