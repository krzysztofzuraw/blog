const Cache = require("@11ty/eleventy-cache-assets");

const apiKey = process.env.TRAKT_API_KEY;

module.exports = async function () {
  try {
    const response = await Cache("https://api.trakt.tv/users/krzysztof_zuraw/ratings/movies", {
      duration: "1week",
      type: "json",
      fetchOptions: {
        headers: {
          "trakt-api-key": apiKey,
          "trakt-api-version": 2,
        },
      },
    });

    return response.map((data) => ({
      title: data.movie.title,
      date: data.rated_at,
      rating: data.rating,
    }));
  } catch (err) {
    console.error(err);
    return [];
  }
};
