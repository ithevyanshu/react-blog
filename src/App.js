import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./App.css"; // Assuming you have a CSS file for styling.
import Navbar from './components/Navbar';
import BlogList from './components/BlogList';
import BlogDetail from './components/BlogDetail';
import CreateBlog from './components/CreateBlog';
import EditBlog from './components/EditBlog';

const App = () => {
  return (
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<BlogList />} />
          <Route path="/create-blog" element={<CreateBlog />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
          <Route path="/edit/:id" element={<EditBlog />} />
        </Routes>
      </Router>
  );
};

export default App;
