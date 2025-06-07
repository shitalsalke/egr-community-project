import os

from fastapi import UploadFile
from passlib.context import CryptContext
from sqlalchemy.orm import Session

import models

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

UPLOAD_DIR = "uploads"

def save_profile_picture(file: UploadFile) -> str:
    os.makedirs(UPLOAD_DIR, exist_ok=True)
    filename = file.filename
    file_path = os.path.join(UPLOAD_DIR, filename)

    with open(file_path, "wb") as f:
        f.write(file.file.read())
    
    return file_path

def create_mentor(db: Session, data: dict, file: UploadFile = None):
    profile_pic_path = None
    if file:
        profile_pic_path = save_profile_picture(file)

    hashed_pw = pwd_context.hash(data["password"])
    
    mentor = models.Mentor(
        full_name=data["full_name"],
        email=data["email"],
        password_hash=hashed_pw,
        profession=data["profession"],
        job_title=data["job_title"],
        bio=data["bio"],
        industry=data["industry"],
        experience=data["experience"],
        availability=data["availability"],
        profile_picture=profile_pic_path
    )
    db.add(mentor)
    db.commit()
    db.refresh(mentor)
    return mentor
