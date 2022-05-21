import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from '../Book/Book';
import AddBookForm from '../AddBookForm/AddBookForm';
import { fetchBookApiAction } from '../../redux/books/book';

const Books = () => {
  const books = useSelector((state) => state.book);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBookApiAction());
  }, []);

  return (
    <div className="Books">
      {books.length ? (
        books.map((book) => (
          <Book
            key={book.item_id}
            bookTitle={book.title}
            bookAuthor={book.author}
            bookCategory={book.category}
            id={book.item_id}
          />
        ))
      ) : (
        <p>No Books available!</p>
      )}
      <AddBookForm />
    </div>
  );
};

export default Books;
