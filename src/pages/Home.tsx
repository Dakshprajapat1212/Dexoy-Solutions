import React from 'react';
import { Hero } from '../components/Hero';
import { ProblemMatrix } from '../components/ProblemMatrix';
import { CapabilitiesSection } from '../components/CapabilitiesSection';
import { WebsiteCareHub } from '../components/WebsiteCareHub';
import { PracticalAISection } from '../components/PracticalAISection';
import { HowWeWork } from '../components/HowWeWork';
import { PrototypesSection } from '../components/PrototypesSection';
import { FounderAccountability } from '../components/FounderAccountability';
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

      {/* 04. Website Care Hub */}
      <WebsiteCareHub />

      {/* 05. Practical AI & Automation */}
      <PracticalAISection />

      {/* 06. How We Work (5-Step Process) */}
      <HowWeWork />

      {/* 07. Functional Demos & Prototypes */}
      <PrototypesSection />

      {/* 08. Founder Accountability */}
      <FounderAccountability />

      {/* 09. Immediate Intake Experience */}
      <IntakeForm />
    </div>
  );
};
