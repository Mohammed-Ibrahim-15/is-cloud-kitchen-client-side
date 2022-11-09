import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import ShowMyReview from '../ShowMyReview/ShowMyReview';

const MyReview = () => {
    const { user } = useContext(AuthContext)
    const [reviews, setReviews] = useState([])
    console.log(reviews)

    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [user?.email])

    return (
        <div>
            <h1 className='text-3xl'>My Review {reviews?.length}</h1>
            <div>
                {
                    reviews?.map(userReview => <ShowMyReview
                        key={userReview._id}
                        userReview={userReview}
                    ></ShowMyReview>)
                }
            </div>
        </div>
    );
};

export default MyReview;