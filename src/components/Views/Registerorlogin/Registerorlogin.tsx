import React, { useEffect } from 'react';
import { Navigate, NavLink } from 'react-router-dom';
import styles from '../Registerorlogin/Registerorlogin.module.css';
import { useNavigate } from 'react-router-dom';

const Registerorlogin = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.localStorage.getItem('token') ? navigate('/') : null;
  });

  return (
    <div className={styles.conteiner}>
      <h1>You need logged to navigate in our web</h1>

      <NavLink to='/login'>Login</NavLink>
      <NavLink to='/register'>Register</NavLink>
    </div>
  );
};

export default Registerorlogin;
