'use strict';

const containerBooks = document.querySelector('.books');

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
const renderBooks = function () {
  booksArr.forEach(function (book) {
    const html = `<div class="book">
        <div class="book-info">
            <p class="book-title">${book.title}</p>
            <p class="book-author">${book.author}</p>
            <p class="book-page">${book.page} pages</p>
        </div>
        <div class="book-btn-utils">
            <button
            class="btn-util btn-toggle-read-status"
            aria-label="read status"
            title="Read Status"
            >
            <ion-icon name="book-outline" class="icon"></ion-icon>
            </button>
            <button
            class="btn-util btn-delete-book"
            aria-label="delete book"
            title="Delete Book"
            >
            <ion-icon name="trash-outline" class="icon"></ion-icon>
            </button>
        </div>
        </div>
    </div>`;
    containerBooks.insertAdjacentHTML('afterbegin', html);
  });
};

renderBooks();
