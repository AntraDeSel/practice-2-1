// src/tasks/task2-functions.ts
import { Book, Catalog, BookFilter } from './task1-types';

export function formatBook(book: Book): string {
  // Вернуть строку: "Title (Year): Authors"
  // Например: "TypeScript Guide (2023): John Doe, Jane Smith"
}

export function calculateAverageYear(books: Book[]): number {
  // Вернуть средний год издания
  // Если книг нет — вернуть 0
}