const fibonacci = function(range) {
  if (range < 0) {
    return 'OOPS'
  }
  let numArray = [0, 1];
  for (i = 1; i < range; i++) { 
  let nextTerm = numArray[numArray.length-1] + numArray[numArray.length-2];
  numArray.push(nextTerm);
  }
  console.log(numArray);
  return numArray[numArray.length-1];
 
};

// Do not edit below this line
module.exports = fibonacci;
