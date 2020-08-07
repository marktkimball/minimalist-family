import React from 'react';
import PropTypes from 'prop-types';
import { HistoryPageTemplate } from '../../templates/history-page';

const HistoryPagePreview = ({ entry, widgetFor }) => (
  <HistoryPageTemplate
    content={widgetFor('body')}
    subtitle={entry.getIn(['data', 'subtitle'])}
    title={entry.getIn(['data', 'title'])}
  />
);

HistoryPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default HistoryPagePreview;
