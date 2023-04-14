import rss from "@astrojs/rss";

import { SITE_DESCRIPTION, SITE_TITLE } from "~utils/consts";
import { getLatestsPosts } from "~utils/helpers";

export async function get(context) {
  const latestsPosts = await getLatestsPosts();
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
