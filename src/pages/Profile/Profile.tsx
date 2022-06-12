import { useEffect, useState, useContext } from 'react';
import { getInfoProfile } from '../../services/Fetchs';
import { useParams } from 'react-router-dom';
import Modal from '../../components/Modal/Modal';
import EditProfile from '../../components/EditProfile/EditProfile';
import Navbar from '../../components/Navbar/Navbar';
import { GlobalContext } from '../../GlobalContext/GlobalContext';
import { decodeToken } from 'react-jwt';

const Profile = () => {
  // const [info, setInfo] = useState<any>({});
  const [showButton, setShowButton] = useState(false);
  const [clicked, setClicked] = useState(false);
  const { username } = useParams();
  const { user, setUser, userProfile, setUserProfile } =
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
      console.log('user dentro de useeffect? ', res);
      setUserProfile(res);
    });
    return setUserProfile({});
  }, []);

  useEffect(() => {
    if (user === username) {
      setShowButton(true);
    }
  }, [username, user]);

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
            <EditProfile user={userProfile} />
          </Modal>
        ) : null}
        <img src={`${url}${userProfile?.avatar}`} />
        <p>{userProfile?.nombre}</p>
        {showButton && <button onClick={handleClick}>Editar perfil</button>}
      </div>
    </>
  );
};

export default Profile;
