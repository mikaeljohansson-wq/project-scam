import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Assuming you have a CSS file for styling the Navbar

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <Link to="/">Blocket Clone</Link>
            </div>
            <ul className="navbar-links">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/listings">Listings</Link>
                </li>
                <li>
                    <Link to="/admin">Admin</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;