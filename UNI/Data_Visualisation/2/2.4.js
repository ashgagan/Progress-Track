
function init() {
    var sightings;
    var w = 500;
    var h = 100;

    function barChart(sightings) {
        var svg = d3.select("#chart")
        .append("svg")
        .attr("width", w)
        .attr("height", h);

        svg.selectAll("rect")
            .data(sightings)
            .enter()
            .append("rect")
            .attr("x", function(d, i) {
                return i * (w / sightings.length);
            })
            .attr("y", function(d) {
                return h - d.wombat * 4;
            })
            .attr("width", function() {
                return (w / sightings.length) - 2;
            })
            .attr("height", function(d) {
                return d.wombat * 4;
            })
            .attr("fill", "teal");
    }



    d3.csv("task_2.4.csv").then(function(data) {
        console.log(data)
        sightings = data;
        barChart(sightings);


    });

    };

window.onload = init;
