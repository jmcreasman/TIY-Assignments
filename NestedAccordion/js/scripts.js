//Function that opens accordion when clicked
//I think the right is called cbp-nttrigger
//
// var heading = document.querySelector(".cbp-nttrigger");
//
// heading.addEventListener('click', function(){
// document.querySelector("li").className = "cbp-ntopen";
// });

/*assigned name "heading" to the method of identifying the first element with class="cbp-nttrigger"
and then adding the 'click' event listener to it so that when it is clicked it assigns
the first 'li' it finds the class name 'cbp-ntopen' which according to the css will
open the accordion.
THAT CODE IS THE FOLLOWING 4 LINES
var heading = document.querySelector(".cbp-nttrigger");
 heading.addEventListener('click', function(){
 document.querySelector("li").className = "cbp-ntopen";
});
*/


var headings = document.querySelectorAll("h3.cbp-nttrigger")
console.log("I am here!");
for (var i = 0; i < headings.length; i++) {
  var heading = headings[i];
  heading.addEventListener('click', function(eventObject){
    var liElement = eventObject.currentTarget.parentElement;
  if (liElement.className === "cbp-ntopen") {
    liElement.className = null;
  } else {
    liElement.className = "cbp-ntopen";
  }
  return true;
  });

}

var headings = document.querySelectorAll("h4.cbp-nttrigger")
for (var i = 0; i < headings.length; i++) {
  var heading = headings[i];
  heading.addEventListener('click', function(eventObject){
    var liElement = eventObject.currentTarget.parentElement;
  if (liElement.className === "cbp-ntopen") {
    liElement.className = null;
  } else {
    liElement.className = "cbp-ntopen";
  }
  return true;
  });

}


  /*
if (document.querySelector("li").className !== "cbp-ntopen"){ //if the li does not have a class name of cbp-ntopen do the following
    document.querySelector("li").className = "cbp-ntopen"; //give it the class name cbp-ntopen
    return true; //accordion opens
}
if (document.querySelector("li").className === "cbp-ntopen") { //if that li has class name cbp-ntopen and is clicked
    document.querySelector("li").className = null; //remove that class name
    return true; //accordion closes
}
*/














// What does it do?
// On this page the javascript opens and closes the accordions on the pages and presents the information displayed there from the html and css pages.
// What interactive elements exist?
// As stated above this page interacts when the user clicks on the arrowed headers by opening the accorion folder and displaying the contents. It must also close it when clicked again.
// How do you interact with them?
// You interact with them by clicking on the different headers.
// What visual effects are produced by interacting?
// The content in the accordion folder is displayed and a different arrow image is displayed as well to cue in the user that that folder is open.
// What existing HTML elements are changed?
// The arrow picture is changed.
// What new HTML elements are created?
// A new arrow image is presented and the body copy is displayed.
// What CSS styles are used to produce the effect?
// The copy color and font is from the css. The css also helps devide the js and html code into classes and divs.

//When the user clicks the header open the accordion
//Display copy
//When the user clicks the header again, close the accordion
//This code along with any nessary html and css code will be grouped into its own class id so that it will "activate" when hat class id is "called on"
//Some kind of if/else statement to do this?
//if (user clicks on header) {
//open accordion;
//}else {
//leave closed;
//}
//Then another similar statement to close it
//if (user clicks on header) {
//close accordion;
//}else {
//leave open;
//}
//I'm still fuzzy on how the DOM commands work but I believe they allow the user to interact with the web browser using the javascript so the js code that recognises when a user has clicked on a header will need to use some of them.
