import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/Firebase';

const auth = getAuth(app);

export const AuthContext = createContext()

const ContextApi = ({ children }) => {

  const [user, setUser] = useState(null)


  const CreateNewUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  const UpdateUserProfile = (profile) => {
    return updateProfile(auth.currentUser, profile)
  }

  const SigninUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  }

  const SignoutUser = () => {
    return signOut(auth)
  }

  useEffect(() => {

    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser)
      } else {
        setUser(null)
      }
    });
    return () => {
      unsubscribe()
    }

  }, [])

  const authInfo = { CreateNewUser, UpdateUserProfile, SigninUser, SignoutUser, user }

  return (
    <div>
      <AuthContext.Provider value={authInfo}>
        {children}
      </AuthContext.Provider>
    </div>
  );
};

export default ContextApi;