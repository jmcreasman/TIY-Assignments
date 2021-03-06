/**
 * The function `reverse` computes the reversal
 * of a given `String` (don't copy-pasta!)
 *
 * @param {String} S to reverse
 * @return {String}
 */
function reverse(S){
    return S.split('').reverse().join('');
}

console.assert(reverse("") === ""); // Really?

console.assert(reverse("A") === "A"); // Jerk.

console.assert(reverse("cat") === "tac");

console.assert(reverse("ward") === "draw");

console.assert(reverse("books") === "skoob"); // Rokey, dokey...

console.assert(
  reverse("we don't want no trouble") === "elbuort on tnaw t'nod ew"
);

/**
 * Function `encode` accepts a `String` and produces
 * the appropriate ROT13 "encoded" version, i.e. every
 * character in `phrase` is "rotated" ahead by 13 characters.
 *
 * @see String.prototype.charCodeAt
 * @see String.prototype.fromCharCode
 * @see http://en.wikipedia.org/wiki/ROT13
 *
 * // Start with just `phrase`...
 * @param {String} phrase to encode
 * // Add `N` in part 2!
 * // @param {Number} N rotation to apply, default 13
 * @return {String} encoded with ROT13
 */
 function encode(str, N){
   var charArray = str.split('');
   function shiftChar(char){
     var isAlpha = /[a-z]/i;
     if(isAlpha.test(char)){
       char = String.fromCharCode(char.charCodeAt(0) + N);
       if(char > 'Z' && char < 'a' || char > 'z')
         char = String.fromCharCode(char.charCodeAt(0) - 26);
     }
     return char;
   }
   var result = charArray.map( shiftChar ).join('');
   return result;
 }
 function decode(str, N){
   var charArray = str.split('');
   function shiftChar(char){
     var isAlpha = /[a-z]/i;
     if(isAlpha.test(char)){
       char = String.fromCharCode(char.charCodeAt(0) - N);
       if(char > 'Z' && char < 'a' || char > 'z')
         char = String.fromCharCode(char.charCodeAt(0) + 26);
     }
     return char;
   }
   var result = charArray.map( shiftChar ).join('');
   return result;
 }
 function encodebm(phrase) {
  return (phrase + '')
   .replace(/[a-z]/gi, function(s) {
     return String.fromCharCode(s.charCodeAt(0) + (s.toLowerCase() < 'n' ? 13 : -13));
   });
}
 //Below is old code that worked until I modified one part and broke it. Could not figure out how to fix again.
 /*function encode(phrase, N){
   if (N === 'undefined') {
     N = 13;
   }
   var rot13char, char;
   var result = "";
   var source = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
   var rotN = source.substr(N).concat(source.substr(0, N));
   source = source.concat(source.toLowerCase());
   rotN = rotN.concat(rotN.toLowerCase());
   console.log('source=' + source);
   console.log('rotn=' + rotN);
   for (var i = 0; i < phrase.length; i++) {
     char = phrase.charAt(i);
     var n = source.indexOf(char);
     if (n > -1) {
       rotNchar = rotN.charAt(n);
     } else {
       rotNchar = char;
     }
     result = result.concat(rotNchar);
   }
   return result
 }/*

/**
 * Function `decode` accepts a `phrase` and `N` and
 * decoded it appropriately, i.e. every _word_ character
 * in `phrase` is rotated backward by `N` characters.
 *
 * @param {String} phrase to decode
 * @param {Number} N rotation to apply, default 13
 * @return {String} decoded by ROT-N
 */
//Below is old code that worked until I modified one part and broke it. Could not figure out how to fix again.
/*function decode(phrase, N){
  var rotNchar, char;
  var result = "";
  var source = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var rotN = source.substr(N).concat(source.substr(0, N));
  rotN = rotN.concat(rotN.toLowerCase());
  source = source.concat(source.toLowerCase());
  for (var i = 0; i < phrase.length; i++) {
    char = phrase.charAt(i);
    var n = rotN.indexOf(char);
    if (n > -1) {
      rotNchar = source.charAt(n);
    } else {
      rotNchar = char;
    }
    result = result.concat(rotNchar)
  }
  return result
}*/

// Produce more examples, please...
console.assert(encode("hello", 13) === "uryyb");
console.assert(encode("a", 13) === "n");
console.assert(encode("it", 13) === "vg");
console.assert(encode("uryyb", 13) === "hello");
console.assert(encode("cat", 3) === "fdw");
console.assert(encode("hello", 4) === "lipps")
console.assert(encode("hello", 2) === "jgnnq")
console.assert(decode("jgnnq", 2) === "hello")
console.assert(decode("abcdefg", 2) === "yzabcde")
//Beastmode tests
console.assert(encode("hello", 13) === "uryyb");
console.assert(encode("hello", 0) === "hello");
console.assert(encode("hello", 1) === "ifmmp");
console.assert(encodebm("hello") === "uryyb");
