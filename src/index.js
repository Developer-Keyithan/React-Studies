import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './Components/Navbar/Navbar';
import Name from './Components/Name/Name';
import Birthday from './Components/Birthday/Birthday';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar/>
    <Name />
    <Birthday />
  </React.StrictMode>
);

reportWebVitals();
