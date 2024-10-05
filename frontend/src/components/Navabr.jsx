import { px } from 'framer-motion';
import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between">
      <div className="flex justify-center mb-6">
        <img src="" alt="Logo" className="w-32 h-auto" />
      </div>
        <h1 className="text-xl font-bold">Student Says</h1>
        <ul className="flex space-x-4">
          <li><a href="/" className="hover:underline">Home</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
