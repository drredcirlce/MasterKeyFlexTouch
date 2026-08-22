import React, { useState } from 'react';
import { Salon, Program, ConfirmedReservation } from '../types';
import {
  X,
  Calendar,
  Clock,
  MapPin,
  Sparkles,
  CheckCircle2,
  ShieldCheck,
  User,
  Phone,
  FileText,
  HeartPulse,
  Share2,
  Check
} from 'lucide-react';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
  salons: Salon[];
  programs: Program[];
  defaultSalonId?: string;
  defaultProgramId?: string;
  defaultPlanIndex?: number;
  onConfirmReservation: (reservation: ConfirmedReservation) => void;
}

export const ReservationModal: React.FC<ReservationModalProps> = ({
  isOpen,
  onClose,
  salons,
  programs,
  defaultSalonId,
  defaultProgramId,
  defaultPlanIndex = 0,
  onConfirmReservation,
}) => {
  const [step, setStep] = useState<number>(1);
  const [selectedSalonId, setSelectedSalonId] = useState<string>(defaultSalonId || salons[0]?.id || '');
  const [selectedProgramId, setSelectedProgramId] = useState<string>(defaultProgramId || programs[0]?.id || '');
  const [selectedPlanIndex, setSelectedPlanIndex] = useState<number>(defaultPlanIndex);
  const [selectedDate, setSelectedDate] = useState<string>('2026-08-20');
  const [selectedTime, setSelectedTime] = useState<string>('14:00');
  const [customerName, setCustomerName] = useState<string>('');
  const [customerPhone, setCustomerPhone] = useState<string>('');
  const [focusAreas, setFocusAreas] = useState<string[]>(['만성 승모근 뭉침', '두피 열감/두통']);
  const [specialRequests, setSpecialRequests] = useState<string>('');
  const [confirmedData, setConfirmedData] = useState<ConfirmedReservation | null>(null);

  if (!isOpen) return null;

  const currentSalon = salons.find((s) => s.id === selectedSalonId) || salons[0];
  const currentProgram = programs.find((p) => p.id === selectedProgramId) || programs[0];
  const currentPlan = currentProgram?.pricingPlans[selectedPlanIndex] || currentProgram?.pricingPlans[0];

  const focusOptions = [
    '만성 승모근 뭉침 & 결림',
    '거북목 & 목 회전 통증',
    '두피 열감 & 정수리 냄새',
    '안면 처짐 & 팔자주름',
    '턱관절 뻐근함 & 비대칭',
    '만성 편두통 & 수면장애',
    '헤어 펌/염색 시술과 동시진행'
  ];

  const timeSlots = [
    '10:30', '11:30', '13:00', '14:00', '15:30', '16:30', '17:30', '18:30', '19:30'
  ];

  const toggleFocus = (item: string) => {
    if (focusAreas.includes(item)) {
      setFocusAreas(focusAreas.filter((f) => f !== item));
    } else {
      setFocusAreas([...focusAreas, item]);
    }
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName || !customerPhone) {
      alert('고객명과 연락처를 입력해 주세요.');
      return;
    }

    const reservation: ConfirmedReservation = {
      id: `RSV-${Date.now().toString().slice(-6)}`,
      customerName,
      customerPhone,
      salonId: currentSalon.id,
      salonName: currentSalon.name,
      salonBranch: currentSalon.branch,
      salonAddress: `${currentSalon.address} (${currentSalon.detailAddress})`,
      salonPhone: currentSalon.phone,
      programId: currentProgram.id,
      programTitle: currentProgram.title,
      pricingPlanIndex: selectedPlanIndex,
      planName: currentPlan.name,
      totalPrice: currentPlan.salePrice,
      date: selectedDate,
      time: selectedTime,
      focusAreas,
      specialRequests,
      status: 'confirmed',
      createdAt: new Date().toLocaleDateString('ko-KR')
    };

    setConfirmedData(reservation);
    onConfirmReservation(reservation);
    setStep(3); // Success Screen
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl max-h-[92vh] overflow-y-auto bg-[#0d0d0d] border border-[var(--gold)]/40 rounded-2xl shadow-2xl text-slate-100 p-6 sm:p-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg bg-[#1a1a1a] text-[var(--text-muted)] hover:text-white hover:bg-[#252525] transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[var(--gold)]/15 text-[var(--gold)] border border-[var(--gold)]/30 mb-2">
            <Calendar className="w-3.5 h-3.5 text-[var(--gold)]" />
            <span>실시간 가맹 살롱 온라인 예약</span>
          </div>
          <h3 className="text-2xl font-bold text-white font-serif-luxury">
            마스터키 플렉스터치 예약 신청
          </h3>
          <p className="text-xs text-[var(--text-muted)] mt-1">
            원하시는 공인 가맹 헤어샵과 시술 프로그램, 일정을 선택해 주세요.
          </p>
        </div>

        {/* Progress Step Indicator */}
        {step !== 3 && (
          <div className="flex items-center justify-between mb-8 px-4">
            <div className="flex items-center gap-2">
              <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${
                step >= 1 ? 'bg-gold-gradient text-stone-950 font-bold' : 'bg-[#1a1a1a] text-[var(--text-muted)]'
              }`}>
                1
              </span>
              <span className={`text-xs font-semibold ${step >= 1 ? 'text-[var(--gold)]' : 'text-slate-500'}`}>
                살롱 & 프로그램 선택
              </span>
            </div>
            <div className="flex-1 h-0.5 mx-3 bg-[#1e1e1e]" />
            <div className="flex items-center gap-2">
              <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${
                step >= 2 ? 'bg-gold-gradient text-stone-950 font-bold' : 'bg-[#1a1a1a] text-[var(--text-muted)]'
              }`}>
                2
              </span>
              <span className={`text-xs font-semibold ${step >= 2 ? 'text-[var(--gold)]' : 'text-slate-500'}`}>
                일정 & 고객 정보 입력
              </span>
            </div>
          </div>
        )}

        {/* Step 1: Choose Salon & Program */}
        {step === 1 && (
          <div className="space-y-6 animate-in fade-in">
            {/* Salon Picker */}
            <div>
              <label className="block text-xs font-bold text-[var(--gold)] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <MapPin className="w-4 h-4" />
                <span>1. 시술 희망 가맹 헤어샵 선택</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-h-48 overflow-y-auto pr-1">
                {salons.map((salon) => (
                  <button
                    key={salon.id}
                    type="button"
                    onClick={() => setSelectedSalonId(salon.id)}
                    className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                      selectedSalonId === salon.id
                        ? 'bg-[var(--gold)]/15 border-[var(--gold)] text-white shadow-md shadow-[var(--gold)]/10'
                        : 'bg-[#121212] border-[var(--border)] text-[var(--text-muted)] hover:text-slate-200'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-bold text-white truncate">{salon.name}</span>
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#1c1c1c] text-[var(--gold)] border border-[var(--border)]">
                        {salon.city}
                      </span>
                    </div>
                    <p className="text-[11px] text-[var(--text-muted)] truncate">{salon.branch}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Program Picker */}
            <div>
              <label className="block text-xs font-bold text-[var(--gold)] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4" />
                <span>2. 플렉스터치 프로그램 선택</span>
              </label>
              <div className="space-y-2">
                {programs.map((prog) => (
                  <button
                    key={prog.id}
                    type="button"
                    onClick={() => {
                      setSelectedProgramId(prog.id);
                      setSelectedPlanIndex(0);
                    }}
                    className={`w-full p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                      selectedProgramId === prog.id
                        ? 'bg-[var(--gold)]/15 border-[var(--gold)] text-white shadow-md shadow-[var(--gold)]/10'
                        : 'bg-[#121212] border-[var(--border)] text-[var(--text-muted)] hover:text-slate-200'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-bold text-white">{prog.title}</span>
                      <span className="text-xs text-[var(--gold)] font-bold">
                        약 {prog.durationMinutes}분 소요
                      </span>
                    </div>
                    <p className="text-xs text-[var(--text-muted)]">{prog.tagline}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Pricing Plan Selector for the Selected Program */}
            {currentProgram && (
              <div>
                <label className="block text-xs font-bold text-[var(--gold)] uppercase tracking-wider mb-2">
                  3. 이용권/멤버십 옵션 선택
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {currentProgram.pricingPlans.map((plan, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setSelectedPlanIndex(idx)}
                      className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                        selectedPlanIndex === idx
                          ? 'bg-gradient-to-b from-[#18150c] to-[#121212] border-[var(--gold)] text-white shadow-md shadow-[var(--gold)]/10'
                          : 'bg-[#121212] border-[var(--border)] text-[var(--text-muted)] hover:text-slate-200'
                      }`}
                    >
                      {plan.badge && (
                        <span className="inline-block text-[9px] font-bold px-1.5 py-0.5 rounded bg-[var(--gold)]/15 text-[var(--gold)] border border-[var(--gold)]/30 mb-1">
                          {plan.badge}
                        </span>
                      )}
                      <div className="text-xs font-bold text-white mb-0.5">{plan.name}</div>
                      <div className="text-sm font-extrabold text-[var(--gold)]">
                        {plan.salePrice.toLocaleString()}원
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 1 Next Button */}
            <div className="pt-4 flex justify-end">
              <button
                type="button"
                onClick={() => setStep(2)}
                className="px-6 py-3 rounded-xl bg-gold-gradient hover:opacity-90 text-stone-950 font-bold text-sm shadow-md shadow-[var(--gold)]/20 cursor-pointer"
              >
                일정 및 예약자 정보 입력하기 →
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Schedule & Customer Details */}
        {step === 2 && (
          <form onSubmit={handleBookingSubmit} className="space-y-6 animate-in fade-in">
            {/* Selected Summary Bar */}
            <div className="p-4 rounded-xl bg-[#141414] border border-[var(--border)] flex items-center justify-between text-xs">
              <div>
                <span className="text-[var(--text-muted)]">선택 살롱:</span>{' '}
                <strong className="text-white">{currentSalon.name} ({currentSalon.branch})</strong>
                <br />
                <span className="text-[var(--text-muted)]">선택 프로그램:</span>{' '}
                <strong className="text-[var(--gold)]">{currentProgram.title} ({currentPlan.name})</strong>
              </div>
              <button
                type="button"
                onClick={() => setStep(1)}
                className="text-xs text-[var(--gold)] font-semibold underline"
              >
                변경
              </button>
            </div>

            {/* Date & Time */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1.5">
                  희망 예약 날짜
                </label>
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="w-full p-2.5 rounded-xl bg-[#141414] border border-[var(--border)] text-white text-xs focus:outline-none focus:border-[var(--gold)]"
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1.5">
                  희망 예약 시간
                </label>
                <select
                  value={selectedTime}
                  onChange={(e) => setSelectedTime(e.target.value)}
                  className="w-full p-2.5 rounded-xl bg-[#141414] border border-[var(--border)] text-white text-xs focus:outline-none focus:border-[var(--gold)]"
                >
                  {timeSlots.map((time) => (
                    <option key={time} value={time}>
                      {time} (예약 가능)
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Focus Concern Areas */}
            <div>
              <label className="block text-xs font-bold text-slate-300 mb-2 flex items-center gap-1.5">
                <HeartPulse className="w-3.5 h-3.5 text-[var(--gold)]" />
                <span>집중 관리 희망 부위 및 고민 (중복 선택 가능)</span>
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {focusOptions.map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => toggleFocus(opt)}
                    className={`p-2 rounded-lg text-xs font-medium text-left border transition-colors cursor-pointer ${
                      focusAreas.includes(opt)
                        ? 'bg-[var(--gold)]/20 border-[var(--gold)] text-[var(--gold)] font-bold'
                        : 'bg-[#141414] border-[var(--border)] text-[var(--text-muted)] hover:text-slate-200'
                    }`}
                  >
                    {focusAreas.includes(opt) ? '✓ ' : '+ '}
                    {opt}
                  </button>
                ))}
              </div>
            </div>

            {/* Customer Name & Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1.5">
                  예약자 성함
                </label>
                <input
                  type="text"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  placeholder="홍길동"
                  className="w-full p-2.5 rounded-xl bg-[#141414] border border-[var(--border)] text-white text-xs placeholder-slate-500 focus:outline-none focus:border-[var(--gold)]"
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1.5">
                  휴대폰 번호
                </label>
                <input
                  type="tel"
                  value={customerPhone}
                  onChange={(e) => setCustomerPhone(e.target.value)}
                  placeholder="010-1234-5678"
                  className="w-full p-2.5 rounded-xl bg-[#141414] border border-[var(--border)] text-white text-xs placeholder-slate-500 focus:outline-none focus:border-[var(--gold)]"
                  required
                />
              </div>
            </div>

            {/* Special Request */}
            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1.5">
                원장님께 전달할 요청사항 (선택)
              </label>
              <textarea
                value={specialRequests}
                onChange={(e) => setSpecialRequests(e.target.value)}
                placeholder="예: 펌 시술과 함께 진행하고 싶습니다 / 목 뒤 디스크가 있어서 부드러운 터치 부탁드립니다."
                rows={2}
                className="w-full p-2.5 rounded-xl bg-[#141414] border border-[var(--border)] text-white text-xs placeholder-slate-500 focus:outline-none focus:border-[var(--gold)]"
              />
            </div>

            {/* Actions */}
            <div className="flex items-center justify-between pt-4 border-t border-[var(--border)]">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="px-4 py-2.5 rounded-lg bg-[#1c1c1c] text-slate-300 text-xs font-semibold hover:bg-[#252525] border border-[var(--border)] cursor-pointer"
              >
                ← 이전 단계
              </button>
              <button
                type="submit"
                className="px-6 py-3 rounded-xl bg-gold-gradient hover:opacity-90 text-stone-950 font-bold text-sm shadow-lg shadow-[var(--gold)]/20 cursor-pointer flex items-center gap-2"
              >
                <Check className="w-4 h-4" />
                <span>예약 확정 및 신청 완료</span>
              </button>
            </div>
          </form>
        )}

        {/* Step 3: Booking Success Ticket & Confirmation */}
        {step === 3 && confirmedData && (
          <div className="space-y-6 text-center animate-in zoom-in-95 duration-300">
            <div className="w-16 h-16 rounded-full bg-[var(--gold)]/20 border-2 border-[var(--gold)] text-[var(--gold)] mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div>
              <h4 className="text-2xl font-bold text-white mb-1">
                예약 접수가 정상 완료되었습니다!
              </h4>
              <p className="text-xs sm:text-sm text-[var(--text-muted)]">
                예약 확인 알림톡이 고객님의 번호({confirmedData.customerPhone})로 발송되었습니다.
              </p>
            </div>

            {/* Digital Reservation Ticket */}
            <div className="p-6 rounded-2xl bg-gradient-to-b from-[#141414] via-[#0f0f0f] to-[#080808] border border-[var(--gold)]/40 text-left relative shadow-2xl">
              <div className="flex items-center justify-between pb-4 border-b border-[var(--border)] mb-4">
                <div>
                  <span className="text-[10px] font-mono text-[var(--gold)]">RESERVATION PASS</span>
                  <div className="text-base font-bold text-white">{confirmedData.id}</div>
                </div>
                <div className="px-2.5 py-1 rounded bg-[var(--gold)]/20 text-[var(--gold)] border border-[var(--gold)]/30 text-xs font-bold">
                  예약 확정
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 text-xs">
                <div>
                  <span className="text-[var(--text-muted)] block">방문 살롱</span>
                  <span className="text-white font-bold">{confirmedData.salonName}</span>
                  <span className="text-[var(--text-muted)] block text-[11px]">{confirmedData.salonBranch}</span>
                </div>
                <div>
                  <span className="text-[var(--text-muted)] block">예약 일시</span>
                  <span className="text-[var(--gold)] font-bold">{confirmedData.date} {confirmedData.time}</span>
                </div>
                <div>
                  <span className="text-[var(--text-muted)] block">시술 프로그램</span>
                  <span className="text-white font-bold">{confirmedData.programTitle}</span>
                  <span className="text-[var(--gold)] block text-[11px]">{confirmedData.planName} ({confirmedData.totalPrice.toLocaleString()}원)</span>
                </div>
                <div>
                  <span className="text-[var(--text-muted)] block">예약자 성함</span>
                  <span className="text-white font-bold">{confirmedData.customerName} 님</span>
                  <span className="text-[var(--text-muted)] block text-[11px]">{confirmedData.customerPhone}</span>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-[var(--border)] text-[11px] text-[var(--text-muted)] flex items-center justify-between">
                <span>살롱 문의: {confirmedData.salonPhone}</span>
                <span>매장 현장 결제 또는 사전 확인</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={() => {
                  alert('예약 상세 정보가 클립보드에 복사되었습니다.');
                }}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[#1c1c1c] hover:bg-[#252525] text-slate-200 text-xs font-semibold flex items-center justify-center gap-1.5 cursor-pointer border border-[var(--border)]"
              >
                <Share2 className="w-4 h-4" />
                <span>예약 내역 공유하기</span>
              </button>
              <button
                onClick={onClose}
                className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-gold-gradient hover:opacity-90 text-stone-950 text-xs font-bold cursor-pointer"
              >
                확인 및 닫기
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
