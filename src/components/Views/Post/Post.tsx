import React from 'react';

interface Props {
  nombre: string;
  contenido: string;
  fecha: string;
}

const Post = ({ nombre, contenido, fecha }: Props) => {
  return (
    <div>
      <p>{nombre}</p>
      <p>{contenido}</p>
      <p>{fecha}</p>
    </div>
  );
};

export default Post;
