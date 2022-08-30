const navigation = require("@11ty/eleventy-navigation");
const rss = require("@11ty/eleventy-plugin-rss");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

const filters = require("./utils/filters.js");
const shortcodes = require("./utils/shortcodes.js");
const aliases = require("./utils/aliases.js");
const mappings = require("./utils/mappings");

module.exports = (config) => {
  config.addPlugin(navigation);
  config.addPlugin(rss);
  config.addPlugin(syntaxHighlight);

  mappings.map((path) => {
    config.addPassthroughCopy(path);
  });

  Object.keys(filters).forEach((name) => {
    config.addFilter(name, filters[name]);
  });

  Object.keys(shortcodes).forEach((name) => {
    config.addShortcode(name, shortcodes[name]);
  });

  Object.keys(aliases).forEach((name) => {
    config.addLayoutAlias(name, aliases[name]);
  });

  return {
    templateFormats: ["md", "njk", "html"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    dir: {
      input: "src",
      output: "dist",
    },
  };
};
