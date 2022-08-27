const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const pluginRss = require("@11ty/eleventy-plugin-rss");

const filters = require("./utils/filters.js");
const shortcodes = require("./utils/shortcodes.js");
const aliases = require("./utils/aliases.js");

module.exports = (config) => {
  config.addPassthroughCopy("src/images");
  config.addPassthroughCopy({ "src/passthrough": "/" });

  config.addPlugin(eleventyNavigationPlugin);
  config.addPlugin(pluginRss);

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
