import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ItemDetails = () => {
    const { img, name, description, price } = useLoaderData()
    return (
        <div className='flex justify-center'>
            <div className="card w-1/2 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={img} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title  text-3xl font-bold">{name}</h2>
                    <h2 className="card-title  text-2xl font-semibold">Price: {price}$</h2>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default ItemDetails;