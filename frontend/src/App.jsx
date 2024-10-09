import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react'; // Import ChakraProvider
import Home from './pages/Home.jsx';
import SchoolDetails from './pages/SchoolDetails.jsx';
import Navbar from './components/Navabr.jsx'; // Corrected typo in Navbar import
import Loader from './components/Loader.jsx'; // Import Loader component

const App = () => {
  // State for loader
  const [loading, setLoading] = useState(true);

  // Simulate loading delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000); // Simulating a 2 seconds loading time
    return () => clearTimeout(timer); // Cleanup on unmount
  }, []);

  return (
    <ChakraProvider>
      <Router>
        {loading ? (
          <Loader /> // Show loader while loading
        ) : (
          <>
            <Navbar />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/schools/:id' element={<SchoolDetails />} />
            </Routes>
          </>
        )}
      </Router>
    </ChakraProvider>
  );
};

export default App;
