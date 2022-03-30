import React, { Fragment } from 'react';
import { Link, Navigate } from 'react-router-dom';

export const LoginFail = () => {
  return (
      <Fragment>
    <p className="my-1">
        <div>Login Failed </div>
    <div><Link to='/login'>Login</Link></div>
    </p>
    </Fragment>
    
  )
}
