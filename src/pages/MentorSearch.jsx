import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const MentorSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [mentors, setMentors] = useState([]);
  const navigate = useNavigate();

  const [industry, setIndustry] = useState('');
    const [experience, setExperience] = useState('');

    const handleSearch = async () => {
        try {
          const queryParams = new URLSearchParams();
          if (searchQuery) queryParams.append("q", searchQuery);
          if (industry) queryParams.append("industry", industry);
          if (experience !== '') queryParams.append("min_experience", experience);
      
          const response = await axios.get(`http://127.0.0.1:8000/mentors/search?${queryParams.toString()}`);
          setMentors(response.data);
        } catch (error) {
          console.error("Search failed:", error);
        }
      };

  return (
    <section className="bg-black text-white py-20 px-6 md:px-20 w-full">
    <div className="max-w-6xl mx-auto bg-white bg-opacity-90 text-black p-10 rounded-xl border border-egr-pink">
      <h1 className="text-3xl font-bold text-center mb-6 text-egr-pink">Find a Mentor</h1>

      {/* Search Controls */}
      <div className="space-y-4">
        <input
          type="text"
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && handleSearch()}
          placeholder="Search for mentors - enter any keywords..."
          className="w-full py-3 px-4 bg-white bg-opacity-70 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-egr-pink"
        />

        <div className="flex flex-wrap gap-3">
          <select
            onChange={(e) => setIndustry(e.target.value)}
            className="px-3 py-2 border rounded bg-white"
          >
            <option value="">All Industries</option>
            <option value="Software">Software</option>
            <option value="Finance">Finance</option>
            <option value="Education">Education</option>
            <option value="Healthcare">Healthcare</option>
          </select>

          <input
            type="number"
            placeholder="Min Experience"
            className="px-3 py-2 border rounded"
            onChange={(e) => setExperience(e.target.value)}
          />

          <button
            onClick={handleSearch}
            className="bg-egr-green text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Search
          </button>
        </div>
      </div>

      {/* Results */}
      <div className="mt-8 space-y-4">
        {mentors.length > 0 ? (
          mentors.map((mentor) => (
            <div
              key={mentor.id}
              onClick={() => navigate(`/mentor/${mentor.id}`)}
              className="cursor-pointer bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition border border-gray-200"
            >
              <h3 className="text-lg font-semibold text-egr-dark">{mentor.full_name}</h3>
              <p className="text-sm text-gray-600">{mentor.profession} – {mentor.job_title}</p>
              <p className="text-sm mt-2 text-gray-800">{mentor.bio}</p>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-600">No mentors found. Try a different keyword.</p>
        )}
      </div>
    </div>
  </section>
  );
};

export default MentorSearch;
