import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import ServiceReview from '../Review/ServiceReview/ServiceReview';

const ItemDetails = () => {
    // const item = useLoaderData
    const { user } = useContext(AuthContext)
    console.log(user)
    const { img, name, description, price } = useLoaderData()
    const item = useLoaderData()
    return (
        <div className='flex justify-center'>
            <div className="card w-1/2 bg-base-100 pb-20 shadow-xl">
                <figure className="px-10 pt-10">
                    <PhotoProvider>
                        <div className="foo rounded-xl">
                            {
                                <PhotoView src={img}>
                                    <img className='rounded-xl' src={img} alt="" />
                                </PhotoView>
                            }
                        </div>
                    </PhotoProvider>
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title  text-3xl font-bold">{name}</h2>
                    <h2 className="card-title  text-2xl font-semibold">Price: {price}$</h2>
                    <p>{description}</p>
                </div>
                {
                    user?.email ?
                        <ServiceReview item={item}></ServiceReview>
                        :
                        <Link to='/login'><h1 className='text-center text-2xl font-bold hover:bg-slate-300'>Please log in to add review</h1></Link>
                }
            </div>

        </div>
    );
};

export default ItemDetails;