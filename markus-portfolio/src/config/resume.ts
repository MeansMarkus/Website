export const personal = {
  name: "Markus Means",
  location: "Moore, Oklahoma",
  address: "717 NW 15th Street, Moore, Oklahoma 73160",
  phone: "405-898-7732",
  email: "markusmeansswe@gmail.com",
  github: "https://github.com/MeansMarkus",
  linkedin: "https://www.linkedin.com/in/markus-means-05408a229/",
  headline:
    "Software Engineer focused on AI/ML and full‑stack development. University of Oklahoma B.S. CS (2023–2027).",
};

export const education = [
  {
    school: "University of Oklahoma",
    start: "Aug 2023",
    end: "May 2027",
    degree: "Bachelor of Computer Science",
    coursework: [
      "Artificial Intelligence",
      "Software Engineering",
      "Operating Systems",
      "Data Structures",
    ],
  },
];

export const projects = [
  {
    title: "Watchly: Movie Recommendation Platform",
    link: "https://github.com/MeansMarkus/MoviePicker",
    bullets: [
      "Developed full‑stack movie recommendation app with Python backend and TMDB API for personalized suggestions.",
      "Implemented secure auth via Firebase Authentication with email verification; users can sign up, log in, and save movies.",
      "Deployed via CI/CD on Railway.",
    ],
    stack: [
      "Python",
      "Flask",
      "Firebase",
      "TMDB API",
      "HTML/CSS",
      "JavaScript",
    ],
  },
  {
    title: "Japanese AI Tutor | Full‑Stack ML Application",
    link: "https://github.com/MeansMarkus/AI-ML-Japanese-Tutor",
    bullets: [
      "Built platform with AI conversation practice, vocabulary management, and spaced repetition review system.",
      "Integrated OpenAI 3.5 Turbo for level‑appropriate responses and adaptive spaced repetition using performance analytics.",
      "Engineered ML pipeline with custom T5 transformer fine‑tuning (300+ training examples across 4 data generation methods).",
    ],
    stack: ["Python", "SQL", "PyTorch", "Transformers (T5)", "OpenAI API", "Streamlit"],
  },
];

export const experience = [
  {
    company: "AVO LLC",
    role: "Software Developer Intern",
    start: "June 2025",
    end: "December 2025",
    bullets: [
      "Leading website revitalization including custom software for automated sprinkler estimates using satellite imagery and zone mapping.",
      "Managing project lifecycle end‑to‑end, maintaining quality and client satisfaction.",
    ],
    stack: ["React", "Node.js", "Python", "PostgreSQL", "Vercel"],
  },
  {
    company: "Moore Girls Softball Association",
    role: "Foreman",
    start: "August 2020",
    end: "October 2024",
    bullets: [
      "Managed small team to maintain facilities for 300+ games annually, ensuring field conditions and player safety.",
      "Operated specialized equipment including irrigation systems and maintenance machinery.",
    ],
  },
];

export const skills = {
  languages: ["Java", "C++", "Python", "SQL", "HTML", "CSS", "JavaScript", "R"],
  ml: ["PyTorch", "Transformers", "OpenAI API", "Algorithm Design", "Model Fine‑tuning"],
  web: ["Flask", "Streamlit", "RESTful APIs", "Firebase Authentication"],
  dataTools: ["SQLite", "Firebase Database", "Git", "GitHub", "Docker"],
  devops: ["Railway", "CI/CD", "VSCode", "Pytest", "TMDB API"],
};

export const organizations = [
  {
    name: "Courage League | Assistant Coach",
    start: "2017",
    end: "Present",
    bullets: [
      "Volunteer coach for special needs baseball league (Moore Youth Baseball Association), leading the Bat Attitudes team.",
    ],
  },
];
