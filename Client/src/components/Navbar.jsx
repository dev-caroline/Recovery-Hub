import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
    return (
        <div className='border py-3 px-10 border-gray-300 flex justify-between'>
            <h1 className='text-3xl font-bold flex'>Recovery Hub <p className='text-red-600 '>.</p></h1>
            <Link to='/report_item' >
                <button className='bg-red-600 hover:bg-red-700 text-white py-3 px-5 rounded-xl font-medium'>
                    <i className="bi bi-plus-lg me-2"></i>
                      Report Item</button>
            </Link>
        </div>
    )
}

export default Navbar