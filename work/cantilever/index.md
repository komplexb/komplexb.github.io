---
---
{% assign project_handle = 'cantilever' %}
{% assign project = site.data.work.projects[project_handle] %}

<div id="slidy-container" class="{{ project_handle }}">
	<figure id='slidy'>
  {% for site in project.sites %}
    <img src="/assets/img/work/{{ project_handle }}/{{ site.image }}" data-caption="">
  {% endfor %}
	</figure>
</div>

<div>
  Cantilever is a boutique digital agency that creates quality websites and web applications. As a Frontend Developer, I’m primarily tasked with responsive template development and integration with ExpressionEngine, Shopify and Craft CMS.

  Project work includes:
  <ul>
    {% for site in project.sites %}
    <li><a href="{{ site.url }}" title="Visit {{ site.title }}" target="_blank" rel="external">{{ site.title }}</a></li>
    {% endfor %}
  </ul>
</div>
<hr/>
Engagement: <a href="{{ project.site-url }}" title="Visit {{ project.name }}" target="_blank" rel="external">{{ project.engagement }}</a>  
Role: {{ project.role }}  
Stack: {{ project.stack }}
