import React, { useState } from 'react';
import { ACADEMY_INFO } from '../data/mockData';
import { AcademyApplicationData } from '../types';
import {
  GraduationCap,
  Calendar,
  Clock,
  MapPin,
  CheckCircle2,
  Users,
  Award,
  BookOpen,
  Send,
  ShieldCheck,
  TrendingUp
} from 'lucide-react';

interface AcademySectionProps {
  onOpenDirectorPortal?: () => void;
  onSubmitApplication?: (appData: AcademyApplicationData) => void;
  onApplySuccess?: () => void;
}

export const AcademySection: React.FC<AcademySectionProps> = ({
  onOpenDirectorPortal,
  onSubmitApplication,
  onApplySuccess,
}) => {
  const [directorName, setDirectorName] = useState('');
  const [salonName, setSalonName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [region, setRegion] = useState('서울/수도권');
  const [trainingType, setTrainingType] = useState<'regular_academy' | 'visit_1on1' | 'group_seminar'>('regular_academy');
  const [preferredDay, setPreferredDay] = useState<string>('1기 주말 집중반 (토요일 14:00)');
  const [inquiry, setInquiry] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!directorName || !salonName || !phone) {
      alert('필수 정보를 입력해주세요.');
      return;
    }

    const application: AcademyApplicationData = {
      id: `ACAD-${Date.now()}`,
      directorName,
      salonName,
      region,
      phone,
      email,
      trainingType,
      preferredDay,
      inquiry,
      submittedAt: new Date().toISOString(),
      status: 'submitted',
    };

    setSubmitted(true);
    if (onSubmitApplication) onSubmitApplication(application);
    if (onApplySuccess) onApplySuccess();
  };

  return (
    <section id="academy" className="scroll-mt-20 sm:scroll-mt-24 py-16 lg:py-24 border-b border-[#A855F7]/15 relative bg-[#FAF7FD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="hero-badge-dark inline-flex items-center gap-2 mb-3">
            <GraduationCap className="w-3.5 h-3.5 text-[#DB2777]" />
            <span>DIRECTOR HANDS-ON ACADEMY</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-[#180D26] font-serif-luxury mb-4">
            {ACADEMY_INFO.title}
          </h2>
          <p className="text-sm sm:text-base text-[#7E22CE] font-semibold max-w-2xl mx-auto mb-2">
            {ACADEMY_INFO.subtitle}
          </p>
          <p className="text-xs sm:text-sm text-[#5B4870]">
            참가 대상: {ACADEMY_INFO.targetAudience} · 교육 장소: {ACADEMY_INFO.venue}
          </p>
        </div>

        {/* 2-Column Split: Curriculum & Schedules vs Application Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          {/* Left Column: Schedules & 60-Min Curriculum */}
          <div className="lg:col-span-6 space-y-6">
            {/* Schedules Card */}
            <div className="rounded-3xl bg-[#1F0D33] border border-[#9333EA]/30 p-6 sm:p-8 text-white shadow-xl">
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-[#9333EA]/30">
                <Calendar className="w-5 h-5 text-[#F472B6]" />
                <h3 className="text-base font-bold text-white">교육 일정 & 실습장소 안내</h3>
              </div>

              <div className="space-y-4">
                {ACADEMY_INFO.schedules.map((sch, idx) => (
                  <div key={idx} className="p-3.5 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                    <div className="flex items-center justify-between">
                      <strong className="text-sm text-[#F472B6]">{sch.day}</strong>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#DB2777]/30 text-[#FCE7F3] border border-[#F472B6]/30">
                        {sch.status}
                      </span>
                    </div>
                    <p className="text-xs text-[#E9D5FF] flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#F472B6]" />
                      <span>{sch.time}</span>
                    </p>
                    <p className="text-xs text-[#E9D5FF] flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#F472B6]" />
                      <span>{sch.venue}</span>
                    </p>
                    <p className="text-[11px] text-[#A855F7] pl-5">{sch.capacity}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Curriculum Breakdown */}
            <div className="rounded-3xl bg-white border border-[#A855F7]/20 p-6 sm:p-8 shadow-md space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-[#A855F7]/15">
                <div className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-[#7E22CE]" />
                  <h3 className="text-base font-bold text-[#180D26]">60분 실습 커리큘럼 (모듈 1·2·3)</h3>
                </div>
                <span className="text-xs text-[#DB2777] font-bold">1:1 핸즈온 코칭</span>
              </div>

              <div className="space-y-4">
                {ACADEMY_INFO.curriculum.map((curr, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-[#FAF7FD] border border-[#A855F7]/20 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-[#FCE7F3] text-[#BE185D]">
                        {curr.part} ({curr.duration})
                      </span>
                      <span className="text-xs font-semibold text-[#7E22CE]">{curr.badge}</span>
                    </div>
                    <h4 className="text-xs sm:text-sm font-bold text-[#180D26]">{curr.title}</h4>
                    <ul className="space-y-1 text-xs text-[#5B4870]">
                      {curr.items.map((item, iIdx) => (
                        <li key={iIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#7E22CE] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Application Form */}
          <div className="lg:col-span-6 rounded-3xl bg-white border border-[#A855F7]/25 p-6 sm:p-8 shadow-xl">
            <div className="mb-6 pb-4 border-b border-[#A855F7]/15">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#DB2777] block">
                SEMINAR REGISTRATION
              </span>
              <h3 className="text-xl font-bold text-[#180D26] font-serif-luxury">
                원장님 실습 아카데미 참가 신청서
              </h3>
            </div>

            {submitted ? (
              <div className="py-8 text-center space-y-4 animate-in fade-in">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#9333EA] to-[#DB2777] text-white flex items-center justify-center mx-auto shadow-lg">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-lg font-bold text-[#180D26]">참가 신청이 정상 접수되었습니다!</h4>
                <p className="text-xs text-[#5B4870] leading-relaxed max-w-xs mx-auto">
                  {salonName} ({directorName} 원장님), 본사 교육팀에서 개별 연락을 드려 좌석 배정 및 입금 안내를 도와드립니다.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#9333EA] to-[#DB2777] text-white text-xs font-bold shadow-md shadow-pink-900/20"
                >
                  다른 일정 추가 신청하기
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-[#180D26] mb-1.5">
                      원장님 성함 *
                    </label>
                    <input
                      type="text"
                      value={directorName}
                      onChange={(e) => setDirectorName(e.target.value)}
                      placeholder="예: 김민서 원장"
                      className="w-full p-2.5 rounded-xl bg-[#FAF7FD] border border-[#A855F7]/25 text-[#180D26] text-xs focus:outline-none focus:border-[#DB2777]"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#180D26] mb-1.5">
                      헤어살롱 상호명 *
                    </label>
                    <input
                      type="text"
                      value={salonName}
                      onChange={(e) => setSalonName(e.target.value)}
                      placeholder="예: 아우라 제이 헤어"
                      className="w-full p-2.5 rounded-xl bg-[#FAF7FD] border border-[#A855F7]/25 text-[#180D26] text-xs focus:outline-none focus:border-[#DB2777]"
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
                      className="w-full p-2.5 rounded-xl bg-[#FAF7FD] border border-[#A855F7]/25 text-[#180D26] text-xs focus:outline-none focus:border-[#DB2777]"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#180D26] mb-1.5">
                      지역 *
                    </label>
                    <select
                      value={region}
                      onChange={(e) => setRegion(e.target.value)}
                      className="w-full p-2.5 rounded-xl bg-[#FAF7FD] border border-[#A855F7]/25 text-[#180D26] text-xs focus:outline-none focus:border-[#DB2777]"
                    >
                      <option value="서울/수도권">서울/수도권</option>
                      <option value="경기/인천">경기/인천</option>
                      <option value="부산/경남">부산/경남</option>
                      <option value="기타">기타 지역</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#180D26] mb-1.5">
                    희망 교육 과정 *
                  </label>
                  <select
                    value={trainingType}
                    onChange={(e) => setTrainingType(e.target.value as any)}
                    className="w-full p-2.5 rounded-xl bg-[#FAF7FD] border border-[#A855F7]/25 text-[#180D26] text-xs focus:outline-none focus:border-[#DB2777]"
                  >
                    <option value="regular_academy">60분 실습과정 (서울아카데미 직강)</option>
                    <option value="visit_1on1">원장님 샵 방문 1:1 핸즈온 교육</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#180D26] mb-1.5">
                    참석 희망 일정 *
                  </label>
                  <select
                    value={preferredDay}
                    onChange={(e) => setPreferredDay(e.target.value)}
                    className="w-full p-2.5 rounded-xl bg-[#FAF7FD] border border-[#A855F7]/25 text-[#180D26] text-xs focus:outline-none focus:border-[#DB2777]"
                  >
                    <option value="1기 주말 집중반 (토요일 14:00)">1기 주말 집중반 (토요일 14:00 ~ 15:00)</option>
                    <option value="1기 평일 정규반 (화요일 20:00)">1기 평일 정규반 (화요일 20:00 ~ 21:00)</option>
                    <option value="방문일정조율">지방/살롱 방문일정 개별 조율</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#180D26] mb-1.5">
                    추가 문의사항 또는 메모 (선택)
                  </label>
                  <textarea
                    rows={2}
                    value={inquiry}
                    onChange={(e) => setInquiry(e.target.value)}
                    placeholder="예: 매장 디자이너와 함께 참석 가능한가요? 문의사항을 적어주세요."
                    className="w-full p-2.5 rounded-xl bg-[#FAF7FD] border border-[#A855F7]/25 text-[#180D26] text-xs placeholder-[#8A78A0] focus:outline-none focus:border-[#DB2777]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#9333EA] via-[#A855F7] to-[#DB2777] hover:opacity-95 text-white font-bold text-xs sm:text-sm shadow-md shadow-pink-900/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>실습 아카데미 참가 신청하기</span>
                </button>
              </form>
            )}
          </div>
        </div>

        {/* 6 Core Franchise Benefits Grid */}
        <div className="mt-12 pt-8 border-t border-[#A855F7]/20">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#DB2777] block mb-1">
              FRANCHISE PARTNERSHIP BENEFITS
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-[#180D26] font-serif-luxury">
              마스터키 플렉스터치 가맹 헤어샵 6대 특전
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {ACADEMY_INFO.benefits.map((bnf, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-white border border-[#A855F7]/20 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="w-8 h-8 rounded-xl bg-[#FCE7F3] text-[#BE185D] flex items-center justify-center text-xs font-bold mb-3">
                    0{idx + 1}
                  </div>
                  <h4 className="text-xs sm:text-sm font-bold text-[#180D26] mb-1.5">{bnf.title}</h4>
                  <p className="text-xs text-[#5B4870] leading-relaxed">{bnf.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
