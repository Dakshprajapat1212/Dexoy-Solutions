export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  problemSolved: string;
  fullDesc: string;
  examples: string[];
  capabilities: string[];
  ctaText: string;
  ctaIntent: string;
  priceNote: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: "website-development",
    number: "01",
    title: "Website Development",
    shortDesc: "Modern, high-performance websites built to establish credibility and convert visitors into inquiries.",
    problemSolved: "Your business has no web presence or an outdated website that doesn't bring inquiries.",
    fullDesc: "We build fast, responsive, and search-optimized websites designed for real businesses. From single-page landing pages that generate leads to full corporate and e-commerce websites with CMS and admin dashboards.",
    examples: [
      "Business & corporate websites",
      "Lead-generation landing pages",
      "Local business & service websites",
      "Restaurant & cafe websites with digital menus",
      "Clinic & healthcare appointment websites",
      "Coaching institute & education websites",
      "E-commerce & catalog websites",
      "Professional & personal branding portfolios"
    ],
    capabilities: [
      "Custom responsive UI/UX",
      "Frontend & backend development",
      "Contact forms & lead capture",
      "Database & admin panels",
      "Payment gateway integration",
      "SEO-friendly semantic markup",
      "Domain & SSL configuration",
      "Fast, secure production hosting"
    ],
    ctaText: "Build My Website",
    ctaIntent: "Website Development",
    priceNote: "Starting from ₹X (Based on scope & pages)"
  },
  {
    id: "web-applications",
    number: "02",
    title: "Web Application Development",
    shortDesc: "Custom web-based software tailored to your specific business operations, accessible securely from any browser.",
    problemSolved: "Off-the-shelf software doesn't fit your business rules, or you have an idea and don't know where to start.",
    fullDesc: "You don't need to be a technical expert to build software. We help you take your operational idea, refine the user workflow, and build a secure, robust web application that solves your exact problem.",
    examples: [
      "Admin & management dashboards",
      "Customer portals & client accounts",
      "Online booking & scheduling systems",
      "Inventory & warehouse tracking systems",
      "CRM & customer pipeline management",
      "Staff attendance & task tracking systems",
      "Billing & invoice generators",
      "Internal company tools & workflows"
    ],
    capabilities: [
      "Role-based authentication & permissions",
      "Interactive data tables & dashboards",
      "Relational & document databases",
      "RESTful API architectures",
      "Automated reports & PDF export",
      "Multi-device responsive layouts",
      "Data validation & audit logs",
      "Scalable cloud deployment"
    ],
    ctaText: "Discuss My Software Idea",
    ctaIntent: "Web Application",
    priceNote: "Custom Quote (Based on features & user roles)"
  },
  {
    id: "business-software",
    number: "03",
    title: "Business Software & Custom Systems",
    shortDesc: "Replace chaotic spreadsheets and WhatsApp message chains with structured software built for your team.",
    problemSolved: "Still managing customers, orders, or inventory through Excel and WhatsApp? Things get lost and staff get confused.",
    fullDesc: "Many growing businesses rely on fragmented spreadsheets, handwritten notes, and WhatsApp chats. We build focused, practical business systems that organize your daily operations into a single, clean dashboard your staff can use effortlessly.",
    examples: [
      "Customer record management (CRM)",
      "Stock & inventory alerts system",
      "Custom billing, GST & payment tracking",
      "Employee shift & task allocation",
      "Appointment & booking queues",
      "Document & record archive system",
      "Executive reporting & revenue summaries"
    ],
    capabilities: [
      "Workflow-specific screen design",
      "Zero clutter — only the features you need",
      "Excel/CSV data import and export",
      "Automated WhatsApp & SMS reminders",
      "Multi-branch / multi-user support",
      "Data backup & protection"
    ],
    ctaText: "Replace Manual Spreadsheets",
    ctaIntent: "Business Software",
    priceNote: "Custom Quote (Tailored to operational workflow)"
  },
  {
    id: "website-management",
    number: "04",
    title: "Website & Software Management",
    shortDesc: "Ongoing maintenance, security patches, content updates, and server monitoring so you never worry about downtime.",
    problemSolved: "You already have a website or software, but nobody is maintaining it, updating content, or fixing bugs.",
    fullDesc: "You don't need to rebuild everything from scratch. We take over the maintenance of your existing website or application, keeping it updated, fast, secure, backed up, and running smoothly month after month.",
    examples: [
      "Regular content, banner & pricing updates",
      "Security updates & bug fixing",
      "Performance optimization & speed fixes",
      "Daily/weekly database backups",
      "Domain renewals, DNS & SSL management",
      "Server uptime monitoring & troubleshooting",
      "Feature enhancements & layout adjustments"
    ],
    capabilities: [
      "Guaranteed response time for urgent issues",
      "Proactive security scanning",
      "Scheduled database & file backups",
      "Version control & deployment pipelines",
      "Monthly health & performance summaries"
    ],
    ctaText: "Get Ongoing Support",
    ctaIntent: "Website Management",
    priceNote: "Starting from ₹X/month (Monthly maintenance plan)"
  },
  {
    id: "ai-integration",
    number: "05",
    title: "AI Integration",
    shortDesc: "Practical AI capabilities embedded into your existing websites, customer channels, and internal systems.",
    problemSolved: "Staff spending hours answering repetitive questions or manually reading, summarizing, and entering data.",
    fullDesc: "We do not sell hype or pretend to build another ChatGPT. We integrate practical, battle-tested AI APIs into your existing business systems so your website answers customer queries 24/7, extracts information from invoices, or drafts responses automatically.",
    examples: [
      "Website customer support AI assistant (trained on your business FAQs)",
      "WhatsApp automated inquiry assistants",
      "AI document & invoice data extraction",
      "Smart search across internal documents & catalogs",
      "Automated customer feedback summarization",
      "AI-assisted email response drafts",
      "Lead qualification & inquiry routing"
    ],
    capabilities: [
      "OpenAI & Claude API integrations",
      "Custom knowledge retrieval (RAG) on business docs",
      "Strict guardrails preventing false answers",
      "Human-handoff triggers when staff is needed",
      "Secure API key management & cost controls"
    ],
    ctaText: "Explore AI Solutions",
    ctaIntent: "AI Integration",
    priceNote: "Starting from ₹X (Based on integration complexity)"
  },
  {
    id: "business-automation",
    number: "06",
    title: "Business Automation",
    shortDesc: "Automate repetitive workflows between your forms, emails, WhatsApp, and databases to save hours every day.",
    problemSolved: "Your team spends significant time manually copying lead data, sending follow-up emails, or creating invoices.",
    fullDesc: "We connect your disparate business tools and automate multi-step tasks. When a customer submits an inquiry, an automatic WhatsApp confirmation can be sent, lead details saved to a database, and an alert delivered to your sales team instantly.",
    examples: [
      "Form submission → WhatsApp & Email confirmation",
      "New customer inquiry → CRM & Team notification",
      "Order placement → Automated PDF invoice generation",
      "Appointment booking → Calendar sync & SMS reminder",
      "Payment received → Status update & receipt dispatch",
      "Automated daily/weekly summary reports"
    ],
    capabilities: [
      "Webhook & API workflow triggers",
      "WhatsApp Business API integrations",
      "Transactional email (Resend/SendGrid/SMTP)",
      "Google Sheets & CRM synchronization",
      "Error logging & retry mechanisms"
    ],
    ctaText: "Automate Repetitive Work",
    ctaIntent: "Business Automation",
    priceNote: "Custom Quote (Based on number of workflows)"
  },
  {
    id: "hosting-deployment",
    number: "07",
    title: "Hosting, Deployment & Infrastructure",
    shortDesc: "Solid server setup, cloud configuration, and deployment pipelines to keep your software fast, secure, and always online.",
    problemSolved: "Your website is slow, crashes during traffic spikes, or deployment is difficult and breaks frequently.",
    fullDesc: "DevOps and cloud infrastructure are not our sole identity—they are the critical technical foundation that allows us to deliver and run your software reliably. We configure clean Linux servers, cloud providers, and automated deployments.",
    examples: [
      "Website & web app production deployment",
      "Linux VPS setup (DigitalOcean, Linode, Hetzner)",
      "AWS cloud architecture (EC2, S3, RDS, CloudFront)",
      "Docker containerization for consistent environments",
      "Nginx reverse proxy, caching, and rate limiting",
      "Domain DNS routing & free auto-renewing SSL (HTTPS)",
      "Automated CI/CD deployment pipelines",
      "Automated remote backups"
    ],
    capabilities: [
      "Zero-downtime deployment strategies",
      "Server security hardening & firewall configuration",
      "Database automated backup to cloud storage",
      "Server resource monitoring (CPU, RAM, Disk)",
      "Fast CDN integration for media & assets"
    ],
    ctaText: "Deploy My System",
    ctaIntent: "Hosting & Deployment",
    priceNote: "Starting from ₹X (Setup or managed hosting)"
  },
  {
    id: "technical-support",
    number: "08",
    title: "Technical Support & Troubleshooting",
    shortDesc: "On-demand troubleshooting for businesses dealing with broken code, database errors, email deliverability, or server crashes.",
    problemSolved: "Your website is down, forms aren't working, or your previous developer disappeared and left broken code.",
    fullDesc: "When your business technology breaks, every hour lost costs customers. We provide honest, direct technical troubleshooting to diagnose the root issue, fix the bug, secure the system, and get you back in business quickly.",
    examples: [
      "Emergency website downtime resolution",
      "Broken contact forms or payment gateway errors",
      "SSL certificate expiration & HTTPS warnings",
      "Database connection failures & slow queries",
      "Domain DNS misconfigurations & email delivery issues",
      "Website malware cleanup & security audit",
      "Third-party API deprecation fixes"
    ],
    capabilities: [
      "Rapid root-cause analysis",
      "Clear non-technical explanation of the problem",
      "Direct fix implementation with testing",
      "Preventive recommendations to avoid recurrences"
    ],
    ctaText: "Have a Technical Problem?",
    ctaIntent: "Technical Support",
    priceNote: "Starting from ₹X/hour or fixed diagnostic quote"
  },
  {
    id: "api-integrations",
    number: "09",
    title: "Third-Party API & Software Integration",
    shortDesc: "Connect your existing software tools so data flows automatically without manual copy-pasting.",
    problemSolved: "Your tools operate in silos: your website doesn't speak to your accounting software or CRM.",
    fullDesc: "You don't need to replace all your software to gain efficiency. We build custom API bridges that allow your existing tools—payment gateways, CRMs, WhatsApp, SMS gateways, and Google Workspace—to talk to each other seamlessly.",
    examples: [
      "Payment gateways (Razorpay, Stripe, Cashfree, PayPal)",
      "WhatsApp Business API messaging integrations",
      "CRM integrations (HubSpot, Zoho, custom databases)",
      "Accounting & invoicing software synchronization",
      "Google Services (Sheets, Calendar, Drive, Maps)",
      "SMS & transactional email notification systems",
      "Custom RESTful APIs for mobile or partner access"
    ],
    capabilities: [
      "Secure webhook handling with cryptographic verification",
      "Rate-limit & timeout management",
      "Automatic retry queues for failed transmissions",
      "Thorough API documentation for your records"
    ],
    ctaText: "Connect My Tools",
    ctaIntent: "API Integration",
    priceNote: "Custom Quote (Based on APIs and complexity)"
  },
  {
    id: "custom-projects",
    number: "10",
    title: "Custom Technology Projects",
    shortDesc: "For unique business requirements and experimental tools that don't fit standard categories.",
    problemSolved: "You have a distinct operational challenge and haven't found any ready-made software that solves it.",
    fullDesc: "Every business has unique operational nuances. Tell us what you are trying to achieve, what problem you want to eliminate, or what workflow you want to digitize. We will analyze the requirements and propose the simplest, most practical technology solution.",
    examples: [
      "Specialized calculation & quotation engines",
      "Customer verification or document validation systems",
      "Internal hardware or barcode scanner integrations",
      "Multi-vendor coordination portals",
      "Hybrid mobile/web view apps for field agents"
    ],
    capabilities: [
      "In-depth requirement discovery",
      "Iterative prototype development",
      "Direct communication with founders",
      "Full source code ownership handed over to you"
    ],
    ctaText: "Tell Us What You Need",
    ctaIntent: "Custom Technology Project",
    priceNote: "Custom Quote (Clear scope & milestone pricing)"
  }
];

export const customerProblems = [
  {
    icon: "Globe",
    question: "I need a website.",
    description: "Launch a modern, credible business website that looks professional on mobile and turns visitors into calls and inquiries.",
    recommendedServiceId: "website-development",
    serviceTitle: "Website Development"
  },
  {
    icon: "LayoutDashboard",
    question: "I need custom software.",
    description: "Build a web-based dashboard, customer portal, or internal management tool tailored specifically to your business rules.",
    recommendedServiceId: "web-applications",
    serviceTitle: "Web Application Development"
  },
  {
    icon: "Wrench",
    question: "My current website needs fixing.",
    description: "Resolve slow loading, broken forms, mobile layout issues, or outdated design without rebuilding from zero.",
    recommendedServiceId: "technical-support",
    serviceTitle: "Technical Support & Troubleshooting"
  },
  {
    icon: "Zap",
    question: "I want to automate my business.",
    description: "Stop spending hours copying data between WhatsApp, spreadsheets, and emails. Let systems talk to each other automatically.",
    recommendedServiceId: "business-automation",
    serviceTitle: "Business Automation"
  },
  {
    icon: "Bot",
    question: "I want to add AI to my business.",
    description: "Integrate practical AI assistants to answer customer questions on your website 24/7 or process documents automatically.",
    recommendedServiceId: "ai-integration",
    serviceTitle: "AI Integration"
  },
  {
    icon: "ShieldCheck",
    question: "I need someone to manage my website.",
    description: "Keep your website updated, secure, backed up, and running smoothly without needing an in-house technical team.",
    recommendedServiceId: "website-management",
    serviceTitle: "Website & Software Management"
  },
  {
    icon: "Server",
    question: "I need to deploy my application.",
    description: "Set up reliable cloud hosting, Linux servers, SSL certificates, and zero-downtime deployment pipelines for your software.",
    recommendedServiceId: "hosting-deployment",
    serviceTitle: "Hosting & Deployment"
  },
  {
    icon: "Lightbulb",
    question: "I have a software idea but don't know where to start.",
    description: "Discuss your concept with us. We help you define the minimum practical version and choose the right technology.",
    recommendedServiceId: "web-applications",
    serviceTitle: "Idea to Prototype Consultation"
  },
  {
    icon: "AlertTriangle",
    question: "I have a technical problem.",
    description: "Facing server errors, SSL issues, database failures, or an unresponsive developer? We troubleshoot and fix the root cause.",
    recommendedServiceId: "technical-support",
    serviceTitle: "Technical Troubleshooting"
  }
];

export const processSteps = [
  {
    step: "01",
    title: "Understand",
    headline: "We understand your business and the problem.",
    description: "We don't talk in confusing technical jargon. We listen to how your business operates, what you want to achieve, who your customers are, and what obstacle you want removed."
  },
  {
    step: "02",
    title: "Plan",
    headline: "We recommend the simplest practical solution.",
    description: "We don't push unnecessary technology. We outline a clear scope of work, recommended architecture, transparent cost estimate, and expected delivery timeline."
  },
  {
    step: "03",
    title: "Build",
    headline: "We design and develop the system with high quality.",
    description: "We write clean, secure code and build responsive user interfaces. You get regular progress updates and preview links so you can test features early."
  },
  {
    step: "04",
    title: "Launch",
    headline: "We deploy and configure the system in production.",
    description: "We handle domain setup, SSL certificates, database migrations, server configuration, and end-to-end testing so the launch is smooth and reliable."
  },
  {
    step: "05",
    title: "Maintain",
    headline: "We provide ongoing updates, support, and improvements.",
    description: "Software is not a one-time event. We offer ongoing maintenance, security updates, backups, and prompt technical support whenever you need help."
  },
  {
    step: "06",
    title: "Scale",
    headline: "As your business grows, we expand your systems.",
    description: "When your volume increases or you need new features, automated workflows, or AI capabilities, we build on top of your existing foundations without breaking them."
  }
];

export const targetCustomerGroups = [
  {
    category: "Small & Local Businesses",
    description: "Practical digital tools to attract local clients, accept inquiries, and manage daily operations.",
    types: [
      "Restaurants, Cafes & Cloud Kitchens",
      "Coaching Institutes & Academies",
      "Clinics, Diagnostic Centers & Doctors",
      "Gyms, Fitness Studios & Trainers",
      "Real Estate Agencies & Builders",
      "Local Retailers & Wholesalers",
      "Manufacturers & Industrial Suppliers",
      "Salons, Spas & Wellness Centers",
      "Consultants, CAs & Professional Agencies",
      "Hotels, Resorts & Homestays"
    ]
  },
  {
    category: "Startups & New Ventures",
    description: "Fast-moving technical development to turn ideas into working MVPs and scalable digital products.",
    types: [
      "MVP Development & Fast Prototyping",
      "Custom Web Applications & SaaS",
      "AI Integrations & Workflow Assistants",
      "Scalable Backend & Database Architecture",
      "Cloud Deployment & Infrastructure Setup",
      "Technical Advisory & Architecture Planning"
    ]
  },
  {
    category: "Professionals & Creators",
    description: "Clean personal branding and lead-generation systems that showcase credibility and book clients.",
    types: [
      "Doctors & Healthcare Specialists",
      "Lawyers, Chartered Accountants & Advisors",
      "Architects, Interior Designers & Creatives",
      "Corporate Trainers & Independent Coaches",
      "Freelancers & Specialist Consultants"
    ]
  },
  {
    category: "Existing Businesses With Technology Problems",
    description: "Fixing, upgrading, and maintaining systems that are slow, outdated, or difficult to manage.",
    types: [
      "Businesses with old or non-responsive websites",
      "Companies with broken software or abandoned code",
      "Operations stuck with manual Excel & WhatsApp",
      "Websites with poor hosting and frequent downtime",
      "Systems with no automated backup or security updates"
    ]
  }
];

export const faqList = [
  {
    question: "Can you build a website from scratch?",
    answer: "Yes, absolutely. We design and develop custom websites from ground up based on your business requirements, including responsive design, contact forms, database integration, SEO basics, and production deployment."
  },
  {
    question: "Can you build custom software for my business?",
    answer: "Yes. We build custom web-based software such as admin dashboards, customer portals, booking systems, inventory trackers, and internal tools. We tailor the software specifically to how your business operates."
  },
  {
    question: "I already have a website. Can you manage it?",
    answer: "Yes. You do not need to rebuild everything. We can take over ongoing management of your existing website, handling content updates, bug fixing, security patches, backups, and speed improvements."
  },
  {
    question: "Can you fix my existing website?",
    answer: "Yes. If your current website is slow, has broken forms, layout glitches on mobile, or server issues, we diagnose the exact problem and fix it directly."
  },
  {
    question: "Can you add AI to my existing website?",
    answer: "Yes. We integrate practical AI features such as 24/7 AI customer support assistants trained on your business FAQs, document data extraction, and automated inquiry responses into your current website."
  },
  {
    question: "Can you automate repetitive business processes?",
    answer: "Yes. We connect your forms, WhatsApp, emails, and databases so manual data entry, customer confirmations, invoice creation, and team notifications happen automatically."
  },
  {
    question: "Can you integrate different software systems?",
    answer: "Yes. We build custom API integrations connecting payment gateways (Razorpay/Stripe), WhatsApp Business API, CRMs, Google Sheets, email services, and accounting systems."
  },
  {
    question: "Can you deploy my application?",
    answer: "Yes. We configure Linux servers, AWS, VPS, Docker containers, Nginx reverse proxies, domain DNS, and free auto-renewing SSL certificates so your application runs securely in production."
  },
  {
    question: "Can you provide monthly maintenance?",
    answer: "Yes. We offer ongoing monthly support and maintenance packages that cover regular backups, security updates, server monitoring, bug fixes, and minor content updates."
  },
  {
    question: "Can you work with businesses outside Rajasthan?",
    answer: "Yes. While we are founded in Jaipur, Rajasthan, we serve businesses across India and internationally. All consultations, demonstrations, progress reviews, and deployments are conducted seamlessly through video calls, WhatsApp, and email."
  },
  {
    question: "Can you work remotely?",
    answer: "Yes, 100%. We work remotely with full transparency. You receive staging preview links, regular WhatsApp/email updates, and direct access to the founders throughout the project."
  },
  {
    question: "How much does a project cost?",
    answer: "Every project has distinct requirements. Standard websites start from ₹X, while custom web applications, business software, and complex automations are quoted based on required features and integrations. We provide a transparent, itemized quote with no hidden surprises."
  },
  {
    question: "How do I start?",
    answer: "Simply submit the project inquiry form on our website or click the WhatsApp button to chat directly with us. We will discuss your requirement, understand your goals, and give you a clear proposal."
  }
];

export const pricingTiers = [
  {
    service: "Website Development",
    startingRate: "Starting from ₹X",
    billingType: "One-time project",
    description: "Professional business website, responsive UI, lead-capture forms, domain setup, and production hosting.",
    features: [
      "Custom responsive design (Mobile, Tablet, Desktop)",
      "Contact & lead inquiry forms",
      "Fast page load & SEO semantic structure",
      "Domain & SSL configuration",
      "100% source code ownership"
    ],
    ctaIntent: "Website Development"
  },
  {
    service: "Web Application Development",
    startingRate: "Custom Quote",
    billingType: "Milestone-based",
    description: "Custom web-based software, client portals, booking engines, or dashboards tailored to business workflows.",
    features: [
      "User authentication & role-based permissions",
      "Custom database design & business logic",
      "Interactive data tables & dashboards",
      "Staging preview environment for testing",
      "Production cloud deployment"
    ],
    ctaIntent: "Web Application"
  },
  {
    service: "Business Software & Systems",
    startingRate: "Custom Quote",
    billingType: "Milestone-based",
    description: "Replace spreadsheets and manual WhatsApp messages with focused software designed for your staff.",
    features: [
      "Customer / stock / order workflow mapping",
      "Zero clutter interface built for daily speed",
      "Data import from existing Excel files",
      "Automated alerts & reminder triggers",
      "Dedicated team walkthrough & training"
    ],
    ctaIntent: "Business Software"
  },
  {
    service: "Website & Software Maintenance",
    startingRate: "₹X / month",
    billingType: "Monthly recurring",
    description: "Ongoing peace of mind. We keep your website or application updated, secure, backed up, and monitored.",
    features: [
      "Regular software & security updates",
      "Scheduled database & file backups",
      "Bug fixing & emergency uptime response",
      "Routine content & text changes",
      "Direct WhatsApp access for urgent issues"
    ],
    ctaIntent: "Website Management"
  },
  {
    service: "Practical AI Integration",
    startingRate: "Starting from ₹X",
    billingType: "One-time + API costs",
    description: "AI customer support assistants, website search, or automated document processing embedded in your system.",
    features: [
      "24/7 AI website customer assistant",
      "Trained on your actual business FAQs & docs",
      "Human-agent escalation triggers",
      "Cost-controlled API integration",
      "Security guardrails against false answers"
    ],
    ctaIntent: "AI Integration"
  },
  {
    service: "Technical Support & Troubleshooting",
    startingRate: "₹X / hour or fixed diagnostic quote",
    billingType: "Per-issue or hourly",
    description: "Direct troubleshooting for broken websites, server crashes, database errors, or SSL issues.",
    features: [
      "Rapid root-cause diagnosis",
      "Emergency downtime recovery",
      "Broken form & payment gateway fix",
      "Domain DNS & SSL correction",
      "Honest explanation with no technical jargon"
    ],
    ctaIntent: "Technical Support"
  }
];
