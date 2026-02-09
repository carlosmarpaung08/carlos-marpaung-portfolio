
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
      "Developed and maintained complex SQL Server stored procedures using CTE, window functions, and multi-table joins to generate regulatory and internal reports including Antasena, SLIK, LPS, and Basel III.",
      "Built and enhanced ETL pipelines for daily and monthly reporting processes, improving data processing efficiency and reducing manual intervention.",
      "Analyzed and validated large banking datasets to ensure data accuracy and consistency in compliance with OJK and BI regulations.",
      "Troubleshot query performance issues and data discrepancies across reporting tables, improving overall report reliability.",
      "Documented stored procedure logic, table mappings, and reporting flows to support system maintainability and knowledge sharingwithin the team."
    ]
  },
  {
    company: "PT Dimensi Kreasi Nusantara",
    role: "Software Engineer (Internship)",
    period: "Aug 2024 - Dec 2024",
    logoUrl: "/images/dimensi-kreasi-nusantara.png",
    achievements: [
      "Developed core features for the Dots Mobile Application, a mobile financial platform similar to mobile banking, using React Native.",
      "Built backend services with Django REST Framework and PostgreSQL to handle user authentication, savings deposits, withdrawals,and loan management workflows.",
      "Implemented RESTful APIs for transaction processing, loan due-date tracking, and user account management with proper validation and error handling.",
      "Debugged and resolved frontend–backend integration issues to ensure reliable financial transaction flows and application stability."
    ]
  },
];

export const PROJECTS: Project[] = [
  {
    title: "Book Recommendation System",
    description: "Built a book recommendation system using RNN (LSTM) to provide personalized suggestions based on user reading history. Developed a full-stack application with React frontend and Django REST Framework backend, using Supabase for the database. Collected and processed over 10,000 book records from the Google Books API and performed data preprocessing and model training in Python.",
    techStack: ["Python", "LSTM", "React", "Django REST Framework", "Supabase"],
    role: "Machine Learning & Full-Stack Developer",
    githubUrl: "https://github.com/carlosmarpaung08/Book---Recomendation"
  },
  {
    title: "Workshop Management",
    description: "Developed a web-based Workshop Management System for Batik Tegalan to manage inventory, sales transactions (POS), customer reservations, and educational content. Built admin dashboards to support daily operational activities and ensure smooth business workflows.",
    techStack: ["PHP", "Laravel", "Livewire", "Tailwind CSS", "MySQL"],
    role: "Full-Stack Developer",
    githubUrl: "https://github.com/carlosmarpaung08/workshop-management-system"
  },
  {
    title: "E-Commerce Management System",
    description: "Developed a full-stack e-commerce web application using C# (.NET) and SQL Server with separate admin and user roles. Implemented product management, customer accounts, and order processing workflows, while designing database schemas and stored procedures for transactions and reporting. Built admin dashboards to manage inventory, orders, and user data.",
    techStack: ["C#", ".NET", "SQL Server"],
    role: "Full-Stack Developer",
    githubUrl: "https://github.com/carlosmarpaung08/RetailMaster-Integrated-Shop-Management-System-with-C-"
  },
  {
    title: "BAAK Management",
    description: "Developed a mobile application using Flutter (Dart) to manage student permission workflows, including leave requests, overnight permits, and approval tracking. Implemented role-based access for students and administrators, with features for submission, status monitoring, and request history to streamline administrative processes.",
    techStack: ["Flutter", "Dart", "REST API"],
    role: "Full-Stack Developer",
    githubUrl: "https://github.com/carlosmarpaung08/baak-management-app"
  },
  {
    title: "Library Management System",
    description: "Developed a desktop Library Management System using JavaFX, featuring book catalog management, member registration, borrowing and return tracking, and overdue monitoring. Designed a user-friendly interface to streamline library operations, improve data organization, and enhance the overall experience for both librarians and library members.",
    techStack: ["Java", "JavaFX", "JDBC", "MySQL"],
    role: "Full-Stack Developer",
    githubUrl: "https://github.com/carlosmarpaung08/LibraryManagementSystem"
  },
  {
    title: "Course SkillUp",
    description: "Developed an online learning platform using Laravel, providing a dynamic website for course management, user registration, and interactive learning. The platform includes features such as course enrollment, progress tracking, quiz assessments, and discussion forums to support continuous learning and skill development. Designed a user-friendly interface to enhance accessibility and engagement for learners and instructors.",
    techStack: ["PHP", "Laravel", "MySQL", "Tailwind CSS"],
    role: "Full-Stack Developer",
    githubUrl: "https://github.com/carlosmarpaung08/SkillUpCourse"
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
