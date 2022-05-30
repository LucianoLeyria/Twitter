import React, { useEffect, useState, useContext } from 'react';
import { getFavsForUser } from '../../../Fetchs';
import styles from '../Favorites/Favorites.module.css';
import Post from '../Post/Post';
import Navbar from '../../Navbar/Navbar';
import { GlobalContext } from '../../../GlobalContext/GlobalContext';
import { Favoritos } from '../../../Interfaces';

const Favorites = () => {
  const { favorites, setFavorites } = useContext(GlobalContext);

  useEffect(() => {
    async function getFavs() {
      setFavorites(await getFavsForUser());
      console.log('favs', favorites);
    }
    getFavs();
  }, []);

  return (
    <div className={styles.conteiner}>
      <Navbar />
      {favorites?.map((fav: { post: Favoritos; cantidadLikes: number }) => {
        return (
          <div key={fav?.post?.postId?._id}>
            <Post
              nombre={fav?.post?.usuarioId?.nombre}
              contenido={fav?.post?.postId?.contenido}
              imagen={fav?.post?.postId?.imagen}
              fecha={fav?.post?.postId?.fecha}
              avatar={fav?.post?.usuarioId?.avatar}
              id={fav?.post?.postId?._id}
              like={fav?.cantidadLikes}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Favorites;
