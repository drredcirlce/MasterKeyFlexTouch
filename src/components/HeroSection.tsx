import React, { useState } from 'react';
import {
  Sparkles,
  Award,
  ShieldCheck,
  ArrowRight,
  Play,
  Calendar,
  CheckCircle2,
  Activity,
  HeartPulse,
  Brain,
  Compass,
  Star,
  Zap,
  TrendingUp,
  MapPin,
  Smile
} from 'lucide-react';

interface HeroSectionProps {
  onOpenReservation: () => void;
  onOpenAcademy: () => void;
  onSelectProgram: (programId: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenReservation,
  onOpenAcademy,
  onSelectProgram,
}) => {
  const [activeTab, setActiveTab] = useState<'customer' | 'director'>('customer');

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
            <span>한의학 근막 기반 프리미엄 메디뷰티</span>
          </div>
          <div className="inline-flex items-center gap-1 text-[11px] font-bold px-3 py-1 rounded-full bg-[#1F0D33] text-[#F3E8FC] border border-[#9333EA]/40 shadow-sm">
            <ShieldCheck className="w-3.5 h-3.5 text-[#F472B6]" />
            <span>(주)케이메디플러스 공식 인증 테크닉</span>
          </div>
        </div>

        {/* Main Headline */}
        <div className="text-center max-w-4xl mx-auto mb-8">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#180D26] leading-[1.2] font-serif-luxury mb-5">
            쇄골부터 두피까지,
            <span className="block mt-2 text-beauty-gradient">
              즉시 체감되는 가벼움과 리프팅
            </span>
          </h1>
          <p className="text-base sm:text-lg text-[#5B4870] font-normal leading-relaxed max-w-2xl mx-auto">
            정원호 한의사의 30년 임상 노하우를 미용인의 손끝으로 담아냈습니다.
            <br className="hidden sm:inline" />
            단 5분의 플렉스터치로 뭉친 승모근을 풀고 맑은 두피와 뚜렷한 페이스 라인을 완성합니다.
          </p>
        </div>

        {/* Audience Toggle (Customer vs Salon Director) */}
        <div className="flex justify-center mb-10">
          <div className="p-1 rounded-2xl bg-white border border-[#A855F7]/25 shadow-sm flex items-center max-w-md w-full">
            <button
              onClick={() => setActiveTab('customer')}
              className={`flex-1 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                activeTab === 'customer'
                  ? 'bg-gradient-to-r from-[#9333EA] to-[#DB2777] text-white shadow-md shadow-pink-900/20'
                  : 'text-[#5B4870] hover:text-[#180D26]'
              }`}
            >
              시술 고객님 (가맹점 & 예약)
            </button>
            <button
              onClick={() => setActiveTab('director')}
              className={`flex-1 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                activeTab === 'director'
                  ? 'bg-gradient-to-r from-[#9333EA] to-[#DB2777] text-white shadow-md shadow-pink-900/20'
                  : 'text-[#5B4870] hover:text-[#180D26]'
              }`}
            >
              헤어 원장님 (실습 교육 & 가맹)
            </button>
          </div>
        </div>

        {/* Dynamic Interactive Cards Depending on Selected Audience */}
        {activeTab === 'customer' ? (
          /* Customer Experience Card */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch mb-12">
            {/* Left Main Value Prop Card */}
            <div className="lg:col-span-7 rounded-3xl bg-white border border-[#A855F7]/20 p-6 sm:p-9 shadow-md flex flex-col justify-between relative overflow-hidden">
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#FCE7F3] text-[#BE185D] border border-[#F472B6]/40">
                    SIGNATURE EXPERIENCE
                  </span>
                  <span className="text-xs text-[#5B4870]">미용실 시술 중 5분 퀵케어</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#180D26] font-serif-luxury mb-4 leading-snug">
                  "커트·펌 하면서 목과 어깨가
                  <br />
                  거짓말처럼 가벼워졌어요"
                </h3>
                <p className="text-sm text-[#5B4870] leading-relaxed mb-6">
                  두피와 얼굴 처짐의 근본 원인은 쇄골과 승모근의 근막 유착입니다.
                  마스터키 플렉스터치는 한의학적 경락과 림프 순환 통로를 열어 즉각적인 붓기 완화와 두통 해소, 안면 리프팅을 선사합니다.
                </p>

                {/* 3 Core Points */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
                  <div className="p-3.5 rounded-2xl bg-[#FAF7FD] border border-[#A855F7]/15">
                    <HeartPulse className="w-5 h-5 text-[#DB2777] mb-1.5" />
                    <h4 className="text-xs font-bold text-[#180D26]">5분 넥숄더 퀵터치</h4>
                    <p className="text-[11px] text-[#5B4870] mt-0.5">승모근·목 결림 즉각 이완</p>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-[#FAF7FD] border border-[#A855F7]/15">
                    <Zap className="w-5 h-5 text-[#9333EA] mb-1.5" />
                    <h4 className="text-xs font-bold text-[#180D26]">근막재건 리프팅</h4>
                    <p className="text-[11px] text-[#5B4870] mt-0.5">두피 건막 당김 & 안면 탄력</p>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-[#FAF7FD] border border-[#A855F7]/15">
                    <Brain className="w-5 h-5 text-[#BE185D] mb-1.5" />
                    <h4 className="text-xs font-bold text-[#180D26]">뇌청소 두피 디톡스</h4>
                    <p className="text-[11px] text-[#5B4870] mt-0.5">두피 열감 배출 & 숙면 유도</p>
                  </div>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="relative z-10 flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={onOpenReservation}
                  className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#9333EA] via-[#A855F7] to-[#DB2777] text-white font-bold text-sm shadow-md shadow-pink-900/20 hover:opacity-95 transition-all flex items-center gap-2 cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>내 주변 공인 가맹 헤어샵 예약하기</span>
                </button>
                <a
                  href="#programs"
                  className="px-5 py-3.5 rounded-xl bg-[#FAF7FD] hover:bg-[#F3E8FC] text-[#7E22CE] text-xs font-bold border border-[#A855F7]/25 transition-colors"
                >
                  시술 프로그램 전체 보기
                </a>
              </div>
            </div>

            {/* Right Quick Stats & Before/After Highlight - Dark Medical Accent for Trust */}
            <div className="lg:col-span-5 rounded-3xl bg-[#1F0D33] border border-[#9333EA]/30 p-6 sm:p-8 text-white shadow-xl flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-[#9333EA]/30 mb-6">
                  <div className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-[#F472B6]" />
                    <span className="text-xs font-bold uppercase tracking-wider text-[#F3E8FC]">
                      CLINICAL SATISFACTION
                    </span>
                  </div>
                  <span className="text-xs text-[#E9D5FF] font-mono">N=1,240명 임상 검증</span>
                </div>

                <div className="space-y-4 mb-6">
                  <div>
                    <div className="flex justify-between text-xs font-bold mb-1">
                      <span className="text-[#F3E8FC]">시술 즉시 어깨·목 가벼움 체감</span>
                      <span className="text-[#F472B6]">99.2%</span>
                    </div>
                    <div className="w-full h-2 bg-[#2D1548] rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-[#A855F7] to-[#EC4899] rounded-full w-[99%]" />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-bold mb-1">
                      <span className="text-[#F3E8FC]">안면 붓기 감소 및 턱선 리프팅 체감</span>
                      <span className="text-[#F472B6]">96.8%</span>
                    </div>
                    <div className="w-full h-2 bg-[#2D1548] rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-[#A855F7] to-[#EC4899] rounded-full w-[96%]" />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-bold mb-1">
                      <span className="text-[#F3E8FC]">헤어 시술 시 재예약 의사</span>
                      <span className="text-[#F472B6]">98.5%</span>
                    </div>
                    <div className="w-full h-2 bg-[#2D1548] rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-[#A855F7] to-[#EC4899] rounded-full w-[98%]" />
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-[#291342] border border-[#9333EA]/30 text-xs">
                  <p className="text-[#E9D5FF] leading-relaxed italic">
                    "샴푸실에서 5분 받았는데 1시간 전신 마사지 받은 것보다 뒷목이 시원했습니다.
                    눈이 맑아지고 턱선이 쫙 올라붙는 느낌이에요!"
                  </p>
                  <div className="mt-2 text-right text-[11px] text-[#F472B6] font-semibold">
                    — 서울 강남구 도곡동 시술 고객 정○○ 님
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#9333EA]/30 flex items-center justify-between text-xs text-[#E9D5FF]">
                <span>전국 공인인증 마스터 헤어샵</span>
                <span className="font-bold text-white">전 지점 100% 한의학 수료 원장 시술</span>
              </div>
            </div>
          </div>
        ) : (
          /* Director Business Solution Card */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch mb-12">
            {/* Left Salon Director Opportunity */}
            <div className="lg:col-span-7 rounded-3xl bg-white border border-[#A855F7]/20 p-6 sm:p-9 shadow-md flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#F3E8FC] text-[#7E22CE] border border-[#A855F7]/40">
                    SALON REVENUE BOOST
                  </span>
                  <span className="text-xs text-[#5B4870]">살롱 원장님 전용 160분 실습 아카데미</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#180D26] font-serif-luxury mb-4 leading-snug">
                  "손목에 힘을 주지 않아도
                  <br />
                  고객이 감탄하는 5분의 기적"
                </h3>
                <p className="text-sm text-[#5B4870] leading-relaxed mb-6">
                  샴푸대에서, 커트 자리에서 단 5분의 테크닉만으로 객단가를 15,000원~30,000원 즉시 올릴 수 있습니다.
                  지렛대 원리와 한의학 근막 이완으로 디자이너 손목 피로도 0%를 달성합니다.
                </p>

                {/* 3 Major Salon Benefits */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
                  <div className="p-3.5 rounded-2xl bg-[#FAF7FD] border border-[#A855F7]/15">
                    <TrendingUp className="w-5 h-5 text-[#9333EA] mb-1.5" />
                    <h4 className="text-xs font-bold text-[#180D26]">객단가 2~3배 상승</h4>
                    <p className="text-[11px] text-[#5B4870] mt-0.5">펌/염색 시 80% 추가 결제</p>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-[#FAF7FD] border border-[#A855F7]/15">
                    <Smile className="w-5 h-5 text-[#DB2777] mb-1.5" />
                    <h4 className="text-xs font-bold text-[#180D26]">손목 피로도 0%</h4>
                    <p className="text-[11px] text-[#5B4870] mt-0.5">근력 대신 지렛대 체중 원리</p>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-[#FAF7FD] border border-[#A855F7]/15">
                    <MapPin className="w-5 h-5 text-[#BE185D] mb-1.5" />
                    <h4 className="text-xs font-bold text-[#180D26]">공식 인증점 맵 등록</h4>
                    <p className="text-[11px] text-[#5B4870] mt-0.5">홈페이지 상단 공식 인증 노출</p>
                  </div>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={onOpenAcademy}
                  className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#9333EA] via-[#A855F7] to-[#DB2777] text-white font-bold text-sm shadow-md shadow-pink-900/20 hover:opacity-95 transition-all flex items-center gap-2 cursor-pointer"
                >
                  <Award className="w-4 h-4" />
                  <span>원장님 실습 아카데미 신청하기 (월/화 저녁 8시)</span>
                </button>
                <a
                  href="#director-signup"
                  className="px-5 py-3.5 rounded-xl bg-[#FAF7FD] hover:bg-[#F3E8FC] text-[#7E22CE] text-xs font-bold border border-[#A855F7]/25 transition-colors"
                >
                  원장 회원가입 & 가맹 등록
                </a>
              </div>
            </div>

            {/* Right Academy Schedule & Direct Mentoring Box - Dark Medical Accent for Authority */}
            <div className="lg:col-span-5 rounded-3xl bg-[#1F0D33] border border-[#9333EA]/30 p-6 sm:p-8 text-white shadow-xl flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-[#9333EA]/30 mb-6">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-[#F472B6]" />
                    <span className="text-xs font-bold uppercase tracking-wider text-[#F3E8FC]">
                      DIRECTOR TRAINING SCHEDULE
                    </span>
                  </div>
                  <span className="text-xs text-[#F472B6] font-bold">소수정예 6명 선착순</span>
                </div>

                <div className="space-y-3 mb-6 text-xs">
                  <div className="p-3.5 rounded-2xl bg-[#291342] border border-[#9333EA]/30">
                    <div className="flex items-center justify-between font-bold mb-1 text-white">
                      <span>매주 월요일 정규반 (야간)</span>
                      <span className="text-[#F472B6]">저녁 8:00 ~ 10:40</span>
                    </div>
                    <p className="text-[#E9D5FF] text-[11px]">
                      이론 100분 (근막·림프 해부학) + 1:1 손끝 압력 교정 60분
                    </p>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-[#291342] border border-[#9333EA]/30">
                    <div className="flex items-center justify-between font-bold mb-1 text-white">
                      <span>매주 화요일 정규반 (야간)</span>
                      <span className="text-[#F472B6]">저녁 8:00 ~ 10:40</span>
                    </div>
                    <p className="text-[#E9D5FF] text-[11px]">
                      샴푸대·좌석 실전 응용 + 살롱 상담 화법 및 객단가 세일즈 툴
                    </p>
                  </div>
                </div>

                <p className="text-xs text-[#E9D5FF] leading-relaxed">
                  * 수료 즉시 <strong className="text-[#F472B6]">(주)케이메디플러스 공식 인증 현판</strong>과 홍보 마케팅 키트, 온라인 가맹점 등록이 무료 지원됩니다.
                </p>
              </div>

              <div className="pt-4 border-t border-[#9333EA]/30 flex items-center justify-between text-xs">
                <span className="text-[#E9D5FF]">교육장: 서울 당산 메디컬센터 4F</span>
                <span className="text-[#F472B6] font-bold">원장 직통: 1544-7890</span>
              </div>
            </div>
          </div>
        )}

        {/* 3 Fast Navigation Programs Strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div
            onClick={() => onSelectProgram('neck-shoulder-flextouch')}
            className="p-4 sm:p-5 rounded-2xl bg-white border border-[#A855F7]/15 hover:border-[#DB2777]/50 hover:shadow-md transition-all cursor-pointer flex items-center justify-between group"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#FCE7F3] to-[#F3E8FC] border border-[#F472B6]/40 flex items-center justify-center text-[#BE185D] group-hover:scale-105 transition-transform">
                <HeartPulse className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#180D26] group-hover:text-[#BE185D] transition-colors">
                  넥숄더 플렉스터치 (5분)
                </h4>
                <p className="text-[11px] text-[#5B4870]">1회 15,000원 · 승모근 즉시 이완</p>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-[#8A78A0] group-hover:text-[#BE185D] group-hover:translate-x-1 transition-all" />
          </div>

          <div
            onClick={() => onSelectProgram('fascia-reconstruction-lifting')}
            className="p-4 sm:p-5 rounded-2xl bg-white border border-[#A855F7]/15 hover:border-[#9333EA]/50 hover:shadow-md transition-all cursor-pointer flex items-center justify-between group"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#F3E8FC] to-[#FAF7FD] border border-[#A855F7]/40 flex items-center justify-center text-[#7E22CE] group-hover:scale-105 transition-transform">
                <Zap className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#180D26] group-hover:text-[#7E22CE] transition-colors">
                  근막재건 리프팅 (두피·안면)
                </h4>
                <p className="text-[11px] text-[#5B4870]">1회 30,000원 · 턱선 리프팅</p>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-[#8A78A0] group-hover:text-[#7E22CE] group-hover:translate-x-1 transition-all" />
          </div>

          <div
            onClick={() => onSelectProgram('brain-cleansing-scalp-spa')}
            className="p-4 sm:p-5 rounded-2xl bg-white border border-[#A855F7]/15 hover:border-[#DB2777]/50 hover:shadow-md transition-all cursor-pointer flex items-center justify-between group"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#FCE7F3] to-[#F8F2FD] border border-[#F472B6]/40 flex items-center justify-center text-[#DB2777] group-hover:scale-105 transition-transform">
                <Brain className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#180D26] group-hover:text-[#DB2777] transition-colors">
                  뇌청소 & 두피 디톡스
                </h4>
                <p className="text-[11px] text-[#5B4870]">두피 열감 해소 · 숙면 유도</p>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-[#8A78A0] group-hover:text-[#DB2777] group-hover:translate-x-1 transition-all" />
          </div>
        </div>
      </div>
    </section>
  );
};
