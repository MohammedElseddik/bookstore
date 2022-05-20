import React from 'react';
import { useDispatch } from 'react-redux';
import { bookAddedAction } from '../../redux/books/book';

const AddBookForm = () => {
  const dispatch = useDispatch();
  const bookObject = {};

  const submitHandler = (event) => {
    event.preventDefault();
  };

  const titleInputValueHandeler = (event) => {
    bookObject.title = event.target.value;
  };

  const authorInputValueHandler = (event) => {
    bookObject.author = event.target.value;
  };

  const addBookHandler = () => {
    dispatch(bookAddedAction(bookObject));
    console.log(bookObject);
  };

  return (
    <form className="add-book" onSubmit={submitHandler}>
      <div className="add-book__header">
        <h3> ADD NEW BOOK</h3>
      </div>
      <div className="add-book__controls">
        <input
          type="text"
          placeholder="Book title"
          onInput={titleInputValueHandeler}
        />
        <input
          type="text"
          placeholder="Author"
          onInput={authorInputValueHandler}
        />
      </div>
      <div className="add-book__actions">
        <button type="submit" onClick={addBookHandler}>
          ADD BOOK
        </button>
      </div>
    </form>
  );
};

export default AddBookForm;
