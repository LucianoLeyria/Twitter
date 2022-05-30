import React, { useState } from 'react';
import styles from './EditProfile.module.css';
import { editProfile, getInfoProfile } from '../../Fetchs';
import { useParams } from 'react-router-dom';

const EditProfile = ({ user }: any) => {
  interface EditProps {
    user: any;
  }

  const url = import.meta.env.VITE_APP_URL;
  const { id } = useParams();
  const [profile, setProfile] = useState({
    portada: user.portada,
    avatar: user.avatar,
    nombre: user.nombre,
    descripcion: user.descripcion,
    ubicacion: user.ubicacion,
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    editProfile(profile);
    getInfoProfile(id as string);
  };

  const handleChange = (e: any) => {
    setProfile((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    console.log('tweet cambiastate?', profile);
  };

  return (
    <div className={styles.container}>
      <form encType='multipart/form-data' id='form' onSubmit={handleSubmit}>
        <div className={styles.portadaybutton}>
          <img src={`${url}${profile.portada}`} alt='Portada' />

          <input
            type='file'
            name='portada'
            id='portada'
            onChange={handleChange}
            // value={profile.portada}
          />
          <label htmlFor='portada'>📷</label>
        </div>
        <div className={styles.perfilybutton}>
          <img src={`${url}${profile.avatar}`} alt='Perfil' />
          <input
            type='file'
            id='avatar'
            name='avatar'
            onChange={handleChange}
            // value={profile.avatar}
          />
          <label htmlFor='avatar'>📷</label>
        </div>

        <label htmlFor='Nombre'>
          <p>Nombre</p>
          <input
            type='text'
            id='nombre'
            name='nombre'
            onChange={handleChange}
            value={profile.nombre}
          />
        </label>
        <label htmlFor='Descripcion'>
          <p>Descripción</p>
          <input
            type='text'
            id='descripcion'
            name='descripcion'
            onChange={handleChange}
            value={profile.descripcion}
          />
        </label>
        <label htmlFor='Ubicacion'>
          <p>Ubicación</p>
          <input
            type='text'
            id='ubicacion'
            name='ubicacion'
            onChange={handleChange}
            value={profile.ubicacion}
          />
        </label>
        <button type='submit'>Enviar</button>
      </form>
    </div>
  );
};

export default EditProfile;
