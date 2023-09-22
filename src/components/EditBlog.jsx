import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { updateBlog } from "../actions/BlogActions";
import { useDispatch, useSelector } from "react-redux";

const EditBlog = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const selectedBlog = useSelector((state) => state.blogs.blogs.find((blog) => blog.id === Number(id)));

  const [formData, setFormData] = useState({
    id: Number(id),
    title: "",
    category: "",
    description: "",
    like: selectedBlog.likes,
  });

  useEffect(() => {
    if (selectedBlog) {
      setFormData({
        title: selectedBlog.title,
        category: selectedBlog.category,
        description: selectedBlog.description,
      });
    }
  }, [id, selectedBlog]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(updateBlog( id, formData ));
    navigate(`/blog/${id}`);
  };

  return (
    <form className="blogform" onSubmit={handleUpdate}>
      <Link to={`/blog/${id}`}>← Back</Link>

      <div className="blog-div">
        <label>Title:</label>
        <input
          type="text"
          name="title"
          className="input"
          value={formData.title}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="blog-div">
        <label>Category:</label>
        <input
          type="text"
          name="category"
          className="input"
          value={formData.category}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="blog-div">
        <label>Description:</label>
        <textarea
          name="description"
          className="input"
          value={formData.description}
          onChange={handleInputChange}
          required
        />
      </div>
      <button className="submit" type="submit">
        Update Blog
      </button>
    </form>
  );
};

export default EditBlog;
