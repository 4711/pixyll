---
layout: page
title: Interesting links
permalink: /links/
---

<ul>
  {% for l in site.data.links %}
    <li>
      <a href="{{ l.link }}">{{ l.title }}</a>
      <p>{{ l.summary }}</p>
    </li>
  {% endfor %}
</ul>



Last updated: {{ site.time }}
