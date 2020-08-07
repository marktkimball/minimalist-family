import React from 'react';
import PropTypes from 'prop-types';
import { MissionsPageTemplate } from '../../templates/missions-page';

const MissionsPagePreview = ({ entry, widgetFor }) => (
  <MissionsPageTemplate
    content={widgetFor('body')}
    subtitle={entry.getIn(['data', 'subtitle'])}
    title={entry.getIn(['data', 'title'])}
    lead={entry.getIn(['data', 'lead'])}
    precontent={entry.getIn(['data', 'precontent'])}
    missionaries={entry.getIn(['data', 'missionaries']).toJS()}
  />
);

MissionsPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default MissionsPagePreview;
