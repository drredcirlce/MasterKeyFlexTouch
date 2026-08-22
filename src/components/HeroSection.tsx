import React from 'react';
import {
  Sparkles,
  Award,
  ShieldCheck,
  ArrowRight,
  TrendingUp,
  MapPin,
  Smile,
  HeartPulse,
  Zap,
  GraduationCap,
  Clock,
  CheckCircle2,
  Lock
} from 'lucide-react';

interface HeroSectionProps {
  onOpenReservation?: () => void;
  onOpenAcademy: () => void;
  onSelectProgram: (programId: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenAcademy,
  onSelectProgram,
}) => {
  return (
    <section
      id="brand-story"
      className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-[#A855F7]/15 bg-gradient-to-b from-[#FAF7FD] via-[#F6EFFC] to-[#FAF7FD]"
    >
      {/* Background Subtle Gradient Blobs & Patterns */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] pointer-events-none overflow-hidden z-0">
        <div className="absolute top-10 left-1/4 w-96 h-96 rounded-full bg-gradient-to-br from-[#E9D5FF]/60 to-[#FCE7F3]/40 blur-3xl opacity-80" />
        <div className="absolute top-32 right-1/4 w-96 h-96 rounded-full bg-gradient-to-bl from-[#FCE7F3]/70 to-[#F3E8FC]/50 blur-3xl opacity-80" />
        <div className="absolute inset-0 mock-map-grid opacity-30" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Badges & Medical Certification */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-6">
          <div className="hero-badge-dark flex items-center gap-1.5 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#DB2777]" />
            <span>HANYEONG MEDICINIAL CLINICAL MASTERPIECE</span>
          </div>
          <div className="inline-flex items-center gap-1 text-[11px] font-bold px-3 py-1 rounded-full bg-[#1F0D33] text-[#F3E8FC] border border-[#9333EA]/40 shadow-sm">
            <ShieldCheck className="w-3.5 h-3.5 text-[#F472B6]" />
            <span>(주)케이메디플러스 공식 인증 테크닉</span>
          </div>
        </div>

        {/* Main Headline for Salon Directors (No Audience Toggle Tabs) */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#DB2777] block mb-2">
            FOR SALON DIRECTORS & HAIR DESIGNERS
          </span>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#180D26] leading-[1.2] font-serif-luxury mb-5">
            헤어살롱의 메디뷰티 전문성을 완성하고
            <span className="block mt-2 text-beauty-gradient">
              도구 없이 5분이면 고객이 체감하는 퀵 테크닉
            </span>
          </h1>
          <p className="text-base sm:text-lg text-[#5B4870] font-normal leading-relaxed max-w-3xl mx-auto">
            한의사 정원호 대표 직강 60분 실습과정으로 디자이너 손목 피로도 0%, 객단가 35% 상승, 고객 재방문율 94%를 실현하는 헤어살롱 전용 독점 솔루션입니다.
          </p>
        </div>

        {/* 2-Column Core Business Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch mb-12">
          {/* Left Salon Director Opportunity */}
          <div className="lg:col-span-7 rounded-3xl bg-white border border-[#A855F7]/20 p-6 sm:p-9 shadow-md flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#F3E8FC] text-[#7E22CE] border border-[#A855F7]/40">
                  SALON GROWTH & REVENUE
                </span>
                <span className="text-xs text-[#5B4870]">오직 헤어디자이너를 위한 60분 실습과정</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#180D26] font-serif-luxury mb-4 leading-snug">
                "손목에 힘을 주지 않아도
                <br />
                고객이 감탄하는 5분의 기적"
              </h3>
              <p className="text-sm text-[#5B4870] leading-relaxed mb-6">
                샴푸대에서, 커트 자리에서 단 5분의 테크닉만으로 고객 10명 중 8명의 케어권 결제를 이끌어냅니다. 지렛대 원리와 한의학 근막 이완으로 디자이너 손목 피로도 0%를 달성합니다.
              </p>

              {/* 3 Major Salon Benefits */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
                <div className="p-3.5 rounded-2xl bg-[#FAF7FD] border border-[#A855F7]/15">
                  <TrendingUp className="w-5 h-5 text-[#9333EA] mb-1.5" />
                  <h4 className="text-xs font-bold text-[#180D26]">객단가 35% 상승</h4>
                  <p className="text-[11px] text-[#5B4870] mt-0.5">5분 추가로 높은 부가가치 창출</p>
                </div>
                <div className="p-3.5 rounded-2xl bg-[#FAF7FD] border border-[#A855F7]/15">
                  <Smile className="w-5 h-5 text-[#DB2777] mb-1.5" />
                  <h4 className="text-xs font-bold text-[#180D26]">피로도 ZERO</h4>
                  <p className="text-[11px] text-[#5B4870] mt-0.5">지렛대 원리로 하루 10명도 거뜬</p>
                </div>
                <div className="p-3.5 rounded-2xl bg-[#FAF7FD] border border-[#A855F7]/15">
                  <Lock className="w-5 h-5 text-[#BE185D] mb-1.5" />
                  <h4 className="text-xs font-bold text-[#180D26]">반경 상권 보호</h4>
                  <p className="text-[11px] text-[#5B4870] mt-0.5">지역 독점 가맹점 영업권 보장</p>
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={onOpenAcademy}
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#9333EA] via-[#A855F7] to-[#DB2777] text-white font-bold text-xs sm:text-sm shadow-md shadow-pink-900/20 hover:opacity-95 transition-all flex items-center gap-2 cursor-pointer"
              >
                <GraduationCap className="w-4 h-4" />
                <span>60분 실습 아카데미 신청하기</span>
              </button>
              <a
                href="#salons"
                className="px-5 py-3.5 rounded-xl bg-[#FAF7FD] hover:bg-[#F3E8FC] text-[#7E22CE] text-xs font-bold border border-[#A855F7]/25 transition-colors flex items-center gap-1.5"
              >
                <MapPin className="w-4 h-4 text-[#DB2777]" />
                <span>지역 독점 상권 확보 현황 보기</span>
              </a>
            </div>
          </div>

          {/* Right Academy Schedule & Direct Mentoring Box */}
          <div className="lg:col-span-5 rounded-3xl bg-[#1F0D33] border border-[#9333EA]/30 p-6 sm:p-8 text-white shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#9333EA]/30 mb-6">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-[#F472B6]" />
                  <span className="text-xs font-bold uppercase tracking-wider text-[#F3E8FC]">
                    60-MIN HANDS-ON CLASS
                  </span>
                </div>
                <span className="text-xs text-[#F472B6] font-bold">기수별 10명 한정</span>
              </div>

              <div className="space-y-3 mb-6 text-xs">
                <div className="p-3.5 rounded-2xl bg-[#291342] border border-[#9333EA]/30">
                  <div className="flex items-center justify-between font-bold mb-1 text-white">
                    <span>1기 주말 집중반 (토요일)</span>
                    <span className="text-[#F472B6]">14:00 ~ 15:00 (60분)</span>
                  </div>
                  <p className="text-[#E9D5FF] text-[11px]">
                    모듈 1·2·3 핸즈온 실습 및 고객 상담 티케팅 화법
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl bg-[#291342] border border-[#9333EA]/30">
                  <div className="flex items-center justify-between font-bold mb-1 text-white">
                    <span>1기 평일 정규반 (화요일)</span>
                    <span className="text-[#F472B6]">20:00 ~ 21:00 (60분)</span>
                  </div>
                  <p className="text-[#E9D5FF] text-[11px]">
                    정원호 대표 1:1 밀착 코칭 및 손끝 그립 교정
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#291342] border border-[#9333EA]/30 space-y-2">
                <div className="flex items-center gap-1.5 text-xs font-bold text-[#F472B6]">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>수료 원장님 즉시 제공 혜택</span>
                </div>
                <p className="text-[11px] text-[#E9D5FF] leading-relaxed">
                  수료 즉시 <strong className="text-white">공식 인증 현판, 수료증, 고객 상담 차트 500부 및 온라인 복습 라운지</strong>가 무상 지급됩니다.
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-[#9333EA]/30 flex items-center justify-between text-xs">
              <span className="text-[#E9D5FF]">교육장: 서울아카데미</span>
              <span className="text-[#F472B6] font-bold">문의: 02-734-1075</span>
            </div>
          </div>
        </div>

        {/* 4 Core Key Metrics Banner */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-8">
          <div className="p-4 rounded-2xl bg-white border border-[#A855F7]/15 shadow-sm text-center">
            <div className="text-xl sm:text-2xl font-bold font-serif-luxury text-beauty-gradient mb-1">
              +35%
            </div>
            <p className="text-xs text-[#5B4870]">살롱 평균 객단가 즉각 상승</p>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-[#A855F7]/15 shadow-sm text-center">
            <div className="text-xl sm:text-2xl font-bold font-serif-luxury text-beauty-gradient mb-1">
              98.6%
            </div>
            <p className="text-xs text-[#5B4870]">고객 1회 체험 직후 만족도</p>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-[#A855F7]/15 shadow-sm text-center">
            <div className="text-xl sm:text-2xl font-bold font-serif-luxury text-beauty-gradient mb-1">
              5분
            </div>
            <p className="text-xs text-[#5B4870]">도구 없이 손끝으로 완성하는 퀵케어</p>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-[#A855F7]/15 shadow-sm text-center">
            <div className="text-xl sm:text-2xl font-bold font-serif-luxury text-beauty-gradient mb-1">
              100% 직강
            </div>
            <p className="text-xs text-[#5B4870]">한의사 정원호 대표 1:1 핸즈온</p>
          </div>
        </div>

        {/* 2 Core Programs Quick Strip for Salon Directors */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div
            onClick={() => onSelectProgram('neck-shoulder')}
            className="p-4 sm:p-5 rounded-2xl bg-white border border-[#A855F7]/15 hover:border-[#DB2777]/50 hover:shadow-md transition-all cursor-pointer flex items-center justify-between group"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#FCE7F3] to-[#F3E8FC] border border-[#F472B6]/40 flex items-center justify-center text-[#BE185D] group-hover:scale-105 transition-transform shrink-0">
                <HeartPulse className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="text-sm font-bold text-[#180D26] group-hover:text-[#BE185D] transition-colors">
                    5분 넥숄더플렉스터치 (살롱 도입 1위)
                  </h4>
                  <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-[#FCE7F3] text-[#BE185D]">
                    5분
                  </span>
                </div>
                <p className="text-xs text-[#5B4870] mt-0.5">
                  1회 15,000원 정찰제 세팅 · 샴푸석/체어 결합으로 즉각적인 승모근 이완
                </p>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-[#8A78A0] group-hover:text-[#BE185D] group-hover:translate-x-1 transition-all shrink-0 ml-2" />
          </div>

          <div
            onClick={() => onSelectProgram('fascia-lifting')}
            className="p-4 sm:p-5 rounded-2xl bg-white border border-[#A855F7]/15 hover:border-[#9333EA]/50 hover:shadow-md transition-all cursor-pointer flex items-center justify-between group"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#F3E8FC] to-[#FAF7FD] border border-[#A855F7]/40 flex items-center justify-center text-[#7E22CE] group-hover:scale-105 transition-transform shrink-0">
                <Zap className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="text-sm font-bold text-[#180D26] group-hover:text-[#7E22CE] transition-colors">
                    15분 근막재건 리프팅 (프리미엄 코스)
                  </h4>
                  <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-[#F3E8FC] text-[#7E22CE]">
                    15분
                  </span>
                </div>
                <p className="text-xs text-[#5B4870] mt-0.5">
                  1회 30,000원 정찰제 세팅 · 모상건막 견인 및 안면 V라인 윤곽 리셋
                </p>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-[#8A78A0] group-hover:text-[#7E22CE] group-hover:translate-x-1 transition-all shrink-0 ml-2" />
          </div>
        </div>
      </div>
    </section>
  );
};
