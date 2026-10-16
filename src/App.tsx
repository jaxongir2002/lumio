/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { Suspense, lazy, startTransition, useEffect, useState } from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { LazyBoundary } from './components/LazyBoundary';
import { Project } from './types';

// Birinchi ekrandan pastdagi hamma narsa bitta alohida chunk'da: asosiy JS kichrayadi
// va bosh ekran tezroq chiziladi (PageSpeed: "unused JavaScript").
// Chunk vaqtinchalik tarmoq xatosida bir marta qayta so'raladi.
const loadBelowFold = () =>
  import('./components/BelowFold').catch(
    () =>
      new Promise<typeof import('./components/BelowFold')>((resolve, reject) =>
        setTimeout(() => import('./components/BelowFold').then(resolve, reject), 1500)
      )
  );
const ProjectShowcase = lazy(() => loadBelowFold().then((m) => ({ default: m.ProjectShowcase })));
const DesignSection = lazy(() => loadBelowFold().then((m) => ({ default: m.DesignSection })));
const StatsSection = lazy(() => loadBelowFold().then((m) => ({ default: m.StatsSection })));
const WorkflowSection = lazy(() => loadBelowFold().then((m) => ({ default: m.WorkflowSection })));
const StudioSection = lazy(() => loadBelowFold().then((m) => ({ default: m.StudioSection })));
const FaqSection = lazy(() => loadBelowFold().then((m) => ({ default: m.FaqSection })));
const ContactSection = lazy(() => loadBelowFold().then((m) => ({ default: m.ContactSection })));
const Footer = lazy(() => loadBelowFold().then((m) => ({ default: m.Footer })));
const CaseStudyModal = lazy(() => loadBelowFold().then((m) => ({ default: m.CaseStudyModal })));
const ScrollHUD = lazy(() => loadBelowFold().then((m) => ({ default: m.ScrollHUD })));

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

function MainContent() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [prefillService, setPrefillService] = useState<string | null>(null);
  // Lazy bo'limlar faqat brauzerda, birinchi render'dan keyin qo'shiladi: prerender
  // (server) va hydrate'ning birinchi render'i bir xil bo'lishi kerak.
  const [mounted, setMounted] = useState(false);
  // startTransition: React katta render'ni mayda bo'laklarga bo'ladi va asosiy oqim
  // uzoq bloklanmaydi (PageSpeed: Total Blocking Time).
  useEffect(() => startTransition(() => setMounted(true)), []);
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

        {mounted && (
          <LazyBoundary>
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
          </LazyBoundary>
        )}
      </main>

      {mounted && (
        <LazyBoundary>
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
        </LazyBoundary>
      )}
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
