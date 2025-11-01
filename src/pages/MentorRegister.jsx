import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PageLayout from '../components/PageLayout';
import { apiClient } from '../services/api';


const MentorRegister = () => {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phoneNumber: '',
    highSchoolDiploma: '',
    colleges: '',
    majors: '',
    degrees: '',
    certifications: '',
    profession: '',
    jobTitle: '',
    bio: '',
    industry: '',
    experience: '',
    availability: '',
    status: 'Available',
    socialLinks: '',
    linkedinProfile: '',
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
    if (!formData.colleges.trim()) newErrors.colleges = 'Colleges attended is required';
    if (!formData.degrees.trim()) newErrors.degrees = 'Degrees earned is required';

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
    formDataToSend.append('availability', formData.availability);
    formDataToSend.append('status', formData.status);
    formDataToSend.append('phone_number', formData.phoneNumber);
    formDataToSend.append('high_school_diploma', formData.highSchoolDiploma);
    formDataToSend.append('colleges', formData.colleges);
    formDataToSend.append('majors', formData.majors);
    formDataToSend.append('degrees', formData.degrees);
    formDataToSend.append('certifications', formData.certifications);
    formDataToSend.append('social_links', formData.socialLinks);
    formDataToSend.append('linkedin_profile', formData.linkedinProfile);
  
    if (formData.profilePicture) {
      formDataToSend.append('profile_picture', formData.profilePicture);
    }
  
    try {
      const response = await apiClient.post('/register', formDataToSend, {
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
    <PageLayout>
    <section className="bg-egr2-cgrey text-white py-20 px-6 md:px-20 w-full">
    <div className="max-w-3xl mx-auto bg-white bg-opacity-90 text-black p-10 rounded-xl border border-egr-pink">
        <h2 className="text-2xl font-bold mb-6 text-center">Register as a Mentor</h2>
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
          <Input label="Phone Number" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
          <Input label="High School Diploma/GED" name="highSchoolDiploma" value={formData.highSchoolDiploma} onChange={handleChange} />
          <Input label="Colleges Attended" name="colleges" value={formData.colleges} onChange={handleChange} error={errors.colleges} />
          <Input label="Major(s) / Focus Areas" name="majors" value={formData.majors} onChange={handleChange} />
          <Input label="Degrees Earned" name="degrees" value={formData.degrees} onChange={handleChange} error={errors.degrees} />
          <Input label="Certifications & Licenses" name="certifications" value={formData.certifications} onChange={handleChange} />
          <Input label="Social Media Links" name="socialLinks" value={formData.socialLinks} onChange={handleChange} />
          <Input label="LinkedIn Profile Link" name="linkedinProfile" value={formData.linkedinProfile} onChange={handleChange} />
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

        <div>
          <label className="block font-medium">Availability</label>
          <select
            name="availability"
            value={formData.availability}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded"
          >
            <option value="">Select availability</option>
            <option value="Short Term">Short Term</option>
            <option value="Long Term">Long Term</option>
            <option value="Informational Session">Informational Session</option>
          </select>
        </div>

        <div>
        <label className="block font-medium">Status</label>
        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
          className="w-full mt-1 p-2 border rounded"
        >
          <option value="Available">Available</option>
          <option value="Unavailable">Unavailable</option>
        </select>
      </div>

        </div>
          <button type="submit" className="w-full bg-green-300 text-black py-2 px-4 rounded hover:bg-green-200 font-semibold">
            Register
          </button>
        </form>
      </div>
    </section>
    </PageLayout>
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
