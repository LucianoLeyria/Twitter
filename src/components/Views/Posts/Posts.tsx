import React, { useContext, useEffect } from 'react';
import { getPosts, getPostsAllTime } from '../../../Fetchs';
import { IPosts } from '../../../Interfaces';
import styles from '../Posts/Posts.module.css';
import Post from '../Post/Post';
import { GlobalContext } from '../../../GlobalContext/GlobalContext';

const Posts = () => {
  const { posts, setPosts } = useContext(GlobalContext);

  useEffect(() => {
    const getAllPosts = async () => {
      const newPosts = await getPosts();
      setPosts(newPosts);
      setInterval(async () => {
        let aux2 = [];
        if (newPosts.length > 0) {
          aux2 = await getPostsAllTime(newPosts[0]?.fecha);
        }
        console.log('primero??', aux2);
        if (aux2.length > 0) {
          const allData = [...aux2, ...newPosts];
          setPosts(allData);
        }
      }, 5000);
    };
    getAllPosts();
  }, []);

  return (
    <div className={styles.posts}>
      {posts?.length > 0 ? (
        posts.map((p: IPosts) => {
          const user = p.usuarioId;
          return (
            <div key={p._id}>
              <Post
                nombre={p.usuarioId.nombre}
                contenido={p.contenido}
                fecha={p.fecha}
                avatar={p.usuarioId.avatar}
                imagen={p.imagen}
                id={p._id}
              />
            </div>
          );
        })
      ) : (
        <p>No se encuentran posts</p>
      )}
    </div>
  );
};

export default Posts;