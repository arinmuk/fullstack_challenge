// from data.js
//d3.event.preventDefault()
var tableData = data;
console.log(tableData)
var originalPlaceholder= d3.select("#datetime").property("placeholder")
console.log(originalPlaceholder)
// YOUR CODE HERE!
var tbody = d3.select("tbody")
var srchbutton = d3.select("#filter-btn")
console.log(srchbutton.text())
var inputElement = d3.select("#datetime")
var inputValue = inputElement.property("value")
var filteredData = data.filter(ufo => ufo.datetime === inputValue)

var citydrpdn=d3.select("#d3-citydrpdn")
var statedrpdn=d3.select("#d3-statedrpdn")
var countrydrpdn=d3.select("#d3-countrydrpdn")
var shapedrpdn=d3.select("#d3-shapedrpdn")


srchbutton.on("click", function() {
    


    d3.event.preventDefault()
    var inputValue = inputElement.property("value")
    var citydrpdn=d3.select("#d3-citydrpdn")
    var cdrpdn = citydrpdn.property("value")

    var statedrpdn=d3.select("#d3-statedrpdn")
    var sdrpdn = statedrpdn.property("value")

    var countrydrpdn=d3.select("#d3-countrydrpdn")
    var ctrydrpdn = countrydrpdn.property("value")

    var shapedrpdn=d3.select("#d3-shapedrpdn")
    var shpdrpdn = shapedrpdn.property("value")

    console.log(inputValue)
    console.log("dropdown value:",cdrpdn)
    
    if (cdrpdn==="" && inputValue===""){
    
    //if (inputValue===""){
        var filteredData=data
        inputValue=originalPlaceholder
    }
    else if (inputValue!="" && cdrpdn===""){    
        var filteredData = data.filter(ufo => ufo.datetime === inputValue)
        console.log(filteredData)}
    else if (inputValue==="" && cdrpdn!=""){
        var filteredData = data.filter(ufo => ufo.city === drpdn)
        console.log(filteredData)}
    else {
        var filteredData = data.filter(ufo => (ufo.city === drpdn && ufo.datetime === inputValue) )
        console.log(filteredData)
    }
    
    if(sdrpdn!=""){
        filteredData = data.filter(ufo => ufo.state === sdrpdn)
    }
    if(ctrydrpdn!=""){
        filteredData = data.filter(ufo => ufo.country === ctrydrpdn)
    }
    if(shpdrpdn!=""){
        filteredData = data.filter(ufo => ufo.shape === shpdrpdn)
    }



    tablefill(filteredData)
    d3.select("#datetime").property("value","")
    d3.select("#d3-citydrpdn").property("value","")
    d3.select("#d3-statedrpdn").property("value","")
    
    d3.select("#d3-countrydrpdn").property("value","")
    d3.select("#d3-shapedrpdn").property("value","")
    
    d3.select("#datetime").property("placeholder",inputValue)

})

/////////////////////TABLE FILL DATA/////////////////////////
function tablefill(data){

d3.select("tbody").selectAll("td").remove()
//d3.selectAll("td").remove()
data.forEach((ufo) => {
    var row = tbody.append("tr");
    Object.entries(ufo).forEach(([key, value]) => {
      var cell = tbody.append("td");
      cell.text(value);
    });
  })};
///////////////////////CITY COMBO FILL DATA //////////////////////
  function citydrpfill(data){
    var cityarr = []
    citydrpdn.append("option")
    data.forEach((ufo)=>{
    Object.entries(ufo).forEach(([key, value]) => {
      ;
      if (key==="city"){
            cityarr.push(value)
            
            //var cell = citydrpdn.append("option")
            //cell.text(value)
        };


  })
})
const distcity= [...new Set(cityarr)]
distcity.forEach(element=>{
var cell = citydrpdn.append("option")
            cell.text(element)

})
}
//////////////////////////////////////////////////////////////////

///////////////////////state COMBO FILL DATA //////////////////////
function statedrpfill(data){
    var statearr = []
    statedrpdn.append("option")
    data.forEach((ufo)=>{
    Object.entries(ufo).forEach(([key, value]) => {
      ;
      if (key==="state"){
        statearr.push(value)
            //var cell = statedrpdn.append("option")
            //cell.text(value)
        };


  })
})
const diststate= [...new Set(statearr)]
diststate.forEach(element=>{
var cell = statedrpdn.append("option")
            cell.text(element)
})
}
//////////////////////////////////////////////////////////////////

///////////////////////country COMBO FILL DATA //////////////////////
function countrydrpfill(data){
    var countryarr=[]
    countrydrpdn.append("option")
    data.forEach((ufo)=>{
    Object.entries(ufo).forEach(([key, value]) => {
      ;
      if (key==="country"){
            countryarr.push(value)
            //var cell = countrydrpdn.append("option")
            //cell.text(value)
        };


  })
})
const distcntry= [...new Set(countryarr)]
distcntry.forEach(element=>{
var cell = countrydrpdn.append("option")
            cell.text(element)
})

}
//////////////////////////////////////////////////////////////////

///////////////////////shape COMBO FILL DATA //////////////////////
function shapedrpfill(data){
    var shparr=[]
    shapedrpdn.append("option")
    data.forEach((ufo)=>{
    Object.entries(ufo).forEach(([key, value]) => {
      ;
      if (key==="shape"){
          shparr.push(value)
            //var cell = shapedrpdn.append("option")
            //cell.text(value)
        };


  })
})
const distshp= [...new Set(shparr)]
distshp.forEach(element=>{
var cell = shapedrpdn.append("option")
            cell.text(element)
})
}
//////////////////////////////////////////////////////////////////







tablefill(data)
citydrpfill(data)
statedrpfill(data)
countrydrpfill(data)
shapedrpfill(data)







// var submit = d3.select("#submit");

// submit.on("click", function() {

//   // Prevent the page from refreshing
//   d3.event.preventDefault();

//   // Select the input element and get the raw HTML node
//   var inputElement = d3.select("#patient-form-input");

//   // Get the value property of the input element
//   var inputValue = inputElement.property("value");

//   console.log(inputValue);
//   console.log(people);

//   var filteredData = people.filter(person => person.bloodType === inputValue);

//   console.log(filteredData);

//   // BONUS: Calculate summary statistics for the age field of the filtered data

//   // First, create an array with just the age values
//   var ages = filteredData.map(person => person.age);