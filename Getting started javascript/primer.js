let favoriteBooks = []
const GREAT = 'great';

function addFavoriteBook(bookName) {
    let lowerCaseBookName = bookName.toLowerCase();
    if (!lowerCaseBookName.includes(GREAT)) {
        favoriteBooks.push(bookName);
    }
}

function printFavoriteBooks() {
    let number = String(favoriteBooks.length);
    console.log(`My ${number} Favorite Books: ...`);
    for (let book of favoriteBooks) {
        console.log(book);
    }
}

addFavoriteBook('The song of ice and Fire');
addFavoriteBook('Vampire Kiss');
addFavoriteBook('Harry Potter');

printFavoriteBooks();