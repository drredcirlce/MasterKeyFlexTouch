import React from 'react';
import { Program } from '../types';
import {
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Info,
  GraduationCap,
  HeartPulse,
  Zap,
  TrendingUp
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
  return (
    <section id="programs" className="scroll-mt-20 sm:scroll-mt-24 py-16 lg:py-24 border-b border-[#A855F7]/15 relative bg-[#FAF7FD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="hero-badge-dark inline-flex items-center gap-2 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#DB2777]" />
            <span>FLEXTOUCH SIGNATURE MENUS FOR SALONS</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-[#180D26] font-serif-luxury mb-4">
            헤어살롱 워크플로우에 최적화된
            <span className="block mt-1 text-beauty-gradient">
              2대 시그니처 메디뷰티 도입 프로그램
            </span>
          </h2>
          <p className="text-sm sm:text-base text-[#5B4870]">
            별도의 고가 기기나 도구 없이, 샴푸대와 시술의자에서 5~15분 만에 즉각적인 객단가 상승과 고객 감동을 실현합니다.
          </p>
        </div>

        {/* Programs Grid (No Tabs - Displayed Directly) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 max-w-5xl mx-auto">
          {programs.map((prog) => {
            const firstPlan = prog.pricingPlans[0];
            const secondPlan = prog.pricingPlans[1];
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
                        {prog.durationMinutes}분 퀵 테크닉 ({prog.badgeText})
                      </span>
                      <h3 className="text-xl font-bold text-[#180D26] font-serif-luxury group-hover:text-[#7E22CE] transition-colors">
                        {prog.title}
                      </h3>
                      <p className="text-xs text-[#BE185D] font-medium mt-0.5">{prog.subtitle}</p>
                    </div>

                    <div className="w-12 h-12 rounded-2xl bg-white border border-[#A855F7]/30 flex items-center justify-center text-[#9333EA] shrink-0 shadow-sm">
                      {prog.id.includes('neck') ? (
                        <HeartPulse className="w-6 h-6 text-[#DB2777]" />
                      ) : (
                        <Zap className="w-6 h-6 text-[#7E22CE]" />
                      )}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 space-y-4">
                    <p className="text-xs text-[#5B4870] leading-relaxed">
                      {prog.tagline}
                    </p>

                    {/* Key Target Area */}
                    <div className="p-3 rounded-xl bg-[#FAF7FD] border border-[#A855F7]/15">
                      <span className="text-[11px] font-bold text-[#7E22CE] block mb-1">
                        🎯 살롱 시술 타깃 부위 & 포인트
                      </span>
                      <p className="text-xs text-[#180D26] font-medium">{prog.targetArea}</p>
                    </div>

                    {/* Key Effects List */}
                    <div>
                      <span className="text-[11px] font-bold text-[#7E22CE] uppercase tracking-wider block mb-2">
                        살롱 도입 시 주요 효과
                      </span>
                      <div className="space-y-1.5">
                        {prog.keyEffects.map((effect, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-xs text-[#180D26]">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#DB2777] shrink-0" />
                            <span className="font-medium">{effect}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Pricing Plans Box */}
                    <div className="p-4 rounded-2xl bg-gradient-to-br from-[#FAF7FD] to-[#F3E8FC]/40 border border-[#A855F7]/20">
                      <span className="text-[11px] font-bold text-[#5B4870] uppercase tracking-wider block mb-2">
                        살롱 권장 정찰제 요금표
                      </span>
                      <div className="space-y-2">
                        {firstPlan && (
                          <div className="flex items-center justify-between text-xs">
                            <span className="text-[#180D26] font-medium">{firstPlan.name}</span>
                            <div className="flex items-center gap-1.5">
                              <span className="text-[#8A78A0] line-through text-[11px]">{firstPlan.originalPrice.toLocaleString()}원</span>
                              <span className="font-bold text-[#BE185D] text-sm">{firstPlan.salePrice.toLocaleString()}원</span>
                            </div>
                          </div>
                        )}
                        {secondPlan && (
                          <div className="flex items-center justify-between text-xs pt-1.5 border-t border-[#A855F7]/15">
                            <div className="flex items-center gap-1.5">
                              <span className="text-[#180D26] font-bold">{secondPlan.name}</span>
                              <span className="text-[10px] font-bold px-1.5 py-0.2 rounded bg-[#FCE7F3] text-[#BE185D]">{secondPlan.badge}</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                              <span className="text-[#8A78A0] line-through text-[11px]">{secondPlan.originalPrice.toLocaleString()}원</span>
                              <span className="font-bold text-[#7E22CE] text-sm">{secondPlan.salePrice.toLocaleString()}원</span>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Footer: Action Buttons */}
                <div className="p-6 pt-0">
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => onOpenDetailModal(prog)}
                      className="py-2.5 rounded-xl bg-[#FAF7FD] hover:bg-[#F3E8FC] text-[#7E22CE] text-xs font-bold border border-[#A855F7]/25 transition-colors cursor-pointer flex items-center justify-center gap-1"
                    >
                      <Info className="w-3.5 h-3.5" />
                      <span>해부학 원리 보기</span>
                    </button>
                    <a
                      href="#academy"
                      className="py-2.5 rounded-xl bg-gradient-to-r from-[#9333EA] to-[#DB2777] hover:opacity-95 text-white text-xs font-bold shadow-md shadow-pink-900/20 transition-all flex items-center justify-center gap-1 cursor-pointer"
                    >
                      <GraduationCap className="w-3.5 h-3.5" />
                      <span>실습 아카데미 신청</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner: Salon Director Upselling Note */}
        <div className="rounded-3xl bg-[#1F0D33] border border-[#9333EA]/30 p-6 sm:p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center sm:text-left">
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#F472B6]">
              FOR SALON DIRECTORS
            </span>
            <h4 className="text-lg sm:text-xl font-bold text-white font-serif-luxury">
              우리 매장에도 마스터키 플렉스터치 메뉴를 도입하고 싶으신가요?
            </h4>
            <p className="text-xs sm:text-sm text-[#E9D5FF]">
              정원호 한의사의 60분 실습 아카데미를 통해 디자이너 즉시 시술 및 객단가 상승이 가능합니다.
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
