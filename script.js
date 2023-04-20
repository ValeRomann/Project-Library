const myLibrary = [
  {
    author: 'Konstantin Ivanov',
    title: 'Narspi',
    pagesNum: 175
  },
  {
    author: 'Jack London',
    title: 'Martin Iden',
    pagesNum: 653
  },
  {
    author: 'Fedor Dostoevskiy',
    title: 'Idiot',
    pagesNum: 476
  }
];

const OUTPUT_TABLE = document.querySelector('#table-output tbody');
const INPUT_FORM = document.getElementById('input-form');

showBooksTable(myLibrary);

const INPUT_BUTTON = document.getElementById('input-button');
INPUT_BUTTON.onclick = function (e) {
  e.preventDefault();
  switchForm();
};

const SUBMIT_BUTTON = document.getElementById('submit-button');
SUBMIT_BUTTON.onclick = function (e) {
  e.preventDefault();
  addBookToLibrary();
  switchForm();
};

function Book(author, title, pagesNum) {
  this.author = author;
  this.title = title;
  this.pagesNum = pagesNum;
  this.isReadBook = false;
}

function addBookToLibrary() {
  let author = document.getElementById('author').value;
  let title = document.getElementById('title').value;
  let pagesNum = document.getElementById('pagesNum').value;
  let newBook = new Book(author, title, pagesNum);
  myLibrary.push(newBook);
  showBooksTable(myLibrary);
}

function showBooksTable(myLibrary) {
  OUTPUT_TABLE.innerHTML = '';
  for (let i = 0; i < myLibrary.length; i++) {
    const ROW = document.createElement('tr');
    for (let item in myLibrary[i]) {
      if (item === 'isReadBook') continue;
      const CELL = document.createElement('td');
      CELL.textContent = myLibrary[i][item];
      ROW.appendChild(CELL);
    }

    const READ_BUTTON = document.createElement('button');
    READ_BUTTON.setAttribute('id', 'read-button');
    READ_BUTTON.innerText = 'Not Read';
    READ_BUTTON.onclick = (e) => {
      if (!myLibrary[i].isReadBook) {
        myLibrary[i].isReadBook = true;
        e.target.innerText = 'Read';
      } else {
        myLibrary[i].isReadBook = false;
        e.target.innerText = 'Not Read';
      }
    }
    const READ_CELL = document.createElement('td');
    READ_CELL.appendChild(READ_BUTTON);
    ROW.appendChild(READ_CELL);
    OUTPUT_TABLE.appendChild(ROW);

    const DELETE_BUTTON = document.createElement('button');
    DELETE_BUTTON.setAttribute('id', 'delete-button');
    DELETE_BUTTON.innerText = 'Delete Book';
    DELETE_BUTTON.onclick = (e) => {
      myLibrary.splice(i, 1);
      showBooksTable(myLibrary);
    }
    const DELETE_CELL = document.createElement('td');
    DELETE_CELL.appendChild(DELETE_BUTTON);
    ROW.appendChild(DELETE_CELL);
  }
}

function switchForm() {
  if (INPUT_FORM.className === 'input-form hidden') {
    INPUT_FORM.className = 'input-form';
    INPUT_BUTTON.innerText = 'BACK';
  } else {
    INPUT_FORM.className = 'input-form hidden';
    INPUT_BUTTON.innerText = 'NEW BOOK';
  }
}