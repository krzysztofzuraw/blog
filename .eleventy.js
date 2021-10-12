const { DateTime } = require('luxon');
const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');
const eleventyNavigationPlugin = require('@11ty/eleventy-navigation');
const pluginRss = require('@11ty/eleventy-plugin-rss');
const _ = require('lodash');
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

  config.addFilter('formatDateWithoutYear', date => {
    return DateTime.fromJSDate(date).toLocaleString({
      month: 'long',
      day: 'numeric',
    });
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

  config.addCollection('postsByYear', collection => {
    return _.chain(collection.getFilteredByTag('posts'))
      .groupBy(post => post.date.getFullYear())
      .toPairs()
      .reverse()
      .value();
  });

  config.addCollection('tilsByYear', collection => {
    return _.chain(collection.getFilteredByTag('tils'))
      .groupBy(post => post.date.getFullYear())
      .toPairs()
      .reverse()
      .value();
  });

  config.addCollection('booksByYear', collection => {
    return _.chain(collection.getFilteredByTag('books'))
      .groupBy(post => post.date.getFullYear())
      .toPairs()
      .reverse()
      .value();
  });

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
