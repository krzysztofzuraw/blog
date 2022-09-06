const navigation = require("@11ty/eleventy-navigation");
const rss = require("@11ty/eleventy-plugin-rss");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

const filters = require("./utils/filters.js");
const shortcodes = require("./utils/shortcodes.js");
const aliases = require("./utils/aliases.js");
const mappings = require("./utils/mappings");

const Image = require("@11ty/eleventy-img");
const path = require("path");

async function imageShortcode(filename, alt) {
  const src = path.resolve(process.cwd(), "src", "img", `${filename}.jpg`);

  const metadata = await Image(src, {
    widths: [300, 600, 1200, null],
    formats: ["avif", "webp", null],
    outputDir: "dist/img",
  });

  const imageAttributes = {
    alt,
    sizes: "100vw",
    loading: "lazy",
    decoding: "async",
  };

  // You bet we throw an error on missing alt in `imageAttributes` (alt="" works okay)
  return Image.generateHTML(metadata, imageAttributes);
}

module.exports = (config) => {
  config.addPlugin(navigation);
  config.addPlugin(rss);
  config.addPlugin(syntaxHighlight);

  config.addNunjucksAsyncShortcode("omg", imageShortcode);

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
