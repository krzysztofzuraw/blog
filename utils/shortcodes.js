const { DateTime } = require("luxon");
const path = require("path");
const Image = require("@11ty/eleventy-img");

module.exports = {
  default: {
    currentYear: () => DateTime.now().toLocaleString({ year: "numeric" }),
    rateToWords: (rate) => {
      switch (rate) {
        case 1:
          return "misunderstanding";
        case 2:
          return "very bad";
        case 3:
          return "bad";
        case 4:
          return "ok";
        case 5:
          return "average";
        case 6:
          return "not bad";
        case 7:
          return "good";
        case 8:
          return "very good";
        case 9:
          return "sensational";
        case 10:
          return "masterpiece";
      }
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
