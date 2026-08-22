import { Program, Salon, Review, FaqItem, FooterInfo } from '../types';

export const FOUNDER_PROFILE = {
  name: '정원호',
  title: '한의사 / 마스터키 플렉스터치 창시자',
  company: '(주)케이메디플러스 대표이사',
  roles: [
    '한의사 / 마스터키 플렉스터치 창시자',
    '(주)케이메디플러스 대표이사',
    '케이헤어 메디뷰티협회 수석 고문',
    '30년 한의학 임상 노하우 기반 림프근막테크닉 개발'
  ],
  quote: '"미용실은 단순한 헤어 스타일링 공간을 넘어, 현대인의 극심한 스트레스와 뇌 피로를 즉각 해소하는 일상 속 힐링 테라피 공간으로 진화해야 합니다. 플렉스터치는 오직 정교한 근막 터치로 즉각적인 순환과 리프팅을 만듭니다."',
  story: `수많은 임상 환자와 통증 케어를 진행하며 발견한 결정적인 진실은, 현대인의 만성 피로, 안면 처짐, 탈모, 두통의 90%가 '쇄골-목-두피로 이어지는 근막 유착'에서 비롯된다는 점이었습니다.

미용실은 고객의 두피와 모발을 가장 가까이서 정기적으로 만지는 유일한 힐링 스페이스입니다. 한의학적 정밀 근막 해부학과 손끝의 터치를 융합하여 헤어 디자이너가 무리 없이 손쉽게 시술할 수 있도록 표준화한 것이 바로 [마스터키 플렉스터치]입니다.

단순 샴푸 마사지를 넘어, 고객의 인생을 바꾸는 메디뷰티 웰니스 경험과 원장님의 전문성 및 가치 향상을 약속드립니다.`,
  coreValues: [
    {
      title: '근막경선 긴장 해제',
      desc: '목, 어깨, 두피로 이어지는 얕은 후방선 근막의 유착을 손가락 끝으로 정밀 박리.'
    },
    {
      title: '림프근막 배출',
      desc: '근막재건을 통한 림프배출 및 순환개선으로 리프팅과 뇌청소를 동시에'
    },
    {
      title: '쇄골상림프절 핵심케어',
      desc: '굽은 등과 거북목으로 눌린 림프배출로를 열어주는 핵심테크닉'
    }
  ]
};

export const PROGRAMS: Program[] = [
  {
    id: 'neck-shoulder',
    title: '5분 넥숄더플렉스터치',
    subtitle: 'Neck & Shoulder FlexTouch',
    tagline: '커트나 샴푸 후 단 5분, 무거운 돌덩이를 얹은 듯한 목과 어깨가 깃털처럼 가벼워집니다.',
    durationMinutes: 5,
    targetArea: '뭉친 승모근과 굳은 목선 부드러운 라인관리',
    category: 'neck_shoulder',
    badgeText: '5분 퀵케어 1위',
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=900&q=80',
    keyEffects: [
      '승모근 상부 즉각 이완으로 어깨라인을 생성',
      '일자목·거북목으로 인한 후두부 당김 및 뻐근함 경감',
      '쇄골 주변 림프 순환 촉진으로 쇄골 라인 정돈'
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
        name: '1회 체험권',
        sessions: 1,
        originalPrice: 20000,
        salePrice: 15000,
        badge: '체험권',
        description: '5분 넥숄더 퀵케어 체험'
      },
      {
        name: '3+1회 케어권',
        sessions: 4,
        originalPrice: 60000,
        salePrice: 40000,
        badge: '인기 BEST',
        description: '3+1회 정기 집중 케어 (총 4회)'
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
    title: '15분 근막재건 리프팅',
    subtitle: 'Fascia Reconstruction Lifting',
    tagline: '모지고 처진 턱선과 팔자주름, 측두근과 모상건막을 리프팅하여 숨은 V라인을 찾아냅니다.',
    durationMinutes: 15,
    targetArea: '두피 근막을 끌어올려 완성하는 페이스 윤곽 리셋',
    category: 'fascia_lifting',
    badgeText: '동안 리프팅 추천',
    image: 'https://images.unsplash.com/photo-1512290900672-1f5be6f9e250?auto=format&fit=crop&w=900&q=80',
    keyEffects: [
      '측두근막 및 교근 유착 해제로 사각턱 완화 및 리프팅',
      '눈가 피로 개선 및 처진 눈꼬리 리프팅',
      '두피 혈류 순환을 통한 모발 뿌리 볼륨 탄력 강화'
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
        name: '1회 체험권',
        sessions: 1,
        originalPrice: 45000,
        salePrice: 30000,
        badge: '체험권',
        description: '15분 근막재건 리프팅 체험'
      },
      {
        name: '3+1회 케어권',
        sessions: 4,
        originalPrice: 120000,
        salePrice: 80000,
        badge: '시그니처',
        description: '3+1회 동안 V라인 패키지 (총 4회)'
      }
    ],
    recommendedFor: [
      '거울을 볼 때마다 팔자주름과 턱선 라인이 무너져 고민인 분',
      '오후만 되면 눈이 뻑뻑하고 이마로 눈을 뜨는 습관이 있는 분',
      '두피에 열이 많고 정수리 모발에 힘이 없어 볼륨이 죽는 분',
      '중요한 모임, 웨딩, 프로필 촬영 전 즉각적인 브이라인이 필요한 분'
    ]
  }
];

export const CERTIFIED_SALONS: Salon[] = [
  {
    id: 'salon-cheongdam-auraj',
    name: '아우라제이 헤어 (Aura-J Hair)',
    branch: '청담본점',
    directorName: '김서연',
    directorTitle: '마스터키플렉스터치 공인 1기',
    address: '서울특별시 강남구 청담동 88-12',
    detailAddress: '청담빌딩 2층',
    district: '강남구',
    city: '서울',
    lat: 37.5248,
    lng: 127.0496,
    phone: '02-541-7890',
    businessHours: '10:00 ~ 20:00',
    closedDay: '월요일',
    rating: 5.0,
    reviewCount: 312,
    reservationCount: 1420,
    isCertifiedMaster: true,
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80',
    features: ['청담역 8번 출구 도보 3분', '공인 1기 마스터 살롱', '프라이빗 룸 완비', '발렛파킹 가능'],
    supportedProgramIds: ['neck-shoulder', 'fascia-lifting'],
    parkingInfo: '매장 앞 발렛파킹 가능',
    nearestStation: '청담역 8번 출구 도보 3분',
    shortIntro: '한의사 직강 테크닉으로 완성하는 5분 넥숄더 및 근막재건 리프팅 전문점'
  },
  {
    id: 'salon-seocho-rene',
    name: '살롱 드 르네 (Salon de Rene)',
    branch: '서초교대점',
    directorName: '박준형',
    directorTitle: '마스터키플렉스터치 공인 2기',
    address: '서울특별시 서초구 서초대로 314',
    detailAddress: '교대타워 3층',
    district: '서초구',
    city: '서울',
    lat: 37.4942,
    lng: 127.0145,
    phone: '02-588-4321',
    businessHours: '10:30 ~ 20:30',
    closedDay: '화요일',
    rating: 4.98,
    reviewCount: 285,
    reservationCount: 1190,
    isCertifiedMaster: true,
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80',
    features: ['교대역 1번 출구 도보 2분', '두피 쿨링 림프 전문', '1:1 맞춤 케어'],
    supportedProgramIds: ['neck-shoulder', 'fascia-lifting'],
    parkingInfo: '타워 주차 2시간 지원',
    nearestStation: '교대역 1번 출구 도보 2분',
    shortIntro: '서초/교대 인근 직장인과 고객들에게 입소문 난 5분 퀵케어 명소'
  },
  {
    id: 'salon-bundang-forest',
    name: '헤어 포레스트 (Hair Forest)',
    branch: '분당판교점',
    directorName: '이지은',
    directorTitle: '마스터키플렉스터치 공인 2기',
    address: '경기도 성남시 분당구 판교역로 145',
    detailAddress: '판교타워 4층',
    district: '분당구',
    city: '경기',
    lat: 37.3948,
    lng: 127.1114,
    phone: '031-707-1234',
    businessHours: '10:00 ~ 20:00',
    closedDay: '일요일',
    rating: 4.99,
    reviewCount: 420,
    reservationCount: 1850,
    isCertifiedMaster: true,
    image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=800&q=80',
    features: ['판교역 현대백화점 맞은편', '판교 IT 직장인 넥숄더 케어', '무료 주차 지원'],
    supportedProgramIds: ['neck-shoulder', 'fascia-lifting'],
    parkingInfo: '판교타워 지하 3시간 무료 주차',
    nearestStation: '판교역 현대백화점 맞은편',
    shortIntro: '판교 테크노밸리 고객들의 만성 목·어깨 결림을 5분 만에 리셋'
  },
  {
    id: 'salon-mapo-beaute',
    name: '메종 드 보떼 (Maison de Beaute)',
    branch: '마포공덕점',
    directorName: '최영호',
    directorTitle: '마스터키플렉스터치 공인 3기',
    address: '서울특별시 마포구 마포대로 68',
    detailAddress: '공덕아크로타워 2층',
    district: '마포구',
    city: '서울',
    lat: 37.5432,
    lng: 126.9515,
    phone: '02-712-9876',
    businessHours: '10:00 ~ 21:00',
    closedDay: '연중무휴',
    rating: 4.97,
    reviewCount: 345,
    reservationCount: 1530,
    isCertifiedMaster: true,
    image: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=800&q=80',
    features: ['공덕역 4번 출구 도보 1분', '야간 21시까지 영업', '안면 리프팅 전문'],
    supportedProgramIds: ['neck-shoulder', 'fascia-lifting'],
    parkingInfo: '건물 내 2시간 무료 주차',
    nearestStation: '공덕역 4번 출구 도보 1분',
    shortIntro: '염색/펌 시술과 연계한 동안 브이라인 리프팅 살롱'
  },
  {
    id: 'salon-ilsan-rose',
    name: '라비앙 로즈 (La Vie En Rose)',
    branch: '일산킨텍스점',
    directorName: '정수민',
    directorTitle: '마스터키플렉스터치 공인 4기',
    address: '경기도 고양시 일산서구 킨텍스로 217',
    detailAddress: '킨텍스프라자 2층',
    district: '일산서구',
    city: '경기',
    lat: 37.6688,
    lng: 126.7482,
    phone: '031-919-5544',
    businessHours: '10:00 ~ 20:00',
    closedDay: '매주 월요일',
    rating: 4.96,
    reviewCount: 220,
    reservationCount: 980,
    isCertifiedMaster: true,
    image: 'https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?auto=format&fit=crop&w=800&q=80',
    features: ['주엽역 차량 5분', '쾌적한 대형 주차공간', '쇄골 림프 순환 케어'],
    supportedProgramIds: ['neck-shoulder', 'fascia-lifting'],
    parkingInfo: '지상/지하 넉넉한 주차 무료',
    nearestStation: '주엽역 차량 5분',
    shortIntro: '일산 지역 5분 넥숄더 및 두피근막 케어 인증 살롱'
  },
  {
    id: 'salon-busan-themaster',
    name: '더 마스터 헤어 (The Master Hair)',
    branch: '부산센텀점',
    directorName: '강민우',
    directorTitle: '마스터키플렉스터치 공인 5기',
    address: '부산광역시 해운대구 센텀중앙로 78',
    detailAddress: '센텀시티몰 3층',
    district: '해운대구',
    city: '부산',
    lat: 35.1742,
    lng: 129.1303,
    phone: '051-744-8899',
    businessHours: '10:00 ~ 20:30',
    closedDay: '매주 화요일',
    rating: 4.98,
    reviewCount: 390,
    reservationCount: 1670,
    isCertifiedMaster: true,
    image: 'https://images.unsplash.com/photo-1582095133179-bfd08e2fc6b3?auto=format&fit=crop&w=800&q=80',
    features: ['센텀시티역 9번 출구 도보 4분', '부산경남 대표 가맹점', 'VIP 1인실'],
    supportedProgramIds: ['neck-shoulder', 'fascia-lifting'],
    parkingInfo: '센텀시티몰 2시간 무료 주차',
    nearestStation: '센텀시티역 9번 출구 도보 4분',
    shortIntro: '부산 해운대 센텀의 프리미엄 메디뷰티 플렉스터치 성지'
  }
];

export const ACADEMY_INFO = {
  title: '오직 헤어디자이너를 위한 60분 실습과정 클래스',
  subtitle: '지루한 이론은 온라인으로 준비하고, 직접 실습수강후 다음 날 매장에서 즉시 티켓팅을 일으키는 1:1 핸즈온 교육입니다.',
  description: '케이헤어 메디뷰티협회와 정원호 대표가 함께하는 실전 헤어디자이너 특화 60분 테크닉 과정',
  targetAudience: '헤어살롱 원장님, 부원장님, 수석 디자이너 (기수별 10명 한정)',
  venue: '마스터키 플렉스터치 서울아카데미',
  completionBenefits: '수료증, 공식 인증 현판, 홍보 마케팅 키트 제공',
  schedules: [
    {
      day: '1기 주말 집중반 (토요일)',
      time: '14:00 ~ 15:00 (60분 실습)',
      venue: '마스터키 플렉스터치 서울아카데미 (서울 중구 세종대로 19길 20, 2층)',
      capacity: '선착순 10명 한정 (1:1 초밀착 핸즈온)',
      status: '마감임박 (잔여 2석)'
    },
    {
      day: '1기 평일 정규반 (화요일)',
      time: '20:00 ~ 21:00 (60분 실습)',
      venue: '마스터키 플렉스터치 서울아카데미 (서울 중구 세종대로 19길 20, 2층)',
      capacity: '선착순 10명 한정',
      status: '모집중 (잔여 4석)'
    },
    {
      day: '지방/살롱 원장님 1:1 방문 맞춤 교육',
      time: '살롱 마감 후 맞춤 시간 조율',
      venue: '원장님 샵 현장 직접 방문 (전국 가능)',
      capacity: '원장님 및 소속 디자이너 전원 참여',
      status: '상담 후 일정 배정'
    }
  ],
  curriculum: [
    {
      part: '모듈 1',
      title: '쇄골상 림프절의 촉진 및 핵심 테크닉',
      duration: '20분',
      badge: '핵심 촉진법',
      items: [
        '고객의 상태를 체크하고, 해당되는 포인트를 촉진하여 5분내 효과내는 핵심테크닉',
        '쇄골상와(결분혈) 림프 터미널 개방 기법',
        '힘들이지 않고 체중을 이용하는 손끝 지렛대 각도',
        '시술 전후 목 가동성 즉각 확인법'
      ]
    },
    {
      part: '모듈 2',
      title: '근막재건 리프팅 위치와 순서',
      duration: '20분',
      badge: '동안 리프팅',
      items: [
        '두피근막(모상건막)의 터치와 포인트 숙지',
        '측두근막 3D 리프팅과 팔자주름/눈가 거상 순서',
        '안면 비대칭 완화를 위한 좌우 밸런스 테크닉',
        '두피 열감 배출 및 쿨다운 포인트'
      ]
    },
    {
      part: '모듈 3',
      title: '뇌청소와 두피케어 고객응대법',
      duration: '20분',
      badge: '살롱 세일즈',
      items: [
        '고객응대를 위한 멘트와 티케팅기법',
        '커트/펌/염색 고객 대상 자연스러운 5분 체험 권유 화법',
        '3+1회 정기 케어권 결제를 유도하는 상담 스크립트',
        '고객 만족도를 200% 끌어올리는 시술 피니시 멘트'
      ]
    }
  ],
  benefits: [
    {
      icon: 'Award',
      title: '공식 인증 헤어샵 현판 및 수료 라이센스 발급',
      desc: '고객에게 최고 수준의 신뢰를 주는 공식 인증점 현판 및 수료증 제공'
    },
    {
      icon: 'MapPin',
      title: '본사 공식 홈페이지 및 카카오 채널 지점 등록',
      desc: '지역별 본사 공식 사이트 검색 노출 및 신규 고객 유입 지원'
    },
    {
      icon: 'BookOpen',
      title: '고객 상담용 고급 리플렛 및 배너 홍보물 일체 지원',
      desc: '매장 비치용 리플렛, 배너, 상담 차트 일체 제공'
    },
    {
      icon: 'ShieldCheck',
      title: '지역별 상권 보호 (반경 500m 내 중복 가맹 제한)',
      desc: '가맹 원장님의 독점 상권을 철저히 보호'
    },
    {
      icon: 'Users',
      title: '원장님 전용 온라인 포털 및 정기 보수 교육 참가권',
      desc: '온라인 복습 영상 및 정기 보수 교육 무료 참여'
    },
    {
      icon: 'TrendingUp',
      title: '살롱 전용 플렉스터치 전용터치젤 도매가 공급',
      desc: '원장님 전용 특가로 부가 수익 극대화'
    }
  ]
};

export const REVIEWS: Review[] = [
  {
    id: 'rev-1',
    authorName: '김미래 (34세, IT 디자이너)',
    authorRole: 'customer',
    salonName: '아우라제이 청담본점',
    programName: '5분 넥숄더 플렉스터치',
    rating: 5,
    date: '2026.08.15',
    highlight: '마사지샵 1시간보다 더 시원한 5분의 기적!',
    content: '야근이 많아서 늘 목뒤에 돌이 얹힌 느낌이었는데, 펌 하면서 5분 케어 받고 눈이 번쩍 뜨였습니다. 마사지샵 1시간 받은 것보다 훨씬 시원해요!',
    tags: ['5분넥숄더', '거북목해소', '청담살롱', '직장인추천']
  },
  {
    id: 'rev-2',
    authorName: '이현우 (42세, 금융업)',
    authorRole: 'customer',
    salonName: '살롱 드 르네 서초교대점',
    programName: '15분 근막재건 안면리프팅',
    rating: 5,
    date: '2026.08.12',
    highlight: '얼굴도 밝아지고, 만성 두통과 두피 열감도 같이 사라졌습니다.',
    content: '만성 두통과 불면증이 있었는데 케어받고 나니 머리가 맑아지고 두피 열감이 싹 가셨는데, 얼굴도 밝아졌어요.',
    tags: ['안면리프팅', '두피열감해소', '두통개선', '서초교대']
  },
  {
    id: 'rev-3',
    authorName: '최유진 원장 (살롱 운영 12년차)',
    authorRole: 'director',
    authorAffiliation: '헤어 포레스트 분당판교점',
    salonName: '헤어 포레스트',
    programName: '아카데미 마스터키 플렉스터치 수료',
    rating: 5,
    date: '2026.08.08',
    highlight: '고객 10명 중 8명이 케어권을 결제하십니다.',
    content: '커트 고객님들께 5분 퀵터치 체험을 하고 나면 10분 중 8분이 케어권을 끊으십니다. 매장 객단가가 35% 이상 상승했습니다.',
    tags: ['원장후기', '매출상승', '객단가혁신', '분당판교']
  },
  {
    id: 'rev-4',
    authorName: '정소영 (29세, 직장인)',
    authorRole: 'customer',
    salonName: '메종 드 보떼 마포공덕점',
    programName: '15분 근막재건 안면리프팅',
    rating: 5,
    date: '2026.08.03',
    highlight: '염색 후 거울 보는데 턱선 V라인이 즉각 살아났어요.',
    content: '염색 끝나고 거울을 봤는데 턱선이 쫙 올라붙어 있어서 깜짝 놀랐습니다. 붓기가 빠지고 눈꼬리가 리프팅된 게 바로 보여요.',
    tags: ['V라인리프팅', '염색연계', '붓기제거', '마포공덕']
  },
  {
    id: 'rev-5',
    authorName: '강민우 원장 (살롱 운영 8년차)',
    authorRole: 'director',
    authorAffiliation: '더 마스터 헤어 부산센텀점',
    salonName: '더 마스터 헤어',
    programName: '아카데미 마스터키 플렉스터치 수료',
    rating: 5,
    date: '2026.07.29',
    highlight: '하루 10명 이상을 케어해도 무리가 전혀 없습니다.',
    content: '케어하는데 무리가 안가도록 해주는 포인트 테크닉이라 하루 10명을 시술해도 몸에 무리가 전혀 없습니다. 강력 추천합니다.',
    tags: ['피로도제로', '손목보호', '부산센텀', '수료후기']
  },
  {
    id: 'rev-6',
    authorName: '박지은 (38세, 프리랜서)',
    authorRole: 'customer',
    salonName: '라비앙 로즈 일산킨텍스점',
    programName: '5분 넥숄더플렉스터치',
    rating: 5,
    date: '2026.07.22',
    highlight: '5분 만에 가벼워지는 신기함을 느껴요.',
    content: '목이 뻐근하고, 어깨도 뭉친게 느껴졌는데, 딱 5분 만에 걸리는 느낌 없이 가벼워지네요. 신기합니다.',
    tags: ['5분케어', '어깨뭉침', '일산킨텍스', '재방문의사100%']
  }
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'director',
    question: '원장님 실습 아카데미 60분 수료 후 매장에서 바로 시술 및 티케팅이 가능한가요?',
    answer: '네, 100% 가능합니다. 60분 실습 클래스는 난해한 이론 강의가 아닌 한의사 정원호 대표의 1:1 손끝 핸즈온 코칭으로 진행됩니다. 샴푸석 및 시술석에서 즉시 구사할 수 있는 핵심 지렛대 포인트만을 압축 훈련하므로 수료 다음 날부터 즉시 고객 시술 및 3+1회 티케팅 세팅이 가능합니다.'
  },
  {
    id: 'faq-2',
    category: 'director',
    question: '하루에 여러 명을 시술해도 디자이너 손목이나 손가락에 무리가 없나요?',
    answer: '전혀 무리가 없습니다. 플렉스터치는 손목 힘으로 짓누르는 안마나 마사지가 아니라, 한의학 지렛대 원리와 림프근막 릴리즈 테크닉입니다. 손끝의 무게 중심과 결을 활용하므로 하루 10명 이상 연속 시술하여도 디자이너의 손목 관절 피로도가 제로에 가깝습니다.'
  },
  {
    id: 'faq-3',
    category: 'director',
    question: '도입 시 고가의 기계 장비나 불필요한 제품 강제 사입이 있나요?',
    answer: '전혀 없습니다. 플렉스터치는 사람의 "손끝"으로 완성하는 순수 독점 테크닉입니다. 고가의 기기 리스나 불필요한 인테리어 변경, 강제 사입 없이 소정의 60분 실습 수료만으로 매장의 기존 샴푸대와 체어에서 즉시 런칭할 수 있습니다.'
  },
  {
    id: 'faq-4',
    category: 'director',
    question: '커트, 펌, 염색 등 기존 살롱 워크플로우와 어떻게 연계되나요?',
    answer: "'5분 넥숄더플렉스터치'와 '15분 근막재건 리프팅'은 커트 전후, 염색/펌 방치 시간, 혹은 샴푸대 마무리 단계에서 유기적으로 결합됩니다. 추가 베드나 별도 공간 없이 기존 시술석에서 5분 추가만으로 회당 15,000원~30,000원의 고마진 부가가치를 창출합니다."
  },
  {
    id: 'faq-5',
    category: 'director',
    question: '가맹점 등록 시 지역 상권 보호(영업권 보장)는 어떻게 이루어지나요?',
    answer: '마스터키 플렉스터치는 가맹 원장님의 독점성과 고수익을 보장하기 위해 동일 상권(도보 반경 500m~1km) 내 중복 가맹을 엄격히 제한합니다. 공식 수료 및 등록된 살롱은 지역 1호 메디뷰티 전문점으로 공식 인증 현판과 온라인 지도 우선 노출 혜택이 부여됩니다.'
  },
  {
    id: 'faq-6',
    category: 'director',
    question: '수료 후 신규 디자이너나 스태프 교육은 어떻게 지원되나요?',
    answer: '수료 원장님께는 공식 인증 명판, 고객 상담 차트 500부와 함께 "원장님 전용 온라인 라운지" 계정이 발급됩니다. 라운지 내에서 부위별 테크닉 고화질 복습 영상과 직원 교육용 가이드북 PDF를 무제한으로 열람하고 활용하실 수 있습니다.'
  }
];

export const FOOTER_INFO: FooterInfo = {
  brand: '마스터키 플렉스터치 (MasterKey FlexTouch)',
  brandDesc: '한의학 30년 임상 철학을 담은 프리미엄 메디뷰티 테크닉. 쇄골·두피·근막을 잇는 독점 플렉스터치로 뷰티 살롱의 혁신을 만듭니다.',
  company: '(주)케이메디플러스',
  companyName: '(주)케이메디플러스',
  ceo: '정원호',
  address: '서울특별시 중구 세종대로 19길 20, 2층 덕수한의원내',
  phone: '02-734-1075',
  mobilePhone: '010-3885-3004',
  email: 'ceogroup@kmediplus.com',
  hours: '평일 09:30 ~ 18:00 (주말 및 공휴일 휴무)',
  businessNumber: '120-81-99882',
  telecomNumber: '제2026-서울영등포-0812호',
  disclaimer: '본 테크닉은 한의학적 근막 이완 및 림프 순환 원리를 응용한 뷰티 에스테틱 관리이며, 질병의 진단 및 치료를 위한 의료 행위가 아닙니다.',
  copyright: 'Copyright © 2026 MasterKey FlexTouch / (주)케이메디플러스. All rights reserved.'
};
