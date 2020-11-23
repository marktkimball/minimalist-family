import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import "./email-signup.scss";

const EmailSignup = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          mailchimpUrl
        }
      }
    }
  `);

  return (
    <div className="signup-section">
      <h2 className="scripted-heading">Subscribe to the blog!</h2>
      <form
        className="form"
        action={data.site.siteMetadata.mailchimpUrl}
        method="post"
        name="mc-embedded-subscribe-form"
        target="_blank"
        noValidate
      >
        <fieldset className="signup-fieldset">
          <label className="clip" htmlFor="first-name">
            First Name
          </label>
          <input
            className="form-input-field"
            placeholder="First Name"
            type="text"
            name="FIRST NAME"
            id="first-name"
          />
          <label className="clip" htmlFor="email-address">
            Email Address
          </label>
          <input
            className="form-input-field"
            placeholder="Email Address"
            type="text"
            name="EMAIL"
            id="email-address"
          />
          <input
            className="form-submit"
            type="submit"
            name="subscribe"
            value="Sign Up"
          />
        </fieldset>
      </form>
    </div>
  );
};

export default EmailSignup;
