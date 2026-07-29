import type {
  Experience,
  NavLink,
  PersonalInfo,
  Project,
  Service,
  SkillCategory,
  SocialLink,
  Stat,
  Testimonial,
} from '../models/portfolio.models';

export const PERSONAL_INFO: PersonalInfo = {
  name: 'Butch D. Cañada',
  title: 'Full Stack Mobile & Web Developer',
  subtitle: 'AI & Web3 Specialist',
  tagline:
    'Building scalable, secure systems powered by AI, Web, and Mobile technologies — architected for performance, innovation, and long-term business growth.',
  profileImage: 'assets/my-picture.png',
  resumeUrl: 'assets/butch-resume.pdf',
  yearsOfExperience: 3,
  email: 'butch.canada1994@gmail.com',
  phone: '+63 9XX XXX XXXX',
  location: 'Philippines',
};

export const STATS: Stat[] = [
  { label: 'Years Experience', value: 3, suffix: '+' },
  { label: 'Projects Completed', value: 10, suffix: '+' },
  { label: 'Happy Clients', value: 15, suffix: '+' },
  { label: 'Technologies', value: 20, suffix: '+' },
];

export const ABOUT_PARAGRAPHS: string[] = [
  'I am a software engineer with extensive experience in backend development, frontend development, mobile application development, AI solutions, and modern web technologies.',
  'I design and build scalable, secure systems that enhance user experiences and support sustainable business growth.',
  'My AI experience includes developing and integrating large language models such as OpenAI and Meta LLaMA. I specialize in REST API architecture, authentication & authorization, and NoSQL database management with a strong focus on performance, security, and scalability.',
  'I also design and develop mobile wallet & Web3 applications, implementing biometric authentication, facial recognition, PIN-based access, and secure transaction processing.',
];

export const SPECIALIZATIONS: string[] = [
  'Full Stack Web Development',
  'Mobile App Development (iOS & Android)',
  'AI & LLM Integration',
  'Web3 & Blockchain Applications',
  'API Architecture & Microservices',
  'Cloud & DevOps',
];

export const MISSION =
  'My mission is to craft elegant, high-performance software that solves real-world problems. I am passionate about continuous learning, clean architecture, and delivering exceptional user experiences that drive meaningful impact.';

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    name: 'Frontend Development',
    icon: '🎨',
    skills: [
      { name: 'Angular', level: 95, logo: 'assets/logos/angular.png' },
      { name: 'Next.js', level: 90, logo: 'assets/logos/nextjs-icon.png' },
      { name: 'Vue.js', level: 85, logo: 'assets/logos/vuejs.png' },
      { name: 'TypeScript', level: 95, logo: 'assets/logos/typescript.png' },
      { name: 'Capacitor', level: 88, logo: 'assets/logos/capacitor.png' },
    ],
  },
  {
    name: 'Backend Development',
    icon: '⚙️',
    skills: [
      { name: 'Python', level: 92, logo: 'assets/logos/python.png' },
      { name: 'FastAPI', level: 90, logo: 'assets/logos/fastapi.png' },
      { name: 'NestJS', level: 88, logo: 'assets/logos/nestjs.png' },
      { name: 'REST APIs', level: 95, logo: 'assets/logos/rest-api.png' },
      { name: 'Microservices', level: 85, logo: 'assets/logos/microservices.png' },
    ],
  },
  {
    name: 'Mobile Development',
    icon: '📱',
    skills: [
      { name: 'Ionic', level: 90, logo: 'assets/logos/ionic.png' },
      { name: 'Capacitor', level: 88, logo: 'assets/logos/capacitor.png' },
      { name: 'Angular', level: 95, logo: 'assets/logos/angular.png' },
      { name: 'Cross-Platform', level: 92, logo: 'assets/logos/cross-platform.png' },
    ],
  },
  {
    name: 'Database',
    icon: '🗄️',
    skills: [
      { name: 'MongoDB', level: 90, logo: 'assets/logos/mongodb.png' },
      { name: 'MySQL', level: 88, logo: 'assets/logos/mysql.png' },
      { name: 'NoSQL Design', level: 85, logo: 'assets/logos/nosql.png' },
      { name: 'Data Modeling', level: 88, logo: 'assets/logos/data-modeling.png' },
    ],
  },
  {
    name: 'Cloud & DevOps',
    icon: '☁️',
    skills: [
      { name: 'Docker', level: 88, logo: 'assets/logos/docker.png' },
      { name: 'CI/CD', level: 82 },
      { name: 'AWS', level: 80, logo: 'assets/logos/aws.png' },
    ],
  },
  {
    name: 'Version Control & Tools',
    icon: '🔧',
    skills: [
      { name: 'Git', level: 95, logo: 'assets/logos/git.png' },
      { name: 'GitHub', level: 95, logo: 'assets/logos/github.png', logoDark: 'assets/logos/github-white-icon.png' },
      { name: 'Postman', level: 88, logo: 'assets/logos/postman.png' },
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'ai-chatbot',
    title: 'AI Chatbot Platform',
    description:
      'A scalable conversational AI system using LLMs and microservices architecture for intelligent customer support and automation.',
    image: 'assets/projects/chatbot.png',
    technologies: ['Python', 'FastAPI', 'Docker', 'LLaMA', 'MongoDB'],
    features: [
      'LLM-powered conversational AI',
      'Microservices architecture',
      'Real-time message streaming',
      'Docker containerization',
      'RESTful API design',
    ],
    githubUrl: 'https://github.com/butchcanz',
  },
  {
    id: 'xterium-wallet',
    title: 'Xterium Wallet',
    description:
      'Cross-platform Web3 wallet for secure Polkadot ecosystem interactions, supporting account management, transaction signing, and dApp connectivity.',
    image: 'assets/projects/xterium.png',
    technologies: ['Ionic', 'Angular', 'Capacitor', 'Polkadot API', 'TypeScript'],
    features: [
      'Biometric & PIN authentication',
      'Polkadot transaction signing',
      'Cross-platform mobile support',
      'Secure key management',
      'dApp browser integration',
    ],
    githubUrl: 'https://github.com/Xode-DAO/xterium-wallet-v2',
  },
  {
    id: 'ai-chatbot-alt',
    title: 'Enterprise AI Assistant',
    description:
      'Enterprise-grade AI assistant with custom knowledge base integration, role-based access, and analytics dashboard.',
    image: 'assets/projects/ai-chatbot.png',
    technologies: ['Python', 'FastAPI', 'Angular', 'Docker', 'LLaMA'],
    features: [
      'Custom knowledge base RAG',
      'Role-based access control',
      'Analytics dashboard',
      'Multi-model LLM support',
      'API rate limiting',
    ],
    githubUrl: 'https://github.com/butchcanz',
  },
];

export const EXPERIENCES: Experience[] = [
  {
    company: 'Blockspace Corporation',
    position: 'Software Engineer',
    startDate: '2023',
    endDate: 'Present',
    responsibilities: [
      'Developed enterprise web applications and backend services.',
      'Implemented secure mobile wallets with biometric authentication, facial recognition, PIN-based access, and reliable transaction processing.',
      'Designed database schemas and optimized query performance for high-traffic systems.',
      'Implemented CI/CD pipelines and containerized deployments.',
    ],
    technologies: ['TypeScript', 'NestJS', 'MySQL', 'Docker', 'GitHub','Capacitor', 'NoSQL', 'MongoDB', 'REST APIs', 'Microservices'],
  },
  {
    company: 'Freelance / Independent',
    position: 'Full Stack Developer',
    startDate: '2022',
    endDate: '2024',
    responsibilities: [
      'Delivered end-to-end web and mobile solutions for diverse clients across fintech, AI, and Web3 domains.',
      'Architected scalable REST APIs and microservices using Python, FastAPI, and NestJS.',
      'Built cross-platform mobile applications with Ionic, Angular, and Capacitor.',
      'Integrated AI/LLM capabilities into production applications.',
    ],
    technologies: ['Angular', 'Python', 'FastAPI', 'Ionic', 'Docker', 'MongoDB', 'NoSQL', 'Vue.js', 'REST APIs', 'Microservices'],
  },
];

export const SERVICES: Service[] = [
  {
    title: 'Mobile App Development',
    description:
      'Cross-platform iOS and Android apps with Ionic, Capacitor, and native integrations for performance and security.',
    icon: '📱',
  },
  {
    title: 'Web Development',
    description:
      'Modern, responsive web applications using Angular, Next.js, and Vue.js with premium UX and accessibility.',
    icon: '🌐',
  },
  {
    title: 'API Development',
    description:
      'Scalable RESTful APIs and microservices with FastAPI, NestJS, authentication, and comprehensive documentation.',
    icon: '🔌',
  },
  {
    title: 'System Integration',
    description:
      'Seamless integration of third-party services, payment gateways, AI models, and blockchain protocols.',
    icon: '🔗',
  },
  {
    title: 'Database Design',
    description:
      'Efficient database architecture with MongoDB and MySQL, optimized queries, and data modeling best practices.',
    icon: '🗄️',
  },
  {
    title: 'AI Integration',
    description:
      'Embedding LLMs and ML models into applications for intelligent automation and enhanced user experiences.',
    icon: '🤖',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Maria Santos',
    role: 'Product Manager',
    company: 'FinTech Startup',
    quote:
      'Butch delivered an exceptional mobile wallet application that exceeded our expectations. His attention to security and user experience is outstanding.',
  },
  {
    name: 'James Rodriguez',
    role: 'CTO',
    company: 'AI Solutions Inc.',
    quote:
      'Working with Butch on our AI chatbot platform was a game-changer. He architected a scalable system that handles thousands of concurrent users flawlessly.',
  },
  {
    name: 'Sarah Chen',
    role: 'Lead Developer',
    company: 'Web3 Ventures',
    quote:
      'Butch brings deep expertise in both traditional and Web3 development. His code quality and communication made our collaboration seamless.',
  },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/butchcanz',
    icon: 'assets/logos/github.png',
    iconDark: 'assets/logos/github-white-icon.png',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/butch-ca%C3%B1ada-b87b15117/',
    icon: 'assets/logos/linkedin.png',
  },
];

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', sectionId: 'hero' },
  { label: 'About', sectionId: 'about' },
  { label: 'Skills', sectionId: 'skills' },
  { label: 'Projects', sectionId: 'projects' },
  { label: 'Experience', sectionId: 'experience' },
  { label: 'Services', sectionId: 'services' },
  { label: 'Testimonials', sectionId: 'testimonials' },
  { label: 'Contact', sectionId: 'contact' },
];
