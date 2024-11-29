import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div>
        <div className="header-container">
        {/* logo */}
            <div className="logo">
                <h1>Portfolio</h1>
            </div>
            {/* navbar list */}
            <div className="nav_list">
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#career">Career</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
              
            {/* header-btn */}
            <div className="book-btn">
              <button>Get In Touch</button>
            </div>
            
            </div>
        </div>
    </div>
  )
}

export default Header;