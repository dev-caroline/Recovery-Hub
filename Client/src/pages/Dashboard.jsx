import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify';


const Dashboard = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://recovery-hub.onrender.com/api/items')
            .then(res => res.json())
            .then(data => {
                setItems(data.filter(item => item.status === 'lost' || item.status === 'claimed'));
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setLoading(false);
                toast.error('Error loading items');
            });
    }, []);

    return (
        <div>
            <div className='mt-6 sm:mt-10 flex flex-col sm:flex-row gap-3 justify-center px-4'>
                <button className='bg-green-600 hover:bg-green-700 text-white py-3 px-8 sm:px-10 shadow-sm rounded-xl font-medium w-full sm:w-auto'>
                    <i className="bi bi-clock me-2"></i>
                    Lost Items</button>
                <Link to='/found' className='w-full sm:w-auto'>
                    <button className='bg-gray-100 hover:bg-gray-200 py-3 px-8 sm:px-8 rounded-xl font-medium shadow-sm w-full'>
                        <i className="bi bi-check-circle me-2"></i>
                        Found Items</button>
                </Link>
            </div>

            <div className='text-center mt-5 sm:mt-8 w-full sm:w-11/12 lg:w-4/5 px-4 sm:px-6 lg:px-10 py-4 sm:py-8 mx-auto'>
            <div className='relative mb-6 sm:mb-8'>
                <input type="text" className='border border-gray-300 rounded w-full p-2 pl-10 focus:outline-none focus:ring-2 focus:ring-green-100 text-sm sm:text-base' placeholder="Search for lost items..." />
                <i className="bi bi-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
            </div>
                {loading ? (
                    <div className="flex justify-center items-center"><div className="animate-spin rounded-full h-32 w-32 border-b-2 border-green-600"></div></div>
                ) : (
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-10' >
                        {items.map(item => (
                            <div key={item._id} className='border rounded-xl overflow-hidden h-auto'>
                                {item.image ? (
                                    <img src={item.image} alt={item.title} className='h-48 sm:h-64 w-full object-cover' />
                                ) : (
                                    <div className='h-48 sm:h-64 bg-gray-100 flex items-center justify-center'>
                                        <i className="bi bi-image text-gray-400 text-4xl sm:text-6xl"></i>
                                    </div>
                                )}
                                <div className='text-start p-4 sm:p-5'>
                                    <h3 className='font-bold text-xl sm:text-2xl'>{item.title}</h3>
                                    <p className='text-sm text-gray-500 mt-2'> <i className="bi bi-bag-dash me-2"></i>Personal Items</p>
                                    <p className='text-sm text-gray-500'><i className="bi bi-geo-alt me-2"></i>{item.location}</p>
                                    <div className='flex justify-between mt-3 text-sm'>
                                        <span>{new Date(item.date).toLocaleDateString()}</span>
                                        <Link to={`/item/${item._id}`} className='text-blue-500 hover:text-blue-700'>
                                            <i className="bi bi-arrow-right me-2"></i>
                                            View details</Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

export default Dashboard