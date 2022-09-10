const number = Math.floor(Math.random() * 1000)

const repeatString = function(string, num) {
  let threeTimes = string;
  if (num < 0) {
    threeTimes = 'ERROR';
  }
  if (num === 0) {
    threeTimes = '';
  }
  for (i = 0; i < num-1; i++) {
    threeTimes += string;
  };
  return threeTimes;
};

// Do not edit below this line
module.exports = repeatString;

