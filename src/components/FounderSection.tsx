import React from 'react';
import { FOUNDER_PROFILE } from '../data/mockData';
import {
  Sparkles,
  CheckCircle2,
  Quote,
  ShieldCheck,
  GraduationCap
} from 'lucide-react';

interface FounderSectionProps {
  onOpenAcademy: () => void;
}

export const FounderSection: React.FC<FounderSectionProps> = ({ onOpenAcademy }) => {
  return (
    <section id="philosophy" className="scroll-mt-20 sm:scroll-mt-24 py-16 lg:py-24 border-b border-[#A855F7]/15 relative bg-[#FAF7FD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="hero-badge-dark inline-flex items-center gap-2 mb-3">
            <GraduationCap className="w-3.5 h-3.5 text-[#DB2777]" />
            <span>FOUNDER & CLINICAL DIRECTOR</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-[#180D26] font-serif-luxury mb-4">
            30년 한의학 임상 노하우를 담은
            <span className="block mt-1 text-beauty-gradient">
              독창적인 메디뷰티 테크닉
            </span>
          </h2>
          <p className="text-sm sm:text-base text-[#5B4870]">
            한의사 정원호 대표의 림프근막테크닉과 미용의 융합
          </p>
        </div>

        {/* 2-Column Profile Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          {/* Left Column: Photo & Key Roles Badge */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative rounded-3xl overflow-hidden border border-[#A855F7]/30 shadow-xl bg-white group">
              <img
                src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=80"
                alt="정원호 대표 한의사"
                referrerPolicy="no-referrer"
                className="w-full h-80 sm:h-96 object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#180D26]/90 via-[#180D26]/30 to-transparent flex flex-col justify-end p-6 text-white">
                <span className="text-xs font-bold uppercase tracking-widest text-[#F472B6] mb-1">
                  MASTERKEY FOUNDER
                </span>
                <h3 className="text-2xl font-bold font-serif-luxury text-white">
                  {FOUNDER_PROFILE.name} <span className="text-sm font-normal text-[#E9D5FF]">{FOUNDER_PROFILE.title}</span>
                </h3>
                <p className="text-xs text-[#E9D5FF] mt-1">
                  {FOUNDER_PROFILE.company}
                </p>
              </div>
            </div>

            {/* Credential List Card */}
            <div className="p-6 rounded-3xl bg-white border border-[#A855F7]/20 shadow-md">
              <h4 className="text-xs font-bold text-[#180D26] uppercase tracking-wider mb-3 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#DB2777]" />
                <span>주요 약력 및 전문성</span>
              </h4>
              <ul className="space-y-2 text-xs text-[#5B4870]">
                {FOUNDER_PROFILE.roles.map((role, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#7E22CE] shrink-0 mt-0.5" />
                    <span>{role}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Medical Philosophy & Core Values */}
          <div className="lg:col-span-7 space-y-6">
            {/* Dark Accent Quote Box */}
            <div className="rounded-3xl bg-[#1F0D33] border border-[#9333EA]/30 p-6 sm:p-8 text-white shadow-xl">
              <div className="flex items-center gap-2 mb-4 text-[#F472B6]">
                <Quote className="w-6 h-6" />
                <span className="text-xs font-bold uppercase tracking-wider">임상 철학 메시지</span>
              </div>
              <blockquote className="text-base sm:text-lg font-serif-luxury text-white leading-relaxed mb-4">
                {FOUNDER_PROFILE.quote}
              </blockquote>
              <div className="text-xs sm:text-sm text-[#E9D5FF] leading-relaxed whitespace-pre-line border-t border-[#9333EA]/30 pt-4">
                {FOUNDER_PROFILE.story}
              </div>
            </div>

            {/* 3 Core Values Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {FOUNDER_PROFILE.coreValues.map((val, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-3xl bg-white border border-[#A855F7]/20 shadow-md flex flex-col justify-between"
                >
                  <div>
                    <span className="w-7 h-7 rounded-xl bg-[#FCE7F3] text-[#BE185D] text-xs font-bold flex items-center justify-center mb-3">
                      0{idx + 1}
                    </span>
                    <h4 className="text-xs font-bold text-[#180D26] mb-1.5">{val.title}</h4>
                    <p className="text-[11px] text-[#5B4870] leading-relaxed">{val.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Direct Lecture CTA */}
            <div className="p-6 rounded-3xl bg-white border border-[#A855F7]/25 shadow-md flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h4 className="text-sm font-bold text-[#180D26]">정원호 대표 1:1 실습 코칭 신청</h4>
                <p className="text-xs text-[#5B4870] mt-0.5">오직 헤어디자이너를 위한 60분 실습과정 클래스</p>
              </div>
              <button
                onClick={onOpenAcademy}
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#9333EA] to-[#DB2777] text-white text-xs font-bold shadow-md shadow-pink-900/20 whitespace-nowrap cursor-pointer hover:opacity-95 transition-opacity"
              >
                실습 아카데미 안내 보기
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
