---
layout: page
title: Interesting Links
permalink: /links/
---

{% assign links = (site.data.links | sort: 'added') %}
{% for l in links reversed %}
<a href="{{ l.url }}"><h3>{{ l.title }}</h3>
{% if l.thumb %}
<img  class="right" src="{{ site.baseurl }}/images/{{ l.thumb }}"></img>
{% endif %}
<p>{{ l.summary }}</p>
<p class="h6">Added: {{ l.added }}<span class="right">Tags: {{ l.tags | join: ', ' }}</span></p>
</a>
<hr class="clearfix">
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
