# PrajaTech Solutions — Technology Solutions & Digital Services Company

A production-ready, high-converting commercial website built for **PrajaTech Solutions**, a technology solutions and digital services company founded by **Daksh Prajapat (CEO)** and **Raghav Sharma (Co-Founder)**.

---

## 🏢 Company Positioning & Philosophy

- **Company Positioning**: "Technology Solutions & Digital Services Company"
- **Mission**: Helping businesses, startups, local businesses, professionals, and growing operations build, launch, manage, improve, and automate their digital systems.
- **Founders**:
  - **Daksh Prajapat** — CEO
  - **Raghav Sharma** — Co-Founder
- **Strict Integrity Rules Enforced**:
  - No fabricated testimonials, awards, certifications, or fake corporate stats.
  - Case studies framework established with a transparent notice: *"Case studies coming as we complete client projects."*
  - Cloud / DevOps is positioned as a reliable delivery and maintenance capability, not our sole identity.

---

## 🛠️ The 10 Core Services

1. **Website Development**: High-converting business websites, landing pages, local business sites, e-commerce. *(CTA: "Build My Website")*
2. **Web Application Development**: Custom dashboards, client portals, booking engines, internal tools. *(CTA: "Discuss My Software Idea")*
3. **Business Software & Custom Systems**: Replacing manual Excel spreadsheets and WhatsApp chains with tailored operational systems. *(CTA: "Replace Manual Spreadsheets")*
4. **Website & Software Management**: Ongoing maintenance, updates, security, backups, monitoring. *(CTA: "Get Ongoing Support")*
5. **Practical AI Integration**: Customer support assistants, document extraction, smart search. Not marketing hype; real utility. *(CTA: "Explore AI Solutions")*
6. **Business Automation**: Form &rarr; email workflows, WhatsApp alerts, automated invoices, CRM synchronization. *(CTA: "Automate Repetitive Work")*
7. **Hosting, Deployment & Infrastructure**: Linux VPS, AWS, Docker, Nginx, SSL, CI/CD, and backups. *(CTA: "Deploy My System")*
8. **Technical Support & Troubleshooting**: Emergency downtime recovery, broken forms, SSL/DNS issues, database fixes. *(CTA: "Have a Technical Problem?")*
9. **Third-Party API Integrations**: Connecting payment gateways, WhatsApp APIs, CRMs, accounting tools, and Google Services. *(CTA: "Connect My Tools")*
10. **Custom Technology Projects**: Tailored technology solutions for distinct operational requirements. *(CTA: "Tell Us What You Need")*

---

## 🌐 Site Architecture & Conversion Funnel

- **Homepage (`/`)**:
  - **Hero Section**: Value proposition, dual CTA, founder commitment, live system health status card.
  - **"What Are You Trying to Solve?"**: 9 customer problem cards leading to pre-filtered consultation paths.
  - **Core Services Grid**: Tabbed service cards with typical deliverables and pricing notes.
  - **"Still managing via Excel and WhatsApp?"**: Visual comparison of chaotic spreadsheets vs. structured custom software.
  - **"Make Your Business Smarter With AI"**: Dedicated practical AI section with real business pain vs. solution examples.
  - **"Already Have a Website? We Can Manage It."**: Dedicated section targeting businesses with existing websites.
  - **Target Customer Segments**: Small businesses, startups, professionals, and businesses with tech problems.
  - **"From Idea to Running System"**: 6-stage delivery process (Understand &rarr; Plan &rarr; Build &rarr; Launch &rarr; Maintain &rarr; Scale).
  - **Pricing Guide**: Transparent milestone-based estimates ("Starting from ₹X" / "Custom Quote").
  - **How We Build Real Trust**: 6 pillars of genuine trust (no fake reviews, direct founder contact, full code ownership).
  - **Case Studies Status**: Transparent notice and 6-stage case study framework.
  - **Frequently Asked Questions (FAQ)**: Interactive accordion covering 13 real client queries.
  - **Lead Generation Form**: Complete project inquiry form with validation and reference ID confirmation.
- **Dedicated Subpages**:
  - `/services`: Deep dive into all 10 core services with filter controls.
  - `/about`: Company background, founder profiles (Daksh Prajapat & Raghav Sharma), and core operating principles.
  - `/pricing`: Transparent pricing guide, payment milestone breakdown, and code ownership policies.
  - `/contact`: Dedicated contact hub, direct WhatsApp, Phone, Email, and Location placeholders.
  - `/case-studies`: Case studies framework and verification policy.

---

## ⚙️ Environment Configuration

Copy `.env.example` to `.env` to configure company contact credentials:

```bash
VITE_COMPANY_NAME="PrajaTech Solutions"
VITE_COMPANY_TAGLINE="Technology Solutions & Digital Services Company"
VITE_WHATSAPP_NUMBER="+919876543210"
VITE_CONTACT_EMAIL="contact@prajatech.example.com"
VITE_CONTACT_PHONE="+91 98765 43210"
VITE_COMPANY_LOCATION="Jaipur, Rajasthan, India (Serving Clients Across India & Remotely)"
VITE_API_BASE_URL=""
```

---

## 🔌 Connecting a Real Backend Later

The frontend service in [`src/services/inquiryService.ts`](file:///Users/daksh/Downloads/dpdp/tech-services-website/src/services/inquiryService.ts) is already architected for seamless backend connection:

When you deploy your Node.js / Express / Python backend, simply set:
```bash
VITE_API_BASE_URL="https://api.yourdomain.com"
```
The contact form will automatically POST to `${VITE_API_BASE_URL}/api/inquiries`. If `VITE_API_BASE_URL` is empty, it safely simulates a client-side submission with reference tokens for testing.

---

## 🚀 Running Locally

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

4. Preview the production build:
   ```bash
   npm run preview
   ```
