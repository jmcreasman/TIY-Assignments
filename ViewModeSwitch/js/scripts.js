//Note: Tracer bullets removed after the code worked

//declaring the variables for find the specfic div and a elements needed
var div = document.querySelector("div#cbp-vm");
var grid = document.querySelector("a.cbp-vm-icon.cbp-vm-grid");
var list = document.querySelector("a.cbp-vm-icon.cbp-vm-list");

/*this function targets the div element and gives it the needed classes to
display the list data. It also does the same thing to the a elements.
*/
var clickActionList = function (eventObject) {
  div.className = "cbp-vm-switcher cbp-vm-view-list";
  list.className = "cbp-vm-icon cbp-vm-list cbp-vm-selected";
  grid.className = "cbp-vm-icon cbp-vm-grid";
};

/*this function targets the div element and gives it the needed classes to
display the grid data. It also does the same thing to the a elements.
*/
var clickActionGrid = function (eventObject) {
  div.className = "cbp-vm-switcher cbp-vm-view-grid";
  grid.className = "cbp-vm-icon cbp-vm-grid cbp-vm-selected";
  list.className = "cbp-vm-icon cbp-vm-list";
};

// These allow the buttons to be clicked and runs the function
grid.addEventListener('click', clickActionGrid);
list.addEventListener('click', clickActionList);
