import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import PageLayout from '../components/PageLayout';

const MentorSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [mentors, setMentors] = useState([]);
  const [industry, setIndustry] = useState('');
  const [experience, setExperience] = useState('');
  const navigate = useNavigate();

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
    <PageLayout>
      <section className="bg-egr2-cgrey text-white py-20 px-6 md:px-20 w-full">
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
                className="bg-green-300 text-black font-medium px-4 py-2 rounded hover:bg-green-200"
              >
                Search
              </button>
            </div>
          </div>

          {/* Scrollable Mentor Cards */}
          <div className="mt-10">
            {mentors.length > 0 ? (
              <div className="flex gap-6 overflow-x-auto pb-4">
              {mentors.map((mentor, index) => {
                const bgColors = [
                  'bg-[#F3F1ED]', // soft grey
                  'bg-[#FCE3E0]', // dusty rose
                  'bg-[#E6F2E1]', // sage green
                  'bg-[#FFF4E6]', // pastel peach
                ];
                const bgColor = bgColors[index % bgColors.length];
            
                return (
                  <div
                    key={mentor.id}
                    onClick={() => navigate(`/mentor/${mentor.id}`)}
                    className={`flex-shrink-0 w-60 h-[400px] ${bgColor} text-black rounded-[120px] flex flex-col justify-end px-4 py-6 text-center shadow-md transition-transform hover:scale-105 cursor-pointer`}
                  >
                    <img
                      src={`/uploads/${mentor.profile_picture?.split('/').pop()}`}
                      alt={mentor.full_name}
                      className="w-28 h-28 object-cover rounded-full mx-auto -mt-24 border-4 border-white shadow-sm"
                    />
                    <div className="mt-6 space-y-1">
                      <h3 className="text-lg font-bold uppercase">{mentor.full_name}</h3>
                      <p className="text-sm">{mentor.job_title}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            
            ) : (
              <p className="text-center text-gray-600 mt-6">No mentors found. Try a different keyword.</p>
            )}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default MentorSearch;
