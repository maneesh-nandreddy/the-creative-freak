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
      title: "3D Designer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Video Editor",
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
      name: "Canva",
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
      name: "Python",
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
      title: "React.js Developer",
      company_name: "TechFino Capital pvt.limited",
      icon: starbucks,
      iconBg: "#383E56",
      date: "June 2022 - August 2022",
      points: [
        "During my internship at TCPL, a B2B non-banking finance company, I had the opportunity to delve into the dynamic field of web development. ",
        "The company was undergoing a pivotal transition, migrating its core framework from Angular 8 to the widely adopted React framework. ",
        "This experience provided me with invaluable insights into the inner workings of both frameworks. One particular aspect that stood out during my time there was the intricate process of data binding in Angular components.",
        "This journey presented significant challenges, compelling me to acquire and apply diverse data binding techniques to overcome these obstacles.",
      ],
    },
    {
      title: "Freelance Video Editor",
      company_name: "worked for few youtubers",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - present",
      points: [
        "In the late 2020s, I discovered my passion for video editing and began experimenting with the art. ",
        "What started as a hobby quickly evolved into freelancing, where I collaborated with various YouTubers to transform their content.",
        "With a keen eye for detail, I specialize in crafting visually appealing shots, enhancing videos, templates, and thumbnails to captivate audiences.",
      ],
    },
    /*{
      title: "Web Developer",
      company_name: "Shopify",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Meta",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },*/
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
      name: "Soccer Video Summarization",
      description:
        "Sports video summarization involves creating a concise version of key events in a video, Techniques like key frame extraction and event detection are used. The model pipeline includes video pre-processing, feature extraction, event detection, and summary generation. Input videos are segmented into frames, with one frame per second. Frames are classified using a trained ResNet model, and the user's chosen labels, such as (yellow card) or (foul) determine the summary content.",
      tags: [
        {
          name: "Machine_Learning",
          color: "blue-text-gradient",
        },
        {
          name: "Computer Vision",
          color: "green-text-gradient",
        },
        // {
        //   name: "tailwind",
        //   color: "pink-text-gradient",
        // },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Food Order Application",
      description:
        "Designed with an intuitive web interface and powered by the AngularJS framework, this food ordering platform guarantees a seamless dining experience. The website allows you to explore an array of menu options, effortlessly add items to your cart, and customize your order with just a few clicks. Enhance your dining journey by rating and reviewing your favorite dishes, contributing to a community-driven platform that values your palate.",
      tags: [
        {
          name: "Angular",
          color: "blue-text-gradient",
        },
        {
          name: "DataBinding",
          color: "green-text-gradient",
        },
        // {
        //   name: "scss",
        //   color: "pink-text-gradient",
        // },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Action Horror Game using  Blender & Unreal Engine",
      description:
        "The game consists of a hero under your control, navigating through inbuilt controls for seamless movement and weapon switching. Roam the selected stage, uncover hidden gems, and conquer the crown to progress to the next level.",
      tags: [
        {
          name: "Blender",
          color: "blue-text-gradient",
        },
        // {
        //   name: "",
        //   color: "green-text-gradient",
        // },
        {
          name: "Unreal-Engine",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };