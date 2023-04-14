import { getCollection } from "astro:content";
import { chain } from "lodash-es";

export const getLatestsPosts = async () =>
  chain(await getCollection("blog"))
    .sortBy((post) => post.data.pubDate.valueOf())
    .reverse()
    .slice(0, 3)
    .value();
