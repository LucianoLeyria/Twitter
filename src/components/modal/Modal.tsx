import { useEffect } from 'react';
import ReactDOM from 'react-dom';
import logo from '../../img/rhino.svg';
const Modal = ({ children, setLocalModal }: any) => {
  const modal = document.getElementById('modal');
  const div = document.createElement('div');
  useEffect(() => {
    modal?.appendChild(div);
    return () => {
      modal?.removeChild(div);
    };
  }, []);
  const handleClick = (e: any) => {
    setLocalModal((prev: any) => !prev);
  };
  return ReactDOM.createPortal(
    <article className="fixed flex gap-10 flex-col items-center justify-center top-0 w-full h-screen bg-black">
      <div className="flex flex-col justify-between items-center p-4">
        <button
          className="text-white text-xl absolute top-2 left-4 font-bold"
          name="register"
          onClick={handleClick}
        >
          x
        </button>
        <div className="relative w-10 h-10 flex items-center justify-center w-full">
          <img className="absolute w-full h-full" src={logo} alt="" />
        </div>
      </div>
      {children}
    </article>,
    div
  );
};
export default Modal;
