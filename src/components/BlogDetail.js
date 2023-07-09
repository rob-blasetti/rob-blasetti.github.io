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
      <div className="detail-info">
        <span><b>Author:</b> {blog.author}</span>
        <span> | </span>
        <span><b>Source:</b> {blog.source}</span>
        <span> | </span>
        <span><b>Last Updated:</b> {blog.lastUpdated}</span>
      </div>
      {
        paragraphs.map((paragraph, index) => (
          <p key={index} className="detail-content">{paragraph}</p>
        ))
      }
      <Link to="/blog" className="back-button">Back to Blog Page</Link>
    </Container>
  );
};

export default BlogDetail;
