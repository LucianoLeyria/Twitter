import React from 'react';
import Emojis from '../../Emojis/Emojis';
import Navbar from '../../Navbar/Navbar';
import FormHome from '../FormHome/FormHome';
import Posts from '../Posts/Posts';

export const Home = () => {
  return (
    <main>
      {/* <Emojis /> */}
      <Navbar />
      <FormHome />
      <Posts />
    </main>
  );
};
