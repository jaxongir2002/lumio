/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { Suspense, lazy, useState } from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { Project } from './types';

// Birinchi ekrandan pastdagi hamma narsa alohida chunk'da: asosiy JS kichrayadi va
// bosh ekran tezroq chiziladi (PageSpeed: "unused JavaScript").
const ProjectShowcase = lazy(() =>
  import('./components/ProjectShowcase').then((m) => ({ default: m.ProjectShowcase }))
);
const DesignSection = lazy(() =>
  import('./components/DesignSection').then((m) => ({ default: m.DesignSection }))
);
const StatsSection = lazy(() =>
  import('./components/StatsSection').then((m) => ({ default: m.StatsSection }))
);
const WorkflowSection = lazy(() =>
  import('./components/WorkflowSection').then((m) => ({ default: m.WorkflowSection }))
);
const StudioSection = lazy(() =>
  import('./components/StudioSection').then((m) => ({ default: m.StudioSection }))
);
const FaqSection = lazy(() =>
  import('./components/FaqSection').then((m) => ({ default: m.FaqSection }))
);
const ContactSection = lazy(() =>
  import('./components/ContactSection').then((m) => ({ default: m.ContactSection }))
);
const Footer = lazy(() => import('./components/Footer').then((m) => ({ default: m.Footer })));
const CaseStudyModal = lazy(() =>
  import('./components/CaseStudyModal').then((m) => ({ default: m.CaseStudyModal }))
);
const ScrollHUD = lazy(() =>
  import('./components/ScrollHUD').then((m) => ({ default: m.ScrollHUD }))
);

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

        <Suspense fallback={null}>
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
        </Suspense>
      </main>

      <Suspense fallback={null}>
        <Footer />

        {/* Loyiha tafsilotlari oynasi */}
        <CaseStudyModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onDiscuss={requestQuote}
        />

        {/* Scroll indikatori va bo'limlar navigatsiyasi */}
        <ScrollHUD />
      </Suspense>
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
