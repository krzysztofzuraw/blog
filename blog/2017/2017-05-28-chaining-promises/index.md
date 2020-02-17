---
title: Chaining promises in JavaScript
date: '2017-05-28T10:00Z'
slug: '/blog/2017/chaining-promises-in-javascript.html'
tags: 
    - javascript
    - promise
---

**In this blog post, I will present to you how you can chain promises
JavaScript. Let's go!**

Recently I ended my small [side
project](https://krzysztofzuraw.github.io/all-roads-lead-to/) . I used
there google maps api to perform various tasks. All the responses from
Google API were asynchronous so I thought: let's wrap them in promises!
I did it and everything works as expected.

After a few days, I had this idea to present my project in
[r/javascript](https://www.reddit.com/r/javascript/comments/69z3tr/all_roads_lead_to/).
And I got code reviewed. Guys told me that I'm doing something wrong
here. I want to escape from callback hell but I got into promises
purgatory.

My code looks like this:

```javascript
geocodeAddress(placeValue).then((geocodedCoords) => {
    const mainWayPoint = createMainWaypoint(geocodedCoords);

    createPoint(map).then((startingCoords) => {
        createPoint(map).then((endCoords) => {
        calculateAndDisplayRoute(
            directionsService,
            directionsDisplay,
            mainWayPoint,
            startingCoords,
            endCoords,
        );
    });
});
```

Here lays the main logic of my application. When a user enters the name
of the place I geocode it in `geocodeAddress`. If everything is ok I
create the main point from these coordinates. In `createPoint`, I use
one time click on map event listeners so the user can create start and
end point. The last thing is to display route between those 2 points
with a waypoint.

I started digging a little bit into what is promises chaining and I was
able to refactor it to this form:

```javascript
geocodeAddress(placeValue)
    .then(geocodedCoords => createMainWaypoint(geocodedCoords, map))
    .then((mainWayPointCoords) => {
        mainWayPoint = mainWayPointCoords;
        return createPoint(map);
    })
    .then((startingPointCoords) => {
        startingPoint = startingPointCoords;
        return createPoint(map);
    })
    .then((endPoint) => {
        calculateAndDisplayRoute(mainWayPoint, startingPoint, endPoint, map);
    });
```

It's doing exactly the same but code is far more readable than before. I
can also add error catching with a `catch`. All code for this project is
on [github](https://github.com/krzysztofzuraw/all-roads-lead-to).

That's all for today! Feel free to comment - they are really valuable.
