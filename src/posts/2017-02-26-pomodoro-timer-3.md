---
title: Pomodoro timer - notifications
date: 2017-02-26
permalink: '/blog/2017/pomodoro-timer-notifications/index.html'
---

**Welcome! Today I will focus on notifications in JavaScript. Let's
go!**

## Notifications in JavaScript

I want my pomodoro timer to run in the background - I decided my website
will be one of many pinned tabs in my Chrome. But this statement makes
some complications - how do I know that my pomodoro ends? How do I tick
if this 25 minutes was good or bad? I need a way to tell a user that it
is time for a break. For this task, I will use notifications.

[JavaScript notification
standard](https://notifications.spec.whatwg.org/#notifications) says
that:

> A notification is an abstract representation of something that
> happened, such as the delivery of a message.

Cool! Exactly what I need - let's jump into the code.

## How I implemented notifications

At first, you have to ask a user for permission to display
notifications:

```javascript
let notificationPermission = false;

Notification.requestPermission().then((result) => {
  if (result === 'granted') {
    notificationPermission = true;
  }
});
```

At the beginning I setup variable that will be a flag for my code to
know if user grants permission to display notifications. This is done
below. `Notification.requestPermission()` returns promise so I call
`then` and if `result` is granted I set a flag variable to be true.

I want my notifications to be displayed when my time ends:

```javascript
function displayNotification() {
  if (!notificationPermission) return;
  const notification = new Notification("Time's up!", {
    icon: 'stopwatch.png',
  });

  notification.addEventListener('click', () => {
    window.focus();
  });
}

function timer(seconds) {
  // rest of the code

  if (secondsLeft < 0) {
    // rest of the if
    displayNotification();
  }
}
```

In `displayNotification` I check if user granted permission to see
notification, if not the function terminates. Then I create new
notification with stopwatch icon and `Time's up!` text. `notification`
can have event listener attached to `click` event so I did that so when
user clicks notification it will switch him/ her to pomodoro timer tab.

This is how my notification looks like:

{% img "2017-02-26-notification", "Notification", "Notification" %}


## What next?

That's all for today blog post! Feel free to comment. The next thing I
want to tackle is 5 and 15 min breaks between pomodoros.

Repo with this code is available on
[github](https://github.com/krzysztofzuraw/pomodoro-timer).

## References

- [Using the Notifications
  API](https://developer.mozilla.org/en-US/docs/Web/API/Notifications_API/Using_the_Notifications_API)

Special thanks to Kasia for being an editor for this post. Thank you.
