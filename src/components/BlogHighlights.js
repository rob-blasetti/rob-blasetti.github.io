import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import blogs from './BlogData';

const BlogHighlights = () => {
  return (
    <Container className="blog-highlights">
      <h1 className="title">Blog Highlights</h1>
      <Row>
        {blogs.slice(0, 3).map((blog) => (
          <Col md={6} lg={4} key={blog.id}>
            <Link to={`/blog/${blog.id}`}>
              <div className="blog-card">
                <h2 className="card-title">{blog.title}</h2>
                <p className="card-content">{blog.content.split(' ').filter((word, index) => index < 35).join(' ') + '...'}</p>
                <p className="card-author">Author: {blog.author}</p>
                <p className="source">Source: {blog.source}</p>
              </div>
            </Link>
          </Col>
        ))}
      </Row>
      <Link to="/blog" className="submit-button">
        View All Blogs
      </Link>
    </Container>
  );
}

export default BlogHighlights;
