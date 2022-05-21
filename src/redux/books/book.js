import axios from 'axios';

const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';
const FETCH_BOOKS = 'bookstore/books/FETCH_BOOKS';
const beaseUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/qLsFjmbcj4drPI4jG9EK/';

let initailState = [];

export const bookAddedAction = (book) => ({
  type: ADD_BOOK,
  payload: {
    item_id: book.item_id,
    title: book.title,
    author: book.author,
    category: book.category,
  },
});

export const bookRemovedAction = (id) => ({
  type: REMOVE_BOOK,
  payload: {
    item_id: id,
  },
});

export const onSuccessAction = (books) => ({
  type: FETCH_BOOKS,
  payload: books,
});

export const fetchBookApiAction = () => async (dispatch) => {
  const response = await axios.get(`${beaseUrl}books`);
  const booksFetched = Object.entries(response.data).map((item) => {
    console.log(item);
    const { title, author } = item[1][0];
    return { item_id: item[0], title, author };
  });
  dispatch(onSuccessAction(booksFetched));
};

export const addBookApi = (book) => async (dispatch) => {
  console.log(book);
  await axios.post(`${beaseUrl}books`, book, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  dispatch(bookAddedAction(book));
};

export const removeBookApi = (id) => async (dispatch) => {
  await axios.delete(`${beaseUrl}books/${id}`);
  dispatch(bookRemovedAction(id));
};

const bookReducer = (state = initailState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      initailState = [...state, action.payload];
      return initailState;

    case REMOVE_BOOK:
      initailState = state.filter(
        (book) => book.item_id !== action.payload.item_id,
      );
      return initailState;

    case FETCH_BOOKS:
      initailState = action.payload;
      return initailState;
    default:
      return state;
  }
};

export default bookReducer;
