import React from 'react';
import { Container } from 'react-bootstrap';
import { useParams, Link } from 'react-router-dom';

const BlogDetail = () => {
  const { id } = useParams();

  const blogs = [
    { id: 1, title: "Blog 1", content: "Content for blog 1", author: "Author 1", source: "Source 1" },
    { id: 2, title: "Blog 2", content: "Content for blog 2", author: "Author 2", source: "Source 2" },
    // Add more blogs here
  ];

  const blog = blogs.find((blog) => blog.id === parseInt(id));

  if (!blog) {
    return <p>Blog not found</p>;
  }

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
