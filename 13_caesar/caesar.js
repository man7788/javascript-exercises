const caesar = function(orgString, shift) {
  let caesarString = '';
  let regex = /\w/;
  let splitString = orgString.split('');

  let upLetterIndex;
  let upLetterIndexShift;
  let upLetterMod;
  const upCaseList = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H',
                        'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P',
                        'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X',
                        'Y', 'Z',];
  let lowLetterIndex;
  let lowLetterIndexShift;
  let lowLetterMod;
  const lowCaseList = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
                        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p',
                        'q', 'r', 's', 't', 'u', 'v', 'w', 'x',
                        'y', 'z',];

  


    // 65-90
    // 97-122
    
  for (const word of splitString) {
    // Non alphabet characters
    if (!regex.test(word)) {
      caesarString += word;
    // Uppercase letter NOT out of range
    } else if (word === word.toUpperCase() &&
      word.charCodeAt(0) + shift >= 65 &&
      word.charCodeAt(0) + shift <= 90) {
      stringCode = word.charCodeAt(0) + shift;
      caesarString += String.fromCharCode(stringCode);
    // Lowercase letter NOT out of range
    } else if (word === word.toLowerCase() &&
      word.charCodeAt(0) + shift >= 97 &&
      word.charCodeAt(0) + shift <= 122) {
      stringCode = word.charCodeAt(0) + shift;
      caesarString += String.fromCharCode(stringCode);
    // ^^^^Uppercase^^^^ letter OUT OF `````TOP````` RANGE
    } else if (word === word.toUpperCase() && word.charCodeAt(0) + shift > 90) {
      for (const upletter of upCaseList) {
        if (word === upletter) {
          upLetterIndex = upCaseList.indexOf(upletter);
          upLetterIndexShift = upLetterIndex + shift;
          upLetterMod = upLetterIndexShift % 26
          caesarString += upCaseList[upLetterMod];
        }
      }
    // ^^^^Lowercase^^^^ letter OUT OF `````TOP````` RANGE
    } else if (word === word.toLowerCase() && word.charCodeAt(0) + shift > 122) {
      for (const lowletter of lowCaseList) {
        if (word === lowletter) {
          lowLetterIndex = lowCaseList.indexOf(lowletter);
          lowLetterIndexShift = lowLetterIndex + shift;
          lowLetterMod = lowLetterIndexShift % 26
          caesarString += lowCaseList[lowLetterMod];
        }
      }
    // ^^^^Uppercase^^^^ letter OUT OF `````LOW````` RANGE
    } else if (word === word.toUpperCase() && word.charCodeAt(0) + shift < 65) {
      for (const upletter of upCaseList) {
        if (word === upletter) {
          upLetterIndex = upCaseList.indexOf(upletter);
          upLetterIndexShift = upLetterIndex + shift;
          caesarString += upCaseList[upCaseList.length + upLetterIndexShift];
        }
      }
    // ^^^^Lowercase^^^^ letter OUT OF `````LOW````` RANGE
    } else if (word === word.toLowerCase() && word.charCodeAt(0) + shift < 97) {
      for (const lowletter of lowCaseList) {
        if (word === lowletter) {
          lowLetterIndex = lowCaseList.indexOf(lowletter);
          lowLetterIndexShift = lowLetterIndex + shift;
          caesarString += lowCaseList[lowCaseList.length + lowLetterIndexShift];
        }
      }
    };
  };
    

  console.log(lowLetterIndex);
  console.log(caesarString);
  console.log(splitString);
  return caesarString;
  
};

// Do not edit below this line
module.exports = caesar;
