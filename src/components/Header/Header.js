import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <nav className='header'>
            <div>
                <h1>Programming Quiz</h1>
            </div>
            <div>
                <Link to="/">Home</Link>
                <Link to="/statistics">Statistics</Link>
                <Link to="/Blog">Blog</Link>
            </div>
        </nav>
    );
};

export default Header;