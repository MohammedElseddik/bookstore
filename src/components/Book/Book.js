import React from 'react';
import { useDispatch } from 'react-redux';
import { bookRemovedAction } from '../../redux/books/book';

const Book = (props) => {
  const {
    bookTitle, bookAuthor, bookCategory, id,
  } = props;

  const dispatch = useDispatch();

  const removeBookHandler = (bookId) => {
    dispatch(bookRemovedAction(bookId));
  };

  return (
    <div className="book">
      <span>{bookCategory}</span>
      <h3>{bookTitle}</h3>
      <span>{bookAuthor}</span>
      <ul className="buttons">
        <li className="btn">
          <button type="button">Comments</button>
        </li>
        <li className="btn">
          <button
            type="button"
            onClick={() => {
              removeBookHandler(id);
            }}
          >
            Remove
          </button>
        </li>
        <li className="btn">
          <button type="button">Edit</button>
        </li>
      </ul>
    </div>
  );
};

export default Book;
