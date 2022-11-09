import React from 'react';
import { Link } from 'react-router-dom';

const ShowMyReview = ({ userReview, handleDelete }) => {
    // console.log(userReview)
    const { _id, serviceName, userName, userImg, review, email } = userReview



    return (
        <div className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md divide-gray-700 dark:bg-gray-900 dark:text-gray-100">
            <div className="flex justify-between p-4">
                <div className="flex space-x-4">
                    <div>
                        <img src={userImg} alt="" className="object-cover w-12 h-12 rounded-full dark:bg-gray-500" />
                    </div>
                    <div>
                        <h4 className="font-bold">{userName ? userName : email}</h4>
                        <h4 className="font-bold">Service Name: {serviceName} </h4>
                    </div>
                </div>

            </div>
            <div className="p-4 space-y-2 text-sm dark:text-gray-400">
                <p><span className='font-semibold'>Review:</span> {review}</p>
                <Link to={`/update/${_id}`}><button className="btn btn-active btn-info btn-xs mr-2">Edit</button></Link>
                <button onClick={() => handleDelete(_id)} className="btn btn-error btn-xs">Delete</button>

            </div>
        </div>
    );
};

export default ShowMyReview;