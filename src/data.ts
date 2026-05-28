import { Project, WorkExperience, Service, Testimonial, AccentOption, Certification } from './types';

export const projectsData: Project[] = [
  {
    id: 'proj-1',
    number: '01',
    category: 'Web',
    title: 'MeghVaani — Weather Hub',
    subtitle: 'Real-time Weather Forecast & Geolocation',
    description: 'Designed and engineered a highly responsive weather forecasting web hub. Integrates browser Geolocation APIs for automatic current location weather detection and maps down a 5-day atmospheric forecast querying OpenWeatherMap. Implemented with smooth layouts and interactive custom micro-interactions.',
    technologies: ['React', 'JavaScript', 'Tailwind CSS', 'OpenWeatherMap API', 'Framer Motion', 'Git', 'HTML5', 'CSS3'],
    url: 'https://amanprincek.github.io/MeghVaani/'
  },
  {
    id: 'proj-2',
    number: '02',
    category: 'Web',
    title: 'GenAI Tool Simulator',
    subtitle: 'Vertex AI Studio Text Generator via Google Colab',
    description: 'An interactive Generative AI application and experimental dashboard. Demonstrates how prompt engineering parameters, specifically temperature values, influence the determinism, creativity, and variance of Google Cloud Vertex AI LLM text outputs. Built using Python environments.',
    technologies: ['Python', 'Google Colab', 'Google GenAI Studio', 'Vertex AI', 'Prompt Engineering', 'API Integrations'],
    url: '#'
  },
  {
    id: 'proj-3',
    number: '03',
    category: 'Design',
    title: 'Python Automation Suite',
    subtitle: 'Python-driven utilities, analytics and GUI programs',
    description: 'A comprehensive repository of custom Python applications. Includes Tkinter-based graphical calculative panels, localized dynamic utility engines, and mathematical statistical data analysis dashboards leveraging Pandas and Matplotlib.',
    technologies: ['Python', 'Matplotlib', 'Pandas', 'Tkinter', 'Standard GUI Libs'],
    url: '#'
  },
  {
    id: 'proj-4',
    number: '04',
    category: 'Design',
    title: 'MeghVaani Mobile Concept',
    subtitle: 'Android Weather Application concept with Core Java',
    description: 'A localized Android-adapted application designed with high-contrast screen formats, incorporating Core Java system design, local SQLite caches, and responsive XML frame transitions.',
    technologies: ['Android', 'Core Java', 'SQLite', 'XML Layouts', 'Figma'],
    url: '#'
  }
];

export const workExperienceData: WorkExperience[] = [
  {
    id: 'work-google-ambassador',
    type: 'experience',
    title: 'Google Ambassador',
    subtitle: 'Google Cloud Facilitator Program',
    year: '2025 - Present',
    description: 'Selected as Google Cloud Ambassador to advocate Generative AI and cloud engineering. Hosted interactive labs on prompt engineering, temperature parameters, and Google Cloud Studio tools for campus peers.'
  },
  {
    id: 'work-1',
    type: 'experience',
    title: 'Academic Exchange / Intern',
    subtitle: 'Universitat Rovira i Virgili (URV), Spain 🇪🇸',
    year: '2026',
    description: 'Selected for an international academic exchange at URV, Spain. Participated in intensive sessions centered on computer engineering, with a specialized focus on deep neural networks and generative Artificial Intelligence.'
  },
  {
    id: 'work-2',
    type: 'experience',
    title: 'Web & Android Development Intern',
    subtitle: 'Netcamp Solutions Private Limited',
    year: '2025',
    description: 'Completed hands-on web production and Android development training. Engineered localized utility products, gained professional knowledge on web server control, network management, and cybersecurity.'
  },
  {
    id: 'work-3',
    type: 'experience',
    title: 'Apprenticeship Trainee',
    subtitle: 'IBM Developer Skills Network',
    year: '2025',
    description: 'Engineered "MeghVaani", a high-performance weather forecast React web implementation integrated with browser geolocation APIs and OpenWeatherMap REST web services.'
  },
  {
    id: 'work-4',
    type: 'experience',
    title: 'Student Partner (ISP)',
    subtitle: 'Internshala',
    year: '2026',
    description: 'Selected for the student partnership program. Acting as primary liaison between campus students and professional platforms, encouraging peers to acquire technical skills and explore verified internships.'
  },
  {
    id: 'edu-1',
    type: 'education',
    title: 'B.Tech in Artificial Intelligence & Machine Learning',
    subtitle: 'UNITED COLLEGE OF ENGINEERING AND RESEARCH, Allahabad',
    year: '2024 - Present',
    description: 'Acquiring knowledge in Artificial Intelligence, Computer Engineering, Data Structures, Python, Web Technologies and Algorithms. Member of Team Ragnarok.'
  },
  {
    id: 'edu-2',
    type: 'education',
    title: 'High School & Intermediate (Computer Science)',
    subtitle: 'D.A.V. Public School, India',
    year: '2024 Graduated',
    description: 'Gained solid foundational training in Mathematics, Physics, Chemistry, and Object-Oriented Computer Programming.'
  }
];

export const servicesData: Service[] = [
  {
    id: 'serv-1',
    title: 'Frontend Web Developer',
    description: 'Designing and engineering responsive, high-performance web applications using modern React, TypeScript, and Tailwind CSS, focusing on flawless micro-interactions and animations.',
    subtitle: 'Languages & Toolkits',
    skills: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'ReactJS', 'Tailwind CSS', 'Framer Motion', 'Git & GitHub']
  },
  {
    id: 'serv-2',
    title: 'Python & AI Engineer',
    description: 'Building intelligent text processors, machine learning models, and automated analytical dashboards leveraging Pandas, Matplotlib, Google Colab and Google Generative AI Studio.',
    subtitle: 'Core Competency',
    skills: ['Python', 'Generative AI Studio', 'Prompt Engineering', 'Pandas', 'Matplotlib', 'Model Control (Temp)']
  }
];

export const testimonialsData: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Dr. Josep Silva',
    role: 'Academic Exchange Coordinator — URV, Spain',
    rating: 5.0,
    description: 'Aman demonstrated outstanding curiosity and strong technical fundamentals during his program in Spain. His interest in generative AI models and computer systems is highly promising.'
  },
  {
    id: 'test-2',
    name: 'Santu Purkait',
    role: 'Technical Lead — Netcamp Solutions',
    rating: 5.0,
    description: 'Aman performed exceptionally well during his training. He quickly grasped web production details and network architecture, displaying solid problem-solving skills.'
  },
  {
    id: 'test-3',
    name: 'IBM CEP PBEL Reviewer',
    role: 'Project Evaluator — IBM Developer Skills Network',
    rating: 5.0,
    description: 'Aman’s weather forecasting web core was beautifully implemented. The application state is cleanly managed via hooks, and the design is highly responsive on multiple viewports.'
  }
];

export const accentColors: AccentOption[] = [
  {
    id: 'cyan',
    name: 'Electric Cyan',
    primaryClass: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/30 hover:border-cyan-400 hover:shadow-cyan-500/20 active:text-cyan-300',
    bgGlow: '#06b6d4',
    colorHex: '#22d3ee'
  },
  {
    id: 'emerald',
    name: 'Neon Green',
    primaryClass: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30 hover:border-emerald-400 hover:shadow-emerald-500/20 active:text-emerald-300',
    bgGlow: '#10b981',
    colorHex: '#34d399'
  },
  {
    id: 'violet',
    name: 'Violet Flow',
    primaryClass: 'text-violet-400 bg-violet-500/10 border-violet-500/30 hover:border-violet-400 hover:shadow-violet-500/20 active:text-violet-300',
    bgGlow: '#8b5cf6',
    colorHex: '#a78bfa'
  },
  {
    id: 'amber',
    name: 'Amber Solar',
    primaryClass: 'text-amber-400 bg-amber-500/10 border-amber-500/30 hover:border-amber-400 hover:shadow-amber-500/20 active:text-amber-300',
    bgGlow: '#f59e0b',
    colorHex: '#fbbf24'
  },
  {
    id: 'rose',
    name: 'Sakura Rose',
    primaryClass: 'text-rose-400 bg-rose-500/10 border-rose-500/30 hover:border-rose-400 hover:shadow-rose-500/20 active:text-rose-300',
    bgGlow: '#f43f5e',
    colorHex: '#fb7185'
  }
];

export const certificationsData: Certification[] = [
  {
    id: 'cert-1',
    title: 'Introduction to Generative AI Studio',
    issuer: 'Simplilearn SkillUp (powered by Google Cloud)',
    date: 'Jan 2026',
    skills: ['Vertex AI', 'AI Studio', 'Prompt Engineering', 'Model Tuning'],
    description: 'Explored generative models, parameters like temperature control, and developed text/creative generation engines in custom sandboxed Notebooks.'
  },
  {
    id: 'cert-2',
    title: 'Network Management & Web Dev with Ethical Hacking',
    issuer: 'Netcamp Solutions Private Limited',
    date: 'Sep 2025',
    skills: ['Web Development', 'Ethical Hacking', 'Security Audit', 'Server Management'],
    description: 'Acquired practical proficiency in server-side structures, routing protocols, and penetration auditing safeguards.'
  },
  {
    id: 'cert-3',
    title: 'Android Development with Core Java',
    issuer: 'Netcamp Solutions Private Limited',
    date: 'Sep 2025',
    skills: ['Android Dev', 'Core Java', 'SQLite Caching', 'XML Layouts'],
    description: 'Architected standalone Android applications with XML templates, background services, and local SQL databases.'
  },
  {
    id: 'cert-4',
    title: 'PBEL Equivalent to Virtual Internship - Web & Mobile',
    issuer: 'IBM Developer Skills Network (IBMMooc)',
    date: 'Aug 2025',
    credentialId: 'ce1d067e8c90400896258283a44cb349',
    skills: ['ReactJS', 'Geolocation API', 'REST Endpoints', 'UI Styling'],
    description: 'Completed the flagship weather forecast platform (MeghVaani) incorporating smooth user geolocation tracking and live state management hooks.',
    url: 'https://amanprincek.github.io/MeghVaani/'
  },
  {
    id: 'cert-5',
    title: 'Introduction to Cybersecurity',
    issuer: 'Cisco Networking Academy (NASSCOM)',
    date: 'Jul 2025',
    skills: ['Cybersecurity', 'Threat Analysis', 'Infrastructure Audits', 'Data Safety'],
    description: 'Acquired core competencies in cryptography, secure networking topologies, and defensive cyber-security postures.'
  }
];
