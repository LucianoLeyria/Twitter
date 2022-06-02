import { useEffect, useState } from 'react';
import { viewMyTweets, getFavorites, getFavsForUser } from '../../../Fetchs';
import Post from '../Post/Post';

const ViewMyTweets = ({ id }: { id: string }) => {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    viewMyTweets(id).then((res) => {
      setTweets(res);
    });
  }, []);

  console.log('govir', tweets);

  return (
    <div>
      {tweets?.map((tweet: any) => {
        return (
          <div key={tweet.post?._id}>
            <Post
              nombre={tweet?.post?.usuarioId.nombre}
              contenido={tweet?.post?.contenido}
              imagen={tweet?.post?.imagen}
              fecha={tweet?.post?.fecha}
              avatar={tweet?.post.usuarioId.avatar}
              id={tweet?.post._id}
              like={tweet?.cantidadLikes}
            />
          </div>
        );
      })}
    </div>
  );
};

export default ViewMyTweets;
