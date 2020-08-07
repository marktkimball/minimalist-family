import React from 'react';
import PropTypes from 'prop-types';
import { SundaySchoolPageTemplate } from '../../templates/sunday-school-page';

const SundaySchoolPagePreview = ({ entry, widgetFor }) => (
  <SundaySchoolPageTemplate
    content={widgetFor('body')}
    subtitle={entry.getIn(['data', 'subtitle'])}
    title={entry.getIn(['data', 'title'])}
    lead={entry.getIn(['data', 'lead'])}
  />
);

SundaySchoolPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default SundaySchoolPagePreview;
