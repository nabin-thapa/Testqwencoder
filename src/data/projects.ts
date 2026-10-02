export type ProjectStatus = "Active Development" | "Completed / Project" | "Academic / Learning Project";
export type ProjectCategory = "Web" | "Mobile" | "AI" | "Backend";

export interface Project {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  problem: string;
  solution: string;
  features: string[];
  technologies: string[];
  categories: ProjectCategory[];
  status: ProjectStatus;
  github: string;
  demo: string | null;
  image: string;
}

export const projects: Project[] = [
  {
    id: "nepali-tts",
    name: "Nepali TTS",
    description: "A local Nepali text-to-speech web application designed to convert Nepali text into natural-sounding speech using locally available models and processing.",
    longDescription: "Nepali TTS is a web application that provides text-to-speech functionality specifically designed for the Nepali language. It uses local AI models to process and generate speech, making it accessible without requiring internet connectivity for the core processing.",
    problem: "Most text-to-speech solutions lack good support for Nepali language, and existing solutions often require cloud connectivity or don't produce natural-sounding output.",
    solution: "Built a local-first TTS system using FastAPI backend with locally available models, providing a clean web interface for input, voice selection, and audio playback/download.",
    features: [
      "Nepali text input with normalization",
      "Voice selection options",
      "Audio generation using local models",
      "Audio playback in browser",
      "Audio download functionality",
      "Text normalization pipeline",
      "Local model processing (no cloud required)",
      "REST API backend",
      "Clean web interface"
    ],
    technologies: ["Python", "FastAPI", "JavaScript", "HTML", "CSS", "TTS", "Local AI Models"],
    categories: ["Web", "AI", "Backend"],
    status: "Active Development",
    github: "https://github.com/nabin-thapa/nepali-tts",
    demo: null,
    image: ""
  },
  {
    id: "milk-hisab",
    name: "Milk Hisab",
    description: "A native Android application designed to manage milk records and calculations for dairy management.",
    longDescription: "Milk Hisab is a native Android application built with modern Android development practices. It provides a complete solution for managing milk records, customer data, daily entries, and automatic calculations.",
    problem: "Manual milk record keeping is error-prone and time-consuming. Small dairy businesses need a simple, offline-capable tool to manage their daily records.",
    solution: "Built a native Android app using Jetpack Compose and Material 3 design, with Room database for local storage and MVVM architecture for clean code organization.",
    features: [
      "Milk record management",
      "Customer data management",
      "Daily record entries",
      "Automatic calculations",
      "Local database with Room",
      "Material 3 native interface",
      "Offline-first architecture",
      "MVVM with clean architecture"
    ],
    technologies: ["Kotlin", "Jetpack Compose", "Material 3", "Room", "MVVM", "ViewModel", "Repository", "Coroutines", "Flow"],
    categories: ["Mobile"],
    status: "Completed / Project",
    github: "https://github.com/nabin-thapa/milk-hisab",
    demo: null,
    image: ""
  },
  {
    id: "vidyodaya-website",
    name: "Vidyodaya Shishu Sadan Website",
    description: "A responsive school website presenting school information, services, notices, activities, and contact information through a modern web interface.",
    longDescription: "A complete school website designed to present all essential information about Vidyodaya Shishu Sadan in a clean, accessible, and responsive format. The website serves as the digital presence of the school.",
    problem: "The school needed an online presence to share information with parents, students, and the community in an accessible format.",
    solution: "Created a responsive website with clear navigation, organized content sections, and a modern design that works across all devices.",
    features: [
      "Fully responsive design",
      "School information pages",
      "Modern UI with clean navigation",
      "Notice and activity sections",
      "Contact information display",
      "Mobile-friendly layout",
      "Fast loading times"
    ],
    technologies: ["HTML", "CSS", "JavaScript"],
    categories: ["Web"],
    status: "Completed / Project",
    github: "https://github.com/nabin-thapa/vidyodaya-shishu-sadan",
    demo: null,
    image: ""
  },
  {
    id: "fresh-fruit-shop",
    name: "Fresh Fruit Shop",
    description: "A web-based fruit shop project exploring product management, database connectivity, and basic e-commerce functionality.",
    longDescription: "Fresh Fruit Shop is a learning project that explores the fundamentals of web application development with database connectivity. It demonstrates product management, user interaction, and basic e-commerce patterns.",
    problem: "Needed a practical project to learn PHP, MySQL integration, and web application architecture patterns.",
    solution: "Built a complete web application with product catalog, database management, and user-facing interface using PHP and MySQL.",
    features: [
      "Product catalog management",
      "Database connectivity with MySQL",
      "User interface for browsing products",
      "Basic e-commerce functionality",
      "Admin product management",
      "Responsive design"
    ],
    technologies: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    categories: ["Web", "Backend"],
    status: "Academic / Learning Project",
    github: "https://github.com/nabin-thapa/fresh-fruit-shop",
    demo: null,
    image: ""
  },
  {
    id: "optical-ledger",
    name: "Optical Ledger",
    description: "A database-driven project for managing optical shop records and related business information.",
    longDescription: "Optical Ledger is a web-based management system designed to handle the record-keeping needs of an optical shop. It demonstrates database-driven application development with practical business logic.",
    problem: "Optical shops need systematic record management for customers, orders, and inventory.",
    solution: "Developed a PHP and MySQL-based application that handles shop records with a clean interface for data management.",
    features: [
      "Customer record management",
      "Order tracking",
      "Database-driven data storage",
      "Search and filter functionality",
      "Clean admin interface",
      "Data management tools"
    ],
    technologies: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    categories: ["Web", "Backend"],
    status: "Academic / Learning Project",
    github: "https://github.com/nabin-thapa/optical-ledger",
    demo: null,
    image: ""
  }
];
