import React, { useEffect, useState, useContext } from 'react';
import { getInfoProfile } from '../../../Fetchs';
import { useParams } from 'react-router-dom';
import styles from '../Profile/Profile.module.css';
import Modal from '../../Modal/Modal';
import EditProfile from '../../EditProfile/EditProfile';
import Navbar from '../../Navbar/Navbar';
import { GlobalContext } from '../../../GlobalContext/GlobalContext';

const Profile = () => {
  // const [info, setInfo] = useState<any>({});
  const [clicked, setClicked] = useState(false);
  const { id } = useParams();
  const { user, setUser } = useContext(GlobalContext);

  useEffect(() => {
    getInfoProfile(id!).then((res) => {
      setUser(res);
      console.log('user?', user);
    });
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
        <img src={`${url}${user.avatar}`} />
        <p>{user.nombre}</p>
        <button onClick={handleClick}>Editar perfil</button>
      </div>
    </>
  );
};

export default Profile;
