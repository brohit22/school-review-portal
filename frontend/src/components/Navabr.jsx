import React from "react";
import { FaHome } from "react-icons/fa"; // Import Home icon from react-icons

const Navbar = () => {
  return (
    <nav className="bg-green-600 text-white py-1 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="p-2 flex items-center">
          <img
            src="../../public/Images/Logo.jpeg" // Corrected the path
            alt="Logo"
            className="p-2 w-20 h-auto"
          />
          <h1 className="p-2 text-xl font-bold">Student Says</h1>
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-4 items-center">
          <li>
            <a href="/" className="hover:underline flex items-center">
              <FaHome className="text-2xl mr-2" />{" "}
              {/* Home Icon with right-side padding */}
            </a>
          </li>
          {/* Add more links here if needed */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
