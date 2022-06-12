import { useEffect, useContext } from 'react';
import { getFavsForUser } from '../../services/Fetchs';
import Post from '../../components/Post/Post';
import Navbar from '../../components/Navbar/Navbar';
import { GlobalContext } from '../../GlobalContext/GlobalContext';
import { Favoritos } from '../../Interfaces';

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
    <div>
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
