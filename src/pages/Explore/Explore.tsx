import { useEffect } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import FormHome from '../../components/FormHome/FormHome';
import Posts from '../../components/Posts/Posts';
import { useNavigate } from 'react-router-dom';

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
