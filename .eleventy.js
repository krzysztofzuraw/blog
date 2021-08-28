const { DateTime } = require('luxon');
const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');
const eleventyNavigationPlugin = require('@11ty/eleventy-navigation');
const pluginRss = require('@11ty/eleventy-plugin-rss');
const groupBy = require('lodash.groupby');
const markdownIt = require('markdown-it');
const markdownItAnchor = require('markdown-it-anchor');

module.exports = config => {
  config.addPassthroughCopy('src/css');
  config.addPassthroughCopy('src/img');
  config.addPassthroughCopy({ 'src/passthrough': '/' });

  config.addPlugin(syntaxHighlight);
  config.addPlugin(eleventyNavigationPlugin);
  config.addPlugin(pluginRss);

  config.addFilter('humanizeDate', date => {
    return DateTime.fromJSDate(date).toLocaleString({
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  });

  config.addFilter('htmlDateString', dateObj => {
    return DateTime.fromJSDate(dateObj, { zone: 'utc' }).toFormat('yyyy-LL-dd');
  });

  config.addFilter('formatDate', date => {
    return DateTime.fromJSDate(date).toFormat('yyyy-LL-dd');
  });

  config.addFilter('getYear', date => {
    return DateTime.fromJSDate(date).toFormat('yyyy');
  });

  config.addFilter('formatDateFromString', dateStr => {
    return DateTime.fromISO(dateStr).toFormat('yyyy-LL-dd');
  });

  config.addFilter('getLanguage', lang => {
    switch (lang) {
      case 'en':
        return 'English';
      case 'pl':
        return 'Polish';
      default:
        return 'English';
    }
  });

  config.addShortcode('currentYear', () => {
    return DateTime.now().toLocaleString({ year: 'numeric' });
  });

  config.addShortcode('img', (path, alt, figcaption) => {
    return /*html*/ `<figure>
       <a href="/img/${path}.webp" target="_blank" rel="noopener">
        <img src="/img/${path}.webp" loading="lazy" alt="${alt}" >
      </a>
      <figcaption>${figcaption}</figcaption>
    </figure>`;
  });

  config.addCollection('postStats', collectionApi => {
    const posts = collectionApi.getFilteredByTag('posts');
    const postsGroupedByYear = groupBy(posts, post => post.date.getFullYear());
    const postsStats = Object.entries(postsGroupedByYear).map(([year, posts]) => ({
      [year]: posts.length,
    }));

    return [...postsStats, { Total: posts.length }];
  });

  config.addCollection('bookStats', collectionApi => {
    const books = collectionApi.getFilteredByTag('books');
    const booksGroupedByYear = groupBy(books, book => book.date.getFullYear());
    const booksStats = Object.entries(booksGroupedByYear).map(([year, books]) => ({
      [year]: books.length,
    }));

    return [...booksStats, { Total: books.length }];
  });

  const markdownLibrary = markdownIt({
    html: true,
    linkify: true,
  }).use(markdownItAnchor, {
    permalink: markdownItAnchor.permalink.ariaHidden({
      placement: 'after',
      class: 'direct-link',
      symbol: '#',
      level: [1, 2, 3, 4],
    }),
    slugify: config.getFilter('slug'),
  });
  config.setLibrary('md', markdownLibrary);

  return {
    templateFormats: ['md', 'njk', 'html'],
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
    dir: {
      input: 'src',
      output: 'dist',
    },
  };
};
