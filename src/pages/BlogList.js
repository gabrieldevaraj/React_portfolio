import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function BlogList() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const storedBlogs = JSON.parse(localStorage.getItem('blogs') || '[]');
    setBlogs(storedBlogs);
  }, []);

  return (
    <div className="blog-list">
      <h1>My Blogs</h1>
      <Link to="/blogs/create">
        <button className="landing-button">Create New Blog</button>
      </Link>
      <Link to="/blogs/manage">
        <button className="landing-button">Manage Blogs</button>
      </Link>
      <div className="blogs">
        {blogs.map(blog => (
          <div key={blog.id} className="blog-item">
            <h2>{blog.title}</h2>
            <p>{blog.date}</p>
            <Link to={`/blogs/${blog.id}`}>Read More</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogList;