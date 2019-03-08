// The new student and grade to add to the table
var newGrade = ["Wash", 79];
var grades = [["Malcolm", 80], ["Zoe", 85], ["Kaylee", 99], ["Simon", 99], ["Wash", 79]];
// Use D3 to select the table
var table1 = d3.select(".grades table")
// Use d3 to create a bootstrap striped table
// http://getbootstrap.com/docs/3.3/css/#tables-striped
table1.attr("class","table table-bordered")
// Use D3 to select the table body
grades.forEach(function(element){
tb=d3.select("tbody")
// Append one table row `tr` to the table body
var row = tb.append("tr")
// Append one cell for the student name
row.append("td").text(element[0])
row.append("td").text(element[1])
// Append one cell for the student grade
})