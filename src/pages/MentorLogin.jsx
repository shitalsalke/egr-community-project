import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PageLayout from '../components/PageLayout';
import { apiClient } from '../services/api';

const MentorLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await apiClient.post('/login', {
        email,
        password,
      });

      const { mentor_id } = response.data;
      // You can store this in localStorage or context (later)
      alert('Login successful');
      navigate(`/mentor/${mentor_id}`);
    } catch (err) {
      setError(err.response?.data?.detail || 'Login failed');
    }
  };

  return (
    <PageLayout>
    <section className="bg-egr2-cgrey text-white py-20 px-6 md:px-20 w-full">
    <div className="max-w-2xl mx-auto bg-white bg-opacity-80 text-black p-10 rounded-xl border border-egr-pink">
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
            className="bg-green-300 hover:bg-green-200 text-black font-medium px-5 py-2 rounded-md w-full"
          >
            Login
          </button>
        </form>
      </div>
    </section>
    </PageLayout>
  );
};

export default MentorLogin;
