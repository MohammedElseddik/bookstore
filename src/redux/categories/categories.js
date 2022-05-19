const CATEGORIES_STATUS = "CATEGORY_STATUS";
const categoryInitailState = [];

export const caretgoriesStatusAction = (status) => ({
  type: CATEGORIES_STATUS,
  payload: {
    status,
  },
});

const categoriesReducer = (state = categoryInitailState, action) => {
  switch (action.type) {
    case CATEGORIES_STATUS:
      return [
        {
          status: "Under construction",
        },
      ];
    default:
      return state;
  }
};

export default categoriesReducer;
