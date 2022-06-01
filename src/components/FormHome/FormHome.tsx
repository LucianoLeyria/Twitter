import { useContext, useState } from 'react';
import { tweetPost, getPosts } from '../../services/Fetchs';
import { GlobalContext } from '../../GlobalContext/GlobalContext';
import styles from '../FormHome/FormHome.module.css';
import Emojis from '../../components/Emojis/Emojis';

const FormHome = () => {
  const { setPosts } = useContext(GlobalContext);
  const [tweet, setTweet] = useState({ tweet: '', image: '' });

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    await tweetPost(tweet);
    setPosts(await getPosts());
    setTweet({ tweet: '', image: '' });
    const resetForm = document.getElementById('form') as HTMLFormElement;
    resetForm.reset();
  };

  const handleChange = (e: any) => {
    setTweet((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    console.log('tweet cambiastate?', tweet);
  };

  return (
    <>
      <form
        id="form"
        className="relative w-screen border border-slate-700"
        onSubmit={handleSubmit}
        encType="multipart/form-data"
      >
        <textarea
          className="w-full bg-transparent resize-none text-white p-2"
          name="tweet"
          id="tweet"
          value={tweet.tweet}
          onChange={handleChange}
          required
        />
        <input
          className={styles.inputFile}
          type="file"
          name="image"
          onChange={handleChange}
          accept="image/png, image/jpeg"
          id="image"
        />

        <button
          disabled={tweet.tweet.length > 0 && tweet.tweet.trim() ? false : true}
          className="absolute px-2 py-0.5 align-middle text-white bg-blue-500 duration-200 ease-in-out rounded-full bottom-2 right-2 hover:bg-blue-700"
        >
          Enviar
        </button>
      </form>
      <Emojis setTweet={setTweet} />
    </>
  );
};

export default FormHome;
