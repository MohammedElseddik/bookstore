import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <div className="navBar">
    <Link to="/books">Bookstore CMS</Link>
    <Link to="/books">Books</Link>
    <Link to="/categories">Categories</Link>
  </div>
);

export default NavBar;
