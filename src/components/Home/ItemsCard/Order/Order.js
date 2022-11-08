import React from 'react';

const Order = () => {
    return (
        <div>
            <div className='my-6'>
                <div className="mt-6 hero max-h-max w-auto  bg-base-200 rounded-3xl">
                    <div className="hero-content flex-col lg:flex-row">
                        <img className="w-1/2 h-96 rounded-lg shadow-2xl" src="https://c8.alamy.com/comp/MRG1NT/delivery-man-courier-service-with-call-number-icon-vector-illustration-MRG1NT.jpg" alt='' />
                        <div>
                            <h1 className="text-6xl font-bold">Order Now !</h1>
                            <p className="py-6">We provide free home delivery. Just give us a call. Also if you want to know more about us. Feel free to call</p>
                            <p className="py-6 text-3xl font-bold">Hotline: 1234567890</p>

                        </div>
                    </div>
                </div>
                <div className="mt-6 hero max-h-max w-auto  bg-base-200 rounded-3xl">
                    <div className="hero-content flex-col lg:flex-row">
                        <div>
                            <h1 className="text-4xl font-bold">We are available in Foodpanda !!</h1>
                            <p className="py-6">Download foodpanda app in your mobile and search IB Cloud Kitchen.</p>

                        </div>
                        <img className="w-1/2 h-96 rounded-lg shadow-2xl" src="http://d2g79oifq3rgie.cloudfront.net/wp-content/uploads/2021/12/27105933/Logo01.20221-600x600.png" alt='' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Order;   