import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Sarthak",
  lastName: "Dhiman",
  name: `Sarthak Dhiman`,
  role: "Backend & AI/ML Engineer",
  avatar: "/images/avatar-v2.jpg",
  email: "sarthakdhiman49@gmail.com",
  location: "Asia/Kolkata", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  displayLocation: "Chandigarh, India",
  languages: ["English", "Hindi"],
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/sarthak-dhiman",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/sarthak-dhiman/",
    essential: true,
  },
  {
    name: "X",
    icon: "x",
    link: "https://x.com/sarthak_dhiman",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Architecting Scalable AI Backends and Real-time Intelligence</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Sarthak Dhiman</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Backend & AI/ML Engineer
        </Text>
      </Row>
    ),
    href: "/about",
  },
  subline: (
    <>
      I'm Sarthak, a backend and AI/ML engineer currently at <Text as="span" size="xl" weight="strong">ChicMic Studios</Text>.
      I specialize in building production-grade FastAPI backends, agentic workflows, and real-time computer vision systems.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I am a final-year B.Tech CSE student at Guru Nanak Dev University (GNDU), passionate about bridging the gap
        between sophisticated ML models and robust backend architectures. My work focuses on high-performance
        distributed systems, LLM orchestration, and real-time inference.
      </>
    ),
  },
  work: {
    display: true,
    title: "Professional Journey",
    experiences: [
      {
        company: "ChicMic Studios",
        timeframe: "Jan 2026 - Present",
        role: "Python Developer Intern",
        achievements: [
          <>
            Developing production-grade FastAPI backends for ML inference and agentic AI workflows using LangChain and CrewAI.
          </>,
          <>
            Architecting end-to-end RAG pipelines with Pinecone, ChromaDB, and AWS Bedrock for scalable intelligence.
          </>,
          <>
            Training and deploying computer vision models (MMPose, YOLOv8) for medical diagnostics and real-time monitoring.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Academic Foundation",
    institutions: [
      {
        name: "Guru Nanak Dev University (GNDU)",
        description: <>B.Tech in Computer Science and Engineering (2022 - 2026). </>,
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical Arsenal",
    skills: [
      {
        title: "AI/ML & Computer Vision",
        description: (
          <>Expertise in PyTorch, OpenCV, MediaPipe, and YOLOv8 for real-time inference and training.</>
        ),
        tags: [
          { name: "PyTorch", icon: "python" },
          { name: "OpenCV", icon: "python" },
          { name: "MediaPipe", icon: "python" },
        ],
        images: [],
      },
      {
        title: "LLM & Agentic AI",
        description: (
          <>Building autonomous agents and RAG pipelines using LangChain, CrewAI, and vector databases.</>
        ),
        tags: [
          { name: "LangChain", icon: "nextjs" },
          { name: "CrewAI", icon: "nextjs" },
          { name: "Pinecone", icon: "supabase" },
        ],
        images: [],
      },
      {
        title: "Backend Engineering",
        description: (
          <>Architecting high-performance backends with FastAPI, Django, and PostgreSQL.</>
        ),
        tags: [
          { name: "FastAPI", icon: "python" },
          { name: "PostgreSQL", icon: "supabase" },
          { name: "Docker", icon: "docker" },
        ],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/projects/disease-prediction/cover.png",
      alt: "Medical AI Diagnostic Dashboard",
      orientation: "horizontal",
    },
    {
      src: "/images/projects/posture-saas/cover.png",
      alt: "Posture Monitoring SaaS Interface",
      orientation: "horizontal",
    },
    {
      src: "/images/projects/helios-predict/cover.png",
      alt: "Solar Energy Forecasting Analytics",
      orientation: "horizontal",
    },
    {
      src: "/images/projects/voice-agent/cover.png",
      alt: "AI Voice Communication Interface",
      orientation: "horizontal",
    },
    {
      src: "/images/projects/mini-dfs/cover.png",
      alt: "MiniDfs Distributed Storage Interface",
      orientation: "horizontal",
    },
    {
      src: "/images/projects/job-portal/cover.png",
      alt: "EliteHire Job Portal Dashboard",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
