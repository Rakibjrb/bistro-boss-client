import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import auth from "../utilities/firebase.config";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import useAxios from "../Hooks/useAxios";

export const AuthContext = createContext(null);

const googleAuthProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState();
  const axios = useAxios();

  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleAuthProvider);
  };

  const createNewUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const updateUserProifle = (
    name = "User 19419",
    photo = "https://i.ibb.co/5x441PC/user.png"
  ) => {
    setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  const userLogin = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const userLogout = () => {
    setLoading(true);
    return signOut(auth);
  };

  const authInfo = {
    user,
    loading,
    googleSignIn,
    createNewUser,
    updateUserProifle,
    userLogin,
    userLogout,
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        const userInfo = { email: currentUser.email };
        axios
          .post("/access-token", userInfo)
          .then((res) => localStorage.setItem("access-token", res.data?.token))
          .catch((e) => console.log(e));
      } else {
        if (localStorage.getItem("access-token")) {
          localStorage.removeItem("access-token");
        }
      }
      setLoading(false);
    });

    return () => unSubscribe();
  }, []);

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};
export default AuthProvider;
