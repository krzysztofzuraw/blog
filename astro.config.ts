import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";
import robotsTxt from "astro-robots-txt";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://krzysztofzuraw.com",
  integrations: [
    sitemap(),
    tailwind(),
    robotsTxt({
      policy: [
        {
          userAgent: "GPTBot",
          disallow: "/",
        },
        {
          userAgent: "ChatGPT-User",
          disallow: "/",
        },
        {
          userAgent: "*",
          allow: "/",
        },
      ],
    }),
  ],
  output: "server",
  adapter: vercel({
    analytics: true,
    imageService: true,
  }),
});
