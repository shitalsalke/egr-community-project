import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const MentorLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await axios.post('http://127.0.0.1:8000/login', {
        email,
        password,
      });

      const { mentor_id } = response.data;
      // You can store this in localStorage or context (later)
      alert('Login successful');
      navigate(`/mentor/${mentor_id}/edit`);
    } catch (err) {
      setError(err.response?.data?.detail || 'Login failed');
    }
  };

  return (
    <div className="w-full flex justify-center items-center py-10 px-4">
      <div className="max-w-xl w-full bg-white bg-opacity-90 p-8 rounded-xl border border-egr-pink shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Mentor Login</h2>
        {error && <p className="text-red-600 text-sm mb-4 text-center">{error}</p>}
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block font-medium">Email</label>
            <input
              type="email"
              className="w-full mt-1 p-2 border rounded"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block font-medium">Password</label>
            <input
              type="password"
              className="w-full mt-1 p-2 border rounded"
              placeholder="Your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="bg-egr-pink text-white px-4 py-2 rounded w-full hover:bg-pink-800 transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default MentorLogin;
