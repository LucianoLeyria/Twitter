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
  tweet?: string;
}

export interface Usuario {
  nombre: string;
  email: string;
  avatar: string;
}
export interface IPosts {
  usuarioId: Usuario;
  contenido: string;
  fecha: string;
  _id: string;
}

export interface Context {
  posts: IPosts[];
  setPosts: Function;
}
