function init() {
    var sightings;
    var w = 500;
    var h = 200;

    function barChart(sightings, year, chart) {
        var svg = d3.select(`#${chart}`)
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
                return (h - d[year] * 4)-20;
            })
            .attr("width", function() {
                return (w / sightings.length) - 2;
            })
            .attr("height", function(d) {
                return d[year] * 4;
            })
            .attr("fill", "lightcoral");

            svg.selectAll("text")
                        .data(sightings)
                        .enter()
                        .append("text")
                        .text(function(d) {
                            return d.animal;
                        })
                        .attr("x", function(d, i) {
                            return i * (w / sightings.length)  + ((w / sightings.length) - 2) / 2;
                        })
                        .attr("y", function(d) {
                            return h - 3;
                        })
                        .attr("text-anchor", "middle")
                        .attr("fill", "coral");
    }

    d3.csv("pet_ownership.csv").then(function(data) {
        console.log(data);
        sightings = data;
        barChart(sightings, "pets2019", "chart1");
        barChart(sightings, "pets2021", "chart2");
    });
}

window.onload = init;
