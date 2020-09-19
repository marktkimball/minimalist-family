import React from 'react';
import logo from '../img/logo.png';
import './footer.scss';

const Footer = () => (
  <footer className="footer">
    <div className="content has-text-centered">
      <img
        src={logo}
        alt="Audrey Walsh Photography"
        style={{ width: '300px' }}
      />
    </div>

    <div className="content">
      <div className="container footer-group-container">
        <a className="footer-link" href="mailto: audrey@gmail.com">
          email: audreywalshphotography@gmail.com
        </a>
        <a
          className="footer-link"
          title="instagram"
          href="https://www.instagram.com/audreywalshphotography/"
          rel="noopener noreferrer"
          target="_blank"
        >
          instagram: @audreywalshphotography
        </a>
      </div>
    </div>
    <div className="content">
      <div className="container copyright">
        Copyright © {new Date().getFullYear()} Audrey Walsh Photography. All
        rights reserved.
        <p>
          Created by{' '}
          <a
            className="footer-link copyright"
            href="https://marktkimball.github.io/"
            rel="noopener noreferrer"
            target="_blank"
          >
            MK Engineering
          </a>
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
