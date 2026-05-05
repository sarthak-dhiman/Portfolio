from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from models import Skill, Project, Experience, Education, Profile
from typing import List

app = FastAPI(title="AI/ML Engineer Portfolio API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Mock Data
PROFILE = Profile(
    name="Sarthak Dhiman",
    tagline="Python Developer | AI/ML & Backend Engineer",
    bio="Final-year B.Tech CSE student specializing in building production-grade AI backends, agentic workflows, and real-time computer vision systems. Currently architecting scalable intelligence at ChicMic Studios.",
    location="India",
    email="sarthak@example.com",
    socials={
        "github": "https://github.com/sarthak-dhiman",
        "linkedin": "https://linkedin.com/in/sarthak-dhiman",
        "twitter": "https://twitter.com/sarthak_dhiman"
    }
)

SKILLS = [
    # Languages
    Skill(name="Python", category="Languages", level=95),
    Skill(name="C++", category="Languages", level=85),
    Skill(name="SQL", category="Languages", level=80),
    
    # AI/ML/CV
    Skill(name="PyTorch", category="AI/ML", level=90),
    Skill(name="OpenCV", category="AI/ML", level=92),
    Skill(name="MediaPipe", category="AI/ML", level=88),
    Skill(name="YOLOv8", category="AI/ML", level=85),
    
    # LLM & Agentic AI
    Skill(name="LangChain/LangGraph", category="AI/ML", level=88),
    Skill(name="CrewAI", category="AI/ML", level=85),
    Skill(name="RAG (Pinecone/Chroma)", category="AI/ML", level=90),
    
    # Backend
    Skill(name="FastAPI", category="Backend", level=94),
    Skill(name="Django/DRF", category="Backend", level=90),
    Skill(name="WebSockets", category="Backend", level=85),
    Skill(name="PostgreSQL", category="Backend", level=88),
    
    # Cloud & DevOps
    Skill(name="Docker", category="Cloud", level=90),
    Skill(name="AWS (EC2/Bedrock)", category="Cloud", level=82),
    Skill(name="Redis/Celery", category="Cloud", level=85),
]

EXPERIENCE = [
    Experience(
        company="ChicMic Studios",
        role="Python Developer Intern",
        period="Jan 2026 - Present",
        description=[
            "Developing production-grade FastAPI backends for ML inference and agentic AI workflows.",
            "Building live voice pipelines using LiveKit, LangChain, and CrewAI.",
            "Architecting end-to-end RAG pipelines with Pinecone, ChromaDB, and AWS Bedrock.",
            "Training and deploying computer vision models (MMPose, YOLOv8) for medical diagnostics."
        ],
        is_current=True
    )
]

EDUCATION = [
    Education(
        institution="Guru Nanak Dev University (GNDU)",
        degree="B.Tech in Computer Science and Engineering",
        period="2022 - 2026",
        details="Specializing in Backend Systems and Artificial Intelligence."
    )
]

PROJECTS = [
    Project(
        title="AI-Powered Disease Detection System",
        description="A multi-model medical diagnostic API for jaundice, skin conditions (38 classes), and nail pathology. Uses asynchronous processing to handle GPU-intensive tasks.",
        tech_stack=["Python", "FastAPI", "PyTorch", "HuggingFace", "Celery", "Redis", "Docker"],
        impact="Achieved 94% accuracy in jaundice detection and 96% in nail pathology."
    ),
    Project(
        title="Posture Monitoring Platform (SaaS)",
        description="An end-to-end SaaS platform for ergonomic monitoring with a Django/WebSocket backend and a PyQt6 Windows client for real-time YOLOv8-Pose inference.",
        tech_stack=["Python", "Django", "WebSockets", "YOLOv8", "PostgreSQL", "Razorpay", "PyQt6"],
        impact="Developed a zero-dependency Windows client with integrated subscription billing."
    ),
    Project(
        title="HeliosPredict: Solar Forecasting",
        description="A forecasting engine for solar energy output based on historical irradiance and plant telemetry, hosted on AWS EC2.",
        tech_stack=["Python", "TensorFlow", "Pandas", "AWS EC2", "WeatherAPI"],
        impact="Authored a full TensorFlow pipeline and integrated live meteorological data for real-time prediction."
    )
]

@app.get("/")
async def root():
    return {"message": "AI/ML Engineer Portfolio API", "status": "online"}

@app.get("/profile", response_model=Profile)
async def get_profile():
    return PROFILE

@app.get("/skills", response_model=List[Skill])
async def get_skills():
    return SKILLS

@app.get("/projects", response_model=List[Project])
async def get_projects():
    return PROJECTS

@app.get("/experience", response_model=List[Experience])
async def get_experience():
    return EXPERIENCE

@app.get("/education", response_model=List[Education])
async def get_education():
    return EDUCATION
