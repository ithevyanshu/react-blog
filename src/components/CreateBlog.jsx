import React, { useState } from "react";
import { addBlog } from "../actions/BlogActions";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const CreateBlog = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const blogs = useSelector((state) => state.blogs.blogs);

  const nextId = blogs.length + 1;

  const [formData, setFormData] = useState({
    id: nextId,
    title: "",
    category: "",
    description: "",
    like: 0,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addBlog(formData));
    navigate("/");
  };

  return (
    <form className="blogform" onSubmit={handleSubmit}>
      <Link to={`/`}>← Back</Link>
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
        Submit
      </button>
    </form>
  );
};

export default CreateBlog;
