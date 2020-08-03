import React from 'react';
import { Link } from 'gatsby';
import logo from '../img/logo.png';
import './footer.scss';

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="content has-text-centered">
          <img
            src={logo}
            alt="Branch Hill Baptist Church"
            style={{ width: '14em', height: '3.78em' }}
          />
        </div>
        <div className="content">
          <div className="container footer-list-container">
            <div className="footer-list-group">
              <h4>About</h4>
              <ul className="footer-link-list">
                <li>
                  <Link to="/beliefs">Our Beliefs</Link>
                </li>
                <li>
                  <Link to="/history">Our History</Link>
                </li>
                <li>
                  <Link to="/pastor">Meet Our Pastor</Link>
                </li>
                <li>
                  <Link to="/leadership">Leadership</Link>
                </li>
              </ul>
            </div>
            <div className="footer-list-group">
              <h4>Contact</h4>
              <ul className="footer-link-list contact-list">
                <li>
                  <a href="tel:5136833663">phone: (513) 683-3663</a>
                </li>
                <li>email: info@branchhill.org</li>
                <li>fax: (513) 683-4685</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="container">
            <div className="column is-12">
              <div className="footer-text sub-headline-text">
                Visit:
                <Link
                  className="visit-us-link"
                  to="https://goo.gl/maps/88B9rQsy9huwo7dy7"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  6526 Guinea Pike, Loveland, Ohio 45140
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="container copyright">
            Copyright © 2020 Branch Hill Baptist Church. All rights reserved.
          </div>
        </div>
      </footer>
    );
  }
};

export default Footer;
