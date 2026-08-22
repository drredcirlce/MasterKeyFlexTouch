import React, { useState } from 'react';
import { FAQ_ITEMS } from '../data/mockData';
import { HelpCircle, ChevronDown, ChevronUp, Sparkles, MessageCircle, Phone } from 'lucide-react';

interface FaqSectionProps {
  onOpenAcademy: () => void;
  onOpenReservation: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({
  onOpenAcademy,
  onOpenReservation,
}) => {
  const [openId, setOpenId] = useState<string>('faq-1');
  const [faqCategory, setFaqCategory] = useState<'all' | 'customer' | 'director' | 'fascia'>('all');

  const filteredFaqs = faqCategory === 'all'
    ? FAQ_ITEMS
    : FAQ_ITEMS.filter((f) => f.category === faqCategory);

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? '' : id);
  };

  return (
    <section id="faq" className="scroll-mt-20 sm:scroll-mt-24 py-16 lg:py-24 border-b border-[var(--border)] relative bg-[var(--bg)]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--gold)]/10 border border-[var(--gold)]/30 text-[var(--gold)] text-xs font-bold mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-[var(--gold)]" />
            <span>FREQUENTLY ASKED QUESTIONS</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-serif-luxury mb-3">
            자주 묻는 질문 (FAQ)
          </h2>
          <p className="text-sm sm:text-base text-[var(--text-muted)] font-light">
            시술 예약, 한의학적 근막 원리, 원장님 정기 교육에 대해 궁금하신 점을 확인하세요.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center gap-2 mb-8 overflow-x-auto pb-2">
          <button
            onClick={() => setFaqCategory('all')}
            className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
              faqCategory === 'all'
                ? 'bg-gold-gradient text-stone-950 font-bold shadow-md shadow-[var(--gold)]/20'
                : 'bg-[#121212] text-[var(--text-muted)] border border-[var(--border)] hover:text-white'
            }`}
          >
            전체 질문
          </button>
          <button
            onClick={() => setFaqCategory('customer')}
            className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
              faqCategory === 'customer'
                ? 'bg-gold-gradient text-stone-950 font-bold shadow-md shadow-[var(--gold)]/20'
                : 'bg-[#121212] text-[var(--text-muted)] border border-[var(--border)] hover:text-white'
            }`}
          >
            일반 고객 시술 문의
          </button>
          <button
            onClick={() => setFaqCategory('director')}
            className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
              faqCategory === 'director'
                ? 'bg-gold-gradient text-stone-950 font-bold shadow-md shadow-[var(--gold)]/20'
                : 'bg-[#121212] text-[var(--text-muted)] border border-[var(--border)] hover:text-white'
            }`}
          >
            원장님 교육 & 가맹 문의
          </button>
          <button
            onClick={() => setFaqCategory('fascia')}
            className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
              faqCategory === 'fascia'
                ? 'bg-gold-gradient text-stone-950 font-bold shadow-md shadow-[var(--gold)]/20'
                : 'bg-[#121212] text-[var(--text-muted)] border border-[var(--border)] hover:text-white'
            }`}
          >
            근막 & 림프 해부학 원리
          </button>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="rounded-xl bg-[#121212] border border-[var(--border)] overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-3 text-slate-200 hover:text-white transition-colors cursor-pointer"
                >
                  <span className="text-sm sm:text-base font-bold flex items-center gap-2.5">
                    <span className="w-5 h-5 rounded bg-[var(--gold)]/20 text-[var(--gold)] text-xs flex items-center justify-center font-bold shrink-0">
                      Q
                    </span>
                    {faq.question}
                  </span>
                  {isOpen ? (
                    <ChevronUp className="w-4 h-4 text-[var(--gold)] shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-[var(--text-muted)] shrink-0" />
                  )}
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 border-t border-[var(--border)] text-xs sm:text-sm text-slate-300 leading-relaxed bg-[#0c0c0c] animate-in fade-in duration-150">
                    <div className="flex items-start gap-2.5">
                      <span className="w-5 h-5 rounded bg-[#1c1c1c] text-[var(--gold)] text-xs flex items-center justify-center font-bold shrink-0 mt-0.5">
                        A
                      </span>
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Quick Consultation Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-[#18150c] via-[#121212] to-[#0c0c0c] border border-[var(--gold)]/40 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="text-base font-bold text-white mb-1">
              더 자세한 상담이나 맞춤 안내가 필요하신가요?
            </h4>
            <p className="text-xs text-[var(--text-muted)]">
              (주)케이메디플러스 본사 전문 상담팀이 친절하고 신속하게 안내해 드립니다.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="tel:1544-7890"
              className="px-4 py-2.5 rounded-xl bg-[#1c1c1c] hover:bg-[#262626] text-[var(--gold)] text-xs font-bold border border-[var(--gold)]/30 flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>전화 1544-7890</span>
            </a>
            <button
              onClick={onOpenAcademy}
              className="px-4 py-2.5 rounded-xl bg-gold-gradient hover:opacity-90 text-stone-950 text-xs font-bold shadow-md cursor-pointer"
            >
              원장님 교육 접수
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
