---
---
{% assign project = site.data.work.projects['notifyer'] %}

<a aria-hidden="true" class="work__image" href="{{ project.site-url }}" title="Visit {{ project.title }}" target="_blank" rel="external">
  ![{{ project.name }}](/assets/img/work/notifyer/img1.png)
</a>  
Notifyer is a proof of concept solution to a problem I've been thinking about for a long time. Namely:

- How do I get a daily quote from my curated collection?
- How can I effortlessly resurface a buried quote so I can re-apply it's inspiration and lessons to the present?

Using Microsoft's OneNote as a datastore, Notifyer utilizes OneNote's API to retrieve notes from a given section. A note is then selected to be pushed to your devices via Pushbullet's API.

The ideal use case is to schedule Notifyer's random method to be invoked periodically, perhaps as a <a href="assets/img/work/notifyer/zapier.png" target="_blank" rel="external">Zapier App</a>.  
Notifyer is still under development.

<a href="{{ project.site-url }}" title="Visit {{ project.title }}" target="_blank" rel="external">Try {{ project.title }}</a>
<hr/>
Engagement: {{ project.engagement }}  
Role: {{ project.role }}  
Stack: {{ project.stack }}