import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { categoriesStatusAction } from '../../redux/categories/categories';

const Categories = () => {
  const dispatch = useDispatch();

  const categoriesStatus = useSelector((state) => state.categories);

  const catergoriesStatusHandler = () => {
    dispatch(categoriesStatusAction());
  };

  return (
    <div className="Categories">
      <button type="button" onClick={catergoriesStatusHandler}>
        Check status
      </button>
      <div>
        <p>{categoriesStatus}</p>
      </div>
    </div>
  );
};

export default Categories;
