import React from 'react';
import PropTypes from 'prop-types';
import { LiveStreamPageTemplate } from '../../templates/live-stream-page';

const LiveStreamPagePreview = ({ entry, widgetFor }) => (
  <LiveStreamPageTemplate
    content={widgetFor('body')}
    subtitle={entry.getIn(['data', 'subtitle'])}
    title={entry.getIn(['data', 'title'])}
    lead={entry.getIn(['data', 'lead'])}
  />
);

LiveStreamPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default LiveStreamPagePreview;
