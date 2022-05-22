import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../Navbar/Navbar.module.css';

const Navbar = () => {
  return (
    <div className={styles.navs}>
      <nav className={styles.nav}>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/profile'>Profile</NavLink>
        <NavLink to='/messages'>Messages</NavLink>
        <NavLink to='/favorites'>Favorites</NavLink>
        <NavLink to='/notifications'>Notifications</NavLink>
      </nav>
    </div>
  );
};

export default Navbar;
