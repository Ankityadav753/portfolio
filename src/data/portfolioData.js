export const portfolioData = {
  personalInfo: {
    name: "Ankit Kumar",
    logoText: "AK",
    title: "Computer Science Engineering Student & Aspiring Software Engineer",
    titles: [
      "Computer Science Engineering Student",
      "Aspiring Software Engineer",
      "Full-Stack Web Developer",
      "Problem Solver"
    ],
    description:
      "Computer Science Engineering undergraduate at Madan Mohan Malaviya University of Technology with a strong foundation in software engineering, full-stack web development, and data structures & algorithms. Passionate about building practical, high-quality applications and solving real-world problems.",
    resumeUrl: "/resume.pdf",
    email: "ankitanshu749@email.com",
    location: "Gorakhpur, Uttar Pradesh, India",
    socials: {
      github: "https://github.com/Ankityadav753",
      linkedin: "https://www.linkedin.com/in/ankit-kumar-3b84902a6/"
    }
  },

  aboutHighlights: [
    {
      title: "Computer Science Engineering",
      subtitle: "B.Tech Undergraduate",
      description: "Pursuing B.Tech in CSE at Madan Mohan Malaviya University of Technology, Gorakhpur (2023–2027) with a CGPA of 8.37."
    },
    {
      title: "Software Engineering Focus",
      subtitle: "Industry Experience",
      description: "Hands-on internship experience in debugging production platforms, resolving UI inconsistencies, and crafting modular components."
    },
    {
      title: "Full-Stack Web Development",
      subtitle: "Modern Web Stacks",
      description: "Proficient in developing responsive client interfaces and RESTful backend architectures using React, Node.js, and modern tooling."
    },
    {
      title: "Problem-Solving Foundation",
      subtitle: "Algorithms & Core CS",
      description: "Strong command of Data Structures & Algorithms, Object-Oriented Programming, DBMS, Operating Systems, and Computer Networks."
    }
  ],

  education: [
    {
      degree: "B.Tech in Computer Science Engineering",
      institution: "Madan Mohan Malaviya University of Technology, Gorakhpur",
      location: "Gorakhpur, Uttar Pradesh",
      duration: "2023 – 2027",
      score: "CGPA: 8.37",
      details: "Comprehensive coursework in core computer science disciplines including Data Structures & Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems, and Computer Networks.",
      coursework: [
        "Data Structures & Algorithms",
        "Object-Oriented Programming",
        "DBMS",
        "Operating Systems",
        "Computer Networks"
      ]
    },
    {
      degree: "Class XII (BSEB)",
      institution: "GAJ College, Toryahi, Bihar",
      location: "Bihar, India",
      duration: "2020 – 2022",
      score: "90.4%",
      achievement: "District Topper in Class XII, securing 90.4%",
      details: "Completed senior secondary education under Bihar School Examination Board (BSEB) as District Topper."
    },
    {
      degree: "Class X (CBSE)",
      institution: "Sanskar Bharti Global School",
      location: "Delhi, India",
      duration: "2019 – 2020",
      score: "82.8%",
      details: "Completed secondary education under Central Board of Secondary Education (CBSE)."
    }
  ],

  skills: [
    {
      category: "Languages",
      items: ["C++", "C", "JavaScript"]
    },
    {
      category: "Frontend",
      items: ["HTML5", "CSS3", "React.js", "Tailwind CSS", "Redux Toolkit"]
    },
    {
      category: "Backend",
      items: ["Node.js", "Express.js", "REST APIs", "JWT", "Socket.io"]
    },
    {
      category: "Databases",
      items: ["MongoDB", "MySQL"]
    },
    {
      category: "Tools",
      items: ["Git", "GitHub", "VS Code", "Postman"]
    },
    {
      category: "Core Computer Science",
      items: [
        "Data Structures & Algorithms",
        "Object-Oriented Programming",
        "DBMS",
        "Operating Systems",
        "Computer Networks"
      ]
    }
  ],

  experience: [
    {
      role: "Software Engineer Intern",
      company: "Yuga Yatra Retail OPC Pvt. Ltd.",
      duration: "25th May to 25th July",
      location: "Remote | Bengaluru, India",
      project: "Rishtawaala",
      responsibilities: [
        "Worked on the Rishtawaala web platform by identifying, debugging, and resolving website issues to enhance stability and user experience.",
        "Collaborated with team members to resolve UI inconsistencies, page-level errors, and feature-related problems across the platform.",
        "Improved existing frontend functionality and responsive design across diverse viewports."
      ],
      technologies: ["React.js", "JavaScript", "HTML5", "CSS3", "Git", "GitHub"]
    },
    {
      role: "Frontend Developer Intern",
      company: "Dream Blend Solutions Pvt. Ltd.",
      duration: null,
      location: "Remote",
      responsibilities: [
        "Contributed to frontend web development and user interface implementation.",
        "Developed responsive UI components ensuring clean styling, cross-browser compatibility, and seamless device navigation.",
        "Collaborated on frontend workflows utilizing modern web development standards and modular component architecture."
      ],
      technologies: ["React.js", "JavaScript", "HTML5", "CSS3", "Git"]
    }
  ],

  projects: [
    {
      id: "tripmind-ai",
      title: "TripMind AI",
      tagline: "AI-Powered Travel Planning Platform",
      isFeatured: true,
      description:
        "An AI-powered travel planning platform designed to generate personalized travel plans and day-by-day itineraries with destination-based intelligence, realistic travel budget calculation, and responsive travel management.",
      features: [
        "AI-assisted trip planning with personalized day-by-day itinerary generation",
        "Destination-based planning supporting 35+ Indian hubs and 14 international destinations",
        "Smart Estimated Budget Engine with category cost breakdown (Stays, Food, Transit, Activities)",
        "Dynamic day timeline with persistent trip storage"
      ],
      technologies: ["React.js", "JavaScript", "Supabase", "Tailwind CSS", "AI APIs"],
      github: "https://github.com/Ankityadav753/Trip-Mind-AI",
      live: null
    },
    {
      id: "real-time-chat",
      title: "Real-Time Chat Application",
      tagline: "Full-Stack Messaging Platform",
      isFeatured: false,
      description:
        "A full-stack real-time chat application built with the MERN stack and Socket.io, featuring secure user authentication, instant messaging, and responsive chat room management.",
      features: [
        "Real-time instant messaging powered by Socket.io",
        "Secure user authentication and protected routes implemented with JWT",
        "One-to-one direct messaging and collaborative group chat rooms",
        "RESTful backend APIs with MongoDB chat history storage"
      ],
      technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "Socket.io", "JWT"],
      github: "https://github.com/Ankityadav753/real-chat-application-",
      live: null
    },
    {
      id: "serenhealth",
      title: "SerenHealth",
      tagline: "Healthcare Web Platform",
      isFeatured: false,
      description:
        "A 5-page responsive healthcare web application designed to streamline user access to healthcare services, medicine catalog discovery, ambulance booking, and doctor consultation.",
      features: [
        "5-page responsive healthcare web interface covering essential medical services",
        "Medicine search and healthcare service catalog discovery",
        "Ambulance booking interface and doctor consultation directory",
        "Clean CSS Flexbox/Grid layouts with client-side JavaScript interactions"
      ],
      technologies: ["HTML5", "CSS3", "JavaScript"],
      github: "https://github.com/Ankityadav753/frontend-project",
      live: null
    }
  ]
};
