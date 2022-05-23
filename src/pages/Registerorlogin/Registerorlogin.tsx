import { useState } from 'react';
import Login from '../../components/Login/Login';
import Modal from '../../components/modal/Modal';
import Register from '../../components/Register/Register';
import logo from '../../img/rhino.svg';
const Registerorlogin = () => {
  const [loginModal, setLoginModal] = useState(false);
  const [registerModal, setRegisterModal] = useState(false);

  const handleClick = (e: any) => {
    switch (e.target.name) {
      case 'login':
        setLoginModal((prev) => !prev);
        break;
      case 'register':
        setRegisterModal((prev) => !prev);
        break;
    }
  };

  return (
    <>
      {loginModal ? (
        <Modal setLocalModal={setLoginModal}>
          <Login />
        </Modal>
      ) : null}
      {registerModal ? (
        <Modal setLocalModal={setRegisterModal}>
          <Register />
        </Modal>
      ) : null}
      <section className="flex flex-col text-white p-8 gap-12">
        <div className="flex relative w-12 h-12">
          <img className="absolute w-full" src={logo} alt="logo" />
        </div>
        <span className="text-5xl font-extrabold">
          You need logged to navigate in our web
        </span>
        <div className="flex gap-4 flex-col">
          <span className="text-3xl font-bold">Join us today.</span>
          <button
            className="w-full font-bold bg-blue-500 rounded-full p-2"
            name="register"
            onClick={handleClick}
          >
            Sign up with phone number or email
          </button>
        </div>
        <div className="flex gap-4 flex-col">
          <span className="font-bold">Do you already have an account?</span>
          <button
            className="w-full p-2 bg-black text-blue-500 font-bold rounded-full border-slate-700 border"
            name="login"
            onClick={handleClick}
          >
            Log in
          </button>
        </div>
      </section>
    </>
  );
};

export default Registerorlogin;
