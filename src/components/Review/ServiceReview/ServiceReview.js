import React, { useContext } from 'react';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import { FaUserAlt } from 'react-icons/fa';

const ServiceReview = ({ item }) => {
    const { _id, name } = item
    const { user } = useContext(AuthContext)

    const handleReview = (event) => {
        event.preventDefault();
        const form = event.target
        const userName = user?.displayName
        const email = user?.email
        const userImg = user?.photoURL
        const review = form.review.value

        const serviceReview = {
            service: _id,
            serviceName: name,
            userName,
            email,
            userImg,
            review
        }
        // console.log(serviceReview)
        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(serviceReview)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('Review Added')
                    form.reset();
                }
            })
            .catch(err => console.error(err))

    }

    console.log(user)
    return (
        <div>
            <h1 className='text-center text-2xl font-bold mb-6'>Review Section</h1>

            <form onSubmit={handleReview} className='flex flex-col items-center'>
                <div>
                    <img src={user?.photoURL || <FaUserAlt />} alt="" className="object-cover w-12 h-12 rounded-full dark:bg-gray-500" />
                </div>
                <div>
                    <h4 className="font-bold">{user?.displayName || user?.email}</h4>
                </div>
                <textarea name='review' className="textarea textarea-bordered w-1/2 mt-2" placeholder="Write Your Review"></textarea>
                <input className='btn mt-2' type="submit" value="Post" />
            </form>

        </div>
    );
};

export default ServiceReview;