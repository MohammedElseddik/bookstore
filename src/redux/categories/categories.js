const CHECK_CATEGORIES_STATUS = 'bookstore/categories/CATEGORY_STATUS';

export const categoriesStatusAction = () => ({
  type: CHECK_CATEGORIES_STATUS,
});

const categoriesReducer = (state = '', action) => {
  const statusMsg = 'This section of the website app is under construction';
  switch (action.type) {
    case CHECK_CATEGORIES_STATUS:
      return statusMsg;
    default:
      return state;
  }
};

export default categoriesReducer;
