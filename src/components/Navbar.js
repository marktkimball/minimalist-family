import React from 'react';
import { Link } from 'gatsby';
import logo from '../img/Monogram_orange.png';
import './navbar.scss';

const Navbar = () => (
  <nav className="menu-container">
    <input type="checkbox" aria-label="Toggle menu" />
    <span></span>
    <span></span>
    <span></span>
    <Link to="/" className="menu-logo" title="Branch Hill Baptist Church">
      <img src={logo} alt="Branch Hill Baptist Church" />
    </Link>

    <div className="menu">
      <ul>
        <li>
          <Link to="/im-new">I'm New</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/events">Events</Link>
        </li>
        <li>
          <Link to="/sermons">Sermons</Link>
        </li>
        <li>
          <Link to="/give">Give</Link>
        </li>
      </ul>
      <ul>
        <li className="nav-item-cta-container">
          <Link className="nav-item-cta" to="/live">
            Live
          </Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
