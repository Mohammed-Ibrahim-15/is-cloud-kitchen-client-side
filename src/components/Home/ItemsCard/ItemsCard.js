import React from 'react';
import { Link } from 'react-router-dom';

const ItemsCard = ({ item }) => {
    const { _id, img, name, description } = item
    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl mt-8">
                <img className='h-60 w-full rounded-xl' src={img} alt="Shoes" />
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    {
                        description.length > 100 ?
                            <Link to={`/services/${_id}}`}><p>{description.slice(0, 100) + '...' + 'See More'} <button className="text-xs btn btn-active btn-ghost mt-2">View Details</button> </p></Link>
                            :
                            <p>{description}</p>
                    }
                </div>
            </div>
        </div>
    );
};

export default ItemsCard;