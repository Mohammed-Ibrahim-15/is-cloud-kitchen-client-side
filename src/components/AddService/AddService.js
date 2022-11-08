import React, { useState } from 'react';
import useTitle from '../../hooks/useTitle';

const AddService = () => {
    const [service, setService] = useState({})
    useTitle('Add Service')


    const handleAddService = (event) => {
        event.preventDefault()
        console.log(service)

        fetch('http://localhost:5000/items', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    alert('User added successfully');
                    event.target.reset();
                }
            })


    }

    const handleInputBlur = (event) => {
        const field = event.target.name
        const value = event.target.value
        const newService = { ...service }
        newService[field] = value
        setService(newService)
    }


    return (
        <div className="hero bg-base-200">
            <div className="hero-content flex-col lg:flex-cols-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Add New Service</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleAddService} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input onBlur={handleInputBlur} type="text" name='name' placeholder="Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Image URL</span>
                            </label>
                            <input onBlur={handleInputBlur} type="text" name='img' placeholder="Image URL" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input onBlur={handleInputBlur} type="text" name='price' placeholder="Price" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <input onBlur={handleInputBlur} type="text" name='description' placeholder="Description" className="input input-bordered" />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Add Service</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddService;