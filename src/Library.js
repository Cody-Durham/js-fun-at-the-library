
function createLibrary(name, shelves) {
  var library = {
    name: name, // this is the lib name
    shelves: { // these are the shelfs in the lib
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

// function checkoutBook(library, bookName) {
// return `You have now checked out ${bookName} from the ${library.name}`
// };

function checkoutBook(library, bookName) {

  for (var i = 0; i < library.shelves.fantasy.length; i++) {
    // console.log('TEST', library.shelves.fiction[i].title);
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

// function checkoutBook(library, bookName) {
//   var bookOnShelf;
//   for (var i = 0; i < 3; i++) {
//     if (library.shelves[i] === bookName) {
//       return `You have now checked out ${bookName} from the ${library.name}`
//     }
//     // else {
//     //   return `Sorry, there are currently no copies of The Fifth Season available at the Denver Public Library`
//     // }
//   }
// };

// function checkoutBook(library, bookName) {
//   for (var i = 0; i < library.length; i++) {
//     if (library.shelves[i].includes(bookName)) {
//       return `You have now checked out ${bookName} from the ${library.name}`
//   } else {
//     return `Sorry, there are currently no copies fo ${bookName} available at the ${library.name}`
//   }
// }
// };


module.exports = {
  createLibrary: createLibrary,
  addBook: addBook,
  checkoutBook: checkoutBook
};
