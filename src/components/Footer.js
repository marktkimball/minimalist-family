import React from 'react';
import { Link } from 'gatsby';
import logo from '../img/logo.png';
import InstagramIcon from '../img/social/instagram.svg';
import './footer.scss';

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="content has-text-centered">
          <img
            src={logo}
            alt="Audrey Walsh Photography"
            style={{ width: '300px' }}
          />
        </div>

        <div className="content">
          <div className="container footer-list-container">
            <div className="footer-list-group">
              <ul className="footer-link-list contact-list">
                <li>
                  <a href="mailto: audrey@gmail.com">
                    email: audreywalshphotography@gmail.com
                  </a>
                </li>
              </ul>
            </div>
            <div className="social">
              <a
                title="instagram"
                href="https://www.instagram.com/audreywalshphotography/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img
                  className="social-icon"
                  src={InstagramIcon}
                  alt="Instagram"
                  style={{ width: '1.5em', height: '1.5em' }}
                />
                @audreywalshphotography
              </a>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="container copyright">
            Copyright © {new Date().getFullYear()} Audrey Walsh Photography. All
            rights reserved.
            <p>
              Created by{' '}
              <a
                className="copyright-link"
                href="https://marktkimball.github.io/"
                rel="noopener noreferrer"
                target="_blank"
              >
                MK Engineering
              </a>
            </p>
            <Link className="copyright-link" to="/credits">
              Credits
            </Link>
          </div>
        </div>
      </footer>
    );
  }
};

export default Footer;
