import React from 'react';
import logo from '../assets/Logo.jpeg';

const Navbar = () => {
  return (
    <nav className='bg-green-600 text-white py-1 shadow-md'>
      <div className='container mx-auto flex justify-between items-center'>
        {/* Logo - Wrapped with anchor tag to redirect to home */}
        <div className='p-2 flex items-center'>
          <a href='/'>
            {' '}
            {/* Link to home page */}
            <img
              src={logo} // Corrected the path
              alt='Logo'
              className='p-2 w-20 h-auto'
            />
          </a>
          <h1 className='p-2 text-xl font-bold'>Student Says</h1>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
