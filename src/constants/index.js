import {
    mobile,
    backend,
    creator,
    web,
    cpp,
    python,
    reactjs,
    git,
    github1,
    instagram,
    linkedin,
    leetcode,
    whatsapp,
    job,
    hackerrank,
    tsf,
    iitm,
    javascript,
    vuejs,
    typescript,
    html,
    css,
    mui,
    redux,
    java,
    nodejs,
    mongodb,
    docker,
    figma,
    threejs,
    tailwind,
    alanAI,
    clone,
    tripguide,
    codechef,
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
      title: "Full stack Developer",
      icon: web,
    },
    {
      title: "Mobile App Developer",
      icon: mobile,
    },
    {
      title: "UI/UX Designer",
      icon: backend,
    },
    {
      title: "Competitive Programmer",
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
      name: "Javascript",
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
      name: "Python",
      icon: python,
    },
    {
      name: "Cpp",
      icon: cpp,
    },
    {
      name: "Java",
      icon: java,
    },
    {
      name: "Material UI",
      icon: mui,
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
      name: "Vue JS",
      icon: vuejs,
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

  const social = [
    {
      name: "github1",
      icon: github1,
      link: "https://github.com/Arunjagan12",
    },
    {
      name: "instagram",
      icon: instagram,
      link: "https://www.instagram.com/arun.jegan.12/",
    },
    {
      name: "linkedin",
      icon: linkedin,
      link: "https://www.linkedin.com/in/j-arun-b5827b229/",
    },
    {
      name: "whatsapp",
      icon: whatsapp,
      link: "https://api.whatsapp.com/send/?phone=919080270736&text&type=phone_number&app_absent=0",
    },
    {
      name: "codechef",
      icon: codechef,
      link: "https://www.codechef.com/users/arun_172",
    },

    {
      name: "hackerrank",
      icon: hackerrank,
      link: "https://www.hackerrank.com/Arunjagan12?hr_r=1",
    }

  ];
  
  const experiences = [
    {
      title: "Web Developer(intern)",
      company_name: "The Sparks Foundation",
      icon: tsf,
      iconBg: "#383E56",
      date: "October 2022 - November 2022",
      points: [
        "Building and sustaining web applications with the use of HTML, CSS, JavaScript, and other associated technologies.",
        "Executing responsive design and verifying cross-browser compatibility.",
        "Engaging in code evaluations and providing constructive inputs to other developers.",
      ],
    },
    {
      title: "Campus Ambassador",
      company_name: "E-cell IIT Madras",
      icon: iitm,
      iconBg: "#E6DEDD",
      date: "December 2022 - March 2023",
      points: [
        "Representing the company or organization on campus.",
        "Creating brand awareness.",
        "Conducting market research.",
        "Providing feedback and suggestions.",
      ],
    },
   
  ];
  

  
  const projects = [
    {
      name: "Career Cruiser",
      description:
        "The job searching app is created using React Native, a popular framework for building mobile applications. This app utilizes the Jsearch API from Rapid API to fetch job details. With the app, users can search for jobs by keywords, location, and job type. The app displays a list of job results with key details such as job title, company name, location, and salary (if available). Users can also view detailed information about each job and save their favorite jobs for later. The app features a user-friendly interface and easy navigation. It provides a convenient way for job seekers to browse and apply for job openings on their mobile devices. ",
      tags: [
        {
          name: "React Native",
          color: "blue-text-gradient",
        },
        {
          name: "JSearchAPI",
          color: "green-text-gradient",
        },
        {
          name: "Mobile App",
          color: "pink-text-gradient",
        },
      ],
      image: job,
      source_code_link: "https://github.com/Arunjagan12/Career-Cruiser",
    },
    {
      name: "Travel Consultant",
      description:
        "An Advanced Travel Consultant application created using react utilizes the Google Maps API to display a map that allows users to search for hotels, restaurants, tourist sites, and other points of interest. The map displays markers for the searched places with respective images, making it easy for users to identify them. The app uses Travel API and Weather API from Rapid API to provide additional information on the searched places such as ratings, reviews, pricing, weather conditions, and travel information. Users can also get directions to their chosen destination and view street views. The app features a user-friendly interface with easy navigation and search functionality, providing a convenient and enjoyable experience for users who are planning their travels or exploring their surroundings.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "rapidapi",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/Arunjagan12/Travel_Consultant",
    },
    {
      name: "AI News App",
      description:
        "A news app created using React and ALAN AI allows users to fetch the news using voice commands instead of manually typing in search queries.When a user opens the app, they can speak a voice command such as 'Give me the latest news' or 'Show me news from CNN'. ALAN AI will then process the command and fetch the relevant news articles from various sources. The app would display the news articles in a visually appealing and user-friendly format, allowing users to read the news without having to navigate away from the app.",
      tags: [  
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "NewsAPI",
          color: "green-text-gradient",
        },
        {
          name: "AlanAI",
          color: "pink-text-gradient",
        },
      ],
      image: alanAI,
      source_code_link: "https://github.com/Arunjagan12/AI-news-App",
    },
    {
      name: "Instagram login page clone",
      description:
        "An Instagram login page clone using HTML and CSS involves replicating the design and layout of the official Instagram login page using HTML for structure and CSS for styling.The login page typically includes a form for users to enter their 'username' and 'password', along with a 'Forgot password' link and a 'Sign up' link. The form has been styled using CSS to match the Instagram brand colors and fonts, as well as other design elements such as the Instagram logo and background image.",
      tags: [  
        {
          name: "Html",
          color: "blue-text-gradient",
        },
        {
          name: "Css",
          color: "green-text-gradient",
        },
        {
          name: "Clone",
          color: "pink-text-gradient",
        },
      ],
      image: clone,
      source_code_link: "https://github.com/Arunjagan12/INSTAGRAM-login-page-clone",
    },
  ];
  
  export { services, technologies, experiences, projects, social };