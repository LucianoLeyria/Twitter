import React, { useEffect } from 'react';
import Emojis from '../../Emojis/Emojis';
import Navbar from '../../Navbar/Navbar';
import FormHome from '../FormHome/FormHome';
import Posts from '../Posts/Posts';
import { useNavigate } from 'react-router-dom';
import { IPosts } from '../../../Interfaces';

export const Home = () => {
  const navigate = useNavigate();
  useEffect(() => {
    !window.localStorage.getItem('token') ? navigate('/registerorlogin') : null;
  });

  return (
    <main>
      <Navbar />
      <FormHome />
      <Posts />
    </main>
  );
};
