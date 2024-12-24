import React from 'react';
import './Navbar.css'

const Navbar = () => {
    return (
        <section className="navbar-container">
            <header className="navbar-content">
                <div className="logo">
                    <h1 className="nav-heading">☕Coffee</h1>
                </div>
                <ul>
                    <li><a href="#home" className="nav-link">Home</a></li>
                    <li><a href="#about" className="nav-link">About</a></li>
                    <li><a href="#menu" className="nav-link">Menu</a></li>
                    <li><a href="#brand" className="nav-link">Brand</a></li>
                    <li><a href="#gallery" className="nav-link">Gallery</a></li>
                    <li><a href="#contact" className="nav-link">Contact</a></li>
                </ul>
            </header>
        </section>
    )
}

export default Navbar