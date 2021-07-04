---
title: What I learned by adding webmentions to my blog
date: 2020-05-04
permalink: '/blog/2020/webmentions-on-blog/index.html'
---

I've recently added [webmentions](https://indieweb.org/Webmention) to my blog.
By using them you can get reactions/comments from e.g Twitter into your site.
In such a way you are at least one step further in owning your content - especially one that you
post on social media. You can read more about all IndieWeb movement [here](https://indieweb.org/).
Below are a couple of points that I learned from adding webmetions to my website:

- I'm really grateful for tutorials made by [Knut Melvær](https://www.knutmelvaer.no/blog/2019/06/getting-started-with-webmentions-in-gatsby/)
  and [Sung codes](https://sung.codes/blog/2020/02/17/clientside-webmentions-in-gatsby/) - without them,
  it will take me a lot longer to add webmentions. If you need tutorials on how to add webmentions to your blog - I totally can recommend those.
  The rest of the points assume that you read those two tutorials
- When you need to validate your microformats - you can use netlify deployment previews instead of deploying and checking it every time on the production website as I did
- You need to somehow filter webmentions to get the right ones for the blog - I recommend you
  follow advice from [here](https://www.knutmelvaer.no/blog/2019/06/getting-started-with-webmentions-in-gatsby/#07ba6529dc86)
  and add full url + slug to your gatsby context. You may avoid frustration on filtering and thinking
  that you are smart than the others - you aren't
- If you happen to try figure out what are all possible values of `wmProperty` - please ping me as I
  did not yet found documentation for that so right now only `mentions` from twitter are being shown
  on my site - maybe this blog post will trigger other so I can test them 😃
- Querying for `webMentionEntry` isn't the same as querying for `allWebMentionEntry` and then filtering the results.
  The first one will give you only one entry for given url - where the other get all entries that you can use.
- In the end, two more resources that are worth reading: [Static Indieweb pt2: Using Webmentions](https://mxb.dev/blog/using-webmentions-on-static-sites/)
  & [Clientside Webmentions](https://www.swyx.io/writing/clientside-webmentions/)
