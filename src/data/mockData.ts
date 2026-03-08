// Mock data to replace DatoCMS calls
export const mockProfileBanner = {
  backgroundImage: {
    url: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
  },
  headline: "Computer Science Engineering Student | AI & ML Enthusiast",
  resumeLink: {
    url: "#",
  },
  linkedinLink: "https://linkedin.com/in/jayendra-r",
  profileSummary:
    "BTech CSE student at VIT with expertise in AI, Machine Learning, and Data Engineering. Passionate about building intelligent systems and solving real-world problems using cutting-edge technologies.",
};

export const mockContactMe = {
  profilePicture: {
    url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
  },
  name: "Jayendra Rathod",
  title: "Computer Science Engineering Student",
  summary:
    "BTech CSE student specializing in AI, Machine Learning, and Data Engineering with hands-on experience in building intelligent systems.",
  companyUniversity: "Vellore Institute of Technology",
  linkedinLink: "https://linkedin.com/in/jayendra-r",
  email: "jayendrarathod07@gmail.com",
  phoneNumber: "+91-7058519325",
};

// Mock data for timeline items
export const mockTimeline = [
  {
    name: "Prodigal AI",
    timelineType: "work" as const,
    title: "Gen AI Intern",
    techStack: "Python, YOLOv8, LLMs, REST APIs, JWT",
    summaryPoints: [
      "Developed AI-based video repurposing pipelines using YOLOv8, LLMs, and algorithmic scoring for accurate content segmentation and analysis",
      "Implemented speech-to-text processing and AI captioning, improving video accessibility and synchronization accuracy",
      "Built and optimized Python backend services, integrated 5+ REST APIs, and used JWT authentication for secure and scalable systems",
    ],
    dateRange: "Sept 2025 - Feb 2026",
  },
  {
    name: "TPP Consultation",
    timelineType: "work" as const,
    title: "Data Engineer Intern",
    techStack: "Python, MySQL, ETL Pipelines, SQL",
    summaryPoints: [
      "Optimized MySQL queries and database schemas, improving data retrieval performance across 3 client-facing projects",
      "Designed and maintained ETL pipelines using Python and SQL to process large datasets for reporting and analysis",
      "Enhanced data pipeline reliability by implementing logging, monitoring, and error-handling mechanisms, reducing processing failures and improving performance by 50%",
    ],
    dateRange: "Dec 2024 - Feb 2025",
  },
  {
    name: "Vellore Institute of Technology",
    timelineType: "education" as const,
    title: "Bachelor of Technology in Computer Science Engineering",
    techStack: "Data Structures, Algorithms, Machine Learning, DBMS",
    summaryPoints: [
      "CGPA: 7.5/10",
      "Core Member of AI Club VIT Bhopal - Social media management and AI project coordination",
      "Core Member of Linux Club - Event management and technical workshop organization",
      "Volleyball Player at Svabhimani Club Akola",
    ],
    dateRange: "2022 - May 2026",
  },
  {
    name: "Shri Samarth Junior College of Science",
    timelineType: "education" as const,
    title: "Higher Secondary Certificate (HSC)",
    techStack: "",
    summaryPoints: [
      "CGPA: 8.4/10",
      "Completed higher secondary education with strong academic performance",
    ],
    dateRange: "2020 - June 2022",
  },
];

// Mock data for skills
export const mockSkills = [
  {
    name: "C++",
    category: "Programming Languages",
    description: "Object-oriented programming and competitive coding",
    icon: "FaJava",
    image: require("../images/C++.png"),
  },
  {
    name: "Python",
    category: "Programming Languages",
    description: "AI/ML development, data processing, and backend services",
    icon: "SiTypescript",
    image: require("../images/Python-logo-notext.svg.png"),
  },
  {
    name: "Java",
    category: "Programming Languages",
    description: "Object-oriented programming and application development",
    icon: "FaJava",
    image: require("../images/java.jpeg"),
  },
  {
    name: "OpenCV",
    category: "Technologies & Frameworks",
    description: "Computer vision and image processing",
    icon: "FaReact",
    image: require("../images/Computer-Vision.jpg"),
  },
  {
    name: "MediaPipe",
    category: "Technologies & Frameworks",
    description: "Hand tracking and gesture recognition",
    icon: "FaReact",
    image: require("../images/mediapipe.png"),
  },
  {
    name: "TensorFlow",
    category: "Technologies & Frameworks",
    description: "Deep learning and neural networks",
    icon: "FaReact",
    image: require("../images/TensorFlow_logo.png"),
  },
  {
    name: "Stable-Baselines3",
    category: "Technologies & Frameworks",
    description: "Reinforcement learning algorithms",
    icon: "FaNodeJs",
    image: require("../images/stable baselines3.jpg"),
  },
  {
    name: "Flask",
    category: "Technologies & Frameworks",
    description: "Python web framework for REST APIs",
    icon: "SiSpringboot",
    image: require("../images/flask.png"),
  },
  {
    name: "FastAPI",
    category: "Technologies & Frameworks",
    description: "Modern Python web framework for building APIs",
    icon: "SiSpringboot",
    image: require("../images/fastapi.png"),
  },
  {
    name: "Streamlit",
    category: "Technologies & Frameworks",
    description: "Python framework for building data science web applications",
    icon: "FaReact",
    image: require("../images/streamlit.png"),
  },
  {
    name: "Celery",
    category: "Technologies & Frameworks",
    description: "Distributed task queue for asynchronous processing",
    icon: "FaNodeJs",
    image: require("../images/celery.jpg"),
  },
  {
    name: "React",
    category: "Technologies & Frameworks",
    description: "Frontend library for building user interfaces",
    icon: "FaReact",
    image: require("../images/react.png"),
  },
  {
    name: "TypeScript",
    category: "Technologies & Frameworks",
    description: "Typed superset of JavaScript for scalable applications",
    icon: "SiTypescript",
    image: require("../images/type script.png"),
  },
  {
    name: "TailwindCSS",
    category: "Technologies & Frameworks",
    description: "Utility-first CSS framework for rapid UI development",
    icon: "FaReact",
    image: require("../images/tailwandcss.png"),
  },
  {
    name: "Recharts",
    category: "Technologies & Frameworks",
    description: "React charting library for data visualization",
    icon: "FaReact",
    image: require("../images/recharts.jpg"),
  },
  {
    name: "MySQL",
    category: "Databases & Tools",
    description: "Relational database management and optimization",
    icon: "SiMysql",
    image: require("../images/ml.jpg"),
  },
  {
    name: "PostgreSQL",
    category: "Databases & Tools",
    description: "Advanced relational database with powerful features",
    icon: "SiPostgresql",
    image: require("../images/ml.jpg"),
  },
  {
    name: "Redis",
    category: "Databases & Tools",
    description: "In-memory data store for caching and real-time applications",
    icon: "SiMysql",
    image: require("../images/redis.png"),
  },
  {
    name: "Docker",
    category: "Databases & Tools",
    description: "Containerization platform for deployment and orchestration",
    icon: "FaDocker",
    image: require("../images/dcker.png"),
  },
  {
    name: "AWS",
    category: "Databases & Tools",
    description: "Cloud deployment and services",
    icon: "FaAws",
    image: require("../images/ml.jpg"),
  },
  {
    name: "Git & GitHub",
    category: "Databases & Tools",
    description: "Version control and collaboration",
    icon: "FaGitAlt",
    image: require("../images/git.png"),
  },
  {
    name: "Machine Learning",
    category: "Core Competencies",
    description: "ML algorithms, model training, and optimization",
    icon: "FaReact",
    image: require("../images/ml.jpg"),
  },
  {
    name: "Computer Vision",
    category: "Core Competencies",
    description: "Image processing and object detection",
    icon: "FaReact",
    image: require("./images/Computer-Vision.jpg"),
  },
  {
    name: "Data Analytics",
    category: "Core Competencies",
    description: "Data analysis, visualization, and insights",
    icon: "SiPostgresql",
    image: require("./images/data analy.jpg"),
  },
  {
    name: "DSA",
    category: "Core Competencies",
    description: "Data Structures and Algorithms problem-solving",
    icon: "FaNodeJs",
    image: require("../images/dsa.jpg"),
  },
];

// Mock data for work permit
export const mockWorkPermit = {
  visaStatus: "Authorized to work",
  expiryDate: new Date("2025-12-31"),
  summary: "Full work authorization with no restrictions",
  additionalInfo: "Eligible to work for any employer in the country",
};

export const mockProjects = [
  {
    title: "Intelligent Analytics Platform",
    description:
      "End-to-end AI-powered analytics solution combining data ingestion, automated EDA, AutoML model training, deployment, and monitoring. Features real-time dashboards, SHAP-based model explainability, REST API deployment, WebSocket support for live updates, and role-based access control. Full-stack deployment with Docker Compose and Render.",
    techUsed: "Python, FastAPI, React, TypeScript, PostgreSQL, Redis, Docker, TailwindCSS, Recharts",
    image: {
      url: "/images/sms.jpg",
    },
  },
  {
    title: "Reinforcement Learning Stock Trading Agent",
    description:
      "AI trading agent using Deep Q-Network (DQN) trained on 10,000+ historical stock data points with 95% accuracy in buy/sell signal generation. Custom trading environment with OpenAI Gym integrated with MySQL database containing 2+ years of market data.",
    techUsed: "Python, TensorFlow, Stable-Baselines3, MySQL",
    image: {
      url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
  },
  {
    title: "Virtual Keyboard with Hand Tracking",
    description:
      "Computer vision-based virtual keyboard supporting 26 alphabets and 10 numbers with 95% keystroke accuracy. Integrated MediaPipe framework detecting 21 hand landmarks with 95% accuracy across 1,000+ test gestures. Deployed on AWS with Tkinter interface.",
    techUsed: "Python, OpenCV, MediaPipe, Tkinter",
    image: {
      url: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
  },
  {
    title: "Namaste AI - Generative Mental Health Chatbot",
    description:
      "Generative AI chatbot delivering empathetic responses for stress, trauma, and anxiety support with secure MySQL storage. Sentiment analysis and risk detection pipeline with 90% accuracy in mental health classification. Auto-suggests verified mental health helpline numbers.",
    techUsed: "Python, OpenAI API, Ollama 3, MySQL",
    image: {
      url: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
  },
  {
    title: "Netflix Recommendation System",
    description:
      "Built a movie recommendation system using collaborative filtering and content-based techniques. Analyzed user ratings data, performed data preprocessing, and generated personalized recommendations with improved accuracy. Includes data visualization and performance evaluation dashboards.",
    techUsed: "Python, Pandas, Scikit-learn, MySQL, Power BI",
    image: {
      url: "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?auto=format&fit=crop&w=800&q=80",
    },
  },
  {
    title: "Smart Resume Screener",
    description:
      "AI-powered resume screening system that parses resumes, extracts key skills, and matches candidates to job descriptions using NLP techniques. Automated shortlisting reduces manual screening time and improves candidate-job fit accuracy.",
    techUsed: "Python, NLP, Scikit-learn, Flask, MySQL",
    image: {
      url: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
    },
  },
  {
    title: "CIFAR-10: ResNet vs CNN Comparison",
    description:
      "Comparative study of a custom CNN and ResNet architecture on the CIFAR-10 dataset. Implemented training pipelines, evaluated accuracy and loss curves, and analyzed performance trade-offs between deep residual networks and standard CNNs.",
    techUsed: "Python, TensorFlow/Keras, Jupyter Notebook, NumPy, Matplotlib",
    image: {
      url: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    },
  },
  {
    title: "Valentine’s Day Website for Partner",
    description:
      "Designed and developed a personalized Valentine’s Day website featuring romantic animations, messages, and interactive sections. Includes responsive design, smooth transitions, and custom content for a memorable experience.",
    techUsed: "HTML, CSS, JavaScript",
    image: {
      url: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80",
    },
  },
];

// Mock data for certifications
export const mockCertifications = [
  {
    title: "SQL on Oracle Cloud",
    issuer: "Oracle University",
    issuedDate: "2024",
    link: "https://www.oracle.com/university/",
    iconName: "university",
  },
  {
    title: "Problem Solver DSA",
    issuer: "FacePrep",
    issuedDate: "2024",
    link: "https://www.faceprep.in/",
    iconName: "university",
  },
  {
    title: "OCI Generative AI Professional",
    issuer: "Oracle University",
    issuedDate: "2024",
    link: "https://www.oracle.com/university/",
    iconName: "university",
  },
  {
    title: "Data Analytics Fundamentals",
    issuer: "Coursera",
    issuedDate: "2024",
    link: "https://www.coursera.org/",
    iconName: "coursera",
  },
];
