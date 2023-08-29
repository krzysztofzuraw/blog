import React from "https://esm.sh/react@18.2.0";
import { ImageResponse } from "https://deno.land/x/og_edge@0.0.2/mod.ts";

export default function handler(req: Request) {
  const url = new URL(req.url);
  const params = new URLSearchParams(url.search);
  const title = params.get("title");

  return new ImageResponse(
    (
      <div tw="flex bg-white text-black h-full w-full p-16">
        <div tw="flex flex-col justify-around h-full w-3/5">
          <h1 tw="text-6xl">{title}</h1>
          <div tw="flex items-center justify-center">
            <img
              src="https://www.gravatar.com/avatar/aea3dc1b9488af9e2074c1304b2f71b7"
              tw="rounded-full"
              alt=""
            />
            <h2 tw="text-4xl ml-7">Krzysztof Żuraw</h2>
          </div>
        </div>

        <div tw="flex m-auto">
          <svg
            width="300px"
            height="300px"
            version="1.1"
            viewBox="0 0 700 700"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              <path d="m529.24 428.48h11.211v-201.66h56.055v-67.266h100.76v-111.97h-448.03v-44.844h-156.95v44.844h-56.055v111.97h56.055v470.45h-89.551v67.266h336.05v-67.266h-89.551v-470.45h212.87v67.266h56.055v180.06c-38.008 5.4688-67.266 38.145-67.266 77.656 0 43.203 35.137 78.477 78.477 78.477s78.477-35.137 78.477-78.477h-22.422c0 30.898-25.156 56.055-56.055 56.055s-56.055-25.156-56.055-56.055c-0.13672-31.035 25.02-56.055 55.918-56.055zm-414.53-403.32h111.97v22.422h-111.97zm17.773 134.39-17.773 17.773v-17.773zm94.336 353.83-96.113-96.113 96.113-96.113zm-15.859 15.859-96.113 96.113v-192.36zm-96.25-127.83v-192.36l96.113 96.113zm201.66 251.02v22.422h-291.21v-22.422zm-174.59-22.422 85.039-85.039v85.039zm85.039-340.7-96.113-96.113 33.633-33.633h62.617v129.75zm-168.03-152.17v-67.129h616.05v67.266h-616.05zm425.61 22.422h89.551v44.844h-89.551z" />
              <path d="m338.79 92.285h22.422v22.422h-22.422z" />
              <path d="m383.63 92.285h22.422v22.422h-22.422z" />
              <path d="m293.95 92.285h22.422v22.422h-22.422z" />
            </g>
          </svg>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}
