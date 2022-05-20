import React from 'react';
import { useSelector } from 'react-redux';
import Book from '../Book/Book';
import AddBookForm from '../AddBookForm/AddBookForm';

const Books = () => {
  const books = useSelector((state) => state.book);

  return (
    <div className="Books">
      {books.map((book) => (
        <Book
          key={book.id}
          bookTitle={book.title}
          bookAuthor={book.author}
          bookCategory={book.category}
          id={book.id}
        />
      ))}
      <AddBookForm />
    </div>
  );
};

export default Books;
