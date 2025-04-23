CREATE DATABASE mentorship_platform;

USE mentorship_platform;

CREATE TABLE mentors (
  id INT AUTO_INCREMENT PRIMARY KEY,
  fullName VARCHAR(100),
  email VARCHAR(100),
  phone VARCHAR(20),
  bio TEXT,
  profession VARCHAR(100),
  jobTitle VARCHAR(100),
  hsDiploma VARCHAR(10),
  colleges TEXT,
  majors TEXT,
  degrees TEXT,
  certifications TEXT,
  careerFocus TEXT,
  experience INT,
  availability TEXT,
  socialLinks TEXT,
  location VARCHAR(100),
  linkedin VARCHAR(200)
);

select * from mentors;

INSERT INTO mentors (full_name, email, password_hash, profession, job_title, bio, industry, experience, profile_picture)
VALUES
  ('Ava Thompson', 'ava.thompson@example.com', '$2b$12$7.BCE/hoxaU3lsCbj..SUuN3tQIgLN7EkKL7XjYW4jAflb7ImQ5la', 'Software Engineer', 'Frontend Developer', 'Passionate about building clean and scalable user interfaces.', 'Technology', 5, 'profile01.png'),
  ('Lily Chen', 'lily.chen@example.com', '$2b$12$7.BCE/hoxaU3lsCbj..SUuN3tQIgLN7EkKL7XjYW4jAflb7ImQ5la', 'Data Scientist', 'ML Engineer', 'I love working with data and mentoring women in AI.', 'AI / Data Science', 6, 'profile02.png'),
  ('Zara Patel', 'zara.patel@example.com', '$2b$12$7.BCE/hoxaU3lsCbj..SUuN3tQIgLN7EkKL7XjYW4jAflb7ImQ5la', 'UX Designer', 'Product Designer', 'Designing inclusive experiences is my mission.', 'Design', 4, 'profile03.png'),
  ('Elena Rivera', 'elena.rivera@example.com', '$2b$12$7.BCE/hoxaU3lsCbj..SUuN3tQIgLN7EkKL7XjYW4jAflb7ImQ5la', 'Healthcare Consultant', 'Clinical Analyst', 'Helping young girls explore healthcare careers.', 'Healthcare', 7, 'profile04.png'),
  ('Nina Brooks', 'nina.brooks@example.com', '$2b$12$7.BCE/hoxaU3lsCbj..SUuN3tQIgLN7EkKL7XjYW4jAflb7ImQ5la', 'Finance Analyst', 'Investment Strategist', 'Finance is fun when you understand the rules!', 'Finance', 8, 'profile05.png'),
  ('Sophia Martin', 'sophia.martin@example.com', '$2b$12$7.BCE/hoxaU3lsCbj..SUuN3tQIgLN7EkKL7XjYW4jAflb7ImQ5la', 'Business Coach', 'Startup Mentor', 'Helping first-time founders avoid common mistakes.', 'Business', 10, 'profile06.png'),
  ('Tanya Nguyen', 'tanya.nguyen@example.com', '$2b$12$7.BCE/hoxaU3lsCbj..SUuN3tQIgLN7EkKL7XjYW4jAflb7ImQ5la', 'Teacher', 'High School Math Teacher', 'Dedicated to STEM outreach for young girls.', 'Education', 9, 'profile07.png'),
  ('Maya Singh', 'maya.singh@example.com', '$2b$12$7.BCE/hoxaU3lsCbj..SUuN3tQIgLN7EkKL7XjYW4jAflb7ImQ5la', 'HR Specialist', 'Diversity Officer', 'Empowering inclusive hiring practices.', 'Human Resources', 5, 'profile08.png'),
  ('Olivia Kim', 'olivia.kim@example.com', '$2b$12$7.BCE/hoxaU3lsCbj..SUuN3tQIgLN7EkKL7XjYW4jAflb7ImQ5la', 'Marketing Manager', 'Brand Strategist', 'Passionate about mentoring in creative marketing.', 'Marketing', 6, 'profile09.png'),
  ('Hannah Lopez', 'hannah.lopez@example.com', '$2b$12$7.BCE/hoxaU3lsCbj..SUuN3tQIgLN7EkKL7XjYW4jAflb7ImQ5la', 'Cybersecurity Analyst', 'Ethical Hacker', 'I help girls learn how to protect the web!', 'Cybersecurity', 4, 'profile10.png'),
  ('Grace Lee', 'grace.lee@example.com', '$2b$12$7.BCE/hoxaU3lsCbj..SUuN3tQIgLN7EkKL7XjYW4jAflb7ImQ5la', 'Architect', 'Sustainability Designer', 'Let’s build greener cities together.', 'Architecture', 12, 'profile11.png'),
  ('Rachel Moore', 'rachel.moore@example.com', '$2b$12$7.BCE/hoxaU3lsCbj..SUuN3tQIgLN7EkKL7XjYW4jAflb7ImQ5la', 'Legal Advisor', 'Non-Profit Law Expert', 'Supporting social justice through mentorship.', 'Law', 11, 'profile12.png'),
  ('Emily Carter', 'emily.carter@example.com', '$2b$12$7.BCE/hoxaU3lsCbj..SUuN3tQIgLN7EkKL7XjYW4jAflb7ImQ5la', 'Project Manager', 'Scrum Master', 'Helping teams deliver with agility.', 'Technology', 7, 'profile13.png'),
  ('Isabella Diaz', 'isabella.diaz@example.com', '$2b$12$7.BCE/hoxaU3lsCbj..SUuN3tQIgLN7EkKL7XjYW4jAflb7ImQ5la', 'Biomedical Engineer', 'Lab Technologist', 'STEM should be accessible for every girl.', 'Healthcare / Engineering', 6, 'profile14.png'),
  ('Jasmine Brown', 'jasmine.brown@example.com', '$2b$12$7.BCE/hoxaU3lsCbj..SUuN3tQIgLN7EkKL7XjYW4jAflb7ImQ5la', 'Author', 'Creative Writing Coach', 'Words can empower. I love mentoring writers.', 'Creative Arts', 9, 'profile15.png');

