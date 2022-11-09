import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../../hooks/useTitle';

const UpdateReview = () => {

    const storedReview = useLoaderData()
    const { serviceName, userName, userImg, email, review } = storedReview
    const [userReview, setUserReview] = useState(storedReview)
    useTitle('Update Review')


    const handleUpdate = (event) => {
        event.preventDefault();
        // console.log(userReview)

        fetch(`http://localhost:5000/update/${storedReview._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userReview)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('Review Updated')
                    console.log(data)
                }
            })
    }

    const handleChange = (event) => {
        const field = event.target.name;
        const value = event.target.value;
        const newReview = { ...userReview }
        newReview[field] = value;
        setUserReview(newReview)
    }

    return (
        <div>
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
                <form onSubmit={handleUpdate} className="p-4 space-y-2 text-sm dark:text-gray-400">
                    <textarea onChange={handleChange} name='review' defaultValue={review} className="textarea textarea-bordered w-full mt-2" placeholder="Update Your Review"></textarea>
                    <input className='btn mt-2' type="submit" value="Update" />
                </form>
            </div>
        </div>
    );
};

export default UpdateReview;