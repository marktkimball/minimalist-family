import React from 'react';
import PropTypes from 'prop-types';
import { EventItemTemplate } from '../../templates/event-item';

const EventItemPreview = ({ entry, widgetFor }) => {
  const tags = entry.getIn(['data', 'tags']);
  return (
    <EventItemTemplate
      content={widgetFor('body')}
      description={entry.getIn(['data', 'description'])}
      tags={tags && tags.toJS()}
      title={entry.getIn(['data', 'title'])}
      location={entry.getIn(['data', 'location'])}
      address={entry.getIn(['data', 'address'])}
    />
  );
};

EventItemPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default EventItemPreview;
