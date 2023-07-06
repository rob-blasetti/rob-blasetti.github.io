import React from 'react';

const Blog = ({ match }) => {
  const { id } = match.params;

  const blogs = [
    { id: 1, title: "Blog 1", content: "Content for blog 1" },
    { id: 2, title: "Blog 2", content: "Content for blog 2" },
    // Add more blogs here
  ];

  const blog = blogs.find(blog => blog.id === Number(id));

  if (!blog) {
    return <p>Blog not found</p>;
  }

  return (
    <div>
      <h2>{blog.title}</h2>
      <p>{blog.content}</p>
      <Link to="/blog">Back to Blog Page</Link>
    </div>
  );
}

export default Blog;
