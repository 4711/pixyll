---
layout: page
title: Interesting Links
permalink: /links/
---

{% for l in site.data.links reversed %}
<a href="{{ l.url }}"><h3>{{ l.title }}</h3>
    <p>{{ l.summary }}</p>
    <p class="h6">Tags: <i>{{ l.tags | join: ', ' }}</i> Added: {{ l.added }}</p>
</a>
<hr>
{% endfor %}

Last updated: {{ site.time | date_to_string }}

<!--
{% for l in site.data.links %}
<div class="md-col-6 mb2">
  <a class="overflow-hidden bg-white border rounded" href="{{ l.url }}">
    <div class="p1 white bg-blue">
      <h4 class="p1">{{ l.title }}</h4>
      <span class="right inline-block px1 white bg-gray rounded">{{ l.tags }}</span>
    </div>
    <div class="p1 clearfix">
      <p class="left m0">{{ l.summary }}</p>
    </div>
  </a>
</div>
{% endfor %}

<hr>
-->
