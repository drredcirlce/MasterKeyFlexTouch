import React, { useState, useEffect } from 'react';
import {
  PROGRAMS,
  CERTIFIED_SALONS,
  REVIEWS,
  FAQ_ITEMS,
  FOUNDER_PROFILE,
  ACADEMY_INFO,
} from './data/mockData';
import {
  Program,
  Salon,
  ConfirmedReservation,
  AcademyApplicationData,
} from './types';

import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { FounderSection } from './components/FounderSection';
import { ProgramsSection } from './components/ProgramsSection';
import { ProgramDetailModal } from './components/ProgramDetailModal';
import { SalonLocator } from './components/SalonLocator';
import { ReservationModal } from './components/ReservationModal';
import { AcademySection } from './components/AcademySection';
import { DirectorPortalModal } from './components/DirectorPortalModal';
import { DirectorSignupSection } from './components/DirectorSignupSection';
import { ReviewsSection } from './components/ReviewsSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { MobileQuickBar } from './components/MobileQuickBar';
import { GlobalSearchModal } from './components/GlobalSearchModal';

export default function App() {
  // State for Modals
  const [isReservationOpen, setIsReservationOpen] = useState<boolean>(false);
  const [isDirectorPortalOpen, setIsDirectorPortalOpen] = useState<boolean>(false);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [selectedDetailProgram, setSelectedDetailProgram] = useState<Program | null>(null);

  // Reservation default parameters
  const [reservationSalonId, setReservationSalonId] = useState<string | undefined>(undefined);
  const [reservationProgramId, setReservationProgramId] = useState<string | undefined>(undefined);
  const [reservationPlanIndex, setReservationPlanIndex] = useState<number>(0);

  // Global Search string
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Active navigation section
  const [activeSection, setActiveSection] = useState<string>('brand-story');

  // Stored reservations and director applications
  const [confirmedReservations, setConfirmedReservations] = useState<ConfirmedReservation[]>([]);
  const [academyApplications, setAcademyApplications] = useState<AcademyApplicationData[]>([]);

  // Helper to scroll smoothly to any section
  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: Math.max(0, offsetPosition),
        behavior: 'smooth',
      });
    }
  };

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['brand-story', 'founder', 'programs', 'salons', 'academy', 'director-signup', 'reviews', 'faq'];
      const scrollPos = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionId = sections[i];
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          if (scrollPos >= top) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenReservation = (salonId?: string, programId?: string, planIndex: number = 0) => {
    setReservationSalonId(salonId || CERTIFIED_SALONS[0].id);
    setReservationProgramId(programId || PROGRAMS[0].id);
    setReservationPlanIndex(planIndex);
    setIsReservationOpen(true);
  };

  const handleSelectProgramFromHeroOrSearch = (programId: string) => {
    const prog = PROGRAMS.find((p) => p.id === programId);
    if (prog) {
      setSelectedDetailProgram(prog);
    }
  };

  const handleSelectSalonFromSearch = (salonId: string) => {
    scrollToSection('salons');
  };

  const handleScrollToAcademy = () => {
    scrollToSection('academy');
  };

  const handleScrollToSalons = () => {
    scrollToSection('salons');
  };

  const handleConfirmReservation = (res: ConfirmedReservation) => {
    setConfirmedReservations((prev) => [res, ...prev]);
  };

  const handleSubmitAcademyApplication = (appData: AcademyApplicationData) => {
    setAcademyApplications((prev) => [appData, ...prev]);
  };

  return (
    <div className="min-h-screen bg-[#080808] text-[#F2F2F2] selection:bg-[#D4AF37]/30 selection:text-[#fae69e]">
      {/* Universal Header */}
      <Header
        onOpenReservation={handleOpenReservation}
        onOpenDirectorPortal={() => setIsDirectorPortalOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onSelectNav={scrollToSection}
        activeSection={activeSection}
      />

      {/* Main Content Sections */}
      <main id="main-content">
        {/* 1. Hero & Brand Story Section */}
        <HeroSection
          onOpenReservation={() => handleOpenReservation()}
          onOpenAcademy={handleScrollToAcademy}
          onSelectProgram={handleSelectProgramFromHeroOrSearch}
        />

        {/* 2. Founder & Instructor Profile Section */}
        <FounderSection onOpenAcademy={handleScrollToAcademy} />

        {/* 3. Core Program Showcase Section */}
        <ProgramsSection
          programs={PROGRAMS}
          onOpenDetailModal={(prog) => setSelectedDetailProgram(prog)}
          onOpenReservation={handleOpenReservation}
        />

        {/* 4. Hair Salon Locator with Interactive Map */}
        <SalonLocator
          salons={CERTIFIED_SALONS}
          onOpenReservation={handleOpenReservation}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
        />

        {/* 5. Director Academy & Registration Section */}
        <AcademySection
          onOpenDirectorPortal={() => setIsDirectorPortalOpen(true)}
          onSubmitApplication={handleSubmitAcademyApplication}
        />

        {/* 6. Director Membership & Franchise Registration Subpage */}
        <DirectorSignupSection
          onGoToAcademy={handleScrollToAcademy}
          onGoToSalons={handleScrollToSalons}
        />

        {/* 7. Reviews & Verified Testimonials Section */}
        <ReviewsSection reviews={REVIEWS} />

        {/* 8. FAQ Section */}
        <FaqSection
          onOpenAcademy={handleScrollToAcademy}
          onOpenReservation={() => handleOpenReservation()}
        />
      </main>

      {/* Sophisticated Dark Academy Gold Ribbon */}
      <div className="h-10 bg-[#D4AF37] text-[#080808] flex items-center justify-center px-4 text-xs font-bold tracking-wider uppercase text-center shadow-lg">
        <span>매주 월/화 저녁 8시 덕수한의원 실습실 정기 교육 진행 중 • 원장님 전용 1:1 방문 맞춤 강의 신청 가능</span>
      </div>

      {/* Footer */}
      <Footer />

      {/* Mobile Sticky Quick Action Bar */}
      <MobileQuickBar
        onOpenReservation={() => handleOpenReservation()}
        onOpenAcademy={handleScrollToAcademy}
        onScrollToSalons={handleScrollToSalons}
      />

      {/* Modals */}
      <ReservationModal
        isOpen={isReservationOpen}
        onClose={() => setIsReservationOpen(false)}
        salons={CERTIFIED_SALONS}
        programs={PROGRAMS}
        defaultSalonId={reservationSalonId}
        defaultProgramId={reservationProgramId}
        defaultPlanIndex={reservationPlanIndex}
        onConfirmReservation={handleConfirmReservation}
      />

      <ProgramDetailModal
        program={selectedDetailProgram}
        onClose={() => setSelectedDetailProgram(null)}
        onSelectReservation={(programId, planIndex) => {
          setSelectedDetailProgram(null);
          handleOpenReservation(undefined, programId, planIndex);
        }}
      />

      <DirectorPortalModal
        isOpen={isDirectorPortalOpen}
        onClose={() => setIsDirectorPortalOpen(false)}
      />

      <GlobalSearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        salons={CERTIFIED_SALONS}
        programs={PROGRAMS}
        onSelectSalon={handleSelectSalonFromSearch}
        onSelectProgram={handleSelectProgramFromHeroOrSearch}
        onSelectAcademy={handleScrollToAcademy}
      />
    </div>
  );
}
