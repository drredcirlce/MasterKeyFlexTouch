import React from 'react';
import { Program } from '../types';
import {
  X,
  Sparkles,
  Clock,
  CheckCircle2,
  Calendar,
  Layers,
  HeartPulse,
  Brain,
  Zap,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';

interface ProgramDetailModalProps {
  program: Program | null;
  onClose: () => void;
  onSelectReservation: (programId: string, planIndex: number) => void;
}

export const ProgramDetailModal: React.FC<ProgramDetailModalProps> = ({
  program,
  onClose,
  onSelectReservation,
}) => {
  if (!program) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl max-h-[92vh] overflow-y-auto bg-white border border-[#A855F7]/30 rounded-3xl shadow-2xl text-[#180D26] p-6 sm:p-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-[#FAF7FD] text-[#5B4870] hover:text-[#180D26] hover:bg-[#F3E8FC] transition-colors cursor-pointer border border-[#A855F7]/20"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6 pb-4 border-b border-[#A855F7]/15">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-1 rounded-full bg-[#FCE7F3] text-[#BE185D] border border-[#F472B6]/40">
              {program.durationMinutes}분 퀵 메디컬 테크닉
            </span>
            <span className="text-xs text-[#5B4870] font-semibold">{program.subtitle}</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-bold text-[#180D26] font-serif-luxury">
            {program.title}
          </h3>
          <p className="text-xs sm:text-sm text-[#7E22CE] font-semibold mt-1">
            "{program.tagline}"
          </p>
        </div>

        {/* Key Effects List - Dark Accent for Medical Authority */}
        <div className="rounded-2xl bg-[#1F0D33] border border-[#9333EA]/30 p-5 text-white mb-6 shadow-md">
          <div className="flex items-center gap-2 mb-3">
            <ShieldCheck className="w-4 h-4 text-[#F472B6]" />
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#F3E8FC]">
              한의학 임상 메디컬 주요 효능
            </h4>
          </div>
          <ul className="space-y-1.5 text-xs text-[#E9D5FF]">
            {program.keyEffects.map((effect, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#F472B6] shrink-0 mt-0.5" />
                <span>{effect}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Key Anatomical Trigger Points */}
        <div className="mb-6">
          <h4 className="text-xs font-bold text-[#180D26] uppercase tracking-wider mb-3 flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-[#DB2777]" />
            <span>핵심 해부학 자극점 & 이완 타깃</span>
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {program.anatomicalPoints.map((pt, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-2xl bg-[#FAF7FD] border border-[#A855F7]/20"
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-bold text-[#7E22CE]">{pt.koreanTerm}</span>
                  <span className="text-[10px] text-[#5B4870] font-mono">{pt.name}</span>
                </div>
                <p className="text-[11px] text-[#5B4870] leading-tight">{pt.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 4-Step Protocol Flow */}
        <div className="mb-6">
          <h4 className="text-xs font-bold text-[#180D26] uppercase tracking-wider mb-3 flex items-center gap-1.5">
            <Layers className="w-4 h-4 text-[#7E22CE]" />
            <span>단계별 시술 프로토콜</span>
          </h4>

          <div className="space-y-2.5">
            {program.procedureSteps.map((st) => (
              <div
                key={st.step}
                className="p-3 rounded-xl bg-white border border-[#A855F7]/15 flex items-start gap-3 shadow-sm"
              >
                <span className="w-6 h-6 rounded-lg bg-[#FCE7F3] text-[#BE185D] text-xs font-bold flex items-center justify-center shrink-0">
                  {st.step}
                </span>
                <div className="flex-1">
                  <h5 className="text-xs font-bold text-[#180D26]">{st.title}</h5>
                  <p className="text-[11px] text-[#5B4870] mt-0.5">{st.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Plans & Director Adoption Guide */}
        <div className="pt-4 border-t border-[#A855F7]/15">
          <div className="flex items-center justify-between mb-3">
            <h4 className="text-xs font-bold text-[#180D26] uppercase tracking-wider">
              살롱 권장 정찰제 요금 및 3+1회 티케팅 가이드
            </h4>
            <span className="text-[11px] text-[#DB2777] font-semibold">객단가 35% 상승 솔루션</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
            {program.pricingPlans.map((plan, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-[#FAF7FD] border border-[#A855F7]/20 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <h5 className="text-xs font-bold text-[#180D26]">{plan.name}</h5>
                    {plan.badge && (
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#FCE7F3] text-[#BE185D]">
                        {plan.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-[11px] text-[#5B4870]">{plan.description}</p>
                </div>
                <div className="mt-3 pt-3 border-t border-[#A855F7]/15 flex items-center justify-between">
                  <span className="text-sm font-bold text-[#7E22CE]">
                    {plan.salePrice.toLocaleString()}원
                  </span>
                  <span className="text-[11px] text-[#5B4870]">
                    원장 정찰제 세팅
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-2">
            <button
              onClick={() => {
                onClose();
                const elem = document.getElementById('academy');
                if (elem) elem.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-[#9333EA] via-[#A855F7] to-[#DB2777] text-white font-bold text-xs sm:text-sm shadow-md shadow-pink-900/20 hover:opacity-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Sparkles className="w-4 h-4" />
              <span>이 테크닉 60분 실습 아카데미 신청하기</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
