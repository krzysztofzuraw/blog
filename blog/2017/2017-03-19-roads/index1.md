---
title: On building application using Google Maps API
date: '2017-03-26T10:00Z'
slug: '/blog/2017/building-application-using-google-maps-api.html'
tags: 
    - javascript
    - google maps
readNext: '/blog/2017/all-roads-lead-to.html'
---

**This blog post will be about my failure. Failure to understand how
javascript works but also what I learned along the way.**

What I wanted to accomplish this week
=====================================

I divide the task of writing this application in small chunks. Last time
I setup small form to which user can type a name of the place. Then this
form should disappear and a map should be visible. I wanted to have a
simple map with one marker in it. I was quite challenge to get it
working.

What problem I had
==================

Firstly I add some scripts to HTML so they allow me to load google maps
api and div so google maps know where should they be rendered:

```html
<div id="map"></div>
<script async defer
        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCRv_y2yX-QyB7LcQDZKPYaItS8p3AYEQg&callback=initMap">
 </script>
```

And there was the first problem - I wanted my map to occupy all
available place on screen but setting in CSS doesn't help:

```css
#map {
  height: 100%;
  width: 100%;
}
```

What I did instead is to give this problem a break and work on having a
map properly displayed.

To accomplish displaying map after hiding form I write this simple
function:

```javascript
function initMap() {
  searchForm.addEventListener('submit', (event) => {
    event.preventDefault();
    questionForm.classList.add('is-hidden');
    const mainPointCoords = geocodeAddress(searchForm.querySelector('[name=place]').value);
    const map = new google.maps.Map(
     mapElem,
     { zoom: 4, center: mainPointCoords });
  });
}
```

Name of the function - `initMap` should be the same as `callback`
parameter in Google Maps script declaration in HTML. In `initMap` I
prevent submitting form from reloading the page by
`event.preventDefault`. I hid the `questionForm` by applying
`display: none;`. The last thing before rendering map is to geocode
address from user input.

This is done in `geocodeAddress`:

```javascript
function geocodeAddress(address) {
  let mainPointCoords = {};
  const geocoder = new google.maps.Geocoder();
  geocoder.geocode({ 'address': address }, function (results, status) {
    if (status === 'OK') {
      mainPointCoords = {
        lat: results[0].geometry.location.lat(),
        lng: results[0].geometry.location.lng(),
      };
    } else {
      alert('Cannot find address');
    }
    return mainPointCoords;
});
```

What is happening here? I create local variable `mainPointCoords` which
will be an empty object if geocoding wouldn't result in `OK`. If
everything is good I just write latitude and longigute to object and
assign it to `mainPointCoords`.

Here the theory ends and problems started to appear. At the begging, I
started noticing that my map wasn't initializing at all. I setup
debugger in Chrome just to see that `mainPointCoords` is `undefined`.

Debugging further shows that application flow goes through geocodeAdress
and returns proper object but it is lost somewhere between.

What to do next?
================

I write this blog post to ask you - dear reader, to help me with this
problem. What I'm doing wrong? What can I change? What can be done
differently? Please write comment or email - I really appreciate this.

Repo with this code is available on
[github](https://github.com/krzysztofzuraw/all-roads-lead-to).
