import React, { useState, useEffect } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';

const ItemDetails = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);
    const [claimed, setClaimed] = useState(false);

    useEffect(() => {
        fetch(`https://recovery-hub.onrender.com/api/items/${id}`)
            .then(res => res.json())
            .then(data => {
                setItem(data);
                setClaimed(data.status === 'claimed');
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setLoading(false);
            });
    }, [id]);
    
    const handleClaim = async () => {
        try {
            const response = await fetch(`https://recovery-hub.onrender.com/api/items/${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ status: 'claimed' })
            });
            if (response.ok) {
                setClaimed(true);
                toast.success('Item claimed! Please contact the finder for pickup details.');
            } else {
                toast.error('Error claiming item');
            }
        } catch (error) {
            console.error('Error:', error);
            toast.error('Error claiming item');
        }
    };

    const handleDelete = async () => {
        if (window.confirm('Are you sure you want to delete this item?')) {
            try {
                const response = await fetch(`https://recovery-hub.onrender.com/api/items/${id}`, {
                    method: 'DELETE'
                });
                if (response.ok) {
                    toast.success('Item deleted');
                    navigate('/');
                } else {
                    toast.error('Error deleting item');
                }
            } catch (error) {
                console.error('Error:', error);
                toast.error('Error deleting item');
            }
        }
    };

    if (loading) return <div className="flex justify-center items-center min-h-screen"><div className="animate-spin rounded-full h-32 w-32 border-b-2 border-green-600"></div></div>;
    if (!item) return <div>Item not found</div>;

    return (
        <div className='w-full sm:w-4/5 mx-auto p-4 sm:p-5 mt-10'>
            <Link to='/'>
                <div className='text-lg sm:text-xl font-medium mb-5'>
                    <i className="bi bi-box-arrow-left me-2"></i>
                    Back to Dashboard
                </div>
            </Link>
            <div className='bg-white border border-gray-300 rounded-xl p-4 sm:p-6 shadow-sm'>
                <div className='flex flex-col lg:flex-row gap-6'>
                    <div className='w-full lg:w-1/3'>
                        {item.image ? (
                            <img src={item.image} alt={item.title} className='h-48 sm:h-64 w-full object-cover rounded-lg' />
                        ) : (
                            <div className='bg-gray-100 h-48 sm:h-64 rounded-lg flex items-center justify-center'>
                                <i className="bi bi-image text-gray-400 text-4xl sm:text-6xl"></i>
                            </div>
                        )}
                    </div>
                    <div className='w-full lg:w-2/3'>
                        <h1 className='text-2xl sm:text-3xl font-bold mb-2'>{item.title}</h1>
                        <p className='text-gray-600 mb-4'>{item.description}</p>
                        <div className='space-y-2'>
                            <p><strong>Category:</strong> Personal Items</p>
                            <p><strong>Location:</strong> {item.location}</p>
                            <p><strong>Date:</strong> {new Date(item.date).toLocaleDateString()}</p>
                            <p><strong>Status:</strong> {item.status}</p>
                        </div>
                        <div className='mt-6 flex flex-col sm:flex-row gap-4'>
                            {claimed ? (
                                <span className='bg-gray-600 text-white py-2 px-4 rounded-lg font-medium'>Claimed</span>
                            ) : (
                                <button className='bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg font-medium' onClick={handleClaim}>
                                    Claim Item
                                </button>
                            )}
                            <button className='bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg font-medium' onClick={handleDelete}>
                                Delete Item
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetails