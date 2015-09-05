var test = require('mocha').it,
    expect = require('chai').expect, // Use `expect(X).to.be` et al
    assert = require('chai').assert;  // OR use `assert.equal` etc

    function getThrees (n) {
      var threes = [];
      for (var i = 1; i < n; i++) {
      if (i%3 === 0) {
        threes.push(i);
      }
      }
      return threes;
    }
    function getMul (n,m) {
      var multiples = [];
      for (var i = 1; i < n; i++) {
      if (i%m === 0) {
        multiples.push(i);
      }
      }
      return multiples;
    }
    function getSum(n) {
      var sum = 0;
      var threes = getMul(n,3);
      var fives = getMul(n,5);
      var multiples = threes.concat(fives);
      for (var i = 0; i < multiples.length; i++) {
        sum = sum + multiples[i];
      }
      return sum;
      }
test('getting a list of multiples of 3', function(){
  var threes = getThrees(10);
  expect(threes).to.be.a('array');
  expect(threes).to.have.length(3);
  expect(threes).to.eql([ 3,6,9 ]);

  expect(getThrees(20)).to.eql([ 3,6,9,12,15,18 ]);
  expect(getThrees(50)).to.eql([ 3,6,9,12,15,18,21,24,27,30,33,36,39,42,45,48 ]);
}); // END test 3s
test('getting a list of multiples of 5', function(){
  var fives = getMul(10,5);
  expect(fives).to.be.a('array');
  expect(fives).to.have.length(1);
  expect(fives).to.eql([ 5 ]);
  expect(getMul(20,5)).to.eql([ 5,10,15 ]);
  expect(getMul(50,5)).to.eql([ 5,10,15,20,25,30,35,40,45 ]);
}); // END test 5s
test('getting sum of multiples of 3 and 5', function(){
  expect(getSum(10)).to.equal(23);
  expect(getSum(20)).to.equal(93);
  expect(getSum(50)).to.equal(633);
  expect(getSum(1000)).to.equal(266333);
}); // END test for sum of 3s and 5s
