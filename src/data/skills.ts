export interface SkillCategory {
  name: string;
  icon: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: "Languages",
    icon: "code",
    skills: ["Java", "JavaScript", "TypeScript", "Python", "HTML", "CSS", "SQL"]
  },
  {
    name: "Frameworks & Development",
    icon: "layers",
    skills: ["React", "Vite", "Android / Kotlin", "FastAPI", "Node.js", "REST APIs"]
  },
  {
    name: "Databases",
    icon: "database",
    skills: ["MySQL", "SQLite", "Room"]
  },
  {
    name: "Tools",
    icon: "wrench",
    skills: ["Git", "GitHub", "VS Code", "Android Studio", "AI Coding Tools"]
  },
  {
    name: "AI / Automation",
    icon: "brain",
    skills: ["Generative AI", "AI-Assisted Coding", "Text-to-Speech", "AI Automation", "Prompt Engineering"]
  }
];

export const journeyStages = [
  {
    title: "Foundation",
    description: "Started learning programming fundamentals and web development. Built first projects with HTML, CSS, and basic JavaScript.",
    icon: "seedling"
  },
  {
    title: "Application Development",
    description: "Worked with Java, PHP, MySQL, Android, and web technologies. Built complete applications with database connectivity.",
    icon: "code"
  },
  {
    title: "Full-Stack Exploration",
    description: "Started building applications involving APIs, databases, backend systems, and frontend interfaces. Explored modern frameworks.",
    icon: "layers"
  },
  {
    title: "AI Exploration",
    description: "Started experimenting with generative AI, AI-assisted development, local models, TTS, and automation tools.",
    icon: "brain"
  },
  {
    title: "Current Direction",
    description: "Building more complete software projects and learning system design, AI integration, and production-oriented development practices.",
    icon: "rocket"
  }
];
