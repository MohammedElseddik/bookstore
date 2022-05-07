import React from 'react';

const Book = (props) => {
  const { bookTitle, bookAuthor, bookCategory } = props;
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
          <button type="button">Remove</button>
        </li>
        <li className="btn">
          <button type="button">Edit</button>
        </li>
      </ul>
    </div>
  );
};

export default Book;
