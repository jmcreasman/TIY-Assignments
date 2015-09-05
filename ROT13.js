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
function encode(phrase/*, N */){
  var x = String(phrase);
  x = x.replace(/[a]/g, 'n');
  x = x.replace(/[b]/g, 'o');
  x = x.replace(/[c]/g, 'p');
  x = x.replace(/[d]/g, 'q');
  x = x.replace(/[e]/g, 'r');
  x = x.replace(/[f]/g, 's');
  x = x.replace(/[g]/g, 't');
  x = x.replace(/[h]/g, 'u');
  x = x.replace(/[i]/g, 'v');
  x = x.replace(/[j]/g, 'w');
  x = x.replace(/[k]/g, 'x');
  x = x.replace(/[l]/g, 'y');
  x = x.replace(/[m]/g, 'z');
  x = x.replace(/[n]/g, 'a');
  x = x.replace(/[o]/g, 'b');
  x = x.replace(/[p]/g, 'c');
  x = x.replace(/[q]/g, 'd');
  x = x.replace(/[r]/g, 'e');
  x = x.replace(/[s]/g, 'f');
  x = x.replace(/[t]/g, 'g');
  x = x.replace(/[u]/g, 'h');
  x = x.replace(/[v]/g, 'i');
  x = x.replace(/[w]/g, 'j');
  x = x.replace(/[x]/g, 'k');
  x = x.replace(/[y]/g, 'l');
  x = x.replace(/[z]/g, 'm');
  return x
}

/**
 * Function `decode` accepts a `phrase` and `N` and
 * decoded it appropriately, i.e. every _word_ character
 * in `phrase` is rotated backward by `N` characters.
 *
 * @param {String} phrase to decode
 * @param {Number} N rotation to apply, default 13
 * @return {String} decoded by ROT-N
 */
function decode(phrase, N){
    // YOUR CODE HERE
}

// Produce more examples, please...
console.assert(encode("hello") === "uryyb");
console.assert(encode("uryyb") === "hello");

console.assert(encode("hello", 2) === "jgnnq")
console.assert(decode("jgnnq", 2) === "hello")
