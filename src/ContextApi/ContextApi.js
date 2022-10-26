import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import React, { createContext, useState } from 'react';
import app from '../Firebase/Firebase';

const auth = getAuth(app);

export const AuthContext = createContext()

const ContextApi = ({ children }) => {

  const [user, setUser] = useState()


  const CreateNewUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  const SigninUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  }

  const authInfo = { CreateNewUser, SigninUser }

  return (
    <div>
      <AuthContext.Provider value={authInfo}>
        {children}
      </AuthContext.Provider>
    </div>
  );
};

export default ContextApi;