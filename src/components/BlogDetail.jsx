import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { likeBlog, deleteBlog } from '../actions/BlogActions';

const BlogDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const blog = useSelector((state) => state.blogs.blogs.find(blog => blog.id === Number(id)));

  const handleLike = () => {
    dispatch(likeBlog(id));
    navigate(`/blog/${id}`);
  };

  const handleDelete = () => {
    dispatch(deleteBlog(id));
    navigate(`/`);
  };

  if (!blog) {
    return <div>Loading...</div>;
  }

  return (
    <div className="blogform">
      <Link to={`/`}>← Back</Link>
      <h2>{blog.title}</h2>
      <div className="second-heading">
        <div className="blog-category">
          <span className="material-symbols-outlined">label</span>
          {blog.category}
        </div>
        <div>
          <button onClick={handleLike} className="blog-action">
            <span>{blog.likes} </span> Like
          </button>
          <Link to={`/edit/${id}`} className="blog-action">
            Edit 
          </Link>
          <button onClick={handleDelete} className="blog-action">
            Delete 
          </button>
        </div>
      </div>
      <p>{blog.description}</p>
    </div>
  );
};

export default BlogDetail;
