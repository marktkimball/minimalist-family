import React from "react";
import { Link } from "gatsby";

import "./button.scss";

const Button = ({ to, children }) => (
  <div className="button-wrapper">
    <Link to={to} className="main-button">
      {children}
    </Link>
  </div>
);

export default Button;
