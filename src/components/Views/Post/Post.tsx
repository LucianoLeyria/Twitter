import React, { useEffect, useState } from 'react';
// import { getPostsAllTime } from '../../../Fetchs';

interface Props {
  nombre: string;
  contenido: string;
  fecha: string;
}

const Post = ({ nombre, contenido, fecha }: Props) => {
  const [time, setTime] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      // getPostsAllTime();
      actualizarTime();
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const actualizarTime = () => {
    setTime(showOneProp());
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
    <div>
      <p>{nombre}</p>
      <p>{contenido}</p>
      <p>{time}</p>
    </div>
  );
};

export default Post;
