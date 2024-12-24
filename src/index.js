import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import About from './Components/About/About';
import Menu from './Components/Menu/Menu';
import Brand from './Components/Brand/Brand';
import Gallery from './Components/Gallery/Gallery';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import App from "./Landingpage";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <Router>
      <Navbar/>
      <Routes>
        <Route path="/Home" element={<App />} />
        <Route path="/Hero" element={<Hero />} /> {/* Route for the homepage */}
        <Route path="/About" element={<About />} /> {/* Route for the homepage */}
        <Route path="/Menu" element={<Menu />} /> {/* Route for the homepage */}
        <Route path="/Brand" element={<Brand />} /> {/* Route for the homepage */}
        <Route path="/Gallery" element={<Gallery />} /> {/* Route for the contact page */}
        <Route path="/Contact" element={<Contact />} /> {/* Route for the contact page */}
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);

