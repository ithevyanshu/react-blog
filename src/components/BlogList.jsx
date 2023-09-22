import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const BlogList = () => {
  const blogs = useSelector((state) => state.blogs.blogs);
  return (
    <div className="home">
      {blogs.map((blog) => (
        <div key={blog.id} className="blog-block">
          <div className="blog-head">
            <Link className="blog-title" to={`/blog/${blog.id}`}>
              {blog.title}
            </Link>
            <span className="blog-category">
              <span className="material-symbols-outlined">label</span>
              {blog.category}
            </span>
          </div>
          <p className="blog-description">
            {blog.description.substring(0, 100)}...
            <Link to={`/blog/${blog.id}`}>read more</Link>
          </p>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
