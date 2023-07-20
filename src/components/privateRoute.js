import React, { useState, useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const token = localStorage.getItem("token");
  const [isTokenValidated, setIsTokenValidated] = useState(false);

  useEffect(() => {
    if (token) {
      setIsLoggedIn(true);
    }
    
    setIsTokenValidated(true);
  }, []);

  if (!isTokenValidated) {
    return <div>Loading...</div>;
  }

  return isLoggedIn ? (
    <>
      <Outlet />
    </>
  ) : (
    <Navigate to="/login" replace  />
  );
};

export default PrivateRoute;
