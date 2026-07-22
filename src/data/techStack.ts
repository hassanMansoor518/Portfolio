export type TechCategory = "Frontend" | "Backend" | "Database" | "Tools" | "Concepts";

export interface TechItem {
  name: string;
  icon: string; // Used for generic icon mapping if needed, otherwise name is used
  category: TechCategory;
  color: string;
}

export const techCategories: TechCategory[] = [
  "Frontend",
  "Backend",
  "Database",
  "Tools",
  "Concepts",
];

export const techStack: TechItem[] = [
  // Frontend
  { name: "HTML5", icon: "html5", category: "Frontend", color: "#E34F26" },
  { name: "CSS3", icon: "css3", category: "Frontend", color: "#1572B6" },
  { name: "JavaScript", icon: "javascript", category: "Frontend", color: "#F7DF1E" },
  { name: "TypeScript", icon: "typescript", category: "Frontend", color: "#3178C6" },
  { name: "React.js", icon: "react", category: "Frontend", color: "#61DAFB" },
  { name: "Next.js", icon: "nextjs", category: "Frontend", color: "#000000" },
  { name: "Tailwind CSS", icon: "tailwind", category: "Frontend", color: "#06B6D4" },
  { name: "Redux", icon: "redux", category: "Frontend", color: "#764ABC" },
  { name: "React Router", icon: "reactrouter", category: "Frontend", color: "#CA4245" },


  // Backend
  { name: "Node.js", icon: "nodejs", category: "Backend", color: "#339933" },
  { name: "Express.js", icon: "express", category: "Backend", color: "#000000" },

  // Database
  { name: "MongoDB", icon: "mongodb", category: "Database", color: "#47A248" },
  { name: "Mongoose ODM", icon: "mongoose", category: "Database", color: "#880000" },
  { name: "Supabase", icon: "supabase", category: "Database", color: "#3ECF8E" },
  { name: "MySQL", icon: "mysql", category: "Database", color: "#4479A1" },
  { name: "Firebase", icon: "firebase", category: "Database", color: "#FFCA28" },

  // Tools
  { name: "Git", icon: "git", category: "Tools", color: "#F05032" },
  { name: "GitHub", icon: "github", category: "Tools", color: "#181717" },
  { name: "VS Code", icon: "vscode", category: "Tools", color: "#007ACC" },
  { name: "Postman", icon: "postman", category: "Tools", color: "#FF6C37" },
  { name: "npm", icon: "npm", category: "Tools", color: "#CB3837" },
  { name: "Vercel", icon: "vercel", category: "Tools", color: "#000000" },

  // Concepts
  { name: "REST APIs", icon: "code", category: "Concepts", color: "#555555" },
  { name: "JWT Auth", icon: "lock", category: "Concepts", color: "#000000" },
  { name: "MVC Architecture", icon: "layers", category: "Concepts", color: "#005571" },
  { name: "Component-Based UI", icon: "layout", category: "Concepts", color: "#61DAFB" },
  { name: "Mobile-First Design", icon: "smartphone", category: "Concepts", color: "#1572B6" },
  { name: "State Management", icon: "database", category: "Concepts", color: "#764ABC" },
  { name: "Figma-to-Code", icon: "figma", category: "Concepts", color: "#F24E1E" },
];
