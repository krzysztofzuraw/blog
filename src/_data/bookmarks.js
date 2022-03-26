const rssParser = require("rss-parser");
const Cache = require("@11ty/eleventy-cache-assets");

const collectionId = process.env.RAINDROP_COLLECTION_ID;
const token = process.env.RAINDROP_TOKEN;
const articlesUrl = "https://feedbin.com/starred/ace3e0610c22e8951a8c60652af5a9fd.xml";
const linksUrl = `https://api.raindrop.io/rest/v1/raindrops/${collectionId}`;

const parser = new rssParser();

module.exports = async function () {
  try {
    const linksResponse = await Cache(linksUrl, {
      duration: "1week",
      type: "json",
      fetchOptions: {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    });

    const articlesResponse = await parser.parseURL(articlesUrl);

    const links = linksResponse.items.map((item) => ({
      title: item.title,
      url: item.link,
      date: item.created,
      domain: new URL(item.link).hostname,
    }));

    const articles = articlesResponse.items.map((item) => ({
      title: item.title,
      url: item.link,
      date: item.isoDate,
      domain: new URL(item.link).hostname,
    }));

    const result = [...links, ...articles].sort((a, b) => a.date.localeCompare(b.date));

    return result;
  } catch (err) {
    console.error(err);
    return [];
  }
};
