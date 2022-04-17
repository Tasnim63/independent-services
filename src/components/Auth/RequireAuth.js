import React from 'react';
import auth from '../../Firebase/Firesbase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
const RequireAuth = ({ children }) => {

    const [user, loading, error] = useAuthState(auth);
    const location = useLocation();
    if (user) {
        return children;
    } else {
        return <Navigate to="/login" state={{ from: location }} />;
    }

};

export default RequireAuth;