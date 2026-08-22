import React from 'react';
import { Calendar, GraduationCap, MapPin, Phone } from 'lucide-react';

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
    <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-lg border-t border-[#A855F7]/25 px-4 py-2.5 shadow-2xl flex items-center justify-between gap-2">
      <button
        onClick={onScrollToSalons}
        className="flex flex-col items-center justify-center p-1 text-[10px] font-bold text-[#5B4870] hover:text-[#7E22CE] transition-colors"
      >
        <MapPin className="w-4 h-4 text-[#7E22CE] mb-0.5" />
        <span>가맹샵</span>
      </button>

      <button
        onClick={onOpenAcademy}
        className="flex flex-col items-center justify-center p-1 text-[10px] font-bold text-[#5B4870] hover:text-[#7E22CE] transition-colors"
      >
        <GraduationCap className="w-4 h-4 text-[#DB2777] mb-0.5" />
        <span>원장실습</span>
      </button>

      <button
        onClick={onOpenReservation}
        className="flex-1 py-2.5 px-3 rounded-xl bg-gradient-to-r from-[#9333EA] to-[#DB2777] text-white text-xs font-bold shadow-md shadow-pink-900/20 flex items-center justify-center gap-1.5 cursor-pointer"
      >
        <Calendar className="w-3.5 h-3.5" />
        <span>5분 퀵터치 예약하기</span>
      </button>
    </div>
  );
};
