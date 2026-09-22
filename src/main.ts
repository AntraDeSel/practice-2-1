import './styles.css';
import { Book } from './types';
import { formatBook } from './tasks/task2-functions';
import { applyFilters, filterByAuthor, filterByMinYear } from './tasks/task3-filters';

// Готовые данные для старта
const initialBooks: Book[] = [
  { id: '1', title: 'TypeScript Guide', authors: ['John Doe'], year: 2023 },
  { id: '2', title: 'JavaScript Basics', authors: ['Jane Smith'], year: 2022 },
];

// TODO: Студенты пишут код ниже
const bookList = document.getElementById('bookList')!;

function renderBooks(books: Book[]) {
  bookList.innerHTML = books.map(book => 
    `<div class="book-card">${formatBook(book)}</div>`
  ).join('');
}

// Отрисовать начальные книги
renderBooks(initialBooks);

// Обработчик формы
document.getElementById('bookForm')?.addEventListener('submit', (e) => {
  e.preventDefault();
  // TODO: Получить данные из формы, добавить книгу, перерисовать
});

// Обработчик фильтров
document.getElementById('applyFilters')?.addEventListener('click', () => {
  // TODO: Применить фильтры, перерисовать
});