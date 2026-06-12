// ─── PERSONAL INFO ────────────────────────────────────────────────────────────
export const personal = {
  name: "Saikiran Srichurnam",
  firstName: "Saikiran",
  lastName: "Srichurnam",
  initials: "SS",
  title: "Full Stack Developer",
  email: "saikiransrichurnam628@gmail.com",
  phone: "+91 6281507996",
  location: "Hyderabad, India",
  github: "https://github.com/Saikiran-Srichurnam",
  linkedin: "https://www.linkedin.com/in/saikiran-srichurnam/",
  // Replace with your Google Drive direct download link:
  // Format: https://drive.google.com/uc?export=download&id=YOUR_FILE_ID
  resume:
    "https://drive.google.com/uc?export=download&id=1VlYXPpT6ygivnWc27iUAtD1zToZvOphY",
  tagline:
    "A B.Tech CSE (Data Science) graduate (May 2025) who builds full-stack web applications that are fast, scalable, and production-ready.",
  summary:
    "I don't just learn frameworks — I build with them. From architecting REST APIs to shipping responsive dashboards, I work across the full stack with React, Node.js, Express, PostgreSQL, Prisma ORM, and more.",
  available: true,
};

// ─── TYPED PHRASES ────────────────────────────────────────────────────────────
export const typedPhrases = [
  "Full Stack Developer",
  "MERN Stack Engineer",
  "React + Node.js Dev",
  "Frontend Developer",
  "Problem Solver",
  "Backend Developer",
];

// ─── HERO STATS ───────────────────────────────────────────────────────────────
export const heroStats = [
  { num: "3", label: "Projects Shipped" },
  { num: "2", label: "Internships" },
  { num: "8.1", label: "CGPA" },
  { num: "10+", label: "Technologies" },
];

// ─── ABOUT CARDS ──────────────────────────────────────────────────────────────
// Card icons are defined in About.jsx using lucide-react
export const aboutCards = [
  {
    title: "Internships",
    desc: "Sandblaze Digitals (2025–26) + CodSoft (2024)",
  },
  {
    title: "Projects Shipped",
    desc: "3 apps deployed — SaaS, Weather, Task Manager",
  },
  { title: "Location", desc: "Hyderabad, India · Open to remote & relocation" },
  {
    title: "Education",
    desc: "B.Tech CSE (Data Science) · MRIET · Graduated May 2025 · CGPA 8.1",
  },
];

export const certifications = [
  "🏆 Web Developer Intern - Sandblaze Digitals",
  "🏆 Web Dev Internship – CodSoft",
  "📊 Data Science Internship – BharatIntern",
];

// ─── SKILLS ─────────────────────────────────────────────────────────────────
// Icons & colors are defined in Skills.jsx (uses lucide-react)
// Only pct values are needed here for the animated progress bars
export const skills = [
  { name: "JavaScript", pct: 88 },
  { name: "React.js", pct: 85 },
  { name: "HTML & CSS", pct: 92 },
  { name: "Tailwind CSS", pct: 86 },
  { name: "Node.js", pct: 82 },
  { name: "Express.js", pct: 82 },
  { name: "PostgreSQL", pct: 78 },
  { name: "Prisma ORM", pct: 76 },
  { name: "MongoDB", pct: 74 },
];

export const skillTags = [
  "REST APIs",
  "JWT Auth",
  "Git & GitHub",
  "Postman",
  "Vercel",
  "Render",
  "Neon DB",
  "CRUD & Pagination",
  "Responsive Design",
  "API Integration",
  "Controllers & Middleware",
];

// ─── PROJECTS ─────────────────────────────────────────────────────────────────
export const projects = [
  {
    emoji: "📋",
    title: "Job Tracker SaaS",
    type: "Full Stack Application",
    typeCls: "bg-blue-100 text-blue-800",
    headCls: "from-blue-50 to-blue-100",
    desc: "A production-ready SaaS platform for tracking the entire job application lifecycle — with auth, dashboard, filters, and full CRUD. Deployed live on Vercel + Render.",
    features: [
      "JWT authentication with protected routes",
      "REST APIs — CRUD, filtering, search & pagination",
      "PostgreSQL + Prisma ORM with controllers & middleware",
      "Responsive dashboard UI with React + Tailwind CSS",
      "Deployed: Vercel (frontend) + Render (backend)",
    ],
    stack: [
      "React",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Prisma",
      "JWT",
      "Tailwind",
    ],
    github: "https://github.com/Saikiran-Srichurnam/job_tracker_saas",
    live: "https://job-tracker-saas-dusky.vercel.app/",
  },
  {
    emoji: "🌤️",
    title: "Weather Forecast App",
    type: "Frontend Application",
    typeCls: "bg-green-100 text-green-800",
    headCls: "from-green-50 to-green-100",
    desc: "A sleek real-time weather dashboard that fetches live data for any city worldwide using the OpenWeather API — fully responsive and deployed live.",
    features: [
      "OpenWeather API integration for real-time data",
      "Dynamic UI rendering based on weather conditions",
      "Robust error handling for invalid city queries",
      "Responsive design with Tailwind CSS",
      "Deployed live on Vercel",
    ],
    stack: ["JavaScript", "Tailwind CSS", "OpenWeather API", "HTML"],
    github: "https://github.com/Saikiran-Srichurnam/Weather-App",
    live: "https://weather-app-nnui.vercel.app/",
  },
  {
    emoji: "✅",
    title: "Task Manager App",
    type: "React Application",
    typeCls: "bg-purple-100 text-purple-800",
    headCls: "from-purple-50 to-purple-100",
    desc: "A clean, fully functional CRUD-based task manager built with React.js. Tasks persist across sessions using local storage — no backend needed.",
    features: [
      "Full CRUD — create, read, update, delete tasks",
      "Local storage persistence across page refreshes",
      "Dynamic UI updates without page reload",
      "Minimal and responsive design",
    ],
    stack: ["React.js", "JavaScript", "Local Storage", "CSS"],
    github: "https://github.com/Saikiran-Srichurnam",
    live: "https://todo-app-five-plum-55.vercel.app/",
  },
];

// ─── EXPERIENCE / TIMELINE ────────────────────────────────────────────────────
export const timeline = [
  {
    role: "Web Developer Intern",
    date: "07/2025 – 01/2026",
    org: "🏢 Sandblaze Digitals · Hyderabad, India",
    filled: true,
    points: [
      "Developed responsive frontend interfaces using React.js, HTML, CSS, and JavaScript",
      "Assisted in testing, debugging, and deployment support across live projects",
      "Collaborated with senior developers for requirement analysis and feature implementation",
      "Improved UI responsiveness and usability across multiple production web pages",
    ],
  },
  {
    role: "Web Development Intern",
    date: "12/2024 – 01/2025",
    org: "🖥️ CodSoft Internship",
    filled: true,
    points: [
      "Built responsive UI applications using HTML, CSS, and JavaScript",
      "Developed small frontend projects and practiced responsive design principles",
      "Earned certification upon successful completion of all projects",
    ],
  },
  {
    role: "B.Tech – CSE (Data Science)",
    date: "2021 – May 2025",
    org: "🎓 Malla Reddy Institute of Engineering and Technology · CGPA: 8.1",
    filled: false,
    points: [
      "Specialization in Data Science alongside full-stack web development",
      "Studied Data Structures & Algorithms, DBMS, Software Engineering, and OS",
      "Built and deployed 3 real-world projects independently during college years",
      "Completed 2 industry internships while maintaining a strong academic record",
    ],
  },
];
