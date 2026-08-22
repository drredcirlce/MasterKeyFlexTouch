import React, { useState } from 'react';
import { Key, Sparkles, ShieldCheck, ChevronRight, Activity, Zap, Award, ArrowRight, HeartPulse, UserCheck, CheckCircle2 } from 'lucide-react';

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
  const [activePoint, setActivePoint] = useState<number>(0);

  const anatomicalHotspots = [
    {
      title: '쇄골 상와 (결분혈)',
      area: '림프 순환 터미널',
      desc: '두경부 전체 노폐물이 빠져나가는 림프 하수구. 쇄골을 먼저 열어야 두피 부종과 열감이 즉시 빠져나갑니다.',
      effect: '어깨라인 슬림화 & 안면 붓기 즉각 배농'
    },
    {
      title: '흉쇄유돌근 (SCM)',
      area: '경동맥 & 미주신경 주행로',
      desc: '목 옆선 꼬인 근막을 부드럽게 이완시켜 뇌로 향하는 혈류량을 단숨에 끌어올립니다.',
      effect: '만성 편두통 해소 & 뇌 혈류 공급'
    },
    {
      title: '상부 승모근 & 견갑거근',
      area: '어깨 하중 집중부',
      desc: '힘들이지 않는 지렛대 테크닉으로 굳어진 근육 섬유의 탄성을 5분 만에 복원합니다.',
      effect: '목 회전 가동성 30도 이상 즉시 확장'
    },
    {
      title: '두피 모상건막 (백회/사신총)',
      area: '안면 리프팅 핵심 텐션막',
      desc: '얼굴 피부를 뒤에서 당겨주는 두피 건막 유착을 분리하여 눈꼬리와 턱선을 수직 견인합니다.',
      effect: '페이스 리프팅 & 모근 탄력 강화'
    }
  ];

  return (
    <section id="brand-story" className="scroll-mt-20 sm:scroll-mt-24 relative overflow-hidden pt-8 pb-16 lg:py-20 border-b border-[#D4AF37]/20 bg-[#080808]">
      {/* Subtle Background Glows */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-radial from-[#D4AF37]/10 via-transparent to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Tagline Badge */}
        <div className="flex justify-center mb-6">
          <div className="hero-badge-dark inline-flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>PREMIUM K-MEDI BEAUTY · FASCIA SCIENCE</span>
          </div>
        </div>

        {/* Main Headline */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[#F2F2F2] leading-tight font-serif-luxury mb-4">
            쇄골부터 두피까지,
            <span className="block mt-2 text-gold-gradient">
              아름다운 건강의 열쇠
            </span>
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-[#888888] font-light leading-relaxed max-w-2xl mx-auto">
            "한의학적 근막 원리를 기반으로 쇄골부터 두피까지, 뭉침을 풀고 흐름을 열어 즉시 체감되는 가벼움을 선사합니다."
          </p>
        </div>

        {/* Dual Primary Action Cards (Customers vs Salon Directors) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto mb-16">
          {/* Customer Action Card */}
          <div className="relative rounded-xl bg-[#121212] border border-[#D4AF37]/25 p-7 shadow-xl hover:border-[#D4AF37]/70 transition-all duration-300 group flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-[#D4AF37]/15 text-[#D4AF37] border border-[#D4AF37]/30">
                  FOR CLIENTS
                </span>
                <div className="w-8 h-8 rounded-full bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] group-hover:scale-110 transition-transform">
                  <HeartPulse className="w-4 h-4" />
                </div>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#F2F2F2] mb-2 font-serif-luxury group-hover:text-[#D4AF37] transition-colors">
                주변 공인 가맹 헤어샵 찾기 & 시술 예약
              </h3>
              <p className="text-xs sm:text-sm text-[#888888] mb-6 leading-relaxed">
                만성 승모근 결림, 두피 열감, 안면 처짐을 5분 만에 시원하게 해결하는 전국 마스터키 공인 살롱 검색 및 실시간 예약
              </p>
            </div>
            <button
              id="hero-find-salon-btn"
              onClick={onOpenReservation}
              className="w-full py-3 px-4 rounded text-xs font-bold uppercase tracking-wider bg-[#D4AF37] text-[#080808] hover:bg-[#e5c158] shadow-md shadow-[#D4AF37]/20 flex items-center justify-center gap-1.5 transition-all cursor-pointer"
            >
              <span>시술 예약 & 가맹점 찾기</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Director Academy Action Card */}
          <div className="relative rounded-xl bg-[#121212] border border-[#D4AF37]/25 p-7 shadow-xl hover:border-[#D4AF37]/70 transition-all duration-300 group flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-[#D4AF37] text-[#080808]">
                  FOR SALON DIRECTORS
                </span>
                <div className="w-8 h-8 rounded-full bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] group-hover:scale-110 transition-transform">
                  <Award className="w-4 h-4" />
                </div>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#F2F2F2] mb-2 font-serif-luxury group-hover:text-[#D4AF37] transition-colors">
                [뇌청소 & 두피케어] 정기 실습 아카데미
              </h3>
              <p className="text-xs sm:text-sm text-[#888888] mb-6 leading-relaxed">
                한의사 대표이사 직강 (이론 100분 + 1:1 실습 60분). 손목 피로도 0%로 고객 객단가를 2배 이상 높이는 독점 기술 전수
              </p>
            </div>
            <button
              id="hero-apply-academy-btn"
              onClick={onOpenAcademy}
              className="w-full py-3 px-4 rounded text-xs font-bold uppercase tracking-wider bg-transparent text-[#D4AF37] border border-[#D4AF37] hover:bg-[#D4AF37]/10 flex items-center justify-center gap-1.5 transition-all cursor-pointer"
            >
              <span>원장님 실습 교육 신청하기</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Fascia Anatomy Interactive Explorer */}
        <div className="rounded-xl bg-[#121212] border border-[#D4AF37]/20 p-6 sm:p-8 backdrop-blur-md relative">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-5 border-b border-[#262626]">
            <div>
              <div className="flex items-center gap-2 text-[#D4AF37] text-xs font-bold uppercase tracking-wider mb-1">
                <Activity className="w-4 h-4" />
                <span>FASCIA & MERIDIAN PRINCIPLE</span>
              </div>
              <h2 className="text-lg sm:text-2xl font-bold text-[#F2F2F2] font-serif-luxury">
                왜 쇄골과 두피를 동시에 터치해야 하는가?
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#888888] max-w-md">
              상체 전체의 림프 배농로(쇄골)를 열지 않고 두피만 만지면 효과가 반감됩니다. 한의학적 정밀 근막 연계 테크닉을 직접 확인하세요.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            {/* Visual Hotspot Buttons */}
            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2.5">
              {anatomicalHotspots.map((spot, idx) => (
                <button
                  key={idx}
                  onClick={() => setActivePoint(idx)}
                  className={`text-left p-3.5 rounded-lg border transition-all duration-200 cursor-pointer ${
                    activePoint === idx
                      ? 'bg-[#D4AF37]/15 border-[#D4AF37] shadow-md shadow-[#D4AF37]/15 text-[#F2F2F2]'
                      : 'bg-[#181818] border-[#262626] hover:border-[#D4AF37]/40 text-[#888888] hover:text-[#F2F2F2]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className={`text-xs font-bold ${activePoint === idx ? 'text-[#D4AF37]' : 'text-[#F2F2F2]'}`}>
                      0{idx + 1}. {spot.title}
                    </span>
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#121212] text-[#888888] border border-[#262626] font-mono">
                      {spot.area}
                    </span>
                  </div>
                  <p className="text-xs text-[#888888] line-clamp-1">
                    {spot.effect}
                  </p>
                </button>
              ))}
            </div>

            {/* Interactive Anatomical Spotlight Display */}
            <div className="lg:col-span-7 bg-[#161616] rounded-lg p-6 border border-[#D4AF37]/30 relative overflow-hidden">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-ping" />
                <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-wider">
                  POINT 0{activePoint + 1} 정밀 해부학 기전
                </span>
              </div>

              <h4 className="text-xl sm:text-2xl font-bold text-[#F2F2F2] mb-2 font-serif-luxury">
                {anatomicalHotspots[activePoint].title}
              </h4>
              <p className="text-xs font-semibold text-[#D4AF37] mb-4 bg-[#121212] inline-block px-2.5 py-1 rounded border border-[#D4AF37]/30">
                핵심 타깃: {anatomicalHotspots[activePoint].area}
              </p>

              <p className="text-sm text-[#CCCCCC] leading-relaxed mb-5">
                {anatomicalHotspots[activePoint].desc}
              </p>

              <div className="p-3.5 rounded bg-[#121212] border border-[#262626] flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-medium text-[#F2F2F2]">
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                  <span>즉각 기대 효과: {anatomicalHotspots[activePoint].effect}</span>
                </div>
                <button
                  onClick={() => onSelectProgram(activePoint === 0 || activePoint === 2 ? 'neck-shoulder' : activePoint === 1 ? 'brain-scalp' : 'fascia-lifting')}
                  className="text-[11px] text-[#D4AF37] font-bold hover:underline shrink-0 ml-2"
                >
                  관련 프로그램 보기 →
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Quantitative Highlights Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mt-8">
          <div className="p-4 rounded-lg bg-[#121212] border border-[#262626] text-center">
            <span className="block text-2xl sm:text-3xl font-normal text-[#D4AF37] font-serif-luxury">
              5 min
            </span>
            <span className="text-xs text-[#888888] font-medium">시술 즉시 체감 시간</span>
          </div>
          <div className="p-4 rounded-lg bg-[#121212] border border-[#262626] text-center">
            <span className="block text-2xl sm:text-3xl font-normal text-[#D4AF37] font-serif-luxury">
              99.2%
            </span>
            <span className="text-xs text-[#888888] font-medium">고객 시술 만족도</span>
          </div>
          <div className="p-4 rounded-lg bg-[#121212] border border-[#262626] text-center">
            <span className="block text-2xl sm:text-3xl font-normal text-[#D4AF37] font-serif-luxury">
              2.4배
            </span>
            <span className="text-xs text-[#888888] font-medium">살롱 고객 객단가 상승</span>
          </div>
          <div className="p-4 rounded-lg bg-[#121212] border border-[#262626] text-center">
            <span className="block text-2xl sm:text-3xl font-normal text-[#D4AF37] font-serif-luxury">
              100%
            </span>
            <span className="text-xs text-[#888888] font-medium">한의사 대표 1:1 직강 실습</span>
          </div>
        </div>
      </div>
    </section>
  );
};
