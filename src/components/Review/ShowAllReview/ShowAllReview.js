import React from 'react';
import { FaUserAlt } from 'react-icons/fa';

const ShowAllReview = ({ rev }) => {
    const { userImg, userName, email, serviceName, review } = rev
    console.log(rev)
    return (
        <div>
            <div className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md divide-gray-700 dark:bg-gray-900 dark:text-gray-100">
                <div className="flex justify-between p-4">
                    <div className="flex space-x-4">
                        <div>
                            {
                                userImg ?
                                    <img src={userImg} alt="" className="object-cover w-12 h-12 rounded-full dark:bg-gray-500" />
                                    :
                                    <FaUserAlt />
                            }
                        </div>
                        <div>
                            <h4 className="font-bold">{userName ? userName : email}</h4>
                            <h4 className="font-bold">Service Name: {serviceName} </h4>
                        </div>
                    </div>

                </div>
                <div className="p-4 space-y-2 text-sm dark:text-gray-400">
                    <p><span className='font-semibold'>Review:</span> {review}</p>
                </div>
            </div>
        </div>
    );
};

export default ShowAllReview;