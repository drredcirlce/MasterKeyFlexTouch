import React, { useState } from 'react';
import { Program } from '../types';
import {
  Sparkles,
  Clock,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Zap,
  Info,
  Calendar,
  Layers,
  HeartPulse,
  Brain
} from 'lucide-react';

interface ProgramsSectionProps {
  programs: Program[];
  onOpenDetailModal: (program: Program) => void;
  onOpenReservation: (salonId?: string, programId?: string, planIndex?: number) => void;
}

export const ProgramsSection: React.FC<ProgramsSectionProps> = ({
  programs,
  onOpenDetailModal,
  onOpenReservation,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredPrograms =
    selectedCategory === 'all'
      ? programs
      : programs.filter((p) => p.category === selectedCategory);

  return (
    <section id="programs" className="scroll-mt-20 sm:scroll-mt-24 py-16 lg:py-24 border-b border-[#A855F7]/15 relative bg-[#FAF7FD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="hero-badge-dark inline-flex items-center gap-2 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#DB2777]" />
            <span>FLEXTOUCH SIGNATURE PROGRAMS</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-[#180D26] font-serif-luxury mb-4">
            헤어살롱에서 완성하는
            <span className="block mt-1 text-beauty-gradient">
              5분 메디컬 림프 & 근막 리프팅 테크닉
            </span>
          </h2>
          <p className="text-sm sm:text-base text-[#5B4870]">
            헤어 커트, 펌, 염색 등 살롱 기본 시술과 결합하여 즉각적인 힐링과 윤곽 리프팅을 선사합니다.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center mb-10">
          <div className="p-1 rounded-2xl bg-white border border-[#A855F7]/25 shadow-sm flex items-center gap-1 overflow-x-auto max-w-full">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === 'all'
                  ? 'bg-gradient-to-r from-[#9333EA] to-[#DB2777] text-white shadow-md shadow-pink-900/20'
                  : 'text-[#5B4870] hover:text-[#180D26]'
              }`}
            >
              전체 프로그램 ({programs.length})
            </button>
            <button
              onClick={() => setSelectedCategory('neck-shoulder')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === 'neck-shoulder'
                  ? 'bg-gradient-to-r from-[#9333EA] to-[#DB2777] text-white shadow-md shadow-pink-900/20'
                  : 'text-[#5B4870] hover:text-[#180D26]'
              }`}
            >
              넥 & 숄더 집중
            </button>
            <button
              onClick={() => setSelectedCategory('lifting')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === 'lifting'
                  ? 'bg-gradient-to-r from-[#9333EA] to-[#DB2777] text-white shadow-md shadow-pink-900/20'
                  : 'text-[#5B4870] hover:text-[#180D26]'
              }`}
            >
              근막재건 리프팅
            </button>
            <button
              onClick={() => setSelectedCategory('scalp')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === 'scalp'
                  ? 'bg-gradient-to-r from-[#9333EA] to-[#DB2777] text-white shadow-md shadow-pink-900/20'
                  : 'text-[#5B4870] hover:text-[#180D26]'
              }`}
            >
              뇌청소 & 두피스파
            </button>
          </div>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredPrograms.map((prog) => {
            const firstPlan = prog.pricingPlans[0];
            return (
              <div
                key={prog.id}
                className="rounded-3xl bg-white border border-[#A855F7]/20 hover:border-[#DB2777]/50 shadow-md hover:shadow-xl transition-all flex flex-col justify-between overflow-hidden group"
              >
                <div>
                  {/* Card Banner & Timing */}
                  <div className="p-6 pb-4 border-b border-[#A855F7]/15 bg-gradient-to-br from-[#FAF7FD] to-[#F3E8FC]/60 flex items-start justify-between gap-2">
                    <div>
                      <span className="text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-1 rounded-full bg-[#FCE7F3] text-[#BE185D] border border-[#F472B6]/40 inline-block mb-2">
                        {prog.durationMinutes}분 퀵 메디컬 테크닉
                      </span>
                      <h3 className="text-xl font-bold text-[#180D26] font-serif-luxury group-hover:text-[#7E22CE] transition-colors">
                        {prog.title}
                      </h3>
                      <p className="text-xs text-[#BE185D] font-medium mt-0.5">{prog.subtitle}</p>
                    </div>

                    <div className="w-10 h-10 rounded-xl bg-white border border-[#A855F7]/30 flex items-center justify-center text-[#9333EA] shrink-0 shadow-sm">
                      {prog.id.includes('neck') ? (
                        <HeartPulse className="w-5 h-5" />
                      ) : prog.id.includes('lifting') ? (
                        <Zap className="w-5 h-5" />
                      ) : (
                        <Brain className="w-5 h-5" />
                      )}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 space-y-4">
                    <p className="text-xs text-[#5B4870] leading-relaxed line-clamp-2">
                      {prog.tagline}
                    </p>

                    {/* Key Effects List */}
                    <div>
                      <span className="text-[11px] font-bold text-[#7E22CE] uppercase tracking-wider block mb-2">
                        주요 시술 효과
                      </span>
                      <div className="space-y-1.5">
                        {prog.keyEffects.slice(0, 3).map((effect, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-xs text-[#180D26]">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#DB2777] shrink-0" />
                            <span className="truncate font-medium">{effect}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Anatomical Trigger Points Highlight */}
                    <div className="p-3 rounded-2xl bg-[#FAF7FD] border border-[#A855F7]/15">
                      <span className="text-[10px] font-bold text-[#5B4870] uppercase tracking-wider block mb-1">
                        핵심 자극점
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {prog.anatomicalPoints.map((pt, idx) => (
                          <span
                            key={idx}
                            className="text-[11px] px-2 py-0.5 rounded-md bg-white text-[#7E22CE] border border-[#A855F7]/25 font-semibold"
                          >
                            {pt.koreanTerm}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Footer: Pricing & Action Buttons */}
                <div className="p-6 pt-0">
                  <div className="pt-4 border-t border-[#A855F7]/15 flex items-center justify-between mb-4">
                    <div>
                      <span className="text-[10px] text-[#5B4870] block">공식 권장 시술가</span>
                      <div className="flex items-baseline gap-1">
                        <span className="text-lg font-bold text-[#180D26]">
                          {firstPlan?.salePrice.toLocaleString()}원
                        </span>
                        <span className="text-[11px] text-[#5B4870]">/ {firstPlan?.sessions}회</span>
                      </div>
                    </div>

                    <button
                      onClick={() => onOpenDetailModal(prog)}
                      className="text-xs text-[#7E22CE] hover:text-[#DB2777] font-bold flex items-center gap-1 cursor-pointer transition-colors"
                    >
                      <Info className="w-3.5 h-3.5" />
                      <span>상세 정보</span>
                    </button>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => onOpenDetailModal(prog)}
                      className="py-2.5 rounded-xl bg-[#FAF7FD] hover:bg-[#F3E8FC] text-[#7E22CE] text-xs font-bold border border-[#A855F7]/25 transition-colors cursor-pointer"
                    >
                      해부학 원리 보기
                    </button>
                    <button
                      onClick={() => onOpenReservation(undefined, prog.id, 0)}
                      className="py-2.5 rounded-xl bg-gradient-to-r from-[#9333EA] to-[#DB2777] hover:opacity-95 text-white text-xs font-bold shadow-md shadow-pink-900/20 transition-all flex items-center justify-center gap-1 cursor-pointer"
                    >
                      <Calendar className="w-3.5 h-3.5" />
                      <span>예약하기</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner: Salon Director Upselling Note - Dark highlight for contrast */}
        <div className="rounded-3xl bg-[#1F0D33] border border-[#9333EA]/30 p-6 sm:p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center sm:text-left">
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#F472B6]">
              FOR SALON DIRECTORS
            </span>
            <h4 className="text-lg sm:text-xl font-bold text-white font-serif-luxury">
              우리 매장에도 마스터키 플렉스터치 메뉴를 도입하고 싶으신가요?
            </h4>
            <p className="text-xs sm:text-sm text-[#E9D5FF]">
              정원호 한의사의 160분 실습 아카데미를 통해 전 직원 즉시 시술 및 객단가 상승이 가능합니다.
            </p>
          </div>

          <a
            href="#academy"
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#9333EA] to-[#DB2777] hover:opacity-95 text-white text-xs sm:text-sm font-bold shadow-md shadow-pink-900/40 whitespace-nowrap cursor-pointer transition-all flex items-center gap-2"
          >
            <span>원장님 실습 아카데미 보기</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
