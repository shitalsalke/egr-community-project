from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

# Replace these with your MySQL credentials
DATABASE_URL = "mysql+pymysql://root:,.,.,.,.@localhost/mentorship_platform"

engine = create_engine(DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()


"""
DB setup - MySQL

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
    profile_picture VARCHAR(255), -- path to stored file
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS requests (
  id INT AUTO_INCREMENT PRIMARY KEY,
  mentor_id INT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (mentor_id) REFERENCES mentors(id) ON DELETE CASCADE
);

"""