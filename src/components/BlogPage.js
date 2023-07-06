import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const BlogPage = () => {
  const blogs = [
    { id: 1, title: "Blog 1", content: "Content for blog 1", author: "Author 1", source: "Source 1" },
    { id: 2, title: "Blog 2", content: "Content for blog 2", author: "Author 2", source: "Source 2" },
    // Add more blogs here
  ];

  return (
    <Container>
      <h1 className="blog-page title">Blog Page</h1>
      <Row>
        {blogs.map((blog) => (
          <Col md={6} lg={4} key={blog.id}>
            <Link to={`/blog/${blog.id}`} className="blog-page">
              <div className="blog-card">
                <h2>{blog.title}</h2>
                <p>{blog.content}</p>
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
