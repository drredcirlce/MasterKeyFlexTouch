import React from 'react';
import { FOUNDER_PROFILE } from '../data/mockData';
import { Award, GraduationCap, ShieldCheck, Stethoscope, CheckCircle, ArrowRight, UserCheck } from 'lucide-react';

interface FounderSectionProps {
  onOpenAcademy: () => void;
}

export const FounderSection: React.FC<FounderSectionProps> = ({ onOpenAcademy }) => {
  return (
    <section id="founder" className="scroll-mt-20 sm:scroll-mt-24 py-16 lg:py-24 border-b border-[#D4AF37]/20 relative bg-[#080808]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="hero-badge-dark inline-flex items-center gap-2 mb-3">
            <Stethoscope className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>MASTER INSTRUCTOR PROFILE</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-normal text-[#F2F2F2] font-serif-luxury mb-4">
            한의사가 직접 연구하고 교육하는
            <span className="block mt-1 text-gold-gradient">
              독보적인 메디컬 뷰티 테크닉
            </span>
          </h2>
          <p className="text-sm sm:text-base text-[#888888] font-light">
            임상 20년의 통증치료 노하우와 근막 해부학을 헤어살롱 실무에 최적화하여 보급합니다.
          </p>
        </div>

        {/* Profile Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Profile Card & Photo Visual */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-xl overflow-hidden bg-[#121212] border border-[#D4AF37]/30 p-1 shadow-2xl group">
              <div className="relative aspect-[4/5] rounded-lg overflow-hidden bg-[#161616]">
                <img
                  src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=80"
                  alt="안덕수 한의사 대표이사"
                  className="w-full h-full object-cover object-center filter grayscale contrast-125 group-hover:scale-105 transition-transform duration-500 opacity-75"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/40 to-transparent" />

                {/* Overlaid Badges */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="p-4 rounded-lg bg-[#121212]/95 border border-[#D4AF37]/40 backdrop-blur-md">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-lg font-bold text-[#F2F2F2] font-serif-luxury">안덕수 한의사</span>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#D4AF37] text-[#080808] uppercase tracking-wider">
                        HEAD INSTRUCTOR
                      </span>
                    </div>
                    <p className="text-xs text-[#D4AF37] font-medium">
                      (주)케이메디플러스 대표이사 / 덕수한의원 공동원장
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Credential Floating Tag */}
            <div className="absolute -top-3 -right-3 sm:top-4 sm:-right-4 bg-[#121212] border border-[#D4AF37]/60 rounded-lg p-3 shadow-xl backdrop-blur-md flex items-center gap-3">
              <div className="w-10 h-10 rounded bg-[#D4AF37]/15 border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37]">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-xs font-bold text-[#F2F2F2]">R7 통증전문</span>
                <span className="text-[11px] text-[#888888]">수석 교육강사 직강</span>
              </div>
            </div>
          </div>

          {/* Profile Bio & Philosophy */}
          <div className="lg:col-span-7 space-y-6">
            {/* Roles List */}
            <div className="space-y-2">
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-wider">주요 약력 및 경력</span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {FOUNDER_PROFILE.roles.map((role, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 p-2.5 rounded bg-[#121212] border border-[#262626] text-xs text-[#CCCCCC] font-medium"
                  >
                    <CheckCircle className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                    <span>{role}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quote Block */}
            <div className="p-5 rounded-lg bg-[#121212] border-l-2 border-[#D4AF37] text-[#CCCCCC]">
              <p className="text-sm sm:text-base font-normal italic text-[#fae69e] leading-relaxed font-serif-luxury">
                {FOUNDER_PROFILE.quote}
              </p>
            </div>

            {/* Story Text */}
            <div className="text-xs sm:text-sm text-[#888888] leading-relaxed space-y-3">
              {FOUNDER_PROFILE.story.split('\n\n').map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {/* 3 Core Values */}
            <div className="pt-2">
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-wider block mb-3">
                플렉스터치 3대 핵심 가치
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {FOUNDER_PROFILE.coreValues.map((val, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-lg bg-[#121212] border border-[#D4AF37]/20 flex flex-col justify-between"
                  >
                    <h5 className="text-xs font-bold text-[#F2F2F2] mb-1.5 flex items-center gap-1.5 font-serif-luxury">
                      <span className="w-4 h-4 rounded-full bg-[#D4AF37]/20 text-[#D4AF37] text-[10px] flex items-center justify-center font-bold">
                        {idx + 1}
                      </span>
                      {val.title}
                    </h5>
                    <p className="text-[11px] text-[#888888] leading-relaxed">
                      {val.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <button
                id="founder-academy-cta"
                onClick={onOpenAcademy}
                className="inline-flex items-center gap-2 px-5 py-3 rounded text-xs font-bold uppercase tracking-wider bg-[#D4AF37] text-[#080808] hover:bg-[#e5c158] shadow-md shadow-[#D4AF37]/20 cursor-pointer transition-all"
              >
                <UserCheck className="w-4 h-4" />
                <span>한의사 대표 직강 아카데미 일정 확인하기</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
