'use strict';

const booksArr = [];

const Book = function (title, author, page) {
  this.title = title;
  this.author = author;
  this.page = page;
};

// Function for creating book objects and storing them in the `booksArr` array
const addBookToLibrary = function (title, author, page) {
  const newBook = new Book(title, author, page);
  booksArr.push(newBook);
};

addBookToLibrary('Atomic Habits', 'James Clear', 320);
addBookToLibrary('The Pragmatic Programmer', 'Andrew Hunt & David Thomas', 352);
addBookToLibrary('Clean Code', 'Robert C. Martin', 464);
addBookToLibrary('Deep Work', 'Cal Newport', 304);
addBookToLibrary('You Don’t Know JS', 'Kyle Simpson', 278);
addBookToLibrary('The Psychology of Money', 'Morgan Housel', 256);
addBookToLibrary('Eloquent JavaScript', 'Marijn Haverbeke', 472);
addBookToLibrary('Design Patterns', 'Erich Gamma et al.', 416);
addBookToLibrary('The Lean Startup', 'Eric Ries', 336);
addBookToLibrary('Refactoring', 'Martin Fowler', 448);

console.table(booksArr);

// Function for rendering the books in the library (i.e. populating the library with books)
const renderBooks = function () {};

renderBooks();
