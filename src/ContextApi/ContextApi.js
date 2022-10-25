import React, { createContext } from 'react';

export const AuthContext = createContext()
const ContextApi = ({ children }) => {

  const bela = { name: 'bela' };

  const all = { bela }

  return (
    <div>
      <AuthContext.Provider value={all}>
        {children}
      </AuthContext.Provider>
    </div>
  );
};

export default ContextApi;