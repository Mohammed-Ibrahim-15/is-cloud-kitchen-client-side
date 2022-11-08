import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    const handleLogin = (event) => {
        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const password = form.password.value
        console.log(email, password)
    }
    return (
        <div>
            <div className="hero min-h-60 bg-base-200">
                <div className="hero-content flex-col lg:flex-cols-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login !</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <Link to='/register' className="label-text-alt link link-hover">Don't have an account?</Link>
                                </label>
                            </div>
                            <div className="form-control">
                                <button type='submit' className="btn btn-primary">Login</button>
                            </div>
                            <p className='text-center'>or</p>

                        </form>
                        <div className='flex justify-center mb-4'>
                            <button className="btn btn-success">Google Sign In</button>
                        </div>

                    </div>


                </div>
            </div>
        </div>
    );
};

export default Login;