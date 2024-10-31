/* eslint-disable react/prop-types */

import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import auth from "./firebase/firebase.config";
import { createContext, useEffect, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  //   create user
  const userSignUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //   singIn user
  const userlogIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  // log out

  const logOut = () => {
    return signOut(auth);
  };
  // ............

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      setUser(currentUser);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const userInfo = { user, setUser, userSignUp, logOut, userlogIn };

  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
