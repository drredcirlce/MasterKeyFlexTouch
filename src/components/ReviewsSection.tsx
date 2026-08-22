import React from 'react';
import { Review } from '../types';
import {
  Star,
  CheckCircle2,
  Quote,
  Heart,
  TrendingUp,
  UserCheck,
  Smile
} from 'lucide-react';

interface ReviewsSectionProps {
  reviews: Review[];
}

export const ReviewsSection: React.FC<ReviewsSectionProps> = ({ reviews }) => {
  return (
    <section id="reviews" className="scroll-mt-20 sm:scroll-mt-24 py-16 lg:py-24 border-b border-[#A855F7]/15 relative bg-[#FAF7FD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="hero-badge-dark inline-flex items-center gap-2 mb-3">
            <Star className="w-3.5 h-3.5 text-[#DB2777]" />
            <span>VERIFIED TESTIMONIALS & REVENUE PROOF</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-[#180D26] font-serif-luxury mb-4">
            원장님 매출 혁신과 고객 감탄을 증명하는
            <span className="block mt-1 text-beauty-gradient">
              가맹 원장님 & 실제 고객 100% 리얼 후기
            </span>
          </h2>
          <p className="text-sm sm:text-base text-[#5B4870]">
            시술 직후 고객이 체감한 놀라운 가벼움과, 가맹 원장님들의 객단가 상승 및 손목 피로도 제로 성공 수기를 확인하세요.
          </p>
        </div>

        {/* Reviews Grid (No Tabs - Showing both Director & Customer Testimonials) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {reviews.map((review) => {
            const isDirector = review.authorRole === 'director';
            return (
              <div
                key={review.id}
                className="p-6 rounded-3xl bg-white border border-[#A855F7]/20 hover:border-[#DB2777]/50 shadow-md hover:shadow-xl transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Review Header: User Info & Role Badge */}
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-bold text-sm text-[#180D26]">{review.authorName}</span>
                        <span
                          className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                            isDirector
                              ? 'bg-[#1F0D33] text-[#F472B6] border border-[#9333EA]/30'
                              : 'bg-[#FCE7F3] text-[#BE185D] border border-[#F472B6]/40'
                          }`}
                        >
                          {isDirector ? '가맹 원장님 수기' : '실제 시술 고객'}
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
                    <span className="text-[11px] font-semibold text-[#7E22CE] bg-[#FAF7FD] px-2.5 py-1 rounded-md border border-[#A855F7]/20 inline-flex items-center gap-1">
                      {isDirector ? (
                        <TrendingUp className="w-3 h-3 text-[#DB2777]" />
                      ) : (
                        <Heart className="w-3 h-3 text-[#BE185D]" />
                      )}
                      <span>{review.programName}</span>
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
            );
          })}
        </div>

        {/* Bottom Academy Link for Directors */}
        <div className="text-center">
          <a
            href="#academy"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#9333EA] to-[#DB2777] text-white text-xs sm:text-sm font-bold shadow-md shadow-pink-900/20 hover:opacity-95 transition-all"
          >
            <UserCheck className="w-4 h-4" />
            <span>나도 60분 실습으로 우리 샵에 도입하기</span>
          </a>
        </div>
      </div>
    </section>
  );
};
