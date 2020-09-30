function init() {
    data = [{
      x: [1, 2, 3, 4, 5],
      y: [1, 2, 4, 8, 16] }];
    Plotly.newPlot("plot", data);
};
  
d3.selectAll("#dropdownMenu").on("change", updatePlotly);
function updatePlotly() {
    var dropdownMenu = d3.select("#dropdownMenu");
    var dataset = dropdownMenu.property("value");
  
    var xData = [1, 2, 3, 4, 5];
    var yData = [];
  
    if (dataset === 'dataset1') {
      yData = [1, 2, 4, 8, 16];
    };
  
    if (dataset === 'dataset2') {
      yData = [1, 10, 100, 1000, 10000];
    };
  
    var trace = {
      x: [xData],
      y: [yData],
    };
    Plotly.restyle("plot", trace);
};

function init() {
  var selector = d3.select("#selDataset");

  d3.json("samples.json").then((data) => {
    console.log(data);
    var sampleNames = data.names;
    sampleNames.forEach((sample) => {
      selector
        .append("option")
        .text(sample)
        .property("value", sample);
    });
})}

function optionChanged(newSample) {
  buildMetadata(newSample);
  buildCharts(newSample);
}

function buildMetadata(sample) {
  d3.json("samples.json").then((data) => {
    var metadata = data.metadata;
    var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
    var result = resultArray[0];
    var Panel = d3.select("#sample-metadata");
    Panel.html("");

    Object.entries(result).forEach(([key, value]) => {
      Panel.append("h6").text(`${key}: ${value}`)
    })
    
  });
} 

function buildCharts(sample) {    
  d3.json("samples.json").then((data) => {
    var samples = data.samples;
    var filterArray = samples.filter(sampleObject => sampleObject.id == sample);
    var result = filterArray[0];
    var sample_values = result.sample_values;
    var otu_ids = result.otu_ids;
    var otu_labels = result.otu_labels;   
  
    // Bar Chart
    var trace2 = {
      x: sample_values.slice(0,10).reverse(),
      y: otu_ids.slice(0,10).map(otuID => `OTU ${otuID}`).reverse(),
      text: otu_labels.slice(0,10).reverse(),
      name: "Greek",
      type: "bar",
      orientation: "h"
    };
    
    var data = [trace2];

    var layout = {
      title: "To10 OTUs found in " +sample,
      margin: {l: 100, r: 100, t: 100, b: 100}
    };

    Plotly.newPlot("bar", data, layout);  
  

    // Bubble Chart
    var trace3 = {
      x: otu_ids,
      y: sample_values,
      text: otu_labels,
      mode: 'markers',
      marker: {
      size: sample_values,
      color: otu_ids,
      colorscale:"Electric"
      }
    };

    var data = [trace3];

    var layout = {
      title: 'Bacteria Cultures per Sample',
      showlegend: false,
      hovermode: 'closest',
      xaxis: {title:"OTU ID: " +sample},
      margin: {t:30}
    };
    
    Plotly.newPlot('bubble', data, layout); 
  });
}

init();