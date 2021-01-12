import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import Spinner from '../layout/Spinner';
import { connect } from 'react-redux';
import { getProfileById } from '../../actions/profile';
import { Link } from 'react-router-dom';
import ProfileHeader from './ProfileHeader';
import ProfileAbout from './ProfileAbout';
import ProfileExperience from './ProfileExperience';
import ProfileEduction from './ProfileEduction';
import ProfileRepos from './ProfileRepos';

const Profile = ({
  getProfileById,
  profile: { profile, loading },
  auth,
  match,
}) => {
  useEffect(() => {
    getProfileById(match.params.id);
  }, [match.params.id, getProfileById]);

  if (profile === null || loading) {
    return <Spinner />;
  }

  return (
    <Fragment>
      <Link to='/profiles' className='btn btn-light'>
        Back To Profiles
      </Link>

      {auth.isAuthenticated &&
        auth.loading === false &&
        auth.user._id === profile.user._id && (
          <Link to='/edit-profile' className='btn btn-dark'>
            Edit Profile
          </Link>
        )}

      <div className='profile-grid my-1'>
        <ProfileHeader profile={profile} />
        <ProfileAbout profile={profile} />
        <ProfileExperience profile={profile} />
        <ProfileEduction profile={profile} />
        {profile.githubusername && (
          <ProfileRepos githubusername={profile.githubusername} />
        )}
      </div>
    </Fragment>
  );
};

Profile.propTypes = {
  getProfileById: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
  auth: state.auth,
});

export default connect(mapStateToProps, { getProfileById })(Profile);
