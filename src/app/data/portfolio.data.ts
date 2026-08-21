import type {
  Experience,
  NavLink,
  PersonalInfo,
  Project,
  Service,
  SkillCategory,
  SocialLink,
  Stat,
} from '../models/portfolio.models';

export const PERSONAL_INFO: PersonalInfo = {
  name: 'Butch D. Cañada',
  title: 'Full Stack Mobile & Web Developer',
  subtitle: 'AI & Web3 Specialist',
  tagline:
    'Building scalable, secure systems powered by AI, Web, and Mobile technologies — architected for performance, innovation, and long-term business growth.',
  profileImage: 'assets/my-picture.png',
  resumeUrl: 'assets/Butch_Resume.pdf',
  yearsOfExperience: 3,
  email: 'butch.canada1994@gmail.com',
  phone: '+63 9XX XXX XXXX',
  location: 'Philippines',
};

export const STATS: Stat[] = [
  { label: 'Years Experience', value: 3, suffix: '+' },
  { label: 'Projects Completed', value: 10, suffix: '+' },
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
      'A scalable enterprise conversational AI system using LLMs and microservices architecture, with custom knowledge base integration, role-based access, and analytics for intelligent customer support and automation.',
    image: 'assets/projects/chatbot.png',
    technologies: ['Python', 'FastAPI', 'Angular', 'Docker', 'LLaMA', 'MongoDB'],
    features: [
      'LLM-powered conversational AI',
      'Microservices architecture',
      'Real-time message streaming',
      'Custom knowledge base RAG',
      'Role-based access control',
      'Analytics dashboard',
      'Multi-model LLM support',
      'API rate limiting',
      'Docker containerization',
      'RESTful API design',
    ],
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
  },
  {
    id: 'mobile-pos',
    title: 'Mobile POS',
    description:
      'Mobile POS is a mobile point-of-sale system for managing sales, inventory, customers, payments, and real-time business transactions efficiently.',
    image: 'assets/projects/mobile-pos.png',
    technologies: ['Ionic Vue', 'Vue.js', 'SQLite', 'Capacitor'],
    features: [
      'Sales management',
      'Inventory management',
      'Payment processing',
      'Real-time business transactions',
    ],
  },
  {
    id: 'cloud-pos',
    title: 'Cloud POS',
    description:
      'Cloud POS is a cloud-based point-of-sale system for managing sales, inventory, customers, branches, and syncing sales from mobile POS to the cloud in real time business operations.',
    image: 'assets/projects/cloud-pos.png',
    technologies: ['Angular', 'Nestjs', 'PostgreSQL'],
    features: [
      'Multi-branch management',
      'Real-time sales syncing',
      'Inventory tracking',
      'Generate reports',
      'Secure and scalable',
    ],
  },
];

export const EXPERIENCES: Experience[] = [
  {
    company: 'Blockspace Corporation',
    position: 'Software Engineer',
    startDate: 'Dec - 2022',
    endDate: 'Present',
    responsibilities: [
      'Developed Xterium Wallet a cross-platform Web3 wallet using Ionic Angular and Capacitor, with TypeScript and Polkadot API, providing secure Polkadot ecosystem interactions, account management, biometric and PIN authentication, transaction signing, and dApp connectivity.',
      'Developed Jina AI Chatbot AI-powered chatbots and agents using Angular and Python FastAPI, with MongoDB, LLaMA, and Retrieval-Augmented Generation (RAG) to provide accurate, contextual, and domain-specific responses through natural language understanding.',
      'Developed a mobile point-of-sale system using Ionic Vue and Capacitor, with Vue.js and SQLite, for managing sales, inventory, customers, payments, and business transactions with efficient local data storage and offline support.',
      'Developed a cloud-based point-of-sale system using Angular and NestJS, with TypeScript, PostgreSQL, and REST API, for managing sales, inventory, customers, and multiple branches, including real-time synchronization of sales data between the Mobile POS and cloud platform.',
    ],
    technologies: ['Angular', 'Ionic', 'Vue.js', 'NestJS', 'PostgreSQL', 'SQLite', 'Docker', 'GitHub', 'Capacitor', 'TypeScript', 'Polkadot API', 'LLaMA', 'MongoDB', 'REST APIs', 'Microservices'],
  },
  {
    company: 'Freelance / Independent',
    position: 'Full Stack Developer',
    startDate: 'Feb - 2023',
    endDate: 'July - 2023',
    responsibilities: [
      'Delivered end-to-end web and mobile solutions for diverse clients across fintech, AI, and Web3 domains.',
      'Architected scalable REST APIs and microservices using Python, FastAPI, and NestJS.',
      'Built cross-platform mobile applications with Ionic, Angular, and Capacitor.',
      'Integrated AI/LLM capabilities into production applications.',
    ],
    technologies: ['Angular', 'Python', 'FastAPI', 'Ionic', 'Docker', 'MongoDB', 'NoSQL', 'Vue.js', 'REST APIs', 'Microservices'],
  },
  {
    company: 'Human Incubator Inc.',
    position: 'Business Analyst',
    startDate: 'July - 2022',
    endDate: 'Dec - 2022',
    responsibilities: [
      'Conducted comprehensive product testing to identify defects, deficiencies, and potential areas for improvement, ensuring high standards of product quality and reliability. Investigated quality issues and collaborated with cross-functional teams to implement effective solutions that enhanced product performance and customer satisfaction. Provided technical support for functional and software-related issues, performed root-cause analysis, and contributed to timely issue resolution. Evaluated and identified bottlenecks within quality assurance processes and recommended process improvements to increase testing efficiency, product stability, and overall quality.',
    ],
    technologies: ['Python Selenium', 'Selenium WebDriver', 'Software Testing'],
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
  { label: 'Contact', sectionId: 'contact' },
];
