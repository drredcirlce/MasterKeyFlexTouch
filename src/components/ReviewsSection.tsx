import React, { useState } from 'react';
import { Review } from '../types';
import { Star, MessageSquare, Quote, Sparkles, UserCheck, Heart } from 'lucide-react';

interface ReviewsSectionProps {
  reviews: Review[];
}

export const ReviewsSection: React.FC<ReviewsSectionProps> = ({ reviews }) => {
  const [filterRole, setFilterRole] = useState<'all' | 'customer' | 'director'>('all');

  const filteredReviews = filterRole === 'all'
    ? reviews
    : reviews.filter((r) => r.authorRole === filterRole);

  return (
    <section id="reviews" className="scroll-mt-20 sm:scroll-mt-24 py-16 lg:py-24 border-b border-[var(--border)] relative bg-[var(--bg)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--gold)]/10 border border-[var(--gold)]/30 text-[var(--gold)] text-xs font-bold mb-3">
            <MessageSquare className="w-3.5 h-3.5 text-[var(--gold)]" />
            <span>REAL VERIFIED EXPERIENCES</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-serif-luxury mb-3">
            고객과 원장님이 증명하는
            <span className="block mt-1 text-gold-gradient">
              즉각적인 체감과 매출 혁신
            </span>
          </h2>
          <p className="text-sm sm:text-base text-[var(--text-muted)] font-light">
            시술 즉시 느껴지는 압도적인 가벼움과 살롱 원장님의 객단가 2배 상승 실화
          </p>
        </div>

        {/* Tab Filters */}
        <div className="flex justify-center gap-2 mb-10">
          <button
            onClick={() => setFilterRole('all')}
            className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              filterRole === 'all'
                ? 'bg-gold-gradient text-stone-950 shadow-md shadow-[var(--gold)]/20 font-bold'
                : 'bg-[#121212] text-[var(--text-muted)] hover:text-white border border-[var(--border)]'
            }`}
          >
            전체 생생 후기 ({reviews.length})
          </button>
          <button
            onClick={() => setFilterRole('customer')}
            className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              filterRole === 'customer'
                ? 'bg-gold-gradient text-stone-950 shadow-md shadow-[var(--gold)]/20 font-bold'
                : 'bg-[#121212] text-[var(--text-muted)] hover:text-white border border-[var(--border)]'
            }`}
          >
            시술 고객 리얼 후기
          </button>
          <button
            onClick={() => setFilterRole('director')}
            className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              filterRole === 'director'
                ? 'bg-gold-gradient text-stone-950 shadow-md shadow-[var(--gold)]/20 font-bold'
                : 'bg-[#121212] text-[var(--text-muted)] hover:text-white border border-[var(--border)]'
            }`}
          >
            헤어살롱 원장님 도입 후기
          </button>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReviews.map((rev) => (
            <div
              key={rev.id}
              className={`p-6 rounded-2xl border flex flex-col justify-between transition-all duration-300 ${
                rev.authorRole === 'director'
                  ? 'bg-gradient-to-b from-[#18150c] via-[#121212] to-[#0d0d0d] border-[var(--gold)]/50 shadow-lg shadow-[var(--gold)]/5'
                  : 'bg-[#121212] border-[var(--border)] hover:border-[var(--gold)]/30'
              }`}
            >
              <div>
                {/* Rating & Author Header */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[var(--gold)] text-[var(--gold)]" />
                    ))}
                  </div>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                    rev.authorRole === 'director'
                      ? 'bg-[var(--gold)] text-stone-950 font-bold'
                      : 'bg-[#1c1c1c] text-slate-300 border border-[var(--border)]'
                  }`}>
                    {rev.authorRole === 'director' ? '원장님 도입 수기' : '고객 시술 후기'}
                  </span>
                </div>

                {/* Highlight Quote */}
                <h4 className="text-sm sm:text-base font-bold text-white mb-2 leading-snug">
                  "{rev.highlight}"
                </h4>

                {/* Content */}
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  {rev.content}
                </p>
              </div>

              {/* Footer Meta */}
              <div className="pt-4 border-t border-[var(--border)]">
                <div className="flex items-center justify-between text-xs mb-2">
                  <span className="font-bold text-slate-200">{rev.authorName}</span>
                  <span className="text-[var(--text-muted)] text-[11px]">{rev.date}</span>
                </div>
                <div className="text-[11px] text-[var(--gold)] truncate mb-2">
                  {rev.salonName} · {rev.programName}
                </div>

                {/* Tag pills */}
                <div className="flex items-center gap-1.5 flex-wrap">
                  {rev.tags.map((t, idx) => (
                    <span key={idx} className="text-[10px] px-2 py-0.5 rounded bg-[#1c1c1c] text-[var(--text-muted)] border border-[#262626]">
                      #{t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
