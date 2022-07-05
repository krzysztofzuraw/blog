const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const { DateTime } = require("luxon");
const sizeOf = require("image-size");
const path = require("path");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = (config) => {
  config.addPassthroughCopy("src/img");
  config.addPassthroughCopy({ "src/passthrough": "/" });
  config.addPassthroughCopy("src/css");

  config.addPlugin(eleventyNavigationPlugin);
  config.addPlugin(pluginRss);
  config.addPlugin(syntaxHighlight);

  config.addFilter("humanizeDate", (date) => {
    return DateTime.fromJSDate(date).toLocaleString({
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
      timeZone: "Europe/Warsaw",
    });
  });

  config.addFilter("formatDate", (date) => DateTime.fromJSDate(date).toFormat("yyyy-MM-dd"));

  config.addFilter("toISO", (date) => DateTime.fromJSDate(date, { zone: "Europe/Warsaw" }).toISO());

  config.addFilter("getYear", (date) =>
    DateTime.fromJSDate(date, { zone: "Europe/Warsaw" }).toFormat("yyyy")
  );

  config.addShortcode("currentYear", () => DateTime.now().toLocaleString({ year: "numeric" }));

  config.addShortcode("img", (imgPath, alt, figcaption) => {
    const dimensions = sizeOf(path.resolve(process.cwd(), "src", "img", `${imgPath}.webp`));

    return `<figure>
       <a href="/img/${imgPath}.webp" target="_blank" rel="noopener">
        <img src="/img/${imgPath}.webp" loading="lazy" alt="${alt}" height="${dimensions.height}" width="${dimensions.width}">
      </a>
      <figcaption>${figcaption}</figcaption>
    </figure>`;
  });

  config.addLayoutAlias("base", "layouts/base.html");
  config.addLayoutAlias("page", "layouts/page.html");
  config.addLayoutAlias("post", "layouts/post.html");

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
