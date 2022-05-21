import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

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
      <img
        className="user"
        src="https://e7.pngegg.com/pngimages/1004/160/png-clipart-computer-icons-user-profile-social-web-others-blue-social-media.png"
        alt="user-icon"
      />
    </div>
  </nav>
);

export default NavBar;
