/**
 * write a function `max` that takes two `Numbers` as arguments
 * and returns the largest of them. HINT: Use `if-else`...!
 */
console.assert(max(1,3) === 3);
console.assert(max(0,3) === 3);
console.assert(max(10,3) === 10);
console.assert(max(-1,-3) === -1);

// Why would you do this?
console.assert(max("aaa",0) === 0);

// Okay, that's just silly...
console.assert(isNaN(max("aaa","bbb")));

/**
 * @param {Number} A to compare to B
 * @param {Number} B to compare to A
 * @return {Number} the greater of A or B
 */
 //This function looks at A and B and returns the greater of the two
function max(A, B){
    if (A>B) {
      return A;
    } else {
      return B;
    }
}

/**
 * Write a function `maxOfThree` that takes _three_
 * `Numbers` as arguments and returns the largest of them.
 */
console.assert(maxOfThree(1,3,2) === 3);
console.assert(maxOfThree(0,3,-1) === 3);
console.assert(maxOfThree(10,3,50) === 50);
console.assert(maxOfThree(-1,-3,-10) === -1);

// Look, that's just mean...
console.assert(maxOfThree("aaa",0,1) === 1);

// Who's running this picture, anyway?
console.assert(isNaN(maxOfThree("aaa","bbb","ccc")));

/**
 * @param {Number} A
 * @param {Number} B
 * @param {Number} C
 * @return {Number} greatest of A, B, and C
 */
 //This function looks at A, B and C and returns the greater of the three
function maxOfThree(A, B, C){
      if (A>B && A>C) {
        return A;
      }
      if (B>A && B>C) {
        return B;
      } else {
        return C;
      }
  }

/**
 * Write a function `isVowel` that takes a character
 * (i.e. a `String` of length 1) and returns a `Boolean`
 * indicating whether the input is a vowel or not.
 */

// What a cruel, cruel master you are...
console.assert(isVowel(0) === false);

console.assert(isVowel("B") === false);
console.assert(isVowel("b") === false);
console.assert(isVowel("a") === true);
console.assert(isVowel("E") === true);

// What should _this_ do?
// console.assert(isVowel("AEIOU") === FILL_ME_IN);

/**
 * @param {String} char of length 1
 * @return {Boolean} whether `char` is an English vowel
 */
function isVowel(char){
      return ("AaEeIiOoUu".indexOf(char) > -1);
    //Simplified below function to the one above
    /*  var str = "AaEeIiOoUu";
      var n = str.indexOf(char);
      if (n>-1) {
        return true;
      } else {
        return false;
      }*/
  }

/**
 * The `disemvowel` function combats the Internet
 * Trolls by handily removing all of the vowels from
 * their angry, hurtful comments. It's Super-Effective!
 *
 * @param {String} comment to disemvowel
 * @return {String} cmmnt dsmvwld
 */
 //This function reads comment for anything in the array and replaces it with no space ""
function disemvowel(comment){
  return comment.replace(/[aeiou]/gi, '');
}

// Shorter test cases might be appreciated...
console.assert(
  disemvowel("This website is for losers LOL!") === "Ths wbst s fr lsrs LL!"
);

/**
 * The function `rovarspraket` will translate text into
 * a "rövarspråket", i.e. double every consonant and
 * place an occurrence of "o" in between them.
 *
 * For example, `rovarspraket("this is fun")` should
 * return `"tothohisos isos fofunon"`
 *
 * @see https://en.wikipedia.org/wiki/R%C3%B6varspr%C3%A5ket
 *
 * @param {String} text to translate into "rövarspråket"
 * @return {String} translation
 */
function rovarspraket(input){
var x = String(input);
x = x.replace(/[B]/g, 'Bob');
x = x.replace(/[b]/g, 'bob');
x = x.replace(/[C]/g, 'Coc');
x = x.replace(/[c]/g, 'coc');
x = x.replace(/[D]/g, 'Dod');
x = x.replace(/[d]/g, 'dod');
x = x.replace(/[F]/g, 'Fof');
x = x.replace(/[f]/g, 'fof');
x = x.replace(/[G]/g, 'Gog');
x = x.replace(/[g]/g, 'gog');
x = x.replace(/[H]/g, 'Hoh');
x = x.replace(/[h]/g, 'hoh');
x = x.replace(/[J]/g, 'Joj');
x = x.replace(/[j]/g, 'joj');
x = x.replace(/[K]/g, 'Kok');
x = x.replace(/[k]/g, 'kok');
x = x.replace(/[L]/g, 'Lol');
x = x.replace(/[l]/g, 'lol');
x = x.replace(/[M]/g, 'Mom');
x = x.replace(/[m]/g, 'mom');
x = x.replace(/[N]/g, 'Non');
x = x.replace(/[n]/g, 'non');
x = x.replace(/[P]/g, 'Pop');
x = x.replace(/[p]/g, 'pop');
x = x.replace(/[Q]/g, 'Qoq');
x = x.replace(/[q]/g, 'qoq');
x = x.replace(/[R]/g, 'Ror');
x = x.replace(/[r]/g, 'ror');
x = x.replace(/[S]/g, 'Sos');
x = x.replace(/[s]/g, 'sos');
x = x.replace(/[T]/g, 'Tot');
x = x.replace(/[t]/g, 'tot');
x = x.replace(/[V]/g, 'Vov');
x = x.replace(/[v]/g, 'vov');
x = x.replace(/[W]/g, 'Wow');
x = x.replace(/[w]/g, 'wow');
x = x.replace(/[X]/g, 'Xox');
x = x.replace(/[x]/g, 'xox');
x = x.replace(/[Y]/g, 'Yoy');
x = x.replace(/[y]/g, 'yoy');
x = x.replace(/[Z]/g, 'Zoz');
x = x.replace(/[z]/g, 'zoz');
return x
}

// Feel free to provide additional examples...
console.assert(rovarspraket("a") === "a")
console.assert(rovarspraket("b") === "bob")
console.assert(rovarspraket("cat") === "cocatot")
console.assert(rovarspraket("javascript") === "jojavovasoscocroripoptot")
console.assert(rovarspraket(0) === "0")
