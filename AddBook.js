var Book = /** @class */ (function () {
    function Book(id, title, author, ratings, price) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.ratings = ratings;
        this.price = price;
    }
    return Book;
}());
// BookList Class: Handle BookList Tasks
var BookList = /** @class */ (function () {
    function BookList() {
    }
    BookList.displayBooks = function () {
        var books = Store.getBooks();
        books.forEach(function (book) { return BookList.addBookToList(book); });
    };
    BookList.addBookToList = function (book) {
        var list = document.querySelector('#book-list');
        var html = document.createElement('tr');
        html.innerHTML = "\n        <td>" + book.id + "</td> \n        <td>" + book.title + "</td>\n        <td>" + book.author + "</td>\n        <td>" + book.ratings + "</td>\n        <td>" + book.price + "</td>\n        <td><a href=\"#\" class=\"btn delete\" style=\"font-size:20px; text-allign:center; color:red;\">&Cross;</a></td>\n        ";
        list.appendChild(html);
    };
    BookList.deleteBook = function (a) {
        if (a.classList.contains('delete')) {
            a.parentElement.parentElement.remove();
        } // a . td,          tr 
    };
    BookList.showAlert = function (message, className) {
        var div = document.createElement('div');
        div.className = "alert alert-" + className;
        div.appendChild(document.createTextNode(message));
        var container = document.querySelector('.container');
        var form = document.querySelector('#book-form');
        container.insertBefore(div, form);
        // Vanish in 3 seconds
        setTimeout(function () { return document.querySelector('.alert').remove(); }, 3000);
    };
    BookList.clearFields = function () {
        document.querySelector('#id1').value = '';
        document.querySelector('#title').value = '';
        document.querySelector('#author').value = '';
        document.querySelector('#ratings').value = '';
        document.querySelector('#price').value = '';
    };
    return BookList;
}());
// Store Class: Handles Storage
var Store = /** @class */ (function () {
    function Store() {
    }
    Store.getBooks = function () {
        var books; //                                 (key,values)---strings
        if (localStorage.getItem('books') === null) {
            books = [];
        }
        else {
            books = JSON.parse(localStorage.getItem('books')); //get
        }
        return books;
    };
    Store.addBook = function (book) {
        var books = Store.getBooks(); //[]
        books.push(book); //    [object,object]-------------[id,title,author,ratings,price]--  'id',title,author,ratings,price
        localStorage.setItem('books', JSON.stringify(books)); //put--update
    };
    Store.removeBook = function (id) {
        var books = Store.getBooks();
        books.forEach(function (a, index) {
            if (a.id === id) {
                books.splice(index, 1);
            }
        });
        localStorage.setItem('books', JSON.stringify(books));
    };
    return Store;
}());
// Event: Display Books
document.addEventListener('DOMContentLoaded', BookList.displayBooks);
// Event: Add a Book
document.querySelector('#book-form').addEventListener('submit', function (e) {
    // Prevent actual submit
    e.preventDefault();
    // Get form values
    var id = document.querySelector('#id1').value;
    var title = document.querySelector('#title').value;
    var author = document.querySelector('#author').value;
    var ratings = document.querySelector('#ratings').value;
    var price = document.querySelector('#price').value;
    // Validate
    if (title === '' || author === '' || id === '' || ratings === '' || price === '') {
        BookList.showAlert('Please fill in all fields', 'danger');
    }
    else {
        // Instatiate book
        var book = new Book(id, title, author, ratings, price);
        // Add Book to BookList
        BookList.addBookToList(book); //website page
        // Add book to store
        Store.addBook(book); //local storage
        // Show success message
        BookList.showAlert('Book Added', 'success');
        // Clear fields
        BookList.clearFields();
    }
});
// Event: Remove a Book
document.querySelector('#book-list').addEventListener('click', function (e) {
    // Remove book from BookList
    console.log(e.target);
    BookList.deleteBook(e.target); ///website
    var v = e.target.parentElement.parentElement.children[0].textContent; ///localstorage
    //    a.     td            tr -----------id.-----------1             
    console.log(v); //1
    // Remove book from store
    Store.removeBook(v);
    // Show success message
    BookList.showAlert('Book Removed', 'success');
});
