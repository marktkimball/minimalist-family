import React from 'react';
import PropTypes from 'prop-types';
import { ImNewPageTemplate } from '../../templates/im-new-page';

const ImNewPreview = ({ entry, widgetFor }) => {
  return (
    <ImNewPageTemplate
      content={widgetFor('body')}
      subtitle={entry.getIn(['data', 'subtitle'])}
      title={entry.getIn(['data', 'title'])}
      items={entry.getIn(['data', 'items']).toJS()}
    />
  );
};

ImNewPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default ImNewPreview;
