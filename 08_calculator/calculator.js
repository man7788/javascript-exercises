const add = function(num1, num2) {
  twoNumAdd = num1 + num2;
  return twoNumAdd;	
};

const subtract = function(num1, num2) {
	twoNumSub = num1 - num2;
  return twoNumSub;
};

const sum = function(numbers) {
  if (numbers.length === 0) {
    return numbers.length;
  } 
  const sumNum = numbers.reduce((previousValue, currentValue) => 
    previousValue + currentValue
  );
  return sumNum;
};



const multiply = function(numbers) {
  const multiNum = numbers.reduce((previousValue, currentValue) => 
    previousValue * currentValue
  );
  return multiNum;
};

const power = function(num, power) {
  powerNum = num ** power;
  return powerNum;
};

const factorial = function(n) {
  if (n === 0 || n === 1){
    n = 1;
    return n;
  }
  if (n > 1) {
    for (i = n; i !== 1; i--) {
      n *= (i - 1);
  };
  return n; 
  } 
  
  };

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
