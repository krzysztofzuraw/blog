---
title: Sharing configs between Storybook and Vite
description: How to fix issues that I had when migrating to Storybook 7
pubDate: 2023-05-06T09:54:17Z
slug: 2023/storybook-vite-config
---

I have a project that is using Vite.js as a bundler with Storybook to have visual testing of components. I recently updated Storybook from version 5 to 7. Here are a couple of things I had to do to make it work.

Firstly you have to know that Storybook in version 7 will merge project `vite.config.js` to its own.
What does it mean? It means that all your plugins will work out of the box with Storybook but on the other hand, you need to make sure that your paths in `vite.config.js` are correct. By correct I mean they should be absolute, not relative. Why? Let's say that you have your vite plugin configured to look for `index.tsx` file like this: `entry: "./index.tsx"` - it will work in your project but not in Storybook. It won't work because Storybook will look for `index.tsx` from its directory (by default in the `.storybook` folder), not from the root of your project. So you have to make sure that your paths are absolute. How to do this? You can use the `path` module from Node.js. Here is an example:

```js
import { resolve } from "path";

export default defineConfig({
  plugins: [
    viteHtml({
      entry: resolve(__dirname, "index.tsx"),
    }),
  ],
});
```

Another issue that I found is that not all plugins will work with Storybook. For example, `@vitejs/plugin-react-swc` will not work with Storybook 7 - you can see the GitHub issue for [details](https://github.com/storybookjs/storybook/issues/22381). What you can do to fix this? You can use the solution provided in the issue and remove the plugin from the config when running Storybook. Here is a code example:

```js
import react from "@vitejs/plugin-react";
import { withoutVitePlugins } from "@storybook/builder-vite";

const config = {
  // the rest of the config
  async viteFinal(config) {
    config.plugins = await withoutVitePlugins(config.plugins, [
      "vite:react-swc",
    ]);

    return mergeConfig(config, {
      plugins: [react()],
    });
  },
};
```

Other than those two issues migrating to Storybook 7 was quite nice. Storybook has even a nice codemod to migrate from `storiesOf` to the new CSF [format](https://storybook.js.org/docs/react/migration-guide#storiesof-to-csf). That is all for today and I hope this will help you to migrate your project to Storybook 7.
