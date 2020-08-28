import React from 'react';
import PropTypes from 'prop-types';
import { AnnouncementsPageTemplate } from '../../templates/announcements-page';

const AnnouncementsPagePreview = ({ entry, widgetFor }) => (
  <AnnouncementsPageTemplate
    content={widgetFor('body')}
    title={entry.getIn(['data', 'title'])}
  />
);

AnnouncementsPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default AnnouncementsPagePreview;
