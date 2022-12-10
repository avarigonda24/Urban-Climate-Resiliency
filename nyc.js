var xArray = [2020,2025,2030,2035,2040,2045,2050,2055,2060,2065,2070,2075,2080,2085,2090,2095];
var y1Array = [47.7, 48.1, 48.4, 48.9, 49.2, 49.5, 49.6, 50.1, 50.4, 50.6, 50.7, 50.9, 51.1, 51.2, 51.2, 51.7];
var y2Array = [47.8, 48.2, 48.6, 49, 49.6, 50.2, 50.8, 51.5, 52.2, 52.9, 53.5, 54, 54.6, 55.1, 55.8, 56.5]

// Define Data
var data = [
    {
        x: xArray,
        y: y1Array,
        mode:"lines",
        name: "3.2ºF increase by 2100"
    },
    {
        x: xArray,
        y: y2Array,
        mode: "lines",
        name: "6.7ºF increase by 2100"
    }
];

// Define Layout
var layout = {
  xaxis: {range: [2015, 2100], title: "Year"},
  yaxis: {range: [47, 57], title: "Degrees Farenheit"},  
  title: "Projected Annual Average Temperatures in NY (2020-2095)",
  plot_bgcolor:"#EEEEEE",
  paper_bgcolor:"#FFF3"
};

// Display using Plotly
Plotly.newPlot("myPlot", data, layout);