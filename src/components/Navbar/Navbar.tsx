import React, { useEffect, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../Navbar/Navbar.module.css';
import { useJwt } from 'react-jwt';
import { userToken } from '../../Interfaces';
import { GlobalContext } from '../../GlobalContext/GlobalContext';

const Navbar = () => {
  const { user, setUser, infoUser, setInfoUser } = useContext(GlobalContext);
  const { decodedToken, isExpired } = useJwt<userToken>(
    window.localStorage.getItem('token') as string
  );
  let username = decodedToken?.nombre;
  console.log('user en anvbar?', infoUser.nombre);

  useEffect(() => {
    const infoUserr = JSON.parse(window.localStorage.getItem('infoUser')!);
    if (infoUser.nombre === null || infoUser.nombre === undefined) {
      setInfoUser(infoUserr);
    }
    console.log('infouser', infoUser);
  }, []);

  return (
    <div className={styles.navs}>
      <nav className={styles.nav}>
        <NavLink to='/'>Home</NavLink>
        <NavLink to={'/profile/' + `${infoUser?.nombre}`}>Profile</NavLink>
        <NavLink to='/messages'>Messages</NavLink>
        <NavLink to='/favorites'>Favorites</NavLink>
        <NavLink to='/notifications'>Notifications</NavLink>
      </nav>
    </div>
  );
};

export default Navbar;
