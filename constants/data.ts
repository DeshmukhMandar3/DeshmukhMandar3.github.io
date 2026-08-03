import { Project, SkillCategory, TimelineItem, ExperienceItem } from "@/types";

export const PERSONAL_INFO = {
  name: "Mandar Deshmukh",
  role: "Full Stack Developer",
  targetRole: "Full Stack & Backend Engineer",
  tagline: "Building scalable web applications, PWAs, secure auth, and robust backend systems.",
  location: "India",
  email: "mandardeshmukh.mud@gmail.com",
  phone: "+91 8087352864",
  github: "https://github.com/DeshmukhMandar3",
  linkedin: "https://www.linkedin.com/in/mandar-deshmukh-62821b189/",
  resumeUrl: "https://drive.google.com/file/d/19hVto_OtjE1IALwcBG89TqeCGpZnY0nI/view?usp=drive_link",
  about: `I am a Full Stack Developer with a background in Mechanical Engineering, driven by a passion for clean architecture, system performance, and robust software design. Currently building mission-critical fintech products at Hyperface Technologies, I specialize in developing high-throughput web applications, secure authentication systems, and PWA platforms. Currently deepening my expertise in backend engineering, PostgreSQL optimization, Redis caching patterns, PWAs, and secure session management to craft resilient applications at scale.`,
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
    role: "Full Stack Developer",
    period: "Current Role",
    location: "India",
    type: "Full-Time",
    description: "Architecting and engineering production fintech applications, credit card issuance platforms, and high-reliability Progressive Web Applications (PWAs).",
    responsibilities: [
      "Engineered secure authentication systems with token rotation and robust session management.",
      "Developed high-performance Progressive Web Applications (PWAs) tailored for seamless credit card operations and transaction management.",
      "Architected dashboard integrations processing real-time financial metrics and analytics with minimal latency.",
      "Optimized frontend performance, reduced layout shifts, and streamlined state management across micro-frontend views.",
      "Mentored junior software engineers on code quality, clean architecture principles, and TypeScript best practices.",
      "Collaborated closely with cross-functional product and backend engineering teams to ensure 99.9% application reliability."
    ],
    technologies: ["React", "TypeScript", "Next.js", "Node.js", "Express", "PWA", "Rest APIs", "Redux", "Tailwind CSS"],
    achievements: [
      "Delivered production-grade credit card PWA features utilized by high-volume financial clients.",
      "Established robust authentication patterns and reusable frontend/backend modules."
    ]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    name: "Backend Engineering",
    description: "Robust API construction, authorization mechanisms, and robust server architecture.",
    skills: [
      { name: "Node.js", level: "Production", highlight: true },
      { name: "Express.js", level: "Production", highlight: true },
      { name: "REST API Design", level: "Advanced", highlight: true },
      { name: "JWT Authentication", level: "Advanced", highlight: true },
      { name: "Refresh Token Rotation", level: "Advanced", highlight: true },
      { name: "Zod Validation", level: "Advanced" },
      { name: "Middleware Architecture", level: "Advanced" },
      { name: "Repository Pattern", level: "Advanced", highlight: true },
      { name: "Service Layer Pattern", level: "Advanced" },
      { name: "Dynamic SQL & Pagination", level: "Advanced" },
      { name: "bcrypt & Security", level: "Advanced" },
    ]
  },
  {
    name: "Databases & Caching",
    description: "Relational data modeling, query optimization, and memory cache layer patterns.",
    skills: [
      { name: "PostgreSQL", level: "Advanced", highlight: true },
      { name: "Redis Caching", level: "Advanced", highlight: true },
      { name: "Cache Aside Pattern", level: "Advanced", highlight: true },
      { name: "Transactions & ACID", level: "Advanced" },
      { name: "Connection Pooling", level: "Advanced" },
      { name: "Dynamic Querying & Sorting", level: "Advanced" }
    ]
  },
  {
    name: "System Design & Concepts",
    description: "Foundational concepts for building high-scale, resilient web and backend applications.",
    skills: [
      { name: "Layered Architecture", level: "Advanced", highlight: true },
      { name: "Horizontal Scaling", level: "Intermediate" },
      { name: "Load Balancing", level: "Intermediate" },
      { name: "API Gateway Concepts", level: "Intermediate" },
      { name: "Rate Limiting & Throttling", level: "Intermediate" },
      { name: "Message Queues", level: "Learning" },
      { name: "Event-Driven Architecture", level: "Learning" },
      { name: "Background Jobs", level: "Intermediate" },
    ]
  },
  {
    name: "Frontend Craftsmanship",
    description: "Modern, responsive, and performant user interface engineering.",
    skills: [
      { name: "React.js", level: "Production", highlight: true },
      { name: "Next.js (App Router)", level: "Production", highlight: true },
      { name: "TypeScript", level: "Production", highlight: true },
      { name: "JavaScript (ES6+)", level: "Production" },
      { name: "Tailwind CSS", level: "Production", highlight: true },
      { name: "Progressive Web Apps (PWA)", level: "Production" },
      { name: "Redux / Toolkit", level: "Production" },
      { name: "React Query", level: "Production" },
      { name: "React Hook Form", level: "Production" },
      { name: "Framer Motion", level: "Production" },
      { name: "Vite & Build Tooling", level: "Advanced" }
    ]
  },
  {
    name: "DevOps & Tooling",
    description: "Continuous integration, environment control, and modern delivery workflows.",
    skills: [
      { name: "Git & GitHub", level: "Production", highlight: true },
      { name: "Docker", level: "Learning" },
      { name: "Vercel Optimization", level: "Production" },
      { name: "CI/CD Workflows", level: "Intermediate" },
      { name: "AWS Fundamentals", level: "Intermediate" },
      { name: "Environment Management", level: "Advanced" }
    ]
  }
];

export const FEATURED_BACKEND_PROJECT: Project = {
  id: "employee-management-system",
  title: "Employee Management System API",
  subtitle: "Production-Grade Layered Backend Architecture with Redis Cache-Aside & Dynamic SQL",
  description: "A robust backend system engineered with Node.js, Express, PostgreSQL, and Redis. Features clean Layered Architecture (Controller -> Service -> Repository), JWT Refresh Token rotation, dynamic filtering/pagination/sorting SQL queries, Zod schema validation, and Redis caching for ultra-fast query responses.",
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
    "Gained practical mastery over Database Indexing strategies and Redis Memory Management."
  ],
  githubUrl: "https://github.com/DeshmukhMandar3",
  featured: true
};

export const PROJECTS: Project[] = [
  {
    id: "cruise-rental",
    title: "CruiseRental",
    subtitle: "Enterprise Car Rental Platform & Dedicated Admin Dashboard",
    description: "Comprehensive car rental application inspired by Avis. Built with React, Redux, Node.js, Express, MongoDB, and TypeScript. Features full customer booking flow, vehicle search, authentication, and a separate administrative portal for fleet management.",
    category: "Full Stack",
    image: "https://64.media.tumblr.com/ba4e3bc3e6978d8235633c97ec03ffbf/e73fa51cb24bdecf-58/s1280x1920/698b71c9a51fb7998d11774e0dfac1fbf1578aa7.pnj",
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
    subtitle: "High-Traffic E-Commerce Platform Inspired by ShopClues",
    description: "Collaborative e-commerce platform built to handle multi-category product catalog browsing, cart operations, user profiles, and simulated multi-step payment gateway integrations.",
    category: "Frontend",
    image: "https://64.media.tumblr.com/4fd56442a33295d9f6b3e680f834afa7/2877a4872bf0aa5d-04/s1280x1920/117b55f7f30c155b2b57951f06f1fe050376da2f.pnj",
    tags: ["React", "JavaScript", "Chakra UI", "REST API", "HTML5/CSS3"],
    architecture: [
      "Component-driven layout architecture with reusable product grid layouts.",
      "Local storage sync for persistent shopping carts across reloads."
    ],
    githubUrl: "https://github.com/DeshmukhMandar3/plucky-cub-1995",
    liveUrl: "https://oasis-shop.vercel.app/"
  },
  {
    id: "shopetronics",
    title: "Shopetronics",
    subtitle: "Global Consumer Electronics Storefront Inspired by GeekBuying",
    description: "Individually engineered e-commerce app focused on tech gadgets and electronics. Built with focus on responsive layouts, filterable product views, price calculators, and checkout flow.",
    category: "Frontend",
    image: "https://64.media.tumblr.com/6f342ad10eb2960144419588e96441d5/97f1e4d4c2fbfd77-0b/s1280x1920/c27fd2674a5efdf2860dad41dbabfef1f9bf7ea0.pnj",
    tags: ["React", "Chakra UI", "JavaScript", "REST API"],
    githubUrl: "https://github.com/DeshmukhMandar3/-violet-spark-1183",
    liveUrl: "https://shopetronics.vercel.app/"
  },
  {
    id: "bestreads",
    title: "BestReads Platform",
    subtitle: "Interactive Literature Discovery & Book Recommendation Portal",
    description: "Collaborative book exploration platform built to catalog top literature, user reviews, and curated reading lists inspired by IdeaKart.",
    category: "Frontend",
    image: "https://64.media.tumblr.com/a778c4c577e6dc472c0939bb3862cc09/c35e69207ce998c3-07/s1280x1920/87a7fd8a50b0a04cf69afd0f12105c476d995989.pnj",
    tags: ["JavaScript", "HTML5", "CSS3", "DOM Manipulation"],
    githubUrl: "https://github.com/DeshmukhMandar3/past-underwear-3653",
    liveUrl: "https://reliable-kashata-dfa0d1.netlify.app/"
  }
];

export const TIMELINE: TimelineItem[] = [
  {
    id: "me-foundation",
    period: "Engineering Foundations",
    title: "Mechanical Engineering Degree",
    subtitle: "Problem-Solving, Mathematical Modeling & Engineering Thinking",
    category: "Education",
    description: "Developed strong analytical skills, thermodynamics, fluid dynamics, and structured engineering methodologies. Laid the mindset foundation for analytical problem solving and quantitative reasoning.",
    keyTakeaways: ["Analytical problem solving", "Systems thinking", "Data & physics modeling"],
    technologies: ["Mathematics", "Physics", "CAD Modeling"]
  },
  {
    id: "frontend-entry",
    period: "Developer Transition",
    title: "Full Stack Web Development Immersion",
    subtitle: "1200+ Hours Intensive Practical Coding",
    category: "Career",
    description: "Dedicated 1200+ hours to intensive web development software engineering principles, building algorithms, data structures, HTML, CSS, JavaScript, and React applications.",
    keyTakeaways: ["Mastered JS fundamentals", "Built 5+ full applications", "Agile collaboration"],
    technologies: ["HTML5", "CSS3", "JavaScript", "Git"]
  },
  {
    id: "react-mastery",
    period: "Frontend Mastery",
    title: "React & Ecosystem Specialist",
    subtitle: "State Management, Micro-Frontends & Performance Optimization",
    category: "Career",
    description: "Delved into React component architecture, Redux Toolkit state flow, Custom Hooks, and TypeScript integration for scalable client applications.",
    keyTakeaways: ["Reusability", "TypeScript type-safety", "State isolation"],
    technologies: ["React", "Redux", "TypeScript", "Tailwind CSS"]
  },
  {
    id: "hyperface-pwa",
    period: "Production Engineering",
    title: "Full Stack Developer at Hyperface Technologies",
    subtitle: "Production Fintech PWAs & Credit Card Solutions",
    category: "Career",
    isCurrent: true,
    description: "Joined Hyperface to build high-stakes fintech products, handling credit card flows, security authentication, and PWA optimization for scale.",
    keyTakeaways: ["Production accountability", "Fintech security standards", "PWA performance"],
    technologies: ["React", "TypeScript", "Node.js", "Express", "PWA"]
  },
  {
    id: "backend-transition",
    period: "Backend Deep-Dive",
    title: "Node.js, Express & PostgreSQL Architecture",
    subtitle: "Layered Patterns, Relational Modeling & Clean API Design",
    category: "Backend Transition",
    description: "Expanded core expertise into backend engineering: designing RESTful endpoints, implementing Repository & Service patterns, handling SQL transactions, and strict schema validation with Zod.",
    keyTakeaways: ["Layered architecture isolation", "ACID SQL transactions", "Zod request contracts"],
    technologies: ["Node.js", "Express", "PostgreSQL", "Zod", "JWT"]
  },
  {
    id: "caching-systems",
    period: "Performance & Caching",
    title: "Redis Cache-Aside & Performance Patterns",
    subtitle: "Sub-Millisecond Queries & Rate Limiting",
    category: "Architecture",
    description: "Implemented Redis in-memory caching strategies, Cache-Aside pattern, token blacklist management, rate-limiting algorithms, and query latency reduction.",
    keyTakeaways: ["Sub-5ms response speeds", "Cache invalidation discipline", "Session storage"],
    technologies: ["Redis", "PostgreSQL", "Connection Pooling", "Cache-Aside"]
  },
  {
    id: "senior-preparation",
    period: "Next Frontier",
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
