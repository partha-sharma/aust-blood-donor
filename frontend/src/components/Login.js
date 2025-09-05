// frontend/src/components/Login.js

import React, { useState } from 'react';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    // For now, we'll just log the data to the console
    console.log('Login attempt with:', formData);
    alert('Login UI is ready! Check the console (F12) for the data.');
  };

  // Using similar styles to the Register page for consistency
  const styles = {
    container: { maxWidth: '400px', margin: '50px auto', padding: '30px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)', borderRadius: '8px', backgroundColor: '#fff' },
    formGroup: { marginBottom: '20px' },
    label: { display: 'block', marginBottom: '8px', fontWeight: 'bold', color: '#555' },
    input: { width: '100%', padding: '10px', boxSizing: 'border-box', borderRadius: '4px', border: '1px solid #ccc' },
    button: { width: '100%', padding: '12px', backgroundColor: '#333', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '16px' },
    header: { textAlign: 'center', marginBottom: '10px' },
    p: { textAlign: 'center', color: '#666', marginTop: '-10px', marginBottom: '30px' }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Welcome Back</h2>
      <p style={styles.p}>Login to AUST Blood Donor Platform</p>

      <form onSubmit={onSubmit}>
        <div style={styles.formGroup}>
          <label style={styles.label}>AUST Email</label>
          <input
            style={styles.input}
            type="email"
            name="email"
            value={email}
            onChange={onChange}
            required
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Password</label>
          <input
            style={styles.input}
            type="password"
            name="password"
            value={password}
            onChange={onChange}
            required
          />
        </div>
        <button type="submit" style={styles.button}>Login</button>
      </form>
    </div>
  );
};

export default Login;