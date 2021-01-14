import React, {createContext, useContext} from 'react';
import {useProvideAuth} from './useProvideAuth';
import {IAuthContext, IProvideAuthProps} from './ProvideAuthTyping';

const authContext = createContext<IAuthContext | null>(null);

export function ProvideAuth({children}: IProvideAuthProps) {
  const auth: IAuthContext = useProvideAuth();
  return (
    <authContext.Provider value={auth} >
      {children}
    </authContext.Provider>
  )
}

export function useAuth() {
  return useContext(authContext);
}




