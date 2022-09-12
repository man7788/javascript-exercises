const getTheTitles = function(item) {
  const bookTitle = [];
  for (i = 0; i < item.length; i++) {
    titleName = item[i].title;
    bookTitle.push(titleName);
  }
  return bookTitle;
};

// Do not edit below this line
module.exports = getTheTitles;
