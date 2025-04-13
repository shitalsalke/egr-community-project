import React from 'react';
import { Routes, Route } from 'react-router-dom';

import MentorRegister from './pages/MentorRegister';
import MentorLogin from './pages/MentorLogin';
import MentorSearch from './pages/MentorSearch';
import MentorProfile from './pages/MentorProfile';
import Home from './pages/Home';

function App() {
  return (
      <Routes>
        <Route path="/register" element={<MentorRegister />} />
        <Route path="/login" element={<MentorLogin />} />
        <Route path="/search" element={<MentorSearch />} />
        <Route path="/mentor/:id" element={<MentorProfile />} />
        <Route path="/" element={<Home />} />
      </Routes>
  );
}

export default App;
