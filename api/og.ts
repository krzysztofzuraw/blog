import { ImageResponse } from "@vercel/og";

export const config = {
  runtime: "edge",
};

export default async function handler() {
  try {
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
          backgroundImage:
            "radial-gradient(circle at 25px 25px, lightgray 2%, transparent 0%), radial-gradient(circle at 75px 75px, lightgray 2%, transparent 0%)",
          backgroundSize: "100px 100px",
        },
      },
    };

    return new ImageResponse(html as any, {
      width: 1200,
      height: 600,
    });
  } catch (e: any) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
