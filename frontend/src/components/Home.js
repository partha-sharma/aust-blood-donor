import React from 'react';

const Home = () => {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>🩸 AUST Blood Donor Platform</h1>
      <p>Connecting AUST community members to save lives</p>
      <div style={{ marginTop: '20px' }}>
        <a href="/login" style={{ margin: '10px', padding: '10px 20px', backgroundColor: '#dc3545', color: 'white', textDecoration: 'none', borderRadius: '5px' }}>
          Login
        </a>
        <a href="/register" style={{ margin: '10px', padding: '10px 20px', backgroundColor: '#28a745', color: 'white', textDecoration: 'none', borderRadius: '5px' }}>
          Register
        </a>
      </div>
    </div>
  );
};

export default Home;