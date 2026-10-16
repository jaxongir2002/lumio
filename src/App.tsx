/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { ProjectShowcase } from './components/ProjectShowcase';
import { DesignSection } from './components/DesignSection';
import { StatsSection } from './components/StatsSection';
import { WorkflowSection } from './components/WorkflowSection';
import { StudioSection } from './components/StudioSection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CaseStudyModal } from './components/CaseStudyModal';
import { ScrollHUD } from './components/ScrollHUD';
import { Project } from './types';

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

function MainContent() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [prefillService, setPrefillService] = useState<string | null>(null);
  const { isLight } = useApp();

  const goToContact = () => scrollToSection('contact');

  /** Xizmat, tarif yoki loyiha kartasidan aloqa formasiga o'tish */
  const requestQuote = (service: string) => {
    setPrefillService(service);
    setSelectedProject(null);
    goToContact();
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isLight ? 'bg-[#f8f9fa] text-[#18181b]' : 'bg-[#0c0d0e] text-[#f4f4f5]'
      } selection:bg-indigo-500 selection:text-white font-sans antialiased flex flex-col`}
    >
      <Navbar onNavigateToContact={goToContact} />

      <main className="flex-1">
        {/* Bosh ekran */}
        <Hero onPrimaryCta={goToContact} onSecondaryCta={() => scrollToSection('works')} />

        {/* Xizmatlar */}
        <ServicesSection onServiceClick={requestQuote} />

        {/* Qilgan ishlarimiz */}
        <ProjectShowcase onSelectProject={setSelectedProject} />

        {/* Grafik dizayn galereyasi */}
        <DesignSection />

        {/* Raqamlardagi natijalar */}
        <StatsSection />

        {/* Ish jarayoni */}
        <WorkflowSection />

        {/* Studiya haqida */}
        <StudioSection />

        {/* Savol-javob */}
        <FaqSection onContactClick={goToContact} />

        {/* Aloqa va brif */}
        <ContactSection prefillService={prefillService} />
      </main>

      <Footer />

      {/* Loyiha tafsilotlari oynasi */}
      <CaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onDiscuss={requestQuote}
      />

      {/* Scroll indikatori va bo'limlar navigatsiyasi */}
      <ScrollHUD />
    </div>
  );
}

export default function App() {
  return (
    <AppProvider>
      <MainContent />
    </AppProvider>
  );
}
