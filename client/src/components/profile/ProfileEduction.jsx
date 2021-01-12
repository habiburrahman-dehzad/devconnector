import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';

const ProfileEduction = ({ profile: { education } }) => {
  return (
    <div className='profile-edu bg-white p-2'>
      <h2 className='text-primary'>Education</h2>
      {education &&
        education.length > 0 &&
        education.map((edu) => (
          <div key={edu._id}>
            <h3>{edu.school}</h3>
            <p>
              <Moment format='D MMM YYYY' date={edu.from} />
              {' - '}
              {edu.current ? (
                <span>Current</span>
              ) : (
                <Moment format='D MMM YYYY' date={edu.to} />
              )}
            </p>
            <p>
              <strong>Degree: </strong>
              {edu.degree}
            </p>
            <p>
              <strong>Field Of Study: </strong>
              {edu.fieldofstudy}
            </p>
            <p>
              <strong>Description: </strong>
              {edu.description}
            </p>
          </div>
        ))}
      {(!education || education.length === 0) && (
        <h4>No education credentials</h4>
      )}
    </div>
  );
};

ProfileEduction.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileEduction;
