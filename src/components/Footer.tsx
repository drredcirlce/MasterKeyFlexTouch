import React from 'react';
import { Key, ShieldCheck, Phone, Mail, MapPin, Sparkles } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#050505] text-[var(--text-muted)] text-xs border-t border-[var(--border)] pt-16 pb-24 lg:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-[var(--border)]">
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[var(--gold)]/20 border border-[var(--gold)]/40 flex items-center justify-center text-[var(--gold)]">
                <Key className="w-4 h-4" />
              </div>
              <span className="text-base font-extrabold text-white tracking-wider font-serif-luxury">
                MASTERKEY FLEXTOUCH
              </span>
            </div>
            <p className="text-xs text-[var(--text-muted)] leading-relaxed max-w-sm">
              쇄골부터 두피까지, 뭉침을 풀고 흐름을 열어 즉시 체감되는 가벼움.
              <br />
              한의학 근막 이론 기반 프리미엄 살롱 메디뷰티 전문 브랜드
            </p>
            <div className="flex items-center gap-2 pt-1 text-[11px] text-[var(--gold)] font-medium">
              <ShieldCheck className="w-3.5 h-3.5 text-[var(--gold)]" />
              <span>(주)케이메디플러스 & 덕수한의원 공동 R&D 공식 테크닉</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-2.5">
            <span className="text-xs font-bold text-white uppercase tracking-wider block mb-3">
              주요 프로그램 및 서비스
            </span>
            <ul className="space-y-2 text-[var(--text-muted)]">
              <li><a href="#programs" className="hover:text-[var(--gold)] transition-colors">마스터키 넥숄더 플렉스터치 (5분 퀵케어)</a></li>
              <li><a href="#programs" className="hover:text-[var(--gold)] transition-colors">마스터키 근막재건 리프팅 (두피·안면)</a></li>
              <li><a href="#programs" className="hover:text-[var(--gold)] transition-colors">뇌청소 두피 디톡스 (딥슬립 테라피)</a></li>
              <li><a href="#salons" className="hover:text-[var(--gold)] transition-colors">전국 가맹 헤어샵 위치 및 실시간 예약</a></li>
              <li><a href="#academy" className="hover:text-[var(--gold)] transition-colors">헤어 원장님 정기 실습 아카데미</a></li>
            </ul>
          </div>

          {/* Corporate Info */}
          <div className="md:col-span-4 space-y-2.5">
            <span className="text-xs font-bold text-white uppercase tracking-wider block mb-3">
              본사 및 교육장 안내
            </span>
            <div className="space-y-1.5 text-[var(--text-muted)] text-xs">
              <p><strong className="text-slate-300">법인명:</strong> (주)케이메디플러스 (K-MEDIPLUS Co., Ltd.)</p>
              <p><strong className="text-slate-300">대표이사:</strong> 안덕수 (한의학 박사 / 덕수한의원 공동원장)</p>
              <p><strong className="text-slate-300">사업자등록번호:</strong> 214-88-76543 | 통신판매업신고 제2026-서울영등포-0912호</p>
              <p><strong className="text-slate-300">본사 및 R&D 센터:</strong> 서울특별시 영등포구 당산로 122 덕수메디컬빌딩 4층</p>
              <p><strong className="text-slate-300">고객센터 및 가맹문의:</strong> 1544-7890 (평일 09:30 ~ 18:30)</p>
              <p><strong className="text-slate-300">이메일:</strong> masterkey@kmediplus.co.kr</p>
            </div>
          </div>
        </div>

        {/* SEO Keywords Tag Cloud */}
        <div className="py-6 border-b border-[var(--border)] text-[11px] text-slate-500 leading-relaxed">
          <span className="text-slate-400 font-semibold mr-2">인기 검색 키워드:</span>
          <span>
            마스터키 | 마스터키플렉스터치 | 플렉스터치 | 헤어샵두피케어 | 두피근막리프팅 | 넥숄더플렉스터치 | 뇌청소두피케어 | 헤어원장교육 | 헤어살롱가맹 | 덕수한의원 | 케이메디플러스 | 안덕수원장 | 미용실두피스파 | 거북목퀵케어 | 쇄골림프순환
          </span>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-500">
          <p>© 2026 (주)케이메디플러스. ALL RIGHTS RESERVED. MASTERKEY FLEX TOUCH™</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-slate-400">이용약관</a>
            <a href="#" className="hover:text-slate-400">개인정보처리방침</a>
            <a href="#" className="hover:text-slate-400">가맹점 운영규정</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
