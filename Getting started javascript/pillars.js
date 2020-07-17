class Bookshelf {
    constructor() {
        this.favoriteBooks = []
    }

    addFavoriteBook(bookName) {
        let lowerCaseBookName = bookName.toLowerCase();
        if (!lowerCaseBookName.includes('great')) {
            this.favoriteBooks.push(bookName);
        }
    }

    printFavoriteBooks() {
        let number = String(this.favoriteBooks.length);
        console.log(`My ${number} Favorite Books: ...`);
        for (let book of this.favoriteBooks) {
            console.log(book);
        }
    }   
}

function fakeAjax(url,cb) {
	setTimeout(function fakeLoadingDelay(){
		cb([
			"A Song of Ice and Fire",
			"The Great Gatsby",
			"Crime & Punishment",
			"Great Expectations",
			"You Don't Know JS"
		]);
	},500);
}

function loadBooks(bookshelf) {
    var BOOK_API = "https://some.url/api";
    fakeAjax(BOOK_API, function getBooks(books){
        for (let book of books) {
            bookshelf.addFavoriteBook(book);
        }
        bookshelf.printFavoriteBooks();
    });
}

loadBooks(new Bookshelf());