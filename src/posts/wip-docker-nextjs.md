---
title: On setting up Next.js with Docker on Google Cloud
date: Last Modified
permalink: '/blog/2021/nextjs-docker-gcloud/index.html'
spellcheck: off
---

In this blog post I want to write about my fidings while setting up Google Cloud infrastructure that
enables Next.js application to work on this cloud provider.

You may ask at first why do not use already great hosting provider for Next.js apps? Of course I'm
talking here about Vercel. We analysie their pricing and we asked ourselves - don't we have a already
existing infrastructure that we pay for a lot? Maybe we can use it? It turns out that is possbile -
you just need to build your Next.js app in the Docker.

## Next.js in the docker

You can use next.js example for docker https://github.com/vercel/next.js/tree/canary/examples/with-docker
but I want to give you a few hints:

1. If you are using npm you need to adjust a Dockerfile in a few places so you are not developing
   localy using npm and then docker is using yarn - of course if you want to go on.

```dockerfile
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

2. One of the most important part of above dockerfile is `COPY --from=builder /app/next.config.js ./`.
   Why? I spend a couple of hours searching for solution on why in production build images using next.js
   image do now work - it turns out that I was not enclosing `next.config.js`. So if you are using custom
   next.js config - and I think you will if you want to use sentry or vanilla extract or other change
   in default next.js - remeber to uncomment this line as it is commented with example.

Docker is running nicely on local machine but now it is time to enter Google Cloud domain. First one
is Google Cloud Build.

## Google Cloud Build

First question: what is Google Cloud Build? Google is saying that it is their CI/CD platform. I say
it is a little bit forgotten tool to build your docker images. What we are using it for? Two tasks:

1. Run test/lint/tsc on PR
2. Build next.js application inside docker and tell Google Cloud Run to use it

- Dockerfile
  - nextjs config
- Gcloud
  - Gcloud build
  - Gcloud run
