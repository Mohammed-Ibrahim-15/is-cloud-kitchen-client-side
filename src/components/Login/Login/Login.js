import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import useTitle from '../../../hooks/useTitle';

const Login = () => {
    const googleProvider = new GoogleAuthProvider();
    const { login, googleLogin, loading, setLoading } = useContext(AuthContext)
    const location = useLocation();
    const navigate = useNavigate();
    useTitle('Login')

    console.log(loading)

    const from = location.state?.from?.pathname || '/';

    if (loading) {
        return <>
            <div className='flex flex-col items-center my-4'>
                <div className="bg-gray-400 flex w-12 h-12 border-4 border-dashed rounded-full animate-spin dark:border-black"></div>
            </div>
        </>
    }

    const handleLogin = (event) => {
        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const password = form.password.value
        // console.log(email, password)

        login(email, password)
            .then(result => {
                const user = result.user

                const currentUser = {
                    email: user.email
                }
                console.log(currentUser)

                // get jwt token
                fetch('https://is-cloud-kitchen-server-side-mohammed-ibrahim-15.vercel.app/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        localStorage.setItem('ISCloudKitchen-token', data.token)
                        setLoading(false)
                        navigate(from, { replace: true })
                    });

            })
            .catch(err => console.error(err))
    }

    const handleGoogle = () => {
        googleLogin(googleProvider)
            .then(result => {
                const user = result.user
                console.log(user)
                const currentUser = {
                    email: user.email
                }

                // get jwt token
                fetch('https://is-cloud-kitchen-server-side-mohammed-ibrahim-15.vercel.app/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        localStorage.setItem('ISCloudKitchen-token', data.token)
                        setLoading(false)
                        navigate(from, { replace: true })
                    });
            })
            .catch(err => {
                console.error(err)
                setLoading(false)
            })
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
                                <input type="text" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
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
                            <button onClick={handleGoogle} className="btn btn-success">Google Sign In</button>
                        </div>

                    </div>


                </div>
            </div>
        </div>
    );
};

export default Login;