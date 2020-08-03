import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import './picture-cta.scss';

export const PictureCTA = ({ to, image, title }) => (
  <Link to={to}>
    <div className="picture-cta depth-4">
      <div
        className="picture-cta-background"
        style={{
          backgroundImage: `url(${image})`,
        }}
      />
      <div className="picture-overlay">
        <div>{title}</div>
        <span>Learn More →</span>
      </div>
    </div>
  </Link>
);

export const PictureCTAContainer = ({ items }) => (
  <div className="picture-container">
    {items.map((item) => (
      <PictureCTA {...item} />
    ))}
  </div>
);

PictureCTA.propTypes = {
  to: PropTypes.string.isRequired,
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
  title: PropTypes.string.isRequired,
};

PictureCTAContainer.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      to: PropTypes.string.isRequired,
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string])
        .isRequired,
      title: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default PictureCTAContainer;
