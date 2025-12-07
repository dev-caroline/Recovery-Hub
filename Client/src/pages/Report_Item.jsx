import React from 'react'
import { Link } from 'react-router-dom'



const Report_Item = () => {
    return (
        <div className='w-3/5 mx-auto mt-16'>
                <Link to='/'>
                    <div className='text-2xl font-medium'>
                        <i className="bi bi-box-arrow-left me-2"></i>
                        Back
                    </div>
                </Link>
            <div className=' p-5 shadow overflow-auto' style={{ height: '82vh' }}>
                <div className='mt-5 p-6 bg-gray-100 border border-gray-200 rounded-md'>
                    <div className='text-center'>
                        <h1 className='text-2xl font-semibold text-gray-800 mb-2'>Report Lost or Found Item</h1>
                        <p className='text-gray-600'>Help reunite lost items with their owners</p>
                    </div>
                </div>
                <div className='mt-5'>
                    <h2 className='text-xl font-medium mb-4'>Report Details</h2>
                    <div className='mb-4'>
                        <label className='block text-sm font-medium mb-2'>Item Status</label>
                        <div className='flex space-x-4'>
                            <label>
                                <input type='radio' name='type' value='lost' defaultChecked className='mr-2' />
                                Lost
                            </label>
                            <label>
                                <input type='radio' name='type' value='found' className='mr-2' />
                                Found
                            </label>
                        </div>
                    </div>
                    <form className='space-y-4'>
                        <div>
                            <label className='block text-sm font-medium mb-1'>What type of item did you lose?</label>
                            <select className='w-full p-2 border border-gray-300 rounded' required>
                                <option value=''>Select item type</option>
                                <option value='phone'>Phone</option>
                                <option value='wallet'>Wallet</option>
                                <option value='keys'>Keys</option>
                                <option value='bag'>Bag/Purse</option>
                                <option value='jewelry'>Jewelry</option>
                                <option value='clothing'>Clothing</option>
                                <option value='electronics'>Electronics</option>
                                <option value='documents'>Documents</option>
                                <option value='other'>Other</option>
                            </select>
                        </div>
                        <div>
                            <label className='block text-sm font-medium mb-1'>Description of the item</label>
                            <textarea className='w-full p-2 border border-gray-300 rounded' rows='3' placeholder='Color, brand, model, etc.' required></textarea>
                        </div>
                        <div>
                            <label className='block text-sm font-medium mb-1'>Upload an image of the item (optional)</label>
                            <input type='file' accept='image/*' className='w-full p-2 border border-gray-300 rounded' />
                        </div>
                        <div>
                            <label className='block text-sm font-medium mb-1'>Where did you lose it?</label>
                            <input type='text' className='w-full p-2 border border-gray-300 rounded' placeholder='Location or address' required />
                        </div>
                        <div>
                            <label className='block text-sm font-medium mb-1'>When did you lose it?</label>
                            <input type='date' className='w-full p-2 border border-gray-300 rounded' required />
                        </div>
                        <div>
                            <label className='block text-sm font-medium mb-1'>Any identifying features or serial numbers?</label>
                            <input type='text' className='w-full p-2 border border-gray-300 rounded' placeholder='Serial number, unique marks, etc.' />
                        </div>
                        <div>
                            <label className='block text-sm font-medium mb-1'>Reward offered? (optional)</label>
                            <input type='text' className='w-full p-2 border border-gray-300 rounded' placeholder='Amount or description' />
                        </div>
                        <div>
                            <label className='block text-sm font-medium mb-1'>Your Name</label>
                            <input type='text' className='w-full p-2 border border-gray-300 rounded' required />
                        </div>
                        <div>
                            <label className='block text-sm font-medium mb-1'>Email</label>
                            <input type='email' className='w-full p-2 border border-gray-300 rounded' required />
                        </div>
                        <div>
                            <label className='block text-sm font-medium mb-1'>Phone Number</label>
                            <input type='tel' className='w-full p-2 border border-gray-300 rounded' required />
                        </div>
                        <div className='flex justify-end'>
                        <button type='submit' className='bg-red-600 text-white py-2 px-4 rounded font-medium hover:bg-red-700'>Submit Report</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Report_Item