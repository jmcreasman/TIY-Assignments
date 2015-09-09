What does it do?
This page presents data (in this case wine) and changes the way in which it can be viewed.
What interactive elements exist?
The top right corrner allows the user to toggle between the different viewing options. 
How do you interact with them?
The user interacts with this page by clicking which viewing option they'd like to view the data from.
What visual effects are produced by interacting?
The entire set of data changes its location on the page.
What existing HTML elements are changed?
The positioning of the copy and images.
What new HTML elements are created?
Smaller versions of the copy/images are created and presented when the user switchs views.
What CSS styles are used to produce the effect?
The copy color and font is from the css. The css also helps devide the js and html code into classes and divs.

//When the user clicks a bottom in the top right corrner they can switch betwen different views
//I feel like other than that the rest of the positioning comes from the html and css files.
//As in the accordion example. This code along with any nessary html and css code will be grouped into its own class id so that it will "activate" when hat class id is "called on"
//Since I think that much of the data's positioning is dependent on the html and the css I think that the js only switchs between the two views.
//So using html and css you have to sets of ways the data is shown; default and switch.
//You could use an if/else statment to "toggle" between the views.
//var = defaulyData
//var = switchData
//if ("user clicks on toggle button"){
//return stitchData
//} else {
//return defaultData
//}
//Again as stated in the accordion example I'm very fuzzy on how the DOM commands work but I believe you would use them to implement the toggling when the user clicks on the button



