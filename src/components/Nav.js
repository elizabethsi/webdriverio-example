import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.scss';

const Nav = () => (
  <nav className="nav main-nav">
    <ul>
      <li>
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
      </li>
    </ul>
  </nav>
);

export default Nav;
