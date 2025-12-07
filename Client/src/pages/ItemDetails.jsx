import React from 'react'
import { Link, useParams } from 'react-router-dom'

const ItemDetails = () => {
    const { id } = useParams()

    // Placeholder data - in a real app, fetch from API based on id
    const item = {
        id,
        name: 'Blue Water Bottle',
        category: 'Personal Items',
        location: 'Location found',
        date: 'Dec 3',
        description: 'A blue water bottle found near the park entrance.',
        status: 'Found'
    }

    return (
        <div className='w-4/5 mx-auto p-5 mt-10'>
            <Link to='/'>
                <div className='text-xl font-medium mb-5'>
                    <i className="bi bi-box-arrow-left me-2"></i>
                    Back to Dashboard
                </div>
            </Link>
            <div className='bg-white border border-gray-300 rounded-xl p-6 shadow-sm'>
                <div className='flex gap-6'>
                    <div className='w-1/3'>
                        <div className='bg-red-200 h-64 rounded-lg flex items-center justify-center'>
                            <span className='text-gray-500'>Image Placeholder</span>
                        </div>
                    </div>
                    <div className='w-2/3'>
                        <h1 className='text-3xl font-bold mb-2'>{item.name}</h1>
                        <p className='text-gray-600 mb-4'>{item.description}</p>
                        <div className='space-y-2'>
                            <p><strong>Category:</strong> {item.category}</p>
                            <p><strong>Location:</strong> {item.location}</p>
                            <p><strong>Date:</strong> {item.date}</p>
                            <p><strong>Status:</strong> {item.status}</p>
                        </div>
                        <div className='mt-6'>
                            <button className='bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg font-medium mr-4'>
                                Claim Item
                            </button>
                            <button className='bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 px-4 rounded-lg font-medium'>
                                Report Issue
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetails