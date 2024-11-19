import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Intro from '../pages/intro/Index.jsx';
import Signin from '../pages/signin/Index.jsx';

import Home from '../pages/protege/home/Index.js';
import Profile from '../pages/protege/profile/Index.jsx';
import Reminder from '../pages/protege/reminder/Index.jsx';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/protege">
          <Route path="home" element={<Home />} />
          <Route path="profile" element={<Profile />} />
          <Route path="reminder" element={<Reminder />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
