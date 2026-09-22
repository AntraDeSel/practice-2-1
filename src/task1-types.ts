// Задание 1: Интерфейсы и типы
// Описание модели каталога книг

// TODO 1: Объявите интерфейс Book
// Поля:
//   - id (string, readonly)
//   - title (string)
//   - authors (массив строк)
//   - year (number, опционально)
//   - rating (number от 0 до 5, опционально)

// TODO 2: Объявите тип Catalog как словарь: ключ — id книги, значение — Book
// Используйте Record<string, Book>

// TODO 3: Объявите тип BookFilter как функцию, которая принимает Book и возвращает boolean

// TODO 4: Реализуйте функцию formatBook(book: Book): string
// Формат: "Title (Year) — Authors"
// Если year не указан — пропустить скобки
// Пример: "TypeScript Guide (2023) — John Doe, Jane Smith"

// TODO 5: Реализуйте функцию calculateAverageYear(books: Book[]): number
// Вернуть средний год издания. Если книг нет или у них нет года — вернуть 0.