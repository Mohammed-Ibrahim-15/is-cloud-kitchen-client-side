import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import ItemsCard from '../Home/ItemsCard/ItemsCard';

const Services = () => {
    useTitle('Services')
    const services = useLoaderData()
    console.log(services)

    return (
        <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-screen-xl mx-auto'>
            {
                services?.length !== 0 ?
                    services.map(item => <ItemsCard
                        key={item._id}
                        item={item}
                    ></ItemsCard>)
                    :
                    <>
                        <div className='flex flex-col items-end my-4'>
                            <div className="bg-gray-400 flex w-12 h-12 border-4 border-dashed rounded-full animate-spin dark:border-black"></div>
                        </div>
                    </>
            }
        </div>
    );
};

export default Services;