import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'; // Assuming shared styles

function Landing() {
  return (
    <div className="landing">
      <h1>Welcome to Gabriel Devaraj's Site</h1>
      <div className="button-container">
        <Link to="/portfolio" className="landing-button">
          Portfolio
        </Link>
        <Link to="/blogs" className="landing-button">
          Blogs
        </Link>
      </div>
    </div>
  );
}

export default Landing;