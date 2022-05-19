import React, { useState, createContext, useEffect } from 'react';
import { IPosts, Context } from '../Interfaces';

export const GlobalContext = createContext<any>(null);

export const ContextProvider = (props: any) => {
  const [posts, setPosts] = useState<Array<IPosts>>([]);
  ///funciones que modifican estados

  return (
    <div>
      <GlobalContext.Provider
        value={{
          posts,
          setPosts,
        }}
      >
        {props.children}
      </GlobalContext.Provider>
    </div>
  );
};
