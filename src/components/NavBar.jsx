import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-egr2-cgrey text-black border-b border-gray-300 shadow-sm">
      {/* Logo centered at top */}
      <div className="flex justify-center py-4">
        <img src="/images/logo-black.png" alt="EGR Logo" className="h-20 w-auto" />
      </div>

      {/* Nav Links centered below logo */}
      <div className="flex flex-wrap justify-center gap-6 pb-4">
        <button
          onClick={() => navigate('/')}
          className="tracking-widest text-sm hover:underline transition"
        >
          HOME
        </button>
        <button
          onClick={() => navigate('/search')}
          className="tracking-widest text-sm hover:underline transition"
        >
          SEARCH MENTORS
        </button>
        <button
          onClick={() => window.open('https://www.educatedgirlsrock.org/', '_blank')}
          className="tracking-widest text-sm hover:underline transition"
        >
          ABOUT US
        </button>
        <button
          onClick={() => navigate('/register')}
          className="tracking-widest text-sm hover:underline transition"
        >
          BECOME A MENTOR
        </button>
        <button
          onClick={() => navigate('/login')}
          className="tracking-widest text-sm hover:underline transition"
        >
          LOGIN
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
