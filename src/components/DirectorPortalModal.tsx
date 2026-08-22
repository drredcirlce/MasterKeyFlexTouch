import React, { useState } from 'react';
import {
  X,
  UserCheck,
  Lock,
  Building,
  Award,
  Download,
  PlayCircle,
  FileText,
  Calendar,
  Users,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  Phone
} from 'lucide-react';

interface DirectorPortalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DirectorPortalModal: React.FC<DirectorPortalModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [tab, setTab] = useState<'login' | 'register' | 'lounge'>('login');
  const [salonName, setSalonName] = useState('아우라 제이 헤어 살롱');
  const [directorName, setDirectorName] = useState('김민서 원장');
  const [phone, setPhone] = useState('010-5555-8842');
  const [businessNum, setBusinessNum] = useState('120-81-99882');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (!isOpen) return null;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggedIn(true);
    setTab('lounge');
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    alert('원장님 가맹 회원가입이 완료되었습니다! 마스터키 라운지로 이동합니다.');
    setIsLoggedIn(true);
    setTab('lounge');
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

        {/* Modal Header */}
        <div className="mb-6">
          <div className="hero-badge-dark inline-flex items-center gap-1.5 mb-2">
            <UserCheck className="w-3.5 h-3.5 text-[#DB2777]" />
            <span>DIRECTOR MEMBERSHIP LOUNGE</span>
          </div>
          <h3 className="text-2xl font-bold text-[#180D26] font-serif-luxury">
            헤어살롱 원장님 전용관
          </h3>
          <p className="text-xs text-[#5B4870] mt-1">
            마스터키 플렉스터치 공인 살롱 및 수료 원장님을 위한 독점 지원 공간입니다.
          </p>
        </div>

        {/* Tabs Bar if not strictly in lounge */}
        {!isLoggedIn && (
          <div className="flex border-b border-[#A855F7]/20 mb-6">
            <button
              onClick={() => setTab('login')}
              className={`flex-1 py-2.5 text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                tab === 'login'
                  ? 'text-[#BE185D] border-b-2 border-[#BE185D]'
                  : 'text-[#5B4870] hover:text-[#180D26]'
              }`}
            >
              원장님 로그인
            </button>
            <button
              onClick={() => setTab('register')}
              className={`flex-1 py-2.5 text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                tab === 'register'
                  ? 'text-[#BE185D] border-b-2 border-[#BE185D]'
                  : 'text-[#5B4870] hover:text-[#180D26]'
              }`}
            >
              신규 원장님 회원가입 & 가맹 등록
            </button>
          </div>
        )}

        {/* Tab 1: Login */}
        {tab === 'login' && !isLoggedIn && (
          <form onSubmit={handleLogin} className="space-y-4 animate-in fade-in">
            <div>
              <label className="block text-xs font-bold text-[#180D26] mb-1.5">
                등록된 원장님 연락처 (아이디)
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
                비밀번호 (초기 비밀번호는 휴대폰 뒷자리 4자리)
              </label>
              <input
                type="password"
                defaultValue="8842"
                placeholder="••••"
                className="w-full p-2.5 rounded-xl bg-[#FAF7FD] border border-[#A855F7]/25 text-[#180D26] text-xs focus:outline-none focus:border-[#DB2777]"
                required
              />
            </div>

            <div className="p-3.5 rounded-xl bg-[#FAF7FD] border border-[#A855F7]/20 text-[11px] text-[#5B4870]">
              * 마스터키 교육 수료 시 발급된 원장님 휴대폰 번호로 즉시 간편 로그인이 가능합니다.
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#9333EA] via-[#A855F7] to-[#DB2777] hover:opacity-95 text-white font-bold text-xs sm:text-sm shadow-md shadow-pink-900/20 cursor-pointer"
            >
              원장님 전용 라운지 입장하기
            </button>
          </form>
        )}

        {/* Tab 2: Register */}
        {tab === 'register' && !isLoggedIn && (
          <form onSubmit={handleRegister} className="space-y-4 animate-in fade-in">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-[#180D26] mb-1.5">
                  원장님 성함 *
                </label>
                <input
                  type="text"
                  placeholder="홍길동 원장"
                  className="w-full p-2.5 rounded-xl bg-[#FAF7FD] border border-[#A855F7]/25 text-[#180D26] text-xs focus:outline-none focus:border-[#DB2777]"
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-[#180D26] mb-1.5">
                  헤어살롱 상호 *
                </label>
                <input
                  type="text"
                  placeholder="살롱 이름"
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
                  placeholder="010-0000-0000"
                  className="w-full p-2.5 rounded-xl bg-[#FAF7FD] border border-[#A855F7]/25 text-[#180D26] text-xs focus:outline-none focus:border-[#DB2777]"
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-[#180D26] mb-1.5">
                  사업자등록번호
                </label>
                <input
                  type="text"
                  placeholder="000-00-00000"
                  className="w-full p-2.5 rounded-xl bg-[#FAF7FD] border border-[#A855F7]/25 text-[#180D26] text-xs focus:outline-none focus:border-[#DB2777]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#180D26] mb-1.5">
                살롱 상세 주소 (가맹점 지도 등록용)
              </label>
              <input
                type="text"
                placeholder="예: 서울 강남구 테헤란로 123 2층"
                className="w-full p-2.5 rounded-xl bg-[#FAF7FD] border border-[#A855F7]/25 text-[#180D26] text-xs focus:outline-none focus:border-[#DB2777]"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#9333EA] via-[#A855F7] to-[#DB2777] hover:opacity-95 text-white font-bold text-xs sm:text-sm shadow-md shadow-pink-900/20 cursor-pointer"
            >
              원장님 회원가입 및 가맹 등록 완료
            </button>
          </form>
        )}

        {/* Tab 3: VIP Lounge (Logged in State) */}
        {tab === 'lounge' && isLoggedIn && (
          <div className="space-y-6 animate-in zoom-in-95">
            {/* VIP Welcome Card */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-[#FCE7F3]/50 to-[#F3E8FC]/70 border border-[#A855F7]/30 flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#1F0D33] text-[#F472B6]">
                    MASTER CERTIFIED
                  </span>
                  <h4 className="text-base font-bold text-[#180D26]">
                    {salonName} ({directorName})
                  </h4>
                </div>
                <p className="text-xs text-[#BE185D] font-semibold">
                  마스터키 플렉스터치 공인 인증 가맹 1호점 (수료번호: KMED-2026-081)
                </p>
              </div>

              <button
                onClick={() => {
                  setIsLoggedIn(false);
                  setTab('login');
                }}
                className="text-xs text-[#5B4870] hover:text-[#180D26] underline cursor-pointer"
              >
                로그아웃
              </button>
            </div>

            {/* Exclusive Video Tutorials */}
            <div>
              <h4 className="text-xs font-bold text-[#180D26] uppercase tracking-wider mb-3 flex items-center gap-1.5">
                <PlayCircle className="w-4 h-4 text-[#DB2777]" />
                <span>원장님 복습용 실전 테크닉 영상 강좌 (무제한 시청)</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-3.5 rounded-2xl bg-[#FAF7FD] border border-[#A855F7]/15 flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-[#FCE7F3] border border-[#F472B6]/40 flex items-center justify-center text-[#BE185D] shrink-0">
                    <PlayCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-[#180D26]">5분 넥숄더 손끝 지렛대 각도법</h5>
                    <span className="text-[10px] text-[#5B4870]">정원호 한의사 직강 (18분)</span>
                  </div>
                </div>
                <div className="p-3.5 rounded-2xl bg-[#FAF7FD] border border-[#A855F7]/15 flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-[#FCE7F3] border border-[#F472B6]/40 flex items-center justify-center text-[#BE185D] shrink-0">
                    <PlayCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-[#180D26]">두피 모상건막 수직 견인 & 리프팅</h5>
                    <span className="text-[10px] text-[#5B4870]">실습 마스터 영상 (24분)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Downloadable Salon Promotion Marketing Kit */}
            <div>
              <h4 className="text-xs font-bold text-[#180D26] uppercase tracking-wider mb-3 flex items-center gap-1.5">
                <Download className="w-4 h-4 text-[#7E22CE]" />
                <span>매장 홍보물 & 상담 차트 다운로드 (PDF / 인쇄용)</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-3.5 rounded-2xl bg-[#FAF7FD] border border-[#A855F7]/15 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <FileText className="w-4 h-4 text-[#7E22CE]" />
                    <div>
                      <h5 className="text-xs font-bold text-[#180D26]">고객 두경부 문진 & 진단 차트</h5>
                      <span className="text-[10px] text-[#5B4870]">PDF 양식 (A4 출력용)</span>
                    </div>
                  </div>
                  <button
                    onClick={() => alert('진단 차트 PDF 다운로드가 시작되었습니다.')}
                    className="p-1.5 px-2.5 rounded-lg bg-white hover:bg-[#F3E8FC] text-[#7E22CE] text-xs font-bold cursor-pointer border border-[#A855F7]/25 transition-colors"
                  >
                    다운로드
                  </button>
                </div>
                <div className="p-3.5 rounded-2xl bg-[#FAF7FD] border border-[#A855F7]/15 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <FileText className="w-4 h-4 text-[#7E22CE]" />
                    <div>
                      <h5 className="text-xs font-bold text-[#180D26]">카운터 비치용 POP & 배너 템플릿</h5>
                      <span className="text-[10px] text-[#5B4870]">고해상도 AI/PDF 파일</span>
                    </div>
                  </div>
                  <button
                    onClick={() => alert('POP 템플릿 파일이 다운로드되었습니다.')}
                    className="p-1.5 px-2.5 rounded-lg bg-white hover:bg-[#F3E8FC] text-[#7E22CE] text-xs font-bold cursor-pointer border border-[#A855F7]/25 transition-colors"
                  >
                    다운로드
                  </button>
                </div>
              </div>
            </div>

            {/* Official Plaque Verification Status */}
            <div className="p-4 rounded-2xl bg-[#FAF7FD] border border-[#A855F7]/20 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-6 h-6 text-[#DB2777] shrink-0" />
                <div>
                  <h5 className="text-xs font-bold text-[#180D26]">마스터키 공인 인증 현판 배송 상태</h5>
                  <span className="text-[11px] text-[#5B4870]">발송 완료 (현판 부착 후 인증샷 업로드 시 네이버 지도 인증 마크 부여)</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
