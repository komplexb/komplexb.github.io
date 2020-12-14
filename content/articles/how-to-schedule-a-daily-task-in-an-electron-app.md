---
title:  How to schedule a daily task in an Electron app
createdAt: 2017-01-14
---


*Solution to a problem I encountered while building [Notifyer][]*  

[![diligent_notification.gif](https://svbtleusercontent.com/7nvgvhyfe2sekq.gif)](https://svbtleusercontent.com/7nvgvhyfe2sekq.gif)

One of the main features of [Notifyer][] is the ability to schedule quotes (or really any message) to be triggered once daily. The thing is I couldn't get the schedule to work overnight or even a few hours later. I'd suspend my computer, wake it later, stare at the clock as the scheduled time passed and nothing would happen.

After adding some logging, re-reading [node-schedule][] documentation, and [filing an issue][], I finally stumbled upon a solution.
```js
electron.powerMonitor.on('resume', () => {
	log.info(`computer awake: refresh schedule for ${scheduledFor}`)
	rescheduleRandomNote(scheduledFor)
})
```

[![Schedule](https://svbtleusercontent.com/jmiuiidpc484ug.png)](https://svbtleusercontent.com/jmiuiidpc484ug.png)

It occurred to me, probably after reading through old node-schedule issues, that perhaps the problem is with suspending the computer. If node-schedule somehow forgot my instructions when it sleeps, then maybe I need to help it remember when it wakes. So I re-applied the schedule on the [resume event][]; and it worked!


[Notifyer]: https://goo.gl/MX9hbW "Download Notifyer"
[node-schedule]: https://www.npmjs.com/package/node-schedule
[filing an issue]: https://github.com/node-schedule/node-schedule/issues/319 "See GitHub issue for details"
[resume event]: http://electron.atom.io/docs/api/power-monitor/ "Electron's powerMonitor event"