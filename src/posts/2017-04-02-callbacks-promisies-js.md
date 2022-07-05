---
title: Callbacks & promises in JS for newbies
date: 2017-04-02
---

**You are a newbie in JavaScript? You want to know a little bit more
about asynchronous nature of this language? Join me!**

## Problem

I was working on my project that is using Google Maps. I stumbled upon
an issue - how I display a map after submitting a form with geocoded
address in it?

After some research, I found that I need first geocode and then if it
passes to render the map with a custom marker.

I did this and it doesn't work! I try one more time and one more. After
one hour I decided to write a question on
[stackoverflow](http://stackoverflow.com/questions/43029193/display-map-after-form-submission-with-geocoded-address).

Guys there flagged it as a duplicate and told me you should look into
how to handle an asynchronous call. It was confusing - how this is near
rendering a map after submitting a form?

I dig more and ask a question on
[reddit](https://www.reddit.com/r/learnjavascript/comments/61nq5t/display_map_after_form_submission_with_geocoded/).
Then I got my answer - use callback or promise!

## Solution

Based on an answer from
[adavidmiller](https://www.reddit.com/user/adavidmiller) from reddit I
was able to write this code:

```javascript
function geocodeAddress(address, callback) {
  const geocoder = new google.maps.Geocoder();
  geocoder.geocode(
    {
      address,
    },
    function (results, status) {
      if (status === "OK") {
        callback({
          lat: results[0].geometry.location.lat(),
          lng: results[0].geometry.location.lng(),
        });
      } else {
        alert("Cannot find address");
      }
    }
  );
}
```

There is a extra argument to this function called `callback`. It will be
executed if everything goes properly. What can be this callback? Look at
this:

```javascript
function onGeocodeComplete() {
  const map = new google.maps.Map(mapElem, {
    zoom: 4,
    center: coords,
  });
  const marker = new google.maps.Marker({
    position: coords,
    map,
  });
}
```

In this function, I create a new map that is centered in `coords`. How
will JavaScript know local variable `coords`? Because it is callback
passed to `geocodeAddress`:

```javascript
function initMap() {
  searchForm.addEventListener("submit", (event) => {
    event.preventDefault();
    questionForm.classList.add("is-hidden");
    const place = searchForm.querySelector("[name=place]").value;
    geocodeAddress(place, onGeocodeComplete);
  });
}
```

Look at the last line in this function - this is a place where I pass
`address` which is value from submitted form and I pass `callback` which
is whole `onGeocodeComplete` function.

You may say 'It looks neat - let's use callbacks! but in many cases this
can lead to so called [callback hell](http://callbackhell.com/). To
avoid that in ES6 is new way to handle asynchronous JavaScript -
`Promise`.

The same function - `geocodeAddress` written using promise:

```javascript
function geocodeAddressPromise(address) {
  return new Promise((resolve, reject) => {
    const geocoder = new google.maps.Geocoder();
    geocoder.geocode(
      {
        address,
      },
      (results, status) => {
        if (status === "OK") {
          resolve({
            lat: results[0].geometry.location.lat(),
            lng: results[0].geometry.location.lng(),
          });
        } else {
          reject("Cannot find address");
        }
      }
    );
  });
}
```

The code looks almost the same as in callback but this function returns
promise. If the promise was resolved - a.k.a everything goes smoothly it
will return lat & lng. In other case information about the error will be
returned.

How to handle such promise? You can use that:

```javascript
function initMap() {
  searchForm.addEventListener("submit", (event) => {
    event.preventDefault();
    questionForm.classList.add("is-hidden");
    const place = searchForm.querySelector("[name=place]").value;
    geocodeAddressPromise(place).then(
      (response) => {
        onGeocodeComplete(response);
      },
      (error) => {
        alert(error);
      }
    );
  });
}
```

I resolve a promise by calling `then` on it. I pass here arrow function
with a response if the promise was resolved. In another case, I
display an error to the user.

# What I've learn

I learn quite a lot from having this kind of problem:

1.  what does it mean to write and use asynchronous code in Javascript
2.  what is difference between callback & promise
3.  how to write code using both callback & promise

That's all for today! Feel free to comment - all are realy valuable for
me. I want to thank one more time
[adavidmiller](https://www.reddit.com/user/adavidmiller) for taking his
time to show me how to write code using callbacks.

# Update 10.07.2017

As [Daniel Levy](https://github.com/justsml) pointed out in comment you
can refactor my code, so `geocodeAddressPromise` will look like this:

```javascript
// Updated code for https://krzysztofzuraw.com/blog/2017/callbacks-promises-in-js-for-newbies.html
const Promise = require('bluebird');
const geocoder = new google.maps.Geocoder();
// Most JS API's let you use Bluebird.promisify[All]
// Unfortunately Google's APIs are a little dumb when it comes to promises and Node callbacks.
const geocodeAddressPromise = (address) => new Promise((resolve, reject) => geocoder
  .geocode({ address }, (results, status) => status === 'OK'
    ? resolve({
      lat: results[0].geometry.location.lat(),
      lng: results[0].geometry.location.lng(),
    }) : reject(new Error('Cannot find address'))
}));
```

New thing here is a better promise API -
[bluebird](http://bluebirdjs.com/docs/getting-started.html) as well as
more javascripty syntax.

`onGeocodeComplete` returns both `map` and `marker`:

```javascript
function onGeocodeComplete(coords) {
  const map = new google.maps.Map(mapElem, {
    zoom: 4,
    center: coords,
  });
  const marker = new google.maps.Marker({
    position: coords,
    map,
  });
  return { map, marker };
}
```

The last thing is `initMap`:

```javascript
function initMap() {
  searchForm.addEventListener("submit", (event) => {
    event.preventDefault();
    questionForm.classList.add("is-hidden");
    const place = searchForm.querySelector("[name=place]").value;
    geocodeAddressPromise(place).then(onGeocodeComplete).catch(alert);
  });
}
```

Which will catch errors along the way. All credits for this update goes
to Daniel. Thanks man!
