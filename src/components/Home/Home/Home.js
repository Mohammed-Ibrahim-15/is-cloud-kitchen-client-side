import React, { useContext } from 'react';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const Home = () => {
    const { user } = useContext(AuthContext)
    console.log(user)
    return (
        <div>
            <h1>This is HOME</h1>

        </div>
    );
};

export default Home;