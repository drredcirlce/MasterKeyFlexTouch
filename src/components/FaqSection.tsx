import React, { useState } from 'react';
import { FAQ_ITEMS } from '../data/mockData';
import {
  HelpCircle,
  ChevronDown,
  ChevronUp,
  Phone,
  GraduationCap,
  Building
} from 'lucide-react';

interface FaqSectionProps {
  onOpenAcademy: () => void;
  onOpenReservation?: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({
  onOpenAcademy,
}) => {
  const [openIndices, setOpenIndices] = useState<number[]>([0, 1, 2]); // first three open by default

  const toggleAccordion = (index: number) => {
    setOpenIndices((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <section id="faq" className="scroll-mt-20 sm:scroll-mt-24 py-16 lg:py-24 border-b border-[#A855F7]/15 relative bg-[#FAF7FD]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="hero-badge-dark inline-flex items-center gap-2 mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-[#DB2777]" />
            <span>DIRECTOR FAQ & CONSULTATION</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-[#180D26] font-serif-luxury mb-4">
            원장님 자주 묻는 질문 (FAQ)
            <span className="block mt-1 text-beauty-gradient">
              교육 이수, 시술 피로도, 상권 보호 궁금증 해결
            </span>
          </h2>
          <p className="text-sm sm:text-base text-[#5B4870]">
            마스터키 플렉스터치 60분 실습 아카데미 및 살롱 도입과 관련하여 원장님들께서 가장 많이 문의하시는 핵심 질문들입니다.
          </p>
        </div>

        {/* Accordion List (No Filter Tabs) */}
        <div className="space-y-3.5 mb-12">
          {FAQ_ITEMS.map((faq, idx) => {
            const isOpen = openIndices.includes(idx);
            return (
              <div
                key={faq.id}
                className="rounded-2xl bg-white border border-[#A855F7]/20 shadow-sm overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-[#FAF7FD] transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-lg bg-[#FCE7F3] text-[#BE185D] text-xs font-bold flex items-center justify-center shrink-0">
                      Q{idx + 1}
                    </span>
                    <span className="text-sm sm:text-base font-bold text-[#180D26]">
                      {faq.question}
                    </span>
                  </div>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-[#7E22CE] shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-[#8A78A0] shrink-0" />
                  )}
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 border-t border-[#A855F7]/15 bg-[#FAF7FD]/50 animate-in fade-in duration-150">
                    <p className="text-xs sm:text-sm text-[#5B4870] leading-relaxed pl-9">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Direct Help Call Box for Directors */}
        <div className="p-6 rounded-3xl bg-white border border-[#A855F7]/25 shadow-md flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="text-base font-bold text-[#180D26]">원장님 1:1 맞춤 교육 및 가맹 상담</h4>
            <p className="text-xs text-[#5B4870] mt-0.5">
              정원호 한의사 및 전담 교육팀이 살롱 상황에 최적화된 도입 솔루션을 안내해 드립니다.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <a
              href="tel:02-734-1075"
              className="px-4 py-2.5 rounded-xl bg-white text-[#7E22CE] border border-[#A855F7]/30 text-xs font-bold shadow-sm hover:bg-[#F3E8FC] flex items-center gap-1.5 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#DB2777]" />
              <span>02-734-1075</span>
            </a>
            <button
              onClick={onOpenAcademy}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#9333EA] to-[#DB2777] text-white text-xs font-bold shadow-md shadow-pink-900/20 hover:opacity-95 transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <GraduationCap className="w-3.5 h-3.5" />
              <span>60분 실습 신청</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
