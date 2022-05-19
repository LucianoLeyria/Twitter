import { LoginProps, RegisterProps, tweetProps } from './Interfaces';

export const login = async (datosLogin: LoginProps) => {
  const url = import.meta.env.VITE_APP_URL;
  let res = await fetch(`${url}` + '/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(datosLogin),
  });
  const token = await res.json();
  if (token.token) window.localStorage.setItem('token', token.token);
  console.log('token?', token);
  return token;
};

export const register = async (datosRegister: RegisterProps) => {
  const url = import.meta.env.VITE_APP_URL;
  let res = await fetch(`${url}` + '/auth/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(datosRegister),
  });
  const registeredUser = await res.json();
  console.log('registered', registeredUser);
  return registeredUser;
};

export const tweetPost = async (tweet: tweetProps) => {
  const url = import.meta.env.VITE_APP_URL;
  let res = await fetch(`${url}` + '/posts', {
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + window.localStorage.getItem('token'),
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(tweet),
  });
  const tweetRes = await res.json();
  console.log('tweetres', tweetRes);
  return tweetRes;
};

export const getPosts = async () => {
  const url = import.meta.env.VITE_APP_URL;
  let res = await fetch(`${url}` + '/posts', {
    method: 'GET',
  });
  const postsRes = await res.json();
  console.log('posts?', postsRes);
  return postsRes;
};
