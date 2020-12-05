
function createLibrary(name, shelves) {
  var library = {
    name: name,
    shelves: {
      fantasy: [],
      fiction: [],
      nonFiction: [],
    }
  }
  return library
};



function addBook(library, bookName) {
  if (bookName.genre === 'fantasy') {
    library.shelves.fantasy.push(bookName)
  } else if (bookName.genre === 'nonFiction') {
    library.shelves.nonFiction.push(bookName)
  } else {
    library.shelves.fiction.push(bookName)
  }
};



function checkoutBook(library, bookName) {

  for (var i = 0; i < library.shelves.fantasy.length; i++) {
      if (library.shelves.fantasy[i].title === bookName) {
        return `You have now checked out ${bookName} from the ${library.name}`
    }
  }
  for (var i = 0; i < library.shelves.fiction.length; i++) {
      if (library.shelves.fiction[i].title === bookName) {
        library.shelves.fiction.splice(i, 1)
        return `You have now checked out ${bookName} from the ${library.name}`
    }
  }
  for (var i = 0; i < library.shelves.nonFiction.length; i++) {
      if (library.shelves.nonFiction.title === bookName) {
        return `You have now checked out ${bookName} from the ${library.name}`
    }
  }
  return `Sorry, there are currently no copies of ${bookName} available at the ${library.name}`
};



module.exports = {
  createLibrary: createLibrary,
  addBook: addBook,
  checkoutBook: checkoutBook
};
