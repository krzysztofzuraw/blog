---
title: PNPM and monorepo fun
pubDate: 2022-06-09T13:09:55Z
slug: 2022/pnpm-and-monorepo-fun
---

I read recently about [monorepo being big thing in 2022](https://dev.to/swyx/why-turborepo-will-be-the-first-big-trend-of-2022-4gfj). I took mental note about [Turborepo](https://turborepo.org/) and move on. After a month it turns out that we can have case for monorepo in [Ingrid](https://www.ingrid.com/).

We are building page and widget that shares the same data structure and UI. Why not in other repos? We did the same a while back with other widget and its design system - it was never used and it was nightmare to maintain.

This time we wanted to start small and build up from there. We can always split monorepo if we decided to do so. Why not having widget embedded in page? Because page is next.js application and widget is [Vite](https://vitejs.dev/) iframe with React. We will loose benefits of next.js like SSR (which is important in this project). We went with monorepo.

It turns out we do not need turborepo at all (we do not use Vercel for hosting our stack - Google Cloud it is).

While playing with turborepo examples I found out two things: npm sucks when it comes to monorepo (turborepo example with npm doesn't work at all) and pnpm seems to work fine with that case.

I decided to go with pnpm as a package manager for monorepo. Another thing we found out is that you can’t have proposed monorepo structure `packages` and `libs` folders as we are using [vanilla-extract](https://vanilla-extract.style/). Why is that? Vanilla extract plugin for Vite did not support using `css.ts` components from packages that are not in the root of the repo. Apparently maintainers fixed [issue](https://github.com/seek-oss/vanilla-extract/issues/559).

We went with having folders with applications and folders with shared code in root of monorepo named: `widget`, `page` and `i18n` or `ui`. Everything works fine with pnpm to the time we wanted to deploy our monorepo to Google Cloud infrastructure. Our deployment path looks as follows:

1. Install global dependencies `pnpm install`
1. build page by building docker image with next.js application in Google Cloud Build
1. use builded docker image in Google Cloud Run
1. build widget in Google Cloud Build
1. upload builded assets to our cdn

In order to even start deployment pipeline we needed `pnpm` to works in Google Cloud Build. Fortunately you can create your own docker image that can be used in cloud build steps. We did exactly that.

```docker
FROM node:14

ARG PNPM_VERSION

RUN apt-get install curl \
    && curl -fsSL https://github.com/pnpm/pnpm/releases/download/v$PNPM_VERSION/pnpm-linuxstatic-x64 -o /bin/pnpm \
    && chmod +x /bin/pnpm

ENTRYPOINT ["pnpm"]
```

and `cloudbuild.yaml`

```yaml
substitutions:
  _PNPM_VERSION: "6.31.0"

steps:
  - name: gcr.io/cloud-builders/docker
    args:
      - "build"
      - "--build-arg"
      - "PNPM_VERSION=${_PNPM_VERSION}"
      - "-t"
      - "gcr.io/$PROJECT_ID/pnpm:node-14"
      - "-f"
      - "Dockerfile"
      - "."
images:
  - "gcr.io/$PROJECT_ID/pnpm:node-14"

tags: ["monorepo"]
```

Having those two files you can now run `gcloud builds submit .` to have our docker with pnpm enabled.

What I've learned? That sometimes JS word hype about stuff a lot and it is always good to step back, asses - maybe do proof of concept. Also I've learned how to combine docker, pnpm and cloudbuild.
