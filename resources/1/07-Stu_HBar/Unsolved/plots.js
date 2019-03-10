// @TODO: Complete the following sections
var x= []
var y=[]
console.log(data);
data.sort(function(a,b){
    return (b.greekSearchResults-a.greekSearchResults)
})
data=data.slice(0,11)
data=data.reverse()
// Sort the data array using the greekSearchResults value
data.map(element=>{
    x.push(element.greekName)
    y.push(element.greekSearchResults)
})

// Slice the first 10 objects for plotting

// Trace1 for the Greek Data
var trace = {
    x:y,
    y:x,
    type:"bar",
    orientation: "h"
}

// set up the data variable
var data=[trace]
// set up the layout variable
var layout = {
    title:"greek god search results",
    xaxis:{title:"search counts"},
    yaxis:{title:"gods"}
}
// Render the plot to the div tag with id "plot"
Plotly.newPlot("plot",data,layout)