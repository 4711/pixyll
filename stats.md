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

<small>Last updated: {{ site.time | date: '%-d. %M %Y., %H:%m' }} </small>


