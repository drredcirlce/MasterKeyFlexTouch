import React, { useState } from 'react';
import {
  UserCheck,
  Building,
  Phone,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Lock,
  Gift,
  HelpCircle
} from 'lucide-react';

interface DirectorSignupSectionProps {
  onGoToAcademy: () => void;
  onGoToSalons: () => void;
}

export const DirectorSignupSection: React.FC<DirectorSignupSectionProps> = ({
  onGoToAcademy,
  onGoToSalons,
}) => {
  const [salonName, setSalonName] = useState('');
  const [directorName, setDirectorName] = useState('');
  const [phone, setPhone] = useState('');
  const [businessNum, setBusinessNum] = useState('');
  const [address, setAddress] = useState('');
  const [designerCount, setDesignerCount] = useState('1~2인 살롱');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!salonName || !directorName || !phone) {
      alert('필수 정보를 입력해주세요.');
      return;
    }
    setSubmitted(true);
  };

  return (
    <section id="director-signup" className="scroll-mt-20 sm:scroll-mt-24 py-16 lg:py-24 border-b border-[#A855F7]/15 relative bg-[#FAF7FD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="hero-badge-dark inline-flex items-center gap-2 mb-3">
            <Building className="w-3.5 h-3.5 text-[#DB2777]" />
            <span>FRANCHISE & MEMBERSHIP</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-[#180D26] font-serif-luxury mb-4">
            원장님 회원가입 & 가맹점 공식 등록
            <span className="block mt-1 text-beauty-gradient">
              우리 동네 1호 메디뷰티 플렉스터치 살롱으로 선점하세요
            </span>
          </h2>
          <p className="text-sm sm:text-base text-[#5B4870]">
            지역 상권별 공식 가맹점 수 제한(동별 1~2개소)으로 독점 고객 유입과 최고 수준의 시술 단가를 보장합니다.
          </p>
        </div>

        {/* 2-Column Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          {/* Left Column: Franchise Member Benefits */}
          <div className="lg:col-span-6 space-y-5">
            {/* Dark highlight card for franchise benefits */}
            <div className="rounded-3xl bg-[#1F0D33] border border-[#9333EA]/30 p-6 sm:p-8 text-white shadow-xl">
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-[#9333EA]/30">
                <Gift className="w-5 h-5 text-[#F472B6]" />
                <h3 className="text-base font-bold text-white">가맹 원장님 전용 6대 독점 지원 혜택</h3>
              </div>

              <div className="space-y-3.5 text-xs">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#F472B6] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">공식 인증 명판 & POP 홍보물 무상 지급</strong>
                    <span className="text-[#E9D5FF]">
                      카운터 비치용 아크릴 미니 배너, 고객 안내 리플릿 500부
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#F472B6] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">마스터키 온라인 공식 살롱 지도 및 네이버 지도 연동</strong>
                    <span className="text-[#E9D5FF]">
                      '지역명+플렉스터치' 검색 시 상단 노출 및 예약 유입 지원
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#F472B6] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">원장님 전용 온라인 라운지 & 테크닉 복습 영상 무제한</strong>
                    <span className="text-[#E9D5FF]">
                      신규 디자이너 교육용 동영상 강의 및 상담 차트 PDF 제공
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#F472B6] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">상권 보호 및 과열 경쟁 방지</strong>
                    <span className="text-[#E9D5FF]">
                      동일 상권(도보 500m 반경) 내 중복 가맹 제한
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Consultation Call Box */}
            <div className="p-6 rounded-3xl bg-white border border-[#A855F7]/20 shadow-md flex items-center justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#DB2777] block mb-0.5">
                  DIRECT PHONE
                </span>
                <h4 className="text-sm font-bold text-[#180D26]">가맹 및 입점 상담 직통전화</h4>
                <p className="text-xs text-[#5B4870]">평일 09:00 ~ 19:00 (주말/야간 예약 상담 가능)</p>
              </div>
              <a
                href="tel:1544-7890"
                className="px-4 py-2.5 rounded-xl bg-[#FAF7FD] hover:bg-[#F3E8FC] text-[#7E22CE] text-xs font-bold border border-[#A855F7]/25 flex items-center gap-1.5 transition-colors"
              >
                <Phone className="w-4 h-4 text-[#DB2777]" />
                <span>1544-7890</span>
              </a>
            </div>
          </div>

          {/* Right Column: Fast Registration Form */}
          <div className="lg:col-span-6 rounded-3xl bg-white border border-[#A855F7]/25 p-6 sm:p-8 shadow-xl">
            <div className="mb-6 pb-4 border-b border-[#A855F7]/15">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#DB2777] block">
                MEMBERSHIP REGISTRATION
              </span>
              <h3 className="text-xl font-bold text-[#180D26] font-serif-luxury">
                원장님 회원가입 및 살롱 등록
              </h3>
            </div>

            {submitted ? (
              <div className="py-8 text-center space-y-4 animate-in fade-in">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#9333EA] to-[#DB2777] text-white flex items-center justify-center mx-auto shadow-lg">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-lg font-bold text-[#180D26]">가맹 등록 신청이 완료되었습니다!</h4>
                <p className="text-xs text-[#5B4870] leading-relaxed max-w-xs mx-auto">
                  {salonName} ({directorName} 원장님), 마스터키 공식 가맹 심사 후 상권 보호 등록 및 현판 배송 절차가 진행됩니다.
                </p>
                <div className="pt-2 flex flex-col sm:flex-row gap-2 justify-center">
                  <button
                    onClick={onGoToAcademy}
                    className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#9333EA] to-[#DB2777] text-white text-xs font-bold shadow-md shadow-pink-900/20"
                  >
                    실습 교육 일정 확인하기
                  </button>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-4 py-2.5 rounded-xl bg-[#FAF7FD] text-[#7E22CE] text-xs font-bold border border-[#A855F7]/25"
                  >
                    신청 내역 다시 작성
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-[#180D26] mb-1.5">
                      헤어살롱 상호명 *
                    </label>
                    <input
                      type="text"
                      value={salonName}
                      onChange={(e) => setSalonName(e.target.value)}
                      placeholder="예: 루미에르 헤어룸"
                      className="w-full p-2.5 rounded-xl bg-[#FAF7FD] border border-[#A855F7]/25 text-[#180D26] text-xs placeholder-[#8A78A0] focus:outline-none focus:border-[#DB2777]"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#180D26] mb-1.5">
                      원장님 성함 *
                    </label>
                    <input
                      type="text"
                      value={directorName}
                      onChange={(e) => setDirectorName(e.target.value)}
                      placeholder="예: 박지영 원장"
                      className="w-full p-2.5 rounded-xl bg-[#FAF7FD] border border-[#A855F7]/25 text-[#180D26] text-xs placeholder-[#8A78A0] focus:outline-none focus:border-[#DB2777]"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-[#180D26] mb-1.5">
                      휴대폰 번호 *
                    </label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="010-0000-0000"
                      className="w-full p-2.5 rounded-xl bg-[#FAF7FD] border border-[#A855F7]/25 text-[#180D26] text-xs placeholder-[#8A78A0] focus:outline-none focus:border-[#DB2777]"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#180D26] mb-1.5">
                      사업자등록번호 (선택)
                    </label>
                    <input
                      type="text"
                      value={businessNum}
                      onChange={(e) => setBusinessNum(e.target.value)}
                      placeholder="000-00-00000"
                      className="w-full p-2.5 rounded-xl bg-[#FAF7FD] border border-[#A855F7]/25 text-[#180D26] text-xs placeholder-[#8A78A0] focus:outline-none focus:border-[#DB2777]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#180D26] mb-1.5">
                    살롱 상세 도로명 주소 (상권 보호 등록용) *
                  </label>
                  <input
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="예: 서울 강남구 도곡로 123 2층"
                    className="w-full p-2.5 rounded-xl bg-[#FAF7FD] border border-[#A855F7]/25 text-[#180D26] text-xs placeholder-[#8A78A0] focus:outline-none focus:border-[#DB2777]"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#180D26] mb-1.5">
                    매장 규모 / 디자이너 인원
                  </label>
                  <select
                    value={designerCount}
                    onChange={(e) => setDesignerCount(e.target.value)}
                    className="w-full p-2.5 rounded-xl bg-[#FAF7FD] border border-[#A855F7]/25 text-[#180D26] text-xs focus:outline-none focus:border-[#DB2777]"
                  >
                    <option value="1인 살롱 (원장 직접 시술)">1인 살롱 (원장 직접 시술)</option>
                    <option value="2~3인 살롱">2~3인 살롱 (원장 + 실장/디자이너)</option>
                    <option value="4인 이상 대형 살롱">4인 이상 대형 살롱</option>
                  </select>
                </div>

                <div className="p-3 rounded-xl bg-[#FAF7FD] border border-[#A855F7]/20 text-[11px] text-[#5B4870]">
                  * 가맹비 및 월 관리비 면제 프로모션이 선착순 적용됩니다.
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#9333EA] via-[#A855F7] to-[#DB2777] hover:opacity-95 text-white font-bold text-xs sm:text-sm shadow-md shadow-pink-900/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <UserCheck className="w-4 h-4" />
                  <span>원장님 회원가입 및 공식 가맹 등록</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
