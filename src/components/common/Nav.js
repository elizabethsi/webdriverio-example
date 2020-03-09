import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.scss';

const Nav = () => (
  <nav className="navbar main-nav is-light" role="navigation" aria-label="main navigation">
    <div className="navbar-brand">
      <Link className="navbar-item" to="/">Home</Link>
      <Link className="navbar-item" to="/about">About</Link>
      <Link className="navbar-item" to="/contact">Contact Us</Link>
    </div>
  </nav>
);

export default Nav;
