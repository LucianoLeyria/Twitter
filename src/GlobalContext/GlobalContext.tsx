import React, { useState, createContext, useEffect } from 'react';
import { IPosts, Favoritos } from '../Interfaces';

export const GlobalContext = createContext<any>(null);

export const ContextProvider = (props: any) => {
  const [posts, setPosts] = useState<Array<IPosts>>([]);
  const [favorites, setFavorites] = useState<Array<Favoritos>>([]);
  const [user, setUser] = useState<any>(null);
  const [userProfile, setUserProfile] = useState<any>('');
  const [infoUser, setInfoUser] = useState<any>({});
  const [loading, setLoading] = useState<boolean>(false);

  ///funciones que modifican estados

  return (
    <div>
      <GlobalContext.Provider
        value={{
          posts,
          setPosts,
          favorites,
          setFavorites,
          user,
          setUser,
          userProfile,
          setUserProfile,
          infoUser,
          setInfoUser,
          loading,
          setLoading,
        }}
      >
        {props.children}
      </GlobalContext.Provider>
    </div>
  );
};
