// Real GitHub and Project Repository Links
export const GITHUB_PROFILE_URL = "https://github.com/Akashganiger";
export const LINKEDIN_PROFILE_URL = "https://linkedin.com/in/akash-ganiger-970071331";

export const PROJECT_MINDMAIL_GITHUB_URL = "https://github.com/Akashganiger/Email-Writer";
export const PROJECT_RESOURCE_ALLOCATION_GITHUB_URL = "https://github.com/Akashganiger/Cephius-Hackathon";
export const PROJECT_SIGN_LANGUAGE_GITHUB_URL = null; // Removed for ongoing project

// Certificate Previews
import certJavaImg from '../assets/java_full_stack.png';
import certAiImg from '../assets/AI_Fundamentals.png';
import certMlImg from '../assets/ML.png';
import resumePdfFile from '../assets/resume.pdf';

export const personalInfo = {
  name: "Akash Basavaraj Ganiger",
  role: "Java Full Stack Developer",
  shortIntro: "Computer Science Engineering student with hands-on experience developing full-stack web applications using React.js, Java, Spring Boot, Python, and MySQL.",
  aboutIntro: "Computer Science Engineering student with hands-on experience developing full stack web applications using React.js, JavaScript, Python, Java, Spring Boot, Node.js, Express.js, and MySQL. Skilled in building RESTful APIs, backend applications, database-driven systems, authentication, and API integration with a strong foundation in Data Structures, Algorithms, AI, and Machine Learning.",
  location: "Dharwad, Karnataka",
  phone: "+91-8073794020",
  phoneDisplay: "+91 80737 94020",
  email: "akashganiger1@gmail.com",
  github: GITHUB_PROFILE_URL,
  linkedin: LINKEDIN_PROFILE_URL,
  resumeUrl: resumePdfFile,
  status: "Available for SDE Roles & Internships",
  
  // Academic Background
  education: [
    {
      id: "be",
      degree: "B.E. Computer Science and Engineering",
      institution: "Alva’s Institute of Engineering and Technology",
      score: "8.6 CGPA",
      period: "2023 – Present",
      location: "Moodbidri, Karnataka",
      current: true
    },
    {
      id: "puc",
      degree: "PUC (Pre-University Course)",
      institution: "Kittel Science College",
      score: "88.83%",
      period: "2021 – 2023",
      location: "Dharwad, Karnataka",
      current: false
    },
    {
      id: "sslc",
      degree: "SSLC (10th Standard)",
      institution: "Government High School, Lokur",
      score: "91.04%",
      period: "2021",
      location: "Dharwad, Karnataka",
      current: false
    }
  ],

  focusAreas: [
    {
      title: "Full-Stack Web Development",
      description: "Developing robust frontends in React.js paired with scalable REST APIs using Spring Boot, Node.js/Express, and MySQL."
    },
    {
      title: "Applied AI, ML & NLP",
      description: "Implementing NLP pipelines with T5, MediaPipe, Python, and Gemini API for practical automated workflows."
    },
    {
      title: "Data Structures & Problem Solving",
      description: "Consistent problem solver with 130+ LeetCode problems solved and strong object-oriented design principles."
    }
  ],

  metrics: [
    { label: "LeetCode Solved", value: "130+ Problems", detail: "Arrays, Binary Search, Stacks" },
    { label: "B.E. Academic Record", value: "8.6 CGPA", detail: "Alva's Institute of Engg." },
    { label: "PUC Board Score", value: "88.83%", detail: "Kittel Science College" },
    { label: "SSLC Board Score", value: "91.04%", detail: "Govt High School, Lokur" }
  ]
};

export const skillsData = [
  {
    id: "programming",
    category: "Programming",
    icon: "Code2",
    skills: ["Java", "Python", "JavaScript", "SQL"]
  },
  {
    id: "ai-ml",
    category: "AI & Machine Learning",
    icon: "Brain",
    skills: [
      "Artificial Intelligence",
      "Machine Learning Fundamentals",
      "NLP",
      "Generative AI & LLM Fundamentals"
    ]
  },
  {
    id: "frontend",
    category: "Frontend",
    icon: "Layout",
    skills: ["React.js", "HTML5", "CSS3"]
  },
  {
    id: "backend",
    category: "Backend",
    icon: "Server",
    skills: [
      "Python Flask",
      "Spring Boot",
      "REST APIs",
      "JDBC",
      "JPA",
      "Hibernate",
      "Authentication",
      "CRUD Operations"
    ]
  },
  {
    id: "database",
    category: "Database",
    icon: "Database",
    skills: ["MySQL", "Database Fundamentals"]
  },
  {
    id: "tools",
    category: "Tools",
    icon: "Wrench",
    skills: ["Git", "GitHub", "Postman", "VS Code", "IntelliJ IDEA", "Maven"]
  },
  {
    id: "other",
    category: "Other",
    icon: "Sparkles",
    skills: ["API Integration", "Problem Solving", "Data Structures & Algorithms"]
  }
];

export const projectsData = [
  {
    id: "mindmail-ai",
    title: "MindMail – AI Email Assistant Platform",
    technologies: ["React", "Java", "Spring Boot", "Gemini API"],
    badge: "AI & Full Stack",
    year: "2026",
    isOngoing: false,
    description: [
      "Full-stack AI email platform for intelligent reply generation, summarization, smart replies, and action-item extraction.",
      "Built a Chrome Extension integrating the AI assistant directly into Gmail for seamless email reply generation.",
      "Implemented tone-based email generation tailored for professional and personal communications.",
      "Integrated React frontend with Spring Boot REST APIs and Gemini API for responsive AI-powered email processing."
    ],
    githubUrl: PROJECT_MINDMAIL_GITHUB_URL,
    viewProjectUrl: PROJECT_MINDMAIL_GITHUB_URL
  },
  {
    id: "smart-resource-allocation",
    title: "Smart Resource Allocation and Volunteer Management System",
    technologies: ["React", "Java", "Spring Boot", "MySQL"],
    badge: "Enterprise Full Stack",
    year: "2026",
    isOngoing: false,
    description: [
      "Developed a full-stack platform for managing volunteers, surveys, and community resource allocation.",
      "Designed REST APIs and integrated them with React-based frontend components.",
      "Built dashboards to visualize community requirements and volunteer availability in real-time.",
      "Implemented CRUD-based workflows and database integration using MySQL."
    ],
    githubUrl: PROJECT_RESOURCE_ALLOCATION_GITHUB_URL,
    viewProjectUrl: PROJECT_RESOURCE_ALLOCATION_GITHUB_URL
  },
  {
    id: "sign-language-nlp",
    title: "AI-Based Continuous Indian Sign Language Recognition Using NLP Framework",
    technologies: ["MediaPipe Holistic", "Bidirectional LSTM", "Attention", "T5", "NLP"],
    badge: "Applied AI Research",
    isOngoing: true, // Ongoing research project
    description: [
      "Developing a real-time continuous Indian Sign Language recognition system using MediaPipe Holistic and Bidirectional LSTM with Attention for sign-to-text conversion.",
      "Integrating T5-based NLP for sentence generation, multilingual translation, and text-to-speech.",
      "Building an offline, CPU-based web application supporting English, Kannada, Hindi, Tamil, and Telugu."
    ],
    githubUrl: null, // No GitHub link for ongoing project
    viewProjectUrl: "#"
  }
];

export const achievementsData = [
  {
    id: "leetcode-130",
    title: "130+ LeetCode Problems Solved",
    description: "Solved 130+ algorithmic challenges across Arrays, Strings, Binary Search, and Stacks.",
    category: "Coding & DSA",
    badge: "LeetCode",
    icon: "Code"
  },
  {
    id: "leetcode-50-days",
    title: "50 Days Coding Badge on LeetCode",
    description: "Earned the 50 Days Coding Badge on LeetCode through consistent daily problem-solving practice.",
    category: "Consistency",
    badge: "50 Days Streak",
    icon: "Flame"
  },
  {
    id: "hackerrank-30",
    title: "30+ HackerRank Challenges Solved",
    description: "Solved 30+ problem challenges in Algorithms and SQL query design on HackerRank.",
    category: "Algorithms & SQL",
    badge: "HackerRank",
    icon: "CheckSquare"
  },
  {
    id: "national-hackathon",
    title: "National Level Hackathon Participant",
    description: "Participated in a National Level Hackathon and successfully designed and developed a full-stack web application.",
    category: "Hackathon",
    badge: "Full-Stack Project",
    icon: "Trophy"
  },
  {
    id: "github-contributions",
    title: "10+ Open GitHub Contributions",
    description: "Made 10+ GitHub contributions across software development projects and repositories.",
    category: "Open Source & Git",
    badge: "Git & GitHub",
    icon: "GitBranch"
  }
];

export const certificatesData = [
  {
    id: "cert-java-fullstack",
    title: "Java Full Stack Developer Specialization",
    issuer: "Coursera (Board Infinity)",
    partner: "Board Infinity",
    image: certJavaImg,
    issueDate: "May 2026",
    verifyUrl: "https://coursera.org/verify/specialization/SU4O2BJIAQ0Z",
    credentialCode: "SU4O2BJIAQ0Z",
    courseCount: "3 Courses",
    topics: [
      "Fundamentals of Java Programming",
      "Frontend for Java Full Stack Development",
      "Data Structures & Backend with Java (Spring & Spring Boot)"
    ]
  },
  {
    id: "cert-ai-fundamentals",
    title: "AI Fundamentals",
    issuer: "Coursera (Google Authorized)",
    partner: "Google",
    image: certAiImg,
    issueDate: "June 2026",
    verifyUrl: "https://coursera.org/verify/Q9WZ36ZSBN88",
    credentialCode: "Q9WZ36ZSBN88",
    courseCount: "Course Certificate",
    topics: [
      "Artificial Intelligence Fundamentals",
      "Machine Learning Concepts",
      "Real-world AI Application Frameworks"
    ]
  },
  {
    id: "cert-machine-learning",
    title: "Machine Learning Specialization",
    issuer: "Coursera (University of Washington)",
    partner: "University of Washington",
    image: certMlImg,
    issueDate: "April 2026",
    verifyUrl: "https://coursera.org/verify/specialization/5STJ01DHFMAV",
    credentialCode: "5STJ01DHFMAV",
    courseCount: "4 Courses",
    topics: [
      "ML Foundations: A Case Study Approach",
      "Machine Learning: Regression",
      "Machine Learning: Classification",
      "Clustering & Information Retrieval"
    ]
  }
];
