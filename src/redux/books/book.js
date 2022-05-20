import { v4 as uuidv4 } from 'uuid';

const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

let initailState = [
  {
    id: '1',
    title: 'The Redux Books',
    author: 'Suzanne Collins',
    category: 'Action',
  },

  {
    id: '2',
    title: 'The React Books',
    author: 'Frank Herbert',
    category: 'Science Fiction',
  },
];

export const bookAddedAction = (book) => ({
  type: ADD_BOOK,
  payload: {
    id: uuidv4(),
    title: book.title,
    author: book.author,
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
          id: action.payload.id,
          title: action.payload.title,
          author: action.payload.author,
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
