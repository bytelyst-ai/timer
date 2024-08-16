import React from 'react';
import { FaCog, FaSignInAlt, FaBars } from 'react-icons/fa';

const Main = () => {
  return (
    <div className='bg-blue-400 min-h-screen'>
      <header className='text-white p-4 flex justify-between items-center w-full max-w-2xl mx-auto'>
        {/* Left side - Menu button */}
        <button className='flex items-center space-x-2 bg-white bg-opacity-40 rounded px-3 py-1'>
          <FaBars className='text-lg' />
          <span>Menu</span>
        </button>

        {/* Right side - Settings and Sign In buttons */}
        <div className='flex items-center space-x-6'>
          <button className='flex items-center space-x-2 bg-white bg-opacity-40 rounded px-3 py-1'>
            <FaCog className='text-lg' />
            <span>Setting</span>
          </button>

          <button className='flex items-center space-x-2 bg-white bg-opacity-40 rounded px-3 py-1'>
            <FaSignInAlt className='text-lg' />
            <span>Sign In</span>
          </button>
        </div>
      </header>

      {/* Transparent container */}
      <div className='bg-white bg-opacity-40 p-8 mx-auto max-w-lg rounded mt-10 h-80'>
        {/* Content inside transparent container */}
        <h1 className='text-gray-800 text-2xl font-bold'>Transparent Container</h1>
        <p className='text-gray-700'>This container has a semi-transparent background while keeping the text fully opaque.</p>
      </div>

      <div className='p-8'>
        {/* Main content */}
      </div>
    </div>
  );
}

export default Main;
