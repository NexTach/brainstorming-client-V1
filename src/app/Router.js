import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Intro from '../pages/Intro/index.jsx';
import Login from '../pages/Login/index.jsx';
import Home from '../pages/Home/index.jsx';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
