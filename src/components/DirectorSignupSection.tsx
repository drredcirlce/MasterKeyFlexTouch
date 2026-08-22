import React, { useState } from 'react';
import {
  UserCheck,
  Building,
  ShieldCheck,
  Award,
  CheckCircle2,
  Lock,
  Phone,
  Mail,
  FileText,
  Sparkles,
  ArrowRight,
  Gift,
  Download,
  BookOpen,
  MapPin,
  Check,
  Star
} from 'lucide-react';

interface DirectorSignupProps {
  onGoToAcademy: () => void;
  onGoToSalons: () => void;
}

export const DirectorSignupSection: React.FC<DirectorSignupProps> = ({
  onGoToAcademy,
  onGoToSalons,
}) => {
  const [formData, setFormData] = useState({
    userId: '',
    password: '',
    passwordConfirm: '',
    directorName: '',
    salonName: '',
    businessNumber: '',
    phone: '',
    email: '',
    region: '서울 강남구',
    salonAddress: '',
    licenseNumber: '',
    experienceYears: '10년 이상',
    interestedPrograms: ['neck_shoulder', 'fascia_lifting'],
    chairCount: '4~6대',
    agreeTerms: true,
    agreePrivacy: true,
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [registeredInfo, setRegisteredInfo] = useState<typeof formData | null>(null);

  const handleProgramToggle = (prog: string) => {
    setFormData((prev) => {
      const exists = prev.interestedPrograms.includes(prog);
      return {
        ...prev,
        interestedPrograms: exists
          ? prev.interestedPrograms.filter((p) => p !== prog)
          : [...prev.interestedPrograms, prog],
      };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.passwordConfirm) {
      alert('비밀번호가 일치하지 않습니다. 다시 확인해주세요.');
      return;
    }
    if (!formData.agreeTerms || !formData.agreePrivacy) {
      alert('필수 이용약관 및 개인정보 처리방침에 동의해주세요.');
      return;
    }

    setRegisteredInfo({ ...formData });
    setIsSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setFormData({
      userId: '',
      password: '',
      passwordConfirm: '',
      directorName: '',
      salonName: '',
      businessNumber: '',
      phone: '',
      email: '',
      region: '서울 강남구',
      salonAddress: '',
      licenseNumber: '',
      experienceYears: '10년 이상',
      interestedPrograms: ['neck_shoulder', 'fascia_lifting'],
      chairCount: '4~6대',
      agreeTerms: true,
      agreePrivacy: true,
    });
  };

  return (
    <section id="director-signup" className="scroll-mt-20 sm:scroll-mt-24 py-12 lg:py-20 relative bg-[#080808]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#D4AF37]/15 text-[#D4AF37] border border-[#D4AF37]/30 uppercase tracking-widest mb-3">
            <UserCheck className="w-3.5 h-3.5" />
            <span>DIRECTOR MEMBERSHIP & FRANCHISE</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-[#F2F2F2] font-serif-luxury tracking-tight">
            헤어샵 원장님 전용 회원가입 & 가맹 등록
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#888888] leading-relaxed">
            마스터키 플렉스터치는 미용실의 기존 시술(커트, 펌, 염색)과 결합하여
            <strong className="text-[#D4AF37] ml-1">객단가 3~5만 원 상승</strong> 및
            고객 재방문율을 극대화하는 메디컬 근막 뷰티 솔루션입니다.
          </p>
        </div>

        {isSubmitted && registeredInfo ? (
          /* Registration Success Screen */
          <div className="max-w-3xl mx-auto bg-[#121212] border-2 border-[#D4AF37] rounded-2xl p-6 sm:p-10 shadow-2xl animate-in zoom-in-95 duration-300">
            <div className="text-center mb-8">
              <div className="w-16 h-16 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37] text-[#D4AF37] flex items-center justify-center mx-auto mb-4">
                <ShieldCheck className="w-9 h-9" />
              </div>
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest">
                MEMBERSHIP REGISTRATION COMPLETED
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#F2F2F2] font-serif-luxury mt-1">
                {registeredInfo.salonName} ({registeredInfo.directorName} 원장님)
              </h3>
              <p className="text-sm text-[#CCCCCC] mt-2">
                마스터키 플렉스터치 패밀리 회원 가입 및 가맹 신청이 정상 완료되었습니다!
              </p>
            </div>

            {/* Certificate Style Box */}
            <div className="p-5 sm:p-6 rounded-xl bg-[#161616] border border-[#D4AF37]/40 mb-8 space-y-4">
              <div className="flex items-center justify-between border-b border-[#262626] pb-3">
                <span className="text-xs text-[#888888]">원장님 아이디</span>
                <span className="text-xs font-bold text-[#F2F2F2]">{registeredInfo.userId || registeredInfo.phone}</span>
              </div>
              <div className="flex items-center justify-between border-b border-[#262626] pb-3">
                <span className="text-xs text-[#888888]">사업자 등록번호</span>
                <span className="text-xs font-bold text-[#F2F2F2]">{registeredInfo.businessNumber || '120-81-99882'}</span>
              </div>
              <div className="flex items-center justify-between border-b border-[#262626] pb-3">
                <span className="text-xs text-[#888888]">등록 살롱 주소</span>
                <span className="text-xs font-bold text-[#D4AF37]">{registeredInfo.region} {registeredInfo.salonAddress}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-[#888888]">가입 승인 상태</span>
                <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-400 bg-emerald-950/40 px-2.5 py-0.5 rounded border border-emerald-500/40">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  정회원 승인 (아카데미 수강 대기)
                </span>
              </div>
            </div>

            {/* Membership Benefits List */}
            <div className="mb-8">
              <h4 className="text-sm font-bold text-[#D4AF37] uppercase tracking-wider mb-3 flex items-center gap-1.5">
                <Gift className="w-4 h-4" />
                <span>마스터키 원장님 전용 5대 가맹 혜택</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-lg bg-[#181818] border border-[#262626] flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#F2F2F2] block">공식 홈페이지 가맹점 맵 등록</strong>
                    <span className="text-[#888888]">지역별 고객 검색 시 최상단 인증 샵 노출 및 예약 유치</span>
                  </div>
                </div>
                <div className="p-3 rounded-lg bg-[#181818] border border-[#262626] flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#F2F2F2] block">임상 실습 동영상 교재 무료 열람</strong>
                    <span className="text-[#888888]">한의사 직강 근막 이론 및 테크닉 복습 VOD 지원</span>
                  </div>
                </div>
                <div className="p-3 rounded-lg bg-[#181818] border border-[#262626] flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#F2F2F2] block">마스터키 공인인증 명패 및 POP 키트</strong>
                    <span className="text-[#888888]">살롱 비치용 고급 아크릴 현판, 고객 안내 리플렛 제공</span>
                  </div>
                </div>
                <div className="p-3 rounded-lg bg-[#181818] border border-[#262626] flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#F2F2F2] block">월 정기 한의학 메디뷰티 보수교육</strong>
                    <span className="text-[#888888]">신규 근막 테크닉 및 탈모·체형 케어 심화 과정 할인</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-[#262626]">
              <button
                onClick={onGoToAcademy}
                className="flex-1 py-3 px-4 rounded-xl bg-gold-gradient hover:opacity-90 text-[#080808] font-bold text-xs sm:text-sm shadow-md shadow-[#D4AF37]/20 flex items-center justify-center gap-2 cursor-pointer"
              >
                <Award className="w-4 h-4" />
                <span>정기 실습 교육 신청하기 (매주 월/화 8시)</span>
              </button>
              <button
                onClick={onGoToSalons}
                className="py-3 px-4 rounded-xl bg-[#181818] hover:bg-[#202020] text-[#D4AF37] border border-[#D4AF37]/40 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 cursor-pointer"
              >
                <MapPin className="w-4 h-4" />
                <span>가맹 헤어샵 지도 확인</span>
              </button>
              <button
                onClick={resetForm}
                className="py-3 px-3 rounded-xl bg-[#141414] hover:bg-[#1a1a1a] text-[#888888] hover:text-[#F2F2F2] text-xs cursor-pointer"
              >
                새로 작성
              </button>
            </div>
          </div>
        ) : (
          /* Signup Form & Benefits Layout */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: Benefits & Information Card */}
            <div className="lg:col-span-5 space-y-6">
              {/* Franchise Advantage Card */}
              <div className="p-6 rounded-2xl bg-[#121212] border border-[#D4AF37]/30 shadow-xl">
                <h3 className="text-lg font-bold text-[#F2F2F2] font-serif-luxury mb-2 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-[#D4AF37]" />
                  <span>원장님 가맹점 등록 혜택</span>
                </h3>
                <p className="text-xs text-[#888888] leading-relaxed mb-6">
                  회원가입 즉시 원장님 전용 기술 자료실과 전국 가맹점 지도 등록 서비스가 제공됩니다.
                </p>

                <div className="space-y-4 text-xs">
                  <div className="flex items-start gap-3 p-3 rounded-xl bg-[#181818] border border-[#262626]">
                    <div className="w-7 h-7 rounded bg-[#D4AF37]/15 text-[#D4AF37] flex items-center justify-center shrink-0 font-bold">
                      1
                    </div>
                    <div>
                      <h4 className="font-bold text-[#F2F2F2]">5분 만에 끝나는 독보적 객단가 상승</h4>
                      <p className="text-[11px] text-[#888888] mt-0.5">
                        샴푸대나 커트석에서 5분 터치로 15,000원~30,000원 추가 수익 창출
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-xl bg-[#181818] border border-[#262626]">
                    <div className="w-7 h-7 rounded bg-[#D4AF37]/15 text-[#D4AF37] flex items-center justify-center shrink-0 font-bold">
                      2
                    </div>
                    <div>
                      <h4 className="font-bold text-[#F2F2F2]">한의사 대표 1:1 맞춤 피드백</h4>
                      <p className="text-[11px] text-[#888888] mt-0.5">
                        상지대 한의학사 안덕수 대표가 직접 손끝 압력과 근막 이완 궤적 교정
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-xl bg-[#181818] border border-[#262626]">
                    <div className="w-7 h-7 rounded bg-[#D4AF37]/15 text-[#D4AF37] flex items-center justify-center shrink-0 font-bold">
                      3
                    </div>
                    <div>
                      <h4 className="font-bold text-[#F2F2F2]">고객 상담 차트 및 마케팅 툴 제공</h4>
                      <p className="text-[11px] text-[#888888] mt-0.5">
                        쇄골·승모근 뭉침 진단표, 전후 비포/애프터 비교 가이드 양식 증정
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Founder Trust Quote */}
              <div className="p-5 rounded-xl bg-gradient-to-r from-[#18150c] to-[#121212] border border-[#D4AF37]/40 text-xs">
                <div className="flex items-center gap-2 text-[#D4AF37] font-bold mb-2">
                  <Award className="w-4 h-4" />
                  <span>한의사 안덕수 대표 원장의 약속</span>
                </div>
                <p className="text-[#CCCCCC] leading-relaxed text-[11px] italic">
                  "미용인은 고객의 두피와 목을 가장 가까이서 매일 만지는 전문 힐러입니다.
                  한의학의 근막 원리를 장착하면 원장님의 손길은 단순한 샴푸를 넘어 고객의 인생 케어가 됩니다."
                </p>
                <div className="mt-3 pt-2 border-t border-[#262626] flex items-center justify-between text-[10px] text-[#888888]">
                  <span>(주)케이메디플러스 대표이사</span>
                  <span className="text-[#D4AF37] font-bold">안덕수 한의사</span>
                </div>
              </div>
            </div>

            {/* Right: Registration Form */}
            <div className="lg:col-span-7 bg-[#121212] border border-[#D4AF37]/30 rounded-2xl p-6 sm:p-8 shadow-2xl">
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="text-lg font-bold text-[#F2F2F2] font-serif-luxury border-b border-[#262626] pb-3 flex items-center justify-between">
                  <span>원장 회원 정보 입력</span>
                  <span className="text-xs text-[#D4AF37] font-normal">* 표시는 필수 항목</span>
                </h3>

                {/* Account ID & Password */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#CCCCCC] mb-1.5">
                      아이디 (이메일 또는 휴대폰 번호) *
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        value={formData.userId}
                        onChange={(e) => setFormData({ ...formData, userId: e.target.value })}
                        placeholder="예: masterkey_director"
                        className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-[#181818] border border-[#262626] text-xs text-[#F2F2F2] placeholder-[#666666] focus:outline-none focus:border-[#D4AF37]"
                        required
                      />
                      <Mail className="w-4 h-4 text-[#888888] absolute left-3 top-1/2 -translate-y-1/2" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#CCCCCC] mb-1.5">
                      연락처 (휴대폰) *
                    </label>
                    <div className="relative">
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="010-0000-0000"
                        className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-[#181818] border border-[#262626] text-xs text-[#F2F2F2] placeholder-[#666666] focus:outline-none focus:border-[#D4AF37]"
                        required
                      />
                      <Phone className="w-4 h-4 text-[#888888] absolute left-3 top-1/2 -translate-y-1/2" />
                    </div>
                  </div>
                </div>

                {/* Passwords */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#CCCCCC] mb-1.5">
                      비밀번호 *
                    </label>
                    <div className="relative">
                      <input
                        type="password"
                        value={formData.password}
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                        placeholder="6자리 이상 입력"
                        className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-[#181818] border border-[#262626] text-xs text-[#F2F2F2] placeholder-[#666666] focus:outline-none focus:border-[#D4AF37]"
                        required
                      />
                      <Lock className="w-4 h-4 text-[#888888] absolute left-3 top-1/2 -translate-y-1/2" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#CCCCCC] mb-1.5">
                      비밀번호 확인 *
                    </label>
                    <div className="relative">
                      <input
                        type="password"
                        value={formData.passwordConfirm}
                        onChange={(e) => setFormData({ ...formData, passwordConfirm: e.target.value })}
                        placeholder="비밀번호 재입력"
                        className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-[#181818] border border-[#262626] text-xs text-[#F2F2F2] placeholder-[#666666] focus:outline-none focus:border-[#D4AF37]"
                        required
                      />
                      <Lock className="w-4 h-4 text-[#888888] absolute left-3 top-1/2 -translate-y-1/2" />
                    </div>
                  </div>
                </div>

                {/* Director Name & Salon Name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div>
                    <label className="block text-xs font-bold text-[#CCCCCC] mb-1.5">
                      원장님 성함 *
                    </label>
                    <input
                      type="text"
                      value={formData.directorName}
                      onChange={(e) => setFormData({ ...formData, directorName: e.target.value })}
                      placeholder="예: 김민서 원장"
                      className="w-full px-3 py-2.5 rounded-xl bg-[#181818] border border-[#262626] text-xs text-[#F2F2F2] placeholder-[#666666] focus:outline-none focus:border-[#D4AF37]"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#CCCCCC] mb-1.5">
                      헤어살롱 상호명 *
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        value={formData.salonName}
                        onChange={(e) => setFormData({ ...formData, salonName: e.target.value })}
                        placeholder="예: 아우라 제이 헤어 살롱"
                        className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-[#181818] border border-[#262626] text-xs text-[#F2F2F2] placeholder-[#666666] focus:outline-none focus:border-[#D4AF37]"
                        required
                      />
                      <Building className="w-4 h-4 text-[#888888] absolute left-3 top-1/2 -translate-y-1/2" />
                    </div>
                  </div>
                </div>

                {/* Business Registration Number & License Number */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#CCCCCC] mb-1.5">
                      사업자등록번호 *
                    </label>
                    <input
                      type="text"
                      value={formData.businessNumber}
                      onChange={(e) => setFormData({ ...formData, businessNumber: e.target.value })}
                      placeholder="예: 120-81-99882"
                      className="w-full px-3 py-2.5 rounded-xl bg-[#181818] border border-[#262626] text-xs text-[#F2F2F2] placeholder-[#666666] focus:outline-none focus:border-[#D4AF37]"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#CCCCCC] mb-1.5">
                      미용사 면허 / 자격 사항
                    </label>
                    <input
                      type="text"
                      value={formData.licenseNumber}
                      onChange={(e) => setFormData({ ...formData, licenseNumber: e.target.value })}
                      placeholder="예: 종합미용사 면허 / 두피상담사"
                      className="w-full px-3 py-2.5 rounded-xl bg-[#181818] border border-[#262626] text-xs text-[#F2F2F2] placeholder-[#666666] focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>
                </div>

                {/* Region & Salon Address */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#CCCCCC] mb-1.5">
                      소재지 지역 *
                    </label>
                    <select
                      value={formData.region}
                      onChange={(e) => setFormData({ ...formData, region: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-xl bg-[#181818] border border-[#262626] text-xs text-[#F2F2F2] focus:outline-none focus:border-[#D4AF37]"
                    >
                      <option value="서울 강남구">서울 강남구</option>
                      <option value="서울 중구">서울 중구</option>
                      <option value="서울 서초구">서울 서초구</option>
                      <option value="서울 마포구">서울 마포구</option>
                      <option value="서울 송파구">서울 송파구</option>
                      <option value="경기 성남시 분당구">경기 성남시 분당구</option>
                      <option value="부산 해운대구">부산 해운대구</option>
                      <option value="대구 수성구">대구 수성구</option>
                      <option value="대전 유성구">대전 유성구</option>
                      <option value="기타 지역">기타 지역</option>
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-bold text-[#CCCCCC] mb-1.5">
                      상세 주소 (가맹점 지도에 등록됩니다) *
                    </label>
                    <input
                      type="text"
                      value={formData.salonAddress}
                      onChange={(e) => setFormData({ ...formData, salonAddress: e.target.value })}
                      placeholder="예: 테헤란로 152 강남파이낸스센터 B1"
                      className="w-full px-3 py-2.5 rounded-xl bg-[#181818] border border-[#262626] text-xs text-[#F2F2F2] placeholder-[#666666] focus:outline-none focus:border-[#D4AF37]"
                      required
                    />
                  </div>
                </div>

                {/* Interested Programs Checklist */}
                <div>
                  <label className="block text-xs font-bold text-[#CCCCCC] mb-2">
                    도입 희망 시그니처 프로그램 선택 (다중 선택 가능)
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs">
                    <label
                      onClick={() => handleProgramToggle('neck_shoulder')}
                      className={`p-3 rounded-xl border cursor-pointer transition-all flex items-center gap-2 ${
                        formData.interestedPrograms.includes('neck_shoulder')
                          ? 'bg-[#D4AF37]/15 border-[#D4AF37] text-[#F2F2F2]'
                          : 'bg-[#181818] border-[#262626] text-[#888888]'
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={formData.interestedPrograms.includes('neck_shoulder')}
                        onChange={() => {}}
                        className="rounded border-[#262626] text-[#D4AF37]"
                      />
                      <div>
                        <strong className="block text-xs font-bold">넥숄더 플렉스터치</strong>
                        <span className="text-[10px] text-[#888888]">5분 15,000원 / 3+1회</span>
                      </div>
                    </label>

                    <label
                      onClick={() => handleProgramToggle('fascia_lifting')}
                      className={`p-3 rounded-xl border cursor-pointer transition-all flex items-center gap-2 ${
                        formData.interestedPrograms.includes('fascia_lifting')
                          ? 'bg-[#D4AF37]/15 border-[#D4AF37] text-[#F2F2F2]'
                          : 'bg-[#181818] border-[#262626] text-[#888888]'
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={formData.interestedPrograms.includes('fascia_lifting')}
                        onChange={() => {}}
                        className="rounded border-[#262626] text-[#D4AF37]"
                      />
                      <div>
                        <strong className="block text-xs font-bold">근막재건 리프팅</strong>
                        <span className="text-[10px] text-[#888888]">1회 30,000원 / 3+1회</span>
                      </div>
                    </label>

                    <label
                      onClick={() => handleProgramToggle('brain_scalp')}
                      className={`p-3 rounded-xl border cursor-pointer transition-all flex items-center gap-2 ${
                        formData.interestedPrograms.includes('brain_scalp')
                          ? 'bg-[#D4AF37]/15 border-[#D4AF37] text-[#F2F2F2]'
                          : 'bg-[#181818] border-[#262626] text-[#888888]'
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={formData.interestedPrograms.includes('brain_scalp')}
                        onChange={() => {}}
                        className="rounded border-[#262626] text-[#D4AF37]"
                      />
                      <div>
                        <strong className="block text-xs font-bold">뇌청소 & 두피케어</strong>
                        <span className="text-[10px] text-[#888888]">두피 순환 & 탈모 개선</span>
                      </div>
                    </label>
                  </div>
                </div>

                {/* Terms Agreement */}
                <div className="p-3.5 rounded-xl bg-[#181818] border border-[#262626] space-y-2 text-xs">
                  <label className="flex items-center gap-2 cursor-pointer text-[#CCCCCC]">
                    <input
                      type="checkbox"
                      checked={formData.agreeTerms}
                      onChange={(e) => setFormData({ ...formData, agreeTerms: e.target.checked })}
                      className="w-4 h-4 rounded border-[#262626] bg-[#141414] text-[#D4AF37]"
                    />
                    <span>[필수] 마스터키 가맹 회원 이용약관 및 프랜차이즈 운영 지침 동의</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer text-[#CCCCCC]">
                    <input
                      type="checkbox"
                      checked={formData.agreePrivacy}
                      onChange={(e) => setFormData({ ...formData, agreePrivacy: e.target.checked })}
                      className="w-4 h-4 rounded border-[#262626] bg-[#141414] text-[#D4AF37]"
                    />
                    <span>[필수] 개인정보 수집 및 가맹 살롱 디렉토리 등록 이용 동의</span>
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-gold-gradient hover:opacity-90 text-[#080808] font-bold text-sm sm:text-base shadow-lg shadow-[#D4AF37]/20 flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <ShieldCheck className="w-5 h-5 text-[#080808]" />
                  <span>마스터키 원장님 회원가입 & 가맹 등록 완료하기</span>
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
