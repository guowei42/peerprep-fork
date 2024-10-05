import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const AuthRedirect = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

export default AuthRedirect;