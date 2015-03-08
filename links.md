---
layout: page
title: Interesting links
permalink: /links/
---

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

{% for l in site.data.links %}
<div class="md-col-6 mb2">
  <div class="overflow-hidden bg-white border rounded">
    <div class="p2 white bg-blue">
      <h4 class="m0">{{ l.title }}</h1>
    </div>
    <div class="p1">
      <p class="m0">{{ l.summary }}</p>
    </div>
    <div class="p1 bg-darken-1">
      <span class="h6 bold inline-block px1 white bg-blue rounded">{{ l.tags }}</span>
    </div>
  </div>
</div>
{% endfor %}
