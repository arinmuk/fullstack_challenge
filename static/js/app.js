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

srchbutton.on("click", function() {
    // Select the current count
    d3.event.preventDefault()
    var inputValue = inputElement.property("value")
    console.log(inputValue)
    if (inputValue===""){
        var filteredData=data
        inputValue=originalPlaceholder
    }
    else{
    var filteredData = data.filter(ufo => ufo.datetime === inputValue)
    console.log(filteredData)}

    tablefill(filteredData)
    d3.select("#datetime").property("value","")
    
    d3.select("#datetime").property("placeholder",inputValue)
})

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

tablefill(data)







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