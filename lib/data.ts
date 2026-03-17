export const siteData = {
  personal: {
    name: "Joel Matias",
    nickname: "JMS",
    title: "Full-Stack Developer",
    roles: [
      "Full-Stack Developer",
      "Backend Engineer",
      "Laravel Specialist",
      "Next.js Developer",
    ],
    bio: "Desarrollador Full-Stack apasionado por crear aplicaciones web modernas, eficientes y con excelente experiencia de usuario. Me especializo en Laravel y Next.js, construyendo soluciones robustas con código limpio y arquitecturas escalables.",
    email: "joelsantiagos001@gmail.com",
    github: "https://github.com/joel-matias",
    linkedin: "https://www.linkedin.com/in/joel-ms",
    cv: "/cv/Joel_Matias_CV.pdf",
  },

  nav: [
    { label: "Sobre mí", href: "#about" },
    { label: "Proyectos", href: "#projects" },
    { label: "Habilidades", href: "#skills" },
    { label: "Contacto", href: "#contact" },
  ],

  projects: [
    {
      id: "notestips",
      title: "Notestips",
      description:
        "MVP de gestión de notas privadas con autenticación, filtros avanzados y aislamiento total por usuario.",
      tech: ["Laravel", "Livewire", "Tailwind CSS", "MySQL", "Alpine.js"],
      github: null,
      live: "https://notestips.jmsweb.site",
      gradient: "from-violet-600 via-purple-600 to-indigo-700",
      featured: true,
    },
/*    {
      id: "astralis",
      title: "Astralis",
      description:
        "Sistema de gestión para terminales de autobuses con base de datos relacional y suite de pruebas E2E.",
      tech: ["Next.js", "TypeScript", "MySQL", "Prisma", "Playwright"],
      github: "https://github.com/joel-matias/Astralis",
      live: null,
      gradient: "from-orange-500 via-rose-500 to-pink-600",
      featured: true,
    },
    {
      id: "cibora",
      title: "Cibora",
      description:
        "Aplicación web con inteligencia artificial integrada mediante Google Gemini API y gestión de datos con Prisma.",
      tech: ["Next.js", "TypeScript", "Google Gemini", "Prisma", "Tailwind CSS"],
      github: "https://github.com/joel-matias/Cibora",
      live: "https://cibora.vercel.app",
      gradient: "from-emerald-500 via-teal-500 to-cyan-600",
      featured: true,
    },*/
    {
      id: "hunterpedia",
      title: "Hunterpedia",
      description:
        "Enciclopedia interactiva de Hunter x Hunter con datos en tiempo real de la Jikan API.",
      tech: ["TypeScript", "React", "Jikan API", "CSS"],
      github: "https://github.com/joel-matias/hunterpedia",
      live: "https://hunterpedia-omega.vercel.app",
      gradient: "from-blue-600 via-indigo-600 to-purple-700",
      featured: false,
    },
    {
      id: "ecommerce",
      title: "Ecommerce",
      description:
        "Tienda en línea completa con catálogo, carrito de compras, autenticación y API REST con Sanctum.",
      tech: ["Laravel 12", "Livewire v3", "Jetstream", "Sanctum", "Tailwind CSS"],
      github: "https://github.com/joel-matias/ecommerce",
      live: null,
      gradient: "from-teal-500 via-green-500 to-emerald-600",
      featured: false,
    },
    {
      id: "mysql-store",
      title: "Mysql Store",
      description:
        "Tienda virtual con sistema de roles (admin/cliente), historial de órdenes y entorno dockerizado.",
      tech: ["PHP 8.1", "MySQL", "Docker", "Apache", "phpMyAdmin"],
      github: "https://github.com/joel-matias/mysql-store",
      live: null,
      gradient: "from-red-500 via-orange-500 to-amber-500",
      featured: false,
    },
  ],

  skills: {
    frontend: {
      label: "Frontend",
      icon: "monitor",
      items: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "TypeScript",
        "React",
        "Next.js",
        "Tailwind CSS",
        "Livewire",
        "Alpine.js",
        "Blade",
        "Responsive Design",
      ],
    },
    backend: {
      label: "Backend",
      icon: "server",
      items: [
        "PHP",
        "Laravel",
        "REST API",
        "MySQL",
        "MongoDB",
        "Eloquent ORM",
        "Prisma",
        "Sanctum",
        "Jetstream",
        "Python",
        "FastAPI",
      ],
    },
    tools: {
      label: "Tools & DevOps",
      icon: "wrench",
      items: [
        "Git",
        "GitHub",
        "Docker",
        "Docker Compose",
        "Nginx",
        "Apache",
        "Vite",
        "Playwright",
        "phpMyAdmin",
        "Linux",
        "VS Code",
      ],
    },
  },

  stats: [
    { value: 6, suffix: "+", label: "Proyectos" },
    { value: 1, suffix: "+", label: "Año exp." },
    { value: 20, suffix: "+", label: "Tecnologías" },
    { value: 100, suffix: "%", label: "Dedicación" },
  ],
};
