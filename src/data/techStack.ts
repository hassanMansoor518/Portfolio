export type TechCategory = "Frontend" | "Backend" | "Database" | "Tools & Others";

export interface TechItem {
  name: string;
  icon: string;
  category: TechCategory;
  color: string;
}

export const techCategories: TechCategory[] = [
  "Frontend",
  "Backend",
  "Database",
  "Tools & Others",
];

export const techStack: TechItem[] = [
  // Frontend
  { name: "React.js", icon: "react", category: "Frontend", color: "#61DAFB" },
  { name: "Next.js", icon: "nextjs", category: "Frontend", color: "#000000" },
  { name: "TypeScript", icon: "typescript", category: "Frontend", color: "#3178C6" },
  { name: "JavaScript", icon: "javascript", category: "Frontend", color: "#F7DF1E" },
  { name: "Tailwind CSS", icon: "tailwind", category: "Frontend", color: "#06B6D4" },
  { name: "Shadcn UI", icon: "shadcn", category: "Frontend", color: "#000000" },
  { name: "Redux", icon: "redux", category: "Frontend", color: "#764ABC" },
  { name: "HTML5", icon: "html5", category: "Frontend", color: "#E34F26" },
  { name: "CSS3", icon: "css3", category: "Frontend", color: "#1572B6" },
  // Backend
  { name: "Node.js", icon: "nodejs", category: "Backend", color: "#339933" },
  { name: "Express.js", icon: "express", category: "Backend", color: "#000000" },
  { name: "Nest.js", icon: "nestjs", category: "Backend", color: "#E0234E" },
  // Database
  { name: "MongoDB", icon: "mongodb", category: "Database", color: "#47A248" },
  { name: "PostgreSQL", icon: "postgresql", category: "Database", color: "#336791" },
  { name: "MySQL", icon: "mysql", category: "Database", color: "#4479A1" },
  { name: "Firebase", icon: "firebase", category: "Database", color: "#FFCA28" },
  // Tools & Others
  { name: "Git", icon: "git", category: "Tools & Others", color: "#F05032" },
  { name: "GitHub", icon: "github", category: "Tools & Others", color: "#181717" },
  { name: "Docker", icon: "docker", category: "Tools & Others", color: "#2496ED" },
  { name: "Postman", icon: "postman", category: "Tools & Others", color: "#FF6C37" },
  { name: "VS Code", icon: "vscode", category: "Tools & Others", color: "#007ACC" },
  { name: "Figma", icon: "figma", category: "Tools & Others", color: "#F24E1E" },
  { name: "Vercel", icon: "vercel", category: "Tools & Others", color: "#000000" },
];
