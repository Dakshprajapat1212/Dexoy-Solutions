import React from 'react';
import { Hero } from '../components/Hero';
import { ProblemMatrix } from '../components/ProblemMatrix';
import { CapabilitiesSection } from '../components/CapabilitiesSection';
import { ArchitectureVisualizer } from '../components/ArchitectureVisualizer';
import { WebsiteCareHub } from '../components/WebsiteCareHub';
import { PracticalAISection } from '../components/PracticalAISection';
import { HowWeWork } from '../components/HowWeWork';
import { PrototypesSection } from '../components/PrototypesSection';
import { ProjectScopeCalculator } from '../components/ProjectScopeCalculator';
import { FounderAccountability } from '../components/FounderAccountability';
import { FAQSection } from '../components/FAQSection';
import { IntakeForm } from '../components/IntakeForm';

export const Home: React.FC = () => {
  return (
    <div className="flex flex-col w-full bg-surface">
      {/* 01. Hero Section */}
      <Hero />

      {/* 02. Problem-First Self-Identification Matrix */}
      <ProblemMatrix />

      {/* 03. Capabilities Architecture (5 Pillars) */}
      <CapabilitiesSection />

      {/* 04. First-Principles System Architecture Topology (IIT-Grade) */}
      <ArchitectureVisualizer />

      {/* 05. Website Care Hub */}
      <WebsiteCareHub />

      {/* 06. Practical AI & Automation */}
      <PracticalAISection />

      {/* 07. How We Work (5-Step Process) */}
      <HowWeWork />

      {/* 08. Functional Demos & Prototypes */}
      <PrototypesSection />

      {/* 09. Interactive Project Scope & Milestone Calculator */}
      <ProjectScopeCalculator />

      {/* 10. Founder Accountability (Daksh Prajapat) */}
      <FounderAccountability />

      {/* 11. Engineering Transparency FAQs */}
      <FAQSection />

      {/* 12. Immediate Intake Experience (Direct WhatsApp Dispatch) */}
      <IntakeForm />
    </div>
  );
};
