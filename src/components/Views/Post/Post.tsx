import { useEffect, useState } from 'react';
import styles from '../Post/Post.module.css';
import {
  postFavorites,
  getFavorites,
  dioLike,
  deleteFav,
} from '../../../Fetchs';

interface Props {
  nombre: string;
  contenido: string;
  fecha: string;
  avatar: string;
  imagen: string;
  id: string;
}

const Post = ({ avatar, nombre, contenido, fecha, imagen, id }: Props) => {
  const [time, setTime] = useState('');
  const [favs, setFavs] = useState({ cantidadLikes: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      actualizarTime();
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const getFavs = async () => {
      setFavs(await getFavorites(id));
    };
    getFavs();
  }, []);

  const actualizarTime = () => {
    setTime(showOneProp());
  };

  const handleSubmit = async () => {
    const diolike = await dioLike(id);
    if (!diolike.liked) {
      await postFavorites(id);
    } else {
      await deleteFav(id);
    }
    setFavs(await getFavorites(id));
    console.log('favorito', id);
  };

  const showOneProp = () => {
    const fechaPost = Date.parse(new Date(fecha).toString());
    const fechaActual = Date.parse(new Date().toString());
    const timeStampToTime = (fechaActual - fechaPost) / 1000;
    if (timeStampToTime < 60) {
      return `Hace ${Math.floor(timeStampToTime)} segundos`;
    } else if (timeStampToTime < 3600) {
      return `Hace ${Math.floor(timeStampToTime / 60)} minutos`;
    } else if (timeStampToTime < 86400) {
      return `Hace ${Math.floor(timeStampToTime / 3600)} horas`;
    } else {
      return `Hace ${Math.floor(timeStampToTime / 86400)} dias`;
    }
  };

  return (
    <div className='flex items-start text-white border border-slate-700 p-4 gap-2'>
      <div className='rounded-full border border-slate-500 relative w-10 h-10 overflow-hidden flex justify-center items-center shrink-0'>
        <img className='absolute object-cover' src={avatar} alt={nombre} />
      </div>
      <div className='flex shrink flex-col justify-center'>
        <div className='flex gap-1 text-slate-500 flex-wrap'>
          <p>{nombre}</p>
          <span>-</span>
          <p>{time}</p>
        </div>
        <p>{contenido}</p>
        {imagen ? (
          <img src={import.meta.env.VITE_APP_URL + imagen}></img>
        ) : null}
        <button onClick={handleSubmit} className={styles.buttonFav}>
          ❤ {favs.cantidadLikes}
        </button>
      </div>
    </div>
  );
};

export default Post;
