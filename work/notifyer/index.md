---
---
{% assign project = site.data.work.projects['notifyer'] %}

<a aria-hidden="true" class="work__image" href="{{ project.site-url }}" title="Visit {{ project.title }}" target="_blank" rel="external">
  ![{{ project.name }}](/assets/img/work/notifyer/img1.gif)
</a>  
Using Microsoft’s OneNote as a datastore, Notifyer utilizes OneNote’s API to retrieve a random note from a given section.  

Use case?  
- Get a daily quote from your curated collection.  
- Effortlessly resurface a buried quote and re-apply it to the present.  

<a href="{{ project.site-url }}" title="Visit {{ project.title }}" target="_blank" rel="external">Try {{ project.title }}</a>
<hr/>
Engagement: <a href="{{ project.site-url }}" title="Visit {{ project.name }}" target="_blank" rel="external">{{ project.engagement }}</a>  
Role: {{ project.role }}  
Stack: {{ project.stack }}