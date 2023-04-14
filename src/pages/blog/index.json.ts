import type { APIRoute } from "astro";
import { SITE_URL } from "~utils/consts";
import { getLatestsPosts } from "~utils/helpers";

export const get: APIRoute = async () => {
  const latestsPosts = await getLatestsPosts();

  return {
    body: JSON.stringify(
      latestsPosts.map((post) => ({
        title: post.data.title,
        url: `${SITE_URL}/blog/${post.slug}/`,
      }))
    ),
  };
};
