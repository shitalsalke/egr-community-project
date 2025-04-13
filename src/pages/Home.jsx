import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen bg-egr-light flex flex-col items-center justify-center px-6 overflow-hidden">
    
      {/* Main Hero */}
      <header className="relative z-10 text-center space-y-6 max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-bold text-egr-pink leading-tight">
          Empowering Girls Through Mentorship
        </h1>
        <p className="text-gray-700 text-lg">
          Join our community of inspiring women mentors. Help girls dream big and build their future.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
          <button
            onClick={() => navigate('/search')}
            className="bg-egr-pink text-white px-6 py-3 rounded-2xl shadow hover:bg-pink-800 transition"
          >
            Find a Mentor
          </button>
          <button
            onClick={() => navigate('/register')}
            className="bg-white text-egr-pink px-6 py-3 rounded-2xl border border-egr-pink hover:bg-egr-light transition"
          >
            Become a Mentor
          </button>
          <button
            onClick={() => navigate('/login')}
            className="bg-egr-yellow text-black px-6 py-3 rounded-2xl border border-yellow-300 hover:bg-yellow-300 transition"
          >
            Login
          </button>
        </div>
      </header>
    </div>
  );
};

export default Home;

