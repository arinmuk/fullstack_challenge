console.log(data);
// YOUR CODE HEREvar 
var x=[]
var gsrch = []
var rsrch=[]

data.map(element=>{
    x.push(element.pair)
    gsrch.push(element.greekSearchResults)
    rsrch.push(element.romanSearchResults)

})
console.log(x)
console.log(gsrch)
console.log(rsrch)
var trace1 = {
    x:x,
    y:gsrch,
    name:"Greek",
    type:"line"
};
var trace2 = {
    x:x,
    y:rsrch,
    name:"Roman",
    type:"line"
};
var data = [trace1,trace2]

var layout = {
    title:"Greek search Vs Roman Search",
    xaxis:{title:" Greek_roman Pair"},
    yaxis:{title:"Search Count"}
}
Plotly.newPlot("plot",data,layout)