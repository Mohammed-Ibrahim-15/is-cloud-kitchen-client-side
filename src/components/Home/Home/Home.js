import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import Banner from '../../Banner/Banner';
import ItemsCard from '../ItemsCard/ItemsCard';

const Home = () => {
    const { user } = useContext(AuthContext)
    const [items, setItems] = useState([]);
    // console.log(user)
    useEffect(() => {
        fetch('http://localhost:5000/items')
            .then(res => res.json())
            .then(data => setItems(data))

    }, [])
    return (
        <div className='max-w-screen-xl mx-auto'>
            <Banner></Banner>
            <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
                {
                    items.map(item => <ItemsCard
                        key={item._id}
                        item={item}
                    ></ItemsCard>)
                }
            </div>
            <div className='flex justify-center'>
                <Link to='/services'><button className="btn btn-active btn-ghost mt-4">See All</button></Link>
            </div>
        </div>
    );
};

export default Home;