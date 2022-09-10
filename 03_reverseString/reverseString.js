const reverseString = function(string) {
  splitWords = string.split('');
  reverseWords = splitWords.reverse();
  joinedWords = reverseWords.join('');
  return joinedWords;
};

// Do not edit below this line
module.exports = reverseString;
