import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Intro from '../pages/intro/Index.jsx';
import Signup from '../pages/signup/Index.jsx';
import Signin from '../pages/signin/Index.jsx';
import AddMission from '../pages/addMission/Index.jsx';
import ProtegeHome from '../pages/protege/home/Index.jsx';
import ProtegeProfile from '../pages/protege/profile/Index.jsx';
import ProtegeReminder from '../pages/protege/reminder/Index.jsx';
import Chatbot from '../pages/chatbot/Index.jsx';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/protege">
          <Route path="home" element={<ProtegeHome />} />
          <Route path="profile" element={<ProtegeProfile />} />
          <Route path="add-mission" element={<AddMission />} />
          <Route path="reminder" element={<ProtegeReminder />} />
          <Route path="chatbot" element={<Chatbot />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
