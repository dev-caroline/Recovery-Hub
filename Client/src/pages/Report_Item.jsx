import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify';



const Report_Item = () => {
    const [itemStatus, setItemStatus] = useState('lost');
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        location: '',
        image: null,
        email: ''
    });
    const [submitting, setSubmitting] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitting(true);
        const data = new FormData();
        data.append('title', formData.title);
        data.append('description', formData.description);
        data.append('location', formData.location);
        data.append('status', itemStatus);
        data.append('email', formData.email);
        if (formData.image) {
            data.append('image', formData.image);
        }

        try {
            const response = await fetch('http://localhost:3500/api/items', {
                method: 'POST',
                body: data
            });
            if (response.ok) {
                toast.success('Report submitted successfully!');
                setFormData({ title: '', description: '', location: '', image: null, email: '' });
                setItemStatus('lost');
                e.target.reset();
            } else {
                toast.error('Error submitting report');
            }
        } catch (error) {
            console.error('Error:', error);
            toast.error('Error submitting report');
        } finally {
            setSubmitting(false);
        }
    };

    const handleStatusChange = (e) => {
        setItemStatus(e.target.value);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        setFormData({ ...formData, image: e.target.files[0] });
    };

    return (
        <div className='w-full sm:w-4/5 mx-auto mt-8 sm:mt-16 p-4 sm:p-6'>
                <Link to='/'>
                    <div className='text-xl sm:text-2xl font-medium mb-4 sm:mb-6'>
                        <i className="bi bi-box-arrow-left me-2"></i>
                        Back
                    </div>
                </Link>
            <div className='bg-white p-6 sm:p-8 shadow-lg rounded-lg overflow-auto' style={{ height: 'auto', minHeight: '80vh' }}>
                <div className='mb-6 sm:mb-8 p-4 sm:p-6 bg-gray-100 border border-gray-200 rounded-md'>
                    <div className='text-center'>
                        <h1 className='text-xl sm:text-2xl font-semibold text-gray-800 mb-2'>Report Lost or Found Item</h1>
                        <p className='text-gray-600'>Help reunite lost items with their owners</p>
                    </div>
                </div>
                <div className='px-2 sm:px-4'>
                    <h2 className='text-lg sm:text-xl font-medium mb-4 sm:mb-6'>Report Details</h2>
                    <div className='mb-4'>
                        <label className='block text-sm font-medium mb-2'>Item Status</label>
                        <div className='flex space-x-4'>
                            <label>
                                <input type='radio' name='type' value='lost' defaultChecked onChange={handleStatusChange} className='mr-2' />
                                Lost
                            </label>
                            <label>
                                <input type='radio' name='type' value='found' onChange={handleStatusChange} className='mr-2' />
                                Found
                            </label>
                        </div>
                    </div>
                    <form className='space-y-4' onSubmit={handleSubmit}>
                        <div>
                            <label className='block text-sm font-medium mb-1'>What type of item did you {itemStatus === 'lost' ? 'lose' : 'find'}?</label>
                            <select name='title' value={formData.title} onChange={handleInputChange} className='w-full p-2 border border-gray-300 rounded' required>
                                <option value=''>Select item type</option>
                                <option value='Phone'>Phone</option>
                                <option value='Wallet'>Wallet</option>
                                <option value='Keys'>Keys</option>
                                <option value='Bag/Purse'>Bag/Purse</option>
                                <option value='Jewelry'>Jewelry</option>
                                <option value='Clothing'>Clothing</option>
                                <option value='Electronics'>Electronics</option>
                                <option value='Documents'>Documents</option>
                                <option value='Other'>Other</option>
                            </select>
                        </div>
                        <div>
                            <label className='block text-sm font-medium mb-1'>Description of the item</label>
                            <textarea name='description' value={formData.description} onChange={handleInputChange} className='w-full p-2 border border-gray-300 rounded' rows='3' placeholder='Color, brand, model, etc.' required></textarea>
                        </div>
                        <div>
                            <label className='block text-sm font-medium mb-1'>Upload an image of the item (optional)</label>
                            <input type='file' accept='image/*' onChange={handleFileChange} className='w-full p-2 border border-gray-300 rounded' />
                        </div>
                        <div>
                            <label className='block text-sm font-medium mb-1'>Where did you {itemStatus === 'lost' ? 'lose' : 'find'} it?</label>
                            <input type='text' name='location' value={formData.location} onChange={handleInputChange} className='w-full p-2 border border-gray-300 rounded' placeholder='Location or address' required />
                        </div>
                        <div>
                            <label className='block text-sm font-medium mb-1'>When did you {itemStatus === 'lost' ? 'lose' : 'find'} it?</label>
                            <input type='date' className='w-full p-2 border border-gray-300 rounded' required />
                        </div>
                        <div>
                            <label className='block text-sm font-medium mb-1'>Any identifying features or serial numbers?</label>
                            <input type='text' className='w-full p-2 border border-gray-300 rounded' placeholder='Serial number, unique marks, etc.' />
                        </div>
                        {itemStatus === 'lost' && (
                            <div>
                                <label className='block text-sm font-medium mb-1'>Reward offered? (optional)</label>
                                <input type='text' className='w-full p-2 border border-gray-300 rounded' placeholder='Amount or description' />
                            </div>
                        )}
                        <div>
                            <label className='block text-sm font-medium mb-1'>Your Name</label>
                            <input type='text' className='w-full p-2 border border-gray-300 rounded' required />
                        </div>
                        <div>
                            <label className='block text-sm font-medium mb-1'>Email</label>
                            <input type='email' name='email' value={formData.email} onChange={handleInputChange} className='w-full p-2 border border-gray-300 rounded' required />
                        </div>
                        <div>
                            <label className='block text-sm font-medium mb-1'>Phone Number</label>
                            <input type='tel' className='w-full p-2 border border-gray-300 rounded' required />
                        </div>
                        <div className='flex justify-end mt-4 sm:mt-6'>
                        <button type='submit' disabled={submitting} className='bg-green-600 text-white py-2 px-4 sm:px-6 rounded font-medium hover:bg-green-700 disabled:opacity-50 flex items-center'>
                            {submitting ? (
                                <>
                                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                                    Submitting...
                                </>
                            ) : (
                                'Submit Report'
                            )}
                        </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Report_Item