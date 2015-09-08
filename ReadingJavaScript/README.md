# About JavaScript
## Basic literal types
### null
The Javascript literal `null` is an empty/singular value meaning that no object value is present (you either have it or you don't). When converted in a Boolean the return is `false`. Example: `Boolean (null)`.
### Boolean
The Javascript literal `Boolean` has only two values true or false. These two values are the truest versions but other values can be converted in booleans. Null is always false. For Numbers 0 is false and all other numbers are true. Strings are true when there’s something in the quotes and false when there’s nothing in the quotes (also called an empty string). Example: `Boolean (true)`.
### Number
The Javascript literal `Number` is a numeric data type; 1, 2, 3 etc. When converted in a Boolean the return is false for 0 and true for all other numbers. Example: `Number (26)`.
### Strings
The Javascript literal `String` is a value that is used to represent text. It is always wrapped in either double quotations ex. `"This is a story"` or single quotations ex. `'This is a story'`. When converted in a Boolean the return is false when it's an empty string and true when there is content within the quotation marks.
## Basic Operators
### Arithmetic
These operators take a numeric value as their operand and return a single numeric value. The standard operations are addtion, subtraction, multiplcation and division.
####Addition
When given two `Number` values it returns the sum of those values as a numeric value. Example: `1 + 2 // 3`
####Subtraction
When given two `Number` values it returns the differnce of those values as a numeric value. Example: `3 - 2 // 1`
####Multiplcation
When given two `Number` values it returns the product of those values as a numeric value. Example: `2 * 2 // 4`
####Division
When given two `Number` values it returns the quotient of those values as a numeric value. Example: `6 / 2 // 3`
##Comparison
Comparison operators are used to determine equality or difference between values. Some types discussed here are the Greater than operator `>` and the Less than or equal to `<=`
###Greater than
This operator will return true when the left operand is greater than the right operand. Example `10 > 7 // true`
###Greater than or equal to
This operator will return true when the left operand is greater than or equal to the right operand. `11 >= 7 // true`
###Less than
This operator will return true when the left operand is less than the right operand. Example `3 < 7 // true`
###Less than or equal to
This operator will return true when the left operand is less than or equal to the right operand. `1 <= 7 // true`
###Equality
The equality operator converts the operands if they are not of the same type then applies strict comparison.
Example: `1   == '1'` is stating that the number 1 is the string 1
###Inequality
The inequality operator returns true if the operands are not equal.
Example: `1 != 2` is stating that 1 is not the same as 2
###Strict equality
The strict equality operator returns true if the operands are strictly equal but with no type conversion.
Example: `3 === 3`
###Strict inequality
The strict inequality operator returns true if the operands are not equal and are not of the same type.
Example: `4 !== 3`
##Assignment
Assignment operators will assign a value to a varriable. The three types discussed here are `var`, `=`, and `+=`
###`var`
Example `var x = 15;` in this example the varriable x is assigned the value of 15.
###`=`
Example `x = y` in this example the varribles x and y are assigned as having equal value.
###`+=`
Example `var x = 15; x += 5;` playing off of our first example a value of 5 has been added to our varriable x.
##Special constants
The three built in constants we will be discussing are; undefined, NaN and Infinity
###undefined value
Refers to a varrible that has not yet been assigned any value.
###NaN
NaN stands for Not a Number and means that the undefined value cannot be represented as a number. Example `3 + tree` would result in NaN.
###Infinity
This is a numeric value that represents the concept of infinity.
##Other (Note: these are to be moved into new categories when I understand where to put them)
###String Split
Splits a string into an array of substrings.
Example:
`var str = "How are you doing today?";`
`var res = str.split("");`

###typeof
The typeof operator returns a string indicating the type of the unevaluated operand.
Example:
`typeof true === 'boolean';`
###Console.log
This prints text to the console.
Example: `console.log("Hello World");`
##If statement
These statements will run the code between the `{}` if the `(condition)` is true. Can be combined with Else statements.
`if (condition) {
  // code that runs if the condition is true
}`
### Statements
## Block statement
The block statement curly brackets {} are used to group statements
Example:
`{
  statement1
}`
###If statement
The if statement is used to execute a statement if the condition in it is true.
Example:
`if (true) {
  
}`
###Else statement
Pair with an if statement and if that if statement is false the else statment executes its statement.
Example:
`else {
  
}`
###While
The `while` statement makes a loop that executes a specfic statement so long as the test condition evaluates to true.
Example:
`while (true) {
  
}`
###Do-while
The do-while statement creates a loop that executes a specfic statement until the test condition evaluates to false.
Example:
`do {
  
} while (true);`
##Function
A function is a set of statements that performs a task or calculates a value.
`// A Function Definition
function identifier ( /* parameters go here */){
// function body goes here
}`
`//Function Invocation
function identifier (parameter);`
##Array
###Literal Array
An array is an ordered collection of data. Based on where it is in the array, each item has a specfic numerical index through which you can access the corresponding value.
Example:
`var avengers = ["IronMan", "Thor", "GaintMan", "Hulk", "Wasp"]`
In this array `[0,1]` would represent `"IronMan"`
###Length
The Length Property of an array returns the length of the array ie. the number of items in the array.
Example:
`var avengers = ["IronMan", "Thor", "GaintMan", "Hulk", "Wasp"]`
`avengers.length;`
This result will be 5
### Array Methods
####Fill
The fill method fills all the elements of an array from a start index to an end index with a static value.
* _params:_Start index and optional end index
* _returns:_The arrary with the new fill value
Example:
`var numbers = [1, 2, 3].fill(22);`
`// would return [22, 22, 22]`

####Push
The push method adds one or more elements to the end of an array and returns the new length of the array.
* _params:_The elements to add to the end of the array
* _returns:_The new array with the added elements
Example:
`var avengers = ["IronMan", "Thor", "GaintMan", "Hulk", "Wasp"]`
`avengers.push('CaptainAmerica', 'WonderMan');`
`// would return ["IronMan", "Thor", "GaintMan", "Hulk", "Wasp", "CaptainAmerica", "WonderMan"]`

####Reverse
The reverse method reverses an array in place.
* _returns:_The array with the first  item as the last and the last one as the firs
Example:
`var avengers = ["IronMan", "Thor", "GaintMan", "Hulk", "Wasp"]`
`avengers.reverse;`
`// would return ["Wasp", "Hulk", "GaintMan", "Thor", "IronMan"]`

####Join
The join method joins all elements of an array into a string.
Example:
`var avengers = ["IronMan", "Thor", "GaintMan", "Hulk", "Wasp"]`
`avengers.join(", ");`
` //would return this string "Wasp, Hulk, GaintMan, Thor, IronMan"`

##Switch Statements
A switch statement is like a more complicated if/else statement. It checks a value against a list of cases and then executes the first case that is true. It then goes on and exicutes all the other cases it finds after the first true case until it finds a breaking statement, after which it breaks out of the switch. If it does not find any matching case it will execute the default one.
Example:
`var hero = "IronMan";`
`switch (hero) {`
  `case "IronMan":`
    `console.log("Hello, sir!");`
  `case "other":`
    `console.log("Mr Stark will be with you shortly");`
  `default:`
    `console.log("Please present identification");`
##Loops
Loops are used if you want to run the same code over and over again, each time with a different value. The most often used varName in loops is i.
###For Loop
The for loop is you will use when you want to create a basic loop.
Example:
`for (var i = 0; i < array.length; i++) {`
  `array[i]`
`}`
###For In
The for in loop is used to loop through an object's properties.
Example:
`for (var variable in object) {`
  `if (object.hasOwnProperty(variable)) {`
    
  `}`
`}`
##Document Object Model (DOM)
###Window Object
The window object represents a window containing a DOM document. The window object implements the Window interface, which in turn inherits from the AbstractView interface. Some methods, namely window.resizeTo and window.resizeBy apply to the whole window and not to the specific tab the window object belongs to. 
Methods: Some methods include
*Window.alert()*
Displays an alert dialog.
*Window.back()*
Moves back one in the window history.
*Window.close()*
Closes the current window.
*Window.home()*  
Returns the browser to the home page.
###Document Object
Each web page loaded in the browser has its own document object. The Document interface serves as an entry point into the web page's content and provides functionality which is global to the document.
Methods:
*document.createElement(String name*
Creates a new element with the given tag name.
*document.getElementsByClassName(String className)*
Returns a list of elements with the given class name.
*document.getElementsByTagName(String tagName)*
Returns a list of elements with the given tag name.
###HTMLElement
The HTMLElement interface represents any HTML element. 
Methods:
*HTMLElement.click()*
Sends a mouse click event to the element.
*HTMLElement.focus()*
Makes the element the current keyboard focus.
###HTMLCollection
The HTMLCollection interface represents a generic collection (array-like object) of elements and offers methods and properties for selecting from the list.
Methods:
*HTMLCollection.item()*
Returns the specific node at the given zero-based index into the list. Returns null if the index is out of range.
###NodeList
NodeList objects are collections of nodes such as those returned by Node.childNodes and the document.querySelectorAll method.
Methods:
*item ( idx )*
Returns an item in the list by its index.
###Location Object
The Location interface represents the location of the object it is linked to. 
Methods:
*Location.assign()*
Loads the resource at the URL provided in parameter.
*Location.replace()*
Replaces the current resource with the one at the provided URL.
*Location.reload()*
Reloads the resource from the current URL.
