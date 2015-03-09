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
          animation: {
            startup: true
          },
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
      google.load("visualization", "1.1", {packages:["bar"]});
      google.setOnLoadCallback(drawChart);
      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Year', 'Sales', 'Expenses', 'Profit'],
          ['2014', 1000, 400, 200],
          ['2015', 1170, 460, 250],
          ['2016', 660, 1120, 300],
          ['2017', 1030, 540, 350]
        ]);

        var options = {
          chart: {
            title: 'Company Performance',
            subtitle: 'Sales, Expenses, and Profit: 2014-2017',
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

-----
    <script type="text/javascript" src="https://www.google.com/jsapi"></script>
    <script type="text/javascript">

      // Load the Visualization API and the piechart package.
      google.load('visualization', '1.0', {'packages':['corechart']});

      // Set a callback to run when the Google Visualization API is loaded.
      google.setOnLoadCallback(drawChart);

      // Callback that creates and populates a data table,
      // instantiates the pie chart, passes in the data and
      // draws it.
      function drawChart() {

        // Create the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Topping');
        data.addColumn('number', 'Slices');
        data.addRows([
          ['Mushrooms', 3],
          ['Onions', 1],
          ['Olives', 1],
          ['Zucchini', 1],
          ['Pepperoni', 2]
        ]);

        // Set chart options
        var options = {'title':'How Much Pizza I Ate Last Night',
                       'width':400,
                       'height':300};

        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
        chart.draw(data, options);
      }
    </script>

<div id="chart_div" style="width: auto; max-width: 100%; height: 600px;"></div>

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
