import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  electron,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,

  ATRAXIA,

  Dejene,

  threejs,
  python,
  project1,
  project2,
  project3,
  project4,
  project5,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Programmer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Electron",
    icon: electron,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "python",
    icon: python,
  },
  {
    name: "figma",
    icon: figma,
  },

];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "ATRAXIA",
    icon: ATRAXIA,
    iconBg: "#383E56",
    date: " 2024",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },

  {
    title: "Web Developer",
    company_name: "Dejene Ethiopian Tour",
    icon: Dejene,
    iconBg: "#383E56",
    date: "2024",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Civil Engineering Apps",
    // icon: meta,
    iconBg: "#E6DEDD",
    date: "2023",
    points: [
      "Developing and maintaining web applications using Django and other related technologies.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Architectural page",
    description:
      "A professional web platform showcasing innovative architectural designs, offering detailed project portfolios, and providing information on services and customized solutions to bring your vision to life.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: project1,
    _link:"https://projectbruk.netlify.app/",
    source_code_link: "https://github.com/Esayas188/bruk",
  },
  {
    name: "Dejenehodes personal website",
    description:
      "A website created to showcase Dejene Hodes' services and company, highlighting expertise, offerings, and innovative solutions.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: project4,
    _link:"https://dejenehodes.netlify.app/",

    source_code_link: "https://github.com/Esayas188/project-website",
  },
  {
    name: "Recipe website",
    description:
      "A web application that allows users to explore a wide variety of recipes, discover ingredient details, and find cooking instructions based on their dietary preferences and available ingredients.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: project2,
    _link:"https://delicious-new.netlify.app/",

    source_code_link: "https://github.com/Esayas188/recipe-mern",
  },
  {
    name: "E-commerce website",
    description:
      "A web application that enables users to browse and purchase products, view detailed product information, and discover special offers based on their preferences and browsing history.",
    tags: [
      {
        name: "django",
        color: "blue-text-gradient",
      },
      {
        name: "html5",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: project3,
    _link:"https://github.com/Esayas188/E-commerce",

    source_code_link: "https://github.com/Esayas188/E-commerce",
  },

  {
    name: "React Portfolio Website",
    description:
      "A React portfolio website developed to showcase architectural designs and projects. It features interactive galleries, detailed project descriptions, and a professional display of skills and expertise in architecture.",
    tags: [
      {
        name: "django",
        color: "blue-text-gradient",
      },
      {
        name: "html5",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: project5,
    _link:"https://samuelfasil.netlify.app/",

    source_code_link: "https://github.com/Esayas188/SamuelFasil_website",
  },
];

export { services, technologies, experiences, testimonials, projects };
