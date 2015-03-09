---
layout: page
title: Firewall Traffic
permalink: /stats/
---

<script type="text/javascript" src="https://www.google.com/jsapi"></script>
<script type="text/javascript">
      google.load("visualization", "1.1", {packages:["bar"]});
      google.setOnLoadCallback(drawChart);
      function drawChart() {
                        var data = google.visualization.arrayToDataTable([
          ['Day', 'Traffic In [GB]', 'Traffic Out [GB]'],
{% for t in site.data.traffic %}['{{ t.logday }}', {{ t.gb_in | round: 2 }}, {{ t.gb_out | round: 2 }}], {% endfor %}
          ]);

        var options = {
          chart: {
            title: 'Daily Traffic'
          },
          isStacked: true,
          animation: {
            startup: true
          },
          bars: 'horizontal' // Required for Material Bar Charts.
        };

        var chart = new google.charts.Bar(document.getElementById('barchart_material'));

        chart.draw(data, options);
      }
    </script>

<div id="barchart_material" style="width: 900px; height: 500px;"></div>

{% assign m = site.time | date: "%-m" %}
{% case m %}
  {% when '1' %}Januar
  {% when '2' %}Februar
  {% when '3' %}M&auml;rz
  {% when '4' %}April
  {% when '5' %}Mai
  {% when '6' %}Juni
  {% when '7' %}Juli
  {% when '8' %}August
  {% when '9' %}September
  {% when '10' %}Oktober
  {% when '11' %}November
  {% when '12' %}Dezember
{% endcase %}

<small>Last updated: {{ site.time | date: '%B %d, %Y %H:%m' }}</small>


