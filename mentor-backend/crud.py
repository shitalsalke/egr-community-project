import os
from pathlib import Path
from typing import Optional

from fastapi import UploadFile
from passlib.context import CryptContext
from sqlalchemy.orm import Session

import models

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

_BACKEND_ROOT = Path(__file__).resolve().parent
UPLOAD_DIR = _BACKEND_ROOT / "uploads"
UPLOAD_ROUTE_PREFIX = "/uploads"


def _sanitize(value: Optional[str]) -> Optional[str]:
    if value is None:
        return None
    stripped = value.strip()
    return stripped or None


def save_profile_picture(file: UploadFile) -> str:
    if not file or not file.filename:
        return ""

    UPLOAD_DIR.mkdir(parents=True, exist_ok=True)
    filename = os.path.basename(file.filename)
    file_path = UPLOAD_DIR / filename

    with open(file_path, "wb") as f:
        file.file.seek(0)
        f.write(file.file.read())

    return f"{UPLOAD_ROUTE_PREFIX}/{filename}"


def create_mentor(db: Session, data: dict, file: UploadFile = None):
    profile_pic_path = save_profile_picture(file) if file else None

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
        availability=_sanitize(data.get("availability")),
        status=_sanitize(data.get("status")) or "Available",
        phone_number=_sanitize(data.get("phone_number")),
        high_school_diploma=_sanitize(data.get("high_school_diploma")),
        colleges=_sanitize(data.get("colleges")),
        degrees=_sanitize(data.get("degrees")),
        social_links=_sanitize(data.get("social_links")),
        linkedin_profile=_sanitize(data.get("linkedin_profile")),
        majors=_sanitize(data.get("majors")),
        certifications=_sanitize(data.get("certifications")),
        profile_picture=profile_pic_path or None,
    )
    db.add(mentor)
    db.commit()
    db.refresh(mentor)
    return mentor
