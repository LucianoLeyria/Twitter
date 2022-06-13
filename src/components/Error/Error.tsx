import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../Error/Error.module.css';

const Error = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.errors}>
      <h1>El usuario no existe</h1>
      <button
        onClick={() => {
          navigate('/');
        }}
      >
        Volver al inicio
      </button>
    </div>
  );
};

export default Error;
