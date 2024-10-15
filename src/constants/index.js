import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
  car,
  contact,
  css,
  estate,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  motion,
  mui,
  nextjs,
  nodejs,
  pricewise,
  react,
  redux,
  sass,
  snapgram,
  summiz,
  tailwindcss,
  threads,
  typescript,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: nextjs,
    name: "Next",
    type: "frontend"
  },
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: redux,
    name: "Redux",
    type: "State Management",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
];

export const experiences = [
  {
    title: "Debugger",
    company_name: "Coding Ninjas",
    icon: starbucks,
    iconBg: "#accbe1",
    date: "2022- 2023",
    points: [
      "Diagnosed and resolved over 750 distinct coding errors in Java for students, enhancing code quality through targeted interventions, which improved overall student debugging skills and understanding of best practices.",
      "Facilitated individual and group sessions focused on code review and error identification, enhancing students' debugging skills"
    ],
  },
 
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/YourGitHubUsername",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/YourLinkedInUsername",
  },
];

export const projects = [
  {
    iconUrl: snapgram,
    theme: "btn-back-pink",
    name: "An Organic Store",
    description:
      "Created a web-based store with an adaptive, responsive interface, tailored to improve user experience.Integrated Auth0 for secure user authentication, ensuring robust data protection and seamless login functionality",
    link: "https://organic-store-kartik.vercel.app/",
  },
  {
    iconUrl: pricewise,
    theme: "btn-back-red",
    name: "Expense-Tracker",
    description:
      "Built an Expense Tracker with cash-in, cash-out, and balance tracking using the MERN stack.Integrated multi-user authentication and authorization for secure access to personalized data for 100+ users",
    link: "https://expense-tracker-beige-chi.vercel.app/",
  },
  {
    iconUrl: threads,
    theme: "btn-back-green",
    name: "Employee Management System",
    description:"Developed an Employee Management System with role-based access control using JWT for secure user data.Integrated RESTful APIs for seamless front-end and back-end communication.",
    link: "https://github.com/kartik5026/StaffHub",
  },
  {
    iconUrl: car,
    theme: "btn-back-blue",
    name: "Flick-Hub",
    description:"Developed an interactive Movie/Show web app using React.js with a responsive interface, boosting user engagement by 20%.Integrated a SearchBar feature to enhance user experience.",
    link: "https://flick-hub-kartik.vercel.app/",
  },
  
  {
    iconUrl: estate,
    theme: "btn-back-black",
    name: "Coffee Shop",
    description:
      "Created a web-based Coffee Shop with an intuitive interface, improving user interaction by 20% through features such as Orders and Reviews/Messages.Implemented functionalities that facilitate seamless customer engagement and feedback.Enhanced SEO by 30% using Server Side Rendering (SSR) to improve online visibility and search rankings.",
    link: "https://coffee-shop-kartik.vercel.app/",
  },
];
