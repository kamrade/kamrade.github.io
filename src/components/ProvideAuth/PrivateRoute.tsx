import React from 'react';
import {useAuth} from './ProvideAuth';
import { Route, Redirect } from "react-router-dom";

export function PrivateRoute({ children, ...rest}: any) {
  let auth = useAuth();
  return (
    <Route

      {...rest}

      render={({ location}: any) =>
        auth?.user
          ? (children)
          : (<Redirect to={{
               pathname: "/auth",
               state: {from: location}
              }}/>)
      }
    />
  );
}
