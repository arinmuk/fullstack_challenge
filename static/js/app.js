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

srchbutton.on("click", function() {
    


    d3.event.preventDefault()
    var inputValue = inputElement.property("value")
    var citydrpdn=d3.select("#d3-citydrpdn")
    var drpdn = citydrpdn.property("value")
    console.log(inputValue)
    console.log("dropdown value:",drpdn)
    
    if (drpdn==="" && inputValue===""){
    
    //if (inputValue===""){
        var filteredData=data
        inputValue=originalPlaceholder
    }
    else if (inputValue!="" && drpdn===""){    
        var filteredData = data.filter(ufo => ufo.datetime === inputValue)
        console.log(filteredData)}
    else if (inputValue==="" && drpdn!=""){
        var filteredData = data.filter(ufo => ufo.city === drpdn)
        console.log(filteredData)}
    else {
        var filteredData = data.filter(ufo => (ufo.city === drpdn && ufo.datetime === inputValue) )
        console.log(filteredData)
    }
    tablefill(filteredData)
    d3.select("#datetime").property("value","")
    d3.select("#d3-citydrpdn").property("value","")
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
    citydrpdn.append("option")
    data.forEach((ufo)=>{
    Object.entries(ufo).forEach(([key, value]) => {
      ;
      if (key==="city"){
            var cell = citydrpdn.append("option")
            cell.text(value)};


  })
})}
//////////////////////////////////////////////////////////////////


tablefill(data)
citydrpfill(data)







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