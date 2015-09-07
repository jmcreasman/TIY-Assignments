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
  // More tests, perhaps?
}); // END test(evens)

test('summing lists of Number', function(){
  assert.equal(sum([ ]), 0);
  assert.equal(sum([ 1 ]), 1);
  assert.equal(sum([ 1, 1 ]), 2);
  // ...et cetera, et cetera, et cetera.
}); // END test(sum)

// You expect me to write `sum`, too?

test('summing even Fibonacci numbers?', function(){
  expect( sum(evens(fibonacci(0))) ).to.equal(FILL_ME_IN); // nice.
  // There really should be more code in here...
}); // END test(dat CHAIN tho)