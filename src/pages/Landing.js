import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'; // Assuming shared styles

function Landing() {
  return (
    <div className="landing">
      <h1>Welcome to Gabriel Devaraj's Site</h1>
      <div className="button-container">
        <Link to="/portfolio">
          <button className="landing-button">Portfolio</button>
        </Link>
        <Link to="/blogs">
          <button className="landing-button">Blog</button>
        </Link>
      </div>
    </div>
  );
}

export default Landing;