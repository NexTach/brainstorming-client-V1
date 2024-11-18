import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Intro from '../pages/intro/index.jsx';
import Signin from '../pages/signin/index.jsx';
import Home from '../pages/home/index.jsx';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
