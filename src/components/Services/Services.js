import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import ItemsCard from '../Home/ItemsCard/ItemsCard';

const Services = () => {
    useTitle('Services')
    const services = useLoaderData()

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