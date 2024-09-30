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
import Login from './components/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './components/Register';
import AttendanceFilling from './components/AttendanceFilling';

function App() {
  return (
    <div className="App">
      <Router>
      <main className="content">
      <Routes>
        <Route path='/' element={
            <div>
              <Header />
              <Hero />
              <About />
              <Highlights />
              <Activities />
              <Staff />
              <Testimonials />
              <Footer />
            </div>
        }/>
        <Route path='/login' element={<Login />}/>
        <Route path='/register' element={<Register />}/>
      </Routes>
      </main>
    </Router>
    </div>
  );
}

export default App;
 