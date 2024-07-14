import React from "react";
import { AuthProvider } from "./AuthContext";

const AuthProviderWrapper = ({ children }) => {
  return <AuthProvider>{children}</AuthProvider>;
};

export default AuthProviderWrapper;
