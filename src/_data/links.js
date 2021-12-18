const Cache = require('@11ty/eleventy-cache-assets');

const collectionId = process.env.RAINDROP_COLLECTION_ID;
const token = process.env.RAINDROP_TOKEN;

module.exports = async function () {
  try {
    const response = await Cache(`https://api.raindrop.io/rest/v1/raindrops/${collectionId}`, {
      duration: '1week',
      type: 'json',
      fetchOptions: {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    });

    return response.items.map(item => ({
      tags: item.tags,
      title: item.title,
      url: item.link,
    }));
  } catch (err) {
    console.error(err);
    return [];
  }
};
