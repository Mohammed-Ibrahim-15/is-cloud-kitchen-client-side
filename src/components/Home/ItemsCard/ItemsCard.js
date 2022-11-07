import React from 'react';

const ItemsCard = ({ item }) => {
    const { img, name, description } = item
    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure className='h-60 w-auto'><img src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p> {description} </p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItemsCard;