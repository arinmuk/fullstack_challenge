function buildMetadata(sample) {

  // @TODO: Complete the following function that builds the metadata panel
  urlstring="/metadata/"+sample
  //console.log(urlstring)
  // Use `d3.json` to fetch the metadata for a sample
    // Use d3 to select the panel with id of `#sample-metadata`
    d3.json(urlstring).then(function(sample_m) {
      var objsample=sample_m
      //console.log(objsample)
      //var htmlclear = d3.select(".sample-metadata").html()
      //console.log(htmlclear)
      var htmlclear = d3.select(".panel-body")
      //console.log(htmlclear)
      Object.entries(objsample).forEach(([key,value])=>{
        var row = htmlclear.append("h5")
        row.text(key+" : "+value)

      })
    // Use `.html("") to clear any existing metadata

    // Use `Object.entries` to add each key and value pair to the panel
    // Hint: Inside the loop, you will need to use d3 to append new
    // tags for each key-value in the metadata.

    // BONUS: Build the Gauge Chart
    // buildGauge(data.WFREQ);
})}

function buildCharts(sample) {
  var workarr=[]
  var samp_arr=[]
  var toptenarr=[]
  // @TODO: Use `d3.json` to fetch the sample data for the plots
  urlstring="/samples/"+sample
  otuid=[]
  otulabels=[]
  svalues=[]
  console.log(urlstring)
    d3.json(urlstring).then((sample_m) => {
      console.log(sample_m)
      otuid=sample_m.otu_ids
      otulabels=sample_m.otu_labels
      svalues=sample_m.sample_values
      var length=svalues.length
      for (var j=0;j<=length;j++)  {
            workarr=[]
            for (element in sample_m){
            workarr.push(sample_m[element][j])

          }
          console.log(workarr)
          samp_arr.push(workarr)
         

    }
    //console.log(samp_arr)
    samp_arr.sort(function(a,b){
      return b[2]-a[2]
    })
    console.log(samp_arr)
    toptenarr=samp_arr.slice(0,10)
    console.log(toptenarr)


  
  
      // @TODO: Build a Bubble Chart using the sample data

    // @TODO: Build a Pie Chart
      
    // HINT: You will need to use slice() to grab the top 10 sample_values,
    // otu_ids, and labels (10 each).
})}

function init() {
  // Grab a reference to the dropdown select element
  var selector = d3.select("#selDataset");

  // Use the list of sample names to populate the select options
  d3.json("/names").then((sampleNames) => {
    sampleNames.forEach((sample) => {
      //console.log(sample)

      selector
        .append("option")
        .text(sample)
        .property("value", sample);
    });

    // Use the first sample from the list to build the initial plots
    const firstSample = sampleNames[0];
    console.log(firstSample)

    buildCharts(firstSample);
    buildMetadata(firstSample);
  });
}

function optionChanged(newSample) {
  // Fetch new data each time a new sample is selected
  d3.event.preventDefault()
  buildCharts(newSample);
  buildMetadata(newSample);
}

// Initialize the dashboard
init();
