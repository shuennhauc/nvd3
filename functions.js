//CHART 1
 nv.addGraph(function () {
     var chart = nv.models.lineChart() // Initialise the lineChart object.
         .useInteractiveGuideline(true).margin({ // Add some CSS Margin to the chart.
            top: 30,
            right: 20,
            bottom: 50,
            left: 80
        }) // Turn on interactive guideline (tooltips)
     ;
     chart.xAxis
         .axisLabel('TimeStamp (Year)') // Set the label of the xAxis (Vertical)
     ;
     chart.yAxis
         .axisLabel('Degrees (c)') // Set the label of the xAxis (Horizontal)
         .axisLabelDistance(10)
         .tickFormat(d3.format('.02f')) // Rounded Numbers Format.
     ;
     d3.select('#averageDegreesLineChart svg') // Select the ID of the html element we defined earlier.
         .datum(temperatureIndexJSON) // Pass in the JSON
         .transition()
         .duration(500) // Set transition speed
         .call(chart) // Call & Render the chart
     ;
     nv.utils.windowResize(chart.update); // Intitiate listener for window resize so the chart responds and changes width.
     return;
 });

 //PIE 1
 var height = 200;
 var width = 200;

 nv.addGraph(function() {
     var chart = nv.models.pieChart()
         .x(function(d) { return d.key })
         .y(function(d) { return d.values[4].value })
         .width(width)
         .height(height)

     d3.select("#worldpop_pie svg")
         .datum(populationBySexAndCountryJSON)
         .transition()
         .duration(1200)
         .attr('width', width)
         .attr('height', height)
         .call(chart);

     nv.utils.windowResize(chart.update);
     return chart;
 });

//CHART 2
nv.addGraph(function () {
    var chart = nv.models.multiBarChart()
        .x(function (d) {
            return d.label; // Configure x axis to use the "label" within the json.
        })
        .y(function (d) { // Configure y axis to use the "value" within the json.
            return d.value;
        })
        .margin({ // Add some CSS Margin to the chart.
            top: 30,
            right: 20,
            bottom: 50,
            left: 100
        })
        .showControls(false) // Turn of switchable control
        .stacked(true); // Force stacked mode.

    chart.xAxis
        .axisLabel('Countries'); // add label to the horizontal axis

    chart.yAxis
        .axisLabel('Values') // add label to vertical axis (sc)
        .axisLabelDistance(30)
        .tickFormat(d3.format('0f')); // Round the yAxis values

    d3.select('#worldPopulationMultiStackedBar svg') // Select the html element by ID
        .datum(populationBySexAndCountryJSON) // Pass in the data
        .transition()
        .duration(500) // Set transition speed
        .call(chart); // Call & Render chart

    nv.utils.windowResize(chart.update); // Intitiate listener for window resize so the chart responds and changes width.

    return;
});

//CHART 3
nv.addGraph(function () {
    var chart = nv.models.multiBarChart()
        .x(function (d) {
            return d.label; // Configure x axis to use the "label" within the json.
        })
        .y(function (d) { // Configure y axis to use the "value" within the json.
            return d.value;
        }).margin({ // Add some CSS Margin to the chart.
            top: 30,
            right: 20,
            bottom: 50,
            left: 100
        })
        .showControls(false) // Turn of switchable control
        .stacked(false) // Force stacked mode.

    chart.xAxis
        .axisLabel('Countries') // add label to the horizontal axis

    chart.yAxis
        .axisLabel('Value')
        .axisLabelDistance(30)
        .tickFormat(d3.format('0f')); // Round the yAxis values


    d3.select('#worldPopulationMultiBar svg') // Select the html element by ID
        .datum(populationBySexAndCountryJSON) // Pass in the data
        .transition().duration(500) // Set transition speed
        .call(chart); // Call & Render chart

    nv.utils.windowResize(chart.update); // Intitiate listener for window resize so the chart responds and changes width.

    return;
});
