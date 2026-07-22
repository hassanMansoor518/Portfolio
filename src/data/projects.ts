export type ProjectCategory = "All" | "AI" | "Web Apps" | "SaaS" | "Dashboard" | "E-Commerce";

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  description: string;
  image: string;
  stack: string[];
  liveUrl: string;
  githubUrl: string;
}

export const projectCategories: ProjectCategory[] = [
  "All",
  "AI",
  "Web Apps",
  "SaaS",
  "Dashboard",
  "E-Commerce",
];

export const projects: Project[] = [
  {
    id: "ai-chatbot-saas",
    title: "AI Chatbot SaaS",
    category: "AI",
    description:
      "AI chatbot platform with authentication, subscriptions, analytics, usage tracking, and embeddable widgets.",
    image: "/projects/chatbot.png",
    stack: ["Next.js", "TypeScript", "MongoDB", "Stripe", "Socket.io"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: "ecommerce-store",
    title: "E-Commerce Store",
    category: "E-Commerce",
    description:
      "Full-stack ecommerce platform with authentication, payments, shopping cart, admin dashboard, and order management.",
    image: "/projects/ecommerce.png",
    stack: ["Next.js", "Node.js", "MongoDB", "Stripe", "Cloudinary"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: "task-management-app",
    title: "Task Management App",
    category: "Dashboard",
    description:
      "Collaborative task management application with real-time updates, Kanban boards, teams, notifications, and advanced filtering.",
    image: "/projects/taskmanager.png",
    stack: ["React", "Node.js", "Socket.io", "Tailwind CSS", "MongoDB"],
    liveUrl: "#",
    githubUrl: "#",
  },
];
