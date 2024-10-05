import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import axios from 'axios';

// Set the base URL for Axios (adjust the port if your backend is running on a different one)
axios.defaults.baseURL = 'http://localhost:5000';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
