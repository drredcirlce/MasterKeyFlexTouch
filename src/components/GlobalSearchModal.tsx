import React, { useState, useMemo } from 'react';
import { Salon, Program } from '../types';
import { Search, X, MapPin, Sparkles, GraduationCap, ChevronRight, ArrowRight } from 'lucide-react';

interface GlobalSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  salons: Salon[];
  programs: Program[];
  onSelectSalon: (salonId: string) => void;
  onSelectProgram: (programId: string) => void;
  onSelectAcademy: () => void;
}

export const GlobalSearchModal: React.FC<GlobalSearchModalProps> = ({
  isOpen,
  onClose,
  salons,
  programs,
  onSelectSalon,
  onSelectProgram,
  onSelectAcademy,
}) => {
  const [query, setQuery] = useState('');

  const quickKeywords = ['강남', '판교', '넥숄더', '리프팅', '뇌청소', '두피케어', '원장님 실습', '해운대'];

  const searchResults = useMemo(() => {
    const q = query.toLowerCase().trim();
    if (!q) return { salons: [], programs: [], academyMatches: false };

    const matchedSalons = salons.filter(
      (s) =>
        s.name.toLowerCase().includes(q) ||
        s.branch.toLowerCase().includes(q) ||
        s.address.toLowerCase().includes(q) ||
        s.district.toLowerCase().includes(q) ||
        s.city.toLowerCase().includes(q) ||
        s.nearestStation.toLowerCase().includes(q)
    );

    const matchedPrograms = programs.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.subtitle.toLowerCase().includes(q) ||
        p.tagline.toLowerCase().includes(q) ||
        p.keyEffects.some((e) => e.toLowerCase().includes(q)) ||
        p.anatomicalPoints.some((pt) => pt.name.toLowerCase().includes(q) || pt.koreanTerm.includes(q))
    );

    const academyMatches =
      q.includes('교육') ||
      q.includes('아카데미') ||
      q.includes('원장') ||
      q.includes('실습') ||
      q.includes('가맹') ||
      q.includes('월요일') ||
      q.includes('화요일') ||
      q.includes('정원호');

    return {
      salons: matchedSalons,
      programs: matchedPrograms,
      academyMatches,
    };
  }, [query, salons, programs]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center p-4 pt-16 sm:pt-24 bg-black/60 backdrop-blur-sm animate-in fade-in duration-150">
      <div className="relative w-full max-w-2xl bg-white border border-[#A855F7]/30 rounded-3xl shadow-2xl text-[#180D26] overflow-hidden">
        {/* Search Input Header */}
        <div className="p-4 sm:p-5 border-b border-[#A855F7]/15 flex items-center gap-3">
          <Search className="w-5 h-5 text-[#DB2777] shrink-0" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="마스터키, 지역명(강남/분당), 시술명(넥숄더/리프팅), 교육..."
            autoFocus
            className="w-full bg-transparent text-[#180D26] text-sm sm:text-base placeholder-[#8A78A0] focus:outline-none"
          />
          <button
            onClick={onClose}
            className="p-1.5 rounded-xl bg-[#FAF7FD] text-[#5B4870] hover:text-[#180D26] cursor-pointer border border-[#A855F7]/20"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Quick Keyword Pills */}
        <div className="px-4 py-2.5 bg-[#FAF7FD] border-b border-[#A855F7]/15 flex items-center gap-1.5 overflow-x-auto text-xs">
          <span className="text-[#5B4870] font-semibold shrink-0">추천 검색:</span>
          {quickKeywords.map((kw) => (
            <button
              key={kw}
              onClick={() => setQuery(kw)}
              className="px-2.5 py-0.5 rounded-full bg-white text-[#7E22CE] hover:text-[#BE185D] hover:bg-[#F3E8FC] border border-[#A855F7]/25 whitespace-nowrap cursor-pointer transition-colors font-medium"
            >
              #{kw}
            </button>
          ))}
        </div>

        {/* Search Results Area */}
        <div className="p-4 sm:p-6 max-h-[60vh] overflow-y-auto space-y-6">
          {query.trim() === '' ? (
            <div className="text-center py-8 text-xs text-[#5B4870]">
              검색어를 입력하시면 가맹 살롱, 프로그램, 교육 정보가 실시간 표시됩니다.
            </div>
          ) : searchResults.salons.length === 0 &&
            searchResults.programs.length === 0 &&
            !searchResults.academyMatches ? (
            <div className="text-center py-8 text-[#5B4870] text-xs">
              '{query}'에 해당하는 검색 결과가 없습니다.
            </div>
          ) : (
            <>
              {/* Academy Result */}
              {searchResults.academyMatches && (
                <div>
                  <h4 className="text-xs font-bold text-[#DB2777] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <GraduationCap className="w-4 h-4" />
                    <span>원장님 교육 & 아카데미</span>
                  </h4>
                  <div
                    onClick={() => {
                      onClose();
                      onSelectAcademy();
                    }}
                    className="p-4 rounded-2xl bg-gradient-to-r from-[#FAF7FD] to-[#F3E8FC] border border-[#A855F7]/30 hover:border-[#DB2777] cursor-pointer transition-all flex items-center justify-between shadow-sm"
                  >
                    <div>
                      <h5 className="text-xs font-bold text-[#180D26]">
                        [한의사 정원호 대표 직강] 뇌청소와 두피케어 매주 월/화 저녁 8시 실습강의
                      </h5>
                      <p className="text-[11px] text-[#5B4870] mt-0.5">
                        이론 100분 + 1:1 실습 60분 / 플렉스터치 메디컬 실습센터
                      </p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#DB2777] shrink-0 ml-2" />
                  </div>
                </div>
              )}

              {/* Matched Programs */}
              {searchResults.programs.length > 0 && (
                <div>
                  <h4 className="text-xs font-bold text-[#DB2777] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4" />
                    <span>시그니처 시술 프로그램 ({searchResults.programs.length})</span>
                  </h4>
                  <div className="space-y-2">
                    {searchResults.programs.map((prog) => (
                      <div
                        key={prog.id}
                        onClick={() => {
                          onClose();
                          onSelectProgram(prog.id);
                        }}
                        className="p-3.5 rounded-2xl bg-white border border-[#A855F7]/20 hover:border-[#DB2777]/60 cursor-pointer transition-all flex items-center justify-between shadow-sm"
                      >
                        <div>
                          <span className="text-xs font-bold text-[#180D26]">{prog.title}</span>
                          <p className="text-[11px] text-[#5B4870] truncate">{prog.tagline}</p>
                        </div>
                        <ChevronRight className="w-4 h-4 text-[#8A78A0] shrink-0 ml-2" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Matched Salons */}
              {searchResults.salons.length > 0 && (
                <div>
                  <h4 className="text-xs font-bold text-[#DB2777] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <MapPin className="w-4 h-4" />
                    <span>가맹 헤어샵 지점 ({searchResults.salons.length})</span>
                  </h4>
                  <div className="space-y-2">
                    {searchResults.salons.map((salon) => (
                      <div
                        key={salon.id}
                        onClick={() => {
                          onClose();
                          onSelectSalon(salon.id);
                        }}
                        className="p-3.5 rounded-2xl bg-white border border-[#A855F7]/20 hover:border-[#DB2777]/60 cursor-pointer transition-all flex items-center justify-between shadow-sm"
                      >
                        <div>
                          <div className="flex items-center gap-1.5">
                            <span className="text-xs font-bold text-[#180D26]">{salon.name}</span>
                            <span className="text-[10px] text-[#BE185D] font-semibold">({salon.branch})</span>
                          </div>
                          <p className="text-[11px] text-[#5B4870] truncate">
                            {salon.address} ({salon.nearestStation})
                          </p>
                        </div>
                        <span className="text-[10px] px-2.5 py-1 rounded-lg bg-[#FCE7F3] text-[#BE185D] border border-[#F472B6]/40 font-bold shrink-0 ml-2">
                          위치 보기 & 예약
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};
