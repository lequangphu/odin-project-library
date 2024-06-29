const myLibrary = [];

const book1 = new Book("To Kill a Mockingbird", "Harper Lee", 281, true);
const book2 = new Book("1984", "George Orwell", 328, false);
const book3 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 180, true);
const book4 = new Book("The Catcher in the Rye", "J.D. Salinger", 214, false);

myLibrary.push(book1, book2, book3, book4);

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function createBookCard(book) {
  const bookCard = document.createElement('div');
  bookCard.classList.add('book', 'card');

  const bookTitle = document.createElement('h3');
  bookTitle.textContent = book.title;
  bookCard.appendChild(bookTitle);

  const bookAuthor = document.createElement('p');
  bookAuthor.textContent = `Author: ${book.author}`;
  bookCard.appendChild(bookAuthor);

  const bookPages = document.createElement('p');
  bookPages.textContent = `Pages: ${book.pages}`;
  bookCard.appendChild(bookPages);

  const bookRead = document.createElement('p');
  bookRead.textContent = `Read: ${book.read ? 'Yes' : 'No'}`;
  bookCard.appendChild(bookRead);

  const removeButton = document.createElement('button');
  removeButton.textContent = 'Remove';
  removeButton.addEventListener('click', function() {
    const bookIndex = myLibrary.indexOf(book);
    if (bookIndex > -1) {
      myLibrary.splice(bookIndex, 1);
      bookCard.remove();
    }
  });
  bookCard.appendChild(removeButton);

  return bookCard;
}

document.getElementById('newBookForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const pages = document.getElementById('pages').value;
  const read = document.getElementById('read').checked;

  const newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);

  const bookCard = createBookCard(newBook);
  booksContainer.appendChild(bookCard);

  document.getElementById('newBookForm').reset();
});

const booksContainer = document.querySelector('.books');
booksContainer.innerHTML = '';

myLibrary.forEach(book => {
  const bookCard = createBookCard(book);
  booksContainer.appendChild(bookCard);
});
