import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you are using react-router-dom

const SchoolCard = ({ school }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-6">
        <h2 className="text-xl font-semibold mb-2">{school.name}</h2>
        <p className="text-sm text-gray-600 mb-4">
          {school.city}, {school.state} - ₹{school.fees}/year
        </p>
        <div className="flex items-center mb-2">
          <span>Academic Rating: {school.categoryRatings.academic}/5</span>
        </div>
        <Link to={`/schools/${school._id}`}>
          <button className="bg-blue-600 text-white px-4 py-2 rounded">View Details</button>
        </Link>
      </div>
    </div>
  );
};

export default SchoolCard;
