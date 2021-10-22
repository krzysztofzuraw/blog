const { DateTime } = require('luxon');
const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');
const eleventyNavigationPlugin = require('@11ty/eleventy-navigation');
const pluginRss = require('@11ty/eleventy-plugin-rss');

module.exports = config => {
  config.addPassthroughCopy('src/css');
  config.addPassthroughCopy('src/img');
  config.addPassthroughCopy({ 'src/passthrough': '/' });

  config.addPlugin(syntaxHighlight);
  config.addPlugin(eleventyNavigationPlugin);
  config.addPlugin(pluginRss);

  config.addFilter('humanizeDate', date =>
    DateTime.fromJSDate(date).toLocaleString({
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  );

  config.addFilter('formatDate', date =>
    DateTime.fromJSDate(date).toLocaleString({
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    })
  );

  config.addFilter('getYear', date => {
    return DateTime.fromJSDate(date).toFormat('yyyy');
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
