---
layout: page
title: Firewall Traffic
permalink: /stats/
---

<script type="text/javascript"
          src="https://www.google.com/jsapi?autoload={
            'modules':[{
              'name':'visualization',
              'version':'1.1',
              'packages':['bar']
            }]
          }"></script>

<script type="text/javascript">
      google.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Day', 'Traffic In [GB]', 'Traffic Out [GB]'],
{% for t in site.data.traffic %}['{{ t.logday }}', {{ t.gb_in | round: 2 }}, {{ t.gb_out | round: 2 }}], {% endfor %}
          ]);

        var options = {
          title: 'Daily Traffic',
          //curveType: 'fuction',
          bar: { groupWidth: '75%' },
          isStacked: true,
          legend: { position: 'bottom' }
        };

        var chart = new google.charts.Bar(document.getElementById('curve_chart'));

        chart.draw(data, options);
      }
</script>

<div id="curve_chart" style="width: auto; max-width: 100%; height: 600px;"></div>

Last updated: {{ site.time }}


-----

<script type="text/javascript">
function drawVisualization() {
  // Create and populate the data table.
  var data2 = google.visualization.arrayToDataTable([
    ['Year', 'Austria', 'Bulgaria', 'Denmark', 'Greece'],
    ['2003',  1336060,    400361,    1001582,   997974],
    ['2004',  1538156,    366849,    1119450,   941795],
    ['2005',  1576579,    440514,    993360,    930593],
    ['2006',  1600652,    434552,    1004163,   897127],
    ['2007',  1968113,    393032,    979198,    1080887],
    ['2008',  1901067,    517206,    916965,    1056036]
  ]);

  // Create and draw the visualization.
  new google.visualization.BarChart(document.getElementById('bc')).
      draw(data2,
           {title:"Yearly Coffee Consumption by Country",
            width:600, height:400,
            vAxis: {title: "Year"},
            hAxis: {title: "Cups"},
            isStacked: true}
      );
}
</script>

<div id="bc" style="width: auto; max-width: 100%; height: 600px;"></div>
