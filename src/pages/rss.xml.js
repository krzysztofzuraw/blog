import rss from "@astrojs/rss";

import metadata from "~data/metadata.json";
import { getLatestsPosts } from "~utils/getLatestsPosts";

export async function get(context) {
  const latestsPosts = await getLatestsPosts();
  return rss({
    title: metadata.title,
    description: metadata.description,
    site: context.site,
    stylesheet: "/rss/styles.xsl",
    items: latestsPosts.map((post) => ({
      link: `/blog/${post.slug}/`,
      ...post.data,
    })),
  });
}
