---
title: On setting up Next.js with Docker on Google Cloud
pubDate: 2021-10-27
slug: 2021/on-setting-up-next.js-with-docker-on-google-cloud
---

One might wonder why would anyone consider Google Cloud as a hosting provider if there's [Vercel](https://vercel.com/)?

You personally, or your organization most likely already has an infrastructure that's
capable of handling Next.js - you just need to build your app in the Docker.

## Next.js and Docker

You can use Next.js example for Docker from [GitHub](https://github.com/vercel/next.js/tree/canary/examples/with-docker) but here's a few hints you might find useful.

1. Docker uses yarn internally, so if you're an NPM user, you need to adjust a `Dockerfile` in a few places.

```docker
# Install dependencies only when needed
FROM node:14-alpine AS deps
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
RUN npm ci

# Rebuild the source code only when needed
FROM node:14-alpine AS builder
WORKDIR /app
COPY . .
COPY --from=deps /app/node_modules ./node_modules
RUN npm run build

# Production image, copy all the files and run next
FROM node:14-alpine AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

USER nextjs

EXPOSE 3000

# Next.js collects completely anonymous telemetry data about general usage.
# Learn more here: https://nextjs.org/telemetry
# Uncomment the following line in case you want to disable telemetry.
# ENV NEXT_TELEMETRY_DISABLED 1

CMD ["npm", "start"]
```

2. One of the most important parts is `COPY --from=builder /app/next.config.js ./`.
   If you're using a custom Next.js config, remember to have this line uncommented.

Docker is running nicely on a local machine but now it is time to enter the Google Cloud domain.

## Google Cloud Build and Run

First question: what is [Google Cloud Build](https://cloud.google.com/build)? Google says it's their CI/CD platform.
But you can utilize it to build your docker images. What we are using it for?

1. Run test/lint/tsc on PR
2. Build Next.js application inside docker and tell [Google Cloud Run](https://cloud.google.com/run/) to use it

For the first one we are using following `cloudbuild.pr.yaml`:

```yaml
steps:
  - id: install
    name: "node:14-alpine"
    entrypoint: npm
    args: ["ci"]
  - id: tsc
    name: "node:14-alpine"
    entrypoint: npm
    args: ["run", "tsc"]
    waitFor: ["install"]
  - id: lint
    name: "node:14-alpine"
    entrypoint: npm
    args: ["run", "lint"]
    waitFor: ["install"]
  - id: test
    name: "node:14-alpine"
    entrypoint: npm
    args: ["test"]
    waitFor: ["install"]
options:
  machineType: "E2_HIGHCPU_8"
```

We are using alpine version of node to match used in `Dockerfile` above.

For the second one we are using `cloudbuild.deploy.yaml`:

```yaml
steps:
  - id: build
    name: "gcr.io/cloud-builders/docker"
    args:
      [
        "build",
        "--tag",
        "eu.gcr.io/application:$COMMIT_SHA",
        "--tag",
        "eu.gcr.io/application:latest",
        ".",
      ]
    env:
      - "NEXT_PUBLIC_KEY=SOME_KEY"
  - id: push
    waitFor: ["build"]
    name: "gcr.io/cloud-builders/docker"
    args: ["push", "eu.gcr.io/application:$COMMIT_SHA"]
  - id: push-latest
    waitFor: ["build"]
    name: "gcr.io/cloud-builders/docker"
    args: ["push", "eu.gcr.io/application:latest"]
  - id: deploy
    waitFor: ["push"]
    name: "gcr.io/cloud-builders/gcloud"
    args:
      - "run"
      - "deploy"
      - "application"
      - "--image"
      - "eu.gcr.io/application:$COMMIT_SHA"
      - "--region"
      - "europe-west1"
      - "--platform"
      - "managed"
      - "--allow-unauthenticated"
images:
  - "eu.gcr.io/application:$COMMIT_SHA"
options:
  machineType: "E2_HIGHCPU_8"
```

Steps are as follows:

1. Build Docker image and tag it with current commit hash (Google Cloud Build gives us `$COMMIT_SHA`) + latest tag. In this step we are also embedding `NEXT_PUBLIC_` env variables as they need to be present in [build time](https://nextjs.org/docs/basic-features/environment-variables#exposing-environment-variables-to-the-browser).
2. Push tags
3. Tell cloud run to use just the tagged Docker image with Next.js application

Note about yaml naming convention - we currently have two `cloudbuilds.yaml` in repo, so it doesn't cost us much to have them in top root folder, but as a rule of thumb, if there are 3 or 4 such files e.g. one to deploy to stage and one to production, it's better to put those files inside `cloudbuild` folder instead.

## Summary

This blog post was about a few thoughts on how to setup Google Cloud with Next.js.

- Works almost out of the box based on [Next.js example](https://github.com/vercel/next.js/tree/canary/examples/with-docker) and [YouTube walkthrough](https://www.youtube.com/watch?v=Pd2tVxhFnO4). You can add small adjustments like in section above.
- [Google Cloud Build](https://cloud.google.com/build) and [Google Cloud Run](https://cloud.google.com/run/) also works fine - it is the fastest way of deploying images as you work in one environment that is responsible for building images and deploying them. One thing for DevOps people is to move cloud build and run configurations into something like Terraform. For this one stay tuned for next blog post.

Huge thanks for this blog post editors - Kuba & Ilia.
