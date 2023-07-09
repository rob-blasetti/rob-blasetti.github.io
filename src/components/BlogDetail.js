import React from 'react';
import { Container } from 'react-bootstrap';
import { useParams, Link } from 'react-router-dom';
import blogs from './BlogData';

const BlogDetail = () => {
  const { id } = useParams();
  const blog = blogs.find((blog) => blog.id === parseInt(id));

  if (!blog) return <p>Blog not found</p>;

  // Split the content into an array of paragraphs
  const paragraphs = blog.content.split(/\s*\n\s*\n\s*/);

  return (
    <Container className="blog-detail">
      <h2 className="detail-title">{blog.title}</h2>
      <p className="detail-author">Author: {blog.author}</p>
      <p className="detail-source">Source: {blog.source}</p>
      <p className="detail-last-updated">Last Updated: {blog.lastUpdated}</p>
      {
        paragraphs.map((paragraph, index) => (
          <p key={index} className="detail-content">{paragraph}</p>
        ))
      }
      <Link to="/blog" className="back-button">
        <div>Back to Blog Page</div>
      </Link>
    </Container>
  );
};

export default BlogDetail;
