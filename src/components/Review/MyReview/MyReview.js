import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import ShowMyReview from '../ShowMyReview/ShowMyReview';

const MyReview = () => {
    const { user } = useContext(AuthContext)
    const [reviews, setReviews] = useState([])
    // console.log(reviews)

    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [user?.email])


    const handleDelete = (id) => {
        const proceed = window.confirm('Do you want to delete this review?')
        if (proceed) {
            fetch(`http://localhost:5000/reviews/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert('Deleted Successfully');
                        const remaining = reviews.filter(rev => rev._id !== id);
                        setReviews(remaining)
                    }
                })
        }
    }


    return (
        <div>
            <h1 className='text-3xl text-center font-bold my-3'>My Review</h1>
            <div>
                {
                    reviews?.map(userReview => <ShowMyReview
                        key={userReview._id}
                        userReview={userReview}
                        handleDelete={handleDelete}

                    ></ShowMyReview>)
                }
            </div>
        </div>
    );
};

export default MyReview;