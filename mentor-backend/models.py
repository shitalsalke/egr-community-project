from sqlalchemy import TIMESTAMP, Column, Integer, String, Text, func

from database import Base


class Mentor(Base):
    __tablename__ = "mentors"

    id = Column(Integer, primary_key=True, index=True)
    full_name = Column(String(100), nullable=False)
    email = Column(String(100), unique=True, nullable=False)
    password_hash = Column(String(255), nullable=False)
    profession = Column(String(100), nullable=False)
    job_title = Column(String(100), nullable=False)
    bio = Column(Text, nullable=False)
    industry = Column(String(100), nullable=False)
    experience = Column(Integer, nullable=False)
    profile_picture = Column(String(255), nullable=True)
    created_at = Column(TIMESTAMP, server_default=func.now())

class MentorshipRequest(Base):
    __tablename__ = "requests"

    id = Column(Integer, primary_key=True, index=True)
    mentor_id = Column(Integer, nullable=False)
    message = Column(Text, nullable=False)
    created_at = Column(TIMESTAMP, server_default=func.now())
