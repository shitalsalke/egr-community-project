import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from './components/Layout';
import Home from './pages/Home';
import MentorRegister from './pages/MentorRegister';
import MentorLogin from './pages/MentorLogin';
import MentorSearch from './pages/MentorSearch';
import MentorProfile from './pages/MentorProfile';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<MentorRegister />} />
        <Route path="/login" element={<MentorLogin />} />
        <Route path="/search" element={<MentorSearch />} />
        <Route path="/mentor/:id" element={<MentorProfile />} />
      </Routes>
    </Layout>
  );
}

export default App;
