// function shelfBook(bookObj, shelf) {
//   if (shelf.length < 3) {
//     shelf.unshift(bookObj);
//   }
// };
function shelfBook(bookObj, shelf) {
  shelf.unshift(bookObj)
};

function unshelfBook(bookName, shelf) {
  for (var i = 0; i < shelf.length; i++) {
    if (shelf[i].title === bookName) {
      shelf.splice(i, i)
    }
  }
};

function listTitles(shelf) {
  var bookTitles = [];
  for (var i = 0; i < shelf.length; i++) {
    bookTitles.push(shelf[i].title)
  }
  return bookTitles.join(', ')
};

function searchShelf(shelf, bookName) {
  var hasBook = false
  for (var i = 0; i < shelf.length; i++) {
    if (shelf[i].title === bookName) {
      hasBook = true
    }
  }
  return hasBook
};






module.exports = {
  shelfBook: shelfBook,
  unshelfBook: unshelfBook,
  listTitles: listTitles,
  searchShelf: searchShelf
};
;
