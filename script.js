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

// Delete book function
function deleteBook(index) {
    Books.splice(index, 1);
    displayBooks();
}

function displayBooks() {
    const bookList = document.querySelector(".book-list");
    bookList.innerHTML = "";
    Books.forEach((book) => {
        const bookCard = document.createElement("div");
        bookCard.classList.add("book-card");
        bookCard.innerHTML = `<h2>${book.title}</h2>` + `<p>${book.author}</p>` 
                            + `<p>${book.page}</p>` + `<p>${book.isRead}</p>` + `<button class="delete-button" onclick="deleteBook(${Books.indexOf(book)})">Delete</button>`;
        bookList.appendChild(bookCard);
    });
}

// Open form function
function openForm() {
    document.querySelector(".modal-overlay").style.display = "block";
}

// Refresh form function
function refreshForm() {
    document.querySelector("#title").value = "";
    document.querySelector("#author").value = "";
    document.querySelector("#page").value = "";
    document.querySelector("#isRead").value = "";
}

// Close form function
function closeForm() {
    document.querySelector(".modal-overlay").style.display = "none";
}

// Add event listener to the "Add Book" button
const addBookButton = document.querySelector(".add-book-button");
addBookButton.addEventListener("click", () => {
    const addBookForm = document.querySelector(".modal-overlay");
    addBookForm.style.display = "block";
});

// Add event listener to the Submit button
const addBookForm = document.querySelector("#add-book-form");
addBookForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const page = document.querySelector("#page").value;
    const isRead = document.querySelector("#isRead").value;
    addBookToLibrary(title, author, page, isRead);
    closeForm();
    refreshForm();
    displayBooks();
});


// Add event listener to the "Close" button
const closeButton = document.querySelector(".close-button");
closeButton.addEventListener("click", () => {
    closeForm();
    refreshForm();
});


/**
 * Initializes the book display by calling the `displayBooks()` function when the DOM content has finished loading.
 */
document.addEventListener("DOMContentLoaded", () => {
    displayBooks();
});