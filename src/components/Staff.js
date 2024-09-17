import React from 'react';
import './Staff.css';

const Staff = () => {
  return (
    <section id="staff" className="staff">
      <h2>Meet Our Staff</h2>
      <div className="staff-members">
        <div className="staff-card">
          <img src="/path/to/principal.jpg" alt="Principal" />
          <h3>Principal</h3>
          <p>Your mom’s message here</p>
        </div>
        <div className="staff-card">
          <img src="/path/to/teacher1.jpg" alt="Teacher 1" />
          <h3>Teacher 1</h3>
        </div>
      </div>
    </section>
  );
}

export default Staff;
