// from data.js
var tableData = data;
var tbody = d3.select('tbody');

tableData.forEach(function(ufoData) {
    var row = tbody.append("tr")
    Object.entries(ufoData).forEach(function ([key, value]){
        var cell = row.append("td")
        cell.text(value)

    })
});
// Do I need a button? What does the searchbar function as if there's no actual button to click (ie., it runs when you hit enter. 
// Can that enter hit function as a button too or is that a different event?)
// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("#datetime");

// Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);

// Complete the event handler function for the form
function runEnter() {
     // Prevent the page from refreshing
    d3.event.preventDefault();

     // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");

  // Get the value property of the input element
    var inputValue = inputElement.property("value");
    console.log(inputValue)

      
  // filter data by input value
    var filteredData = tableData.filter(ufoData => ufoData.datetime === inputValue);

    console.log(filteredData);
    tbody.html("")

    filteredData.forEach(function(ufoData) {
        var row = tbody.append("tr")
        Object.entries(ufoData).forEach(function ([key, value]){
            var cell = row.append("td")
            cell.text(value)

        })
    });

};
