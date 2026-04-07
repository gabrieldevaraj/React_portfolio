import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, useSearchParams } from 'react-router-dom';
import '../App.css';

function BlogCreate() {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState({ title: '', content: '', images: [], tags: [] });

  useEffect(() => {
    if (id) {
      const storedBlogs = JSON.parse(localStorage.getItem('blogs') || '[]');
      const foundBlog = storedBlogs.find(b => b.id === parseInt(id));
      if (foundBlog) setBlog(foundBlog);
    } else {
      const tag = searchParams.get('tag');
      if (tag) setBlog(prev => ({ ...prev, tags: [tag] }));
    }
  }, [id, searchParams]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedBlogs = JSON.parse(localStorage.getItem('blogs') || '[]');
    if (id) {
      const updatedBlogs = storedBlogs.map(b => b.id === parseInt(id) ? { ...blog, date: new Date().toISOString() } : b);
      localStorage.setItem('blogs', JSON.stringify(updatedBlogs));
    } else {
      const newBlog = { ...blog, id: Date.now(), date: new Date().toISOString() };
      storedBlogs.push(newBlog);
      localStorage.setItem('blogs', JSON.stringify(storedBlogs));
    }
    navigate('/blogs');
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    const images = files.map(file => URL.createObjectURL(file));
    setBlog({ ...blog, images });
  };

  return (
    <div className="blog-create">
      <h1>{id ? 'Edit Blog' : 'Create Blog'}</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Title" value={blog.title} onChange={e => setBlog({ ...blog, title: e.target.value })} required />
        <textarea placeholder="Content" value={blog.content} onChange={e => setBlog({ ...blog, content: e.target.value })} required />
        <input type="file" multiple onChange={handleImageUpload} />
        <input type="text" placeholder="Tags (comma separated)" value={blog.tags.join(', ')} onChange={e => setBlog({ ...blog, tags: e.target.value.split(', ') })} />
        <button type="submit" className="landing-button">Save</button>
      </form>
      <button onClick={() => navigate('/blogs')} className="landing-button">Cancel</button>
    </div>
  );
}

export default BlogCreate;