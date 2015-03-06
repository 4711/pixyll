---
layout: page
title: About Pixyll
permalink: /stats/
---

<script type="text/javascript"
          src="https://www.google.com/jsapi?autoload={
            'modules':[{
              'name':'visualization',
              'version':'1',
              'packages':['corechart']
            }]
          }"></script>

<script type="text/javascript">
      google.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Day', 'Traffic In [GB]', 'Traffic Out [GB]'],
{% for t in site.data.traffic %}
['{{ t.logday }}', {{ t.gb_in }}, {{ t.gb_out }}],  
{% endfor %}
        ]);

        var options = {
          title: 'Company Performance',
          curveType: 'function',
          legend: { position: 'bottom' }
        };

        var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

        chart.draw(data, options);
      }
</script>

### Firewall Traffic

<div id="curve_chart" style="width: 900px; height: 500px"></div>

Last updated {{ page.time }}

SQL Select

    select 
      '- { logday: ' || logday ||
      ', pkt_in: '   || sum(raw_in_pktcount) ||
      ', pkt_out: '  || sum(raw_out_pktcount) ||
      ', mb_in: '    || to_char(sum(raw_in_pktlen)  / 1024 / 1024)  ||
      ', mb_out: '   || to_char(sum(raw_out_pktlen) / 1024 / 1024)  || 
      ' }' as yaml
    from accounting 
    where logday > current_date - interval '10' day
    group by logday
    order by logday;


