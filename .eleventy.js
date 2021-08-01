const { DateTime } = require("luxon");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const sanitizeHTML = require("sanitize-html");
const groupBy = require("lodash.groupby");

module.exports = (config) => {
  config.addPassthroughCopy("src/css");
  config.addPassthroughCopy("src/img");
  config.addPassthroughCopy({ "src/passthrough": "/" });

  config.addPlugin(syntaxHighlight);
  config.addPlugin(eleventyNavigationPlugin);
  config.addPlugin(pluginRss);

  config.addFilter("humanizeDate", (date) => {
    return DateTime.fromJSDate(date).toLocaleString({
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  });

  config.addFilter("htmlDateString", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat("yyyy-LL-dd");
  });

  config.addFilter("formatDate", (date) => {
    return DateTime.fromJSDate(date).toFormat("yyyy-LL-dd");
  });

  config.addFilter("getYear", (date) => {
    return DateTime.fromJSDate(date).toFormat("yyyy");
  });

  config.addFilter("formatDateFromString", (dateStr) => {
    return DateTime.fromISO(dateStr).toFormat("yyyy-LL-dd");
  });

  config.addFilter("getLanguage", (lang) => {
    switch (lang) {
      case "en":
        return "English";
      case "pl":
        return "Polish";
      default:
        return "English";
    }
  });

  config.addFilter("getWebmentionsForUrl", (webmentions, url) => {
    const likes = ["like-of"];
    const repost = ["repost-of"];
    const messages = ["mention-of", "in-reply-to"];

    const hasRequiredFields = (entry) => {
      const { author, published, content } = entry;
      return author.name && published && content;
    };
    const sanitize = (entry) => {
      const { content } = entry;
      if (content["content-type"] === "text/html") {
        content.value = sanitizeHTML(content.value);
      }
      return entry;
    };

    return {
      likesCount: webmentions
        .filter((entry) => entry["wm-target"] === url)
        .filter((entry) => likes.includes(entry["wm-property"])).length,
      repostsCount: webmentions
        .filter((entry) => entry["wm-target"] === url)
        .filter((entry) => repost.includes(entry["wm-property"]))
        .filter(hasRequiredFields)
        .map(sanitize).length,
      messages: webmentions
        .filter((entry) => entry["wm-target"] === url)
        .filter((entry) => messages.includes(entry["wm-property"]))
        .filter(hasRequiredFields)
        .map(sanitize),
    };
  });

  config.addShortcode("currentYear", () => {
    return DateTime.now().toLocaleString({ year: "numeric" });
  });

  config.addShortcode("img", (path, alt, figcaption) => {
    return /*html*/ `<figure>
       <a href="/img/${path}.webp" target="_blank" rel="noopener">
        <img src="/img/${path}.webp" loading="lazy" alt="${alt}" >
      </a>
      <figcaption>${figcaption}</figcaption>
    </figure>`;
  });

  config.addCollection("postStats", (collectionApi) => {
    const posts = collectionApi.getFilteredByTag("posts")
    const postsGroupedByYear = groupBy(posts, (post) =>
      post.date.getFullYear()
    );
    const postsStats = Object.entries(postsGroupedByYear).map(([year, posts]) => ({
      [year]: posts.length,
    }));

    return [...postsStats, { Total: posts.length }];
  });

  config.addCollection("bookStats", (collectionApi) => {
    const books = collectionApi.getFilteredByTag("books")
    const booksGroupedByYear = groupBy(books, (book) =>
      book.date.getFullYear()
    );
    const booksStats = Object.entries(booksGroupedByYear).map(([year, books]) => ({
      [year]: books.length,
    }));

    return [...booksStats, { Total: books.length }];
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
