import React from 'react';
import { Key, ShieldCheck, Phone, Mail, MapPin } from 'lucide-react';
import { FOOTER_INFO } from '../data/mockData';

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
              {FOOTER_INFO.brandDesc}
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
                <a href="#Brand" className="hover:text-[#7E22CE] transition-colors">
                  브랜드 스토리 & 한의학 철학
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
                  오직 헤어디자이너를 위한 60분 실습과정
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-[#7E22CE] transition-colors">
                  실제 시술 후기 & 원장님 수기
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#7E22CE] transition-colors">
                  자주 묻는 질문 FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Salon Director Support */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-bold text-[#180D26] uppercase tracking-wider">
              원장님 가맹 및 교육 상담본부
            </h4>
            <div className="space-y-1.5 text-[11px]">
              <p className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-[#DB2777]" />
                <span className="font-bold text-[#180D26]">{FOOTER_INFO.phone} / {FOOTER_INFO.mobilePhone}</span>
              </p>
              <p className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-[#9333EA]" />
                <span>{FOOTER_INFO.email}</span>
              </p>
              <p className="flex items-start gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#9333EA] shrink-0 mt-0.5" />
                <span>{FOOTER_INFO.address}</span>
              </p>
              <p className="text-[10px] text-[#8A78A0] pt-1">
                상담시간: {FOOTER_INFO.hours}
              </p>
            </div>
          </div>

          {/* Col 4: Corporate Disclaimers */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-bold text-[#180D26] uppercase tracking-wider">
              사업자 정보 & 메디컬 고지
            </h4>
            <p className="text-[10px] leading-relaxed text-[#8A78A0]">
              상호명: {FOOTER_INFO.companyName} | 대표자: {FOOTER_INFO.ceo}
              <br />
              사업자등록번호: {FOOTER_INFO.businessNumber} | 통신판매업: {FOOTER_INFO.telecomNumber}
              <br />
              {FOOTER_INFO.disclaimer}
            </p>
          </div>
        </div>

        <div className="pt-6 border-t border-[#A855F7]/15 flex flex-col sm:flex-row items-center justify-between gap-3 text-[10px] text-[#8A78A0]">
          <p>{FOOTER_INFO.copyright}</p>
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
