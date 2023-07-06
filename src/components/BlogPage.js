import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import blogs from './BlogData';

const BlogPage = () => {

  return (
    <Container>
      <h1 className="blog-page title">Blog Page</h1>
      <Row>
        {blogs.map((blog) => (
          <Col md={6} lg={4} key={blog.id}>
            <Link to={`/blog/${blog.id}`} className="blog-page">
              <div className="blog-card">
                <h2>{blog.title}</h2>
                <p>{blog.content.split(' ').filter((word, index) => index < 15).join(' ') + '...'}</p>
                <p className="author">Author: {blog.author}</p>
                <p className="source">Source: {blog.source}</p>
              </div>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default BlogPage;
