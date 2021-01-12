import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getPost } from '../../actions/post';
import { Link } from 'react-router-dom';
import Comment from './Comment';
import Spinner from '../layout/Spinner';
import CommentForm from './CommentForm';

const Post = ({ getPost, post: { post, loading }, match }) => {
  useEffect(() => {
    getPost(match.params.id);
  }, [match.params.id, getPost]);

  if (loading || post === null) {
    return <Spinner />;
  }

  const { _id, name, avatar, user, text, comments } = post;

  return (
    <Fragment>
      <Link to='/posts' className='btn'>
        Back To Posts
      </Link>
      <div className='post bg-white p-1 my-1'>
        <div>
          <Link to={`/profile/${user}`}>
            <img className='round-img' src={avatar} alt='' />
            <h4>{name}</h4>
          </Link>
        </div>
        <div>
          <p className='my-1'>{text}</p>
        </div>
      </div>

      <CommentForm postId={_id} />

      <div className='comments'>
        {comments.length > 0 &&
          comments.map((comment) => (
            <Comment key={comment._id} comment={comment} postId={_id} />
          ))}
      </div>
    </Fragment>
  );
};

Post.propTypes = {
  getPost: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  post: state.post,
});

export default connect(mapStateToProps, { getPost })(Post);
