import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { chain } from "lodash-es";

import { SITE_DESCRIPTION, SITE_TITLE } from "~utils/consts";

export async function get(context) {
  const latestsPosts = chain(await getCollection("blog"))
    .sortBy((post) => post.data.pubDate.valueOf())
    .reverse()
    .slice(0, 3)
    .value();
  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site,
    stylesheet: "/rss/styles.xsl",
    items: latestsPosts.map((post) => ({
      link: `/blog/${post.slug}/`,
      ...post.data,
    })),
  });
}
