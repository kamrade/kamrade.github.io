import {useState} from "react";
import {fakeAuth} from "./fakeAuth";
import {AuthCallback} from './ProvideAuthTyping';

export function useProvideAuth() {
  const [user, setUser] = useState<string | null>(null);

  const signin = (cb: AuthCallback) => {
    return fakeAuth.signin(() => {
      setUser('user');
      cb && cb();
    });
  }

  const signout = (cb: AuthCallback) => {
    return fakeAuth.signout(() => {
      setUser(null);
      cb && cb();
    });
  }

  return { user, signin, signout };
}
