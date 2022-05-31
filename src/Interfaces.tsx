export interface LoginProps {
  username?: string;
  password?: string;
}

export interface RegisterProps {
  username?: string;
  password?: string;
  email?: string;
}

export interface tweetProps {
  tweet: string;
  image: string;
}

export interface Usuario {
  nombre: string;
  email: string;
  avatar: string;
  _id: string;
}
export interface IPosts {
  usuarioId: Usuario;
  contenido: string;
  fecha: string;
  _id: string;
  avatar: string;
  imagen: string;
  like: number;
}

export interface Context {
  posts: IPosts[];
  setPosts: Function;
}

export interface Favoritos {
  usuarioId: Usuario;
  postId: IPosts;
  _id: string;
}

export interface userToken {
  sub: string;
  iat: number;
  nombre: string;
}
