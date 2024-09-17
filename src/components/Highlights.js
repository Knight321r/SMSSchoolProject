import React from 'react';
import './Highlights.css';

const Highlights = () => {
  return (
    <section id="highlights" className="highlights">
      <h2>Why Choose Us?</h2>
      <div className="highlight-cards">
        <div className="card">
          <img src="/path/to/icon1.png" alt="Experienced Teachers" />
          <h3>Experienced Teachers</h3>
        </div>
        <div className="card">
          <img src="/path/to/icon2.png" alt="Fun Learning" />
          <h3>Fun Learning Environment</h3>
        </div>
        <div className="card">
          <img src="/path/to/icon3.png" alt="Interactive Activities" />
          <h3>Interactive Activities</h3>
        </div>
        <div className="card">
          <img src="/path/to/icon4.png" alt="Safe Classrooms" />
          <h3>Safe and Creative Classrooms</h3>
        </div>
      </div>
    </section>
  );
}

export default Highlights;
