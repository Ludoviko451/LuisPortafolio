// Datos del portafolio de Luis Ángel Quirós Flórez

export const personalInfo = {
  name: 'Luis Ángel Quirós Flórez',
  role: 'Backend Developer',
  roleAlt: 'Software Developer',
  location: 'Cúcuta, Colombia',
  github: 'https://github.com/Ludoviko451',
  linkedin: 'https://www.linkedin.com/in/luisquirosflorez/',
  email: 'luisangelquirosflorez@gmail.com',
  bio: 'Desarrollador de software apasionado por construir soluciones backend, aplicaciones web y servicios en la nube, con experiencia en microservicios, AWS y desarrollo de software.',
  about: [
    'Soy desarrollador de software con experiencia profesional en desarrollo backend, microservicios, bases de datos y servicios en la nube.',
    'Trabajé como Backend Developer en PRAGMA, participando en proyectos internos y con clientes, donde adquirí experiencia en desarrollo de soluciones backend, mantenimiento de aplicaciones, resolución de incidencias, AWS y calidad de software.',
    'Me interesa el desarrollo de aplicaciones web, la arquitectura de software, los servicios en la nube y el aprendizaje continuo.',
    'Mi objetivo es seguir desarrollando mis habilidades técnicas y aportar soluciones de calidad en equipos de desarrollo.',
  ],
};

export const education = [
  {
    id: 1,
    degree: 'Ingeniería de Sistemas',
    institution: 'Universidad Nacional Abierta y a Distancia (UNAD)',
    period: '2025 — Actualidad',
    status: 'En curso',
    icon: '🎓',
  },
  {
    id: 2,
    degree: 'Tecnólogo en Análisis y Desarrollo de Software',
    institution: 'SENA',
    period: '2022 — 2024',
    status: 'Graduado',
    icon: '📜',
  },
];

export const experience = [
  {
    id: 1,
    company: 'PRAGMA',
    role: 'Backend Developer',
    period: 'Julio 2024 — Enero 2025',
    location: 'Colombia',
    projects: [
      {
        name: 'Evolution Team',
        description: 'Soporte técnico a usuarios internos y mantenimiento de aplicaciones web.',
        tasks: [
          'Soporte técnico a usuarios internos',
          'Resolución de incidencias en aplicaciones web',
          'Consultas y actualizaciones SQL',
          'Desarrollo y mantenimiento de funcionalidades',
        ],
        tags: ['SQL', 'Soporte técnico', 'Mantenimiento'],
      },
      {
        name: 'Modelo de Compensación',
        description: 'Desarrollo de funciones serverless y monitoreo de servicios en AWS.',
        tasks: [
          'Desarrollo de funciones AWS Lambda',
          'Monitoreo de servicios mediante Amazon CloudWatch',
          'Participación en ceremonias Scrum',
          'Colaboración en soluciones backend',
        ],
        tags: ['AWS Lambda', 'CloudWatch', 'Scrum', 'Backend'],
      },
      {
        name: 'Proyecto Transer',
        description: 'Refactorización de microservicios y mejora de calidad de código.',
        tasks: [
          'Refactorización de microservicios',
          'Mejora de cobertura de pruebas unitarias',
          'Uso de SonarCloud para calidad de código',
          'Control de versiones mediante Azure Repos',
        ],
        tags: ['Microservicios', 'SonarCloud', 'Azure Repos', 'Unit Testing'],
      },
    ],
  },
];

export const skills = [
  {
    category: 'Backend',
    icon: 'Server',
    color: 'blue',
    items: ['Java', 'Spring Boot', 'Node.js', 'Express', 'APIs REST', 'Microservicios'],
  },
  {
    category: 'Frontend',
    icon: 'Monitor',
    color: 'cyan',
    items: ['React', 'Angular', 'JavaScript', 'TypeScript', 'HTML', 'CSS'],
  },
  {
    category: 'Bases de datos',
    icon: 'Database',
    color: 'indigo',
    items: ['MySQL', 'PostgreSQL', 'MongoDB', 'Firebase / Firestore'],
  },
  {
    category: 'Cloud & Herramientas',
    icon: 'Cloud',
    color: 'teal',
    items: ['AWS Lambda', 'Amazon CloudWatch', 'Git', 'GitHub', 'Azure Repos', 'Docker', 'SonarCloud'],
  },
];

export const projects = [
  {
    id: 1,
    name: 'GymManager',
    description: 'Sistema de gestión para gimnasios. Incluye módulos frontend y backend para la administración de usuarios, membresías y actividades.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Backend'],
    github: 'https://github.com/Ludoviko451/gymmanager-frontend',
    demo: null,
    highlight: false,
  },
  {
    id: 2,
    name: 'Mi Cúcuta',
    description: 'Aplicación web desarrollada con JavaScript para mostrar información relevante sobre la ciudad de Cúcuta. Proyecto de impacto local.',
    technologies: ['JavaScript', 'HTML', 'CSS'],
    github: 'https://github.com/Ludoviko451/mi-cucuta',
    demo: null,
    highlight: true,
  },
  {
    id: 3,
    name: 'Lexia Backend',
    description: 'Backend desarrollado con Python para la plataforma Lexia. Exposición de APIs REST para la gestión de contenidos y usuarios.',
    technologies: ['Python', 'REST API', 'Backend'],
    github: 'https://github.com/Ludoviko451/lexia_backend',
    demo: null,
    highlight: true,
  },
  {
    id: 4,
    name: 'App Móvil Nativa (Android)',
    description: 'Aplicación Android nativa desarrollada con Kotlin para visualizar información de películas y series. Incluye mockup en Figma.',
    technologies: ['Kotlin', 'Android', 'Figma'],
    github: 'https://github.com/Ludoviko451/app_moviles_nativa',
    demo: 'https://www.figma.com/design/PAEsqUkjMBJojuc2GebZDw',
    highlight: false,
  },
  {
    id: 5,
    name: 'MoodUp Frontend',
    description: 'Frontend de una plataforma de bienestar. Proyecto colaborativo con interfaz moderna y funcional.',
    technologies: ['JavaScript', 'Frontend', 'UI/UX'],
    github: 'https://github.com/Ludoviko451/moodup-frontend',
    demo: null,
    highlight: false,
  },
  {
    id: 6,
    name: 'Vetlog Spring Boot',
    description: 'Fork del proyecto Vetlog: aplicación Spring Boot para mantener organizado el historial médico de mascotas.',
    technologies: ['Java', 'Spring Boot', 'Backend'],
    github: 'https://github.com/Ludoviko451/vetlog-spring-boot',
    demo: 'https://vetlog.org',
    highlight: false,
  },
];
