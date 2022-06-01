import React from 'react';
import styles from '../Modal/Modal.module.css';
import { createPortal } from 'react-dom';

const Modal = ({ children, setClicked }: any) => {
  const handleClick = () => {
    setClicked((prev: any) => !prev);
  };
  const modal = document.getElementById('modal')!;
  return createPortal(
    <article>
      <div>
        <button onClick={handleClick}>X</button>
        {children}
      </div>
    </article>,
    modal
  );
};

export default Modal;
