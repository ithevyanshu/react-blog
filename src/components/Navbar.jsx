import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/create-blog">New Post</Link>
      </nav>
    </div>
  );
};

export default Navbar;
