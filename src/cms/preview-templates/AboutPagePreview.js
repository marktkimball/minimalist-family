import React from 'react';
import PropTypes from 'prop-types';
import { AboutPageTemplate } from '../../templates/about-page';

const AboutPagePreview = ({ entry, widgetFor }) => (
  <AboutPageTemplate
    content={widgetFor('body')}
    subtitle={entry.getIn(['data', 'subtitle'])}
    title={entry.getIn(['data', 'title'])}
  />
);

AboutPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default AboutPagePreview;
