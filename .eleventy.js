const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

const filters = require("./utils/filters.js");
const shortcodes = require("./utils/shortcodes.js");

module.exports = (config) => {
  config.addPassthroughCopy("src/img");
  config.addPassthroughCopy({ "src/passthrough": "/" });
  config.addPassthroughCopy("src/css");

  config.addPlugin(eleventyNavigationPlugin);
  config.addPlugin(pluginRss);
  config.addPlugin(syntaxHighlight);

  Object.keys(filters).forEach((name) => {
    config.addFilter(name, filters[name]);
  });

  Object.keys(shortcodes).forEach((name) => {
    config.addShortcode(name, shortcodes[name]);
  });

  config.addLayoutAlias("base", "layouts/base.html");
  config.addLayoutAlias("page", "layouts/page.html");
  config.addLayoutAlias("post", "layouts/post.html");
  config.addLayoutAlias("book", "layouts/book.html");

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
