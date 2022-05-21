import { useEffect, useState } from 'react';
// import { getPostsAllTime } from '../../../Fetchs';

interface Props {
  nombre: string;
  contenido: string;
  fecha: string;
  avatar: string;
}

const Post = ({ avatar, nombre, contenido, fecha }: Props) => {
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
    <div className="flex items-start text-white border border-slate-700 p-4 gap-2">
      <div className="rounded-full border border-slate-500 relative w-10 h-10 overflow-hidden flex justify-center items-center shrink-0">
        <img className="absolute object-cover" src={avatar} alt={nombre} />
      </div>
      <div className="flex shrink flex-col justify-center">
        <div className="flex gap-1 text-slate-500 flex-wrap">
          <p>{nombre}</p>
          <span>-</span>
          <p>{time}</p>
        </div>
        <p>{contenido}</p>
      </div>
    </div>
  );
};

export default Post;
