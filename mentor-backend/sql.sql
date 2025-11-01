CREATE DATABASE IF NOT EXISTS mentorship_platform;

USE mentorship_platform;

CREATE TABLE IF NOT EXISTS mentors (
  id INT AUTO_INCREMENT PRIMARY KEY,
  full_name VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL UNIQUE,
  password_hash VARCHAR(255) NOT NULL,
  profession VARCHAR(100) NOT NULL,
  job_title VARCHAR(100) NOT NULL,
  bio TEXT NOT NULL,
  industry VARCHAR(100) NOT NULL,
  experience INT NOT NULL,
  availability VARCHAR(50),
  status VARCHAR(20) DEFAULT 'Available',
  phone_number VARCHAR(20),
  high_school_diploma VARCHAR(50),
  colleges TEXT,
  majors TEXT,
  degrees TEXT,
  certifications TEXT,
  social_links TEXT,
  linkedin_profile TEXT,
  profile_picture VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS requests (
  id INT AUTO_INCREMENT PRIMARY KEY,
  mentor_id INT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (mentor_id) REFERENCES mentors(id) ON DELETE CASCADE
);

SELECT * FROM mentors;

INSERT INTO mentors (
  full_name,
  email,
  password_hash,
  profession,
  job_title,
  bio,
  industry,
  experience,
  availability,
  status,
  majors,
  certifications,
  degrees,
  colleges,
  linkedin_profile,
  profile_picture
)
VALUES
  ('Ava Thompson', 'ava.thompson@example.com', '$2b$12$7.BCE/hoxaU3lsCbj..SUuN3tQIgLN7EkKL7XjYW4jAflb7ImQ5la', 'Software Engineer', 'Frontend Developer', 'Passionate about building clean and scalable user interfaces.', 'Technology', 5, 'Long Term', 'Available', 'Computer Science', 'AWS Certified', 'BSc Computer Science', 'Georgia Tech', 'https://www.linkedin.com/in/ava-thompson', '/uploads/profile01.png'),
  ('Lily Chen', 'lily.chen@example.com', '$2b$12$7.BCE/hoxaU3lsCbj..SUuN3tQIgLN7EkKL7XjYW4jAflb7ImQ5la', 'Data Scientist', 'ML Engineer', 'I love working with data and mentoring women in AI.', 'AI / Data Science', 6, 'Short Term', 'Available', 'Data Science', 'TensorFlow Developer', 'MSc Data Science', 'MIT', 'https://www.linkedin.com/in/lily-chen', '/uploads/profile02.png'),
  ('Zara Patel', 'zara.patel@example.com', '$2b$12$7.BCE/hoxaU3lsCbj..SUuN3tQIgLN7EkKL7XjYW4jAflb7ImQ5la', 'UX Designer', 'Product Designer', 'Designing inclusive experiences is my mission.', 'Design', 4, 'Informational Session', 'Unavailable', 'Design Strategy', 'Nielsen Norman UX', 'BFA Interaction Design', 'Parsons School of Design', 'https://www.linkedin.com/in/zara-patel', '/uploads/profile03.png');
