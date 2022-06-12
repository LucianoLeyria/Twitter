import { useContext, useEffect } from 'react';
import { IPosts } from '../../Interfaces';
import Post from '../../components/Post/Post';
import { GlobalContext } from '../../GlobalContext/GlobalContext';
import { getPosts, getPostsAllTime } from '../../services/Fetchs';
import { useNavigate } from 'react-router-dom';

const Posts = () => {
  const { posts, setPosts } = useContext(GlobalContext);
  const navigate = useNavigate();

  useEffect(() => {
    !window.localStorage.getItem('token') ? navigate('/') : null;
  }, []);

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
      <div>
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
