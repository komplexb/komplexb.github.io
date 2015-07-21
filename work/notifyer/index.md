---
title: Notifyer
site-url: http://notifyer-quotes.herokuapp.com
role: Front-end Developer, Back-end Developer
engagement: Personal Project
stack: Ruby on Rails
---


<a href="{{ page.site-url }}" title="Visit {{ page.title }}" target="_blank">
  ![Notifyer](assets/img/work/notifyer/img1.png)
</a> 
Notifyer is a proof of concept solution to a problem I've been thinking about for a long time. Namely:

- How do I get a daily quote from my curated collection?
- How can I effortlessly resurface a buried quote so I can re-apply it's inspiration and lessons to the present?

Using Microsoft's OneNote as a datastore, Notifyer utilizes OneNote's API to retrieve notes from a given section. A note is then selected to be pushed to your devices via Pushbullet's API.

The ideal use case is to schedule Notifyer's random method to be invoked periodically. However for the purposes of this demo, users can select a note to be pushed immediately.  

<a href="{{ page.site-url }}" title="Visit {{ page.title }}" target="_blank">Try {{ page.title }}</a>
<hr/>
Role: {{ page.role }}  
Engagement: {{ page.engagement }}  
Stack: {{ page.stack }}