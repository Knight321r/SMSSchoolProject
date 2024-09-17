import React from 'react';
import './Header.css';

const Header = () => {
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="header">
      <div className="logo">
        <h1>[School Name]</h1>
      </div>
      <nav className="nav">
        <ul>
          <li onClick={() => scrollToSection('about')}>About Us</li>
          <li onClick={() => scrollToSection('highlights')}>Why Choose Us?</li>
          <li onClick={() => scrollToSection('activities')}>Activities</li>
          <li onClick={() => scrollToSection('staff')}>Staff</li>
          <li onClick={() => scrollToSection('testimonials')}>Testimonials</li>
        </ul>
      </nav>
      <button className="login-btn">Login</button>
    </header>
  );
};

export default Header;
