const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

exports.handler = async function (event, ctx) {
  const { queryStringParameters } = event;

  const title = queryStringParameters.title || 'Home';
  const imageUrl = cloudinary.url('social-card.jpg', {
    transformation: [
      {},
      {
        gravity: 'north_west',
        x: 441,
        y: 48,
        width: 751,
        crop: 'fit',
        overlay: {
          font_family: 'Inter-Bold.otf',
          text: title,
          font_size: 64,
          font_weight: 'bold',
        },
      },
    ],
  });

  return {
    statusCode: 302,
    headers: {
      Location: imageUrl,
    },
  };
};
