---
title: Executing scripts when docker starts
pubDate: 2022-12-11T16:09:52Z
slug: 2022/executing-scripts-when-docker-starts
---

I [recently](https://github.com/saleor/saleor-dashboard/pull/2516) needed to execute a shell script when Docker is starting. Why? I wanted dynamically take environment variables from the `.env` file and convert them to JSON objects in `index.html`.

It turns out that NGINX docker image has a special folder called `/docker-entrypoint.d/`. It will take every shell script left there and execute it while running the container. Perfect for my case. What I learned as well (from [Francisco Marques](https://github.com/tofran)) is that there is a two-digit convention for naming Linux scripts. Why? It allows docker to execute them one by one in sorted order. In my case I wanted the shell script to run after internal docker scripts has already finished running so I put a `50` number at the beginning of the script name.

## Summary

If you want to run a shell script when building a Docker container put a script inside `/docker-entrypoint.d` folder (e.g by `COPY` inside `Dockerfile`). Make sure it has a number at the beginning of the script name so the script will be executed in proper order.
