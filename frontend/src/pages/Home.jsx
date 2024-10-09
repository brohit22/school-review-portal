import React, { useState } from 'react';
import SchoolCard from '../components/SchoolCard';
import backgroundImage from '../../public/Images/thumb-1920-747506.jpg';
import { FaSearch } from 'react-icons/fa';

const Home = () => {
  const [schools, setSchools] = useState([
    {
      _id: '1',
      name: 'Greenwood High',
      state: 'Karnataka',
      city: 'Bangalore',
      fees: 150000,
      categoryRatings: { academic: 4 },
    },
    {
      _id: '2',
      name: 'Delhi Public School',
      state: 'Delhi',
      city: 'New Delhi',
      fees: 120000,
      categoryRatings: { academic: 5 },
    },
    {
      _id: '3',
      name: "St. Xavier's School",
      state: 'Maharashtra',
      city: 'Mumbai',
      fees: 180000,
      categoryRatings: { academic: 3 },
    },
    {
      _id: '4',
      name: 'Seth Anandram Jaipuria School',
      state: 'Uttar Pradesh',
      city: 'Lucknow',
      fees: 110000,
      categoryRatings: { academic: 4 },
    },
    {
      _id: '5',
      name: 'The International School',
      state: 'Maharashtra',
      city: 'Pune',
      fees: 200000,
      categoryRatings: { academic: 5 },
    },
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [stateFilter, setStateFilter] = useState('all');
  const [cityFilter, setCityFilter] = useState('all');
  const [maxFees, setMaxFees] = useState('');
  const [suggestions, setSuggestions] = useState([]); // State for suggestions

  const uniqueStates = [...new Set(schools.map((school) => school.state))];
  const uniqueCities = [...new Set(schools.map((school) => school.city))];

  // Handle search term change
  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    // Update suggestions based on the search term
    if (value) {
      const filteredSuggestions = schools.filter((school) =>
        school.name.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  // Function to add a new school
  const addSchool = () => {
    const newSchoolName = window.prompt(
      "Enter the name of the school you'd like to add:"
    );
    if (newSchoolName) {
      const newSchool = {
        _id: (schools.length + 1).toString(), // Generate a new ID
        name: newSchoolName,
        state: 'Unknown', // Default values, you can enhance this further
        city: 'Unknown',
        fees: 0,
        categoryRatings: { academic: 0 },
      };
      setSchools((prevSchools) => [...prevSchools, newSchool]);
      setSearchTerm(newSchoolName); // Set search term to the newly added school
      setSuggestions([]); // Clear suggestions
    }
  };

  const filteredSchools = schools.filter((school) => {
    const matchesSearchTerm = school.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesState = stateFilter === 'all' || school.state === stateFilter;
    const matchesCity = cityFilter === 'all' || school.city === cityFilter;
    const matchesFees = maxFees === '' || school.fees <= parseInt(maxFees);
    return matchesSearchTerm && matchesState && matchesCity && matchesFees;
  });

  return (
    <div className='flex flex-col h-screen'>
      <div
        className='relative flex-grow bg-cover bg-center'
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className='absolute inset-0 bg-black bg-opacity-50'></div>
        <div className='relative z-10 text-center text-white pt-5'>
          <h1 className='text-4xl font-bold mb-4'>
            Find Over 25000 Schools in India
          </h1>

          {/* Search Bar */}
          <div className='relative max-w-3xl mx-auto mb-6'>
            <input
              type='text'
              placeholder='Search for colleges, exams, courses and more...'
              value={searchTerm}
              onChange={handleSearchChange}
              className={`border border-gray-300 p-4 rounded-full w-full ${
                searchTerm ? 'bg-yellow-100' : 'bg-white'
              }`} // Change background color based on search text
            />
            <button className='absolute right-0 top-0 mt-0 bg-orange-500 text-white p-5 rounded-full'>
              <FaSearch />
            </button>

            {/* Suggestions List */}
            {suggestions.length > 0 && (
              <ul className='absolute z-10 w-full bg-gradient-to-b from-white to-transparent border border-gray-300 rounded-lg mt-1'>
                {suggestions.map((school) => (
                  <li
                    key={school._id}
                    className='p-2 hover:bg-gray-200 cursor-pointer'
                    onClick={() => setSearchTerm(school.name)} // Set selected school name on click
                  >
                    {school.name}
                  </li>
                ))}
                <li
                  className='p-2 hover:bg-gray-200 cursor-pointer'
                  onClick={addSchool} // Add school option
                >
                  Add School
                </li>
              </ul>
            )}
          </div>

          {/* Filters Section */}
          <div className='flex justify-center gap-4 mb-6'>
            <select
              value={stateFilter}
              onChange={(e) => setStateFilter(e.target.value)}
              className='border border-gray-300 p-2 rounded-lg text-gray-700'
            >
              <option value='all'>All States</option>
              {uniqueStates.map((state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
            </select>

            <select
              value={cityFilter}
              onChange={(e) => setCityFilter(e.target.value)}
              className='border border-gray-300 p-2 rounded-lg text-gray-700'
            >
              <option value='all'>All Cities</option>
              {uniqueCities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>

            <input
              type='number'
              placeholder='Max fees'
              value={maxFees}
              onChange={(e) => setMaxFees(e.target.value)}
              className='border border-gray-300 p-2 rounded-lg text-gray-700'
            />
          </div>
        </div>

        {/* School List */}
        <div className='container mx-auto mb-2'>
          <div className='flex justify-center items-center'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
              {filteredSchools.length > 0 ? (
                filteredSchools.map((school) => (
                  <SchoolCard key={school._id} school={school} />
                ))
              ) : (
                <p>No schools found matching your criteria.</p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Boards Section */}
      <div className='bg-gray-100 py-2'>
        <div className='flex justify-center py-2'>
          <div className='flex space-x-4 text-sm'>
            <a href='#' className='hover:underline'>
              All Boards
            </a>
            <a href='#' className='hover:underline'>
              SSC
            </a>
            <a href='#' className='hover:underline'>
              ICSE
            </a>
            <a href='#' className='hover:underline'>
              CBSE
            </a>
            <a href='#' className='hover:underline'>
              State Board
            </a>
            <a href='#' className='hover:underline'>
              IB
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
