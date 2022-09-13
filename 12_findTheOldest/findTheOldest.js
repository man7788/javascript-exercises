const findTheOldest = function(item) {
  const ageArray = [];
  let largest = null;
  let indexNum;

  let presentYear = new Date();
  presentYear = presentYear.getFullYear();


  for (i = 0; i < item.length; i++) {
    if (item[i].yearOfDeath === undefined) {
      item[i].yearOfDeath = presentYear
    }
    let age = item[i].yearOfDeath - item[i].yearOfBirth;
    ageArray.push(age);
    }
    for (i = 0; i < ageArray.length; i++) {
      if (ageArray[i] === null || ageArray[i] > largest) {
        largest = ageArray[i];
        indexNum = i;
    }
  };
  console.log(item[0].yearOfDeath);
  console.log(ageArray)
  console.log(presentYear);

  return item[indexNum];
};

// Do not edit below this line
module.exports = findTheOldest;
