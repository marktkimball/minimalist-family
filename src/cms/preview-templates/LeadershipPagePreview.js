import React from 'react';
import PropTypes from 'prop-types';
import { LeadershipPageTemplate } from '../../templates/leadership-page';

const LeadershipPagePreview = ({ entry, widgetFor }) => (
  <LeadershipPageTemplate
    content={widgetFor('body')}
    subtitle={entry.getIn(['data', 'subtitle'])}
    title={entry.getIn(['data', 'title'])}
    lead={entry.getIn(['data', 'lead'])}
    staff={entry.getIn(['data', 'staff']).toJS()}
  />
);

LeadershipPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default LeadershipPagePreview;
