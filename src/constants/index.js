import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
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
    title: "Tech Enthusiast",
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
    name: "TypeScript",
    icon: typescript,
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
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "My vision",
    company_name: "",
    icon: starbucks,
    iconBg: "#383E56",
    date: "",
    points: [
      "I believe that technology has the power to transform lives and create a better future. As I continue my studies, I aim to deepen my expertise and contribute to innovative projects that make a difference in the community.",
    ],
  },
  {
    title: "Area`s of Interest",
    company_name: "Technologies",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "",
    points: [
      "I am particularly interested in : ",
      "Software Development: I enjoy coding and building applications that solve real-world problems. I have experience with languages such as Python, Java, and JavaScript.",
      "Web Development: I love designing user-friendly and responsive websites. My skills in HTML, CSS, and frameworks like React allow me to bring creative ideas to life.",
      "Data Science: I am keen on exploring data analysis and machine learning, and I’m currently expanding my knowledge in this exciting field.",
      "Cybersecurity: I find it fascinating to secure systems and networks from potential threats. I’m always looking for ways to enhance my skills in this area.",
      "DevOps: I’m interested in automating processes and streamlining workflows. I’m learning about tools like Docker and Kubernetes to improve efficiency.",
    ],
  },
  {
    title: "Education",
    company_name: "R.G.P.V.",
    icon: shopify,
    iconBg: "#383E56",
    date: "2023 - 2027",
    points: [
      "Hello! I’m Alkaif, a dedicated and enthusiastic B.Tech student currently pursuing my degree at Rajiv Gandhi Proudyogiki Vishwavidyalaya (RGPV). As a second-year student, I am passionate about technology and eager to dive deeper into the world of engineering and software development.",
    ],
  },
  {
    title: "My Journey",
    company_name: "",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "",
    points: [
      "From a young age, I’ve always been fascinated by how things work, which led me to explore various aspects of technology. My journey in engineering began at RGPV, where I’ve been able to cultivate my skills in programming, problem-solving, and critical thinking. The hands-on projects and collaborative environment here have fueled my desire to innovate and create.",
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
    name: "Coming Soon",
    description:
      "",
    tags: [
      {
        name: "",
        color: "blue-text-gradient",
      },
      {
        name: "",
        color: "green-text-gradient",
      },
      {
        name: "",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  // {
  //   name: "Job IT",
  //   description:
  //     "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
  //   tags: [
  //     {
  //       name: "react",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "restapi",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "scss",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: jobit,
  //   source_code_link: "https://github.com/",
  // },
  // {
  //   name: "Trip Guide",
  //   description:
  //     "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
  //   tags: [
  //     {
  //       name: "nextjs",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "supabase",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: tripguide,
  //   source_code_link: "https://github.com/",
  // },
];

export { services, technologies, experiences, testimonials, projects };
