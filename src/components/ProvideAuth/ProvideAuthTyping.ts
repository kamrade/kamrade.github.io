import React from "react";

export type AuthCallback = () => void;

export interface IAuthContext {
  user: string | null,
  signin: (cb: AuthCallback) => void;
  signout: (cb: AuthCallback) => void;
}

export interface IProvideAuthProps {
  children: React.ReactChild
}
