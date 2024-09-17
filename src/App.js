import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Highlights from './components/Highlights';
import Activities from './components/Activities';
import Staff from './components/Staff';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Highlights />
      <Activities />
      <Staff />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
