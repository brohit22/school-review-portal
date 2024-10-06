import React from "react";
import { Link } from "react-router-dom"; // Assuming you are using react-router-dom
import { FaStar } from 'react-icons/fa'; // Import star icon from react-icons

const SchoolCard = ({ school }) => {
  // Check if the school object is defined before accessing its properties
  if (!school) {
    return null; // Render nothing if school data is not available
  }

  // Function to render star icons based on rating
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <FaStar
          key={i}
          className={`text-${i <= rating ? 'yellow-500' : 'gray-300'} inline-block`}
        />
      );
    }
    return stars;
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden z-10">
      <div className="p-6">
        <h2 className="text-xl font-semibold mb-2">{school.name}</h2>
        <p className="text-sm text-gray-600 mb-4">
          {school.city}, {school.state} - ₹{school.fees}/year
        </p>
        <div className="flex items-center mb-2">
          <span className="mr-2">Academic Rating:</span>
          <span>{renderStars(school.categoryRatings?.academic ?? 0)}</span>
        </div>
        <Link to={`/schools/${school._id}`}>
          <button className="bg-blue-600 text-white px-4 py-2 rounded">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SchoolCard;
