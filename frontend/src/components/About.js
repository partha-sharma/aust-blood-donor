// frontend/src/components/About.js

import React from 'react';

const About = () => {
  // Basic inline styles. You can expand these in your CSS files.
  const pageStyle = {
    padding: '20px 40px',
    maxWidth: '900px',
    margin: '0 auto',
    textAlign: 'left',
    lineHeight: '1.6'
  };
  const sectionStyle = {
    marginBottom: '30px'
  };
  const h2Style = {
    borderBottom: '2px solid #eee',
    paddingBottom: '10px'
  };
  const statsContainer = {
    display: 'flex',
    justifyContent: 'space-around',
    textAlign: 'center',
    padding: '20px',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px'
  };
  const statBox = {
    padding: '10px 20px',
  };

  return (
    <div style={pageStyle}>
      <div style={sectionStyle}>
        <h2 style={h2Style}>About AUST Blood Donor Platform</h2>
        <p>
          The AUST Blood Donor Platform is a secure, campus-only initiative designed to connect verified AUST students and faculty members who need blood with eligible donors within our university community.
        </p>
      </div>

      <div style={sectionStyle}>
        <h3 style={{color: '#d9534f'}}>Our Mission</h3>
        <p>
          To create a trusted network where members of the AUST community can quickly find blood donors in times of medical emergencies, fostering a spirit of mutual aid and solidarity within our campus.
        </p>
      </div>

      <div style={sectionStyle}>
        <h3 style={{color: '#d9534f'}}>How It Works</h3>
        <ul>
          <li>Only verified @aust.edu email holders can participate.</li>
          <li>Post blood requests with required details and location.</li>
          <li>Eligible donors receive notifications for matching blood groups.</li>
          <li>Donors can offer to donate directly or arrange through contacts.</li>
          <li>All connections are facilitated through the platform's mail system.</li>
          <li>Posts can be reposted after 36 hours if no response is received.</li>
        </ul>
      </div>

      <div style={sectionStyle}>
        <h3 style={{color: '#d9534f'}}>Safety & Privacy</h3>
        <ul>
          <li>All users must be verified by admin with valid AUST ID.</li>
          <li>Contact details are shared only after donor consent.</li>
          <li>Platform facilitates connections - we don't store blood.</li>
          <li>Always consult medical professionals for urgent needs.</li>
        </ul>
      </div>

      <div style={sectionStyle}>
        <h2 style={h2Style}>Platform Statistics</h2>
        <div style={statsContainer}>
            <div style={statBox}>
                <h1 style={{color: '#d9534f'}}>156</h1>
                <p>Lives Helped</p>
            </div>
            <div style={statBox}>
                <h1 style={{color: '#5cb85c'}}>89</h1>
                <p>Active Donors</p>
            </div>
            <div style={statBox}>
                <h1 style={{color: '#f0ad4e'}}>234</h1>
                <p>Successful Connections</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default About;