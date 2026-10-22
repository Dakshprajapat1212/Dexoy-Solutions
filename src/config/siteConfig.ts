export interface Founder {
  name: string;
  role: string;
  title: string;
  bio: string;
  statement1: string;
  statement2: string;
  email: string;
  phone: string;
  location: string;
}

export interface TeamMember {
  name: string;
  role: string;
  title: string;
  bio: string;
  phone: string;
  whatsappNumber: string;
  location: string;
  email?: string;
  focus: string[];
}

export interface SiteConfig {
  companyName: string;
  tagline: string;
  positioning: string;
  founder: Founder;
  growthLead: TeamMember;
  contact: {
    email: string;
    phone: string;
    whatsappNumber: string;
    location: string;
    hours: string;
  };
}

export const siteConfig: SiteConfig = {
  companyName: import.meta.env.VITE_COMPANY_NAME || "Dexoy Solutions",
  tagline: "Websites, custom software, and practical automation — built with human craft and founder accountability.",
  positioning: "Technology Solutions & Digital Services Studio",
  founder: {
    name: "Daksh Prajapat",
    role: "Founder & CEO",
    title: "Founder & Lead Systems Engineer",
    bio: "Personally designs your system architecture, writes the code, and ensures your business stays online with zero agency overhead.",
    statement1: "When you hire a typical digital agency, you usually speak to a salesperson, get passed along to a project manager, and your actual build is handed off to junior freelancers. When something breaks on a Saturday night, no one takes ownership.",
    statement2: "At Dexoy Solutions, you talk directly with me. I personally design your system architecture, write the code, and ensure your business stays online. If something breaks or an integration halts, I am the specific person who fixes it.",
    email: import.meta.env.VITE_CONTACT_EMAIL || "dakshprajapat1212@gmail.com",
    phone: import.meta.env.VITE_CONTACT_PHONE || "+91 8502099643",
    location: import.meta.env.VITE_COMPANY_LOCATION || "Newai, Rajasthan, India"
  },
  growthLead: {
    name: "Raghav Sharma",
    role: "Head of Growth",
    title: "Head of Growth & Strategic Partnerships",
    bio: "Leads client expansion, commercial feasibility, and strategic partnerships. Ensures every technology solution directly powers client revenue and business scaling.",
    phone: "+91 9166909099",
    whatsappNumber: "+91 9166909099",
    location: "Jaipur, Rajasthan, India",
    focus: [
      "Client Partnerships & Growth Strategy",
      "Scope Feasibility & Commercial Roadmapping",
      "Enterprise & SME Solution Delivery",
      "Dedicated Client Success & SLA Governance"
    ]
  },
  contact: {
    email: import.meta.env.VITE_CONTACT_EMAIL || "dakshprajapat1212@gmail.com",
    phone: import.meta.env.VITE_CONTACT_PHONE || "+91 8502099643",
    whatsappNumber: import.meta.env.VITE_WHATSAPP_NUMBER || "+91 8502099643",
    location: import.meta.env.VITE_COMPANY_LOCATION || "Newai, Rajasthan, India (Serving Clients Locally & Remotely)",
    hours: "Monday – Saturday: 9:00 AM – 8:00 PM IST"
  }
};

/**
 * Generates a direct WhatsApp link with a pre-filled professional message
 */
export function getWhatsAppLink(customMessage?: string): string {
  const cleanNumber = siteConfig.contact.whatsappNumber.replace(/[^0-9]/g, '');
  const text = customMessage || "Hi Daksh, I'd like to discuss a technology project for my business.";
  return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(text)}`;
}

/**
 * Generates a direct WhatsApp link to Head of Growth Raghav Sharma
 */
export function getGrowthWhatsAppLink(customMessage?: string): string {
  const cleanNumber = siteConfig.growthLead.whatsappNumber.replace(/[^0-9]/g, '');
  const text = customMessage || "Hi Raghav, I'd like to discuss a growth and technology collaboration with Dexoy Solutions.";
  return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(text)}`;
}
