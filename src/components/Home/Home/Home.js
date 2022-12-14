import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../../hooks/useTitle';
import Banner from '../../Banner/Banner';
import ItemsCard from '../ItemsCard/ItemsCard';
import Order from '../ItemsCard/Order/Order';

const Home = () => {
    const [items, setItems] = useState([]);
    useTitle('Home')
    // console.log(user)
    useEffect(() => {
        fetch('https://is-cloud-kitchen-server-side-mohammed-ibrahim-15.vercel.app/items')
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
            <Order></Order>
        </div>
    );
};

export default Home;