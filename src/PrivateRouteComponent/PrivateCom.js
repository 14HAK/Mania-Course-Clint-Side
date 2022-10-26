import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../ContextApi/ContextApi';

const PrivateCom = ({ children }) => {

  const { user, loading } = useContext(AuthContext)
  const location = useLocation()

  if (loading) {
    return <p className='text-3xl text-green-700 text-center'>Loading...</p>
  } else {

    if (user) {
      return children;
    } else {
      return <Navigate to='/signin' state={{ from: location }} replace></Navigate>
    }

  }

};

export default PrivateCom;