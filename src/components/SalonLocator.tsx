import React, { useState, useMemo } from 'react';
import { Salon } from '../types';
import {
  MapPin,
  Search,
  Clock,
  ExternalLink,
  ChevronRight,
  ShieldCheck,
  Building,
  Lock,
  GraduationCap
} from 'lucide-react';

interface SalonLocatorProps {
  salons: Salon[];
  onOpenReservation?: (salonId: string) => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
}

export const SalonLocator: React.FC<SalonLocatorProps> = ({
  salons,
  searchQuery,
  onSearchChange,
}) => {
  const [selectedSalonId, setSelectedSalonId] = useState<string>(salons[0]?.id || 'salon-cheongdam-auraj');

  const filteredSalons = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    if (!q) return salons;
    return salons.filter((salon) => {
      return (
        salon.name.toLowerCase().includes(q) ||
        salon.branch.toLowerCase().includes(q) ||
        salon.address.toLowerCase().includes(q) ||
        salon.district.toLowerCase().includes(q) ||
        salon.city.toLowerCase().includes(q) ||
        salon.directorName.toLowerCase().includes(q)
      );
    });
  }, [salons, searchQuery]);

  const activeSalon = salons.find((s) => s.id === selectedSalonId) || filteredSalons[0] || salons[0];

  return (
    <section id="salons" className="scroll-mt-20 sm:scroll-mt-24 py-16 lg:py-24 border-b border-[#A855F7]/15 relative bg-[#FAF7FD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="hero-badge-dark inline-flex items-center gap-2 mb-3">
            <Lock className="w-3.5 h-3.5 text-[#DB2777]" />
            <span>FRANCHISE TERRITORY & EXCLUSIVITY</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-[#180D26] font-serif-luxury mb-4">
            전국 가맹 헤어샵 상권 및
            <span className="block mt-1 text-beauty-gradient">
              지역 독점 권역 확보 현황 (반경 500m 보호)
            </span>
          </h2>
          <p className="text-sm sm:text-base text-[#5B4870]">
            마스터키 플렉스터치는 가맹 원장님의 안정적인 매출과 독점 영업권을 위해 상권 보호제를 시행합니다. 기확보된 살롱 권역을 확인하시고 원장님 샵의 지역 선점을 신청하세요.
          </p>
        </div>

        {/* Quick Search Bar (No Category Tabs) */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 bg-white p-4 rounded-2xl border border-[#A855F7]/20 shadow-sm">
          <div className="flex items-center gap-2 text-xs font-bold text-[#180D26]">
            <ShieldCheck className="w-4 h-4 text-[#DB2777]" />
            <span>전국 공식 가맹 인증점 {salons.length}개소 독점 권역 등록 완료</span>
          </div>

          {/* Search Input */}
          <div className="relative w-full sm:w-80">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="지역명(청담/서초/판교/부산), 샵명 검색..."
              className="w-full pl-9 pr-3 py-2 text-xs bg-[#FAF7FD] border border-[#A855F7]/25 rounded-xl text-[#180D26] placeholder-[#8A78A0] focus:outline-none focus:border-[#DB2777] focus:ring-1 focus:ring-[#DB2777]/30 transition-all"
            />
            <Search className="w-4 h-4 text-[#8A78A0] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        {/* Map & List Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left Column: Salon List */}
          <div className="lg:col-span-5 space-y-3 max-h-[640px] overflow-y-auto pr-1">
            {filteredSalons.length === 0 ? (
              <div className="text-center py-12 bg-white rounded-2xl border border-[#A855F7]/20 p-6">
                <MapPin className="w-8 h-8 text-[#8A78A0] mx-auto mb-2 opacity-50" />
                <p className="text-sm font-bold text-[#180D26]">검색된 지역 상권이 없습니다.</p>
                <p className="text-xs text-[#5B4870] mt-1">해당 지역은 현재 신규 가맹 선점이 가능한 권역입니다.</p>
                <a
                  href="#director-signup"
                  className="mt-4 inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-[#9333EA] to-[#DB2777] text-white text-xs font-bold shadow-md shadow-pink-900/20"
                >
                  <Building className="w-3.5 h-3.5" />
                  <span>해당 지역 1호 가맹 신청하기</span>
                </a>
              </div>
            ) : (
              filteredSalons.map((salon) => {
                const isSelected = salon.id === activeSalon?.id;
                return (
                  <div
                    key={salon.id}
                    onClick={() => setSelectedSalonId(salon.id)}
                    className={`p-5 rounded-2xl transition-all cursor-pointer border ${
                      isSelected
                        ? 'bg-gradient-to-br from-[#FCE7F3]/40 to-[#F3E8FC]/60 border-[#DB2777] shadow-md'
                        : 'bg-white border-[#A855F7]/18 hover:border-[#9333EA]/40 shadow-sm'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#1F0D33] text-[#F472B6] border border-[#9333EA]/30">
                            상권 확보 완료
                          </span>
                          <span className="text-xs text-[#5B4870] font-semibold">{salon.city} · {salon.district}</span>
                        </div>
                        <h4 className="text-base font-bold text-[#180D26]">
                          {salon.name} <span className="text-xs text-[#7E22CE]">({salon.branch})</span>
                        </h4>
                      </div>

                      <div className="w-8 h-8 rounded-xl bg-white border border-[#A855F7]/25 flex items-center justify-center text-[#9333EA] shrink-0 shadow-sm">
                        <Lock className="w-4 h-4 text-[#DB2777]" />
                      </div>
                    </div>

                    <p className="text-xs text-[#5B4870] mb-2 truncate">{salon.address}</p>

                    <div className="flex items-center justify-between text-xs pt-2 border-t border-[#A855F7]/15">
                      <span className="text-[11px] text-[#7E22CE] font-semibold">
                        대표: {salon.directorName} {salon.directorTitle}
                      </span>
                      <div className="flex items-center gap-1 text-[#DB2777] font-bold text-[11px]">
                        <span>상권 보호 반경 500m</span>
                        <ChevronRight className="w-4 h-4 text-[#8A78A0]" />
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>

          {/* Right Column: Visual Territory Map + Active Salon Details */}
          <div className="lg:col-span-7 rounded-3xl bg-white border border-[#A855F7]/20 p-6 shadow-lg flex flex-col justify-between overflow-hidden">
            {/* Visual Simulated Map Display */}
            <div className="relative w-full h-72 sm:h-80 rounded-2xl bg-gradient-to-br from-[#FAF7FD] to-[#F3E8FC] border border-[#A855F7]/20 overflow-hidden mb-6 flex items-center justify-center">
              {/* Map grid lines */}
              <div className="absolute inset-0 mock-map-grid opacity-60" />

              {/* Graphical Map Roads */}
              <div className="absolute top-1/3 left-0 right-0 h-4 bg-white/70 transform -rotate-6 shadow-sm pointer-events-none" />
              <div className="absolute top-0 bottom-0 left-1/2 w-4 bg-white/70 transform rotate-12 shadow-sm pointer-events-none" />

              {/* Map Pins */}
              {filteredSalons.map((s) => {
                const isActive = s.id === activeSalon?.id;
                const leftPercent = 20 + ((s.id.charCodeAt(s.id.length - 1) * 17) % 65);
                const topPercent = 20 + ((s.id.charCodeAt(s.id.length - 1) * 23) % 60);

                return (
                  <button
                    key={s.id}
                    onClick={() => setSelectedSalonId(s.id)}
                    style={{ left: `${leftPercent}%`, top: `${topPercent}%` }}
                    className={`absolute -translate-x-1/2 -translate-y-1/2 z-20 group cursor-pointer transition-transform duration-200 ${
                      isActive ? 'scale-125 z-30' : 'hover:scale-110'
                    }`}
                  >
                    <div
                      className={`px-2.5 py-1 rounded-full text-[10px] font-bold whitespace-nowrap shadow-lg flex items-center gap-1 border ${
                        isActive
                          ? 'bg-[#DB2777] text-white border-white animate-pulse-beauty'
                          : 'bg-white text-[#7E22CE] border-[#A855F7]/40'
                      }`}
                    >
                      <Lock className="w-3 h-3" />
                      <span>{s.name.split(' ')[0]} (보호구역)</span>
                    </div>
                  </button>
                );
              })}

              {/* Map Controls Floating Badge */}
              <div className="absolute top-3 left-3 bg-[#1F0D33] text-white px-3 py-1.5 rounded-xl border border-[#9333EA]/30 text-[11px] font-bold shadow-sm flex items-center gap-1.5 z-10">
                <ShieldCheck className="w-3.5 h-3.5 text-[#F472B6]" />
                <span>지역 독점 상권 보호제 운영 현황</span>
              </div>
            </div>

            {/* Detailed Info Card for Currently Selected Salon Territory */}
            {activeSalon && (
              <div className="p-5 rounded-2xl bg-[#FAF7FD] border border-[#A855F7]/20 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-[#A855F7]/15">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#1F0D33] text-[#F472B6]">
                        {activeSalon.directorTitle}
                      </span>
                      <span className="text-xs text-[#5B4870]">{activeSalon.directorName} 원장</span>
                    </div>
                    <h3 className="text-lg font-bold text-[#180D26]">
                      {activeSalon.name} ({activeSalon.branch})
                    </h3>
                  </div>

                  <div className="text-left sm:text-right">
                    <span className="text-[11px] text-[#BE185D] font-bold block">독점 보호 상권 등록 완료</span>
                    <span className="text-xs text-[#5B4870]">{activeSalon.district} 중심 권역</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="flex items-center gap-2 text-[#5B4870]">
                    <MapPin className="w-4 h-4 text-[#9333EA] shrink-0" />
                    <span>{activeSalon.address}</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#5B4870]">
                    <Clock className="w-4 h-4 text-[#9333EA] shrink-0" />
                    <span>{activeSalon.businessHours}</span>
                  </div>
                </div>

                {/* Exclusive Services */}
                <div>
                  <span className="text-[11px] font-bold text-[#7E22CE] uppercase tracking-wider block mb-1.5">
                    도입 및 운용 중인 플렉스터치 메뉴
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    <span className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-white text-[#180D26] border border-[#A855F7]/25">
                      5분 넥숄더플렉스터치 (시술의자 퀵케어)
                    </span>
                    <span className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-white text-[#180D26] border border-[#A855F7]/25">
                      15분 근막재건 리프팅 (두피·안면 리셋)
                    </span>
                  </div>
                </div>

                {/* Territory Application Action Buttons */}
                <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                  <a
                    href="#director-signup"
                    className="w-full sm:flex-1 py-3 rounded-xl bg-gradient-to-r from-[#9333EA] via-[#A855F7] to-[#DB2777] text-white font-bold text-xs sm:text-sm shadow-md shadow-pink-900/20 hover:opacity-95 transition-all flex items-center justify-center gap-2 cursor-pointer text-center"
                  >
                    <Building className="w-4 h-4" />
                    <span>우리 매장 지역 독점 상권 가맹 신청하기</span>
                  </a>
                  <a
                    href="#academy"
                    className="w-full sm:w-auto px-5 py-3 rounded-xl bg-white hover:bg-[#F3E8FC] text-[#7E22CE] font-bold text-xs border border-[#A855F7]/30 transition-colors shadow-sm text-center flex items-center justify-center gap-1.5"
                  >
                    <GraduationCap className="w-4 h-4 text-[#DB2777]" />
                    <span>실습 아카데미 안내</span>
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
