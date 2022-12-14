import React from 'react';
import useTitle from '../../hooks/useTitle';

const Blog = () => {
    useTitle('Blog')
    return (
        <div className='max-w-screen-xl mx-auto'>
            <h1 className='my-3 text-center text-3xl font-bold'>All Blog</h1>
            <div className=' grid grid-cols-1 gap-6 lg:grid-cols-2'>
                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body items-center text-center">
                        <h2 className="card-title  text-3xl font-bold">Difference between SQL and NoSQL ?</h2>
                        <br />
                        <p>
                            SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). NoSQL is a class of DBMs that are non-relational and generally do not use SQL. There are five practical differences between SQL and NoSQL:
                            1.Language <br />
                            2.Scalability <br />
                            3.Structure <br />
                            4.Properties <br />
                            5.Support and communities
                        </p>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body items-center text-center">
                        <h2 className="card-title  text-3xl font-bold">What is JWT, and how does it work ?</h2>
                        <br />
                        <p>JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed.</p>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body items-center text-center">
                        <h2 className="card-title  text-3xl font-bold">What is the difference between javascript and NodeJS ?</h2>
                        <br />
                        <p>JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language</p>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body items-center text-center">
                        <h2 className="card-title  text-3xl font-bold">How does NodeJS handle multiple requests at the same time ?</h2>
                        <br />
                        <p>NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;