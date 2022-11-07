import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ItemsCard from '../Home/ItemsCard/ItemsCard';

const Services = () => {
    const services = useLoaderData()
    console.log(services)
    return (
        <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-screen-xl mx-auto'>
            {
                services.map(item => <ItemsCard
                    key={item._id}
                    item={item}
                ></ItemsCard>)
            }
        </div>
    );
};

export default Services;