const INPUT_BUTTON = document.getElementById('input-button');
INPUT_BUTTON.onclick = addBookToLibrary(author, title, pagesNum);

const OUTPUT_TABLE = document.getElementById('table-output');

let myLibrary = [];

function Book(author, title, pagesNum) {
  this.author = author;
  this.title = title;
  this.pagesNum = pagesNum;
}

function addBookToLibrary(author, title, pagesNum) {
  myLibrary.push(new Book(author, title, pagesNum));
}

function showBooksTable(myLibrary) {
  OUTPUT_TABLE.innerHTML = '';
  const ROW = document.createElement('tr');
  for (let i = 0; i < myLibrary.length; i++) {
    for (let item in myLibrary[i]) {
      const CELL = document.createElement('td');
      CELL.textContent = item;
      ROW.appendChild(CELL);
    }
  }
  OUTPUT_TABLE.appendChild(ROW);
}