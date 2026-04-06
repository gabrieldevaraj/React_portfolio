import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../App.css';

function BlogManage() {
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedBlogs = JSON.parse(localStorage.getItem('blogs') || '[]');
    setBlogs(storedBlogs);
  }, []);

  const deleteBlog = (id) => {
    const updatedBlogs = blogs.filter(b => b.id !== id);
    setBlogs(updatedBlogs);
    localStorage.setItem('blogs', JSON.stringify(updatedBlogs));
  };

  return (
    <div className="blog-manage">
      <h1>Manage Blogs</h1>
      <Link to="/blogs/create">
        <button className="landing-button">Add New Blog</button>
      </Link>
      <div className="blogs">
        {blogs.map(blog => (
          <div key={blog.id} className="blog-item">
            <h2>{blog.title}</h2>
            <button onClick={() => navigate(`/blogs/create/${blog.id}`)} className="landing-button">Edit</button>
            <button onClick={() => deleteBlog(blog.id)} className="landing-button">Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogManage;