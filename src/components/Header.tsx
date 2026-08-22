import React, { useState, useEffect } from 'react';
import { Key, Search, Calendar, UserCheck, Menu, X, Sparkles, Phone, ShieldCheck, MapPin } from 'lucide-react';

interface HeaderProps {
  onOpenReservation: (salonId?: string, programId?: string) => void;
  onOpenDirectorPortal: () => void;
  onOpenSearch: () => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
  onSelectNav: (sectionId: string) => void;
  activeSection: string;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenReservation,
  onOpenDirectorPortal,
  onOpenSearch,
  searchQuery,
  onSearchChange,
  onSelectNav,
  activeSection,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'brand-story', label: '홈 (브랜드 소개)' },
    { id: 'programs', label: '프로그램 안내' },
    { id: 'salons', label: '가맹 헤어샵 찾기 & 예약' },
    { id: 'academy', label: '원장 교육 신청' },
    { id: 'director-signup', label: '원장님 회원가입' },
  ];

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    onSelectNav(id);
  };

  return (
    <>
      {/* Top Banner Notice - Dark highlight for medical academy credibility */}
      <div id="top-announcement-bar" className="bg-[#1F0D33] text-white text-xs py-2 px-4 text-center border-b border-[#9333EA]/30 relative z-50 flex items-center justify-center gap-2">
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-gradient-to-r from-[#A855F7] to-[#DB2777] text-white tracking-wider">
          ACADEMY NOTICE
        </span>
        <span className="font-medium text-[#F3E8FC] truncate text-xs">
          [한의사 정원호 대표 직강] 뇌청소와 두피케어 매주 월/화 저녁 8시 실습강의
        </span>
        <button
          onClick={() => handleNavClick('academy')}
          className="underline font-bold text-[#F472B6] hover:text-[#FBCFE8] text-xs ml-1 shrink-0 cursor-pointer transition-colors"
        >
          신청하기 →
        </button>
      </div>

      <header
        id="main-header"
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-[#A855F7]/20 py-3'
            : 'bg-[#FAF7FD]/90 backdrop-blur-sm border-b border-[#A855F7]/15 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          {/* Brand Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-3 group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#F3E8FC] to-[#FCE7F3] border border-[#A855F7]/30 p-0.5 shadow-sm flex items-center justify-center group-hover:border-[#DB2777] transition-colors duration-300">
              <Key className="w-5 h-5 text-[#9333EA] group-hover:text-[#DB2777] group-hover:rotate-12 transition-transform duration-300" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-base sm:text-lg font-bold tracking-[2px] font-serif-luxury text-beauty-gradient group-hover:opacity-90 transition-colors">
                  MASTERKEY
                </span>
                <span className="text-[10px] px-1.5 py-0.2 rounded font-bold bg-[#FCE7F3] text-[#BE185D] border border-[#F472B6]/40 tracking-widest">
                  FLEXTOUCH
                </span>
              </div>
              <span className="text-[11px] text-[#5B4870] tracking-tight font-medium">
                (주)케이메디플러스 · 프리미엄 메디뷰티
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-[1px] transition-all duration-200 cursor-pointer ${
                  activeSection === link.id
                    ? 'text-[#7E22CE] bg-[#F3E8FC] border border-[#A855F7]/40 font-bold shadow-sm'
                    : 'text-[#5B4870] hover:text-[#180D26] hover:bg-[#F3E8FC]/60'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Header Actions & Quick Search */}
          <div className="hidden sm:flex items-center gap-2.5">
            {/* Quick Search Input */}
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="지역 또는 샵 검색..."
                className="w-36 xl:w-44 pl-8 pr-3 py-1.5 text-xs bg-white border border-[#A855F7]/25 rounded-full text-[#180D26] placeholder-[#8A78A0] focus:outline-none focus:border-[#DB2777] focus:ring-1 focus:ring-[#DB2777]/30 transition-all shadow-sm"
              />
              <Search className="w-3.5 h-3.5 text-[#8A78A0] absolute left-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>

            {/* Director Portal Button */}
            <button
              id="header-director-btn"
              onClick={onOpenDirectorPortal}
              className="px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider bg-white text-[#7E22CE] border border-[#A855F7]/30 hover:bg-[#F3E8FC] hover:border-[#DB2777] transition-all flex items-center gap-1.5 cursor-pointer shadow-sm"
            >
              <UserCheck className="w-3.5 h-3.5 text-[#DB2777]" />
              <span>원장님 전용</span>
            </button>

            {/* Online Reservation CTA */}
            <button
              id="header-reserve-btn"
              onClick={() => onOpenReservation()}
              className="px-3.5 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-[#9333EA] via-[#A855F7] to-[#DB2777] text-white hover:opacity-95 shadow-md shadow-pink-900/20 transition-all flex items-center gap-1.5 cursor-pointer border border-[#DB2777]/30"
            >
              <Calendar className="w-3.5 h-3.5 text-white" />
              <span>온라인 예약</span>
            </button>
          </div>

          {/* Mobile Menu & Search Trigger Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenSearch}
              className="p-2 rounded-lg bg-white border border-[#A855F7]/25 text-[#7E22CE] hover:text-[#DB2777] shadow-sm"
              aria-label="통합 검색"
            >
              <Search className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-white border border-[#A855F7]/25 text-[#180D26] hover:text-[#DB2777] shadow-sm"
              aria-label="메뉴 열기"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden px-4 pt-3 pb-6 bg-white border-b border-[#A855F7]/20 mt-2 space-y-3 shadow-xl animate-in fade-in slide-in-from-top-2 duration-200">
            {/* Search within mobile */}
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="지역명, 가맹샵, 시술명 검색..."
                className="w-full pl-9 pr-3 py-2 text-sm bg-[#FAF7FD] border border-[#A855F7]/25 rounded-lg text-[#180D26] placeholder-[#8A78A0] focus:outline-none focus:border-[#DB2777]"
              />
              <Search className="w-4 h-4 text-[#8A78A0] absolute left-3 top-1/2 -translate-y-1/2" />
            </div>

            {/* Mobile Nav Links */}
            <div className="grid grid-cols-2 gap-1.5 pt-1">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className="px-3 py-2 text-left rounded-lg text-xs font-semibold text-[#5B4870] bg-[#FAF7FD] hover:bg-[#F3E8FC] hover:text-[#7E22CE] transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* Mobile Action CTAs */}
            <div className="pt-2 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenReservation();
                }}
                className="w-full py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-[#9333EA] to-[#DB2777] text-white flex items-center justify-center gap-2 shadow-md shadow-pink-900/20"
              >
                <Calendar className="w-4 h-4" />
                <span>가맹 헤어샵 시술 예약하기</span>
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenDirectorPortal();
                }}
                className="w-full py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider bg-white text-[#7E22CE] border border-[#A855F7]/30 flex items-center justify-center gap-2"
              >
                <UserCheck className="w-4 h-4 text-[#DB2777]" />
                <span>헤어 원장님 전용관 입장</span>
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
