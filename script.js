// an array to store book collection
const myCollection = [];

// Book constructor function
function Book(title, author, year, page, read) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.page = page;
    this.read = read;
};

// let user add book to collection
function addBookToCollection() {

};

// function to create collection cards
function createBookCards(array) {
    const cardsContainer = document.querySelector(".cards");

    array.forEach(element => {
        // card div
        const bookCard = document.createElement("div");
        bookCard.setAttribute("class", "card");

        // card div text content
        const titleText = document.createElement("p");
        titleText.textContent = element.title;

        // append newly created element to cards collection
        bookCard.appendChild(titleText);
        cardsContainer.appendChild(bookCard);
    });
}

// seed myCollection array
const sherlock = new Book("The Adventures of Sherlock Holmes", "Sir Arthur Conan Doyle", 1892, 307, false);
const poirot = new Book("The Murder on the Links", "Agatha Christie", 1923, 298, false);

// add new object to the array
myCollection.push(sherlock);
myCollection.push(poirot);

createBookCards(myCollection);