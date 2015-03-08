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
      <p>{{ l.tags }}</p>
    </li>
  {% endfor %}
</ul>



Last updated: {{ site.time }}
