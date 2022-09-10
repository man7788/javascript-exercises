const removeFromArray = function(numbers, ...remove) {
  const numArray = numbers;
  const rmArray = remove;

  function predicate(value) {
    if (!rmArray.includes(value)) {
      return value;
    }
  }
  const filtered = numArray.filter(predicate);
  return filtered;
};

// Do not edit below this line
module.exports = removeFromArray;
