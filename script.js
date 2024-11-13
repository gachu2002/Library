const Books = [({title: "The Hobbit", author: "J.R.R. Tolkien", page: 295, isRead: true}), ({title: "The Lord of the Rings", author: "J.R.R. Tolkien", page: 1178, isRead: true}), ({title: "The Silmarillion", author: "J.R.R. Tolkien", page: 365, isRead: false}), ({title: "The Children of Húrin", author: "J.R.R. Tolkien", page: 313, isRead: false}), 
    ({title: "Unfinished Tales", author: "J.R.R. Tolkien", page: 472, isRead: false}), ({title: "The Fall of Gondolin", author: "J.R.R. Tolkien", page: 304, isRead: false}), ({title: "Beren and Lúthien", author: "J.R.R. Tolkien", page: 288, isRead: false}), ({title: "The Adventures of Tom Bombadil", author: "J.R.R. Tolkien", page: 121, isRead: false}), ({title: "The Road Goes Ever On", author: "J.R.R. Tolkien", page: 112, isRead: false}), ({title: "The Father Christmas Letters", author: "J.R.R. Tolkien", page: 192, isRead: false}),];    

function Book(title, author, page, isRead) {
  this.title = title;
  this.author = author;
  this.page = page;
  this.isRead = isRead;   
}

function addBookToLibrary(title, author, page, isRead) {
    Books.push(new Book(title, author, page, isRead));
}

function displayBooks() {
    const bookList = document.querySelector(".book-list");
    bookList.innerHTML = "";
    Books.forEach((book) => {
        const bookCard = document.createElement("div");
        bookCard.classList.add("book-card");
        bookCard.innerHTML = `<h2>${book.title}</h2>` + `<p>${book.author}</p>` 
                            + `<p>${book.page}</p>` + `<p>${book.isRead}</p>`;
        bookList.appendChild(bookCard);
    });
}

const addBookForm = document.querySelector("#add-book-form");
addBookForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const page = document.querySelector("#page").value;
    const isRead = document.querySelector("#isRead").value;
    addBookToLibrary(title, author, page, isRead);
    displayBooks();
});

/**
 * Initializes the book display by calling the `displayBooks()` function when the DOM content has finished loading.
 */
document.addEventListener("DOMContentLoaded", () => {
    displayBooks();
});