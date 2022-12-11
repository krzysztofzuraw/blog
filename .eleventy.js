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

  Object.keys(shortcodes.default).forEach((name) => {
    config.addShortcode(name, shortcodes.default[name]);
  });

  Object.keys(shortcodes.async).forEach((name) => {
    config.addNunjucksAsyncShortcode(name, shortcodes.async[name]);
  });

  Object.keys(shortcodes.paired).forEach((name) => {
    config.addPairedShortcode(name, shortcodes.paired[name]);
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
