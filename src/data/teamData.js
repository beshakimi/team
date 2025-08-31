// src/data/teamData.js
const teamData = [
  {
    id: 1,
    firstname: "Jawid",
    lastname: "Hakimi",
    role: "Frontend Developer",
    total_projects: 12,
    years_of_experience: 5,
    cv: "/media/cv/jawid_hakimi_cv.pdf",
    bio: "Frontend developer with strong skills in React, Next.js, and modern UI/UX design. Passionate about building responsive, interactive, and user-friendly web applications. Experienced in integrating APIs, optimizing performance, and translating complex designs into clean, maintainable code.",
    profile_image: "/media/team/1.jpg",
    detail_image: "/media/team/1.jpg",
    social: {
      linkedin: "https://linkedin.com/in/besmillah",
      github: "https://github.com/besmillah",
      twitter: "https://twitter.com/besmillah",
      facebook: "https://facebook.com/besmillah"
    },
    address: {
      location: "Berlin, Germany",
      phone: "+49 234 456 5436",
      email: "jawid@gmail.com"
    },
    skills: [
      { icon: "/media/icons/nextjs.png", title: "Next.js", description: "Frontend framework", pro_level: 90 },
      { icon: "/media/icons/react.png", title: "React", description: "UI library", pro_level: 88 },
      { icon: "/media/icons/tailwind.webp", title: "Tailwind CSS", description: "Styling framework", pro_level: 85 },
      { icon: "/media/icons/figma.png", title: "Figma", description: "UI/UX design tool", pro_level: 80 }
    ],
    experience: [
      { role: "Frontend Developer", company: "Tech Solutions", start_date: "2022", end_date: "Present", description: "Developed responsive web applications using React and Next.js. Implemented reusable components, optimized UI performance, and collaborated with designers to improve user experience." },
      { role: "UI/UX Designer", company: "Creative Studio", start_date: "2020", end_date: "2022", description: "Designed interactive interfaces and prototypes using Figma. Conducted usability testing, created design systems, and collaborated with frontend developers to ensure accurate implementation." }
    ],
    portfolio: [
      {
        id: 1,
        title: "E-commerce Website",
        image: "/media/projects/1.jpg",
        technologies: ["React", "Tailwind CSS", "Node.js"],
        live_link: "https://example.com/project1",
        github_link: "https://github.com/example/project1"
      },
      {
        id: 2,
        title: "Portfolio Website",
        image: "/media/projects/2.jpg",
        technologies: ["Next.js", "Framer Motion"],
        live_link: "https://example.com/project2",
        github_link: "https://github.com/example/project2"
      },
      {
        id: 3,
        title: "Landing Page for Startup",
        image: "/media/projects/3.jpg",
        technologies: ["React", "Tailwind CSS", "GSAP"],
        live_link: "https://example.com/project3",
        github_link: "https://github.com/example/project3"
      }
    ]
  },
  {
    id: 2,
    firstname: "Amina",
    lastname: "Ahmadi",
    role: "Full-stack Developer",
    total_projects: 6,
    years_of_experience: 3,
    cv: "/media/cv/amina_ahmadi_cv.pdf",
    bio: "Full-stack developer with extensive experience in both frontend and backend development, including React, Node.js, and building RESTful APIs. Skilled at designing scalable web applications, managing databases, and delivering end-to-end solutions with attention to code quality and user experience.",
    profile_image: "/media/team/6.jpg",
    detail_image: "/media/team/6.jpg",
    social: {
      linkedin: "https://linkedin.com/in/amina",
      github: "https://github.com/amina",
      twitter: "https://twitter.com/amina"
    },
    address: {
      location: "Berlin, Germany",
      phone: "+49 123 456 7890",
      email: "amina12@gmail.com"
    },
    skills: [
      { icon: "/media/icons/react.png", title: "React", description: "Frontend library", pro_level: 85 },
      { icon: "/media/icons/nextjs.png", title: "Next.js", description: "Backend runtime", pro_level: 80 },
      { icon: "/media/icons/mongoDB.png", title: "MongoDB", description: "NoSQL database", pro_level: 75 },
      { icon: "/media/icons/graphql.png", title: "GraphQL", description: "API query language", pro_level: 70 }
    ],
    experience: [
      { role: "Full-stack Developer", company: "WebCraft", start_date: "2021", end_date: "Present", description: "Built full-stack web applications using React, Node.js, and MongoDB. Designed RESTful APIs, handled server-side logic, and ensured seamless integration between frontend and backend components." },
      { role: "Backend Developer", company: "DataFlow", start_date: "2019", end_date: "2021", description: "Developed backend services, managed databases, and implemented API endpoints. Optimized performance, wrote automated tests, and collaborated with frontend teams to deliver high-quality web applications." }
    ],
    portfolio: [
      {
        id: 1,
        title: "Task Management App",
        image: "/media/projects/4.jpg",
        technologies: ["React", "Node.js", "MongoDB"],
        live_link: "https://example.com/project4",
        github_link: "https://github.com/example/project4"
      },
      {
        id: 2,
        title: "E-learning Platform",
        image: "/media/projects/5.webp",
        technologies: ["Next.js", "Express", "GraphQL"],
        live_link: "https://example.com/project5",
        github_link: "https://github.com/example/project5"
      },
      {
        id: 3,
        title: "Inventory Management System",
        image: "/media/projects/6.webp",
        technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
        live_link: "https://example.com/project6",
        github_link: "https://github.com/example/project6"
      }
    ]
  },
  {
    id: 3,
    firstname: "Omar",
    lastname: "Saeed",
    role: "Backend Developer",
    total_projects: 8,
    years_of_experience: 4,
    cv: "/media/cv/omar_saeed_cv.pdf",
    bio: "Backend developer specializing in building robust, secure, and scalable server-side systems. Experienced in API development, database design, and optimizing backend performance. Passionate about creating reliable and maintainable systems that support high-performance applications.",
    profile_image: "/media/team/3.jpg",
    detail_image: "/media/team/3.jpg",
    social: {
      linkedin: "https://linkedin.com/in/omar",
      github: "https://github.com/omar",
      twitter: "https://twitter.com/omar"
    },
    address: {
      location: "Berlin, Germany",
      phone: "+49 534 543 7536",
      email: "omar34@gmail.com"
    },
    skills: [
      { icon: "/media/icons/nodejs.png", title: "Node.js", description: "Backend runtime", pro_level: 90 },
      { icon: "/media/icons/express-js.png", title: "Express.js", description: "Web framework", pro_level: 85 },
      { icon: "/media/icons/mysql.png", title: "MySQL", description: "Relational DB", pro_level: 80 },
      { icon: "/media/icons/docker.png", title: "Docker", description: "Containerization", pro_level: 75 }
    ],
    experience: [
      { role: "Backend Developer", company: "Creative Minds", start_date: "2020", end_date: "Present", description: "Developed and maintained server-side logic, designed RESTful APIs, integrated third-party services, and optimized database queries for high-performance applications. Ensured security, scalability, and reliability of backend systems." },
      { role: "Junior Developer", company: "DesignHub", start_date: "2018", end_date: "2020", description: "Assisted in backend development, wrote clean and maintainable code, collaborated with cross-functional teams, and learned best practices in API design, database management, and deployment processes." }
    ],
    portfolio: [
      {
        id: 1,
        title: "API for E-commerce",
        image: "/media/projects/7.jpg",
        technologies: ["Node.js", "Express", "MySQL"],
        live_link: "https://example.com/project7",
        github_link: "https://github.com/example/project7"
      },
      {
        id: 2,
        title: "Microservices Architecture",
        image: "/media/projects/8.jpg",
        technologies: ["Node.js", "Docker", "MongoDB"],
        live_link: "https://example.com/project8",
        github_link: "https://github.com/example/project8"
      },
      {
        id: 3,
        title: "Real-time Chat API",
        image: "/media/projects/9.webp",
        technologies: ["Node.js", "Socket.io", "Express"],
        live_link: "https://example.com/project9",
        github_link: "https://github.com/example/project9"
      }
    ]
  }
];

export default teamData;
