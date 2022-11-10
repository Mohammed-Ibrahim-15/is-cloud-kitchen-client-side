import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation();

    if (loading) {
        return <>
            <div className='flex flex-col items-center my-4'>
                <div className="bg-gray-400 flex w-12 h-12 border-4 border-dashed rounded-full animate-spin dark:border-black"></div>
            </div>
        </>
    }

    if (user) {
        return children;
    }

    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default PrivateRoute;