import React from 'react';
import PropTypes from 'prop-types';
import PreviewCompatibleImage from '../components/PreviewCompatibleImage';
import './staff-members.scss';

export const StaffMembers = ({ staff }) => (
  <div className="staff-members-container">
    {staff.map((person) => (
      <div className="staff-member">
        <PreviewCompatibleImage imageInfo={person} />
        <h4>{person.name}</h4>
        <h6>{person.position}</h6>
        <p>{person.bio}</p>
      </div>
    ))}
  </div>
);

StaffMembers.propTypes = {
  staff: PropTypes.arrayOf({
    bio: PropTypes.string.isRequired,
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
    name: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
  }).isRequired,
};

export default StaffMembers;
