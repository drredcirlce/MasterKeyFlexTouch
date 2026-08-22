import React, { useState } from 'react';
import { Program } from '../types';
import { Sparkles, Clock, CheckCircle2, ChevronRight, ArrowRight, Activity, Calendar } from 'lucide-react';

interface ProgramsSectionProps {
  programs: Program[];
  onOpenDetailModal: (program: Program) => void;
  onOpenReservation: (salonId?: string, programId?: string) => void;
}

export const ProgramsSection: React.FC<ProgramsSectionProps> = ({
  programs,
  onOpenDetailModal,
  onOpenReservation,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredPrograms = activeCategory === 'all'
    ? programs
    : programs.filter((p) => p.category === activeCategory);

  return (
    <section id="programs" className="scroll-mt-20 sm:scroll-mt-24 py-16 lg:py-24 border-b border-[#D4AF37]/20 relative bg-[#080808]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="hero-badge-dark inline-flex items-center gap-2 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>EXCLUSIVE CLINICAL LINEUP</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-normal text-[#F2F2F2] font-serif-luxury mb-4">
            마스터키 플렉스터치
            <span className="block mt-1 text-gold-gradient">
              3대 시그니처 프로그램
            </span>
          </h2>
          <p className="text-sm sm:text-base text-[#888888] font-light">
            쇄골 림프 순환로 개방부터 두피 모상건막 수직 리프팅까지, 한의학적 정밀 근막 해부학으로 설계된 최상의 케어
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center gap-2 mb-10 overflow-x-auto pb-2">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 rounded text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
              activeCategory === 'all'
                ? 'bg-[#D4AF37] text-[#080808] shadow-md shadow-[#D4AF37]/20'
                : 'bg-[#121212] text-[#888888] hover:text-[#F2F2F2] border border-[#262626]'
            }`}
          >
            전체 프로그램 ({programs.length})
          </button>
          <button
            onClick={() => setActiveCategory('neck_shoulder')}
            className={`px-4 py-2 rounded text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
              activeCategory === 'neck_shoulder'
                ? 'bg-[#D4AF37] text-[#080808] shadow-md shadow-[#D4AF37]/20'
                : 'bg-[#121212] text-[#888888] hover:text-[#F2F2F2] border border-[#262626]'
            }`}
          >
            1. 넥숄더 (5분 퀵케어)
          </button>
          <button
            onClick={() => setActiveCategory('fascia_lifting')}
            className={`px-4 py-2 rounded text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
              activeCategory === 'fascia_lifting'
                ? 'bg-[#D4AF37] text-[#080808] shadow-md shadow-[#D4AF37]/20'
                : 'bg-[#121212] text-[#888888] hover:text-[#F2F2F2] border border-[#262626]'
            }`}
          >
            2. 근막재건 리프팅 (안면·두피)
          </button>
          <button
            onClick={() => setActiveCategory('brain_scalp')}
            className={`px-4 py-2 rounded text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
              activeCategory === 'brain_scalp'
                ? 'bg-[#D4AF37] text-[#080808] shadow-md shadow-[#D4AF37]/20'
                : 'bg-[#121212] text-[#888888] hover:text-[#F2F2F2] border border-[#262626]'
            }`}
          >
            3. 뇌청소 두피 디톡스 (딥슬립)
          </button>
        </div>

        {/* Program Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {filteredPrograms.map((prog) => (
            <div
              key={prog.id}
              className="rounded-xl bg-[#121212] border border-[#D4AF37]/20 hover:border-[#D4AF37]/60 overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Image & Badges */}
                <div className="relative aspect-[16/10] overflow-hidden bg-[#161616]">
                  <img
                    src={prog.image}
                    alt={prog.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-black/50" />

                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-[#D4AF37] text-[#080808] shadow">
                      {prog.badgeText}
                    </span>
                  </div>

                  <div className="absolute bottom-3 right-3">
                    <span className="px-2.5 py-1 rounded text-xs font-semibold bg-black/80 text-[#CCCCCC] backdrop-blur-sm border border-[#262626] flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
                      약 {prog.durationMinutes}분
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <span className="text-[11px] font-mono text-[#D4AF37] font-semibold block mb-1">
                    {prog.subtitle}
                  </span>
                  <h3 className="text-xl font-bold text-[#F2F2F2] mb-2 font-serif-luxury group-hover:text-[#D4AF37] transition-colors">
                    {prog.title}
                  </h3>
                  <p className="text-xs text-[#888888] leading-relaxed mb-4 min-h-[36px]">
                    {prog.tagline}
                  </p>

                  {/* Effects Checklist */}
                  <div className="space-y-1.5 pt-3 border-t border-[#262626] mb-5">
                    {prog.keyEffects.slice(0, 3).map((effect, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-[#888888]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                        <span className="truncate">{effect}</span>
                      </div>
                    ))}
                  </div>

                  {/* Pricing Snapshot */}
                  <div className="p-3.5 rounded bg-[#161616] border border-[#262626]">
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span className="text-[#888888] font-medium">1회 체험가 기준</span>
                      <span className="text-[#666666] line-through">
                        {prog.pricingPlans[0].originalPrice.toLocaleString()}원
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-[#D4AF37]">
                        {prog.pricingPlans[0].name}
                      </span>
                      <span className="text-lg font-bold text-[#F2F2F2] font-serif-luxury">
                        {prog.pricingPlans[0].salePrice.toLocaleString()}원~
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-6 pt-0 grid grid-cols-2 gap-2">
                <button
                  onClick={() => onOpenDetailModal(prog)}
                  className="py-2.5 px-3 rounded bg-transparent text-[#D4AF37] text-xs font-bold uppercase tracking-wider border border-[#D4AF37]/50 hover:bg-[#D4AF37]/10 flex items-center justify-center gap-1 transition-colors cursor-pointer"
                >
                  <Activity className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>원리 & 상세</span>
                </button>
                <button
                  onClick={() => onOpenReservation(undefined, prog.id)}
                  className="py-2.5 px-3 rounded bg-[#D4AF37] text-[#080808] text-xs font-bold uppercase tracking-wider hover:bg-[#e5c158] flex items-center justify-center gap-1 shadow-md shadow-[#D4AF37]/20 transition-all cursor-pointer"
                >
                  <Calendar className="w-3.5 h-3.5 text-[#080808]" />
                  <span>시술 예약</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
