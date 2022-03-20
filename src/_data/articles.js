const rssParser = require("rss-parser");

const parser = new rssParser();

const feedUrl = "https://feedbin.com/starred/ace3e0610c22e8951a8c60652af5a9fd.xml";

module.exports = async function () {
  const data = await parser.parseURL(feedUrl);
  return data.items.map((item) => ({ title: item.title, url: item.url, date: item.isoDate }));
};
