import React, { useEffect, useState, useContext } from 'react';
import { getInfoProfile } from '../../../Fetchs';
import { useParams } from 'react-router-dom';
import styles from '../Profile/Profile.module.css';
import Modal from '../../Modal/Modal';
import EditProfile from '../../EditProfile/EditProfile';
import Navbar from '../../Navbar/Navbar';
import { GlobalContext } from '../../../GlobalContext/GlobalContext';
import { useJwt, decodeToken } from 'react-jwt';
import { useNavigate } from 'react-router-dom';
import Loader from '../Loader/Loader';
import ViewMyTweets from '../ViewMyTweets/ViewMyTweets';

const Profile = () => {
  // const [info, setInfo] = useState<any>({});
  const [showButton, setShowButton] = useState(false);

  const navigate = useNavigate();
  const [clicked, setClicked] = useState(false);
  const { username } = useParams();
  const { user, setUser, userProfile, setUserProfile, infoUser, setInfoUser } =
    useContext(GlobalContext);

  async function haveToken() {
    const decodedToken = await decodeToken(
      window.localStorage.getItem('token') as string
    );
    setUser((decodedToken as any).nombre);
  }

  useEffect(() => {
    haveToken();
    getInfoProfile(username!).then((res: any) => {
      if (!res)
        return (
          navigate('/error'), console.log('user dentro de useeffect? ', res)
        );
      setUserProfile(res);
      const infoUserr = JSON.parse(window.localStorage.getItem('infoUser')!);
      if (infoUser.nombre === null || infoUser.nombre === undefined) {
        setInfoUser(infoUserr);
      }
    });
    return setUserProfile({});
  }, []);

  useEffect(() => {
    if (infoUser.nombre === username) {
      setShowButton(true);
    }
  }, [username, infoUser.nombre]);

  const handleClick = () => {
    setClicked((prev) => !prev);
  };

  const url = import.meta.env.VITE_APP_URL;

  return (
    <>
      {!userProfile.nombre ? (
        <Loader />
      ) : (
        <div>
          <Navbar />
          <div className={styles.info}>
            {clicked ? (
              <Modal setClicked={setClicked}>
                <EditProfile user={userProfile} />
              </Modal>
            ) : null}
            <img src={`${url}${userProfile?.avatar}`} />
            <p>{userProfile?.nombre}</p>
            {userProfile
              ? showButton && (
                  <button onClick={handleClick}>Editar perfil</button>
                )
              : null}
          </div>
          <ViewMyTweets id={userProfile?._id} />
        </div>
      )}
    </>
  );
};

export default Profile;
