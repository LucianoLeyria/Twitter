import React from 'react';
import { Navigate, NavLink } from 'react-router-dom';

const Registerorlogin = () => {
  return (
    <div>
      <h1>You need logged to navigate in our web</h1>

      <NavLink to='/login'>Login</NavLink>
      <NavLink to='/register'>Register</NavLink>
    </div>
  );
};

export default Registerorlogin;
