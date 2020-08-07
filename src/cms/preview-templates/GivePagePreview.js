import React from 'react';
import PropTypes from 'prop-types';
import { GivePageTemplate } from '../../templates/give-page';

const GivePagePreview = ({ entry, widgetFor }) => (
  <GivePageTemplate
    content={widgetFor('body')}
    subtitle={entry.getIn(['data', 'subtitle'])}
    title={entry.getIn(['data', 'title'])}
  />
);

GivePagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default GivePagePreview;
