import React from 'react'
import { Link } from 'react-router-dom'


const Dashboard = () => {
    return (
        <div>
            <div className='mt-10 flex gap-3 justify-center'>
                <button className='bg-red-600 hover:bg-red-700 text-white py-3 px-10 shadow-sm rounded-xl font-medium'>
                    <i className="bi bi-clock me-2"></i>
                    Lost Items</button>
                <Link to='/found' >
                    <button className='bg-gray-100 hover:bg-gray-200 py-3 px-8 rounded-xl font-medium shadow-sm'>
                        <i className="bi bi-check-circle me-2"></i>
                        Found Items</button>
                </Link>
            </div>

            <div className='text-center mt-5 w-4/5 p-10 mx-auto'>
            <div className='relative'>
                <input type="text" className='border border-gray-300 rounded w-full p-1 pl-8 focus:outline-none focus:ring-2 focus:ring-blue-100' placeholder="Search for lost items..." />
                <i className="bi bi-search absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
            </div>
                <div className='grid grid-cols-3 gap-10 mt-16' >
                    <div className='border rounded-xl overflow-hidden' style={{ height: '50vh' }}>
                        <div style={{ height: '35vh' }} className='bg-red-200'></div>
                        <div className='text-start p-5'>
                            <h3 className='font-bold text-2xl'>Blue Water Bottle</h3>
                            <p className='text-sm text-gray-500 mt-2'> <i className="bi bi-bag-dash me-2"></i>Personal Items</p>
                            <p className='text-sm text-gray-500'><i className="bi bi-geo-alt me-2"></i>Location found</p>
                            <div className='flex justify-between mt-3 text-sm'>
                                <span className=''>Dec 3</span>
                                <Link to='/item/1' className='text-blue-400 hover:text-blue-600'>
                                    <i className="bi bi-arrow-right me-2"></i>
                                    View details</Link>
                            </div>
                        </div>
                    </div>

                    <div className='border rounded-xl overflow-hidden' style={{ height: '50vh' }}>
                        <div style={{ height: '35vh' }} className='bg-red-200'></div>
                        <div className='text-start p-5'>
                            <h3 className='font-bold text-2xl'>Red Backpack</h3>
                            <p className='text-sm text-gray-500 mt-2'> <i className="bi bi-bag-dash me-2"></i>Personal Items</p>
                            <p className='text-sm text-gray-500'><i className="bi bi-geo-alt me-2"></i>Location found</p>
                            <div className='flex justify-between mt-3 text-sm'>
                                <span className=''>Dec 3</span>
                                <Link to='/item/2' className='text-blue-400 hover:text-blue-600'>
                                    <i className="bi bi-arrow-right me-2"></i>
                                    View details</Link>
                            </div>
                        </div>
                    </div>

                    <div className='border rounded-xl overflow-hidden' style={{ height: '50vh' }}>
                        <div style={{ height: '35vh' }} className='bg-red-200'></div>
                        <div className='text-start p-5'>
                            <h3 className='font-bold text-2xl'>Black Wallet</h3>
                            <p className='text-sm text-gray-500 mt-2'> <i className="bi bi-bag-dash me-2"></i>Personal Items</p>
                            <p className='text-sm text-gray-500'><i className="bi bi-geo-alt me-2"></i>Location found</p>
                            <div className='flex justify-between mt-3 text-sm'>
                                <span className=''>Dec 3</span>
                                <Link to='/item/3' className='text-blue-400 hover:text-blue-600'>
                                    <i className="bi bi-arrow-right me-2"></i>
                                    View details</Link>
                            </div>
                        </div>
                    </div>

                    <div className='border rounded-xl overflow-hidden' style={{ height: '50vh' }}>
                        <div style={{ height: '35vh' }} className='bg-red-200'></div>
                        <div className='text-start p-5'>
                            <h3 className='font-bold text-2xl'>Silver Keys</h3>
                            <p className='text-sm text-gray-500 mt-2'> <i className="bi bi-bag-dash me-2"></i>Personal Items</p>
                            <p className='text-sm text-gray-500'><i className="bi bi-geo-alt me-2"></i>Location found</p>
                            <div className='flex justify-between mt-3 text-sm'>
                                <span className=''>Dec 3</span>
                                <Link to='/item/4' className='text-blue-400 hover:text-blue-600'>
                                    <i className="bi bi-arrow-right me-2"></i>
                                    View details</Link>
                            </div>
                        </div>
                    </div>

                    <div className='border rounded-xl overflow-hidden' style={{ height: '50vh' }}>
                        <div style={{ height: '35vh' }} className='bg-red-200'></div>
                        <div className='text-start p-5'>
                            <h3 className='font-bold text-2xl'>Gold Necklace</h3>
                            <p className='text-sm text-gray-500 mt-2'> <i className="bi bi-bag-dash me-2"></i>Personal Items</p>
                            <p className='text-sm text-gray-500'><i className="bi bi-geo-alt me-2"></i>Location found</p>
                            <div className='flex justify-between mt-3 text-sm'>
                                <span className=''>Dec 3</span>
                                <Link to='/item/5' className='text-blue-400 hover:text-blue-600'>
                                    <i className="bi bi-arrow-right me-2"></i>
                                    View details</Link>
                            </div>
                        </div>
                    </div>

                    <div className='border rounded-xl overflow-hidden' style={{ height: '50vh' }}>
                        <div style={{ height: '35vh' }} className='bg-red-200'></div>
                        <div className='text-start p-5'>
                            <h3 className='font-bold text-2xl'>White Phone</h3>
                            <p className='text-sm text-gray-500 mt-2'> <i className="bi bi-bag-dash me-2"></i>Personal Items</p>
                            <p className='text-sm text-gray-500'><i className="bi bi-geo-alt me-2"></i>Location found</p>
                            <div className='flex justify-between mt-3 text-sm'>
                                <span className=''>Dec 3</span>
                                <Link to='/item/6' className='text-blue-400 hover:text-blue-600'>
                                    <i className="bi bi-arrow-right me-2"></i>
                                    View details</Link>
                            </div>
                        </div>
                    </div>

                    <div className='border rounded-xl overflow-hidden' style={{ height: '50vh' }}>
                        <div style={{ height: '35vh' }} className='bg-red-200'></div>
                        <div className='text-start p-5'>
                            <h3 className='font-bold text-2xl'>Blue Water bottle</h3>
                            <p className='text-sm text-gray-500 mt-2'> <i className="bi bi-bag-dash me-2"></i>Personal Items</p>
                            <p className='text-sm text-gray-500'><i className="bi bi-geo-alt me-2"></i>Location found</p>
                            <div className='flex justify-between mt-3 text-sm'>
                                <span className=''>Dec 3</span>
                                <Link to='/item/7' className='text-blue-400 hover:text-blue-600'>
                                    <i className="bi bi-arrow-right me-2"></i>
                                    View details</Link>
                            </div>
                        </div>
                    </div>

                    <div className='border rounded-xl overflow-hidden' style={{ height: '50vh' }}>
                        <div style={{ height: '35vh' }} className='bg-red-200'></div>
                        <div className='text-start p-5'>
                            <h3 className='font-bold text-2xl'>Blue Water bottle</h3>
                            <p className='text-sm text-gray-500 mt-2'> <i className="bi bi-bag-dash me-2"></i>Personal Items</p>
                            <p className='text-sm text-gray-500'><i className="bi bi-geo-alt me-2"></i>Location found</p>
                            <div className='flex justify-between mt-3 text-sm'>
                                <span className=''>Dec 3</span>
                                <span className=' text-blue-400'>
                                    <i className="bi bi-arrow-right me-2"></i>
                                    View details</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Dashboard