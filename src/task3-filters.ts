// src/tasks/task3-filters.ts
import { Book, BookFilter } from '../types';

export const filterByAuthor = (authorName: string): BookFilter => {
  // Вернуть функцию, которая проверяет, есть ли authorName в book.authors
};

export const filterByMinYear = (year: number): BookFilter => {
  // Вернуть функцию, которая проверяет book.year >= year
};

export const applyFilters = (books: Book[], filters: BookFilter[]): Book[] => {
  // Применить все фильтры к массиву книг
};