import type { APIRoute } from "astro";

import { blogUrl } from "~data/metadata";
import { getLatestsPosts } from "~utils/getLatestsPosts";

export const GET: APIRoute = async () => {
  const latestsPosts = await getLatestsPosts();

  return new Response(
    JSON.stringify(
      latestsPosts.map((post) => ({
        title: post.data.title,
        url: `${blogUrl}/blog/${post.slug}/`,
      })),
    ),
  );
};
