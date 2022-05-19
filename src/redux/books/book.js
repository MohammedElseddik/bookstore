const BOOK_ADDED = "bookstore/books/BOOK_ADDED";
const BOOK_REMOVED = "bookstore/books/BOOK_REMOVED";
let initailState = [];

export const bookAddedAction = (book) => ({
  type: BOOK_ADDED,
  payload: {
    title: book.title,
    author: book.author,
    category: book.category,
  },
});

export const bookRemovedAction = (id) => ({
  type: BOOK_REMOVED,
  payload: {
    id,
  },
});

const bookReducer = (state = initailState, action) => {
  switch (action.type) {
    case BOOK_ADDED:
      initailState = [
        ...state,
        {
          title: action.payload.title,
          author: action.payload.author,
          category: action.payload.category,
        },
      ];
      return initailState;
      break;

    case BOOK_REMOVED:
      initailState = state.filter((book) => {
        return book.id !== action.payload.id;
      });
      return initailState;
      break;

    default:
      return state;
  }
};

export default bookReducer;
