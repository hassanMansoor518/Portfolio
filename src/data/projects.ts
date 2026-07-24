export type ProjectCategory = "All" | "SaaS" | "Full Stack" | "Web Apps";

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  description: string;
  features?: string[];
  image: string;
  stack: string[];
  liveUrl: string;
  githubUrl: string;
}

export const projectCategories: ProjectCategory[] = [
  "All",
  "SaaS",
  "Full Stack",
  "Web Apps",
];

export const projects: Project[] = [
  {
    id: "devcollab",
    title: "DevCollab",
    category: "Full Stack",
    description: "AI-Powered Collaborative Development Platform enabling teams to manage projects, track commits, and communicate in real time.",
    features: [
      "GitHub OAuth integration for commit-timeline visualization",
      "AI-powered code analysis with one-click Quick Fix refactoring",
      "Real-time workspace chat with AI-assisted messaging",
      "WebRTC audio/video calls for team collaboration",
    ],
    image: "/projects/project1.png", // Keeping dummy image path for now, user can replace later
    stack: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    liveUrl: "https://dev-collab-quzpx6aqi-hassanmansoor518-gmailcoms-projects.vercel.app",
    githubUrl: "https://github.com/hassanMansoor518/DevCollab",
  },
  {
    id: "supportpilot",
    title: "SupportPilot",
    category: "SaaS",
    description: "AI-Powered Customer Support SaaS Platform letting businesses configure and embed AI chat widgets via a single script tag.",
    features: [
      "Lightweight, dependency-free vanilla JS embeddable chat widget",
      "Chatbot playground for prompt testing and conversational context management",
      "Billing module for subscription plan management via usage tracking",
    ],
    image: "/projects/project2.png",
    stack: ["Next.js 15", "MongoDB", "NextAuth.js", "Google Gemini API"],
    liveUrl: "https://supportpilot-lilac.vercel.app",
    githubUrl: "https://github.com/hassanMansoor518/supportpilot",
  },
  {
    id: "food-delivery",
    title: "Reel-Style Food Delivery App",
    category: "Web Apps",
    description: "A scalable MERN food delivery platform with vertical reel-scroll (TikTok-style) UI with infinite scrolling.",
    features: [
      "15+ REST API endpoints for user, restaurant, and admin roles",
      "JWT-based authentication and secure session management",
      "Vertical reel-scroll UI with infinite scrolling responsive food cards",
    ],
    image: "/projects/project3.png",
    stack: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "JWT"],
    liveUrl: "https://reel-style-food-delivery-cmeg.vercel.app",
    githubUrl: "https://github.com/hassanMansoor518/Reel-Style-Food-Delivery-",
  },
];
