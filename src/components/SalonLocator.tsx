import React, { useState, useMemo } from 'react';
import { Salon } from '../types';
import {
  MapPin,
  Search,
  Phone,
  Clock,
  Award,
  Navigation,
  CheckCircle2,
  Calendar,
  ExternalLink,
  ChevronRight,
  Filter,
  Sparkles
} from 'lucide-react';

interface SalonLocatorProps {
  salons: Salon[];
  onOpenReservation: (salonId: string) => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
}

export const SalonLocator: React.FC<SalonLocatorProps> = ({
  salons,
  onOpenReservation,
  searchQuery,
  onSearchChange,
}) => {
  const [selectedCity, setSelectedCity] = useState<string>('all');
  const [selectedSalonId, setSelectedSalonId] = useState<string>(salons[0]?.id || 'salon-1');

  const cities = ['all', '서울', '경기', '부산'];

  const filteredSalons = useMemo(() => {
    return salons.filter((salon) => {
      const matchCity = selectedCity === 'all' || salon.city.includes(selectedCity);
      const q = searchQuery.toLowerCase().trim();
      const matchQuery =
        !q ||
        salon.name.toLowerCase().includes(q) ||
        salon.branch.toLowerCase().includes(q) ||
        salon.address.toLowerCase().includes(q) ||
        salon.district.toLowerCase().includes(q) ||
        salon.nearestStation.toLowerCase().includes(q);

      return matchCity && matchQuery;
    });
  }, [salons, selectedCity, searchQuery]);

  const activeSalon = salons.find((s) => s.id === selectedSalonId) || filteredSalons[0] || salons[0];

  return (
    <section id="salons" className="scroll-mt-20 sm:scroll-mt-24 py-16 lg:py-24 border-b border-[#A855F7]/15 relative bg-[#FAF7FD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="hero-badge-dark inline-flex items-center gap-2 mb-3">
            <MapPin className="w-3.5 h-3.5 text-[#DB2777]" />
            <span>CERTIFIED MASTERKEY SALONS</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-[#180D26] font-serif-luxury mb-4">
            전국 공인 인증 가맹 헤어살롱
            <span className="block mt-1 text-beauty-gradient">
              내 주변 가장 가까운 마스터 헤어샵 찾기
            </span>
          </h2>
          <p className="text-sm sm:text-base text-[#5B4870]">
            (주)케이메디플러스 플렉스터치 정규 수료 인증을 획득한 전문 원장님이 직접 시술합니다.
          </p>
        </div>

        {/* Filter and Search Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 bg-white p-4 rounded-2xl border border-[#A855F7]/20 shadow-sm">
          {/* City Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto">
            <span className="text-xs font-bold text-[#5B4870] shrink-0 mr-1 flex items-center gap-1">
              <Filter className="w-3.5 h-3.5 text-[#7E22CE]" />
              <span>지역:</span>
            </span>
            {cities.map((city) => (
              <button
                key={city}
                onClick={() => setSelectedCity(city)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                  selectedCity === city
                    ? 'bg-gradient-to-r from-[#9333EA] to-[#DB2777] text-white shadow-sm'
                    : 'bg-[#FAF7FD] text-[#5B4870] hover:text-[#180D26] hover:bg-[#F3E8FC]'
                }`}
              >
                {city === 'all' ? '전국 전체' : city}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full sm:w-72">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="살롱명, 역세권(강남/판교), 구(강남구)..."
              className="w-full pl-9 pr-3 py-2 text-xs bg-[#FAF7FD] border border-[#A855F7]/25 rounded-xl text-[#180D26] placeholder-[#8A78A0] focus:outline-none focus:border-[#DB2777] focus:ring-1 focus:ring-[#DB2777]/30 transition-all"
            />
            <Search className="w-4 h-4 text-[#8A78A0] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        {/* Map & List Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left Column: Salon List */}
          <div className="lg:col-span-5 space-y-3.5 max-h-[640px] overflow-y-auto pr-1">
            {filteredSalons.length === 0 ? (
              <div className="text-center py-12 bg-white rounded-2xl border border-[#A855F7]/20 p-6">
                <MapPin className="w-8 h-8 text-[#8A78A0] mx-auto mb-2 opacity-50" />
                <p className="text-sm font-bold text-[#180D26]">검색 결과가 없습니다.</p>
                <p className="text-xs text-[#5B4870] mt-1">지역명이나 살롱명을 다시 확인해주세요.</p>
              </div>
            ) : (
              filteredSalons.map((salon) => {
                const isSelected = salon.id === activeSalon.id;
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
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#FCE7F3] text-[#BE185D] border border-[#F472B6]/40">
                            {salon.isCertifiedMaster ? '마스터 공인점' : '공인 인증점'}
                          </span>
                          <span className="text-xs text-[#5B4870] font-semibold">{salon.city} · {salon.district}</span>
                        </div>
                        <h4 className="text-base font-bold text-[#180D26]">{salon.name} <span className="text-xs text-[#7E22CE]">({salon.branch})</span></h4>
                      </div>

                      <div className="w-8 h-8 rounded-xl bg-white border border-[#A855F7]/25 flex items-center justify-center text-[#9333EA] shrink-0 shadow-sm">
                        <MapPin className="w-4 h-4" />
                      </div>
                    </div>

                    <p className="text-xs text-[#5B4870] mb-2 truncate">{salon.address}</p>

                    <div className="flex items-center justify-between text-xs pt-2 border-t border-[#A855F7]/15">
                      <span className="text-[11px] text-[#7E22CE] font-semibold">
                        인근: {salon.nearestStation}
                      </span>
                      <div className="flex items-center gap-2">
                        <span className="text-[11px] text-[#BE185D] font-bold">
                          ★ {salon.rating} ({salon.reviewCount})
                        </span>
                        <ChevronRight className="w-4 h-4 text-[#8A78A0]" />
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>

          {/* Right Column: Interactive Map Preview + Active Salon Deep Card */}
          <div className="lg:col-span-7 rounded-3xl bg-white border border-[#A855F7]/20 p-6 shadow-lg flex flex-col justify-between overflow-hidden">
            {/* Visual Simulated Map Display */}
            <div className="relative w-full h-72 sm:h-80 rounded-2xl bg-gradient-to-br from-[#FAF7FD] to-[#F3E8FC] border border-[#A855F7]/20 overflow-hidden mb-6 flex items-center justify-center">
              {/* Map grid lines */}
              <div className="absolute inset-0 mock-map-grid opacity-60" />

              {/* Graphical Map Roads & Overlay Elements */}
              <div className="absolute top-1/3 left-0 right-0 h-4 bg-white/70 transform -rotate-6 shadow-sm pointer-events-none" />
              <div className="absolute top-0 bottom-0 left-1/2 w-4 bg-white/70 transform rotate-12 shadow-sm pointer-events-none" />

              {/* Map Pins */}
              {filteredSalons.map((s) => {
                const isActive = s.id === activeSalon.id;
                // pseudo positions based on hash
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
                      <MapPin className="w-3 h-3" />
                      <span>{s.branch}</span>
                    </div>
                  </button>
                );
              })}

              {/* Map Controls Floating Badge */}
              <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-xl border border-[#A855F7]/30 text-[11px] font-bold text-[#180D26] shadow-sm flex items-center gap-1.5 z-10">
                <Navigation className="w-3.5 h-3.5 text-[#DB2777]" />
                <span>공인 살롱 실시간 위치</span>
              </div>
            </div>

            {/* Detailed Info Card for Currently Selected Salon */}
            {activeSalon && (
              <div className="p-5 rounded-2xl bg-[#FAF7FD] border border-[#A855F7]/20 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-[#A855F7]/15">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#FCE7F3] text-[#BE185D] border border-[#F472B6]/40">
                        {activeSalon.isCertifiedMaster ? '마스터 공인점' : '공인 인증점'}
                      </span>
                      <span className="text-xs text-[#5B4870]">원장 {activeSalon.directorName}</span>
                    </div>
                    <h3 className="text-lg font-bold text-[#180D26]">
                      {activeSalon.name} ({activeSalon.branch})
                    </h3>
                  </div>

                  <div className="text-left sm:text-right">
                    <span className="text-xs text-[#5B4870] block">대표 번호</span>
                    <a
                      href={`tel:${activeSalon.phone}`}
                      className="text-sm font-bold text-[#7E22CE] hover:text-[#DB2777] transition-colors"
                    >
                      {activeSalon.phone}
                    </a>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="flex items-center gap-2 text-[#5B4870]">
                    <MapPin className="w-4 h-4 text-[#9333EA] shrink-0" />
                    <span>{activeSalon.address}</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#5B4870]">
                    <Clock className="w-4 h-4 text-[#9333EA] shrink-0" />
                    <span>{activeSalon.businessHours} (휴무: {activeSalon.closedDay})</span>
                  </div>
                </div>

                {/* Available Programs in this Salon */}
                <div>
                  <span className="text-[11px] font-bold text-[#7E22CE] uppercase tracking-wider block mb-1.5">
                    제공 플렉스터치 시술 메뉴
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {activeSalon.supportedProgramIds.map((progId, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-white text-[#180D26] border border-[#A855F7]/25"
                      >
                        {progId === 'neck-shoulder'
                          ? '5분 넥숄더 퀵터치'
                          : progId === 'fascia-lifting'
                          ? '근막재건 리프팅'
                          : '뇌청소 두피스파'}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Reservation Action Button */}
                <div className="pt-2 flex items-center gap-3">
                  <button
                    onClick={() => onOpenReservation(activeSalon.id)}
                    className="flex-1 py-3 rounded-xl bg-gradient-to-r from-[#9333EA] via-[#A855F7] to-[#DB2777] text-white font-bold text-xs sm:text-sm shadow-md shadow-pink-900/20 hover:opacity-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>이 매장으로 시술 예약하기</span>
                  </button>
                  <a
                    href={`https://map.naver.com`}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-xl bg-white hover:bg-[#F3E8FC] text-[#7E22CE] border border-[#A855F7]/30 transition-colors shadow-sm"
                    title="네이버 지도에서 보기"
                  >
                    <ExternalLink className="w-4 h-4" />
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
