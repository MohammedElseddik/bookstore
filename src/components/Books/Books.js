import React from 'react';
import Book from '../Book/Book';
import AddBookForm from '../AddBookForm/AddBookForm';

const Books = () => {
  const books = [
    {
      id: 'book1',
      title: 'The Hunger Games',
      author: 'Suzanne Collins',
      category: 'Action',
    },

    {
      id: 'book2',
      title: 'Dune',
      author: 'Frank Herbert',
      category: 'Science Fiction',
    },

    {
      id: 'book3',
      title: 'Capital in the Twenty-First Century',
      author: 'Suzanne Collins',
      category: 'Economy',
    },
  ];

  return (
    <div className="Books">
      <Book
        bookTitle={books[0].title}
        bookAuthor={books[0].author}
        bookCategory={books[0].category}
      />

      <Book
        bookTitle={books[1].title}
        bookAuthor={books[1].author}
        bookCategory={books[1].category}
      />

      <Book
        bookTitle={books[2].title}
        bookAuthor={books[2].author}
        bookCategory={books[2].category}
      />

      <AddBookForm />
    </div>
  );
};

export default Books;
