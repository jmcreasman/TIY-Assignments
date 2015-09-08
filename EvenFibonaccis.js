var test = require('mocha').it,
  expect = require('chai').expect;

function fibonacci(n) {
      var fibs = [];
      var a = 1, b = 2, f = 1;
      if (n>0) {
        if (n===1) {
          fibs = [1];
        } else if (n===2) {
          fibs = [1, 2];
        } else {
          fibs = [1, 2];
          for(var i = 3; i <= n; i++) {
              f = a + b;
              a = b;
              b = f;
              fibs.push(f);
          }
        }
      }
      return fibs
  };
  function evens(hulk) {
  //"Hulk smach punny odd numbers"
    var evenArr=[];
    for (var i = 0; i < hulk.length; i++) {
      if ((hulk[i] % 2) != 1) {
        evenArr.push(hulk[i]);
      }
    }
    return evenArr;
  }

  function sum(array){
    var sumresults = 0;
    for (var i = 0; i < array.length; i++) {
      // long way of saying below line - sumresults = sumresults + array[i];
      sumresults += array[i];
    }
    return sumresults;

  }
test('generating the Fibonacci sequence', function(){
  expect(fibonacci(0)).to.deep.equal([ ]);
  expect(fibonacci(1)).to.deep.equal([ 1 ]);
  expect(fibonacci(2)).to.deep.equal([ 1, 2 ]);
  expect(fibonacci(4)).to.deep.equal([1, 2, 3, 5 ]);
  // ...ad nauseum.
}); // END test(fibonacci)

// Hey, where's `fibonacci`...? Uh oh...

test('just even numbers?', function(){
  expect(evens([ ])).to.deep.equal([ ]);
  expect(evens([ 1 ])).to.deep.equal([ ]);
  expect(evens([ 1, 1, 1 ])).to.deep.equal([ ]);
  expect(evens([ 2 ])).to.deep.equal([ 2 ]);
  expect(evens([ 1, 2 ])).to.deep.equal([ 2 ]);
  expect(evens([ 1, 2, 44, 2347987, 77, 448922 ])).to.deep.equal([ 2, 44, 448922 ]);
  expect(evens([ 0 ])).to.deep.equal([0]);
  // More tests, perhaps?
}); // END test(evens)

test('summing lists of Number', function(){
  expect(sum([ ])).to.deep.equal(0);
  expect(sum([ 1 ])).to.deep.equal(1);
  expect(sum([ 1, 1 ])).to.deep.equal(2);
  //assert.equal(sum([ ]), 0);
  //assert.equal(sum([ 1 ]), 1);
  //assert.equal(sum([ 1, 1 ]), 2);
  // ...et cetera, et cetera, et cetera.
}); // END test(sum)

// You expect me to write `sum`, too?

test('summing even Fibonacci numbers?', function(){
  expect( sum(evens(fibonacci(0))) ).to.equal(0); // nice.
  expect( sum(evens(fibonacci(4))) ).to.equal(2);
  expect( sum(evens(fibonacci(10))) ).to.equal(44);
  expect( sum(evens(fibonacci(50))) ).to.equal(26658145586);
  //Beastmode answer
  expect( sum(evens(fibonacci(32))) ).to.equal(4613732);
}); // END test(dat CHAIN tho)
