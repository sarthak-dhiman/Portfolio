from pydantic import BaseModel
from typing import List, Optional

class Skill(BaseModel):
    name: str
    category: str  # e.g., "Languages", "AI/ML", "Backend", "Cloud"
    level: int     # 1-100

class Project(BaseModel):
    title: str
    description: str
    tech_stack: List[str]
    link: Optional[str] = None
    github: Optional[str] = None
    impact: Optional[str] = None  # e.g., "Improved latency by 20%"

class Experience(BaseModel):
    company: str
    role: str
    period: str
    description: List[str]
    is_current: bool = False

class Education(BaseModel):
    institution: str
    degree: str
    period: str
    details: Optional[str] = None

class Profile(BaseModel):
    name: str
    tagline: str
    bio: str
    location: str
    email: str
    socials: dict
