import { LoginProps, RegisterProps, tweetProps, IPosts } from './Interfaces';

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
  let data = new FormData();
  data.append('tweet', tweet.tweet);
  data.append('image', document.getElementById('image').files[0]);

  const url = import.meta.env.VITE_APP_URL;
  let res = await fetch(`${url}` + '/posts', {
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + window.localStorage.getItem('token'),
    },
    body: data,
  });
  const tweetRes = await res.json();
  console.log('resp?????', tweetRes);
  return tweetRes;
};

export const getPosts = async () => {
  const url = import.meta.env.VITE_APP_URL;
  let res = await fetch(`${url}` + '/posts', {
    method: 'GET',
  });
  const postsRes = await res.json();
  return postsRes;
};

export const getPostsAllTime = async (fecha: string) => {
  const url = import.meta.env.VITE_APP_URL;
  let res = await fetch(`${url}` + '/posts/hay-nuevos-posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ fecha }),
  });
  const newPosts = await res.json();
  return newPosts;
};

export const postFavorites = async (id: string) => {
  const url = import.meta.env.VITE_APP_URL;
  let res = await fetch(`${url}` + '/favs', {
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + window.localStorage.getItem('token'),
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ postId: id }),
  });
  const newFavs = await res.json();
  return newFavs;
};

export const getFavorites = async (id: string) => {
  const url = import.meta.env.VITE_APP_URL;
  let res = await fetch(`${url}` + '/favs/' + id, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const getFavs = await res.json();
  return getFavs;
};

export const dioLike = async (id: string) => {
  const url = import.meta.env.VITE_APP_URL;
  let res = await fetch(`${url}` + '/favs/liked/' + id, {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + window.localStorage.getItem('token'),
      'Content-Type': 'application/json',
    },
  });
  const dioLike = await res.json();
  return dioLike;
};

export const deleteFav = async (id: string) => {
  const url = import.meta.env.VITE_APP_URL;
  let res = await fetch(`${url}` + '/favs/dislike/' + id, {
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer ' + window.localStorage.getItem('token'),
      'Content-Type': 'application/json',
    },
  });
  const deleteFav = await res.json();
  return deleteFav;
};

export const getFavsForUser = async () => {
  const url = import.meta.env.VITE_APP_URL;
  let res = await fetch(`${url}` + '/posts/favourites', {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + window.localStorage.getItem('token'),
      'Content-Type': 'application/json',
    },
  });
  const favForUser = await res.json();

  return favForUser.sort((a: any, b: any) =>
    b.post?.postId?.fecha > a.post?.postId?.fecha ? 1 : -1
  );
};

export const getInfoProfile = async (id: string) => {
  const url = import.meta.env.VITE_APP_URL;
  let res = await fetch(`${url}` + '/users/' + id, {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + window.localStorage.getItem('token'),
      'Content-Type': 'application/json',
    },
  });
  const infoProfile = await res.json();
  console.log('infoProfile ????????', infoProfile);
  return infoProfile;
};

export const editProfile = async (profile: any) => {
  let data = new FormData();
  data.append('avatar', document.getElementById('avatar').files[0]);
  data.append('portada', document.getElementById('portada').files[0]);
  data.append('nombre', profile.nombre);
  data.append('descripcion', profile.descripcion);
  data.append('ubicacion', profile.ubicacion);
  const url = import.meta.env.VITE_APP_URL;
  let res = await fetch(`${url}` + '/users', {
    method: 'PUT',
    headers: {
      Authorization: 'Bearer ' + window.localStorage.getItem('token'),
    },
    body: data,
  });
  const profileRes = await res.json();
  console.log('resp?????', profileRes);
  return profileRes;
};
