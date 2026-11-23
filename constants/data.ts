import { Project, SkillCategory, TimelineItem, ExperienceItem } from "@/types";

export const PERSONAL_INFO = {
  name: "Mandar Deshmukh",
  role: "Full Stack Software Engineer",
  targetRole: "Full Stack & Backend Engineer",
  tagline: "Building fintech PWAs, session and auth systems, and the Node.js services behind them.",
  location: "India",
  email: "mandardeshmukh.mud@gmail.com",
  phone: "+91 8087352864",
  github: "https://github.com/DeshmukhMandar3",
  linkedin: "https://www.linkedin.com/in/mandar-deshmukh-62821b189/",
  resumeUrl: "/Mandar-Deshmukh-Resume.pdf",
  about: `I am a Full Stack Software Engineer with a background in Mechanical Engineering. At Hyperface Technologies I build co-branded credit card PWAs in React and TypeScript, and the Node.js services that manage their sessions and authentication. Outside work I am deepening my backend skills with PostgreSQL, Redis caching patterns and layered API design.`,
  stats: [
    { label: "Practical Coding Hours", value: "1200+" },
    { label: "Current Focus", value: "Fintech & Backend Architecture" },
    { label: "Core Mindset", value: "PWA Craft & System Scalability" },
    { label: "Target Track", value: "Full Stack & Systems" },
  ],
  interests: [
    "Backend Engineering",
    "Progressive Web Apps (PWAs)",
    "Session Management & Auth Architecture",
    "System Design & Clean Architecture",
    "High Performance Caching (Redis)",
    "PostgreSQL Database Tuning",
  ],
};

export const EXPERIENCE: ExperienceItem[] = [
  {
    company: "Hyperface Technologies",
    role: "Software Engineer (AE-2)",
    period: "Apr 2024 – Present",
    location: "India",
    type: "Full-Time",
    description: "Backend-for-frontend services, session architecture and security for Hyperface's fintech PWAs.",
    responsibilities: [
      "Developed Backend for Frontend (BFF) services in Node.js and Express for our PWAs: customer-level session management with MySQL, Redis caching and REST APIs, covering token lifecycle, validation, timeouts and shared authentication across several fintech apps.",
      "Redesigned sessions from account-level to customer-level with centralized token handling, cutting redundant authentication API calls by ~25–30%.",
      "Extracted session logic into a shared NPM library used by 3 applications, reducing duplicated code by ~40%.",
      "Met bank application-security requirements by configuring CSP, CORS, HSTS and security response headers through AWS Amplify, plus Clear-Site-Data on logout.",
      "Ran JMeter load, spike and stress tests on the NCB PWA (up to ~82,000 HTTP calls per run) and traced HTTP 500/504 failures to session-token APIs and shared-database bottlenecks.",
      "Led a team of 3 engineers to build a Smart Benefit Engine for NCB (Vietnam): milestone-based benefit tracking and voucher lifecycle management.",
      "Designed a multi-card flow that lets customers switch between several co-branded credit cards in one interface."
    ],
    technologies: ["Node.js", "Express", "MySQL", "Redis", "REST APIs", "React", "TypeScript", "AWS Amplify", "JMeter"],
    achievements: []
  },
  {
    company: "Hyperface Technologies",
    role: "Software Engineer (AE-1)",
    period: "May 2023 – Mar 2024",
    location: "India",
    type: "Full-Time",
    description: "Built the co-branded credit card PWA and its reusable UI modules.",
    responsibilities: [
      "Built the Co-branded Credit Card PWA (CBCC-PWA) from scratch in React and TypeScript; it is live for AU Small Finance Bank, ixigo, Paytm and CheQ. Also shipped features for the Onboarding PWA and IndusInd CardsHub.",
      "Developed reusable UI modules for Spend Analytics, Rewards, Merchant Offers and Campaigns, speeding up marketing-driven releases.",
      "Designed a configurable UI system so each partner bank controls themes, section order and feature toggles from a central dashboard, without engineering changes.",
      "Worked with backend services over REST APIs to improve data flow and UI responsiveness."
    ],
    technologies: ["React", "TypeScript", "PWA", "Redux Toolkit", "REST APIs", "SCSS"],
    achievements: []
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    name: "Backend Engineering",
    description: "APIs, sessions and authentication on Node.js.",
    skills: [
      { name: "Node.js", level: "Work", highlight: true },
      { name: "Express.js", level: "Work", highlight: true },
      { name: "REST API Design", level: "Work", highlight: true },
      { name: "Backend for Frontend (BFF)", level: "Work", highlight: true },
      { name: "Session Management & Token Lifecycle", level: "Work", highlight: true },
      { name: "Shared NPM Libraries", level: "Work" },
      { name: "JWT Authentication", level: "Projects" },
      { name: "Zod Validation", level: "Projects" },
      { name: "Middleware Architecture", level: "Projects" },
      { name: "Repository Pattern", level: "Projects" },
      { name: "Service Layer Pattern", level: "Projects" },
      { name: "bcrypt", level: "Projects" },
    ]
  },
  {
    name: "Databases & Caching",
    description: "Relational and document databases, and Redis caching.",
    skills: [
      { name: "MySQL", level: "Work", highlight: true },
      { name: "Redis Caching", level: "Work", highlight: true },
      { name: "PostgreSQL", level: "Projects", highlight: true },
      { name: "MongoDB", level: "Projects" },
      { name: "Cache-Aside Pattern", level: "Projects" },
      { name: "Transactions & ACID", level: "Projects" },
      { name: "Connection Pooling", level: "Projects" },
      { name: "Dynamic Filtering, Sorting & Pagination", level: "Projects" }
    ]
  },
  {
    name: "System Design & Concepts",
    description: "Concepts for building scalable, resilient backend applications.",
    skills: [
      { name: "Layered Architecture", level: "Projects", highlight: true },
      { name: "Rate Limiting & Throttling", level: "Projects" },
      { name: "Horizontal Scaling", level: "Learning" },
      { name: "Load Balancing", level: "Learning" },
      { name: "API Gateway Concepts", level: "Learning" },
      { name: "Message Queues", level: "Learning" },
      { name: "Event-Driven Architecture", level: "Learning" },
      { name: "Background Jobs", level: "Learning" },
    ]
  },
  {
    name: "Frontend Craftsmanship",
    description: "Responsive, performant user interfaces.",
    skills: [
      { name: "React.js", level: "Work", highlight: true },
      { name: "TypeScript", level: "Work", highlight: true },
      { name: "JavaScript (ES6+)", level: "Work" },
      { name: "Progressive Web Apps (PWA)", level: "Work", highlight: true },
      { name: "Redux Toolkit", level: "Work" },
      { name: "HTML, CSS & SCSS", level: "Work" },
      { name: "Next.js (App Router)", level: "Projects" },
      { name: "Tailwind CSS", level: "Projects" },
      { name: "React Query", level: "Projects" },
      { name: "React Hook Form", level: "Projects" },
      { name: "Framer Motion", level: "Projects" }
    ]
  },
  {
    name: "DevOps & Tooling",
    description: "Delivery, security headers and testing.",
    skills: [
      { name: "Git & GitHub", level: "Work", highlight: true },
      { name: "AWS Amplify", level: "Work" },
      { name: "CSP, CORS & HSTS Headers", level: "Work", highlight: true },
      { name: "JMeter Load Testing", level: "Work" },
      { name: "Jest", level: "Projects" },
      { name: "Vercel", level: "Projects" },
      { name: "Docker", level: "Learning" },
      { name: "CI/CD (GitHub Actions, Jenkins)", level: "Learning" }
    ]
  }
];

export const FEATURED_BACKEND_PROJECT: Project = {
  id: "employee-management-system",
  title: "Employee Management System API",
  subtitle: "Layered Backend with Redis Cache-Aside & Dynamic SQL",
  description: "A personal backend project built with Node.js, Express, PostgreSQL and Redis. It uses a layered architecture (Controller -> Service -> Repository), JWT refresh token rotation, dynamic filtering, pagination and sorting in SQL, Zod schema validation, and Redis caching for repeated reads.",
  category: "Featured",
  image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop",
  tags: ["Node.js", "Express", "PostgreSQL", "Redis", "TypeScript", "Zod", "JWT", "Docker"],
  architecture: [
    "Layered Architecture (Controller -> Service -> Repository)",
    "Cache-Aside Redis Strategy with TTL invalidate triggers on mutation",
    "PostgreSQL Connection Pooling & Transaction isolation",
    "Zod Validation Middleware for strictly-typed payload contracts",
    "Dynamic SQL Builder supporting flexible filtering, sorting, and cursor/offset pagination"
  ],
  challenges: [
    "Preventing stale cache reads during concurrent database updates by implementing explicit cache invalidation in repository mutation hooks.",
    "Ensuring secure JWT token rotation while handling refresh token replay attacks via Redis blacklist tokens."
  ],
  learnings: [
    "Deepened understanding of Repository Pattern decoupling database ORM/SQL logic from business domains.",
    "Learned how database indexing and Redis memory limits shape caching decisions."
  ],
  githubUrl: "https://github.com/DeshmukhMandar3",
  featured: true
};

export const PROJECTS: Project[] = [
  {
    id: "cruise-rental",
    title: "CruiseRental",
    subtitle: "Car Rental App with Admin Dashboard · Team project, Masai School (2023)",
    description: "Car rental app modelled on Avis, built by a team with React, Redux, Node.js, Express, MongoDB and TypeScript. Customers search vehicles, book and sign in; a separate admin portal manages the fleet.",
    category: "Full Stack",
    image: "/projects/cruise-rental.jpg",
    tags: ["React", "Redux", "TypeScript", "Node.js", "Express", "MongoDB", "Chakra UI"],
    architecture: [
      "Decoupled React frontend and separate administrative portal.",
      "RESTful API with session authentication and role-based access control.",
      "Redux global store for real-time checkout state management."
    ],
    challenges: [
      "Managing complex concurrent booking states to prevent double reservation of vehicles.",
      "Optimizing Admin panel data grids for fluid rendering under large fleet datasets."
    ],
    learnings: [
      "Mastered multi-role authentication workflows and global state management with Redux in TypeScript."
    ],
    githubUrl: "https://github.com/shikhu51197/Avis-Rentals",
    liveUrl: "https://cruise-rental-admin-panel.vercel.app",
    featured: true
  },
  {
    id: "oasis-ecommerce",
    title: "Oasis E-Commerce",
    subtitle: "E-Commerce Storefront Modelled on ShopClues · Team project, Masai School (2023)",
    description: "Team-built e-commerce site with multi-category catalog browsing, cart, user profiles and a simulated multi-step checkout.",
    category: "Frontend",
    image: "/projects/oasis.jpg",
    tags: ["React", "JavaScript", "Chakra UI", "REST API", "HTML5/CSS3"],
    architecture: [
      "Component-driven layout architecture with reusable product grid layouts.",
      "Local storage sync for persistent shopping carts across reloads."
    ],
    githubUrl: "https://github.com/DeshmukhMandar3/Oasis",
    liveUrl: "https://oasis-shop.vercel.app/"
  },
  {
    id: "shopetronics",
    title: "Shopetronics",
    subtitle: "Electronics Storefront Modelled on GeekBuying · Solo project, Masai School (2022)",
    description: "Solo e-commerce app for gadgets and electronics, with responsive layouts, filterable product views, a price calculator and checkout.",
    category: "Frontend",
    image: "/projects/shopetronics.jpg",
    tags: ["React", "Chakra UI", "JavaScript", "REST API"],
    githubUrl: "https://github.com/DeshmukhMandar3/Shopetronics",
    liveUrl: "https://shopetronics.vercel.app/"
  },
  {
    id: "bestreads",
    title: "BestReads Platform",
    subtitle: "Book Discovery Site Modelled on IdeaKart · Team project, Masai School (2022)",
    description: "Team-built book discovery site with catalogs, user reviews and curated reading lists, written in plain JavaScript.",
    category: "Frontend",
    image: "/projects/bestreads.jpg",
    tags: ["JavaScript", "HTML5", "CSS3", "DOM Manipulation"],
    githubUrl: "https://github.com/DeshmukhMandar3/BestReads",
    liveUrl: "https://reliable-kashata-dfa0d1.netlify.app/"
  }
];

export const TIMELINE: TimelineItem[] = [
  {
    id: "me-foundation",
    period: "2016 – 2019",
    title: "B.E. Mechanical Engineering, University of Mumbai",
    subtitle: "CGPA 8.33 · Problem-Solving, Mathematical Modeling & Engineering Thinking",
    category: "Education",
    description: "Developed strong analytical skills, thermodynamics, fluid dynamics, and structured engineering methodologies. Laid the mindset foundation for analytical problem solving and quantitative reasoning.",
    keyTakeaways: ["Analytical problem solving", "Systems thinking", "Data & physics modeling"],
    technologies: ["Mathematics", "Physics", "CAD Modeling"]
  },
  {
    id: "frontend-entry",
    period: "Aug 2022 – Apr 2023",
    title: "Full Stack Web Development, Masai School",
    subtitle: "1200+ Hours of Hands-On Coding",
    category: "Education",
    description: "Full-time programme covering data structures and algorithms, HTML, CSS, JavaScript, React, Redux, Node.js and MongoDB, with team and solo projects.",
    keyTakeaways: ["JavaScript fundamentals", "Built 5+ full applications", "Agile teamwork"],
    technologies: ["JavaScript", "React", "Redux", "Node.js", "MongoDB", "Git"]
  },
  {
    id: "hyperface-ae1",
    period: "May 2023 – Mar 2024",
    title: "Software Engineer (AE-1), Hyperface Technologies",
    subtitle: "Co-branded Credit Card PWA",
    category: "Career",
    description: "Built the co-branded credit card PWA from scratch, now live for AU Small Finance Bank, ixigo, Paytm and CheQ, plus a configurable UI system for partner banks.",
    keyTakeaways: ["Shipping to production", "Reusable UI modules", "Partner-configurable UI"],
    technologies: ["React", "TypeScript", "PWA", "Redux Toolkit"]
  },
  {
    id: "hyperface-ae2",
    period: "Apr 2024 – Present",
    title: "Software Engineer (AE-2), Hyperface Technologies",
    subtitle: "BFF Services, Sessions & Security",
    category: "Career",
    isCurrent: true,
    description: "Moved into backend work: Node.js BFF services, customer-level session architecture, a shared session library, bank security headers and load testing. Led a 3-person team on the NCB Smart Benefit Engine.",
    keyTakeaways: ["~25–30% fewer auth calls", "~40% less duplicated code", "Led a team of 3"],
    technologies: ["Node.js", "Express", "MySQL", "Redis", "AWS Amplify", "JMeter"]
  },
  {
    id: "backend-transition",
    period: "Personal projects",
    title: "Node.js, Express & PostgreSQL Architecture",
    subtitle: "Layered Patterns, Relational Modeling & Clean API Design",
    category: "Backend Transition",
    description: "Expanded core expertise into backend engineering: designing RESTful endpoints, implementing Repository & Service patterns, handling SQL transactions, and strict schema validation with Zod.",
    keyTakeaways: ["Layered architecture isolation", "ACID SQL transactions", "Zod request contracts"],
    technologies: ["Node.js", "Express", "PostgreSQL", "Zod", "JWT"]
  },
  {
    id: "caching-systems",
    period: "Personal projects",
    title: "Redis Cache-Aside & Performance Patterns",
    subtitle: "Caching, Token Blacklists & Rate Limiting",
    category: "Architecture",
    description: "Implemented the Cache-Aside pattern with Redis, token blacklist management and rate limiting to cut repeated database reads.",
    keyTakeaways: ["Cache invalidation discipline", "Session storage", "Rate limiting"],
    technologies: ["Redis", "PostgreSQL", "Connection Pooling", "Cache-Aside"]
  },
  {
    id: "senior-preparation",
    period: "Now",
    title: "System Design & Advanced Architecture",
    subtitle: "Scalable Infrastructure, API Gateways & PWA Security",
    category: "Architecture",
    isCurrent: true,
    description: "Actively studying and implementing system design fundamentals: API Gateway patterns, Rate Limiting, PWAs, Session Management, and high-concurrency backend design.",
    keyTakeaways: ["System Design trade-offs", "High availability", "Fault tolerance"],
    technologies: ["System Design", "PWA Architecture", "Session Management", "Docker"]
  }
];

export const CODE_SNIPPETS = [
  {
    id: "auth-middleware",
    title: "JWT Authentication & Token Rotation Middleware",
    language: "typescript",
    filename: "src/middlewares/auth.middleware.ts",
    description: "Express middleware enforcing double-token auth pattern (Access + Refresh Token rotation) with Redis token blacklist validation.",
    code: `import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { redisClient } from '../config/redis.config';
import { UnauthorizedError, ForbiddenError } from '../errors/http.errors';

export interface AuthenticatedRequest extends Request {
  user?: { userId: string; role: string };
}

export const authenticateToken = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
      throw new UnauthorizedError('Access token required');
    }

    // Check Redis token blacklist for revoked access tokens
    const isBlacklisted = await redisClient.get(\`bl_\${token}\`);
    if (isBlacklisted) {
      throw new ForbiddenError('Token has been revoked');
    }

    const payload = jwt.verify(token, process.env.JWT_ACCESS_SECRET!) as {
      userId: string;
      role: string;
    };

    req.user = payload;
    next();
  } catch (error) {
    next(error);
  }
};`
  },
  {
    id: "repository-pattern",
    title: "Employee Repository (Layered SQL Data Access)",
    language: "typescript",
    filename: "src/repositories/employee.repository.ts",
    description: "Decoupled data access layer managing PostgreSQL parameterized queries with dynamic sorting, filtering, and transaction isolation.",
    code: `import { Pool, PoolClient } from 'pg';
import { Employee, EmployeeFilterQuery } from '../types/employee.types';

export class EmployeeRepository {
  constructor(private readonly db: Pool) {}

  async findWithFilters(
    filters: EmployeeFilterQuery,
    client?: PoolClient
  ): Promise<{ data: Employee[]; total: number }> {
    const executor = client || this.db;
    const { department, search, limit = 10, offset = 0, sortBy = 'created_at', sortOrder = 'DESC' } = filters;
    
    const conditions: string[] = ['deleted_at IS NULL'];
    const values: any[] = [];
    let paramIndex = 1;

    if (department) {
      conditions.push(\`department = $\${paramIndex++}\`);
      values.push(department);
    }

    if (search) {
      conditions.push(\`(first_name ILIKE $\${paramIndex} OR last_name ILIKE $\${paramIndex} OR email ILIKE $\${paramIndex})\`);
      values.push(\`%\${search}%\`);
      paramIndex++;
    }

    const whereClause = conditions.length ? \`WHERE \${conditions.join(' AND ')}\` : '';
    
    const query = \`
      SELECT id, first_name, last_name, email, department, salary, created_at
      FROM employees
      \${whereClause}
      ORDER BY \${sortBy} \${sortOrder}
      LIMIT $\${paramIndex++} OFFSET $\${paramIndex++}
    \`;

    values.push(limit, offset);

    const countQuery = \`SELECT COUNT(*) FROM employees \${whereClause}\`;
    const countValues = values.slice(0, paramIndex - 3);

    const [dataResult, countResult] = await Promise.all([
      executor.query(query, values),
      executor.query(countQuery, countValues)
    ]);

    return {
      data: dataResult.rows,
      total: parseInt(countResult.rows[0].count, 10)
    };
  }
}`
  },
  {
    id: "cache-aside",
    title: "Redis Cache-Aside Service Layer Pattern",
    language: "typescript",
    filename: "src/services/employee.service.ts",
    description: "Service layer implementing Cache-Aside caching strategy for fast query reads and cache invalidation on mutations.",
    code: `import { EmployeeRepository } from '../repositories/employee.repository';
import { redisClient } from '../config/redis.config';
import { EmployeeFilterQuery, Employee } from '../types/employee.types';

export class EmployeeService {
  private readonly CACHE_TTL = 300; // 5 Minutes TTL

  constructor(private readonly repo: EmployeeRepository) {}

  async getEmployees(filters: EmployeeFilterQuery) {
    const cacheKey = \`emp_list:\${JSON.stringify(filters)}\`;

    // 1. Read from Redis Cache
    const cachedData = await redisClient.get(cacheKey);
    if (cachedData) {
      return { source: 'CACHE_HIT', ...JSON.parse(cachedData) };
    }

    // 2. Cache Miss -> Query PostgreSQL Database
    const result = await this.repo.findWithFilters(filters);

    // 3. Write-back to Redis with Expiration
    await redisClient.setEx(cacheKey, this.CACHE_TTL, JSON.stringify(result));

    return { source: 'DB_MISS', ...result };
  }

  async updateEmployee(id: string, updatePayload: Partial<Employee>) {
    // Perform database transaction
    const updated = await this.repo.updateById(id, updatePayload);

    // Invalidate stale employee list caches in Redis
    const keys = await redisClient.keys('emp_list:*');
    if (keys.length > 0) {
      await redisClient.del(keys);
    }

    return updated;
  }
}`
  }
];

export const TESTIMONIALS = [
  {
    quote: "Mandar possesses a rare balance of deep frontend craft and impressive backend engineering rigor. His transition into scalable node/PostgreSQL architecture is smooth, disciplined, and production-minded.",
    author: "Engineering Lead",
    company: "Hyperface Technologies",
    role: "Senior Staff Architect"
  },
  {
    quote: "Working with Mandar is effortless. He approaches software problems with an engineering clarity—focusing on clean code, decoupled modules, and high performance.",
    author: "Product Manager",
    company: "Fintech Platform",
    role: "Lead Product Owner"
  }
];
