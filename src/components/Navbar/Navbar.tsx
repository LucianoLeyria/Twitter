import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../Navbar/Navbar.module.css';
import jwt from 'jsonwebtoken';
import { useJwt } from 'react-jwt';
import { userToken } from '../../Interfaces';

const Navbar = () => {
  const { decodedToken, isExpired } = useJwt<userToken>(
    window.localStorage.getItem('token') as string
  );
  let id = decodedToken?.sub;
  console.log('idennavgar', id);
  return (
    <div className={styles.navs}>
      <nav className={styles.nav}>
        <NavLink to='/'>Home</NavLink>
        <NavLink to={'/profile/' + `${id}`}>Profile</NavLink>
        <NavLink to='/messages'>Messages</NavLink>
        <NavLink to='/favorites'>Favorites</NavLink>
        <NavLink to='/notifications'>Notifications</NavLink>
      </nav>
    </div>
  );
};

export default Navbar;
