import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/Firebase';

const auth = getAuth(app);

export const AuthContext = createContext()

const ContextApi = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null)


  const CreateNewUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  }

  const UpdateUserProfile = (profile) => {
    setLoading(true)
    return updateProfile(auth.currentUser, profile)
  }

  const UserVarification = () => {
    setLoading(true)
    return sendEmailVerification(auth.currentUser)
  }

  const SigninUser = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  }

  const SignoutUser = () => {
    setLoading(true)
    return signOut(auth)
  }

  useEffect(() => {
    setLoading(true)
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser === null || currentUser.emailVerified) {
        setUser(currentUser)
        setLoading(false)
      } else {
        setUser(null)
      }
    });
    return () => {
      unsubscribe()
    }

  }, [])

  const authInfo = {
    CreateNewUser,
    UpdateUserProfile,
    UserVarification,
    SigninUser,
    SignoutUser,
    user,
    setLoading,
    loading
  }

  return (
    <div>
      <AuthContext.Provider value={authInfo}>
        {children}
      </AuthContext.Provider>
    </div>
  );
};

export default ContextApi;