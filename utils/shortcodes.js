const { DateTime } = require("luxon");
const sizeOf = require("image-size");
const path = require("path");

module.exports = {
  currentYear: () => DateTime.now().toLocaleString({ year: "numeric" }),
  img: (imgPath, alt, figcaption) => {
    const dimensions = sizeOf(path.resolve(process.cwd(), "src", "images", `${imgPath}.webp`));

    return `<figure>
       <a href="/images/${imgPath}.webp" target="_blank" rel="noopener">
        <img src="/images/${imgPath}.webp" loading="lazy" alt="${alt}" height="${dimensions.height}" width="${dimensions.width}">
      </a>
      <figcaption>${figcaption}</figcaption>
    </figure>`;
  },
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
};
