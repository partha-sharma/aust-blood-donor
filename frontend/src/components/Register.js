// frontend/src/components/Register.js

import React, { useState } from 'react';

const Register = () => {
  // State to hold all form field values
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    bloodGroup: '',
    department: '',
    yearPosition: '',
    currentSemester: 'Fall 2024', // Default value from your Figma
    gender: '',
    address: '',
    phone: '',
  });

  // Separate state for the file input
  const [universityIdPhoto, setUniversityIdPhoto] = useState(null);

  // Destructure for easier access
  const { fullName, email, password, bloodGroup, department, yearPosition, currentSemester, gender, address, phone } = formData;

  // Handles changes for all text/select inputs
  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  // Handles the file input change
  const onFileChange = e => {
    setUniversityIdPhoto(e.target.files[0]);
  };

  // Handles form submission
  const onSubmit = async e => {
    e.preventDefault();

    // We use FormData because we are sending a file
    const registrationData = new FormData();
    registrationData.append('fullName', fullName);
    registrationData.append('email', email);
    registrationData.append('password', password);
    registrationData.append('bloodGroup', bloodGroup);
    registrationData.append('department', department);
    registrationData.append('yearPosition', yearPosition);
    registrationData.append('currentSemester', currentSemester);
    registrationData.append('gender', gender);
    registrationData.append('address', address);
    registrationData.append('phone', phone);
    registrationData.append('universityIdPhoto', universityIdPhoto);

    // --- MOCK SUBMISSION ---
    // For now, we will just log the data to the console to see it.
    console.log("Form submission attempted!");
    for (let [key, value] of registrationData.entries()) {
      console.log(`${key}:`, value);
    }
    alert('Registration form is ready! Check the console (F12) to see the data.');
    // In the next step, we will replace this with an API call.
  };

  // --- STYLING (can be moved to a CSS file) ---
  const styles = {
    container: { maxWidth: '500px', margin: '30px auto', padding: '30px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)', borderRadius: '8px', backgroundColor: '#fff' },
    formGroup: { marginBottom: '20px' },
    label: { display: 'block', marginBottom: '8px', fontWeight: 'bold', color: '#555' },
    input: { width: '100%', padding: '10px', boxSizing: 'border-box', borderRadius: '4px', border: '1px solid #ccc' },
    button: { width: '100%', padding: '12px', backgroundColor: '#58616a', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '16px' },
    header: { textAlign: 'center', marginBottom: '10px' },
    p: { textAlign: 'center', color: '#666', marginTop: '-10px', marginBottom: '30px' }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Register for AUST Blood Donor Platform</h2>
      <p style={styles.p}>Sign up with your @aust.edu email and upload your student/teacher ID for verification</p>
      
      <form onSubmit={onSubmit}>
        <div style={styles.formGroup}>
          <label style={styles.label}>Full Name</label>
          <input style={styles.input} type="text" name="fullName" value={fullName} onChange={onChange} placeholder="Enter your full name" required />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>AUST Email</label>
          <input style={styles.input} type="email" name="email" value={email} onChange={onChange} placeholder="your.name@aust.edu" required />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Password</label>
          <input style={styles.input} type="password" name="password" value={password} onChange={onChange} minLength="6" required />
        </div>
        
        <div style={styles.formGroup}>
          <label style={styles.label}>Blood Group</label>
          <select style={styles.input} name="bloodGroup" value={bloodGroup} onChange={onChange} required>
            <option value="">Select your blood group</option>
            <option value="A+">A+</option><option value="A-">A-</option>
            <option value="B+">B+</option><option value="B-">B-</option>
            <option value="AB+">AB+</option><option value="AB-">AB-</option>
            <option value="O+">O+</option><option value="O-">O-</option>
          </select>
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>Department</label>
          <input style={styles.input} type="text" name="department" value={department} onChange={onChange} placeholder="e.g., CSE, EEE, BBA" required />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>Year</label>
          <input style={styles.input} type="text" name="yearPosition" value={yearPosition} onChange={onChange} placeholder="e.g., 4th Year or Assistant Professor" required />
        </div>
        
        {/* We will add more fields for Gender, Address, Phone as needed later. Let's keep it simple for now. */}

        <div style={styles.formGroup}>
          <label style={styles.label}>University ID Photo</label>
          <input style={styles.input} type="file" name="universityIdPhoto" onChange={onFileChange} required />
          <small>Upload a clear photo of your student/teacher ID card</small>
        </div>

        <button type="submit" style={styles.button}>Submit Registration</button>
      </form>
    </div>
  );
};

export default Register;