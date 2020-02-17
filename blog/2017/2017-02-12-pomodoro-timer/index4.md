---
title: Pomodoro timer - how good was your pomodoro?
date: '2017-03-12T10:00Z'
slug: '/blog/2017/pomodoro-timer-how-good-was-your-pomodoro.html'
tags: 
    - javascript
    - pomodoro technique
readPrev: '/blog/2017/pomodoro-timer-breaks-localstorage.html'
---

**Hello! This week I made the main feature of my pomodoro timer -
checking if pomodoro was good or bad. I believe that is one of the ways
to measure your productivity. Let's get started!**

How to check how good your pomodoro was?
========================================

When did I decide that I want my pomodoro timer to record if my 25
minutes work was worth something I have this burning question: How to do
it? Some time ago I used a tool called
[Kanbanflow](https://kanbanflow.com/). It has great pomodoro extension
where you can select if your pomodoro was good. Based on that I started
thinking what if at the end of 25 minutes I display modal to the end
user: please select how good was your pomodoro?. Which this thought in
my head I start coding.

Modals in javascript
====================

First I need some HTML structure for my modal:

```html
<div class="is-hidden modal-overlay">
     <div class="modal">
       <h2 class="modal_question">How was your pomodoro?</h2>
       <div class="modal_buttons">
         <button class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored" data-productive="true">
           Productive
         </button>
         <button class="mdl-button mdl-js-button mdl-button--raised mdl-button--accent" data-productive="false">
           Not really productive
         </button>
       </div>
     </div>
</div>
```

I apply some styling - thanks to that when modal is displayed rest of
the web page is dimmed:

```css
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
}

.modal {
  padding: 20px 30px;
  width: 90%;
  max-height: calc(100% - 150px);
  position: relative;
  min-height: 300px;
  margin: 5% auto 0;
  background: #FFF;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
```

I apply some styling to buttons and questions too:

```css
.is-hidden {
  display: none;
}

.modal .modal_question {
  flex: 2;
}

.modal_buttons {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  flex: 1;
}

.modal_buttons .mdl-button {
  margin-right: 10px;
}
```

Thanks to that my modal looks like this:

![Modal for pomodoro timer](./pomodoro_modal.jpg)

As I have my CSS & HTML done right now it's time to write some code in
javascript.

Firstly, I have to add a new argument for entry in localStorage -
`wasGood`. It is boolean so I know if this time entry was good or not:

```javascript
function saveTimeEntryToLocalStorage(startSeconds, endSeconds, type, wasGood) {
  // rest of the function body
  const entry = {
    startTime,
    endTime,
    type,
    wasGood,
  };
  entries.push(entry);
  localStorage.setItem('entries', JSON.stringify(entries));
}
```

As the saving of entry cannot be invoked when timer stops - as the user
have to click the button first with productive or not productive
pomodoro I have to introduce two global variables so I can access them
not only from `timer` function:

```javascript
const modal = document.querySelector('.modal-overlay');
const modalButtons = modal.querySelectorAll('[data-productive]');
let now;
let then;

function timer(seconds, hasBreakAfter = true){
  now = Date.now();
  then = now + (seconds * 1000);
  // rest of timer body

}

modalButtons.forEach((button) => {
  button.addEventListener('click', closeModal);
});
```

The last 3 lines of code are setting up the event listeners for both of
buttons in the modal. When a user clicks one of them I run `closeModal`:

```javascript
function closeModal(event) {
  modal.classList.add('is-hidden');
  saveTimeEntryToLocalStorage(now, then, 'Pomodoro', event.target.dataset.productive);
  retrieveTimeEntryFromLocalStorage();
}
```

It closes modal by adding `is-hidden` which is equivalent to
`display: none`. Then I simply save entry and retrieve it. As I wanted
something different than `true` or `false` to be displayed to end user I
have updated `retriveTimeEntryFromLocalStorage`:

```javascript
function retrieveTimeEntryFromLocalStorage() {
  tableBody.innerHTML = entries.map(entry => `
     <tr>
       <td class="mdl-data-table__cell--non-numeric">${entry.wasGood === true ? '✔' : '✖'}</td>
     </tr>
  `).join('');
}
```

The last thing I have to do was to display modal when pomodoro ends:

```javascript
function timer(seconds, hasBreakAfter = true) {
  // function body

  if (secondsLeft < 0) {
    // do the break, display notfication, play sound
    if (hasBreakAfter) modal.classList.remove('is-hidden');
  }
}
```

And timer works! If you want to see it in action go
[here](https://krzysztofzuraw.github.io/pomodoro-timer/). That's all for
today blog post - stay tuned for the next. Feel free to comment!

Repo with this code is available on
[github](https://github.com/krzysztofzuraw/pomodoro-timer).

References
==========

-   [Modals in Pure ES6
    JavaScript](https://lowrey.me/modals-in-pure-es6-javascript/)
