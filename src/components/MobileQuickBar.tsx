import React from 'react';
import { MapPin, Calendar, GraduationCap, Phone, Key } from 'lucide-react';

interface MobileQuickBarProps {
  onOpenReservation: () => void;
  onOpenAcademy: () => void;
  onScrollToSalons: () => void;
}

export const MobileQuickBar: React.FC<MobileQuickBarProps> = ({
  onOpenReservation,
  onOpenAcademy,
  onScrollToSalons,
}) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-[#080808]/95 border-t border-[var(--border)] backdrop-blur-lg px-3 py-2 shadow-2xl shadow-black">
      <div className="grid grid-cols-4 gap-1.5 max-w-md mx-auto">
        {/* Salon Map */}
        <button
          onClick={onScrollToSalons}
          className="flex flex-col items-center justify-center p-1.5 rounded-lg text-[var(--text-muted)] hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
        >
          <MapPin className="w-4 h-4 text-[var(--gold)] mb-0.5" />
          <span className="text-[10px] font-medium">가맹점 찾기</span>
        </button>

        {/* Book */}
        <button
          onClick={onOpenReservation}
          className="flex flex-col items-center justify-center p-1.5 rounded-lg bg-gold-gradient text-stone-950 font-bold shadow transition-transform active:scale-95 cursor-pointer"
        >
          <Calendar className="w-4 h-4 text-stone-950 mb-0.5" />
          <span className="text-[10px] font-bold">시술 예약</span>
        </button>

        {/* Academy */}
        <button
          onClick={onOpenAcademy}
          className="flex flex-col items-center justify-center p-1.5 rounded-lg text-[var(--gold)] hover:bg-white/5 transition-colors cursor-pointer"
        >
          <GraduationCap className="w-4 h-4 text-[var(--gold)] mb-0.5" />
          <span className="text-[10px] font-bold">원장님 교육</span>
        </button>

        {/* Phone Call */}
        <a
          href="tel:1544-7890"
          className="flex flex-col items-center justify-center p-1.5 rounded-lg text-[var(--text-muted)] hover:text-white hover:bg-white/5 transition-colors"
        >
          <Phone className="w-4 h-4 text-[var(--text-muted)] mb-0.5" />
          <span className="text-[10px] font-medium">전화 상담</span>
        </a>
      </div>
    </div>
  );
};
