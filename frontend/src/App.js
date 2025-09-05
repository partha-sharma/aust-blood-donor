// frontend/src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Import all our components
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import About from './components/About';
import Newsfeed from './components/Newsfeed';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar'; // Import the Navbar

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar /> {/* The Navbar will now appear on every page */}
        <main> {/* Wrap routes in a main tag for better structure */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/about" element={<About />} />
            <Route path="/newsfeed" element={<Newsfeed />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;