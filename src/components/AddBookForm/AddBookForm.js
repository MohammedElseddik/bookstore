import React from 'react';
import { useDispatch } from 'react-redux';
import { v4 } from 'uuid';
import { addBookApi } from '../../redux/books/book';
import './AddBookForm.css';

const AddBookForm = () => {
  const dispatch = useDispatch();
  const bookObject = { item_id: v4(), category: 'Default' };

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
    dispatch(addBookApi(bookObject));
  };

  return (
    <div className="form">
      <div className="add-book__header">
        <h3> ADD NEW BOOK</h3>
      </div>
      <form className="add-book-form" onSubmit={submitHandler}>
        <div className="add-book__controls">
          <input
            className="title-input"
            type="text"
            placeholder="Book title"
            required
            onInput={titleInputValueHandeler}
          />
          <input
            className="author-input"
            type="text"
            placeholder="Author"
            required
            onInput={authorInputValueHandler}
          />
          <button className="submit-btn" type="submit" onClick={addBookHandler}>
            ADD BOOK
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddBookForm;
