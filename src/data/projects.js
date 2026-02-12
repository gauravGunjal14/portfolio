export const projects = [
  {
    id: 1,
    title: "Orion — DSA Visualizer",
    subtitle: "Making Data Structures & Algorithms visible, not abstract",
    imageUrl: "/projects/orion.png",

    description:
      "Orion is an interactive Data Structures and Algorithms visualizer built to help students and beginners truly understand how DSA works internally, instead of memorizing logic blindly.",

    details:
      "The core problem Orion solves is that most learners struggle with DSA because concepts remain abstract when taught only through code. Orion transforms these abstract ideas into visual, step-by-step animations. Users can see how arrays change during insertion or deletion, how sorting algorithms swap elements, and how each step affects the data structure in real time. The project focuses heavily on learning-first UX, clean animations, and intuitive controls, making complex topics easier to grasp. Orion also reflects my interest in combining problem-solving, frontend logic, and educational product design.",

    role:
      "Frontend Development • UI/UX Design • Logic Implementation",

    tech: ["HTML", "CSS", "JavaScript"],

    highlights: [
      "Step-by-step visualization of algorithms",
      "Clean, minimal UI focused on learning",
      "Sorting algorithms like Bubble, Merge & Quick Sort",
      "Beginner-friendly explanations through visuals",
    ],

    year: "2025",
    live: "https://orion14.netlify.app/",
    github: "https://github.com/gauravGunjal14/Orion",
    featured: true,
  },

  {
    id: 2,
    title: "PassMint — Password Generator",
    subtitle: "A practical security tool built with React",
    imageUrl: "/projects/passmint.png",

    description:
      "PassMint is a modern password generator that helps users create strong, secure, and customizable passwords instantly using a clean and responsive interface.",

    details:
      "PassMint was created to solve a real-world problem — people often reuse weak passwords because generating strong ones feels complicated. This project allows users to generate secure passwords by customizing length, character types, and difficulty level. From a development perspective, PassMint was built to practice core React concepts such as state management, component structure, event handling, and conditional rendering. The UI is designed to be simple and intuitive so users can generate and copy passwords in just one click.",

    role:
      "React Development • UI Design • State Management",

    tech: ["React", "JavaScript", "CSS"],

    highlights: [
      "Custom password length (up to 50 characters)",
      "Difficulty modes: Easy, Moderate, Hard",
      "One-click copy to clipboard",
      "Fully responsive across devices",
    ],

    year: "2025",
    live: "https://passmint14.netlify.app",
    github: "https://github.com/gauravGunjal14/PassMint",
    featured: true,
  },

  {
    id: 3,
    title: "Swiggy Clone",
    subtitle: "Understanding real-world frontend architecture",
    imageUrl: "/projects/swiggy.png",

    description:
      "A frontend clone of the Swiggy food delivery platform built with React, focusing on real-world application structure and API-driven UI.",

    details:
      "The Swiggy Clone project was built to understand how large-scale consumer applications are structured on the frontend. The project focuses on routing, API integration, component-based architecture, and dynamic UI rendering based on live data. It helped me gain hands-on experience with handling asynchronous data, managing state across components, and building layouts that resemble production-level applications.",

    role:
      "Frontend Engineering • API Integration",

    tech: ["React", "API", "Tailwind CSS"],

    highlights: [
      "Live API data rendering",
      "Routing with dynamic pages",
      "Reusable component architecture",
      "Production-style UI layout",
    ],

    year: "2025",
    live: "https://swiggy-clone-gauravgunjal14.netlify.app/",
    github: "https://github.com/gauravGunjal14/Swiggy-Clone",
    featured: false,
  },
];