import React from 'react';
import { Link } from 'react-router-dom';

const ItemsCard = ({ item }) => {
    const { _id, img, name, description, price } = item
    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl mt-8">
                <img className='h-60 w-full rounded-xl' src={img} alt="Shoes" />
                <div className="card-body">
                    <h2 className="card-title text-2xl">{name}</h2>
                    <h2 className="card-title text-base">Price: {price}$</h2>
                    {
                        description.length > 95 ?
                            <p>{description.slice(0, 95) + '...' + '  See More'} <Link to={`/services/${_id}`}><button className="text-xs btn btn-active btn-ghost mt-2">View Details</button></Link> </p>
                            :
                            <p>{description}</p>
                    }
                </div>
            </div>
        </div>
    );
};

export default ItemsCard;