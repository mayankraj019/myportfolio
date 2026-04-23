export const personalInfo = {
  name: "Mayank Raj",
  role: "Software Engineer",
  roles: ["Full Stack Developer", "AI Enthusiast", "Problem Solver"],
  tagline: "Building scalable AI-powered applications that solve real-world problems",
  email: "mayankrafiganj19@gmail.com",
  phone: "+91-9771919191",
};

export const socialLinks = [
  { label: "GitHub", url: "https://github.com/mayankraj019", icon: "github" },
  { label: "LinkedIn", url: "https://www.linkedin.com/in/mayank-raj-8b1bb8283", icon: "linkedin" },
  { label: "LeetCode", url: "https://leetcode.com/u/mayankjcode/", icon: "leetcode" },
  { label: "CodeChef", url: "https://www.codechef.com/users/mayankraj019", icon: "codechef" },
];

export const skills = {
  Languages: [
    { name: "C", level: 85 },
    { name: "C++", level: 88 },
    { name: "JavaScript", level: 92 },
    { name: "TypeScript", level: 88 },
    { name: "Python", level: 90 },
    { name: "SQL", level: 82 },
  ],
  Frontend: [
    { name: "HTML/CSS", level: 95 },
    { name: "React.js", level: 92 },
    { name: "Next.js", level: 88 },
    { name: "Bootstrap", level: 80 },
    { name: "Flutter", level: 72 },
  ],
  Backend: [
    { name: "Node.js", level: 88 },
    { name: "Express.js", level: 85 },
    { name: "REST APIs", level: 90 },
  ],
  "DB & Cloud": [
    { name: "MongoDB", level: 85 },
    { name: "MySQL", level: 82 },
    { name: "Firebase", level: 78 },
    { name: "AWS", level: 70 },
  ],
  Tools: [
    { name: "Git", level: 92 },
    { name: "GitHub", level: 92 },
    { name: "Linux", level: 78 },
  ],
};

export const projects = [
  {
    id: 1,
    title: "Handverse",
    subtitle: "Real-Time Hand Gesture Recognition",
    description:
      "A cutting-edge real-time hand gesture recognition system achieving 95% accuracy at 25–30 FPS with ultra-low latency under 50ms. Built using computer vision and ML pipelines.",
    image: "/handverse.png",
    tech: ["Python", "OpenCV", "MediaPipe", "NumPy"],
    stats: [
      { label: "Accuracy", value: "95%" },
      { label: "FPS", value: "25–30" },
      { label: "Latency", value: "<50ms" },
    ],
    github: "https://github.com/mayankraj019",
    demo: null,
    color: "#6366f1",
  },
  {
    id: 2,
    title: "Planora",
    subtitle: "AI-Powered Trip Planner",
    description:
      "An intelligent travel planning platform powered by Google Gemini AI. Generates full itineraries in under 3 seconds with restaurant picks, budget planning, and map integration, reducing planning effort by ~80%.",
    image: "/planora.png",
    tech: ["Next.js", "TypeScript", "Google Gemini", "Tailwind CSS"],
    stats: [
      { label: "Generation", value: "<3s" },
      { label: "Effort Saved", value: "80%" },
      { label: "Features", value: "4+" },
    ],
    github: "https://github.com/mayankraj019",
    demo: null,
    color: "#8b5cf6",
  },
];

export const experience = [
  {
    company: "Pregrad",
    role: "Campus Ambassador",
    period: "2024",
    type: "internship",
    points: [
      "Promoted Pregrad programs across campus communities",
      "Increased student participation in tech upskilling programs",
      "Collaborated with marketing teams for campaign execution",
      "Built and nurtured a strong student network of 100+ peers",
    ],
  },
];

export const leadership = [
  {
    org: "AI Nexus",
    role: "Technical Workshop Lead",
    period: "2024",
    points: [
      "Conducted hands-on AI/ML workshops for 150+ students",
      "Mentored junior developers in Python and ML fundamentals",
      "Designed workshop curriculum from scratch",
    ],
  },
];

export const achievements = [
  {
    title: "Smart India Hackathon",
    description: "Participant in one of India's largest national hackathons",
    icon: "trophy",
    color: "#f59e0b",
  },
  {
    title: "MHT CET 99.95 Percentile",
    description: "Top 0.05% in Maharashtra's state engineering entrance exam",
    icon: "star",
    color: "#6366f1",
  },
  {
    title: "ML Certifications",
    description: "Machine Learning certifications from NIT Goa",
    icon: "certificate",
    color: "#8b5cf6",
  },
];

export const education = [
  {
    institution: "MIT World Peace University",
    degree: "B.Tech Computer Science",
    period: "2023 – 2027",
    location: "Pune, Maharashtra",
  },
];
