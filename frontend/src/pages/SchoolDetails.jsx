import React from 'react';
import { useParams } from 'react-router-dom'; // Assuming you're using react-router-dom for navigation

const SchoolDetails = () => {
  const { id } = useParams();

  // Static demo data for a single school
  const school = {
    _id: id,
    name: "Greenwood High School",
    city: "Bangalore",
    state: "Karnataka",
    fees: 75000,
    categoryRatings: {
      academic: 4.8,
      faculty: 4.7,
      infrastructure: 4.5,
      placement: 4.6,
    },
    reviews: [
      {
        author: "John Doe",
        rating: 5,
        comment: "Great school with excellent facilities and teachers.",
      },
      {
        author: "Jane Smith",
        rating: 4,
        comment: "Good academics but extracurricular activities could be better.",
      },
    ],
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">{school.name}</h1>
      <p>{school.city}, {school.state}</p>
      <p>Fees: ₹{school.fees}/year</p>

      {/* Render reviews */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Reviews</h2>
        {school.reviews.length > 0 ? (
          school.reviews.map((review, index) => (
            <div key={index} className="border-t pt-4 mt-4">
              <p>{review.comment}</p>
              <p>Rating: {review.rating}/5</p>
              <p>By: {review.author}</p>
            </div>
          ))
        ) : (
          <p>No reviews yet.</p>
        )}
      </div>
    </div>
  );
};

export default SchoolDetails;
