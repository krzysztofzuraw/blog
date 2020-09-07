---
title: Don't use defaults
date: '2017-05-07T10:00Z'
slug: '/blog/2017/dont-use-defaults'
tags:
  - opinion
---

**Recently I bought simple LTE router. While reading through manual I
noticed something interesting.**

## Why leaving insecure defaults can be a problem?

Everyone who buys this model will have the same settings. For example
accessing the main router dashboard. Just type 192.168.1.1 and
admin/admin. You are inside!

Isn't that a little bit dangerous?

I think yes. Then I thought about all this tools and frameworks that we
use to build web applications. Do we really change their security
default settings?

A few studies: [power of
default](https://www.nngroup.com/articles/the-power-of-defaults/), [do
users change their settings
?](https://www.uie.com/brainsparks/2011/09/14/do-users-change-their-settings/)
shows that not especially.

Leaving insecure defaults can lead to for example [MongoDB
hack](https://snyk.io/blog/mongodb-hack-and-secure-defaults/). Imagine
how this can affect your customer.

## What can you do?

I use mostly Django for web applications. As you may know, Django comes
with [admin
panel](https://docs.djangoproject.com/en/1.11/ref/contrib/admin/). By
default, this panel is under `host/admin`. So far so good but what if
you don't change it in production? If attacker will recognize that your
web server is using Django he/she will first try to look for admin on
default address. You can change that by providing `ADMIN_URL` in
settings file.

This is one of the examples how to change even this innocent looking
settings to make it harder or prevent an attacker from accessing your
data.

What is always good is to read security documentation for every tool
that you will be using like
[Postgres](https://www.enterprisedb.com/blog/first-rule-securing-postgres-don%E2%80%99t-be-dumb)
or [redis](https://redis.io/topics/security).

## Conclusion

Change insecure default settings in production!

That's all for today! This was my first blog post from category opinion
so feel free to comment on my opinions.
