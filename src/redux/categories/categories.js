const CHECK_CATEGORIES_STATUS = 'bookstore/categories/CATEGORY_STATUS';
const categoryInitailState = [];

export const caretgoriesStatusAction = (status) => ({
  type: CHECK_CATEGORIES_STATUS,
  payload: {
    status,
  },
});

const categoriesReducer = (state = categoryInitailState, action) => {
  switch (action.type) {
    case CHECK_CATEGORIES_STATUS:
      return [
        {
          status: 'Under construction',
        },
      ];
    default:
      return state;
  }
};

export default categoriesReducer;
