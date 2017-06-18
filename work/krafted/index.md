---
---
{% assign project_handle = 'krafted' %}
{% assign project = site.data.work.projects[project_handle] %}

<div id="slidy-container" class="{{ project_handle }}">
	<figure id='slidy'>
  {% for site in project.sites %}
    <img src="/assets/img/work/{{ project_handle }}/{{ site.image }}" data-caption="">
  {% endfor %}
	</figure>
</div>

<div>
  Krafted By Us is a web agency based in Santa Monica, CA. During my contract tenure I was primarily tasked with responsive template development for client websites running Expression Engine or Craft CMS.

  Project work includes:
  <ul>
    {% for site in project.sites %}
    <li><a href="{{ site.url }}" title="Visit {{ site.title }}" target="_blank" rel="external">{{ site.title }}</a></li>
    {% endfor %}
  </ul>
</div>
<hr/>
Engagement: {{ project.engagement }}  
Role: {{ project.role }}  
Stack: {{ project.stack }}
