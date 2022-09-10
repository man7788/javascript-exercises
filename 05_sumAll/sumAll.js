const sumAll = function(num1, num2) {
  let sumNum = 0;
  let sumTimes = num1 + num2;
  let start;
  if (num1 < 0 || num2 < 0) { 
    return 'ERROR';
  }
  if (!Number.isFinite(num1) || !Number.isFinite(num2)) {
    return 'ERROR'
  }
  if (num1 > num2) {
    start = num2;
  } else {
    start = num1;
  }
  for (i = start; i < sumTimes; i++) {
    sumNum += i;
  } 
  return sumNum;
};

// Do not edit below this line
module.exports = sumAll;
