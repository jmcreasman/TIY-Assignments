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
Comparison operators are used to determine equality or difference between values. The two types discussed here are the Greater than operator `>` and the Less than or equal to `<=`
###Greater than
This operator will return true when the left operand is greater than the right operand. Example `10 > 7 // true`
###Less than or equal to
This operator will return true when the left operand is less than or equal to the right operand. `1 <= 7 // true`
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
