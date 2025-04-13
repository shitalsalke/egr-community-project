import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const MentorRegister = () => {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    profession: '',
    jobTitle: '',
    bio: '',
    industry: '',
    experience: '',
    profilePicture: null,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData(prev => ({ ...prev, profilePicture: e.target.files[0] }));
  };
  

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.password) newErrors.password = 'Password is required';
    if (!formData.confirmPassword) newErrors.confirmPassword = 'Please re-enter your password';
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Passwords do not match';
    if (!formData.profession.trim()) newErrors.profession = 'Profession is required';
    if (!formData.jobTitle.trim()) newErrors.jobTitle = 'Job title is required';
    if (!formData.bio.trim()) newErrors.bio = 'Bio is required';
    if (!formData.industry.trim()) newErrors.industry = 'Industry is required';
    if (!formData.experience) newErrors.experience = 'Years of experience is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
  
    const formDataToSend = new FormData();
    formDataToSend.append('full_name', formData.fullName);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('password', formData.password);
    formDataToSend.append('profession', formData.profession);
    formDataToSend.append('job_title', formData.jobTitle);
    formDataToSend.append('bio', formData.bio);
    formDataToSend.append('industry', formData.industry);
    formDataToSend.append('experience', formData.experience);
  
    if (formData.profilePicture) {
      formDataToSend.append('profile_picture', formData.profilePicture);
    }
  
    try {
      const response = await axios.post('http://127.0.0.1:8000/register', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
  
      alert("Mentor registered successfully! 🎉");
      navigate("/"); // Redirect to homepage
      console.log(response.data);
    } catch (error) {
      alert("Registration failed: " + (error.response?.data?.detail || error.message));
      console.error(error);
    }
  };

  return (
    <div className="w-full flex justify-center items-center py-10 px-4">
    <div className="max-w-3xl w-full bg-white bg-opacity-90 p-8 rounded-xl border border-egr-pink">
        <h2 className="text-2xl font-bold mb-6 text-center">Become a Mentor</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <Input
            label="Full Name"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            error={errors.fullName}
          />
          <Input
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
          />
          <Input
            label="Password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            error={errors.password}
          />
          <Input
            label="Confirm Password"
            name="confirmPassword"
            type="password"
            value={formData.confirmPassword}
            onChange={handleChange}
            error={errors.confirmPassword}
          />
          <Input
            label="Profession"
            name="profession"
            value={formData.profession}
            onChange={handleChange}
            error={errors.profession}
          />
          <Input
            label="Job Title"
            name="jobTitle"
            value={formData.jobTitle}
            onChange={handleChange}
            error={errors.jobTitle}
          />
          <TextArea
            label="Bio"
            name="bio"
            value={formData.bio}
            onChange={handleChange}
            error={errors.bio}
          />
          <Input
            label="Industry"
            name="industry"
            value={formData.industry}
            onChange={handleChange}
            error={errors.industry}
          />
          <Input
            label="Years of Experience"
            name="experience"
            type="number"
            min="0"
            value={formData.experience}
            onChange={handleChange}
            error={errors.experience}
          />
          <div>
          <label className="block font-medium">Profile Picture</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="w-full mt-1 p-2 border rounded"
          />
          {formData.profilePicture && (
          <div className="mt-2">
            <img
              src={URL.createObjectURL(formData.profilePicture)}
              alt="Preview"
              className="h-24 w-24 object-cover rounded-full border"
            />
          </div>
        )}

        </div>
          <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

// 🔧 Reusable Input Component
const Input = ({ label, name, type = "text", value, onChange, error, ...props }) => (
  <div>
    <label className="block font-medium">{label}</label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      className={`w-full mt-1 p-2 border rounded ${error ? 'border-red-500' : ''}`}
      {...props}
    />
    {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
  </div>
);

// 🔧 Reusable TextArea Component
const TextArea = ({ label, name, value, onChange, error }) => (
  <div>
    <label className="block font-medium">{label}</label>
    <textarea
      name={name}
      value={value}
      onChange={onChange}
      rows="3"
      className={`w-full mt-1 p-2 border rounded ${error ? 'border-red-500' : ''}`}
    />
    {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
  </div>
);

export default MentorRegister;
