export const personalInfo = {
  name: "Sourjyatipta Das",
  role: "Full-Stack Developer",
  status: "Available for Full-Time Roles & Internships",
  education: "Computer Science & Engineering (B.Tech)",
  university: "Brainware University",
  location: "Kolkata, West Bengal, India",
  email: "sourjyatiptadas70@gmail.com",
  github: " https://github.com/sourjya-dipta-das",
  linkedin:"https://www.linkedin.com/in/sourjyadipta-das-b8933729a/",
  bio: "Passionate Computer Science & Engineering student and Full-Stack Developer specializing in modern MERN stack applications, RESTful API architecture, and database management. Driven by clean code, structured problem solving, and building scalable web solutions for real-world impact.",
  heroSummary: "CSE Student & Full-Stack Developer crafting efficient web applications with React, Node.js, Express, and MongoDB. Focused on clean architecture and high-performance user experiences.",
  stats: [
    { label: "Full-Stack Projects", value: "2+" },
    { label: "Tech Stack Mastered",  },
    { label: "DSA & Problem Solving", },
    { label: "Degree Progress", value: "B.Tech CSE" }
  ]
};

export const skillsData = [
  {
    category: "Frontend Development",
    skills: [
      { name: "HTML5", level: 95, icon: "Code2" },
      { name: "CSS3", level: 90, icon: "Palette" },
      { name: "JavaScript (ES6+)", level: 88, icon: "FileJson" },
      { name: "React.js", level: 85, icon: "Atom" }
    ]
  },
  {
    category: "Backend Development",
    skills: [
      { name: "Node.js", level: 82, icon: "Server" },
      { name: "Express.js",level: 85, icon: "Cpu" },
      { name: "REST APIs",}
    ]
  },
  {
    category: "Database & Storage",
    skills: [
      { name: "MongoDB", icon: "Database" },
      { name: "SQL ", }
    ]
  },
  {
    category: "Programming Languages",
    skills: [
      { name: "C",  },
      { name: "Python", },
      { name: "Java", },
      { name: "JavaScript",  }
    ]
  },
  {
    category: "Tools & Version Control",
    skills: [
      { name: "Git & GitHub", },
      { name: "VS Code", },
      { name: "Postman", },
      { name: "npm / Vite",  }
    ]
  }
];

export const projectsData = [
  {
    id: "realtime-chat",
    name: "Real-Time Chat Application",
    shortDesc: "A high-performance messaging app built with Socket.io and React, featuring real-time room communication, online presence, and JWT authentication.",
    fullDesc: "Designed and implemented a full-stack real-time messaging application allowing users to join dedicated chat rooms, exchange instant messages, receive live typing indicators, and track online users. Implemented secure token-based authentication with bcrypt password hashing and MongoDB persistence.",
    category: "Full-Stack",
    techStack: ["React.js", "Node.js", "Express.js", "Socket.io", "MongoDB", "JWT", "Vanilla CSS"],
    githubUrl: "https://github.com/sourjya-dipta-das/real-time-chat-bot.git",
    liveDemoUrl: "https://real-time-chat-bot-1euo.onrender.com/",
    featured: true,
    highlights: [
      "Instant WebSocket bi-directional messaging with zero page reloads",
      "User authentication & session management using JSON Web Tokens",
      "Responsive glassmorphic UI optimized for desktop and mobile devices",
      "MongoDB database schemas for message persistence and channel history"
    ]
  },
  
  {
    id: "jeweller-billing",
    name: "Top Jewellers Billing & Invoice System",
    shortDesc: "Personalized desktop/web billing and inventory software tailored for jewelry businesses, calculating gold/silver rates, GST, and instant PDF invoice generation.",
    fullDesc: "Engineered a specialized commercial billing utility for retail jewelry shops. Features live market gold rate dynamic pricing inputs, automatic making-charge & GST tax calculations, customer transaction ledgers, and one-click printable PDF invoice output.",
    category: "Web App / Tool",
    techStack: ["JavaScript", "HTML5", "CSS3", "Node.js", "Express", "PDFKit / jsPDF"],
    githubUrl: "https://github.com/sourjya-dipta-das/top-jweelar.git",
    liveDemoUrl:  "https://top-jweelar.vercel.app/",
    featured: true,
    highlights: [
      "Custom invoice generator with instant tax & making charge calculation engine",
      "Print-ready invoice layout with shop branding, item breakdown, and QR code",
      "Local storage & MongoDB ledger backup for transaction history review",
      "Intuitive fast-entry UI designed for quick counter operations"
    ]
  },

];

export const educationData = [
  {
    institution: "Brainware University",
    degree: "B.Tech in Computer Science & Engineering (CSE)",
    location: "Kolkata, West Bengal, India",
    period: "2022 - Present",
    status: "Currently Pursuing",
    description: "Focusing on Core Computer Science subjects including Data Structures & Algorithms, Object-Oriented Programming, Database Management Systems, Computer Networks, and Software Engineering Principles.",
    achievements: [
      "Active participant in technical workshops and coding club events",
      "Consistently maintaining strong academic standing in programming practicals",
      "Specialized coursework in Full-Stack Web Development and Database Architecture"
    ]
  }
];

export const journeyTimeline = [
  {
    year: "2022",
    title: "Started B.Tech CSE Journey",
    subtitle: "Brainware University, Kolkata",
    description: "Began my undergraduate computer science education. Mastered fundamentals of programming in C/C++ and object-oriented concepts with Java."
  },
  {
    year: "2023",
    title: "Deep Dive into Web Engineering",
    subtitle: "HTML5, CSS3, JavaScript & Data Structures",
    description: "Built foundational web projects, focused heavily on JavaScript ES6+, DOM manipulation, and solving algorithmic problems in C++ and Python."
  },
  {
    year: "2024",
    title: "MERN Stack & Full-Stack Mastery",
    subtitle: "React.js, Node.js, Express & MongoDB",
    description: "Expanded into full-stack development. Engineered real-time chat applications, REST APIs, database schemas, and business management tools."
  },
  {
    year: "Present",
    title: "Building & Preparing for Career",
    subtitle: "Full-Stack Developer & CSE Student",
    description: "Actively developing production-ready web applications, contributing to projects, refining system design skills, and seeking software development engineering (SDE) roles."
  }
];

export const githubActivityData = {
  username: "sourjyatiptadas",
  contributionsThisYear: 432,
  topLanguages: ["JavaScript", "C++", "HTML/CSS", "Python", "Java"],
  recentCommits: [
    { repo: "realtime-chat-app", msg: "Refactor socket event listeners and room state handling", date: "2 days ago" },
    { repo: "student-info-system", msg: "Add multi-criteria search and pagination endpoints", date: "4 days ago" },
    { repo: "jewellers-billing-system", msg: "Optimize invoice print layout and GST calculation logic", date: "1 week ago" },
    { repo: "personal-portfolio", msg: "Initial commit of full-stack developer portfolio", date: "Just now" }
  ]
};
