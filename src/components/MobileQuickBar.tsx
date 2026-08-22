import React from 'react';
import { GraduationCap, MapPin, Phone, Building } from 'lucide-react';

interface MobileQuickBarProps {
  onOpenReservation?: () => void;
  onOpenAcademy: () => void;
  onScrollToSalons: () => void;
}

export const MobileQuickBar: React.FC<MobileQuickBarProps> = ({
  onOpenAcademy,
  onScrollToSalons,
}) => {
  return (
    <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-lg border-t border-[#A855F7]/25 px-4 py-2.5 shadow-2xl flex items-center justify-between gap-2">
      <button
        onClick={onScrollToSalons}
        className="flex flex-col items-center justify-center p-1 text-[10px] font-bold text-[#5B4870] hover:text-[#7E22CE] transition-colors shrink-0"
      >
        <MapPin className="w-4 h-4 text-[#7E22CE] mb-0.5" />
        <span>상권현황</span>
      </button>

      <a
        href="tel:02-734-1075"
        className="flex flex-col items-center justify-center p-1 text-[10px] font-bold text-[#5B4870] hover:text-[#7E22CE] transition-colors shrink-0"
      >
        <Phone className="w-4 h-4 text-[#DB2777] mb-0.5" />
        <span>전화상담</span>
      </a>

      <button
        onClick={onOpenAcademy}
        className="flex-1 py-2.5 px-3 rounded-xl bg-gradient-to-r from-[#9333EA] to-[#DB2777] text-white text-xs font-bold shadow-md shadow-pink-900/20 flex items-center justify-center gap-1.5 cursor-pointer"
      >
        <GraduationCap className="w-4 h-4" />
        <span>60분 실습 아카데미 신청</span>
      </button>
    </div>
  );
};
