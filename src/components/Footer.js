import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import logo from "../img/logo.png";
import "./footer.scss";

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          social {
            instagram
            youtube
          }
          mailchimpUrl
        }
      }
    }
  `);

  return (
    <footer className="footer">
      <div className="content has-text-centered">
        <img
          src={logo}
          alt="Minimalist Travel Family"
          style={{ width: "300px" }}
        />
      </div>
      <p className="footer-slogan">Traveling light across the world.</p>
      <div className="content">
        <div className="container footer-group-container">
          <a
            className="footer-link"
            title="instagram"
            href={data.site.siteMetadata.social.instagram}
            rel="noopener noreferrer"
            target="_blank"
          >
            instagram: @minimalisttravelfamily
          </a>
          <a
            className="footer-link"
            title="youtube"
            href={data.site.siteMetadata.social.youtube}
            rel="noopener noreferrer"
            target="_blank"
          >
            youtube: Minimalist Travel Family
          </a>
        </div>
      </div>
      <hr />
      <div className="footer-links">
        <a
          href={data.site.siteMetadata.mailchimpUrl}
          target="__blank"
          className="footer-link"
        >
          Subscribe
        </a>
        |
        <a href="/rss.xml" className="footer-link">
          RSS
        </a>
        |
        <a href="/sitemap.xml" className="footer-link">
          Sitemap
        </a>
      </div>
      <div className="content">
        <div className="container copyright">
          Copyright © {new Date().getFullYear()} Minimalist Travel Family. All
          rights reserved.
          <p className="created-by">
            Created by{" "}
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
};

export default Footer;
