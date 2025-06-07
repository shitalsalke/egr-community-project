import os

from fastapi import (Depends, FastAPI, File, Form, HTTPException, Query,
                     UploadFile)
from fastapi.middleware.cors import CORSMiddleware
from passlib.context import CryptContext
from sqlalchemy import or_
from sqlalchemy.orm import Session
from fastapi import Body
from fastapi.responses import JSONResponse
from sqlalchemy.orm import Session
from models import Mentor
from passlib.context import CryptContext

import crud
import database
import models
from models import Mentor, MentorshipRequest

app = FastAPI()

# Allow frontend to call API
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # React dev server
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

models.Base.metadata.create_all(bind=database.engine)
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

def get_db():
    db = database.SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.post("/register")
async def register_mentor(
    full_name: str = Form(...),
    email: str = Form(...),
    password: str = Form(...),
    profession: str = Form(...),
    job_title: str = Form(...),
    bio: str = Form(...),
    industry: str = Form(...),
    experience: int = Form(...),
    profile_picture: UploadFile = File(None),
    availability: str = Form(None),
    status: str = Form("Available"),
    phone_number: str = Form(None),
    high_school_diploma: str = Form(None),
    colleges: str = Form(...),
    degrees: str = Form(...),
    social_links: str = Form(None),
    linkedin_profile: str = Form(None),
    db: Session = Depends(get_db)
):
    data = {
        "full_name": full_name,
        "email": email,
        "password": password,
        "profession": profession,
        "job_title": job_title,
        "bio": bio,
        "industry": industry,
        "experience": experience,
        "availability":availability,
        "status": status,
        "phone_number": phone_number,
        "high_school_diploma": high_school_diploma,
        "colleges": colleges,
        "degrees": degrees,
        "social_links": social_links,
        "linkedin_profile": linkedin_profile,
    }
    
    try:
        mentor = crud.create_mentor(db, data, profile_picture)
        return { "message": "Mentor registered successfully", "mentor_id": mentor.id }
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))

@app.get("/mentors/search")
def search_mentors(
    q: str = Query("", alias="q"),
    industry: str = Query(None),
    min_experience: int = Query(None),
    majors: str = Query(None),
    certifications: str = Query(None),
    db: Session = Depends(get_db)
):
    keywords = q.lower().split()
    query = db.query(Mentor)

    for word in keywords:
        query = query.filter(
            or_(
                Mentor.full_name.ilike(f"%{word}%"),
                Mentor.bio.ilike(f"%{word}%"),
                Mentor.industry.ilike(f"%{word}%"),
                Mentor.profession.ilike(f"%{word}%"),
                Mentor.job_title.ilike(f"%{word}%"),
            )
        )

    if industry:
        query = query.filter(Mentor.industry.ilike(f"%{industry}%"))
    if majors:
        query = query.filter(Mentor.majors.ilike(f"%{majors}%"))
    if certifications:
        query = query.filter(Mentor.certifications.ilike(f"%{certifications}%"))
    if min_experience is not None:
        query = query.filter(Mentor.experience >= min_experience)

    mentors = query.all()
    return [
        {
            "id": m.id,
            "full_name": m.full_name,
            "profession": m.profession,
            "job_title": m.job_title,
            "bio": m.bio[:120] + "...",
            "industry": m.industry,
            "experience": m.experience,
            "profile_picture": m.profile_picture
        }
        for m in mentors
    ]

@app.get("/mentor/{mentor_id}")
def get_mentor(mentor_id: int, db: Session = Depends(get_db)):
    mentor = db.query(Mentor).filter(Mentor.id == mentor_id).first()
    if not mentor:
        raise HTTPException(status_code=404, detail="Mentor not found")
    return {
        "id": mentor.id,
        "full_name": mentor.full_name,
        "email": mentor.email,
        "profession": mentor.profession,
        "job_title": mentor.job_title,
        "bio": mentor.bio,
        "industry": mentor.industry,
        "experience": mentor.experience,
        "profile_picture": mentor.profile_picture,
        "availability": mentor.availability,
        "majors": mentor.majors,
        "certifications": mentor.certifications,
        "status": mentor.status,
        "created_at": str(mentor.created_at),
    }

@app.post("/mentor/{mentor_id}/request")
def submit_request(mentor_id: int, message: str = Form(...), db: Session = Depends(get_db)):
    if not message.strip():
        raise HTTPException(status_code=400, detail="Message cannot be empty.")

    new_request = models.MentorshipRequest(mentor_id=mentor_id, message=message.strip())
    db.add(new_request)
    db.commit()
    db.refresh(new_request)

    return { "message": "Request submitted successfully", "request_id": new_request.id }

@app.post("/login")
def login(
    email: str = Body(...),
    password: str = Body(...),
    db: Session = Depends(get_db)
):
    mentor = db.query(Mentor).filter(Mentor.email == email).first()
    if not mentor:
        raise HTTPException(status_code=401, detail="Invalid email or password.")

    if not pwd_context.verify(password, mentor.password_hash):
        raise HTTPException(status_code=401, detail="Invalid email or password.")

    return {
        "message": "Login successful",
        "mentor_id": mentor.id
    }
