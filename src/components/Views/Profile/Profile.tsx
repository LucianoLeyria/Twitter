import React, { useEffect, useState, useContext } from 'react';
import { getInfoProfile } from '../../../Fetchs';
import { useParams } from 'react-router-dom';
import styles from '../Profile/Profile.module.css';
import Modal from '../../Modal/Modal';
import EditProfile from '../../EditProfile/EditProfile';
import Navbar from '../../Navbar/Navbar';
import { GlobalContext } from '../../../GlobalContext/GlobalContext';
import { useJwt, decodeToken } from 'react-jwt';

const Profile = () => {
  // const [info, setInfo] = useState<any>({});
  const [showButton, setShowButton] = useState(false);
  const [clicked, setClicked] = useState(false);
  const { username } = useParams();
  const { user, setUser } = useContext(GlobalContext);
  // const { userId, setUserId } = useContext(GlobalContext);
  // const { decodedToken, isExpired } = useJwt<userToken>(
  let token = window.localStorage.getItem('token') as string;
  // );

  // async function haveToken() {
  //   setUserId(
  //     await decodeToken(window.localStorage.getItem('token') as string)
  //   );
  // }

  // getInfoProfile(id!).then(async (res) => {
  //   await setUser(res);
  // });
  // console.log('user?', user);

  useEffect(() => {
    if (!user.nombre) {
      getInfoProfile(username!).then((res: any) => {
        console.log('info en profile? ', res);
        setUser(res);
      });
      console.log('userres', user);
    }
    return setUser({});
  }, []);

  const handleClick = () => {
    setClicked((prev) => !prev);
  };

  const url = import.meta.env.VITE_APP_URL;

  return (
    <>
      <Navbar />
      <div className={styles.info}>
        Bienvenido! Este es tu perfil.
        {clicked ? (
          <Modal setClicked={setClicked}>
            <EditProfile user={user} />
          </Modal>
        ) : null}
        <img src={`${url}${user?.avatar}`} />
        <p>{user?.nombre}</p>
        {showButton && <button onClick={handleClick}>Editar perfil</button>}
      </div>
    </>
  );
};

export default Profile;
