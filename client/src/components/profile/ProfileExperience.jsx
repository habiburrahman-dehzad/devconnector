import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';

const ProfileExperience = ({ profile: { experience } }) => {
  return (
    <div className='profile-exp bg-white p-2'>
      <h2 className='text-primary'>Experience</h2>
      {experience &&
        experience.length > 0 &&
        experience.map((exp) => (
          <div key={exp._id}>
            <h3 className='text-dark'>{exp.company}</h3>
            <p>
              <Moment format='D MMM YYYY' date={exp.from} />
              {' - '}
              {exp.current ? (
                <span>Current</span>
              ) : (
                <Moment format='D MMM YYYY' date={exp.to} />
              )}
            </p>
            <p>
              <strong>Position: </strong>
              {exp.title}
            </p>
            <p>
              <strong>Description: </strong>
              {exp.description}
            </p>
          </div>
        ))}
      {(!experience || experience.length === 0) && (
        <h4>No experience credentials</h4>
      )}
    </div>
  );
};

ProfileExperience.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileExperience;
