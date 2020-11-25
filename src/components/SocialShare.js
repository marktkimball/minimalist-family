import React from "react";
import FacebookIcon from "../img/facebook.svg";
import TwitterIcon from "../img/twitter.svg";
import PinterestIcon from "../img/pinterest.svg";

import "./social-share.scss";

const SocialShare = ({ text, shareTitle, shareUrl }) => (
  <div className="social-share-container">
    <span className="social-share-text">{text}</span>
    <a
      href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareTitle}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        className="social-share-icon"
        src={TwitterIcon}
        alt="Twitter"
        style={{ width: "24px", height: "24px" }}
      />
    </a>
    <a
      href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        className="social-share-icon"
        src={FacebookIcon}
        alt="Facebook"
        style={{ width: "24px", height: "24px" }}
      />
    </a>
    <a
      href={`https://www.pinterest.com/pin/create/button/?url=${shareUrl}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        className="social-share-icon"
        src={PinterestIcon}
        alt="Pinterest"
        style={{ width: "24px", height: "24px" }}
      />
    </a>
  </div>
);

export default SocialShare;
