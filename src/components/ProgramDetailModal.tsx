import React from 'react';
import { Program } from '../types';
import { X, Clock, CheckCircle2, Sparkles, ChevronRight, Activity, Calendar, ShieldCheck, HeartPulse } from 'lucide-react';

interface ProgramDetailModalProps {
  program: Program | null;
  onClose: () => void;
  onSelectReservation: (programId: string, planIndex?: number) => void;
}

export const ProgramDetailModal: React.FC<ProgramDetailModalProps> = ({
  program,
  onClose,
  onSelectReservation,
}) => {
  if (!program) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#121212] border border-[#D4AF37]/35 rounded-xl shadow-2xl text-[#F2F2F2] p-6 sm:p-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded bg-[#181818] border border-[#262626] text-[#888888] hover:text-[#F2F2F2] hover:border-[#D4AF37]/40 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Badge & Title */}
        <div className="mb-4">
          <span className="hero-badge-dark inline-flex items-center gap-1.5 mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            {program.badgeText}
          </span>
          <h3 className="text-2xl sm:text-3xl font-normal text-[#F2F2F2] font-serif-luxury">
            {program.title}
          </h3>
          <p className="text-xs sm:text-sm text-[#888888] font-mono mt-0.5">
            {program.subtitle}
          </p>
        </div>

        {/* Tagline Box */}
        <div className="p-4 rounded bg-[#161616] border border-[#D4AF37]/30 text-[#fae69e] text-sm font-medium mb-6 font-serif-luxury">
          {program.tagline}
        </div>

        {/* Key Information Badges */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
          <div className="p-3 rounded bg-[#161616] border border-[#262626]">
            <span className="text-[11px] text-[#888888] block mb-1">소요 시간</span>
            <div className="flex items-center gap-1.5 text-sm font-bold text-[#F2F2F2]">
              <Clock className="w-4 h-4 text-[#D4AF37]" />
              <span>약 {program.durationMinutes}분 소요</span>
            </div>
          </div>
          <div className="p-3 rounded bg-[#161616] border border-[#262626]">
            <span className="text-[11px] text-[#888888] block mb-1">주요 타깃 부위</span>
            <div className="flex items-center gap-1.5 text-sm font-bold text-[#F2F2F2]">
              <HeartPulse className="w-4 h-4 text-[#D4AF37]" />
              <span className="truncate">쇄골-두경부-근막</span>
            </div>
          </div>
          <div className="p-3 rounded bg-[#161616] border border-[#262626] col-span-2 sm:col-span-1">
            <span className="text-[11px] text-[#888888] block mb-1">시술 호환성</span>
            <div className="flex items-center gap-1.5 text-sm font-bold text-[#F2F2F2]">
              <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
              <span>샴푸대 / 좌석 동시진행</span>
            </div>
          </div>
        </div>

        {/* Key Clinical Effects */}
        <div className="mb-6">
          <h4 className="text-xs font-bold text-[#D4AF37] uppercase tracking-wider mb-3 flex items-center gap-1.5">
            <Activity className="w-4 h-4" />
            <span>임상 및 체감 핵심 효능</span>
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {program.keyEffects.map((effect, idx) => (
              <div
                key={idx}
                className="p-3 rounded bg-[#161616] border border-[#262626] text-xs sm:text-sm text-[#CCCCCC] flex items-start gap-2"
              >
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <span>{effect}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Anatomical Targets Detail */}
        <div className="mb-6">
          <h4 className="text-xs font-bold text-[#D4AF37] uppercase tracking-wider mb-3">
            한의학적 경혈 및 해부학 타깃 포인트
          </h4>
          <div className="space-y-2">
            {program.anatomicalPoints.map((pt, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded bg-[#161616] border border-[#262626] flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-4"
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-[#F2F2F2]">{pt.name}</span>
                    <span className="text-[11px] text-[#D4AF37] font-medium">({pt.koreanTerm})</span>
                  </div>
                  <p className="text-xs text-[#888888] mt-1">{pt.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Step-by-Step Procedure */}
        <div className="mb-6">
          <h4 className="text-xs font-bold text-[#D4AF37] uppercase tracking-wider mb-3">
            표준 시술 프로세스 4단계
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {program.procedureSteps.map((step) => (
              <div
                key={step.step}
                className="p-3.5 rounded bg-[#161616] border border-[#262626] relative"
              >
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="w-5 h-5 rounded-full bg-[#D4AF37] text-[#080808] font-bold text-xs flex items-center justify-center">
                    {step.step}
                  </span>
                  <span className="text-xs font-bold text-[#F2F2F2]">{step.title}</span>
                </div>
                <p className="text-xs text-[#888888] leading-relaxed pl-7">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Options */}
        <div className="mb-6">
          <h4 className="text-xs font-bold text-[#D4AF37] uppercase tracking-wider mb-3">
            이용 요금 및 멤버십 패키지
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {program.pricingPlans.map((plan, idx) => (
              <div
                key={idx}
                className={`p-4 rounded border flex flex-col justify-between ${
                  plan.badge === '인기 BEST' || plan.badge === '시그니처 코스'
                    ? 'bg-[#181818] border-[#D4AF37] shadow-lg shadow-[#D4AF37]/15'
                    : 'bg-[#161616] border-[#262626]'
                }`}
              >
                <div>
                  {plan.badge && (
                    <span className="inline-block text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#D4AF37]/20 text-[#D4AF37] border border-[#D4AF37]/40 mb-2">
                      {plan.badge}
                    </span>
                  )}
                  <h5 className="text-sm font-bold text-[#F2F2F2] mb-1">{plan.name}</h5>
                  <p className="text-[11px] text-[#888888] mb-3">{plan.description}</p>
                </div>
                <div>
                  <div className="flex items-baseline gap-2 mb-3">
                    <span className="text-xs text-[#666666] line-through">
                      {plan.originalPrice.toLocaleString()}원
                    </span>
                    <span className="text-lg font-bold text-[#D4AF37] font-serif-luxury">
                      {plan.salePrice.toLocaleString()}원
                    </span>
                  </div>
                  <button
                    onClick={() => {
                      onClose();
                      onSelectReservation(program.id, idx);
                    }}
                    className="w-full py-2 rounded bg-[#D4AF37] hover:bg-[#e5c158] text-[#080808] text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                  >
                    이 플랜으로 예약
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal Bottom Close / Book CTA */}
        <div className="flex items-center justify-end gap-3 pt-4 border-t border-[#262626]">
          <button
            onClick={onClose}
            className="px-4 py-2.5 rounded bg-transparent border border-[#262626] hover:bg-[#181818] text-xs font-bold uppercase text-[#888888] hover:text-[#F2F2F2] cursor-pointer"
          >
            닫기
          </button>
          <button
            onClick={() => {
              onClose();
              onSelectReservation(program.id, 0);
            }}
            className="px-5 py-2.5 rounded bg-[#D4AF37] text-[#080808] hover:bg-[#e5c158] text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 cursor-pointer shadow-md shadow-[#D4AF37]/20"
          >
            <Calendar className="w-4 h-4" />
            <span>가맹 살롱 예약 신청</span>
          </button>
        </div>
      </div>
    </div>
  );
};
