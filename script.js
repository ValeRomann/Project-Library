let myLibrary = [];

const OUTPUT_TABLE = document.getElementById('table-output');

const INPUT_FORM = document.getElementById('input-form');

const INPUT_BUTTON = document.getElementById('input-button');
INPUT_BUTTON.onclick = function (e) {
  e.preventDefault();
  switchForm();
};

const SUBMIT_BUTTON = document.getElementById('submit-button');
SUBMIT_BUTTON.onclick = function (e) {
  e.preventDefault();
  addBookToLibrary(author, title, pagesNum);
  switchForm();
};


function Book(author, title, pagesNum) {
  this.author = author;
  this.title = title;
  this.pagesNum = pagesNum;
}

function addBookToLibrary(author, title, pagesNum) {
  myLibrary.push(new Book(author, title, pagesNum));
  showBooksTable(myLibrary);
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

function switchForm() {
  INPUT_FORM.className === 'input-form hidden'
  ? INPUT_FORM.className = 'input-form'
  : INPUT_FORM.className = 'input-form hidden';
}