import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black text-white flex justify-between items-center px-12 py-5 shadow-md">
      <div className="flex items-center gap-4">
        <img src="/images/logo-white.avif" alt="EGR Logo" className="h-16 w-auto" />
      </div>
      <div className="space-x-4">
        <button onClick={() => navigate('/')} className="bg-egr-green hover:bg-green-600 text-white font-medium px-5 py-2 rounded-md">
          Home
        </button>
        <button onClick={() => navigate('/search')} className="bg-egr-green hover:bg-green-600 text-white font-medium px-5 py-2 rounded-md">
          Search Mentors
        </button>
        <button onClick={() => window.open('https://www.educatedgirlsrock.org/', '_blank')} className="bg-egr-green hover:bg-green-600 text-white font-medium px-5 py-2 rounded-md">
          About Us
        </button>
        <button onClick={() => navigate('/register')} className="bg-egr-green hover:bg-green-600 text-white font-medium px-5 py-2 rounded-md">
          Become a Mentor
        </button>
        <button onClick={() => navigate('/login')} className="bg-yellow-300 hover:bg-yellow-600 text-black font-medium px-5 py-2 rounded-md">
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
