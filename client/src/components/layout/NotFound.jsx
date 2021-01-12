import React, { Fragment } from 'react';

const NotFound = () => {
  return (
    <div className='dark-overlay'>
      <div className='landing-inner'>
        <h1 className='large text-primary'>
          <i className='fas fa-exclamation-triangle'></i> Page Not Found
        </h1>
        <p className='lead'>Sorry this page does not exist</p>
      </div>
    </div>
  );
};

export default NotFound;
