// Edit this file to update site content. No build step — just save and refresh.
const DATA = {
  profile: {
    name: "Sachin Kumar",
    role: "Java Backend Developer | Spring Boot & Microservices",
    location: "Saharanpur, Uttar Pradesh",
    email: "sachinnayak7017@gmail.com",
    phone: "+91-7017253361",
    summary:
      "Java Backend Developer specializing in Spring Boot and microservices, currently building secure REST APIs for digital banking at Shivalik Small Finance Bank, serving 500,000+ active users. Strong foundation in Data Structures & Algorithms, API security (JWT/OAuth 2.0), and production-grade system design. Focused on backend engineering roles at both product and service-based companies.",
    heroTagline: "Java Backend Developer building secure, high-scale microservices — currently sharpening DSA for product-company interviews.",
    photoPath: "resources/images/profile.jpg", // put your photo at this path (leave blank to hide)
    resumePath: "resources/resume/Sachin_Kumar_Resume.pdf",
    badges: [
      "Java",
      "Spring Boot",
      "Microservices",
      "Spring Security",
      "REST APIs",
      "DSA",
      "Hibernate",
      "MySQL",
      "Docker",
      "AWS",
    ],
    socialLinks: [
      { label: "GitHub", url: "https://github.com/sachinnayak7017/", icon: "github" },
      { label: "LinkedIn", url: "https://www.linkedin.com/in/sachin-kumar-860541286/", icon: "linkedin" },
      { label: "LeetCode", url: "https://leetcode.com/u/sachin_kumar7017/", icon: "leetcode" },
      { label: "Naukri", url: "", icon: "naukri" }, // TODO: add Naukri profile URL
      { label: "Instagram", url: "", icon: "instagram" }, // TODO: add Instagram profile URL
      { label: "Email", url: "mailto:sachinnayak7017@gmail.com", icon: "email" },
    ],
  },

  aboutParagraphs: [
    "I'm a Java Backend Developer working as a System Engineer (Java Backend Developer, Assistant Manager) at Shivalik Small Finance Bank, where I design and secure REST APIs on a Spring Boot microservices architecture powering Mobile Banking, Retail Internet Banking, Corporate Internet Banking, and SDK-based platforms used by 500,000+ active users.",
    "My core focus is backend engineering: Java, Spring Boot, Spring Security, Microservices, and API design, including JWT/OAuth 2.0 authentication and role-based access control for zero-trust systems. I'm also actively strengthening my Data Structures & Algorithms for product-company interviews.",
    "I care about writing secure, well-tested, production-ready code — I build automated test suites with Selenium, Rest Assured, and Postman, and I've led production support and incident response for systems that can't afford downtime. Earlier in my career I also worked on an ERP implementation (Microsoft Dynamics 365 Business Central) and an Android app backend, for context on my broader engineering background.",
  ],

  experience: [
    {
      company: "Shivalik Small Finance Bank (SSFB)",
      role: "System Engineer - Java Backend Developer (Assistant Manager)",
      employmentType: "Full-time",
      startDate: "Nov 2025",
      endDate: "Present",
      location: "India",
      responsibilities: [
        "Engineered and deployed 50+ secure RESTful APIs using Spring Boot, Spring Security, Hibernate, and Oracle, supporting 500,000+ active users across Mobile Banking (MB), Retail Internet Banking (RIB), Corporate Internet Banking (CIB), and SDK-based platforms.",
        "Designed and implemented JWT-based authentication, OAuth 2.0 authorization, and role-based access control (RBAC) within a scalable microservices architecture, reducing unauthorized access incidents by enforcing zero-trust API security.",
        "Optimized database queries and API performance, achieving measurable latency improvements for high-concurrency banking operations serving 500K+ concurrent sessions.",
        "Built end-to-end automated test suites using Selenium WebDriver, Rest Assured, and Postman, increasing API test coverage and reducing regression defects in production releases.",
        "Led production support, incident monitoring, and debugging across all digital banking channels; maintained system stability with rapid issue resolution to meet banking SLAs.",
      ],
      technologies: [
        "Java",
        "Spring Boot",
        "Spring Security",
        "Hibernate",
        "Microservices",
        "REST APIs",
        "JWT",
        "OAuth 2.0",
        "Oracle",
        "Selenium",
        "Rest Assured",
        "Git",
      ],
    },
    {
      company: "CorporateServe Solutions Pvt. Ltd.",
      role: "Technical Consultant",
      employmentType: "Full-time",
      startDate: "Jan 2025",
      endDate: "Oct 2025",
      location: "India",
      responsibilities: [
        "Delivered a full-scale ERP solution for Karnavati University (Gujarat), impacting 6,000-9,000 students across academic, fee management, and administrative workflows on Microsoft Dynamics 365 Business Central.",
        "Wrote custom backend business logic, data processing routines, and report generation modules in AL Language — the same object-oriented, event-driven programming discipline I apply in Java: separating business rules from data access, validating inputs, and handling exceptions predictably.",
        "Built system integrations connecting the ERP to external reporting tools (RDLC) and other university systems, translating business requirements into structured, testable backend modules.",
        "Owned production support end-to-end: triaged critical issues, debugged data/logic errors under time pressure, and ensured zero-downtime operations through go-live and post-deployment phases.",
      ],
      technologies: ["Dynamics 365 BC", "NAV 2016", "AL Language", "RDLC Reports", "SQL Server"],
    },
    {
      company: "Anything Infotech Pvt. Ltd.",
      role: "Kotlin Android Developer Intern",
      employmentType: "Internship",
      startDate: "Aug 2024",
      endDate: "Nov 2024",
      location: "India",
      responsibilities: [
        "Built and shipped production features for the Android app 'WelcomeSwag' using Kotlin and Java, working full-stack against a Spring Boot REST API backend and MySQL database — my first hands-on exposure to consuming production Spring Boot APIs from a real client.",
        "Implemented and validated REST API integrations for user authentication and session management, testing request/response contracts between the mobile client and the Spring Boot backend.",
        "Profiled and optimized database queries and API response times on the backend side, directly improving app load times — early practice in the performance-tuning work I now do on banking APIs.",
      ],
      technologies: ["Kotlin", "Java", "Spring Boot", "REST APIs", "MySQL", "Git"],
    },
  ],

  projects: [
    {
      title: "Digital Master",
      dateLabel: "Aug 2024",
      shortDescription:
        "Multi-role Student Management System with secure JWT/OTP authentication and real-time features.",
      detailedDescription:
        "A full-stack Student Management System built to handle three distinct user roles — Admin, Faculty, and Student — each with different permissions on the same data. The core engineering challenge was access control: every one of the 20+ REST endpoints had to enforce role-based rules server-side (not just hide UI elements), so I designed the authorization layer around Spring Security with JWT for stateless authentication and OTP-based two-factor login for an extra verification step on sensitive actions like fee payments. Admissions, fee management, and academic scheduling are modeled as separate service layers backed by Hibernate/MySQL, which kept the codebase testable as features were added.",
      features: [
        "Spring Security with JWT authentication, OTP-based 2FA, and role-based access control (RBAC) enforced across 3 user roles and 20+ REST endpoints",
        "Third-party payment gateway integration for fee payments, with server-side verification of transaction callbacks",
        "WebSocket-based real-time chat between faculty and students",
        "Apache POI-driven Excel import/export for bulk admissions and academic records",
        "Automated email notifications tying together the admission-to-enrollment workflow end-to-end",
      ],
      technologies: [
        "Java",
        "Spring Boot",
        "Spring Security",
        "Hibernate",
        "MySQL",
        "REST APIs",
        "Apache POI",
        "Maven",
        "HTML5",
        "CSS3",
        "Bootstrap",
      ],
      githubUrl: "", // TODO: add repo URL
      image: "resources/projects/digital-master.jpg", // leave blank to hide
      videoUrl: "", // TODO: YouTube demo link
      certificatePath: "", // TODO: e.g. resources/certificates/digital-master.pdf
    },
    {
      title: "Easy Find",
      dateLabel: "2024 - 2025",
      shortDescription:
        "Real-time campus lost & found platform with image-based item matching and live notifications.",
      detailedDescription:
        "A campus lost-and-found platform built around one problem: when someone reports a found item, the person who lost it needs to know immediately, not the next time they check the site. I designed the backend around Spring Boot REST APIs for CRUD on lost/found reports plus a WebSocket layer for push-style real-time notifications — so a match triggers an instant alert rather than a polling refresh. Uploaded item photos go through multipart file upload with storage designed to be swappable for a cloud provider (e.g. S3) without changing the API contract, and keyword + category filtering narrows search on top of MySQL-backed full item records.",
      features: [
        "Keyword search and category filtering across reported lost/found items",
        "Image-based item matching to help users visually confirm a match before contacting the finder",
        "WebSocket-based real-time notifications, pushing matches to users instantly instead of on refresh",
        "Multipart image upload with storage designed to be cloud-swappable",
        "Automated email alerts as a fallback channel to improve item recovery rate",
      ],
      technologies: ["Java", "Spring Boot", "REST APIs", "MySQL", "WebSocket", "Multipart File Upload", "Git", "HTML5", "CSS3", "Bootstrap"],
      githubUrl: "", // TODO: add repo URL
      image: "resources/projects/easy-find.jpg",
      videoUrl: "",
      certificatePath: "",
    },
    {
      title: "WelcomeSwag",
      dateLabel: "Aug 2024 - Nov 2024",
      shortDescription: "Android application built in Kotlin/Java with a Spring Boot REST API backend.",
      detailedDescription:
        "Production features for the WelcomeSwag Android app, built during my internship at Anything Infotech. My side of this was the client-to-backend contract: consuming and validating REST APIs served by a Spring Boot backend for authentication, session handling, and real-time data sync, backed by MySQL. Working against a real production API (not a mock) meant handling actual failure cases — expired sessions, slow responses, malformed data — and that's where I did hands-on backend performance tuning: profiling slow queries and trimming API response payloads to cut load times on the mobile client.",
      features: [
        "User authentication and session management against a Spring Boot backend",
        "Real-time backend communication between mobile client and server",
        "Backend-side database query and API response optimization for faster load times",
      ],
      technologies: ["Kotlin", "Java", "Spring Boot", "REST APIs", "MySQL", "Git"],
      githubUrl: "", // TODO: add repo URL
      image: "resources/projects/welcomeswag.jpg",
      videoUrl: "",
      certificatePath: "",
    },
  ],

  skillCategories: [
    { name: "Programming Languages", skills: ["Java", "Python", "OOP", "Data Structures & Algorithms"] },
    {
      name: "Backend Technologies",
      skills: ["Spring Boot", "Spring MVC", "Spring Security", "Spring Data JPA", "Hibernate", "Microservices", "RESTful APIs", "Maven", "JWT", "OAuth"],
    },
    { name: "Testing & Automation", skills: ["Selenium WebDriver", "Rest Assured", "JUnit", "Postman"] },
    { name: "Databases", skills: ["MySQL", "MongoDB", "Oracle Database"] },
    { name: "Cloud & DevOps", skills: ["Docker", "Git", "GitHub", "AWS (EC2, S3)"] },
    { name: "Frontend", skills: ["HTML5", "CSS3", "Bootstrap"] },
    { name: "Tools & IDEs", skills: ["IntelliJ IDEA", "Eclipse", "Spring Tool Suite (STS)", "Visual Studio Code"] },
  ],

  education: [
    {
      degree: "Bachelor of Technology - Computer Science & Engineering",
      institution: "Shobhit University",
      location: "Saharanpur, Uttar Pradesh",
      startYear: "2021",
      endYear: "2025",
      cgpa: "7.8 / 10.0",
      coursework: [
        "Data Structures & Algorithms",
        "Object-Oriented Programming",
        "Database Management Systems",
        "Operating Systems",
        "Computer Networks",
        "Software Engineering",
      ],
    },
  ],

  achievements: [
    {
      title: "1st Place - University Hackathon",
      description:
        "Awarded 1st prize out of university-wide participants; project evaluated by a DRDO Professor for technical innovation, problem-solving architecture, and real-world application design.",
      date: "Apr 2024",
    },
    {
      title: "2nd Place - Science Day Technical Competition",
      description: "Recognized by the Sub-Divisional Magistrate (SDM) for outstanding technical innovation among competing teams.",
      date: "Feb 2024",
    },
    {
      title: "Certificate of Excellence - Java Programming & OOPs",
      description: "Awarded for exceptional academic performance and demonstrated mastery of object-oriented design principles.",
      date: "",
    },
    {
      title: "Event Coordinator - TECHNOZOOM Tech Fest",
      description:
        "Organized and led a university-level AI-themed poster competition; managed volunteer teams, mentored 180+ participants, and ensured smooth execution of the full event lifecycle.",
      date: "",
    },
  ],

  // Student resources. type is free text — use whatever label fits
  // ("Short Note", "Video", "PDF", "Resume Template", "Other", ...).
  // For Video, set videoUrl (YouTube link). For everything else, set filePath (a file in resources/notes/).
  resources: [
    {
      title: "Java Collections Framework - Short Notes",
      category: "Java",
      type: "Short Note",
      description: "Quick revision notes covering List, Set, Map implementations and when to use each.",
      videoUrl: "",
      filePath: "resources/notes/java-collections-short-notes.pdf",
    },
    {
      title: "Arrays & Two Pointers Explained",
      category: "DSA",
      type: "Video",
      description: "Walkthrough of the two-pointer technique with common interview problems.",
      videoUrl: "https://www.youtube.com/watch?v=REPLACE_ME",
      filePath: "",
    },
    {
      title: "Spring Boot REST API Cheat Sheet",
      category: "Spring Boot",
      type: "PDF",
      description: "Annotations, common patterns, and exception handling reference for building REST APIs.",
      videoUrl: "",
      filePath: "resources/notes/spring-boot-cheatsheet.pdf",
    },
    {
      title: "Java Backend Developer Resume Template",
      category: "Career",
      type: "Resume Template",
      description: "A clean, ATS-friendly resume template for freshers and Java backend roles.",
      videoUrl: "",
      filePath: "resources/notes/resume-template.docx",
    },
  ],

  // Add a new entry at the top each day. Newest first.
  tracker: [
    { date: "2026-08-08", category: "DSA", topic: "Arrays & Two Pointers", notes: "Solved 5 problems on LeetCode, revised sliding window pattern.", hours: "2" },
    { date: "2026-08-07", category: "Java", topic: "Streams API", notes: "Practiced Collectors.groupingBy and parallel streams.", hours: "1.5" },
  ],
};
