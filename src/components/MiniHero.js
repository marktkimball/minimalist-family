import React from 'react';
import PropTypes from 'prop-types';
import './mini-hero.scss';

export const MiniHero = ({ className = '', image, title, subtitle }) => (
  <div
    style={{
      backgroundImage: `url(${
        !!image.childImageSharp ? image.childImageSharp.fluid.src : image
      })`,
      backgroundPosition: '50%',
      backgroundSize: 'cover',
      backgroundAttachment: 'fixed',
    }}
    className={`mini-hero ${className}`}
  >
    <div className="mini-hero-text-container">
      <h1 className="headline-text mini-hero-title">{title}</h1>
      {subtitle && <h6 className="mini-hero-subtitle">{subtitle}</h6>}
    </div>
  </div>
);

MiniHero.propTypes = {
  className: PropTypes.string,
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
};

export default MiniHero;
