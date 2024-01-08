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
        readButton.type = "button";
        // remove card button
        const removeCard = document.createElement("button");
        removeCard.setAttribute("class", "btn-remove");
        removeCard.textContent = "Remove";
        removeCard.type = "button";

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
    const inputs = document.querySelectorAll("input");
    inputs.forEach(input => {
        input.value = "";
    });
    dialog.showModal();
})

submitButton.addEventListener("click", (e) => {
    const inputs = document.querySelectorAll("#bookTitle, #bookAuthor, #bookYear, #bookPage")
    let req_input = 0;
    inputs.forEach(input => {
        if(input.value !== "") {
            req_input++;
        }
    });
    if(req_input === inputs.length){
        addBookToCollection();
        createBookCards(myCollection);
        dialog.close();
    }
})