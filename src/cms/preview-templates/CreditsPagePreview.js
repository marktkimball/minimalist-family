import React from 'react';
import PropTypes from 'prop-types';
import { CreditsPageTemplate } from '../../templates/credits-page';

const CreditsPagePreview = ({ entry, widgetFor }) => (
  <CreditsPageTemplate
    content={widgetFor('body')}
    title={entry.getIn(['data', 'title'])}
    credits={entry.getIn(['data', 'credits'])}
  />
);

CreditsPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default CreditsPagePreview;
