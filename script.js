// an array to store book collection
const myCollection = [];

const addBookButton = document.querySelector(".btn-add")
const dialog = document.querySelector("dialog");
const submitButton = document.querySelector(".btn-submit");

// Book constructor function
function Book(id, title, author, year, page, read) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.year = year;
    this.page = page;
    this.read = read;
};

// let user add book to collection
function addBookToCollection() {
    const titleInput = document.getElementById("bookTitle").value;
    const authorInput = document.getElementById("bookAuthor").value;
    const yearInput = document.getElementById("bookYear").value;
    const pageInput = document.getElementById("bookPage").value;
    const readInput = document.getElementById("bookRead").checked;

    const newBook = new Book(myCollection.length, titleInput, authorInput, yearInput, pageInput, readInput);
    myCollection.push(newBook);
};

// function to create collection cards
function createBookCards(array) {
    const cardsContainer = document.querySelector(".cards");

    // clear cardsContainer child
    cardsContainer.textContent = '';

    array.forEach(element => {
        // card div
        const bookCard = document.createElement("div");
        bookCard.setAttribute("class", "card");

        // card div content
        // title
        const titleText = document.createElement("p");
        titleText.textContent = `"${element.title}"`;
        // author
        const authorText = document.createElement("p");
        authorText.textContent = element.author;
        // year
        const yearText = document.createElement("p");
        yearText.textContent = element.year.toString();
        // pages
        const pagesText = document.createElement("p");
        pagesText.textContent = `${element.page.toString()} pages`;
        // read status
        const readButton = document.createElement("button");
        if(element.read === true) {
            readButton.setAttribute("class", "btn-read");
            readButton.textContent = "Read";
        } else {
            readButton.textContent = "Not read";
        }
        // remove card button
        const removeCard = document.createElement("button");
        removeCard.setAttribute("class", "btn-remove");
        removeCard.textContent = "Remove";

        // append newly created element to cards collection
        bookCard.appendChild(titleText);
        bookCard.appendChild(authorText);
        bookCard.appendChild(yearText);
        bookCard.appendChild(pagesText);

        const buttonContainer = document.createElement("div");
        buttonContainer.setAttribute("class", "btn-container");
        buttonContainer.appendChild(readButton);
        buttonContainer.appendChild(removeCard);

        bookCard.appendChild(buttonContainer)

        cardsContainer.appendChild(bookCard);

        // remove card event
        removeCard.addEventListener("click", (e) => {
            if(element.id > -1) {
                array = array.splice(element.id, 1);
            };
            e.target.parentNode.remove();
        });

        readButton.addEventListener("click", (e) => {
            if(e.target.classList.contains("btn-read")) {
                e.target.removeAttribute("class", "btn-read");
                readButton.textContent = "Not read";
                element.read = false;
            } else {
                e.target.setAttribute("class", "btn-read");
                readButton.textContent = "Read"
                element.read = true;
            }
        });
    });
}

addBookButton.addEventListener("click", () => {
    dialog.showModal();
})

submitButton.addEventListener("click", () => {
    addBookToCollection()
    createBookCards(myCollection);
    dialog.close();
})

// // seed myCollection array
const sherlock = new Book(myCollection.length,"The Adventures of Sherlock Holmes", "Sir Arthur Conan Doyle", 1892, 307, false);
// const poirot = new Book("The Murder on the Links", "Agatha Christie", 1923, 298, false);

// // add new object to the array
myCollection.push(sherlock);
createBookCards(myCollection);
// myCollection.push(poirot);