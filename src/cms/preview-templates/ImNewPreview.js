import React from 'react';
import PropTypes from 'prop-types';
import { ImNewPageTemplate } from '../../templates/im-new-page';

const ImNewPreview = ({ entry }) => {
  return (
    <ImNewPageTemplate title={entry.getIn(['data', 'title', 'subtitle'])} />
  );
};

ImNewPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
};

export default ImNewPreview;
