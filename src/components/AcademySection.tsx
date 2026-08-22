import React, { useState } from 'react';
import { ACADEMY_INFO } from '../data/mockData';
import { AcademyApplicationData } from '../types';
import {
  Award,
  GraduationCap,
  Calendar,
  Clock,
  MapPin,
  Users,
  CheckCircle2,
  TrendingUp,
  BookOpen,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Send,
  Building,
  Check
} from 'lucide-react';

interface AcademySectionProps {
  onOpenDirectorPortal: () => void;
  onSubmitApplication: (data: AcademyApplicationData) => void;
}

export const AcademySection: React.FC<AcademySectionProps> = ({
  onOpenDirectorPortal,
  onSubmitApplication,
}) => {
  const [directorName, setDirectorName] = useState('');
  const [salonName, setSalonName] = useState('');
  const [businessNumber, setBusinessNumber] = useState('');
  const [region, setRegion] = useState('서울/수도권');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [trainingType, setTrainingType] = useState<'regular_academy' | 'visit_1on1' | 'group_seminar'>('regular_academy');
  const [preferredDay, setPreferredDay] = useState('월요일반 (저녁 8시)');
  const [chairCount, setChairCount] = useState(4);
  const [designerCount, setDesignerCount] = useState(2);
  const [currentScalpMenu, setCurrentScalpMenu] = useState<'none' | 'basic' | 'premium'>('basic');
  const [inquiry, setInquiry] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!directorName || !salonName || !phone) {
      alert('원장님 성함, 샵 이름, 연락처를 모두 입력해 주세요.');
      return;
    }

    const appData: AcademyApplicationData = {
      id: `ACAD-${Date.now().toString().slice(-6)}`,
      directorName,
      salonName,
      businessNumber: businessNumber || '미입력(상담 시 확인)',
      region,
      address: region,
      phone,
      email: email || `${phone.replace(/[^0-9]/g, '')}@director.com`,
      trainingType,
      preferredDay,
      chairCount,
      designerCount,
      currentScalpMenu,
      inquiry,
      submittedAt: new Date().toLocaleDateString('ko-KR'),
      status: 'submitted'
    };

    onSubmitApplication(appData);
    setIsSubmitted(true);
  };

  return (
    <section id="academy" className="scroll-mt-20 sm:scroll-mt-24 py-16 lg:py-24 border-b border-[var(--border)] relative bg-[var(--bg)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--gold)]/10 border border-[var(--gold)]/30 text-[var(--gold)] text-xs font-bold mb-3">
            <GraduationCap className="w-3.5 h-3.5 text-[var(--gold)]" />
            <span>FOR SALON DIRECTORS ONLY</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-serif-luxury mb-4">
            헤어살롱 원장님을 위한
            <span className="block mt-1 text-gold-gradient">
              [뇌청소 & 두피케어] 정기 실습 아카데미
            </span>
          </h2>
          <p className="text-sm sm:text-base text-[var(--text-muted)] font-light max-w-2xl mx-auto">
            (주)케이메디플러스 대표이사 한의사 안덕수 원장 직강. 손목 피로도 0%로 살롱 객단가를 2~3배 끌어올리는 독점 실전 테크닉
          </p>
        </div>

        {/* Schedule & Sessions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 mb-12">
          {ACADEMY_INFO.schedules.map((sch, idx) => (
            <div
              key={idx}
              className={`p-6 rounded-2xl border flex flex-col justify-between transition-all ${
                idx === 0
                  ? 'bg-gradient-to-b from-[#18150c] via-[#121212] to-[#0d0d0d] border-[var(--gold)] shadow-xl shadow-[var(--gold)]/10'
                  : 'bg-[#121212] border-[var(--border)] hover:border-[var(--gold)]/30'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold px-2.5 py-1 rounded bg-[var(--gold)]/15 text-[var(--gold)] border border-[var(--gold)]/30">
                    {sch.status}
                  </span>
                  <span className="text-[11px] text-[var(--text-muted)] font-mono">
                    정원 {sch.capacity.split('(')[0]}
                  </span>
                </div>
                <h4 className="text-lg font-bold text-white mb-2">{sch.day}</h4>
                <div className="space-y-2 text-xs text-slate-300 mb-4">
                  <div className="flex items-center gap-1.5 text-[var(--gold)]">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{sch.time}</span>
                  </div>
                  <div className="flex items-start gap-1.5 text-[var(--text-muted)]">
                    <MapPin className="w-3.5 h-3.5 text-slate-500 shrink-0 mt-0.5" />
                    <span>{sch.venue}</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => {
                  setPreferredDay(sch.day);
                  const el = document.getElementById('academy-application-form');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full py-2.5 rounded-xl bg-[#1c1c1c] hover:bg-[#252525] text-[var(--gold)] text-xs font-bold border border-[var(--gold)]/30 flex items-center justify-center gap-1 transition-colors cursor-pointer"
              >
                <span>이 일정으로 접수하기</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>

        {/* 2-Part Intensive Curriculum Breakdown */}
        <div className="rounded-2xl bg-[#121212] border border-[var(--gold)]/30 p-6 sm:p-8 mb-12 shadow-2xl">
          <div className="flex items-center gap-2 text-[var(--gold)] text-xs font-bold uppercase tracking-wider mb-2">
            <BookOpen className="w-4 h-4" />
            <span>CURRICULUM BREAKDOWN (TOTAL 160 MIN)</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-6">
            160분 만에 손끝 감각을 완벽히 마스터하는 초밀착 실습 과정
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {ACADEMY_INFO.curriculum.map((curr, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-[#0c0c0c] border border-[var(--border)] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-extrabold text-[var(--gold)]">{curr.part}</span>
                    <span className="text-xs px-2 py-0.5 rounded bg-[var(--gold)]/15 text-[var(--gold)] font-bold">
                      {curr.duration}
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-white mb-4">{curr.title}</h4>
                  <ul className="space-y-2.5">
                    {curr.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-[var(--gold)] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4 Major Salon Benefits Grid */}
        <div className="mb-14">
          <div className="text-center mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
              수료 및 가맹 살롱 원장님께 드리는 독점 혜택
            </h3>
            <p className="text-xs sm:text-sm text-[var(--text-muted)]">
              기술 전수에서 끝나지 않고 매장 매출 성장을 위한 온/오프라인 전방위 마케팅을 지원합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {ACADEMY_INFO.benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-[#121212] border border-[var(--border)] hover:border-[var(--gold)]/40 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-[var(--gold)]/10 border border-[var(--gold)]/30 flex items-center justify-center text-[var(--gold)] mb-3">
                  <Award className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-white mb-1.5">{benefit.title}</h4>
                <p className="text-xs text-[var(--text-muted)] leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Application Form Section */}
        <div id="academy-application-form" className="max-w-3xl mx-auto rounded-2xl bg-gradient-to-b from-[#141414] to-[#0c0c0c] border border-[var(--gold)]/40 p-6 sm:p-10 shadow-2xl relative">
          <div className="text-center mb-8">
            <span className="text-xs font-bold text-[var(--gold)] uppercase tracking-wider block mb-1">
              DIRECTOR APPLICATION
            </span>
            <h3 className="text-2xl font-bold text-white font-serif-luxury">
              원장님 교육 신청 및 가맹 상담 접수
            </h3>
            <p className="text-xs sm:text-sm text-[var(--text-muted)] mt-1">
              신청서를 작성해 주시면 (주)케이메디플러스 교육팀에서 24시간 이내에 개별 연락을 드립니다.
            </p>
          </div>

          {isSubmitted ? (
            <div className="p-8 text-center space-y-4 bg-[#121212] rounded-xl border border-[var(--gold)]/50 animate-in zoom-in-95">
              <div className="w-14 h-14 rounded-full bg-[var(--gold)]/20 text-[var(--gold)] border border-[var(--gold)] mx-auto flex items-center justify-center">
                <Check className="w-7 h-7" />
              </div>
              <h4 className="text-xl font-bold text-white">교육 신청이 정상 접수되었습니다!</h4>
              <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto">
                담당 교육 매니저가 <strong className="text-[var(--gold)]">{phone}</strong> 번호로 실습 일정 확정 및 교재 안내 연락을 드리겠습니다.
              </p>
              <div className="pt-3">
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-5 py-2 rounded-lg bg-[#222222] hover:bg-[#2e2e2e] text-xs font-semibold text-slate-300 cursor-pointer"
                >
                  새로운 신청서 작성
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Training Type Selector */}
              <div>
                <label className="block text-xs font-bold text-[var(--gold)] mb-2">
                  1. 희망 교육 과정 형태
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  <button
                    type="button"
                    onClick={() => setTrainingType('regular_academy')}
                    className={`p-3 rounded-xl border text-xs font-semibold text-left transition-all cursor-pointer ${
                      trainingType === 'regular_academy'
                        ? 'bg-[var(--gold)]/20 border-[var(--gold)] text-[var(--gold)] font-bold'
                        : 'bg-[#121212] border-[var(--border)] text-[var(--text-muted)]'
                    }`}
                  >
                    정기 실습 아카데미 (월/화)
                  </button>
                  <button
                    type="button"
                    onClick={() => setTrainingType('visit_1on1')}
                    className={`p-3 rounded-xl border text-xs font-semibold text-left transition-all cursor-pointer ${
                      trainingType === 'visit_1on1'
                        ? 'bg-[var(--gold)]/20 border-[var(--gold)] text-[var(--gold)] font-bold'
                        : 'bg-[#121212] border-[var(--border)] text-[var(--text-muted)]'
                    }`}
                  >
                    살롱 1:1 방문 맞춤 교육
                  </button>
                  <button
                    type="button"
                    onClick={() => setTrainingType('group_seminar')}
                    className={`p-3 rounded-xl border text-xs font-semibold text-left transition-all cursor-pointer ${
                      trainingType === 'group_seminar'
                        ? 'bg-[var(--gold)]/20 border-[var(--gold)] text-[var(--gold)] font-bold'
                        : 'bg-[#121212] border-[var(--border)] text-[var(--text-muted)]'
                    }`}
                  >
                    지회/단체 특강 세미나
                  </button>
                </div>
              </div>

              {/* Director & Salon Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1.5">
                    원장님 성함 *
                  </label>
                  <input
                    type="text"
                    value={directorName}
                    onChange={(e) => setDirectorName(e.target.value)}
                    placeholder="예: 김선영"
                    className="w-full p-2.5 rounded-xl bg-[#121212] border border-[var(--border)] text-white text-xs placeholder-slate-500 focus:outline-none focus:border-[var(--gold)]"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1.5">
                    헤어샵 상호명 *
                  </label>
                  <input
                    type="text"
                    value={salonName}
                    onChange={(e) => setSalonName(e.target.value)}
                    placeholder="예: 아우라 제이 헤어"
                    className="w-full p-2.5 rounded-xl bg-[#121212] border border-[var(--border)] text-white text-xs placeholder-slate-500 focus:outline-none focus:border-[var(--gold)]"
                    required
                  />
                </div>
              </div>

              {/* Phone & Region */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1.5">
                    원장님 연락처 (휴대폰) *
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="010-0000-0000"
                    className="w-full p-2.5 rounded-xl bg-[#121212] border border-[var(--border)] text-white text-xs placeholder-slate-500 focus:outline-none focus:border-[var(--gold)]"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1.5">
                    매장 위치 (시/도, 구)
                  </label>
                  <input
                    type="text"
                    value={region}
                    onChange={(e) => setRegion(e.target.value)}
                    placeholder="예: 서울 강남구 역삼동"
                    className="w-full p-2.5 rounded-xl bg-[#121212] border border-[var(--border)] text-white text-xs placeholder-slate-500 focus:outline-none focus:border-[var(--gold)]"
                  />
                </div>
              </div>

              {/* Business Number & Desired Day */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1.5">
                    사업자등록번호 (선택)
                  </label>
                  <input
                    type="text"
                    value={businessNumber}
                    onChange={(e) => setBusinessNumber(e.target.value)}
                    placeholder="000-00-00000"
                    className="w-full p-2.5 rounded-xl bg-[#121212] border border-[var(--border)] text-white text-xs placeholder-slate-500 focus:outline-none focus:border-[var(--gold)]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1.5">
                    희망 교육 요일/시간
                  </label>
                  <select
                    value={preferredDay}
                    onChange={(e) => setPreferredDay(e.target.value)}
                    className="w-full p-2.5 rounded-xl bg-[#121212] border border-[var(--border)] text-white text-xs focus:outline-none focus:border-[var(--gold)]"
                  >
                    <option value="월요일반 (저녁 8시)">매주 월요일 정규반 (저녁 8시)</option>
                    <option value="화요일반 (저녁 8시)">매주 화요일 정규반 (저녁 8시)</option>
                    <option value="방문일정조율">1:1 방문 맞춤 일정 조율</option>
                  </select>
                </div>
              </div>

              {/* Inquiries */}
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1.5">
                  궁금하신 점이나 전하고 싶은 메시지
                </label>
                <textarea
                  value={inquiry}
                  onChange={(e) => setInquiry(e.target.value)}
                  placeholder="예: 현재 살롱에서 헤드스파 메뉴를 운영 중인데 매출 연계 방안이 궁금합니다."
                  rows={2}
                  className="w-full p-2.5 rounded-xl bg-[#121212] border border-[var(--border)] text-white text-xs placeholder-slate-500 focus:outline-none focus:border-[var(--gold)]"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-3">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-gold-gradient hover:opacity-90 text-stone-950 font-bold text-sm shadow-xl shadow-[var(--gold)]/20 flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>원장님 실습 교육 및 가맹 신청서 제출</span>
                </button>
                <p className="text-[11px] text-[var(--text-muted)] text-center mt-2">
                  * 제출하신 개인정보는 교육 상담 및 일정 조율 목적으로만 안전하게 사용됩니다.
                </p>
              </div>
            </form>
          )}

          {/* Director Member Portal Direct Link */}
          <div className="mt-8 pt-6 border-t border-[var(--border)] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
            <span className="text-[var(--text-muted)]">
              이미 수료하신 가맹점 원장님이신가요?
            </span>
            <button
              onClick={onOpenDirectorPortal}
              className="text-[var(--gold)] hover:text-[var(--gold-light)] font-bold underline flex items-center gap-1 cursor-pointer"
            >
              <span>원장님 전용 라운지 (자료실·홍보물 다운로드) 입장 →</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
