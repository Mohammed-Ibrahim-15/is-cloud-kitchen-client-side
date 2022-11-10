import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import useTitle from '../../../hooks/useTitle';
import ShowMyReview from '../ShowMyReview/ShowMyReview';
import toast from 'react-hot-toast';

const MyReview = () => {
    const { user, logOut } = useContext(AuthContext)
    const [reviews, setReviews] = useState([])
    // console.log(reviews) 
    useTitle('My Review')

    useEffect(() => {
        fetch(`https://is-cloud-kitchen-server-side-mohammed-ibrahim-15.vercel.app/reviews?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('ISCloudKitchen-token')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    return logOut()
                }
                return res.json()
            })
            .then(data => setReviews(data))
    }, [user?.email, logOut])

    const handleDelete = (id) => {

        const proceed = window.confirm('Do you want to delete this review?')
        if (proceed) {
            fetch(`https://is-cloud-kitchen-server-side-mohammed-ibrahim-15.vercel.app/reviews/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    // console.log(data);
                    if (data.deletedCount > 0) {
                        // alert('Deleted Successfully');
                        toast.success('Review Deleted Successfully!')
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
                    reviews?.length === 0 ?
                        <h1 className='text-2xl font-bold text-center'>No Review Added</h1>
                        :
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