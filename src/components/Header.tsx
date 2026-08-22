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
      {/* Top Banner Notice */}
      <div id="top-announcement-bar" className="bg-[#111111] text-[#D4AF37] text-xs py-1.5 px-4 text-center border-b border-[#D4AF37]/20 relative z-50 flex items-center justify-center gap-2">
        <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-[#D4AF37]/15 text-[#D4AF37] border border-[#D4AF37]/30 tracking-wider">
          ACADEMY NOTICE
        </span>
        <span className="font-medium text-[#F2F2F2] truncate text-xs">
          [한의사 안덕수 대표 직강] 뇌청소 & 두피케어 정기 아카데미 매주 월/화 저녁 8시 실습 선착순 모집 중
        </span>
        <button
          onClick={() => handleNavClick('academy')}
          className="underline font-bold text-[#D4AF37] hover:text-[#fae69e] text-xs ml-1 shrink-0 cursor-pointer"
        >
          신청하기 →
        </button>
      </div>

      <header
        id="main-header"
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-[#080808]/95 backdrop-blur-md shadow-lg shadow-black/80 border-b border-[#D4AF37]/20 py-3'
            : 'bg-[#080808]/90 backdrop-blur-sm border-b border-[#D4AF37]/15 py-4'
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
            <div className="w-10 h-10 rounded-lg bg-[#121212] border border-[#D4AF37]/40 p-0.5 shadow-md shadow-[#D4AF37]/10 flex items-center justify-center group-hover:border-[#D4AF37] transition-colors duration-300">
              <Key className="w-5 h-5 text-[#D4AF37] group-hover:rotate-12 transition-transform duration-300" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-base sm:text-lg font-bold tracking-[2px] font-serif-luxury text-[#D4AF37] group-hover:text-[#fae69e] transition-colors">
                  MASTERKEY
                </span>
                <span className="text-[10px] px-1.5 py-0.2 rounded font-bold bg-[#D4AF37]/15 text-[#D4AF37] border border-[#D4AF37]/30 tracking-widest">
                  FLEXTOUCH
                </span>
              </div>
              <span className="text-[11px] text-[#888888] tracking-tight font-medium">
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
                className={`px-3 py-1.5 rounded text-xs font-semibold uppercase tracking-[1px] transition-all duration-200 cursor-pointer ${
                  activeSection === link.id
                    ? 'text-[#D4AF37] bg-[#D4AF37]/10 border border-[#D4AF37]/40 font-bold'
                    : 'text-[#888888] hover:text-[#D4AF37] hover:bg-[#121212]'
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
                className="w-36 xl:w-44 pl-8 pr-3 py-1.5 text-xs bg-[#121212] border border-[#D4AF37]/30 rounded-full text-[#F2F2F2] placeholder-[#888888] focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]/40 transition-all"
              />
              <Search className="w-3.5 h-3.5 text-[#888888] absolute left-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>

            {/* Director Portal Button */}
            <button
              id="header-director-btn"
              onClick={onOpenDirectorPortal}
              className="px-3 py-1.5 rounded text-xs font-bold uppercase tracking-wider bg-transparent text-[#D4AF37] border border-[#D4AF37] hover:bg-[#D4AF37]/10 transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <UserCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>원장님 전용</span>
            </button>

            {/* Online Reservation CTA */}
            <button
              id="header-reserve-btn"
              onClick={() => onOpenReservation()}
              className="px-3.5 py-1.5 rounded text-xs font-bold uppercase tracking-wider bg-[#D4AF37] text-[#080808] hover:bg-[#e5c158] shadow-md shadow-[#D4AF37]/20 transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5 text-[#080808]" />
              <span>온라인 예약</span>
            </button>
          </div>

          {/* Mobile Menu & Search Trigger Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenSearch}
              className="p-2 rounded bg-[#121212] border border-[#D4AF37]/30 text-[#888888] hover:text-[#D4AF37]"
              aria-label="통합 검색"
            >
              <Search className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded bg-[#121212] border border-[#D4AF37]/30 text-[#F2F2F2] hover:text-[#D4AF37]"
              aria-label="메뉴 열기"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden px-4 pt-3 pb-6 bg-[#0c0c0c] border-b border-[#D4AF37]/20 mt-2 space-y-3 animate-in fade-in slide-in-from-top-2 duration-200">
            {/* Search within mobile */}
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="지역명, 가맹샵, 시술명 검색..."
                className="w-full pl-9 pr-3 py-2 text-sm bg-[#121212] border border-[#D4AF37]/30 rounded-lg text-white placeholder-[#888888] focus:outline-none focus:border-[#D4AF37]"
              />
              <Search className="w-4 h-4 text-[#888888] absolute left-3 top-1/2 -translate-y-1/2" />
            </div>

            {/* Mobile Nav Links */}
            <div className="grid grid-cols-2 gap-1.5 pt-1">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className="px-3 py-2 text-left rounded text-xs font-semibold text-[#888888] bg-[#121212] hover:bg-[#181818] hover:text-[#D4AF37] transition-colors"
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
                className="w-full py-2.5 rounded text-xs font-bold uppercase tracking-wider bg-[#D4AF37] text-[#080808] flex items-center justify-center gap-2 shadow-md"
              >
                <Calendar className="w-4 h-4" />
                <span>가맹 헤어샵 시술 예약하기</span>
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenDirectorPortal();
                }}
                className="w-full py-2.5 rounded text-xs font-bold uppercase tracking-wider bg-transparent text-[#D4AF37] border border-[#D4AF37] flex items-center justify-center gap-2"
              >
                <UserCheck className="w-4 h-4" />
                <span>헤어 원장님 전용관 입장</span>
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
