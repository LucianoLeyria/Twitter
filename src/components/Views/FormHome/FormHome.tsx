import React, { useContext, useEffect, useRef, useState } from 'react';
import { tweetPost, getPosts } from '../../../Fetchs';
import { GlobalContext } from '../../../GlobalContext/GlobalContext';
import styles from '../FormHome/FormHome.module.css';
import Emojis from '../../Emojis/Emojis';

const FormHome = () => {
  const { posts, setPosts } = useContext(GlobalContext);
  const [tweet, setTweet] = useState({ tweet: '' });

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    await tweetPost(tweet);
    setPosts(await getPosts());
    setTweet({ tweet: '' });
    console.log('tweet?', tweet);
  };

  const handleChange = (e: any) => {
    setTweet((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    console.log('tweet cambiastate?', tweet);
  };

  return (
    <>
      <form
        className='relative w-screen border border-slate-700'
        onSubmit={handleSubmit}
      >
        <textarea
          className='w-full bg-transparent resize-none text-white p-2'
          name='tweet'
          id='tweet'
          value={tweet.tweet}
          onChange={handleChange}
          required
        />
        <button
          disabled={tweet.tweet.length > 0 && tweet.tweet.trim() ? false : true}
          className='absolute px-2 py-0.5 align-middle text-white bg-blue-500 duration-200 ease-in-out rounded-full bottom-2 right-2 hover:bg-blue-700'
        >
          Enviar
        </button>
      </form>
      <Emojis setTweet={setTweet} />
    </>
  );
};

export default FormHome;
