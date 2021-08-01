const Cache = require("@11ty/eleventy-cache-assets");
const domain = require("./metadata.json").domain;
require("dotenv").config();

const BASE_URL = "https://webmention.io/api/mentions.jf2";
const TOKEN = process.env.WEBMENTIONS_TOKEN;

module.exports = async function () {
  const apiURL = new URL(BASE_URL);
  apiURL.search = new URLSearchParams(
    new URLSearchParams({
      domain,
      token: TOKEN,
    })
  );

  try {
    const response = await Cache(apiURL, {
      duration: "1w",
      type: "json",
    });
    return response.children;
  } catch (err) {
    console.error(err);
    return [];
  }
};
