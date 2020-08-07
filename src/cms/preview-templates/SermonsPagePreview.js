import React from 'react';
import PropTypes from 'prop-types';
import { SermonsPageTemplate } from '../../templates/sermons-page';

const SermonsPagePreview = ({ entry, widgetFor }) => (
  <SermonsPageTemplate
    content={widgetFor('body')}
    subtitle={entry.getIn(['data', 'subtitle'])}
    title={entry.getIn(['data', 'title'])}
    lead={entry.getIn(['data', 'lead'])}
    sermons={entry.getIn(['data', 'sermons']).toJS()}
  />
);

SermonsPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default SermonsPagePreview;
