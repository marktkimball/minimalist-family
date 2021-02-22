import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import map from "lodash/map";
import firebase from "gatsby-plugin-firebase";

const Comments = ({ postId }) => {
  const [comments, setComments] = useState({});

  useEffect(() => {
    firebase
      .database()
      .ref(`/posts/${postId}/comments`)
      .orderByChild("approved")
      .equalTo(true)
      .once("value")
      .then((snapshot) => {
        const comments = snapshot.val() || {};
        setComments(comments);
      });
  }, [postId]);

  const commentsCount = Object.keys(comments).length || 0;

  return (
    <div className="comments-container">
      <h2 className="headline-text comments-comment-count">
        {`${commentsCount} Comment${commentsCount === 1 ? "" : "s"}`}
      </h2>
      <div>
        {map(comments, ({ date, name, website, message }, i) => {
          const initials = name
            .split(" ")
            .map((n, i, a) => (i === 0 || i + 1 === a.length ? n[0] : null))
            .join("")
            .toUpperCase();

          return (
            <div className="comment-container" key={i}>
              <div className="comment-title-container">
                <div className="comment-avatar">{initials}</div>
                <div className="comment-meta-data">
                  {website ? (
                    <a className="comment-name" href={website}>
                      {name}
                    </a>
                  ) : (
                    <div className="comment-name">{name}</div>
                  )}
                  <div className="comment-date">
                    on {new Date(date).toLocaleDateString()}
                  </div>
                </div>
              </div>
              <div className="comment-message">{message}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

Comments.propTypes = {
  postId: PropTypes.string.isRequired,
};

export default Comments;
