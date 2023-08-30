const myLibrary = [];

function Book(title,author,pages,read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

}


Book.prototype.toggleRead = function(){
    this.read = !this.read;
}

function toggleRead(index){
    myLibrary[index].toggleRead();
    render()
}



function render(){
    let libraryCard = document.querySelector(".book-cards");
    libraryCard.innerHTML = "";
    for(let i=0; i<myLibrary.length; i++){
        let book = myLibrary[i];
        let bookCard = document.createElement("div");
        bookCard.setAttribute("class", "card");
        bookCard.innerHTML = `
            <h3>${book.title}<br></h3>
            <h3>by ${book.author}</h3>
            <h4>${book.pages} Pages</h4>
            <h4>${book.read ? "Read" : "Not Read yet"}</h4>
            <button style="background-color: #5C5470;" class="toggle-btn" onclick="toggleRead(${i})">Toggle Read</button>
            <button onclick="removeBook(${i})">remove</button>

        `;
        libraryCard.appendChild(bookCard);
    }
}

function addBookToLibrary() {
    let title = document.getElementById("book-nm").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("book-pages").value;
    let read = document.getElementById("read").checked;
    
    let newBook = new Book(title,author,pages,read);
    
    myLibrary.push(newBook);
    console.log(myLibrary);
    render();
}



//add button//
let addBtn = document.querySelector(".add-book > button");
let addForm = document.getElementById("add-book-form")
addBtn.addEventListener("click", () => {
    addForm.style.display = "block"
})


//remove button//
function removeBook(index){
    myLibrary.splice(index, 1);
    render();
}

document.getElementById("add-book-form").addEventListener("submit", () => {
    event.preventDefault();
    addBookToLibrary();
})