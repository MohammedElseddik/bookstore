import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NavBar = () => (
  <nav className="navBar">
    <ul className="navBar__menu">
      <li className="navBar__menu_item">
        <Link to="/books" className="logo">
          Bookstore CMS
        </Link>
      </li>
      <li className="navBar__menu_item">
        <Link to="/books">Books</Link>
      </li>
      <li className="navBar__menu_item">
        <Link to="/categories">Categories</Link>
      </li>
    </ul>
    <div className="user">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"></svg>
    </div>
  </nav>
);

export default NavBar;
