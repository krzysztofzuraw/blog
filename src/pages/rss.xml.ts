import rss from "@astrojs/rss";
import type { APIRoute } from "astro";
import MarkdownIt from "markdown-it";
import sanitizeHtml from "sanitize-html";

import { DESCRIPTION, TITLE } from "@/data/metadata";
import { getLatestsPosts } from "@/utils/getLatestsPosts";

const parser = new MarkdownIt();

export const GET: APIRoute = async ({ site }) => {
  const latestsPosts = await getLatestsPosts();
  return rss({
    title: TITLE,
    description: DESCRIPTION,
    site: site?.toString() ?? "",
    stylesheet: "/rss/styles.xsl",
    items: latestsPosts.map((post) => ({
      link: `/blog/${post.slug}/`,
      content: sanitizeHtml(parser.render(post.body)),
      ...post.data,
    })),
  });
};
