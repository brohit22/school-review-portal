import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import SchoolDetails from './pages/SchoolDetails';
import Navbar from './components/Navabr.jsx';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/schools/:id" element={<SchoolDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
