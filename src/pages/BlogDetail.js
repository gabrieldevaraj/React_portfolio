import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../App.css';

function BlogDetail() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const storedBlogs = JSON.parse(localStorage.getItem('blogs') || '[]');
    const foundBlog = storedBlogs.find(b => b.id === parseInt(id));
    setBlog(foundBlog);
  }, [id]);

  if (!blog) return <div>Loading...</div>;

  return (
    <div className="blog-detail">
      <button onClick={() => window.history.back()} className="landing-button">Back</button>
      <h1>{blog.title}</h1>
      <p>{blog.date}</p>
      <div dangerouslySetInnerHTML={{ __html: blog.content }} />
      {blog.images.map((img, idx) => <img key={idx} src={img} alt="" />)}
      <p>Tags: {blog.tags.join(', ')}</p>
    </div>
  );
}

export default BlogDetail;