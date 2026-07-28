
import { Experience, Project, SkillGroup, Education, Certification } from './types';

export const PERSONAL_INFO = {
  fullName: "Carlos Michael Marpaung",
  role: "Software Engineer",
  summary: "Software Engineer with experience in backend development, SQL-based data processing, and full-stack application development. Currently working as an SQL Developer in the banking sector, handling regulatory reports such as Antasena, SLIK, LPS, and Basel III. Strong in building data-intensive systems using React, Django, Laravel, and relational databases.",
  email: "calmrp1412@gmail.com",
  linkedin: "linkedin.com/in/carlos-michael-marpaung-836392267",
  github: "github.com/carlosmarpaung08",
  cvLink: "/pdf/CV-CarlosMichaelMarpaung.pdf",
  profileImg: "/images/profil-image.jpeg"
};

export const EXPERIENCES: Experience[] = [
  {
    company: "PT Bank Oke Indonesia Tbk (OK Bank)",
    role: "SQL Developer",
    period: "August 2025 - Present",
    logoUrl: "/images/ok-bank.png",
    achievements: [
      "Developed and maintained 50+ SQL Server stored procedures using CTEs, window functions, and complex multi-table joins to support regulatory reporting for OJK Antasena, SLIK, LPS Single Customer View (SCV), and Basel III liquidity reports (LCR & NSFR).",
      "Built and enhanced SQL Server-based ETL pipelines supporting daily and monthly reporting processes, reducing manual intervention and improving data processing efficiency for enterprise banking reporting.",
      "Validated millions of banking records across complex reporting datasets, ensuring data accuracy, consistency, and compliance with OJK, Bank Indonesia (BI), and LPS reporting requirements.",
      "Optimized complex SQL queries and resolved production data discrepancies through query refactoring, execution plan analysis, and database tuning, improving reporting performance by approximately 30–40%.",
      "Provided production support for regulatory reporting systems by troubleshooting data issues, maintaining database objects, documenting stored procedure logic and reporting workflows, and collaborating with cross-functional teams to ensure timely and reliable report submissions."
    ]
  },
  {
    company: "PT Dimensi Kreasi Nusantara",
    role: "Software Engineer (Internship)",
    period: "Aug 2024 - Dec 2024",
    logoUrl: "/images/dimensi-kreasi-nusantara.png",
    achievements: [
      "Developed and delivered core features for the Dots Mobile Application, a digital banking-style financial platform, using React Native, including user authentication, savings, deposits, withdrawals, and loan management.",
      "Built and maintained 20+ RESTful API endpoints using Django REST Framework and PostgreSQL to support secure financial transactions, business workflows, and user account management.",
      "Designed and implemented backend modules for transaction processing, loan due-date tracking, account management, and financial operations with robust validation, authentication, and error handling.",
      "Debugged and resolved frontend–backend integration issues, ensuring reliable end-to-end financial transaction processing and improving overall application stability.",
      "Collaborated with cross-functional teams using Git-based workflows to develop, test, and deliver scalable features in an Agile development environment."
    ]
  },
];

export const PROJECTS: Project[] = [
  {
    title: "Book Recommendation System",
    description: "Built an ML-powered book recommendation engine using RNN (LSTM) achieving 87% recommendation accuracy. Processed 10,000+ book records sourced from Google Books API, trained and evaluated the model in Python, and exposed predictions via a Django REST Framework API consumed by a React frontend backed by Supabase.",
    techStack: ["Python", "LSTM", "React", "Django REST Framework", "Supabase"],
    role: "Machine Learning & Full-Stack Developer",
    githubUrl: "https://github.com/carlosmarpaung08/Book---Recomendation",
    imageUrl: "/images/project_book_recommendation.png",
    metrics: ["10,000+ Books Indexed", "87% Model Accuracy", "REST API + React Frontend"]
  },
  {
    title: "Workshop Management",
    description: "Delivered a full-featured web-based Workshop Management System for Batik Tegalan, covering inventory control, a real-time POS system, customer reservations, and educational content management. The admin dashboard centralized 5+ operational workflows, reducing manual data entry and improving daily transaction tracking.",
    techStack: ["PHP", "Laravel", "Livewire", "Tailwind CSS", "MySQL"],
    role: "Full-Stack Developer",
    githubUrl: "https://github.com/carlosmarpaung08/workshop-management-system",
    imageUrl: "/images/project_workshop_management.png",
    metrics: ["5+ Integrated Modules", "Real-time POS System", "Inventory & Reservation Tracking"]
  },
  {
    title: "E-Commerce Management System",
    description: "Engineered a full-stack e-commerce platform in C# (.NET) and SQL Server supporting dual roles (Admin & Customer). Designed 10+ stored procedures for transaction processing and reporting, implemented product catalog management, order workflows, and an admin dashboard tracking revenue, stock levels, and customer data across 300+ SKUs.",
    techStack: ["C#", ".NET", "SQL Server"],
    role: "Full-Stack Developer",
    githubUrl: "https://github.com/carlosmarpaung08/RetailMaster-Integrated-Shop-Management-System-with-C-",
    imageUrl: "/images/project_ecommerce_system.png",
    metrics: ["300+ SKU Management", "10+ Stored Procedures", "Dual Role Access Control"]
  },
  {
    title: "BAAK Management",
    description: "Built a cross-platform mobile application in Flutter (Dart) for managing student permission workflows across 3 permission types (leave, overnight, sick). Implemented RBAC for students and admins, integrated with a REST API backend, and delivered real-time approval tracking - reducing permission processing time significantly compared to manual paper-based processes.",
    techStack: ["Flutter", "Dart", "REST API"],
    role: "Full-Stack Developer",
    githubUrl: "https://github.com/carlosmarpaung08/baak-management-app",
    imageUrl: "/images/project_baak_management.png",
    metrics: ["3 Permission Types", "Role-Based Access Control", "Cross-Platform (iOS & Android)"]
  },
  {
    title: "Library Management System",
    description: "Developed a desktop Library Management System in JavaFX capable of managing 1,200+ book records and 350+ registered members. Features include full CRUD for the book catalog, member registration, borrowing/return tracking with due-date enforcement, and an overdue monitoring module - reducing librarian workload through automated status tracking.",
    techStack: ["Java", "JavaFX", "JDBC", "MySQL"],
    role: "Full-Stack Developer",
    githubUrl: "https://github.com/carlosmarpaung08/LibraryManagementSystem",
    imageUrl: "/images/project_library_system.png",
    metrics: ["1,200+ Book Records", "350+ Members Tracked", "Automated Overdue Monitoring"]
  },
  {
    title: "Course SkillUp",
    description: "Developed a scalable online learning platform in Laravel supporting course enrollment, lesson progress tracking, quiz assessments, certificate generation, and community discussion forums. Designed a normalized MySQL schema handling multi-role access (Instructor & Learner), delivering an end-to-end e-learning experience covering 20+ course categories.",
    techStack: ["PHP", "Laravel", "MySQL", "Tailwind CSS"],
    role: "Full-Stack Developer",
    githubUrl: "https://github.com/carlosmarpaung08/SkillUpCourse",
    imageUrl: "/images/project_course_skillup.png",
    metrics: ["20+ Course Categories", "Quiz & Certificate Features", "Multi-Role: Learner & Instructor"]
  }
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: "Programming & Frameworks",
    items: ["JavaScript", "Python", "PHP", "C#", "Dart", "React", "Laravel", "Django", "Flutter", ".NET"]
  },
  {
    category: "Databases & Data",
    items: ["SQL Server", "MySQL", "PostgreSQL", "Stored Procedures", "ETL", "Query Optimization"]
  },
  {
    category: "Tools & Practices",
    items: ["Git", "Postman", "REST API", "Agile"]
  }
];

export const EDUCATION: Education[] = [
  {
    degree: "Diploma 3 in Information Technology",
    institution: "Institut Teknologi Del",
    year: "2022 - 2025"
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    name: "Google Advanced Data Analytics",
    issuer: "Coursera",
    date: "Mar 2025",
    certificateUrl: "/pdf/Coursera - Google Advanced Data Analytics.pdf"
  },
  {
    name: "elevAIte with Dicoding Program",
    issuer: "Microsoft",
    date: "Mar 2025",
    certificateUrl: "/pdf/Microsoft Learn - elevAIte with Dicoding Program.pdf"
  },
  {
    name: "Junior Web Developer",
    issuer: "Digital Talent Scholarship",
    date: "Aug 2023",
    certificateUrl: "/pdf/Digital Talent Scholarship (VSGA) - Junior Web Developer.pdf"
  },
  {
    name: "Career Preparation of Youth Digital Acceleration Program",
    issuer: "YCAB Foundation",
    date: "Jul 2023",
    certificateUrl: "/pdf/YCAB Foundation - Career Preparation YCAB YDA.pdf"
  }
];
