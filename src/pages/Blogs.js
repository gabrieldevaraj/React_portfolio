import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../data';
import '../App.css';

function Blogs() {
  const [isGridView, setIsGridView] = useState(true);
  const blogPosts = projects.filter((project) => project.showInBlog);

  return (
    <div className="blogs-page" id="scroll">
      <div className="blogs-header">
        <div>
          <h1>Blog Posts</h1>
          <p className="blog-subtitle">A refreshing take on project stories, curated for clean reading.</p>
        </div>
        <div className="view-toggle">
          <button
            type="button"
            className={`toggle-btn ${isGridView ? 'active' : ''}`}
            onClick={() => setIsGridView(true)}
          >
            Grid View
          </button>
          <button
            type="button"
            className={`toggle-btn ${!isGridView ? 'active' : ''}`}
            onClick={() => setIsGridView(false)}
          >
            List View
          </button>
        </div>
      </div>

      <div className={`blogs-list ${isGridView ? 'grid-view' : 'list-view'}`}>
        {blogPosts.map((project) => (
          <Link
            key={project.id}
            to={`/projects/${project.id}`}
            state={{ from: '/blogs' }}
            className="blog-card-link"
          >
            <article className="blog-card">
              {isGridView ? (
                <div className="blog-card-content">
                  <h2>{project.title}</h2>
                  <p className="blog-meta">Created: {project.date}</p>
                  <p>{project.summary}</p>
                </div>
              ) : (
                <div className="blog-card-horizontal">
                  <div className="blog-thumb" />
                  <div className="blog-card-content">
                    <h2>{project.title}</h2>
                    <p className="blog-meta">Created: {project.date}</p>
                    <p>{project.summary}</p>
                  </div>
                </div>
              )}
            </article>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Blogs;
