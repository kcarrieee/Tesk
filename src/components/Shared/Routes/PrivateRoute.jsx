import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuthStatus } from "../../../hooks/useAuthStatus";
import Spinner from '../Preloader/Spinner';

const PrivateRoute = () => {
 const { loggedIn, status } = useAuthStatus();

    if(status) {
        return <Spinner/>
    }
    
  return loggedIn ? <Outlet/> : <Navigate to='/login'/>
}

export default PrivateRoute;