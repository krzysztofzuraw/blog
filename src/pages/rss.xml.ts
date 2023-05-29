import rss from "@astrojs/rss";
import type { APIRoute } from "astro";

import { blogDescription, blogTitle } from "~data/metadata";
import { getLatestsPosts } from "~utils/getLatestsPosts";

export const get: APIRoute = async ({ site }) => {
  const latestsPosts = await getLatestsPosts();
  return rss({
    title: blogTitle,
    description: blogDescription,
    site: site?.toString() ?? "",
    stylesheet: "/rss/styles.xsl",
    items: latestsPosts.map((post) => ({
      link: `/blog/${post.slug}/`,
      ...post.data,
    })),
  });
};
