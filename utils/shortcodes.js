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
};
