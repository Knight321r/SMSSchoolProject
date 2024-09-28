import React from 'react';
import './Header.css';
import { Navigate, useNavigate } from 'react-router-dom';

const Header = () => {

  const navigate = useNavigate();

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  const handlelogin = () => {
    navigate('/login')
  }

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
      <button className="login-btn" onClick={handlelogin}>Login</button>
    </header>
  );
};

export default Header;
