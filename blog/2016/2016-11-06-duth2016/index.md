---
title: Django Under The Hood 2016 recap
date: '2016-11-06T20:00Z'
slug: '/blog/2016/duth-2016-recap.html'
tags: 
    - django
    - conference
---

**From the beginning I really wanted to contribute to Django. I asked a
friend of mine- "Do you know where I can start contributing?" She
answers- "Go to Django Under The Hood". So I went. This is my small
recap of this very event.**

Day one
=======

After wandering a little bit around the city I finally got to the venue
and the talks started- the first one was Channels by Andrew Godwin.
Until then I had heard about this topic but I hadn't really go into
details for what it is useful for. Andrew presented a very
thought-through understanding of what channels really are and for what
they can be used. But I would like to see them in production to see how
this gonna work. As a guy who hadn't heard about this topic before I
liked it very much.

Right after that was a talk about testing by Ana Balica. She started by
introducing about how testing in django evolved which I really liked.
Then there was an introduction what is happening when you execute test
suite via django. And what is happening in various testcases classes and
clients in Django. I really liked the segment about tools that you can
use to exhance your testing and 8 tips on how to speed up tests. Another
really interesting thing. You can find slides
[here](https://speakerdeck.com/anabalica/duth-testing-in-django).

The last talk on this day was debugging by Aymeric Augustin. It was a
talk about how to speed up your page load. As it turns out backend is
responsible for only 20% of page load. Good thing to consider when
improving performance. To speed your page load you should start by
improving your frontend and then go to the backend. When it comes to
backend I heard some interesting ideas on how to improve performance.

Day two
=======

The second day started with a keynote by Jennifer Akullian. It was a
talk about mental health in IT. I found this topic really interesting
and I was happy that it has been raised.

Next talk was a more technical one about validation by Loïc Bistuer. It
was a really interesting talk about forms and validation. It was deeply
technical which sometimes for me was difficult to understand but it is
very good- when something isn't comfortable you don't learn.

Then there was a talk about javascript by Idan Gazit. It was a talk that
gave me a lot because of my rising interest in JavaScript. I heard about
various tools and what it means to write modern javascript. I also heard
about promises- the thing that is right now on top in javascript world
so I heard it every other talk from this subject :). But overally talk
gave me a lot of information that I can use further.

Next one was a database backends talk by Michael Manfre. It was diving
deep into django ORM to show how to develop new database backend for
Microsoft MSSQL. A lot of useful info.

After a coffee break, there was a talk about open source founding by
Nadia Eghbal. Nice talk about what it means to find founder for open
source projects and what challenges you may have along the way

The last talk was about Instagram and how it uses django by Carl Meyer.
It was amazing talk! I really liked how they evolved and what was
replaced or improved along the way. The funny thing was about Justin
Bieber- his photos (especially likes to this photos) heat up the
postgres database. I enjoyed the way the instagram handle performance.

Day three & four
================

As the talks day ended time has come for sprints! There were held in
another location of Amsterdam but I found it comfortable too. Also, the
experience was really nice as about 300 people were developing the same
framework at the same time. At the beginning of the sprint, I decided to
work on some GeoDjango stuff. I was able to close
[one](https://code.djangoproject.com/ticket/11094) and write some
[documentation](https://code.djangoproject.com/ticket/27133). Awesome
time!

Conclusion
==========

It was a great time in Amsterdam! Talks were deeply technical and
sprints productive. Superb organization. Highly recommended to everyone!

Special thanks to Kasia for being editor for this post. Thank you.
