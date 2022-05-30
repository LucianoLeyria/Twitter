import React, { useContext, useEffect } from 'react';
import { getPosts, getPostsAllTime } from '../../../Fetchs';
import { IPosts } from '../../../Interfaces';
import styles from '../Posts/Posts.module.css';
import Post from '../Post/Post';
import { GlobalContext } from '../../../GlobalContext/GlobalContext';
import Profile from '../Profile/Profile';

const Posts = () => {
  const { posts, setPosts } = useContext(GlobalContext);

  useEffect(() => {
    const getAllPosts = async () => {
      const newPosts = await getPosts();
      setPosts(newPosts);
      setInterval(async () => {
        let aux2 = [];
        if (newPosts.length > 0) {
          aux2 = await getPostsAllTime(newPosts[0]?.post.fecha);
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
  console.log('postenposts', posts);
  return (
    <>
      <div className={styles.posts}>
        {posts?.length > 0 ? (
          posts.map((p: { post: IPosts; cantidadLikes: number }) => {
            return (
              <div key={p?.post?._id}>
                <Post
                  nombre={p?.post?.usuarioId?.nombre}
                  contenido={p?.post?.contenido}
                  fecha={p?.post?.fecha}
                  avatar={p?.post?.usuarioId?.avatar}
                  imagen={p?.post?.imagen}
                  id={p?.post?._id}
                  like={p?.cantidadLikes}
                />
              </div>
            );
          })
        ) : (
          <p>No se encuentran posts</p>
        )}
      </div>
    </>
  );
};

export default Posts;
