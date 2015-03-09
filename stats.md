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
  {% when '1' %}{% assign month = 'Januar' %}
  {% when '2' %}{% assign month = 'Februar' %}
  {% when '3' %}{% assign month = 'M&auml;rz' %}
  {% when '4' %}{% assign month = 'April' %}
  {% when '5' %}{% assign month = 'Mai' %}
  {% when '6' %}{% assign month = 'Juni' %}
  {% when '7' %}{% assign month = 'Juli' %}
  {% when '8' %}{% assign month = 'August' %}
  {% when '9' %}{% assign month = 'September' %}
  {% when '10' %}{% assign month = 'Oktober' %}
  {% when '11' %}{% assign month = 'November' %}
  {% when '12' %}{% assign month = 'Dezember' %}
{% endcase %}

<small>Last updated: {{ month }} {{ site.time | date: '%d, %H:%m' }}</small>


