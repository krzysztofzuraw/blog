---
title: JSON Web Tokens in django application- part one
date: '2016-10-02T09:00Z'
slug: '/blog/2016/jwt-in-django-application-part-one'
tags:
  - python
  - django
  - jwt
---

**Recently I attended a workshop about web security. During these hours
I learnt quite a lot but one thing got my attention- JWT. Based on that
I decided to write a blog post series about how to use JSON Web Tokens
in simple django application. Today it is the first part of this
series.**

## What is JWT?

JWT aka JSON Web Tokens is a method of authentication. What it does: You
as a user first send a request to the server saying: I want to login!
And server gives you in response a long sequence of characters. As you
get this sequence you can use it as a way to tell the server that you
are the person you really are.

In a more technical sense: you send a request which logs you to service
for example headers with login and password. In response, you got
encrypted token. Then you want to get some info about another resource
on the server that requires authentication. So to your request you
simply add one more header with previously received token and that's
all! You are authenticated.

JSON Web Token looks like this:

```text
HEADER.PAYLOAD.SIGNATURE
```

The header is a JSON that consists of a type of token (JWT) and which
hash algorithm will be used (HMAC SHA256 or RSA). HMAC stands for
keyed-Hash Message Authentication Code. Message Authentication Code
(MAC) is used to confirm that message comes from the good sender and its
integrity has not been changed. Keyed-Hash stands for hashing MAC in
combination with a secret key.

The payload contains the claims. Claim store information user wants to
transmit and server can use to properly handle authentication. There are
a lot of registered claims but we will use only:

- "exp" (Expiration Time) Claim
- "nbf" (Not Before Time) Claim
- "iss" (Issuer) Claim
- "aud" (Audience) Claim
- "iat" (Issued At) Claim

Payload will look like this:

```json
{
  "exp": "1234567890",
  "name": "Krzysztof Zuraw"
}
```

Last part is a signature. It is basically the sum of all previously
mentioned parts encoded in base64 + secret.

## How can you use JWT and why?

When you get your response back from a server with JSON Web Token you
can use it in header like this:

```shell
Authorization: Bearer <JWT token>
```

In comparison with another method of authentication: SAML, JWT is more
compact. JSON format is widely used in programming word so there is no
problem with parsers for that format.

That's all for today and stay tuned for the next post in blog series
about JWT!

## Resources:

1.  <https://jwt.io/>

Special thanks to Kasia for being editor for this post. Thank you.
