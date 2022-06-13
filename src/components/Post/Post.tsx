<<<<<<< HEAD:src/components/Post/Post.tsx
import { useEffect, useState } from 'react';
=======
import { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
>>>>>>> main:src/components/Views/Post/Post.tsx
import styles from '../Post/Post.module.css';
import { GlobalContext } from '../../../GlobalContext/GlobalContext';
import {
  postFavorites,
  getFavorites,
  dioLike,
  deleteFav,
} from '../../services/Fetchs';

interface Props {
  nombre: string;
  contenido: string;
  fecha: string;
  avatar: string;
  imagen: string;
  id: string;
  like: number;
}

const Post = ({
  avatar,
  nombre,
  contenido,
  fecha,
  imagen,
  id,
  like,
}: Props) => {
  const [time, setTime] = useState('');
  const [likes, setLikes] = useState(0);
  const [favs, setFavs] = useState({ cantidadLikes: like });
  const [isFav, setIsFav] = useState(false);
  const { loading, setLoading } = useContext(GlobalContext);

  useEffect(() => {
    const interval = setInterval(() => {
      actualizarTime();
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const actualizarTime = () => {
    setTime(showOneProp());
  };

  const handleSubmit = async () => {
    setIsFav(true);
    setFavs({ cantidadLikes: favs.cantidadLikes + likes });
    const diolike = await dioLike(id);
    if (!diolike.liked) {
      await postFavorites(id);
    } else {
      await deleteFav(id);
    }
    setIsFav(false);
    setFavs(await getFavorites(id));
    setLoading(true);
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
<<<<<<< HEAD:src/components/Post/Post.tsx
    <div className="flex items-start text-white border border-slate-700 p-4 gap-2">
      <div className="rounded-full border border-slate-500 relative w-10 h-10 overflow-hidden flex justify-center items-center shrink-0">
        <img
          className="absolute object-cover"
          src={import.meta.env.VITE_APP_URL + avatar}
          alt={nombre}
        />
      </div>
      <div className="flex shrink flex-col justify-center">
        <div className="flex gap-1 text-slate-500 flex-wrap">
          <p>{nombre}</p>
=======
    <div className='flex items-start text-white border border-slate-700 p-4 gap-2'>
      <Link to={'/profile/' + nombre}>
        <div className='rounded-full border border-slate-500 relative w-10 h-10 overflow-hidden flex justify-center items-center shrink-0'>
          <img
            className='absolute object-cover'
            src={import.meta.env.VITE_APP_URL + avatar}
            alt={nombre}
          />
        </div>
      </Link>
      <div className='flex shrink flex-col justify-center'>
        <div className='flex gap-1 text-slate-500 flex-wrap'>
          <Link to={'/profile/' + nombre}>
            <p>{nombre}</p>{' '}
          </Link>
>>>>>>> main:src/components/Views/Post/Post.tsx
          <span>-</span>
          <p>{time}</p>
        </div>
        <p>{contenido}</p>
        {imagen ? (
          <img src={import.meta.env.VITE_APP_URL + imagen}></img>
        ) : null}
        <button
          disabled={isFav}
          onClick={handleSubmit}
          className={styles.buttonFav}
        >
          ❤ {favs.cantidadLikes}
        </button>
      </div>
    </div>
  );
};

export default Post;
