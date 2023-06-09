import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import blogs from './BlogData';

const BlogPage = () => {
  return (
    <Container className="blog-page">
      <h1 className="title">Blogs</h1>
      <Row>
        {blogs.map((blog) => (
          <Col md={6} lg={4} key={blog.id}>
            <Link to={`/blog/${blog.id}`}>
              <div className="blog-card">
                <h2 className="card-title">{blog.title}</h2>
                <p className="card-content">{blog.content.split(' ').filter((word, index) => index < 15).join(' ') + '...'}</p>
                <p className="card-author">Author: {blog.author}</p>
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