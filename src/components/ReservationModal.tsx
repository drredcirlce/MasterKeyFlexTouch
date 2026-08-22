import React, { useState, useEffect } from 'react';
import { Salon, Program, ConfirmedReservation } from '../types';
import {
  X,
  Calendar as CalendarIcon,
  Clock,
  MapPin,
  Sparkles,
  CheckCircle2,
  Phone,
  User,
  ShieldCheck,
  CreditCard,
  HeartPulse
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
  const [selectedSalonId, setSelectedSalonId] = useState<string>(
    defaultSalonId || salons[0]?.id || ''
  );
  const [selectedProgramId, setSelectedProgramId] = useState<string>(
    defaultProgramId || programs[0]?.id || ''
  );
  const [selectedPlanIndex, setSelectedPlanIndex] = useState<number>(defaultPlanIndex);
  const [selectedDate, setSelectedDate] = useState<string>('2026-08-25');
  const [selectedTime, setSelectedTime] = useState<string>('14:00');
  const [customerName, setCustomerName] = useState<string>('');
  const [customerPhone, setCustomerPhone] = useState<string>('');
  const [specialRequests, setSpecialRequests] = useState<string>('');
  const [step, setStep] = useState<'form' | 'success'>('form');

  useEffect(() => {
    if (defaultSalonId) setSelectedSalonId(defaultSalonId);
    if (defaultProgramId) setSelectedProgramId(defaultProgramId);
    setSelectedPlanIndex(defaultPlanIndex);
    setStep('form');
  }, [defaultSalonId, defaultProgramId, defaultPlanIndex, isOpen]);

  if (!isOpen) return null;

  const currentSalon = salons.find((s) => s.id === selectedSalonId) || salons[0];
  const currentProgram = programs.find((p) => p.id === selectedProgramId) || programs[0];
  const currentPlan = currentProgram?.pricingPlans[selectedPlanIndex] || currentProgram?.pricingPlans[0];

  const timeSlots = [
    '10:30', '11:30', '13:00', '14:00', '15:30', '16:30', '18:00', '19:00'
  ];

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName || !customerPhone) {
      alert('예약자 성함과 연락처를 입력해주세요.');
      return;
    }

    const newRes: ConfirmedReservation = {
      id: `RES-${Date.now()}`,
      customerName,
      customerPhone,
      salonId: currentSalon.id,
      salonName: currentSalon.name,
      salonBranch: currentSalon.branch,
      salonAddress: currentSalon.address,
      salonPhone: currentSalon.phone,
      programId: currentProgram.id,
      programTitle: currentProgram.title,
      pricingPlanIndex: selectedPlanIndex,
      planName: currentPlan?.name || '',
      totalPrice: currentPlan?.salePrice || 0,
      date: selectedDate,
      time: selectedTime,
      focusAreas: ['목·어깨 뭉침', '두피 열감'],
      specialRequests,
      createdAt: new Date().toISOString(),
      status: 'confirmed',
    };

    onConfirmReservation(newRes);
    setStep('success');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl max-h-[92vh] overflow-y-auto bg-white border border-[#A855F7]/30 rounded-3xl shadow-2xl text-[#180D26] p-6 sm:p-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-[#FAF7FD] text-[#5B4870] hover:text-[#180D26] hover:bg-[#F3E8FC] transition-colors cursor-pointer border border-[#A855F7]/20"
        >
          <X className="w-5 h-5" />
        </button>

        {step === 'form' ? (
          <div>
            {/* Header */}
            <div className="mb-6">
              <div className="hero-badge-dark inline-flex items-center gap-1.5 mb-2">
                <Sparkles className="w-3.5 h-3.5 text-[#DB2777]" />
                <span>ONLINE SALON RESERVATION</span>
              </div>
              <h3 className="text-2xl font-bold text-[#180D26] font-serif-luxury">
                플렉스터치 시술 예약 신청
              </h3>
              <p className="text-xs text-[#5B4870] mt-1">
                원하시는 가맹 헤어샵과 5분 퀵케어 프로그램을 선택하시면 즉시 예약 접수됩니다.
              </p>
            </div>

            <form onSubmit={handleBookingSubmit} className="space-y-5">
              {/* Step 1: Select Salon */}
              <div>
                <label className="block text-xs font-bold text-[#180D26] mb-1.5 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#7E22CE]" />
                  <span>1. 가맹 헤어샵 선택 *</span>
                </label>
                <select
                  value={selectedSalonId}
                  onChange={(e) => setSelectedSalonId(e.target.value)}
                  className="w-full p-2.5 rounded-xl bg-[#FAF7FD] border border-[#A855F7]/25 text-[#180D26] text-xs focus:outline-none focus:border-[#DB2777]"
                >
                  {salons.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.name} ({s.branch}) - {s.district} / 원장: {s.directorName}
                    </option>
                  ))}
                </select>
                <p className="text-[11px] text-[#5B4870] mt-1 pl-1">
                  위치: {currentSalon?.address} ({currentSalon?.nearestStation})
                </p>
              </div>

              {/* Step 2: Select Program & Pricing Plan */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-[#180D26] mb-1.5 flex items-center gap-1.5">
                    <HeartPulse className="w-3.5 h-3.5 text-[#DB2777]" />
                    <span>2. 프로그램 선택 *</span>
                  </label>
                  <select
                    value={selectedProgramId}
                    onChange={(e) => {
                      setSelectedProgramId(e.target.value);
                      setSelectedPlanIndex(0);
                    }}
                    className="w-full p-2.5 rounded-xl bg-[#FAF7FD] border border-[#A855F7]/25 text-[#180D26] text-xs focus:outline-none focus:border-[#DB2777]"
                  >
                    {programs.map((p) => (
                      <option key={p.id} value={p.id}>
                        {p.title} ({p.durationMinutes}분)
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#180D26] mb-1.5 flex items-center gap-1.5">
                    <CreditCard className="w-3.5 h-3.5 text-[#7E22CE]" />
                    <span>시술 옵션 / 횟수 *</span>
                  </label>
                  <select
                    value={selectedPlanIndex}
                    onChange={(e) => setSelectedPlanIndex(Number(e.target.value))}
                    className="w-full p-2.5 rounded-xl bg-[#FAF7FD] border border-[#A855F7]/25 text-[#180D26] text-xs focus:outline-none focus:border-[#DB2777]"
                  >
                    {currentProgram?.pricingPlans.map((pl, idx) => (
                      <option key={idx} value={idx}>
                        {pl.name} - {pl.salePrice.toLocaleString()}원 ({pl.sessions}회)
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Step 3: Date & Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-[#180D26] mb-1.5 flex items-center gap-1.5">
                    <CalendarIcon className="w-3.5 h-3.5 text-[#7E22CE]" />
                    <span>3. 방문 희망 일자 *</span>
                  </label>
                  <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full p-2.5 rounded-xl bg-[#FAF7FD] border border-[#A855F7]/25 text-[#180D26] text-xs focus:outline-none focus:border-[#DB2777]"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#180D26] mb-1.5 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#7E22CE]" />
                    <span>방문 희망 시간 *</span>
                  </label>
                  <select
                    value={selectedTime}
                    onChange={(e) => setSelectedTime(e.target.value)}
                    className="w-full p-2.5 rounded-xl bg-[#FAF7FD] border border-[#A855F7]/25 text-[#180D26] text-xs focus:outline-none focus:border-[#DB2777]"
                  >
                    {timeSlots.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Customer Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-[#180D26] mb-1.5">
                    예약자 성함 *
                  </label>
                  <input
                    type="text"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder="홍길동"
                    className="w-full p-2.5 rounded-xl bg-[#FAF7FD] border border-[#A855F7]/25 text-[#180D26] text-xs placeholder-[#8A78A0] focus:outline-none focus:border-[#DB2777]"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#180D26] mb-1.5">
                    휴대폰 번호 *
                  </label>
                  <input
                    type="tel"
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    placeholder="010-0000-0000"
                    className="w-full p-2.5 rounded-xl bg-[#FAF7FD] border border-[#A855F7]/25 text-[#180D26] text-xs placeholder-[#8A78A0] focus:outline-none focus:border-[#DB2777]"
                    required
                  />
                </div>
              </div>

              {/* Special Request */}
              <div>
                <label className="block text-xs font-bold text-[#180D26] mb-1.5">
                  집중 관리를 원하시는 부위 또는 요청사항 (선택)
                </label>
                <textarea
                  rows={2}
                  value={specialRequests}
                  onChange={(e) => setSpecialRequests(e.target.value)}
                  placeholder="예: 오른쪽 승모근이 특히 많이 결립니다. 두통이 잦습니다."
                  className="w-full p-2.5 rounded-xl bg-[#FAF7FD] border border-[#A855F7]/25 text-[#180D26] text-xs placeholder-[#8A78A0] focus:outline-none focus:border-[#DB2777]"
                />
              </div>

              {/* Price Summary Box */}
              <div className="p-4 rounded-2xl bg-gradient-to-r from-[#FAF7FD] to-[#F3E8FC] border border-[#A855F7]/25 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-[#5B4870] block">현장 결제 예상 금액</span>
                  <span className="text-sm font-bold text-[#180D26]">
                    {currentProgram?.title} ({currentPlan?.name})
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-xl font-bold text-[#BE185D]">
                    {currentPlan?.salePrice.toLocaleString()}원
                  </span>
                  <span className="text-[10px] text-[#5B4870] block">(부가세 포함)</span>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#9333EA] via-[#A855F7] to-[#DB2777] hover:opacity-95 text-white font-bold text-xs sm:text-sm shadow-md shadow-pink-900/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>예약 신청 완료하기</span>
              </button>
            </form>
          </div>
        ) : (
          /* Step 2: Success Confirmation */
          <div className="py-8 text-center space-y-5 animate-in zoom-in-95">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#9333EA] to-[#DB2777] text-white flex items-center justify-center mx-auto shadow-xl">
              <CheckCircle2 className="w-9 h-9" />
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[#180D26] font-serif-luxury">
                예약이 정상 접수되었습니다!
              </h3>
              <p className="text-xs text-[#5B4870] mt-1">
                {customerName} 님, 살롱에서 예약 확인 후 안내 카카오 알림톡/문자를 발송해 드립니다.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#FAF7FD] border border-[#A855F7]/25 text-left text-xs space-y-2 max-w-md mx-auto">
              <div className="flex justify-between border-b border-[#A855F7]/15 pb-2">
                <span className="text-[#5B4870]">방문 살롱:</span>
                <span className="font-bold text-[#180D26]">{currentSalon.name} ({currentSalon.branch})</span>
              </div>
              <div className="flex justify-between border-b border-[#A855F7]/15 pb-2">
                <span className="text-[#5B4870]">선택 프로그램:</span>
                <span className="font-bold text-[#180D26]">{currentProgram.title}</span>
              </div>
              <div className="flex justify-between border-b border-[#A855F7]/15 pb-2">
                <span className="text-[#5B4870]">예약 일시:</span>
                <span className="font-bold text-[#7E22CE]">{selectedDate} {selectedTime}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#5B4870]">결제 예상 금액:</span>
                <span className="font-bold text-[#BE185D]">{currentPlan?.salePrice.toLocaleString()}원 (현장결제)</span>
              </div>
            </div>

            <button
              onClick={onClose}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#9333EA] to-[#DB2777] text-white font-bold text-xs sm:text-sm shadow-md shadow-pink-900/20 cursor-pointer"
            >
              확인 및 창 닫기
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
