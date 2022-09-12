const palindromes = function (string) {
  let text = string.toLowerCase();
  stripText = text.replace(/\W/g, '');
  splitString = stripText.split("");
  reverseArrary = splitString.reverse();
  joinArray = reverseArrary.join("");
  return (joinArray === stripText);
};

// Do not edit below this line
module.exports = palindromes;
