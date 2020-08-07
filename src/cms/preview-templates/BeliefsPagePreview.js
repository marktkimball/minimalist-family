import React from 'react';
import PropTypes from 'prop-types';
import { BeliefsPageTemplate } from '../../templates/beliefs-page';

const BeliefsPagePreview = ({ entry, widgetFor }) => (
  <BeliefsPageTemplate
    content={widgetFor('body')}
    subtitle={entry.getIn(['data', 'subtitle'])}
    title={entry.getIn(['data', 'title'])}
  />
);

BeliefsPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default BeliefsPagePreview;
