import { ImageResponse } from "@vercel/og";

export const config = {
  runtime: "edge",
};

// const font = fetch(new URL("../assets/Inter.ttf", import.meta.url)).then(
//   (res) => res.arrayBuffer(),
// );

export default async function handler(req) {
  //   const fontData = await font;

  try {
    const { searchParams } = new URL(req.url);

    const title = searchParams.get("title");

    const html = {
      type: "div",
      props: {
        children: [
          {
            type: "div",
            props: {
              style: {
                width: "80%",
                display: "flex",
                flexDirection: "column",
                textAlign: "center",
                alignItems: "center",
              },
              children: [
                {
                  type: "p",
                  props: {
                    style: { fontSize: 32 },
                    children: "Blog by Thomas Ledoux",
                  },
                },
                {
                  type: "p",
                  props: {
                    style: { fontSize: 64 },
                    children: title,
                  },
                },
              ],
            },
          },
        ],
        style: {
          background: "white",
          width: "100%",
          height: "100%",
          display: "flex",
          textAlign: "center",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          fontFamily: "Inter",
        },
      },
    };

    return new ImageResponse(html, {
      width: 1200,
      height: 630,
      //   fonts: [
      //     {
      //       name: "Inter",
      //       data: fontData,
      //       style: "normal",
      //     },
      //   ],
    });
  } catch (e) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
