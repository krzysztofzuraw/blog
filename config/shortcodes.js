const { DateTime } = require("luxon");
const path = require("path");
const Image = require("@11ty/eleventy-img");

module.exports = {
  default: {
    currentYear: () => DateTime.now().toLocaleString({ year: "numeric" }),
  },
  paired: {
    getOGImage: (title) => {
      const params = new URLSearchParams({ title });
      return `https://blog-og-image-three.vercel.app/api/og?${params.toString()}`;
    },
  },
  async: {
    img: async (filename, alt) => {
      const src = path.resolve(process.cwd(), "src", "img", `${filename}.jpg`);

      const metadata = await Image(src, {
        widths: [300, 600, 1200, null],
        formats: ["avif", "webp", null],
        outputDir: "dist/img",
      });

      const imageAttributes = {
        alt,
        sizes: "100vw",
        loading: "lazy",
        decoding: "async",
      };

      return Image.generateHTML(metadata, imageAttributes);
    },
  },
};
