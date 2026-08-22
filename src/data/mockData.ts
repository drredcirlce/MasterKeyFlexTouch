import { Program, Salon, Review, FaqItem } from '../types';

export const FOUNDER_PROFILE = {
  name: '안덕수',
  title: '한의학 박사 / (주)케이메디플러스 대표이사',
  roles: [
    '한의사 (덕수한의원 공동원장)',
    '(주)케이메디플러스 대표이사 & 총괄 R&D 디렉터',
    'R7 통증·근막 전문 교육강사',
    '마스터키 플렉스터치(MASTERKEY FLEXTOUCH) 창안자',
    '대한한의학회 정회원 & 뇌신경두피근막 연구회 수석자문'
  ],
  quote: '"쇄골부터 두피까지, 뭉침을 풀고 흐름을 열면 고객은 즉시 5분 만에 기적 같은 가벼움을 체감합니다."',
  story: `수많은 임상 환자와 통증 케어를 진행하며 발견한 결정적인 진실은, 현대인의 만성 피로, 안면 처짐, 탈모, 두통의 90%가 '쇄골-목-두피로 이어지는 근막 유착'에서 비롯된다는 점이었습니다.

미용실은 고객의 두피와 모발을 가장 가까이서 정기적으로 만지는 유일한 힐링 스페이스입니다. 한의학적 정밀 근막 해부학과 손끝의 압전 효과(Piezoelectric effect)를 융합하여 헤어 디자이너가 무리 없이 손쉽게 시술할 수 있도록 표준화한 것이 바로 [마스터키 플렉스터치]입니다.

단순 샴푸 마사지를 넘어, 고객의 인생을 바꾸는 메디뷰티 웰니스 경험과 원장님의 객단가 2배 혁신을 약속드립니다.`,
  coreValues: [
    {
      title: '한의학적 근막재건 메디컬 기반',
      desc: '경혈점과 표층/심층 근막 라인(SMAS, 모상건막, 흉쇄유돌근)을 과학적으로 연결한 표준 테크닉'
    },
    {
      title: '즉각적인 5분 체감 반응',
      desc: '시술 직후 고객이 스스로 고개를 돌려보고 눈을 뜨며 감탄하는 즉효성 가벼움'
    },
    {
      title: '원장님 손목 보호 인체공학적 시술법',
      desc: '힘으로 누르지 않고 지렛대와 근막 탄성을 이용해 시술자의 피로도 0% 구현'
    }
  ]
};

export const PROGRAMS: Program[] = [
  {
    id: 'neck-shoulder',
    title: '마스터키 넥숄더 플렉스터치',
    subtitle: 'Masterkey Neck & Shoulder Flextouch',
    tagline: '5분 만에 느껴지는 최상의 가벼움과 목·어깨 회전 가동성 회복',
    durationMinutes: 15,
    targetArea: '쇄골 상와 - 상부 승모근 - 흉쇄유돌근 - 후두하근',
    category: 'neck_shoulder',
    badgeText: '원장님 강력 추천 1위',
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=900&q=80',
    keyEffects: [
      '만성 승모근 뭉침 및 거북목 압박감 5분 즉각 해소',
      '경추 회전각도(ROM) 즉각 30도 이상 개선',
      '뇌로 가는 혈류 흐름 개방으로 눈의 피로와 두통 완화',
      '쇄골 림프 순환로 개방으로 붓기 완화 및 어깨라인 슬림화'
    ],
    anatomicalPoints: [
      {
        name: '쇄골상와 (Supraclavicular Fossa)',
        koreanTerm: '결분혈(缺盆穴) 림프 터미널',
        description: '두경부 전체 림프 순환의 최종 배출구로, 노폐물 배농을 위한 첫 번째 핵심 관문'
      },
      {
        name: '상부 승모근 (Upper Trapezius)',
        koreanTerm: '견정혈(肩井穴) 근막 연결부',
        description: '어깨 하중과 스트레스가 집중되는 부위의 꼬인 근막 섬유를 탄성 복원'
      },
      {
        name: '흉쇄유돌근 (SCM)',
        koreanTerm: '천정/인영혈 라인',
        description: '경동맥과 미주신경 주행 통로를 안전하게 이완시켜 뇌혈류 급속 촉진'
      },
      {
        name: '후두하근 (Suboccipital)',
        koreanTerm: '풍지/천주혈 부위',
        description: '시신경과 연결된 후두골 아래 긴장을 풀어 즉각적인 시야 밝아짐 유도'
      }
    ],
    procedureSteps: [
      {
        step: 1,
        title: '쇄골 림프관 웰컴 오픈 터치',
        description: '쇄골 위 결분 부위를 부드럽게 이완하여 상체 전체 림프 배농 유로를 활성화합니다.'
      },
      {
        step: 2,
        title: 'SCM(흉쇄유돌근) 근막 롤링 릴리즈',
        description: '목 옆선의 꼬인 근막을 가볍게 집어 올리며 경동맥 혈류 순환을 촉진합니다.'
      },
      {
        step: 3,
        title: '승모근-견갑거근 탄성 이완 플렉스',
        description: '지렛대 원리로 힘들이지 않고 어깨 뭉침 중심부를 깊고 편안하게 풀어냅니다.'
      },
      {
        step: 4,
        title: '후두하근 뇌신경 릴리프 스트레칭',
        description: '두개골과 목이 만나는 후두하부를 견인하여 머리 끝까지 산소를 공급합니다.'
      }
    ],
    pricingPlans: [
      {
        name: '1회 퀵 체험 케어',
        sessions: 1,
        originalPrice: 40000,
        salePrice: 29000,
        badge: '체험 특가',
        description: '펌/염색/커트 시술과 동시 진행 가능한 5~15분 퀵 힐링 코스'
      },
      {
        name: '3+1회 집중 릴랙스 패키지',
        sessions: 4,
        originalPrice: 160000,
        salePrice: 89000,
        badge: '인기 BEST',
        description: '만성 결림 고객을 위한 4회 정기 플렉스터치 (회당 22,250원 꼴)'
      },
      {
        name: '10회 VIP 프리미엄 멤버십',
        sessions: 10,
        originalPrice: 400000,
        salePrice: 200000,
        badge: '최대 할인 50%',
        description: '가족 공유 가능 & 두피 미스트 앰플 1병 무상 증정'
      }
    ],
    recommendedFor: [
      '하루 8시간 이상 모니터나 스마트폰을 보며 목이 뻐근한 분',
      '미용실 샴푸대에서 머리를 젖힐 때 목 뒤가 당기고 아픈 분',
      '어깨가 솟아올라 목이 짧아 보이고 옷태가 나지 않는 분',
      '수면 후에도 어깨가 무겁고 만성 피로가 풀리지 않는 분'
    ]
  },
  {
    id: 'fascia-lifting',
    title: '마스터키 근막재건 리프팅 플렉스터치',
    subtitle: 'Masterkey Fascia Reconstruction Face & Scalp Lifting',
    tagline: '쇄골·두피근막 통합 리터치로 중력을 거스르는 안면 탄력 & 탈모 순환 개선',
    durationMinutes: 30,
    targetArea: '모상건막 - 측두근 - SMAS근막 - 광경근',
    category: 'fascia_lifting',
    badgeText: '여성/남성 만족도 99%',
    image: 'https://images.unsplash.com/photo-1512290900672-1f5be6f9e250?auto=format&fit=crop&w=900&q=80',
    keyEffects: [
      '두피 모상건막 수축을 통한 즉각적인 눈꼬리·팔자주름·턱선 리프팅',
      '두피 혈행 불량으로 인한 열감 해소 및 모근 영양 공급 극대화',
      '안면 비대칭의 근본 원인인 측두근-교근 불균형 정상화',
      '두피 탄력도 회복으로 헤어 볼륨감 200% 상승'
    ],
    anatomicalPoints: [
      {
        name: '모상건막 (Galea Aponeurotica)',
        koreanTerm: '두정부 건막망 (백회/사신총)',
        description: '얼굴 전체 피부를 뒤에서 끌어당겨주는 핵심 텐션막으로 안면 처짐을 결정짓는 부위'
      },
      {
        name: '측두근막 (Temporalis Fascia)',
        koreanTerm: '태양혈/솔곡혈 근막부',
        description: '턱관절 저작근과 연결되어 볼살 처짐과 팔자주름을 강력하게 리프팅하는 지지대'
      },
      {
        name: '전두근 (Frontalis)',
        koreanTerm: '양백/두임읍 혈자리',
        description: '이마 주름을 펴고 눈꺼풀 무거움을 시원하게 개방'
      },
      {
        name: '광경근 (Platysma) & 쇄골막',
        koreanTerm: '쇄골-하악 연결 근막',
        description: '아래로 당겨지는 얼굴 하부 근막의 역방향 텐션을 해제'
      }
    ],
    procedureSteps: [
      {
        step: 1,
        title: '하악각-쇄골 광경근 텐션 다운 릴리즈',
        description: '얼굴을 아래로 잡아당기는 목 전면 근막의 긴장을 풀어 리프팅 밑바탕을 만듭니다.'
      },
      {
        step: 2,
        title: '측두근막 3D 수직 견인 리프팅',
        description: '귀 위쪽 측두근을 손가락 지복으로 나선형 밀착 견인하여 턱선과 눈가를 당겨올립니다.'
      },
      {
        step: 3,
        title: '모상건막 유착 분리 & 두개골 탈압박',
        description: '두피와 두개골 사이에 굳은 건막을 띄워 혈액순환과 모낭 산소공급을 극대화합니다.'
      },
      {
        step: 4,
        title: '페이스라인 락킹 & 아로마 쿨다운',
        description: '리프팅된 위치를 안정화하고 두피 온도를 즉시 3~4도 낮추는 진정 마무리 터치를 진행합니다.'
      }
    ],
    pricingPlans: [
      {
        name: '1회 리프팅 & 모근 디톡스',
        sessions: 1,
        originalPrice: 80000,
        salePrice: 55000,
        badge: '시술 전후비교',
        description: '얼굴 붓기 제거 및 눈매가 번쩍 뜨이는 30분 집중 근막재건'
      },
      {
        name: '3+1회 브이라인 & 탈모집중 패키지',
        sessions: 4,
        originalPrice: 320000,
        salePrice: 169000,
        badge: '시그니처 코스',
        description: '1달 주 1회 완성 코스 (회당 42,250원 파격 혜택)'
      },
      {
        name: '8회 안티에이징 마스터 패스',
        sessions: 8,
        originalPrice: 640000,
        salePrice: 310000,
        badge: '프리미엄 VIP',
        description: '안면 윤곽 대칭 교정 & 두피 정밀 스케일링 전용 앰플 2종 포함'
      }
    ],
    recommendedFor: [
      '거울을 볼 때마다 팔자주름과 턱선 라인이 무너져 고민인 분',
      '오후만 되면 눈이 뻑뻑하고 이마로 눈을 뜨는 습관이 있는 분',
      '두피에 열이 많고 정수리 모발에 힘이 없어 볼륨이 죽는 분',
      '중요한 모임, 웨딩, 프로필 촬영 전 즉각적인 브이라인이 필요한 분'
    ]
  },
  {
    id: 'brain-scalp',
    title: '마스터키 뇌청소 두피 디톡스 플렉스터치',
    subtitle: 'Masterkey Brain Detox & Cranial Scalp Therapy',
    tagline: '두개천골 순환을 열어 복잡한 뇌 피로와 불면, 만성 두통을 지우는 딥 슬립 테라피',
    durationMinutes: 25,
    targetArea: '두개골 봉합선 - 백회혈 - 풍지혈 - 림프절',
    category: 'brain_scalp',
    badgeText: '힐링 & 수면 보약',
    image: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=900&q=80',
    keyEffects: [
      '뇌척수액(CSF) 순환 촉진으로 뇌 피로 물질 및 브레인 포그(Brain Fog) 배출',
      '불면증, 수면장애 개선 및 자율신경계(교감-부교감) 밸런스 회복',
      '두피 모공 속 산화 피지와 독소 정화로 두피 가려움·냄새 소멸',
      '깊은 이완 상태 유도로 스트레스 호르몬 코르티솔 급격한 저하'
    ],
    anatomicalPoints: [
      {
        name: '두개골 봉합선 (Cranial Sutures)',
        koreanTerm: '관상봉합 / 시상봉합 / 인자봉합',
        description: '두개골의 미세 가동성을 회복시켜 뇌압을 정상화하는 핵심 테라피 포인트'
      },
      {
        name: '백회혈 (GV20) & 사신총',
        koreanTerm: '머리의 백 가지 기운이 모이는 곳',
        description: '양기를 조절하고 맑은 정신과 집중력을 부여하는 뇌신경 중심점'
      },
      {
        name: '풍지혈 (GB20) & 아문혈',
        koreanTerm: '바람과 열이 머무는 문',
        description: '뇌로 들어가는 추골동맥의 흐름을 뚫어 머리를 맑게 씻어내는 곳'
      },
      {
        name: '이주 주변 림프절 (Pre-auricular)',
        koreanTerm: '귀 주변 청궁/이문혈',
        description: '이명, 두통, 턱관절 긴장을 동시에 해소하는 순환로'
      }
    ],
    procedureSteps: [
      {
        step: 1,
        title: '두개천골 뇌압 릴리프 호흡 동조',
        description: '고객의 호흡 리듬에 맞춰 후두골을 가볍게 받쳐 뇌척수액 파동을 유도합니다.'
      },
      {
        step: 2,
        title: '봉합선 유합 해제 & 딥 프레셔 터치',
        description: '손가락 관절을 활용하여 머리뼈 사이 봉합선에 쌓인 미세 압력을 부드럽게 분산합니다.'
      },
      {
        step: 3,
        title: '정수리 백회 림프 배농 서클링',
        description: '두피 중앙에서 외곽으로 노폐물을 쓸어내려 목 림프로 안전하게 배출시킵니다.'
      },
      {
        step: 4,
        title: '냉각 탄산 쿨링 & 알파파 사운드 피니시',
        description: '열오른 뇌온도를 식혀주며 편안한 수면 뇌파(Alpha wave)로 이끕니다.'
      }
    ],
    pricingPlans: [
      {
        name: '1회 뇌청소 딥슬립 코스',
        sessions: 1,
        originalPrice: 60000,
        salePrice: 39000,
        badge: '스트레스 타파',
        description: '샴푸대에서 잠드는 25분 황홀한 뇌 디톡스'
      },
      {
        name: '3+1회 불면·두통 클린 패키지',
        sessions: 4,
        originalPrice: 240000,
        salePrice: 119000,
        badge: '재예약률 94%',
        description: '만성 두통과 불면증 개선을 위한 4회 케어 (회당 29,750원)'
      },
      {
        name: '10회 브레인 리프레시 정기권',
        sessions: 10,
        originalPrice: 600000,
        salePrice: 270000,
        badge: 'VIP 추천',
        description: '두피 쿨링 탄산 스파 앰플 무상 포함'
      }
    ],
    recommendedFor: [
      '밤에 침대에 누워도 잡생각이 많고 깊은 잠을 이루지 못하는 분',
      '머리가 무겁고 안개가 낀 듯 멍한 브레인 포그를 자주 느끼는 분',
      '정수리를 만졌을 때 두피가 딱딱하게 굳어있거나 뜨거운 분',
      '만성 편두통으로 진통제를 자주 복용하는 분'
    ]
  }
];

export const CERTIFIED_SALONS: Salon[] = [
  {
    id: 'salon-gangnam-master',
    name: '아우라 제이 헤어 살롱 (AURA J)',
    branch: '강남본점 (마스터키 인증 1호점)',
    directorName: '김민서',
    directorTitle: '마스터키 플렉스터치 공인 마스터 디렉터',
    address: '서울특별시 강남구 테헤란로 152',
    detailAddress: '강남파이낸스센터 B1 메디뷰티존',
    district: '강남구',
    city: '서울',
    lat: 37.5008,
    lng: 127.0366,
    phone: '02-555-8842',
    businessHours: '10:00 ~ 20:30 (매일)',
    closedDay: '연중무휴',
    rating: 4.98,
    reviewCount: 428,
    reservationCount: 1840,
    isCertifiedMaster: true,
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80',
    features: ['한의사 인증 플렉스터치 전용 룸', '1:1 프라이빗 스파 체어', '주차 2시간 무료', '음료 & 아로마 웰컴 서비스'],
    supportedProgramIds: ['neck-shoulder', 'fascia-lifting', 'brain-scalp'],
    parkingInfo: '건물 지하 1~4층 넉넉한 자주식 주차 (무료 2시간 지원)',
    nearestStation: '역삼역 2번 출구 지하 직결',
    shortIntro: '강남 직장인과 셀럽들이 줄 서서 받는 넥숄더 & 뇌청소 두피 플렉스터치 성지'
  },
  {
    id: 'salon-cheongdam-luxe',
    name: '살롱 드 라메종 (Salon de La Maison)',
    branch: '청담 플래그십점',
    directorName: '박준혁',
    directorTitle: '대한근막미용학회 정회원 / 마스터 디렉터',
    address: '서울특별시 강남구 압구정로 412',
    detailAddress: '청담 명품거리 라온빌딩 2층',
    district: '강남구',
    city: '서울',
    lat: 37.5262,
    lng: 127.0458,
    phone: '02-543-9910',
    businessHours: '10:30 ~ 20:00 (화~일)',
    closedDay: '매주 월요일 휴무',
    rating: 4.96,
    reviewCount: 312,
    reservationCount: 1290,
    isCertifiedMaster: true,
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80',
    features: ['발렛파킹 완비', '최고급 안마샴푸베드 구비', '페이스 리프팅 전후 정밀 촬영', 'VIP 프라이빗 룸'],
    supportedProgramIds: ['neck-shoulder', 'fascia-lifting', 'brain-scalp'],
    parkingInfo: '매장 입구 발렛파킹 전용 부스 운영',
    nearestStation: '압구정로데오역 3번 출구 도보 3분',
    shortIntro: '웨딩 전 페이스 리프팅 & 쇄골라인 완성으로 유명한 프리미엄 살롱'
  },
  {
    id: 'salon-seocho-leebian',
    name: '리비안 헤어 스튜디오',
    branch: '서초교대점',
    directorName: '이선영',
    directorTitle: '헤어 20년 경력 / 마스터키 2기 수석 수료',
    address: '서울특별시 서초구 서초중앙로 125',
    detailAddress: '로얄타워 3층 301호',
    district: '서초구',
    city: '서울',
    lat: 37.4932,
    lng: 127.0135,
    phone: '02-588-3371',
    businessHours: '10:00 ~ 20:00 (월~토)',
    closedDay: '매주 일요일 휴무',
    rating: 4.94,
    reviewCount: 265,
    reservationCount: 980,
    isCertifiedMaster: true,
    image: 'https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?auto=format&fit=crop&w=800&q=80',
    features: ['교대역 도보 1분', '두피 정밀 진단기 무료 측정', '남성 거북목 퀵케어 전문', '반려동물 동반 가능'],
    supportedProgramIds: ['neck-shoulder', 'brain-scalp'],
    parkingInfo: '타워 기계식 주차 가능',
    nearestStation: '교대역 1번 출구 도보 1분',
    shortIntro: '목 어깨가 뻐근할 때 점심시간 15분 만에 해결하는 넥숄더 퀵케어 전문점'
  },
  {
    id: 'salon-mapo-hongdae',
    name: '모노크롬 헤어랩 (MONOCHROME)',
    branch: '마포홍대점',
    directorName: '정성우',
    directorTitle: '마스터키 플렉스터치 트레이너 디렉터',
    address: '서울특별시 마포구 양화로 164',
    detailAddress: '유니온파크 2층',
    district: '마포구',
    city: '서울',
    lat: 37.5563,
    lng: 126.9234,
    phone: '02-334-7729',
    businessHours: '11:00 ~ 21:00 (매일)',
    closedDay: '연중무휴',
    rating: 4.92,
    reviewCount: 389,
    reservationCount: 1420,
    isCertifiedMaster: true,
    image: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=800&q=80',
    features: ['야간 예약 가능(21시까지)', '트렌디한 감각 인테리어', '두피 쿨링 탄산수 스파', '대학생/사회초년생 할인'],
    supportedProgramIds: ['neck-shoulder', 'fascia-lifting', 'brain-scalp'],
    parkingInfo: '인근 공영주차장 1시간 주차비 지원',
    nearestStation: '홍대입구역 8번 출구 도보 2분',
    shortIntro: '스트레스 많은 2030 청년들을 위한 뇌청소 두피 디톡스 인기 지점'
  },
  {
    id: 'salon-bundang-pangyo',
    name: '더 테라스 앤 헤어 (The Terrace & Hair)',
    branch: '분당판교점',
    directorName: '최유진',
    directorTitle: 'IT기업 직장인 통증케어 전문 마스터',
    address: '경기도 성남시 분당구 판교역로 146번길 20',
    detailAddress: '알파돔타워 4층 402호',
    district: '분당구',
    city: '경기',
    lat: 37.3948,
    lng: 127.1114,
    phone: '031-708-4412',
    businessHours: '10:00 ~ 20:30 (매일)',
    closedDay: '연중무휴',
    rating: 4.99,
    reviewCount: 512,
    reservationCount: 2310,
    isCertifiedMaster: true,
    image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=800&q=80',
    features: ['판교 테크노밸리 거북목 전문 살롱', '판교역 연결', '무료 고속 무선충전 & 워크스페이스', '지하 대형주차장'],
    supportedProgramIds: ['neck-shoulder', 'fascia-lifting', 'brain-scalp'],
    parkingInfo: '알파돔타워 지하 3시간 무료 주차',
    nearestStation: '판교역 3번 출구 지하 직통 연결',
    shortIntro: '판교 IT 개발자와 연구원들이 칭송하는 5분 거북목 탈출의 성지'
  },
  {
    id: 'salon-busan-haeundae',
    name: '해운대 마레 헤어 & 메디스파',
    branch: '부산센텀점',
    directorName: '강태환',
    directorTitle: '부산경남 마스터키 수석 교육위원장',
    address: '부산광역시 해운대구 센텀중앙로 90',
    detailAddress: '큐비이센텀 3층 305호',
    district: '해운대구',
    city: '부산',
    lat: 35.1742,
    lng: 129.1303,
    phone: '051-784-0991',
    businessHours: '10:00 ~ 20:00 (화~일)',
    closedDay: '매주 월요일 휴무',
    rating: 4.97,
    reviewCount: 340,
    reservationCount: 1180,
    isCertifiedMaster: true,
    image: 'https://images.unsplash.com/photo-1582095133179-bfd08e2fc6b3?auto=format&fit=crop&w=800&q=80',
    features: ['센텀시티 뷰 프리미엄 라운지', '오션 아로마 테라피 병행', 'VIP 1인 전용실', '무료 주차권 제공'],
    supportedProgramIds: ['neck-shoulder', 'fascia-lifting', 'brain-scalp'],
    parkingInfo: '건물 내 넓은 주차공간 2시간 무료',
    nearestStation: '센텀역 4번 출구 도보 5분',
    shortIntro: '부산 경남권 최고의 메디컬 헤어 스파 & 쇄골 리프팅 마스터 샵'
  },
  {
    id: 'salon-daegu-suseong',
    name: '라온제나 헤어 아뜰리에',
    branch: '대구수성점',
    directorName: '송미경',
    directorTitle: '대구경북 마스터키 공인 마스터',
    address: '대구광역시 수성구 달구벌대로 2450',
    detailAddress: '수성메디컬타워 2층',
    district: '수성구',
    city: '대구',
    lat: 35.8583,
    lng: 128.6251,
    phone: '053-752-6681',
    businessHours: '10:00 ~ 20:00 (월~토)',
    closedDay: '매주 일요일',
    rating: 4.95,
    reviewCount: 219,
    reservationCount: 870,
    isCertifiedMaster: true,
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=800&q=80',
    features: ['수성구 범어네거리 중심', '두피 탈모 집중 케어 솔루션', '안마베드 완비'],
    supportedProgramIds: ['neck-shoulder', 'fascia-lifting', 'brain-scalp'],
    parkingInfo: '건물 뒤편 전용 주차장 보유',
    nearestStation: '범어역 6번 출구 도보 3분',
    shortIntro: '두피 열감 완화 및 헤어 볼륨 회복으로 단골이 끊이지 않는 살롱'
  },
  {
    id: 'salon-daejeon-yuseong',
    name: '휴(休) 앤 뷰티 헤어살롱',
    branch: '대전유성점',
    directorName: '윤도현',
    directorTitle: '충청권 마스터키 디렉터',
    address: '대전광역시 유성구 온천로 45',
    detailAddress: '유성스마트빌딩 1층',
    district: '유성구',
    city: '대전',
    lat: 36.3541,
    lng: 127.3414,
    phone: '042-825-1102',
    businessHours: '10:00 ~ 20:00 (매일)',
    closedDay: '연중무휴',
    rating: 4.93,
    reviewCount: 198,
    reservationCount: 750,
    isCertifiedMaster: true,
    image: 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=800&q=80',
    features: ['유성온천수 스파 연계', '목어깨 5분 릴리프', '주차 편리'],
    supportedProgramIds: ['neck-shoulder', 'brain-scalp'],
    parkingInfo: '지상 및 지하 주차장 2시간 지원',
    nearestStation: '유성온천역 7번 출구 도보 4분',
    shortIntro: '온천수 샴푸와 마스터키 플렉스터치의 환상적인 결합'
  }
];

export const ACADEMY_INFO = {
  title: '헤어살롱 원장님을 위한 [뇌청소 & 두피케어] 정기 실습 아카데미',
  subtitle: '한의학 박사 안덕수 대표이사 직강 & 1:1 핸즈온 테크닉 전수 과정',
  description: '단순 샴푸 마사지의 한계를 넘어 고객이 5분 만에 즉각 감탄하는 메디뷰티 기술을 손에 쥐어드립니다. 고객 재방문율 95%, 객단가 2배 상승의 강력한 무기!',
  schedules: [
    {
      day: '매주 월요일 정기반',
      time: '저녁 20:00 ~ 22:40 (총 160분)',
      venue: '덕수한의원 메디컬 R&D 실습센터 (서울 영등포구/강남 분원)',
      capacity: '선착순 8명 한정 (1:1 초밀착 핸즈온을 위한 소수정예)',
      status: '마감임박 (잔여 2석)'
    },
    {
      day: '매주 화요일 정기반',
      time: '저녁 20:00 ~ 22:40 (총 160분)',
      venue: '덕수한의원 메디컬 R&D 실습센터 (서울 영등포구/강남 분원)',
      capacity: '선착순 8명 한정',
      status: '모집중 (잔여 4석)'
    },
    {
      day: '지방/원거리 원장님 1:1 찾아가는 방문 교육',
      time: '살롱 마감 후 맞춤 시간 조율 (2~3시간)',
      venue: '원장님 샵 현장 직접 방문 (전국 가능)',
      capacity: '원장님 및 소속 디자이너 전원 참여 가능',
      status: '상담 후 일정 배정'
    }
  ],
  curriculum: [
    {
      part: 'PART 1',
      title: '한의학 근막해부학 & 통증·두피열의 신경학적 기전',
      duration: '100분',
      badge: '이론 & 원리',
      items: [
        '왜 현대인은 쇄골-목-두피 순서로 굳어가는가? (근막 연쇄 반응)',
        'SMAS층과 모상건막의 역학적 리프팅 벡터 원리',
        '두개천골계 뇌척수액 파동과 뇌청소 두피 디톡스 기전',
        '고객 상담 시 100% 결제율을 이끌어내는 메디컬 티칭 화법'
      ]
    },
    {
      part: 'PART 2',
      title: '원장님 손목 피로도 0% 1:1 핸즈온 실습 및 터치 테크닉',
      duration: '60분',
      badge: '실전 테크닉',
      items: [
        '힘들이지 않고 지렛대 원리로 5초 만에 승모근 풀어내기',
        '샴푸대에서 5분 만에 끝내는 넥숄더 플렉스터치 풀 코스 실습',
        '안면 비대칭 교정 및 즉각 눈꼬리 리프팅 두피 텐션 기법',
        '한의사 대표이사의 1:1 개별 손끝 그립 및 각도 교정 피드백'
      ]
    }
  ],
  benefits: [
    {
      icon: 'Award',
      title: '마스터키 공식 인증점 현판 수여',
      desc: '고객에게 최고 수준의 신뢰를 주는 골드 메탈 인증 현판 및 수료증 제공'
    },
    {
      icon: 'TrendingUp',
      title: '커트/펌 고객 객단가 2~3배 상승',
      desc: '시술 시간 5~15분 추가로 3~5만 원의 순수 부가가치 창출'
    },
    {
      icon: 'MapPin',
      title: '공식 웹사이트 가맹 살롱 등록 & 지도 노출',
      desc: '지역별 본사 공식 사이트 검색 노출 및 온라인 예약 고객 무상 연계'
    },
    {
      icon: 'BookOpen',
      title: '실전 시술 매뉴얼 & 고객 상담 차트 제공',
      desc: '시술 부위별 브로슈어, POP 배너, 3+1 회원권 티켓 양식 제공'
    }
  ]
};

export const REVIEWS: Review[] = [
  {
    id: 'rev-1',
    authorName: '박*정 고객님',
    authorRole: 'customer',
    salonName: '아우라 제이 헤어 살롱 (강남본점)',
    programName: '마스터키 넥숄더 플렉스터치 3+1회',
    rating: 5,
    date: '2026.08.12',
    highlight: '목 돌릴 때 뚝뚝 소리 나던 게 5분 만에 거짓말처럼 사라졌어요!',
    content: '매일 야근하는 IT 개발자라 뒷목이랑 어깨가 돌덩이 같았는데, 염색하면서 원장님이 넥숄더 플렉스터치 추천해주셔서 받았습니다. 쇄골 쪽을 살짝 만지시더니 목 뒤로 쫙 시원한 피가 도는 느낌이 들면서 눈이 번쩍 떠졌습니다. 바로 3+1회 결제했어요.',
    tags: ['만성승모근', '거북목해소', '강남직장인', '재구매100%']
  },
  {
    id: 'rev-2',
    authorName: '최유진 원장님',
    authorRole: 'director',
    authorAffiliation: '더 테라스 앤 헤어 (분당판교점)',
    salonName: '더 테라스 앤 헤어',
    programName: '원장님 정기 실습 아카데미 3기 수료',
    rating: 5,
    date: '2026.08.05',
    highlight: '도입 2달 만에 살롱 월 매출 800만원 순수 증가했습니다.',
    content: '그동안 일반 헤드스파 교육 많이 들었지만 힘만 들고 고객 반응은 미지근했어요. 하지만 안덕수 원장님의 한의학 근막 이론은 차원이 다릅니다. 힘 하나 안 들이고 손끝 각도만으로 고객이 5분 만에 탄성을 지릅니다. 객단가가 2배로 뛰었습니다!',
    tags: ['원장후기', '매출상승', '손목안아픔', '강력추천']
  },
  {
    id: 'rev-3',
    authorName: '이지은 고객님',
    authorRole: 'customer',
    salonName: '살롱 드 라메종 (청담점)',
    programName: '마스터키 근막재건 리프팅 플렉스터치',
    rating: 5,
    date: '2026.08.10',
    highlight: '웨딩 촬영 전에 받았는데 턱선이랑 쇄골 라인이 예술로 잡혔습니다.',
    content: '피부과 슈링크나 인모드보다 훨씬 편안하고 즉각적이에요! 두피 모상건막을 끌어올려주시는데 오른쪽 먼저 하고 거울 봤더니 짝눈 교정되고 팔자주름이 쫙 펴져있어서 소름 돋았습니다. 본식 전에도 무조건 갈 거예요.',
    tags: ['웨딩케어', '두피리프팅', '턱선브이라인', '청담살롱']
  },
  {
    id: 'rev-4',
    authorName: '김민서 원장님',
    authorRole: 'director',
    authorAffiliation: '아우라 제이 헤어 (강남본점)',
    salonName: '아우라 제이 헤어',
    programName: '마스터키 공인 마스터 1호점',
    rating: 5,
    date: '2026.07.28',
    highlight: '단골 고객님들이 미용실 오는 날만 손꼽아 기다리십니다.',
    content: '커트하러 오셨다가 플렉스터치 1회 맛보시고는 이제 3+1회 티켓 없이는 안 나가십니다. 미용실이 단순 머리하는 곳이 아니라 전신을 힐링하고 젊어지는 메디뷰티 공간으로 탈바꿈했습니다.',
    tags: ['충성고객확보', '티켓팅폭발', '메디뷰티']
  },
  {
    id: 'rev-5',
    authorName: '정*훈 고객님',
    authorRole: 'customer',
    salonName: '모노크롬 헤어랩 (홍대점)',
    programName: '뇌청소 두피 디톡스 플렉스터치',
    rating: 5,
    date: '2026.08.01',
    highlight: '샴푸대에서 10분 만에 기절하듯 깊은 잠에 빠졌습니다.',
    content: '평소 불면증이 심해서 새벽 3시까지 잠을 못 자는데, 머리뼈 봉합선을 지그시 터치해주실 때 머리 안개가 걷히는 기분이었어요. 두피 열도 싹 내려가고 그날 밤 10시간 숙면했습니다.',
    tags: ['불면증치료', '두피열내리기', '브레인디톡스']
  }
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'customer',
    question: '마스터키 플렉스터치는 일반 헤어샵 샴푸 마사지와 무엇이 다른가요?',
    answer: '일반 마사지가 단순히 두피 표면을 문지르거나 어깨 근육을 힘으로 주무르는 방식이라면, 마스터키 플렉스터치는 한의학적 근막해부학과 신경 주행로를 기반으로 쇄골의 림프 터미널을 먼저 열고 두피 모상건막과 흉쇄유돌근(SCM)의 꼬인 근막을 과학적으로 풀어냅니다. 단 5분 만에 목 가동 범위가 30도 이상 넓어지고 시야가 밝아지는 즉각적인 체감을 제공합니다.'
  },
  {
    id: 'faq-2',
    category: 'customer',
    question: '헤어 펌이나 염색, 커트 시술과 함께 받을 수 있나요?',
    answer: '네, 가능합니다! 커트 전후 5분 퀵케어나 펌/염색 방치 시간 및 샴푸대 헹굼 단계에서 완벽하게 결합되어 진행됩니다. 별도의 옷 갈아입기나 번거로움 없이 편안하게 좌석이나 샴푸베드에서 최고의 힐링을 경험하실 수 있습니다.'
  },
  {
    id: 'faq-3',
    category: 'customer',
    question: '통증이 있거나 부작용은 없나요?',
    answer: '마스터키 플렉스터치는 뼈를 꺾거나 강한 힘으로 압박하지 않고 근막의 자연스러운 탄성과 호흡을 이용하는 안전한 테크닉입니다. 아프지 않고 시원하며, 긴장된 신경이 이완되어 시술 중 깊은 잠에 빠져드는 고객님이 대부분입니다.'
  },
  {
    id: 'faq-4',
    category: 'director',
    question: '원장님 교육을 받으려면 어떤 자격이나 준비물이 필요한가요?',
    answer: '미용사 면허 및 현재 헤어살롱을 운영 중이시거나 실무 디자이너로 활동 중이신 원장님/디자이너라면 누구나 신청하실 수 있습니다. 별도의 준비물 없이 편안한 복장으로 오시면 되며, 교재와 실습 도구, 시술 매뉴얼은 본사에서 전원 무상 지급합니다.'
  },
  {
    id: 'faq-5',
    category: 'director',
    question: '하루 교육만으로 살롱에서 고객에게 바로 시술할 수 있나요?',
    answer: '네! 160분 정규 아카데미는 한의사 대표이사의 100분 핵심 이론과 60분 1:1 핸즈온 실습으로 구성되어 있어, 교육 다음 날부터 샴푸대에서 고객에게 5분 넥숄더 테크닉을 즉시 적용하여 매출을 올릴 수 있도록 완벽히 표준화되어 있습니다.'
  },
  {
    id: 'faq-6',
    category: 'director',
    question: '교육 수료 후 공식 가맹점 인증 및 마케팅 지원은 어떻게 되나요?',
    answer: '수료 즉시 (주)케이메디플러스 마스터키 공식 인증점 수료증 및 골드 메탈 현판이 발급되며, 본 공식 웹사이트의 가맹점 지도 및 온라인 예약 시스템에 원장님의 살롱이 등록됩니다. 또한 매장 내 비치용 고급 POP, 고객 상담 차트, SNS 홍보물 템플릿을 무상 지원합니다.'
  },
  {
    id: 'faq-7',
    category: 'fascia',
    question: '왜 쇄골(결분혈)부터 풀어야 두피와 얼굴이 리프팅되나요?',
    answer: '쇄골 상부(결분혈)는 머리와 얼굴에서 내려오는 모든 림프액과 노폐물이 정맥으로 합류하는 "하수구 출구"입니다. 출구가 막힌 상태에서 두피나 얼굴만 만지면 부종과 압력이 배출되지 못합니다. 쇄골을 먼저 열어주어야 두피 모상건막의 당김이 풀리고 안면 SMAS 근막이 위로 자연스럽게 올라가게 됩니다.'
  }
];
