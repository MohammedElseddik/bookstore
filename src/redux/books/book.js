const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';
let initailState = [];

export const bookAddedAction = (book) => ({
  type: ADD_BOOK,
  payload: {
    title: book.title,
    author: book.author,
    category: book.category,
  },
});

export const bookRemovedAction = (id) => ({
  type: REMOVE_BOOK,
  payload: {
    id,
  },
});

const bookReducer = (state = initailState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      initailState = [
        ...state,
        {
          title: action.payload.title,
          author: action.payload.author,
          category: action.payload.category,
        },
      ];
      return initailState;

    case REMOVE_BOOK:
      initailState = state.filter((book) => book.id !== action.payload.id);
      return initailState;

    default:
      return state;
  }
};

export default bookReducer;
