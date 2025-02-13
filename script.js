'use strict';

const containerBooks = document.querySelector('.books');
const btnAddBook = document.querySelector('.btn-add-book');
const modal = document.querySelector('.modal');
const formAddBook = document.querySelector('.book-form');
const inputBookTitle = document.querySelector('#book-title');
const inputBookAuthor = document.querySelector('#book-author');
const inputBookPage = document.querySelector('#book-page');
const selectBookReadStatus = document.querySelector('#book-read-status');
const btnFormCancel = document.querySelector('.btn-form-cancel');
const btnFormSubmit = document.querySelector('.btn-form-submit');

const booksArr = [
  { title: 'Atomic Habits', author: 'James Clear', page: 320, status: 'done' },
  {
    title: 'The Pragmatic Programmer',
    author: 'Andrew Hunt & David Thomas',
    page: 352,
    status: 'in-progress',
  },
  {
    title: 'Clean Code',
    author: 'Robert C. Martin',
    page: 464,
    status: 'in-progress',
  },
  { title: 'Deep Work', author: 'Cal Newport', page: 304, status: 'done' },
  {
    title: 'You Don’t Know JS',
    author: 'Kyle Simpson',
    page: 278,
    status: 'in-progress',
  },
  {
    title: 'The Psychology of Money',
    author: 'Morgan Housel',
    page: 256,
    status: 'in-progress',
  },
  {
    title: 'Eloquent JavaScript',
    author: 'Marijn Haverbeke',
    page: 472,
    status: 'done',
  },
  {
    title: 'Design Patterns',
    author: 'Erich Gamma et al.',
    page: 416,
    status: 'in-progress',
  },
  { title: 'The Lean Startup', author: 'Eric Ries', page: 336, status: 'done' },
  {
    title: 'Refactoring',
    author: 'Martin Fowler',
    page: 448,
    status: 'in-progress',
  },
];

const Book = function (title, author, page, status) {
  this.title = title;
  this.author = author;
  this.page = page;
  this.status = status;
};

// Function for creating book objects and storing them in the `booksArr` array
const addBookToLibrary = function (title, author, page, status) {
  const newBook = new Book(title, author, page, status);
  booksArr.push(newBook);
};

// Function for rendering the books in the library (i.e. populating the library with books)
const renderBooks = function () {
  containerBooks.innerHTML = ''; // Clears the container before rendering
  booksArr.forEach(function (book, index) {
    const html = `
    <div class="book" data-index="${index}">
        <div class="book-info">
            <p class="book-title">${book.title}</p>
            <p class="book-author">${book.author}</p>
            <p class="book-page">${book.page} pages</p>
        </div>
        <div class="book-btn-utils">
            <button
            class="btn-util btn-toggle-read-status ${
              book.status === 'done' && 'read'
            }"
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
    </div>`;
    containerBooks.insertAdjacentHTML('afterbegin', html);
  });
};

// Function to delete a book from the array based on its index
const deleteBook = function (bookIndex) {
  booksArr.splice(bookIndex, 1);
  renderBooks();
};

// Function to toggle the read status of a book based on its index
const toggleReadStatus = function (bookIndex) {
  const book = booksArr[bookIndex];
  book.status = book.status === 'done' ? 'in-progress' : 'done';
  renderBooks();
};

// Function to handle events for each book (toggle read status or delete)
const handleBtnUtilAction = function (e) {
  const book = e.target.closest('.book');
  if (!book) return;

  const bookIndex = book.dataset.index;
  if (bookIndex === undefined) return;

  if (e.target.closest('.btn-delete-book')) deleteBook(bookIndex);
  if (e.target.closest('.btn-toggle-read-status')) toggleReadStatus(bookIndex);
};

containerBooks.addEventListener('click', handleBtnUtilAction);
btnAddBook.addEventListener('click', () => modal.showModal());
btnFormCancel.addEventListener('click', () => modal.close());

// Function for handling form submission for adding a new book
formAddBook.addEventListener('submit', function (e) {
  e.preventDefault();

  // Retrieves input values from the form fields
  const title = inputBookTitle.value;
  const author = inputBookAuthor.value;
  const page = inputBookPage.value;
  const status = selectBookReadStatus.value;

  addBookToLibrary(title, author, page, status); // Adds the new book to the library array
  renderBooks(); // Re-renders the book list to display the newly added book
  modal.close(); // Closes the modal after successful submission

  // Clears the form fields to reset for the next input
  this.reset();
});

renderBooks();
