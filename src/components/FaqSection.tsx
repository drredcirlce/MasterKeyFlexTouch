import React, { useState } from 'react';
import { FAQ_ITEMS } from '../data/mockData';
import {
  HelpCircle,
  ChevronDown,
  ChevronUp,
  Sparkles,
  Phone,
  Calendar,
  GraduationCap,
  MessageCircle
} from 'lucide-react';

interface FaqSectionProps {
  onOpenAcademy: () => void;
  onOpenReservation: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({
  onOpenAcademy,
  onOpenReservation,
}) => {
  const [openIndices, setOpenIndices] = useState<number[]>([0, 1]); // first two open by default
  const [activeCategory, setActiveCategory] = useState<'all' | 'customer' | 'director'>('all');

  const toggleAccordion = (index: number) => {
    setOpenIndices((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const filteredFaqs =
    activeCategory === 'all'
      ? FAQ_ITEMS
      : FAQ_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section id="faq" className="scroll-mt-20 sm:scroll-mt-24 py-16 lg:py-24 border-b border-[#A855F7]/15 relative bg-[#FAF7FD]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="hero-badge-dark inline-flex items-center gap-2 mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-[#DB2777]" />
            <span>FREQUENTLY ASKED QUESTIONS</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-[#180D26] font-serif-luxury mb-4">
            자주 묻는 질문 (FAQ)
          </h2>
          <p className="text-sm sm:text-base text-[#5B4870]">
            마스터키 플렉스터치 시술 및 원장님 아카데미 교육에 대해 가장 궁금해하시는 질문을 모았습니다.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center mb-8">
          <div className="p-1 rounded-2xl bg-white border border-[#A855F7]/25 shadow-sm flex items-center">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeCategory === 'all'
                  ? 'bg-gradient-to-r from-[#9333EA] to-[#DB2777] text-white shadow-md shadow-pink-900/20'
                  : 'text-[#5B4870] hover:text-[#180D26]'
              }`}
            >
              전체 질문 ({FAQ_ITEMS.length})
            </button>
            <button
              onClick={() => setActiveCategory('customer')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeCategory === 'customer'
                  ? 'bg-gradient-to-r from-[#9333EA] to-[#DB2777] text-white shadow-md shadow-pink-900/20'
                  : 'text-[#5B4870] hover:text-[#180D26]'
              }`}
            >
              시술 고객 FAQ
            </button>
            <button
              onClick={() => setActiveCategory('director')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeCategory === 'director'
                  ? 'bg-gradient-to-r from-[#9333EA] to-[#DB2777] text-white shadow-md shadow-pink-900/20'
                  : 'text-[#5B4870] hover:text-[#180D26]'
              }`}
            >
              원장님 교육 & 가맹 FAQ
            </button>
          </div>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5 mb-12">
          {filteredFaqs.map((faq, idx) => {
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
                      Q
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

        {/* Direct Help Call Box */}
        <div className="p-6 rounded-3xl bg-white border border-[#A855F7]/25 shadow-md flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="text-base font-bold text-[#180D26]">더 궁금하신 점이 있으신가요?</h4>
            <p className="text-xs text-[#5B4870] mt-0.5">
              실시간 1:1 카카오 채널 및 전문 상담사가 친절하게 안내해 드립니다.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={onOpenReservation}
              className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#9333EA] to-[#DB2777] text-white text-xs font-bold shadow-md shadow-pink-900/20"
            >
              시술 예약 문의
            </button>
            <button
              onClick={onOpenAcademy}
              className="px-4 py-2.5 rounded-xl bg-[#FAF7FD] hover:bg-[#F3E8FC] text-[#7E22CE] text-xs font-bold border border-[#A855F7]/25"
            >
              원장 교육 문의
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
