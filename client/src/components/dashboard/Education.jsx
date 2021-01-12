import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import { deleteEducation } from '../../actions/profile';

const Education = ({ educations, deleteEducation }) => {
  return (
    <Fragment>
      <h2 className='my-2'>Education Credentials</h2>
      <table className='table'>
        <thead>
          <tr>
            <th>School</th>
            <th className='hide-sm'>Degree</th>
            <th className='hide-sm'>Years</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {educations &&
            educations.length > 0 &&
            educations.map((education) => (
              <tr key={education._id}>
                <td>{education.school}</td>
                <td className='hide-sm'>{education.degree}</td>
                <td className='hide-sm'>
                  <Moment date={education.from} format='YYYY/MM/DD' />
                  {' - '}
                  {education.current ? (
                    <span>Current</span>
                  ) : (
                    <Moment date={education.to} format='YYYY/MM/DD' />
                  )}
                </td>
                <td>
                  <button
                    onClick={() => deleteEducation(education._id)}
                    className='btn btn-danger'
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </Fragment>
  );
};

Education.propTypes = {
  educations: PropTypes.array.isRequired,
  deleteEducation: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  educations: state.profile.profile.education,
});

export default connect(mapStateToProps, { deleteEducation })(Education);
