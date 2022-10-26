import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/Firebase';

const auth = getAuth(app);

export const AuthContext = createContext()

const ContextApi = ({ children }) => {

  const [user, setUser] = useState(null)


  const CreateNewUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  const SigninUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
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

  const authInfo = { CreateNewUser, SigninUser, user }

  return (
    <div>
      <AuthContext.Provider value={authInfo}>
        {children}
      </AuthContext.Provider>
    </div>
  );
};

export default ContextApi;