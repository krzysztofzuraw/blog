import type { APIRoute } from "astro";

import metadata from "~data/metadata.json";
import { getLatestsPosts } from "~utils/getLatestsPosts";

export const get: APIRoute = async () => {
  const latestsPosts = await getLatestsPosts();

  return {
    body: JSON.stringify(
      latestsPosts.map((post) => ({
        title: post.data.title,
        url: `${metadata.url}/blog/${post.slug}/`,
      }))
    ),
  };
};
