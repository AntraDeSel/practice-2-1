// src/types.ts
export interface Book {
  readonly id: string;
  title: string;
  authors: string[];
  year?: number;
  rating?: number;
}

export type Catalog = Record<string, Book>;

export type BookFilter = (book: Book) => boolean;