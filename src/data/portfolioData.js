export const portfolioData = {
  personalInfo: {
    name: "Ankit Kumar",
    logoText: "AK",
    title: "Software Engineer & MERN Stack Developer",
    titles: [
      "Frontend Developer",
      "React Developer",
      "MERN Stack Developer",
      "Competitive Programmer",
      "Problem Solver"
    ],
    description: "A passionate Computer Science student who loves building scalable web applications and solving challenging DSA problems. Focused on creating beautiful, accessible, and high-performance user interfaces.",
    resumeUrl: "#", // User can replace this with actual PDF link
    email: "ankitkumar.dev.cs@gmail.com", // Realistic email based on name
    phone: "+91 XXXXXXXXXX",
    location: "Gorakhpur, Uttar Pradesh, India",
    socials: {
      github: "https://github.com", // Standard links, user can customize
      linkedin: "https://linkedin.com",
      leetcode: "https://leetcode.com",
      codeforces: "https://codeforces.com"
    }
  },
  education: [
    {
      degree: "B.Tech in Computer Science & Engineering",
      institution: "Madan Mohan Malaviya University of Technology (MMMUT)",
      location: "Gorakhpur, UP, India",
      duration: "2023 – 2027",
      cgpa: "8.38",
      details: "Relevant coursework includes Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems, and Software Engineering."
    }
  ],
  skills: [
    {
      category: "Frontend",
      items: [
        { name: "HTML", level: 95 },
        { name: "CSS", level: 90 },
        { name: "JavaScript", level: 92 },
        { name: "React", level: 88 },
        { name: "Redux", level: 80 },
        { name: "Tailwind CSS", level: 85 }
      ]
    },
    {
      category: "Backend & Databases",
      items: [
        { name: "Node.js", level: 82 },
        { name: "Express.js", level: 80 },
        { name: "MongoDB", level: 78 }
      ]
    },
    {
      category: "Programming Languages",
      items: [
        { name: "C++", level: 95 },
        { name: "C", level: 85 },
        { name: "JavaScript", level: 92 }
      ]
    },
    {
      category: "Tools & Technologies",
      items: [
        { name: "Git", level: 88 },
        { name: "GitHub", level: 90 },
        { name: "VS Code", level: 92 },
        { name: "Postman", level: 85 },
        { name: "JWT", level: 80 }
      ]
    }
  ],
  projects: [
    {
      id: "serenhealth",
      title: "SerenHealth",
      subtitle: "Healthcare & Patient Management Platform",
      description: "A comprehensive healthcare application designed to streamline medical services. Features direct search for medicines, online doctor appointment booking, rapid ambulance tracking/booking, and an integrated health-tracking BMI calculator.",
      features: [
        "Medicine Search with dynamic availability filters",
        "Doctor Appointment scheduling and slot management",
        "Ambulance Booking simulator with real-time location visualization",
        "BMI Calculator with personalized health recommendations"
      ],
      tech: ["HTML", "CSS", "JavaScript"],
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1000",
      github: "https://github.com",
      live: "https://example.com"
    },
    {
      id: "chatapp",
      title: "Real-Time Chat App",
      subtitle: "Full-Featured Messaging Application",
      description: "A real-time messaging application supporting one-to-one direct messages and group chats. Powered by Socket.io for instantaneous message delivery, protected by JWT authentication, and structured using the MERN stack.",
      features: [
        "Secure JSON Web Token (JWT) user authentication and authorization",
        "Real-time messaging, typing indicators, and user online/offline status using Socket.io",
        "Group Chat creation, customization, and member management",
        "Responsive, modern chat UI with interactive message search"
      ],
      tech: ["MongoDB", "Express", "React", "Node", "Socket.io"],
      image: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?auto=format&fit=crop&q=80&w=1000",
      github: "https://github.com",
      live: "https://example.com"
    }
  ],
  experience: [
    {
      role: "Frontend Developer",
      company: "Dream Blend Solutions Pvt. Ltd.",
      duration: "Present",
      responsibilities: [
        "Developing responsive and high-fidelity web applications using React and Redux.",
        "Collaborating with UI/UX designers to translate design wireframes into pixel-perfect components.",
        "Optimizing application components for maximum speed and scalability across diverse device viewports."
      ],
      technologies: ["React", "Redux", "CSS", "JavaScript", "Git"]
    },
    {
      role: "Software Engineer Intern",
      company: "Yugayatra Retail OPC Pvt. Ltd.",
      duration: "3 Months",
      responsibilities: [
        "Implemented critical frontend flows and dashboard panels to improve analytics visualization.",
        "Refactored legacy code to use modern ES6 syntax and React hooks, boosting code maintainability by 35%.",
        "Created reusable forms, navigation components, and API integration layers using Axios."
      ],
      technologies: ["JavaScript", "HTML", "CSS", "React", "REST APIs", "Postman"]
    }
  ],
  achievements: [
    {
      label: "DSA Problems Solved",
      count: 500,
      suffix: "+"
    },
    {
      label: "LeetCode Problems",
      count: 100,
      suffix: "+"
    },
    {
      label: "Hackathons Attended",
      count: 3,
      suffix: "+"
    },
    {
      label: "Projects Completed",
      count: 12,
      suffix: "+"
    },
    {
      label: "Certificates Earned",
      count: 8,
      suffix: "+"
    }
  ],
  codingProfiles: [
    {
      name: "GitHub",
      username: "ankitkumar-dev",
      url: "https://github.com",
      platformColor: "#171515",
      logo: "FaGithub"
    },
    {
      name: "LeetCode",
      username: "ankit_leetcode",
      url: "https://leetcode.com",
      platformColor: "#FFA116",
      logo: "SiLeetcode"
    },
    {
      name: "Codeforces",
      username: "ankit_cf",
      url: "https://codeforces.com",
      platformColor: "#3182CE",
      logo: "SiCodeforces"
    },
    {
      name: "LinkedIn",
      username: "ankitkumar-linkedin",
      url: "https://linkedin.com",
      platformColor: "#0077B5",
      logo: "FaLinkedin"
    }
  ]
};
