import React, { useState } from 'react';
import SchoolCard from '../components/SchoolCard'; // Assuming you have this component

const Home = () => {
  // Static demo data for schools
  const [schools] = useState([
    {
      _id: "1",
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
    },
    {
      _id: "2",
      name: "Springfield International School",
      city: "Mumbai",
      state: "Maharashtra",
      fees: 90000,
      categoryRatings: {
        academic: 4.2,
        faculty: 4.0,
        infrastructure: 3.8,
        placement: 4.0,
      },
      reviews: [
        {
          author: "Mark Johnson",
          rating: 3,
          comment: "Decent school but the fees are too high for the facilities provided.",
        },
      ],
    },
    {
      _id: "3",
      name: "Sunnydale Public School",
      city: "Chennai",
      state: "Tamil Nadu",
      fees: 65000,
      categoryRatings: {
        academic: 4.6,
        faculty: 4.4,
        infrastructure: 4.3,
        placement: 4.5,
      },
      reviews: [
        {
          author: "Alice Williams",
          rating: 5,
          comment: "Great experience! The teachers are very helpful and supportive.",
        },
      ],
    },
  ]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Schools</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {schools.map((school) => (
          <SchoolCard key={school._id} school={school} />
        ))}
      </div>
    </div>
  );
};

export default Home;
