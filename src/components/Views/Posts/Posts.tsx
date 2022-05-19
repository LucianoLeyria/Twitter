import React, { useContext, useState, useEffect } from 'react';
import { getPosts } from '../../../Fetchs';
import { IPosts, Context } from '../../../Interfaces';
import styles from '../Posts/Posts.module.css';
import Post from '../Post/Post';
import { GlobalContext } from '../../../GlobalContext/GlobalContext';

const Posts = () => {
  const { posts, setPosts } = useContext(GlobalContext);

  useEffect(() => {
    const getAllPosts = async () => {
      setPosts(await getPosts());
      console.log('postsenposts?', posts);
    };
    getAllPosts();
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
