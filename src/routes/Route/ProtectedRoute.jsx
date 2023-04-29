import React, { useContext } from 'react';
import { contextProvider } from '../../provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const ProtectedRoute = ({children}) => {
    const {user, loading} = useContext(contextProvider);
     const location = useLocation();
    
     if(loading){
        return  <Spinner animation="border" variant="primary" />
     }
    if(user){
        return children;
    }
    return (
      <Navigate to='/login' state={{from: location}} replace></Navigate>
    );
};

export default ProtectedRoute;