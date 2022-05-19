import React from "react";
import Book from "../Book/Book";
import AddBookForm from "../AddBookForm/AddBookForm";

const Books = () => {
  const books = [
    {
      id: "book1",
      title: "The Hunger Games",
      author: "Suzanne Collins",
      category: "Action",
    },

    {
      id: "book2",
      title: "Dune",
      author: "Frank Herbert",
      category: "Science Fiction",
    },

    {
      id: "book3",
      title: "Capital in the Twenty-First Century",
      author: "Suzanne Collins",
      category: "Economy",
    },
  ];

  return (
    <div className="Books">
      {books.map((book) => (
        <Book
          key={book.id}
          bookTitle={book.title}
          bookAuthor={book.author}
          bookCategory={book.category}
        />
      ))}
      <AddBookForm />
    </div>
  );
};

export default Books;
