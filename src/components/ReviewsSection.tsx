import React, { useState } from 'react';
import { Review } from '../types';
import {
  Star,
  Sparkles,
  CheckCircle2,
  Quote,
  Heart,
  MessageSquare,
  ThumbsUp,
  User
} from 'lucide-react';

interface ReviewsSectionProps {
  reviews: Review[];
}

export const ReviewsSection: React.FC<ReviewsSectionProps> = ({ reviews }) => {
  const [filter, setFilter] = useState<'all' | 'customer' | 'director'>('all');

  const filteredReviews =
    filter === 'all' ? reviews : reviews.filter((r) => r.authorRole === filter);

  return (
    <section id="reviews" className="scroll-mt-20 sm:scroll-mt-24 py-16 lg:py-24 border-b border-[#A855F7]/15 relative bg-[#FAF7FD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="hero-badge-dark inline-flex items-center gap-2 mb-3">
            <Star className="w-3.5 h-3.5 text-[#DB2777]" />
            <span>VERIFIED CLINICAL TESTIMONIALS</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-[#180D26] font-serif-luxury mb-4">
            실제 시술 고객 & 원장님들의
            <span className="block mt-1 text-beauty-gradient">
              100% 생생한 리얼 체감 후기
            </span>
          </h2>
          <p className="text-sm sm:text-base text-[#5B4870]">
            시술 즉시 목이 가벼워지고 얼굴 선이 살아나는 기적, 전국 가맹 살롱의 검증된 후기를 확인하세요.
          </p>
        </div>

        {/* Filter Toggle Buttons */}
        <div className="flex justify-center mb-10">
          <div className="p-1 rounded-2xl bg-white border border-[#A855F7]/25 shadow-sm flex items-center">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                filter === 'all'
                  ? 'bg-gradient-to-r from-[#9333EA] to-[#DB2777] text-white shadow-md shadow-pink-900/20'
                  : 'text-[#5B4870] hover:text-[#180D26]'
              }`}
            >
              전체 후기 ({reviews.length})
            </button>
            <button
              onClick={() => setFilter('customer')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                filter === 'customer'
                  ? 'bg-gradient-to-r from-[#9333EA] to-[#DB2777] text-white shadow-md shadow-pink-900/20'
                  : 'text-[#5B4870] hover:text-[#180D26]'
              }`}
            >
              시술 고객 리얼 후기
            </button>
            <button
              onClick={() => setFilter('director')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                filter === 'director'
                  ? 'bg-gradient-to-r from-[#9333EA] to-[#DB2777] text-white shadow-md shadow-pink-900/20'
                  : 'text-[#5B4870] hover:text-[#180D26]'
              }`}
            >
              수료 원장님 매장 후기
            </button>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredReviews.map((review) => (
            <div
              key={review.id}
              className="p-6 rounded-3xl bg-white border border-[#A855F7]/20 hover:border-[#DB2777]/50 shadow-md hover:shadow-xl transition-all flex flex-col justify-between"
            >
              <div>
                {/* Review Header: User Info & Rating */}
                <div className="flex items-start justify-between gap-2 mb-3">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-bold text-sm text-[#180D26]">{review.authorName}</span>
                      <span
                        className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                          review.authorRole === 'director'
                            ? 'bg-[#1F0D33] text-[#F472B6]'
                            : 'bg-[#FCE7F3] text-[#BE185D] border border-[#F472B6]/40'
                        }`}
                      >
                        {review.authorRole === 'director' ? '공인인증 원장' : '실제 시술 고객'}
                      </span>
                    </div>
                    <span className="text-xs text-[#5B4870]">{review.salonName}</span>
                  </div>

                  {/* Stars */}
                  <div className="flex items-center text-amber-500">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                </div>

                {/* Program Tag */}
                <div className="mb-3">
                  <span className="text-[11px] font-semibold text-[#7E22CE] bg-[#FAF7FD] px-2.5 py-1 rounded-md border border-[#A855F7]/20">
                    시술: {review.programName}
                  </span>
                </div>

                {/* Comment */}
                <p className="text-xs sm:text-sm text-[#5B4870] leading-relaxed mb-4">
                  "{review.content}"
                </p>

                {/* Highlight Quote Box */}
                <div className="p-3 rounded-2xl bg-[#FAF7FD] border border-[#A855F7]/15 text-xs text-[#BE185D] font-bold">
                  "{review.highlight}"
                </div>
              </div>

              {/* Review Footer */}
              <div className="pt-4 mt-4 border-t border-[#A855F7]/15 flex items-center justify-between text-xs text-[#8A78A0]">
                <span>{review.date}</span>
                <div className="flex items-center gap-1 text-[#7E22CE]">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>인증된 실제 후기</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
