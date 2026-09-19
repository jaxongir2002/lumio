/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { InteractiveBrandStage } from './components/InteractiveBrandStage';
import { DesignToCodeInspector } from './components/DesignToCodeInspector';
import { ProjectShowcase } from './components/ProjectShowcase';
import { DualCraftSection } from './components/DualCraftSection';
import { SocialProofSection } from './components/SocialProofSection';
import { WorkflowSection } from './components/WorkflowSection';
import { FaqSection } from './components/FaqSection';
import { BlogSection } from './components/BlogSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CaseStudyModal } from './components/CaseStudyModal';
import { ScrollHUD } from './components/ScrollHUD';
import { Project } from './types';

function MainPortfolioContent() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [inquiryTargetProject, setInquiryTargetProject] = useState<string | null>(null);
  const { isLight } = useApp();

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToWorks = () => {
    const el = document.getElementById('works');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectForInquiry = (projectName: string) => {
    setInquiryTargetProject(projectName);
    scrollToContact();
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isLight ? 'bg-[#f8f9fa] text-[#18181b]' : 'bg-[#0c0d0e] text-[#f4f4f5]'
      } selection:bg-indigo-500 selection:text-white font-sans antialiased flex flex-col`}
    >
      {/* Top Navigation */}
      <Navbar onNavigateToContact={scrollToContact} />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero
          onExploreWorks={scrollToWorks}
          onContactClick={scrollToContact}
        />

        {/* Dedicated Animated LUMIO Brand Stage */}
        <InteractiveBrandStage />

        {/* Selected Works Portfolio Showcase */}
        <ProjectShowcase
          onSelectProject={(project) => setSelectedProject(project)}
        />

        {/* Live Design-to-Code Parity Inspector */}
        <DesignToCodeInspector />

        {/* The Founding Duo Craft Breakdown */}
        <DualCraftSection />

        {/* Verified Client Impact & Metrics */}
        <SocialProofSection />

        {/* Synergy Workflow & Sprint Pipeline */}
        <WorkflowSection />

        {/* Clear Answers & Frequently Asked Inquiries */}
        <FaqSection onContactClick={scrollToContact} />

        {/* Insights & Blog Publications */}
        <BlogSection />

        {/* Collaborative Project Inquiry & Scope Estimator */}
        <ContactSection
          initialProjectInquiry={inquiryTargetProject}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Case Study Modal */}
      <CaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onSelectForInquiry={handleSelectForInquiry}
      />
    </div>
  );
}

export default function App() {
  return (
    <AppProvider>
      <MainPortfolioContent />
    </AppProvider>
  );
}

