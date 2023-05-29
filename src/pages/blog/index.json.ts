import type { APIRoute } from "astro";

import { blogUrl } from "~data/metadata";
import { getLatestsPosts } from "~utils/getLatestsPosts";

export const get: APIRoute = async () => {
  const latestsPosts = await getLatestsPosts();

  return {
    body: JSON.stringify(
      latestsPosts.map((post) => ({
        title: post.data.title,
        url: `${blogUrl}/blog/${post.slug}/`,
      }))
    ),
  };
};
