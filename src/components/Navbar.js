import React from "react";
import { Link } from "gatsby";
import "./navbar.scss";

const Navbar = () => (
  <header className="nav-container">
    <nav className="nav-main">
      <Link to="/" className="nav-home-link">
        Minimalist Travel Family
      </Link>
      <div className="nav-other-links">
        <Link to="/" className="nav-item" activeClassName="nav-item-active">
          Home
        </Link>
        <Link
          activeClassName="nav-item-active"
          className="nav-item"
          partiallyActive
          to="/blog"
        >
          Blog
        </Link>
        <Link
          activeClassName="nav-item-active"
          className="nav-item"
          to="/about"
        >
          About
        </Link>
      </div>
    </nav>
  </header>
);

export default Navbar;
