import React from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../data';
import '../App.css';

function Blogs() {
  return (
    <div className="blogs-page">
      <h1>My Blogs</h1>
      <div className="blogs-list">
        {projects.filter(project => project.showInBlog).map(project => (
          <div key={project.id} className="blog-item">
            <h2>{project.title}</h2>
            <p>Created: {project.date}</p>
            <Link to={`/projects/${project.id}`}>Read More</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blogs;