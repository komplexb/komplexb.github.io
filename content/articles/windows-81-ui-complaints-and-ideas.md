---
title: Windows 8 UI Complaints and Ideas
description: My thoughts on using Windows 8 on the Surface RT
createdAt: 2014-01-30
---

I've been using Windows 8.1 on a Surface for about a month now. It is a beautiful operating system that is delightful to see and use, but like most things in life, there is room for improvement. As an Interaction Designer, using the OS awakens discontented observationalism; mindless utility is often interrupted by ponderings upon gestures and the behavior of dialogs. It soon became apparent that I might as well collate these thoughts and observations and send them off to Microsoft, in the hopes that someone is listening.

>Discontented observationalism is the designer’s modus operandi. Design is fundamentally about improvement. To be ever heedful takes a special mind. One that observes in great detail to the extent of scrutinizing the subject, sometimes to the grievance of those around. - [Morgan Knutson](http://articles.morganallanknutson.com/were-designers)

## Live Tiles
The good thing about live tiles is that content is glance-able, and it actually increases engagement with applications that utilize it. By showing information, it elicits a desire to view/interact with the information. The thing is live tiles aren't matching a reasonable mental model that some people have for it. Here is a model that could increase the utility of the feature: tile content should deep link to the content it previews; if the People app shows me a friend's status update, when I click it it should bring me to that friend's status so I can see all of it and comment. This mental model is not unique to me as a techie/developer/designer; recently my mother was using my Surface for the first time, she saw a photo of her self and my father slide up on the Photos tile, she wanted to see it so she quickly tapped it, of course this simply launched the Photos  app, but to her dismay, it didn't show her photo, she had to look for it buried as it was in the camera roll of 1600+ photos. Defaulting the "open" behavior to load "last seen tile content" would of course disrupt the mental model of other users who simply want to open a particular app, so how can we facilitate both? Here are two options:  
- Allow the user to set the default behavior on a per-app basis
- Associate a gesture with the behavior to load "last seen tile content". Tap and pull/swipe/drag down appears to work best based on the current constraints of existing gestures on the start screen.

## Photos App
For starters, full screen images need to display basic EXIF information so I know which file I am looking at. The option to toggle basic EXIF information such as file-name, file size and image dimensions would be useful for filing and sorting purposes. Also why can't I copy the image I am looking at via the context menu or select it with a long press? Here's a scenario: I posted some family photos to SkyDrive, mom and I are reviewing them on the Surface, she want's me to print some. I swipe through the photos and she tells me which one she wants to print, but I have no easy way to collate them, I resort to taking screenshots of each one she likes. Since screenshots are automatically placed in a folder, I can easily find them and then match them to the actual photo when I'm ready to print them. Now this is a bit counter-intuitive; ideally I would have liked to be able to:  
- Select the ones I need and copy them all to a "print" folder
- Utilize some kind of copy-to/move-to function on the current image  

## Context Menu's
There ought to be some consistency in how things are selected or context menus are raised in Windows, especially when the app is built by MS. You increase cognitive load when I have to do a different gesture for the same behavior, since now I have to remember the context to do the right gesture. I propose the long press as the universal method of selecting items and raising their context menu. Right now you have:  
- Modern/Classic Desktop: Long Press
- Skydrive/Pictures App: Swipe down 
- Xbox Music: Swipe left   

## Share Charm
The Windows 8 share charm is a great idea, reminiscent of the old "send to" context menu option, with "social sauce" sprinkled on it. It's tiny problem is the absence of any indication of a scroll bar. There is no affordance indicating that the list is scrollable. Usually a bit of the content outside the current viewport is displayed to indicate that there is more content horizonally or vertically, however this behavior is not consistent with the share charm. This could be remedied by always displaying the scrollbar when the content is too long, or by adding a graphic or textual indication that there is more.  

>The consumer design problem is, “How do I make this device as intuitive as possible?” or “How can I streamline the process of getting someone the file he wants?” People care about speed, efficiency, clarity, and delight. - [Mark Wilson](http://www.fastcodesign.com/3023244/microsofts-windows-8-is-the-perfect-os-that-nobody-wants)

Here's to hoping my suggestions bring the above to the consumer.