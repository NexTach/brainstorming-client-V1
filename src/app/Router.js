import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Intro from '../pages/intro/Index.jsx';
import Signin from '../pages/signin/Index.jsx';
import Home from '../pages/home/Index.jsx';
import Profile from '../pages/profile/Index.jsx';
import Reminder from '../pages/reminder/Index.jsx';
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/reminder" element={<Reminder />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
