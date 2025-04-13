import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const MentorProfile = () => {
    const { id } = useParams();
    const [mentor, setMentor] = useState(null);
    const [requestMessage, setRequestMessage] = useState('');
    const [submitted, setSubmitted] = useState(false);
  
    useEffect(() => {
      axios.get(`http://127.0.0.1:8000/mentor/${id}`)
        .then(res => setMentor(res.data))
        .catch(err => console.error("Failed to fetch mentor", err));
    }, [id]);
  
    const handleSubmitRequest = async () => {
      if (!requestMessage.trim()) {
        alert("Message cannot be empty.");
        return;
      }
  
      try {
        await axios.post(
          `http://127.0.0.1:8000/mentor/${id}/request`,
          new URLSearchParams({ message: requestMessage }),
          {
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          }
        );
        setSubmitted(true);
      } catch (err) {
        console.error(err);
        alert('Failed to send request. Please try again.');
      }
    };
  
    if (!mentor) return <div className="text-center mt-10">Loading...</div>;
  
    return (
      <section className="bg-black text-white py-20 px-6 md:px-20 w-full">
      <div className="max-w-5xl mx-auto">
        {/* Profile Header */}
        <div className="flex gap-4 items-center mb-6">
          <img
            src={`/${mentor.profile_picture?.split('/').pop()}`}
            alt="mentor"
            className="w-24 h-24 rounded-full object-cover border"
          />
          <div>
            <h1 className="text-3xl font-bold text-egr-pink">{mentor.full_name}</h1>
            <p className="text-white-600">{mentor.profession} – {mentor.job_title}</p>
            <p className="text-sm text-white-500">
              Industry: {mentor.industry} | Experience: {mentor.experience} yrs
            </p>
          </div>
        </div>
  
        {/* Bio */}
        <div className="bg-white text-black bg-opacity-90 rounded-xl p-8 border border-egr-pink">
        <h2 className="text-xl font-semibold mt-4 mb-2">About</h2>
        <p className="text-white-800 whitespace-pre-line">{mentor.bio}</p>
        </div>
  
        {/* Mentorship Request Form */}
        {!submitted ? (
          <div className="bg-white text-black bg-opacity-90 rounded-xl p-8 border border-egr-pink">
          <h2 className="text-lg font-semibold mb-3 text-egr-dark">Send Mentorship Request</h2>
        
          <textarea
            rows="4"
            value={requestMessage}
            onChange={(e) => setRequestMessage(e.target.value)}
            placeholder="Write a short message to the mentor..."
            className="w-full p-3 border-2 border-egr-pink rounded-md focus:outline-none focus:ring-2 focus:ring-egr-pink"
          />
        
          <button
            onClick={handleSubmitRequest}
            className="bg-egr-green text-black px-6 py-2 rounded hover:bg-green-600 font-semibold"
          >
            Send Request
          </button>
        </div>
        ) : (
          <div className="mt-8 text-green-700 font-semibold">
            🎉 Your request has been sent!
          </div>
        )}
      </div>
      </section>
    );
  };

export default MentorProfile;
