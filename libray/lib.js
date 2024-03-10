class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
        this.available = true;
    }
}

class Library {
    constructor() {
        this.books = [];
    }

    addBook(title, author) {
        const newBook = new Book(title, author);
        this.books.push(newBook);
    }
    displayAvailableBooks() {
        console.log("Available Books:");
        this.books.forEach(book => {
            if (book.available) {
                console.log(`${book.title} by ${book.author}`);
            }
        });
    }

    borrowBook(title) {
        const book = this.books.find(book => book.title === title);
        if (!book) {
            console.log("Book not found.");
            return;
        }

        if (!book.available) {
            console.log("Book is not available for borrowing.");
            return;
        }

        book.available = false;
        console.log(`${title} has been borrowed.`);
    }

    returnBook(title) {
        const book = this.books.find(book => book.title === title);
        if (!book) {
            console.log("Book not found.");
            return;
        }

        if (book.available) {
            console.log("Book is already available.");
            return;
        }

        book.available = true;
        console.log(`${title} has been returned.`);
    }
}
const library = new Library();
library.addBook("english book", "F. Scott Fitzgerald");
library.addBook("mathematic", "Harper Lee");

library.displayAvailableBooks();

library.borrowBook("english book");
library.borrowBook("mathematic");
library.borrowBook("Non-existent Book");

library.returnBook("mathematic");

library.displayAvailableBooks();
