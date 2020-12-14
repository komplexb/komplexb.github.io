---
title: Triggering Vue UI Updates from Electron's Main Process
createdAt: 2017-01-14
---

*Solution to a problem I encountered while building [Notifyer][]*  

[![Download Notifyer](https://svbtleusercontent.com/7zpsqdjssdwfta.gif)](https://goo.gl/MX9hbW)

One of the main features of [Notifyer][] is the ability to schedule quotes (or really any message) to be triggered once daily. In addition to being scheduled, users can trigger a random quote with a shortcut key. As I implemented this feature, I discovered that though the OS's notification would popup, the application interface was not updated with the new quote.

[![Download Notifyer](https://svbtleusercontent.com/ucx9o6h02mpsw.png)](https://goo.gl/MX9hbW)

Why wasn't it working?!?! The scheduling and shortcut key functionality lives in the main process, while just about everything that the user sees and interacts with lives in the render process. The renderer listened to my message from the main process, and called `handleRandomNote` as instructed but would only run the OS's native stuff, like notifications.

[![ipc.png](https://svbtleusercontent.com/inxjtvfl3hrqg.png)](https://svbtleusercontent.com/inxjtvfl3hrqg.png)
> Source: [http://jlord.us/essential-electron/#stay-in-touch](http://jlord.us/essential-electron/#stay-in-touch)

So I sought another solution; if clicking the "Note" button in the app updated the UI and triggered the notification, then maybe I could simulate a button click within the Vue component.

```js
ipc.on('trigger-random-note', function () {
	let cmpNote = vm.$children.filter(child => child.$el.id === 'note')
	cmpNote[0].$refs.btnRandomNote.click()
})
```

Once the shortcut key event is triggered or the scheduled time occurs, the main process sends a `trigger-random-note` message that the renderer receives and takes action.

[Notifyer]: https://goo.gl/MX9hbW "Download Notifyer"