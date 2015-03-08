---
layout: page
title: Interesting links
permalink: /links/
---


{% for l in site.data.links %}
<div class="md-col-6 mb2">
  <div class="overflow-hidden bg-white border rounded">
    <div class="p1 white bg-blue">
      <h4 class="m0">{{ l.title }}</h1>
    </div>
    <div class="p1">
      <p class="m0">{{ l.summary }}</p>
    </div>
  </div>
</div>
{% endfor %}

<hr>

<ul>
  {% for l in site.data.links %}
    <li>
      <a href="{{ l.url }}">{{ l.title }}</a>
      <p>{{ l.summary }}</p>
      <p class="h6">{{ l.tags }}</p>
    </li>
  {% endfor %}
</ul>

Last updated: {{ site.time | date_to_string }}
