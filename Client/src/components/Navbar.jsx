import { Link } from 'react-router-dom';

const Navbar = () => (
  <div className='border py-2 px-4 sm:px-10 border-gray-300 flex justify-between items-center'>
    <h1 className='text-lg sm:text-2xl font-bold'>Recovery Hub<span className='text-green-600'>.</span></h1>
    <Link to='/report_item'>
      <button className='bg-green-600 hover:bg-green-700 text-white py-2 px-3 sm:py-3 sm:px-5 rounded-xl font-medium text-sm sm:text-base'>
        <i className="bi bi-plus-lg me-2"></i>
        Report Item
      </button>
    </Link>
  </div>
);

export default Navbar;