function init() {
  var data = [{
    values: [19, 26, 55, 88],
    labels: ["Spotify", "Soundcloud", "Pandora", "Itunes"],
    type: "pie"
  }];

  var layout = {
    height: 600,
    width: 800
  };

  Plotly.plot("pie", data, layout);
}

function updatePlotly(newdata) {
  // YOUR CODE HERE
  // Use `Plotly.restyle` to update the pie chart with the newdata array
  var PIE = document.getElementById("pie");
  Plotly.restyle(PIE, "values", [newdata]);
}

function getData(dataset) {
  // YOUR CODE HERE
  // create a select statement to select different data arrays (YOUR CHOICE)
  // whenever the dataset parameter changes. This function will get called
  // from the dropdown event handler.
  
    
    switch (dataset) {
    case "UK":
      data = [11, 22, 33, 49];
      break;
    case "Canada":
      data = [19, 29, 39, 67];
      break;
    case "USA":
      data = [100, 200, 300, 123];
      break;
    default:
      data = [30, 70, 40, 121];
    }
    updatePlotly(data);
  }
  


init();
