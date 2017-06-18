---
---
{% assign project = site.data.work.projects['krafted'] %}

Krafted By Us is a web agency based in Santa Monica, CA. During my contract tenure I was primarily tasked with responsive template development for client websites running Expression Engine or Craft CMS.

Project work includes:
<ul>
  {% for site in project.sites %}
  <li><a href="{{ site.url }}" title="Visit {{ site.title }}" target="_blank" rel="external">{{ site.title }}</a></li>
  {% endfor %}
</ul>
<hr/>
Engagement: {{ project.engagement }}  
Role: {{ project.role }}  
Stack: {{ project.stack }}
