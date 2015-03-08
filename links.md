---
layout: page
title: Interesting links
permalink: /links/
---

<ul>
  {% for l in site.data.links %}
    <li>
      <a href="{{ post.link }}">{{ post.title }}</a>
      <p>{{ post.summary }}</p>
    </li>
  {% endfor %}
</ul>



Last updated: {{ site.time }}
