import React, { useContext, useEffect } from 'react';
import { getPosts } from '../../../Fetchs';
import { IPosts } from '../../../Interfaces';
import styles from '../Posts/Posts.module.css';
import Post from '../Post/Post';
import { GlobalContext } from '../../../GlobalContext/GlobalContext';
import { getPostsAllTime } from '../../../Fetchs';

const Posts = () => {
  const { posts, setPosts } = useContext(GlobalContext);

  // const mergePosts = async () => {
  //   const aux = await getPostsAllTime(posts[0].fecha);
  //   setPosts([...aux, ...posts]);
  // };

  useEffect(() => {
    const getAllPosts = async () => {
      setPosts(await getPosts());
    };
    getAllPosts();
    setInterval(() => {
      if (posts.length > 0) {
        getPostsAllTime(posts[0]?.fecha);
      }
    }, 1000);

    const mergePosts = async () => {
      const aux = await getPostsAllTime(posts[0].fecha);
      setPosts([...aux, ...posts]);
    };

    mergePosts();
  }, []);

  return (
    <div className={styles.posts}>
      {posts?.length > 0 ? (
        posts.map((p: IPosts) => {
          const user = p.usuarioId;
          console.log('userid', user);
          return (
            <div key={p._id}>
              <Post
                nombre={p.usuarioId.nombre}
                contenido={p.contenido}
                fecha={p.fecha}
                avatar={p.usuarioId.avatar}
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
