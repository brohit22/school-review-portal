// src/components/Loader.jsx
import React from 'react';
import logo from '../assets/Logo.jpeg';
import './Loader.css'; // Import the CSS file

const Loader = () => {
  return (
    <div className='flex justify-center items-center h-screen bg-gray-100'>
      <div className='flex flex-col items-center'>
        <img
          src={logo}
          alt='Student Says Logo'
          className='animate-bounce w-32 h-32'
        />
        <p className='mt-4 text-lg text-gray-700 typing-animation'>
          Student Says...
        </p>
      </div>
    </div>
  );
};

export default Loader;
