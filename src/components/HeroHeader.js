import React from "react";
import PreviewCompatibleImage from "./PreviewCompatibleImage";
import LogoImage from "../img/logo.png";
import "./hero.scss";

const HeroHeader = ({ leftImage, rightImage, subtitle }) => (
  <section className="hero-section">
    <div className="hero-column hero-column-1">
      <PreviewCompatibleImage
        imageInfo={{
          image: leftImage,
        }}
      />
    </div>
    <div className="hero-column">
      <img className="hero-title" src={LogoImage} alt="logo" />
      <p className="hero-subtitle">{subtitle}</p>
    </div>
    <div className="hero-column hero-column-3">
      <PreviewCompatibleImage
        imageInfo={{
          image: rightImage,
        }}
      />
    </div>
  </section>
);

export default HeroHeader;
