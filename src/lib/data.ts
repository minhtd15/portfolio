export const personalInfo = {
  name: "Tống Đức Minh",
  title: "Management Associate",
  tagline: "Building scalable systems and exceptional digital experiences.",
  bio: "I'm a software engineer and Management Associate based in Hanoi, Vietnam. I spent nearly 3 years at Techcom Securities building fintech systems — from TCInvest's backend features to Vietnam's first crypto trading platform TCEX. I'm passionate about clean architecture, financial technology, and bridging engineering with business impact.",
  email: "ducminhtong1510@gmail.com",
  github: "https://github.com/minhtd15",
  linkedin: "https://www.linkedin.com/in/%C4%91%E1%BB%A9c-minh-t%E1%BB%91ng-006972219/",
  location: "Hanoi, Vietnam",
};

export const skills = [
  {
    category: "Backend",
    icon: "⚡",
    description: "Robust, scalable server-side systems built for production.",
    items: ["Go", "Node.js", "Python", "REST APIs", "gRPC", "WebSocket"],
  },
  {
    category: "Frontend",
    icon: "✦",
    description: "Beautiful, performant interfaces with modern tooling.",
    items: ["React", "Next.js", "TypeScript", "TailwindCSS", "Framer Motion"],
  },
  {
    category: "Databases",
    icon: "◈",
    description: "Efficient data modelling and storage strategies.",
    items: ["MySQL", "PostgreSQL", "Redis", "MongoDB"],
  },
  {
    category: "DevOps & Cloud",
    icon: "☁",
    description: "Cloud-native deployments and infrastructure automation.",
    items: ["Docker", "Kubernetes", "AWS", "CI/CD", "Linux"],
  },
];

export const projects = [
  {
    id: 1,
    title: "EduFlow Platform",
    description:
      "Comprehensive education management system — student enrollment, course scheduling, attendance tracking, and salary management serving thousands of users daily.",
    tech: ["Go", "React", "MySQL", "Redis", "Docker", "RabbitMQ"],
    github: "https://github.com/minhtd15",
    demo: null,
    featured: true,
    accentColor: "#00e5ff",
    gradientFrom: "from-cyan-500/15",
    gradientTo: "to-blue-600/10",
    borderColor: "border-cyan-500/20",
    glowColor: "rgba(0,229,255,0.15)",
  },
  {
    id: 2,
    title: "DataSync API",
    description:
      "Real-time data synchronisation service with WebSocket support, enabling live updates across distributed systems with sub-millisecond latency and guaranteed delivery.",
    tech: ["Node.js", "WebSocket", "Redis", "PostgreSQL", "TypeScript"],
    github: "https://github.com/minhtd15",
    demo: "#",
    featured: true,
    accentColor: "#ff0080",
    gradientFrom: "from-pink-600/15",
    gradientTo: "to-violet-600/10",
    borderColor: "border-pink-500/20",
    glowColor: "rgba(255,0,128,0.15)",
  },
  {
    id: 3,
    title: "CloudDeploy Dashboard",
    description:
      "Visual Kubernetes deployment dashboard with real-time cluster monitoring, one-click rollbacks, canary deployments, and automated scaling controls.",
    tech: ["Next.js", "TypeScript", "Docker", "Kubernetes", "Go"],
    github: "https://github.com/minhtd15",
    demo: "#",
    featured: false,
    accentColor: "#00ff87",
    gradientFrom: "from-green-500/15",
    gradientTo: "to-teal-600/10",
    borderColor: "border-green-400/20",
    glowColor: "rgba(0,255,135,0.15)",
  },
  {
    id: 4,
    title: "AuthForge",
    description:
      "Enterprise-grade authentication microservice supporting JWT, OAuth 2.0, and API key management with rate limiting, RBAC, and full audit logging.",
    tech: ["Go", "JWT", "Redis", "PostgreSQL", "gRPC"],
    github: "https://github.com/minhtd15",
    demo: null,
    featured: false,
    accentColor: "#9900ff",
    gradientFrom: "from-violet-600/15",
    gradientTo: "to-purple-800/10",
    borderColor: "border-violet-500/20",
    glowColor: "rgba(153,0,255,0.15)",
  },
];

export const experiences = [
  {
    id: 1,
    role: "Management Associate",
    company: "Techcombank (TCB)",
    period: "Jan 2026 — Present",
    description:
      "Full-time, on-site role at Techcombank — one of Vietnam's leading private banks. Joining the Management Associate programme, working across business and technology functions within the Techcom ecosystem.",
    tech: ["Banking", "Fintech", "Management"],
    current: true,
  },
  {
    id: 2,
    role: "Junior Software Engineer",
    company: "Techcom Securities",
    period: "Jun 2025 — Jan 2026",
    description:
      "Participated in the development of TCEX, one of the first cryptocurrency trading platforms in Vietnam, contributing to core features of digital asset exchange. Gained comprehensive knowledge of blockchain fundamentals covering network design, smart contracts, and digital asset standards.",
    tech: ["Go", "Blockchain", "Smart Contracts", "Crypto Systems"],
    current: false,
  },
  {
    id: 3,
    role: "Associate Software Engineer",
    company: "Techcom Securities",
    period: "Jun 2024 — May 2025",
    description:
      "Contributed to a management system for Debt Capital Market (DCM) operations, supporting consulting and issuance processes of corporate bonds. Participated in the iOptima project at WealthTech, focusing on innovative equity-related products and advanced wealth management systems.",
    tech: ["Go", "Java", "WealthTech", "Fintech", "DCM"],
    current: false,
  },
  {
    id: 4,
    role: "Software Engineer Intern",
    company: "Techcom Securities",
    period: "Feb 2023 — Jun 2024",
    description:
      "Participated in the iXu project within the TCInvest application, contributing to the development of backend features for Techcom Securities. Strengthened foundational programming skills and gained practical experience building real-world financial systems.",
    tech: ["Go", "Java", "TCInvest", "Backend", "Fintech"],
    current: false,
  },
];

export const techStack = [
  { name: "Go", color: "#00ADD8" },
  { name: "TypeScript", color: "#3178C6" },
  { name: "JavaScript", color: "#F7DF1E" },
  { name: "Python", color: "#3776AB" },
  { name: "React", color: "#61DAFB" },
  { name: "Next.js", color: "#ffffff" },
  { name: "Node.js", color: "#339933" },
  { name: "TailwindCSS", color: "#06B6D4" },
  { name: "MySQL", color: "#4479A1" },
  { name: "PostgreSQL", color: "#336791" },
  { name: "Redis", color: "#DC382D" },
  { name: "MongoDB", color: "#47A248" },
  { name: "Docker", color: "#2496ED" },
  { name: "Kubernetes", color: "#326CE5" },
  { name: "AWS", color: "#FF9900" },
  { name: "Linux", color: "#FCC624" },
  { name: "Git", color: "#F05032" },
  { name: "GraphQL", color: "#E10098" },
];
