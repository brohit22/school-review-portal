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

  // State for search and filters
  const [searchTerm, setSearchTerm] = useState('');
  const [stateFilter, setStateFilter] = useState('all');
  const [cityFilter, setCityFilter] = useState('all');
  const [maxFees, setMaxFees] = useState('');

  // Get unique states and cities from schools data
  const uniqueStates = [...new Set(schools.map((school) => school.state))];
  const uniqueCities = [...new Set(schools.map((school) => school.city))];

  // Filtered schools based on search term and filters
  const filteredSchools = schools.filter((school) => {
    // Filter by school name (search term)
    const matchesSearchTerm = school.name.toLowerCase().includes(searchTerm.toLowerCase());

    // Filter by state
    const matchesState = stateFilter === 'all' || school.state === stateFilter;

    // Filter by city
    const matchesCity = cityFilter === 'all' || school.city === cityFilter;

    // Filter by max fees
    const matchesFees = maxFees === '' || school.fees <= parseInt(maxFees);

    return matchesSearchTerm && matchesState && matchesCity && matchesFees;
  });

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Schools</h1>

      {/* Search and Filters */}
      <div className="mb-6">
        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search by school name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border border-gray-300 p-2 rounded-lg w-full mb-4"
        />

        {/* Filters */}
        <div className="flex flex-wrap gap-4">
          {/* State Filter */}
          <select
            value={stateFilter}
            onChange={(e) => setStateFilter(e.target.value)}
            className="border border-gray-300 p-2 rounded-lg"
          >
            <option value="all">All States</option>
            {uniqueStates.map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </select>

          {/* City Filter */}
          <select
            value={cityFilter}
            onChange={(e) => setCityFilter(e.target.value)}
            className="border border-gray-300 p-2 rounded-lg"
          >
            <option value="all">All Cities</option>
            {uniqueCities.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>

          {/* Fees Filter */}
          <input
            type="number"
            placeholder="Max fees"
            value={maxFees}
            onChange={(e) => setMaxFees(e.target.value)}
            className="border border-gray-300 p-2 rounded-lg"
          />
        </div>
      </div>

      {/* School list */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredSchools.length > 0 ? (
          filteredSchools.map((school) => (
            <SchoolCard key={school._id} school={school} />
          ))
        ) : (
          <p>No schools found matching your criteria.</p>
        )}
      </div>
    </div>
  );
};

export default Home;
