import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react"; // Import ChakraProvider
import Home from "./pages/Home.jsx";
import SchoolDetails from "./pages/SchoolDetails.jsx";
import Navbar from "./components/Navabr.jsx"; // Corrected typo in Navbar import

const App = () => {
  return (
    <ChakraProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/schools/:id" element={<SchoolDetails />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
};

export default App;
