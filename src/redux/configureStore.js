import { createStore, combineReducers } from 'redux';
import bookReducer from './books/book';
import categoriesReducer from './categories/categories';

const rootReducer = combineReducers({
  book: bookReducer,
  categories: categoriesReducer,
});

const store = createStore(rootReducer);
console.log(rootReducer);

export default store;
