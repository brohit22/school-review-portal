import React, { useState } from "react";
import SchoolCard from "../components/SchoolCard";
import backgroundImage from "../../public/Images/thumb-1920-747506.jpg";
import { FaSearch } from "react-icons/fa"; // Importing Font Awesome search icon

const Home = () => {
  // Demo school data
  const [schools] = useState([
    {
      _id: "1",
      name: "Greenwood High",
      state: "Karnataka",
      city: "Bangalore",
      fees: 150000,
    },
    {
      _id: "2",
      name: "Delhi Public School",
      state: "Delhi",
      city: "New Delhi",
      fees: 120000,
    },
    {
      _id: "3",
      name: "St. Xavier's School",
      state: "Maharashtra",
      city: "Mumbai",
      fees: 180000,
    },
    {
      _id: "4",
      name: "Seth Anandram Jaipuria School",
      state: "Uttar Pradesh",
      city: "Lucknow",
      fees: 110000,
    },
    {
      _id: "5",
      name: "The International School",
      state: "Maharashtra",
      city: "Pune",
      fees: 200000,
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [stateFilter, setStateFilter] = useState("all");
  const [cityFilter, setCityFilter] = useState("all");
  const [maxFees, setMaxFees] = useState("");

  const uniqueStates = [...new Set(schools.map((school) => school.state))];
  const uniqueCities = [...new Set(schools.map((school) => school.city))];

  const filteredSchools = schools.filter((school) => {
    const matchesSearchTerm = school.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesState = stateFilter === "all" || school.state === stateFilter;
    const matchesCity = cityFilter === "all" || school.city === cityFilter;
    const matchesFees = maxFees === "" || school.fees <= parseInt(maxFees);
    return matchesSearchTerm && matchesState && matchesCity && matchesFees;
  });

  return (
    <div className="relative overflow-hidden">
      {/* Hero Section with Background Image */}
      <div
        className="relative bg-cover bg-center h-screen"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>{" "}
        {/* Dark overlay */}
        <div className="relative z-10 text-center text-white pt-20">
          <h1 className="text-4xl font-bold mb-4">
            Find Over 25000 Schools in India
          </h1>

          {/* Search Bar */}
          <div className="relative max-w-3xl mx-auto mb-6">
            <input
              type="text"
              placeholder="Search for colleges, exams, courses and more..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="border border-gray-300 p-4 rounded-full w-full"
            />
            {/* Search Button with Icon */}
            <button className="absolute right-0 top-0 mt-0 bg-orange-500 text-white p-5 rounded-full">
              <FaSearch />
            </button>
          </div>

          {/* Filters Section */}
          <div className="flex justify-center gap-4 mb-6">
            <select
              value={stateFilter}
              onChange={(e) => setStateFilter(e.target.value)}
              className="border border-gray-300 p-2 rounded-lg text-gray-700"
            >
              <option value="all">All States</option>
              {uniqueStates.map((state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
            </select>

            <select
              value={cityFilter}
              onChange={(e) => setCityFilter(e.target.value)}
              className="border border-gray-300 p-2 rounded-lg text-gray-700"
            >
              <option value="all">All Cities</option>
              {uniqueCities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>

            <input
              type="number"
              placeholder="Max fees"
              value={maxFees}
              onChange={(e) => setMaxFees(e.target.value)}
              className="border border-gray-300 p-2 rounded-lg text-gray-700"
            />
          </div>
        </div>
        {/* School List */}
        <div className="container mx-auto p-6">
          <div className="flex justify-center items-center">
            {/* Filtered school cards */}
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
        </div>
      </div>

      {/* Boards Section */}
      <div className="flex justify-center py-4 bg-gray-100">
        <div className="flex space-x-4 text-sm">
          <a href="#" className="hover:underline">
            All Boards
          </a>
          <a href="#" className="hover:underline">
            SSC
          </a>
          <a href="#" className="hover:underline">
            ICSE
          </a>
          <a href="#" className="hover:underline">
            CBSE
          </a>
          <a href="#" className="hover:underline">
            State Board
          </a>
          <a href="#" className="hover:underline">
            IB
          </a>
          {/* Add more boards as per your requirement */}
        </div>
      </div>
    </div>
  );
};

export default Home;
