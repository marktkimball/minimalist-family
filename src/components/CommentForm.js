import React, { useState } from "react";
import firebase from "gatsby-plugin-firebase";

import "./comment-form.scss";

const CommentForm = ({ postId }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [message, setMessage] = useState("");

  const submitCommentForm = (event) => {
    event.preventDefault();
    console.info("SUBMIT FORM", { postId, name, email, website, message });
    firebase.database().ref(`/posts/${postId}/comments`).push({
      name,
      date: new Date().toISOString(),
      email,
      website,
      message,
      approved: false,
    });
  };

  return (
    <div className="comment-form-container">
      <h2 className="headline-text">Leave a Comment</h2>
      <form onSubmit={submitCommentForm}>
        <div className="comment-form-fields">
          <div className="comment-form-section">
            <label className="clip" htmlFor="name">
              Name *
            </label>
            <input
              aria-required
              required
              className="form-input-field"
              id="name"
              name="fields[name]"
              placeholder="Name *"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label className="clip" htmlFor="email">
              E-mail *
            </label>
            <input
              aria-required
              required
              className="form-input-field"
              id="email"
              name="fields[email]"
              placeholder="Email *"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label className="clip" htmlFor="website">
              Website
            </label>
            <input
              className="form-input-field"
              id="website"
              name="fields[website]"
              placeholder="Website"
              type="text"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
            />
          </div>
          <div className="comment-form-section">
            <label className="clip" htmlFor="message">
              Message *
            </label>
            <textarea
              aria-required
              required
              className="form-textarea-field"
              cols="45"
              id="message"
              placeholder="Message *"
              name="fields[message]"
              onChange={(e) => setMessage(e.target.value)}
              rows="12"
              value={message}
            />
          </div>
        </div>

        <button
          className="button-base comment-form-submit-button"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CommentForm;
