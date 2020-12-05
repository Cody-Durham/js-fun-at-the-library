function createTitle(book) {
  return `The ${book}`
};


function buildMainCharacter(name, age, pronouns) {
  var character = {
    name: name,
    age: age,
    pronouns: pronouns,
  }
  return character
};

function saveReview(words, reviews) {
  // reviews.push(words)
  if (reviews.includes(words)) {
    return
  } else {
    reviews.push(words);
  }
};

function calculatePageCount(title) {
  return title.length * 20
};

function writeBook(title, mainCharacter, genre) {
  var book = {
    title: title,
    mainCharacter: mainCharacter,
    pageCount: calculatePageCount(title),
    genre: genre,
  }
  return book
};

function editBook(title) {
  return title.pageCount *= .75
};


module.exports = {
  createTitle: createTitle,
  buildMainCharacter: buildMainCharacter,
  saveReview: saveReview,
  calculatePageCount: calculatePageCount,
  writeBook: writeBook,
  editBook: editBook
};
