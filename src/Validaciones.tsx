export const validarusername = (username: string, setMensaje: Function) => {
  if (!username.trim()) {
    return setMensaje('Need to put a name ');
  } else {
    setMensaje('');
  }
};

export const validarpassword = (password: string, setMensaje: Function) => {
  if (!password.trim()) {
    return setMensaje('Need to put a password');
  } else {
    setMensaje('');
  }
};

export const validaremail = (email: string, setMensaje: Function) => {
  if (!email.trim()) {
    return setMensaje('Need to put a email');
  } else {
    setMensaje('');
  }
};
