import React from 'react';
import { Key, ShieldCheck, Phone, Mail, MapPin, Award } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-[#A855F7]/18 text-[#5B4870] pt-12 pb-20 sm:pb-12 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Col 1: Brand & Corp Info */}
          <div className="space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#F3E8FC] to-[#FCE7F3] border border-[#A855F7]/30 flex items-center justify-center">
                <Key className="w-4 h-4 text-[#9333EA]" />
              </div>
              <span className="text-base font-bold font-serif-luxury text-[#180D26] tracking-wider">
                MASTERKEY <span className="text-xs text-[#BE185D]">FLEXTOUCH</span>
              </span>
            </div>
            <p className="text-[11px] leading-relaxed text-[#5B4870]">
              한의학 30년 임상 철학을 담은 프리미엄 메디뷰티 테크닉. 쇄골·두피·근막을 잇는 독점 플렉스터치로 뷰티 살롱의 혁신을 만듭니다.
            </p>
            <div className="flex items-center gap-2 text-[11px] text-[#7E22CE] font-bold">
              <ShieldCheck className="w-4 h-4 text-[#DB2777]" />
              <span>(주)케이메디플러스 공식 인증 브랜드</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-bold text-[#180D26] uppercase tracking-wider">
              바로가기
            </h4>
            <ul className="space-y-1.5 text-[11px]">
              <li>
                <a href="#brand-story" className="hover:text-[#7E22CE] transition-colors">
                  브랜드 스토리 & 한의학 철학
                </a>
              </li>
              <li>
                <a href="#founder" className="hover:text-[#7E22CE] transition-colors">
                  정원호 대표 한의사 프로필
                </a>
              </li>
              <li>
                <a href="#programs" className="hover:text-[#7E22CE] transition-colors">
                  5분 넥숄더 & 근막 리프팅 시술
                </a>
              </li>
              <li>
                <a href="#salons" className="hover:text-[#7E22CE] transition-colors">
                  전국 공인인증 가맹점 지도
                </a>
              </li>
              <li>
                <a href="#academy" className="hover:text-[#7E22CE] transition-colors">
                  원장님 160분 실습 아카데미
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Customer & Director Support */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-bold text-[#180D26] uppercase tracking-wider">
              고객 및 원장님 상담센터
            </h4>
            <div className="space-y-1.5 text-[11px]">
              <p className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-[#DB2777]" />
                <span className="font-bold text-[#180D26]">1544-7890</span> (가맹 및 교육 문의)
              </p>
              <p className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-[#9333EA]" />
                <span>contact@kmediplus.co.kr</span>
              </p>
              <p className="flex items-start gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#9333EA] shrink-0 mt-0.5" />
                <span>서울시 영등포구 당산로 123 케이메디빌딩 4F 플렉스터치 R&D센터</span>
              </p>
              <p className="text-[10px] text-[#8A78A0] pt-1">
                운영시간: 평일 09:00 ~ 18:00 (점심시간 12:30 ~ 13:30)
              </p>
            </div>
          </div>

          {/* Col 4: Corporate Disclaimers */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-bold text-[#180D26] uppercase tracking-wider">
              사업자 정보 & 메디컬 고지
            </h4>
            <p className="text-[10px] leading-relaxed text-[#8A78A0]">
              상호명: (주)케이메디플러스 | 대표자: 정원호 | 사업자등록번호: 120-81-99882
              <br />
              통신판매업신고: 제2026-서울영등포-0812호
              <br />
              본 서비스는 미용 관리 및 한의학적 근막 이완 테크닉을 활용하며, 질병의 진단 및 치료를 목적으로 하는 의료 행위가 아닙니다.
            </p>
          </div>
        </div>

        <div className="pt-6 border-t border-[#A855F7]/15 flex flex-col sm:flex-row items-center justify-between gap-3 text-[10px] text-[#8A78A0]">
          <p>© 2026 (주)케이메디플러스 MASTERKEY FLEXTOUCH. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-[#180D26]">이용약관</a>
            <a href="#" className="hover:text-[#180D26]">개인정보처리방침</a>
            <a href="#" className="hover:text-[#180D26]">가맹점 관리규정</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
