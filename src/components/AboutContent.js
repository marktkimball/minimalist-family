import React from "react";
import PreviewCompatibleImage from "./PreviewCompatibleImage";
import Button from "./Button";

import "./about-content.scss";

const AboutContent = ({ children, image, imageFirst, button }) => {
  let switchOrderClassName = imageFirst ? "" : "flip-wrapper";

  return (
    <section className={`about-section-wrapper ${switchOrderClassName}`}>
      <PreviewCompatibleImage imageInfo={image} />
      <div className="about-copy-wrapper">
        <h2 className="section-heading scripted-heading">About</h2>
        <div className="about-copy">{children}</div>
        {button && <Button to="/about">Read More</Button>}
      </div>
    </section>
  );
};

export default AboutContent;
