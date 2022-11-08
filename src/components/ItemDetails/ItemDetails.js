import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ItemDetails = () => {
    const item = useLoaderData()
    return (
        <div>
            <h1>Item Details</h1>
            <h1>{item.name}</h1>
        </div>
    );
};

export default ItemDetails;