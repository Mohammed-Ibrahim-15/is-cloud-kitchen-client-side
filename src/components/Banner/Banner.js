import React from 'react';

const Banner = () => {
    return (
        <div className=''>
            <div className="hero min-h-max w-full" style={{ backgroundImage: `url("https://static.toiimg.com/photo/77933576.cms")` }}>
                <div className="hero-overlay bg-opacity-80"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Welcome to our Cloud Kitchen</h1>
                        <p className="mb-5">This is one of the best cloud kitchen in your area. Just order your food from us then say about the quality. We recommend you to try our food then let us know.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;