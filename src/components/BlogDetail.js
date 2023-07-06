import React from 'react';
import { Container } from 'react-bootstrap';
import { useParams, Link } from 'react-router-dom';
import blogs from './BlogData';

const BlogDetail = () => {
  const { id } = useParams();
  const blog = blogs.find((blog) => blog.id === parseInt(id));

  if (!blog) return <p>Blog not found</p>;

  return (
    <Container className="blog-detail">
      <h2>{blog.title}</h2>
      <p className="author">Author: {blog.author}</p>
      <p className="source">Source: {blog.source}</p>
      <p>{blog.content}</p>
      <Link to="/blog" className="back-button">
        <button type="button">Back to Blog Page</button>
      </Link>
    </Container>
  );
};

export default BlogDetail;
