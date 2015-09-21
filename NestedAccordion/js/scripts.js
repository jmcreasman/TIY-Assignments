//Note: Tracer bullets removed after the code worked.

var clickAction = function(eventObject) { //
  // The eventObject represents a mouse click event.  The event has a property (currentTarget (in our case h3/h4.cbp-nttrigger)) that represents the
  // DOM element for which the event applies (i.e., the listener target).  The parentElement of the event target
  // element is the li tag we seek.
  var liElement = eventObject.currentTarget.parentElement;
if (liElement.className === "cbp-ntopen") { //if the li element has class of cbp-ntopen when clicked, remove that class (closing the accordion)
  liElement.className = null;
} else { //otherwise give the li element the class of cbp-ntopen when clicked (opening the accordion)
  liElement.className = "cbp-ntopen";
}
return true;
}

var headings = document.querySelectorAll("h3.cbp-nttrigger"); //returns an array of all h3 headings class of cbp-nttrigger. These are assigned to var headings
for (var i = 0; i < headings.length; i++) { //this for loop passes through each item in the array
  var heading = headings[i];
  heading.addEventListener('click', clickAction); //each item passing through the loop is given the event listener click and the function clickAction
}

//these lines of code do the exact same thing but for all h4 elements with a class of cbp-nttrigger
var headings = document.querySelectorAll("h4.cbp-nttrigger");
for (var i = 0; i < headings.length; i++) {
  var heading = headings[i];
  heading.addEventListener('click', clickAction);
}

//these lines of code do the exact same thing but for any future h5 accordions we'd like to put inside our nested accordions (accordception!)
var headings = document.querySelectorAll("h5.cbp-nttrigger");
for (var i = 0; i < headings.length; i++) {
  var heading = headings[i];
  heading.addEventListener('click', clickAction);
}
