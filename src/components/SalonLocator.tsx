import React, { useState, useMemo } from 'react';
import { Salon } from '../types';
import {
  MapPin,
  Search,
  Star,
  Phone,
  Clock,
  Car,
  ShieldCheck,
  Calendar,
  Navigation,
  Sparkles,
  ExternalLink,
  SlidersHorizontal,
  Compass,
  CheckCircle2,
  Share2,
  LocateFixed,
  Loader2,
  Info,
  RotateCcw
} from 'lucide-react';

interface SalonLocatorProps {
  salons: Salon[];
  onOpenReservation: (salonId: string, programId?: string) => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
}

// Calculate Haversine distance in kilometers
const calculateDistanceKm = (lat1: number, lon1: number, lat2: number, lon2: number): number => {
  const R = 6371; // Earth's radius in km
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
};

export const SalonLocator: React.FC<SalonLocatorProps> = ({
  salons,
  onOpenReservation,
  searchQuery,
  onSearchChange,
}) => {
  const [selectedCity, setSelectedCity] = useState<string>('all');
  const [selectedDistrict, setSelectedDistrict] = useState<string>('all');
  const [selectedSalonId, setSelectedSalonId] = useState<string>(salons[0]?.id || '');
  const [onlyCertified, setOnlyCertified] = useState<boolean>(false);
  const [mapViewType, setMapViewType] = useState<'standard' | 'satellite'>('standard');
  const [copiedToast, setCopiedToast] = useState<string | null>(null);

  // Distance Filtering States
  const [userLocation, setUserLocation] = useState<{ lat: number; lng: number; isFallback?: boolean } | null>(null);
  const [isLocating, setIsLocating] = useState<boolean>(false);
  const [within5kmOnly, setWithin5kmOnly] = useState<boolean>(false);
  const [selectedRadiusKm, setSelectedRadiusKm] = useState<number>(5);
  const [locationNotice, setLocationNotice] = useState<string | null>(null);

  // Region filters
  const cities = ['all', '서울', '경기', '부산', '대구', '대전'];

  const districtsByCity: Record<string, string[]> = {
    '서울': ['all', '강남구', '서초구', '마포구'],
    '경기': ['all', '분당구'],
    '부산': ['all', '해운대구'],
    '대구': ['all', '수성구'],
    '대전': ['all', '유성구'],
  };

  // Toggle or fetch user location for distance filter
  const handleToggleDistanceFilter = (radius: number = 5) => {
    setSelectedRadiusKm(radius);

    if (within5kmOnly && selectedRadiusKm === radius) {
      setWithin5kmOnly(false);
      return;
    }

    if (userLocation) {
      setWithin5kmOnly(true);
      return;
    }

    // Request GPS location
    setIsLocating(true);
    setLocationNotice(null);

    if (typeof navigator !== 'undefined' && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
            isFallback: false,
          });
          setWithin5kmOnly(true);
          setIsLocating(false);
          setCopiedToast(`현재 위치 기준 ${radius}km 이내 살롱을 정렬합니다.`);
          setTimeout(() => setCopiedToast(null), 3000);
        },
        (error) => {
          console.warn('Geolocation denied or failed, using reference location:', error);
          // Default to Gangnam, Seoul epicenter
          setUserLocation({
            lat: 37.5008,
            lng: 127.0366,
            isFallback: true,
          });
          setWithin5kmOnly(true);
          setIsLocating(false);
          setLocationNotice('위치 권한이 제한되어 서울 강남(테헤란로 본점) 기준 거리로 계산합니다.');
          setCopiedToast(`서울 강남 기준 ${radius}km 이내 살롱을 정렬합니다.`);
          setTimeout(() => setCopiedToast(null), 3500);
        },
        { timeout: 7000, enableHighAccuracy: true }
      );
    } else {
      setUserLocation({
        lat: 37.5008,
        lng: 127.0366,
        isFallback: true,
      });
      setWithin5kmOnly(true);
      setIsLocating(false);
      setLocationNotice('브라우저 위치 서비스 미지원으로 서울 강남 기준 거리로 계산합니다.');
    }
  };

  // Calculate distance for each salon
  const salonsWithDistance = useMemo(() => {
    return salons.map((salon) => {
      const distance = userLocation
        ? calculateDistanceKm(userLocation.lat, userLocation.lng, salon.lat, salon.lng)
        : null;
      return {
        ...salon,
        distance,
      };
    });
  }, [salons, userLocation]);

  const filteredSalons = useMemo(() => {
    let result = salonsWithDistance.filter((salon) => {
      // Distance filter: when active and distance calculated
      if (within5kmOnly && salon.distance !== null && salon.distance > selectedRadiusKm) {
        return false;
      }
      // City filter
      if (selectedCity !== 'all' && salon.city !== selectedCity) return false;
      // District filter
      if (selectedDistrict !== 'all' && salon.district !== selectedDistrict) return false;
      // Certified master filter
      if (onlyCertified && !salon.isCertifiedMaster) return false;
      // Search query
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase().trim();
        const matchName = salon.name.toLowerCase().includes(q);
        const matchBranch = salon.branch.toLowerCase().includes(q);
        const matchAddress = salon.address.toLowerCase().includes(q);
        const matchDistrict = salon.district.toLowerCase().includes(q);
        const matchStation = salon.nearestStation.toLowerCase().includes(q);
        const matchFeatures = salon.features.some((f) => f.toLowerCase().includes(q));
        const matchDirector = salon.directorName.toLowerCase().includes(q);
        const matchTag = q === '마스터키' || q === '플렉스터치' || q === '두피케어' || q === '넥숄더';

        if (!matchName && !matchBranch && !matchAddress && !matchDistrict && !matchStation && !matchFeatures && !matchDirector && !matchTag) {
          return false;
        }
      }
      return true;
    });

    // If distance filtering is on or user location is available, sort nearest first
    if (within5kmOnly && userLocation) {
      result.sort((a, b) => (a.distance ?? 9999) - (b.distance ?? 9999));
    }

    return result;
  }, [salonsWithDistance, within5kmOnly, selectedRadiusKm, selectedCity, selectedDistrict, onlyCertified, searchQuery, userLocation]);

  const activeSalon = useMemo(() => {
    return salons.find((s) => s.id === selectedSalonId) || filteredSalons[0] || salons[0];
  }, [salons, selectedSalonId, filteredSalons]);

  const handleShare = (salon: Salon) => {
    navigator.clipboard?.writeText(`${salon.name} (${salon.branch}) - ${salon.address} / 전화: ${salon.phone}`);
    setCopiedToast(`${salon.name} 정보가 복사되었습니다.`);
    setTimeout(() => setCopiedToast(null), 3000);
  };

  return (
    <section id="salons" className="scroll-mt-20 sm:scroll-mt-24 py-16 lg:py-24 border-b border-[#D4AF37]/20 relative bg-[#080808]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Toast Notification */}
        {copiedToast && (
          <div className="fixed top-20 right-6 z-50 px-4 py-2 rounded bg-[#D4AF37] text-[#080808] font-bold text-xs shadow-xl animate-in fade-in">
            {copiedToast}
          </div>
        )}

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="hero-badge-dark inline-flex items-center gap-2 mb-3">
            <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>CERTIFIED SALON LOCATOR</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-normal text-[#F2F2F2] font-serif-luxury mb-3">
            전국 마스터키 공인 가맹 헤어샵
          </h2>
          <p className="text-sm sm:text-base text-[#888888] font-light">
            (주)케이메디플러스 인증 한의학 근막 테크닉을 완벽히 이수한 공식 마스터 살롱을 검색하고 편리하게 예약하세요.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="bg-[#121212] border border-[#D4AF37]/20 rounded-xl p-4 sm:p-5 mb-8 shadow-xl space-y-3.5">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
            {/* Search Input Box */}
            <div className="md:col-span-4 relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="지역명, 역 이름(강남역/판교역), 살롱 이름..."
                className="w-full pl-9 pr-8 py-2.5 rounded bg-[#181818] border border-[#262626] text-[#F2F2F2] text-xs sm:text-sm placeholder-[#666666] focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]"
              />
              <Search className="w-4 h-4 text-[#888888] absolute left-3 top-1/2 -translate-y-1/2" />
              {searchQuery && (
                <button
                  onClick={() => onSearchChange('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#888888] hover:text-[#F2F2F2]"
                >
                  지우기
                </button>
              )}
            </div>

            {/* City Tabs */}
            <div className="md:col-span-5 flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
              {cities.map((city) => (
                <button
                  key={city}
                  onClick={() => {
                    setSelectedCity(city);
                    setSelectedDistrict('all');
                  }}
                  className={`px-3 py-2 rounded text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all cursor-pointer ${
                    selectedCity === city
                      ? 'bg-[#D4AF37] text-[#080808]'
                      : 'bg-[#181818] text-[#888888] hover:text-[#F2F2F2] border border-[#262626]'
                  }`}
                >
                  {city === 'all' ? '전국 전체' : city}
                </button>
              ))}
            </div>

            {/* Distance Filter Toggle & Certified Checkbox */}
            <div className="md:col-span-3 flex items-center justify-between sm:justify-end gap-3 flex-wrap">
              {/* Distance-Based Toggle Button */}
              <button
                type="button"
                onClick={() => handleToggleDistanceFilter(selectedRadiusKm || 5)}
                disabled={isLocating}
                className={`px-3 py-2 rounded text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer whitespace-nowrap ${
                  within5kmOnly
                    ? 'bg-gold-gradient text-[#080808] shadow-md shadow-[#D4AF37]/20 border border-[#D4AF37]'
                    : 'bg-[#181818] text-[#D4AF37] border border-[#D4AF37]/40 hover:bg-[#202020]'
                }`}
                title="내 현재 위치 기준으로 가까운 살롱 필터링"
              >
                {isLocating ? (
                  <Loader2 className="w-3.5 h-3.5 animate-spin text-[#080808]" />
                ) : (
                  <LocateFixed className={`w-3.5 h-3.5 ${within5kmOnly ? 'text-[#080808]' : 'text-[#D4AF37]'}`} />
                )}
                <span>{selectedRadiusKm}km 이내</span>
                {within5kmOnly && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#080808] animate-ping" />
                )}
              </button>

              {/* Certified Master Only Checkbox */}
              <label className="inline-flex items-center gap-1.5 cursor-pointer text-xs font-medium text-[#CCCCCC] whitespace-nowrap">
                <input
                  type="checkbox"
                  checked={onlyCertified}
                  onChange={(e) => setOnlyCertified(e.target.checked)}
                  className="w-4 h-4 rounded border-[#262626] bg-[#181818] text-[#D4AF37] focus:ring-[#D4AF37]"
                />
                <span className="text-[#D4AF37]">공인인증점</span>
              </label>
            </div>
          </div>

          {/* Sub-bar: Distance Radius Pills & District Selection */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-2.5 border-t border-[#262626] text-xs">
            {/* District filter */}
            {selectedCity !== 'all' && districtsByCity[selectedCity] ? (
              <div className="flex items-center gap-2">
                <span className="text-[#888888] font-semibold shrink-0">세부 지역:</span>
                <div className="flex items-center gap-1.5 flex-wrap">
                  {districtsByCity[selectedCity].map((dist) => (
                    <button
                      key={dist}
                      onClick={() => setSelectedDistrict(dist)}
                      className={`px-2.5 py-1 rounded text-xs transition-colors cursor-pointer ${
                        selectedDistrict === dist
                          ? 'bg-[#D4AF37]/20 text-[#D4AF37] border border-[#D4AF37]/50 font-bold'
                          : 'bg-[#181818] text-[#888888] hover:text-[#F2F2F2] border border-[#262626]'
                      }`}
                    >
                      {dist === 'all' ? `${selectedCity} 전체` : dist}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div className="text-[11px] text-[#888888] flex items-center gap-1.5">
                <Compass className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>원하는 지역 탭을 누르거나 내 주변 거리 필터를 적용하세요.</span>
              </div>
            )}

            {/* Distance Radius Options when active */}
            {within5kmOnly && (
              <div className="flex items-center gap-2 bg-[#181818] px-2.5 py-1 rounded-lg border border-[#D4AF37]/30">
                <span className="text-[11px] text-[#CCCCCC] font-medium flex items-center gap-1">
                  <Navigation className="w-3 h-3 text-[#D4AF37]" />
                  반경 선택:
                </span>
                {[3, 5, 10, 20].map((radius) => (
                  <button
                    key={radius}
                    onClick={() => setSelectedRadiusKm(radius)}
                    className={`px-2 py-0.5 rounded text-[10px] font-bold cursor-pointer transition-colors ${
                      selectedRadiusKm === radius
                        ? 'bg-[#D4AF37] text-[#080808]'
                        : 'text-[#888888] hover:text-[#F2F2F2] hover:bg-[#252525]'
                    }`}
                  >
                    {radius}km
                  </button>
                ))}
                <button
                  onClick={() => setWithin5kmOnly(false)}
                  className="text-[10px] text-[#888888] hover:text-red-400 ml-1 underline cursor-pointer"
                >
                  필터 해제
                </button>
              </div>
            )}
          </div>

          {/* Location fallback notice banner if active */}
          {within5kmOnly && locationNotice && (
            <div className="flex items-center justify-between p-2.5 rounded bg-[#181818] border border-[#D4AF37]/30 text-xs text-[#D4AF37]">
              <div className="flex items-center gap-2">
                <Info className="w-4 h-4 shrink-0" />
                <span className="text-[11px] text-[#CCCCCC]">{locationNotice}</span>
              </div>
              <button
                onClick={() => handleToggleDistanceFilter(selectedRadiusKm)}
                className="text-[10px] text-[#D4AF37] hover:underline flex items-center gap-1 shrink-0 cursor-pointer ml-2"
              >
                <RotateCcw className="w-3 h-3" />
                <span>위치 재조회</span>
              </button>
            </div>
          )}
        </div>

        {/* Interactive Map & Salon List Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left Column: Salon List Cards */}
          <div className="lg:col-span-5 space-y-4 max-h-[640px] overflow-y-auto pr-1">
            <div className="flex items-center justify-between pb-2">
              <span className="text-xs text-[#888888] font-medium">
                검색된 가맹 살롱: <strong className="text-[#D4AF37]">{filteredSalons.length}</strong>곳
                {within5kmOnly && (
                  <span className="text-[11px] text-[#D4AF37] ml-1.5 font-bold">
                    (내 위치 {selectedRadiusKm}km 이내 우선정렬)
                  </span>
                )}
              </span>
              <span className="text-[11px] text-[#666666]">
                카드를 클릭하면 지도 위치가 표시됩니다
              </span>
            </div>

            {filteredSalons.length === 0 ? (
              <div className="p-8 text-center bg-[#121212] rounded-xl border border-[#262626]">
                <p className="text-sm text-[#888888] mb-2">
                  {within5kmOnly
                    ? `선택한 반경(${selectedRadiusKm}km) 내에 위치한 가맹 헤어샵이 없습니다.`
                    : '검색 조건에 맞는 가맹 헤어샵이 없습니다.'}
                </p>
                <div className="flex items-center justify-center gap-3">
                  {within5kmOnly && (
                    <button
                      onClick={() => setSelectedRadiusKm((prev) => prev + 10)}
                      className="px-3 py-1.5 rounded bg-[#D4AF37] text-[#080808] text-xs font-bold hover:bg-[#e5c158] cursor-pointer"
                    >
                      반경 +10km 확대하기
                    </button>
                  )}
                  <button
                    onClick={() => {
                      setSelectedCity('all');
                      setSelectedDistrict('all');
                      setWithin5kmOnly(false);
                      onSearchChange('');
                    }}
                    className="text-xs text-[#D4AF37] font-bold underline"
                  >
                    필터 전체 초기화
                  </button>
                </div>
              </div>
            ) : (
              filteredSalons.map((salon) => {
                const isSelected = activeSalon?.id === salon.id;
                return (
                  <div
                    key={salon.id}
                    onClick={() => setSelectedSalonId(salon.id)}
                    className={`p-4 rounded-xl border transition-all duration-200 cursor-pointer ${
                      isSelected
                        ? 'bg-[#181818] border-[#D4AF37] shadow-lg shadow-[#D4AF37]/15'
                        : 'bg-[#121212] border-[#262626] hover:border-[#D4AF37]/40 hover:bg-[#161616]'
                    }`}
                  >
                    {/* Header line */}
                    <div className="flex items-start justify-between gap-2 mb-1.5">
                      <div>
                        <div className="flex items-center gap-1.5 flex-wrap mb-1">
                          {salon.isCertifiedMaster && (
                            <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#D4AF37]/20 text-[#D4AF37] border border-[#D4AF37]/40">
                              <ShieldCheck className="w-3 h-3 text-[#D4AF37]" />
                              마스터키 공인인증점
                            </span>
                          )}
                          {salon.distance !== null && salon.distance !== undefined && (
                            <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded bg-[#D4AF37]/15 text-[#D4AF37] border border-[#D4AF37]/30">
                              <Navigation className="w-2.5 h-2.5 text-[#D4AF37]" />
                              {salon.distance < 1
                                ? `${Math.round(salon.distance * 1000)}m`
                                : `${salon.distance.toFixed(1)}km`}
                            </span>
                          )}
                        </div>
                        <h4 className="text-base font-bold text-[#F2F2F2] font-serif-luxury group-hover:text-[#D4AF37]">
                          {salon.name}
                        </h4>
                        <span className="text-xs text-[#D4AF37] font-medium">
                          {salon.branch}
                        </span>
                      </div>

                      {/* Ratings */}
                      <div className="flex items-center gap-1 px-2 py-1 rounded bg-[#080808] border border-[#262626] text-xs font-bold text-[#D4AF37] shrink-0">
                        <Star className="w-3.5 h-3.5 fill-[#D4AF37] text-[#D4AF37]" />
                        <span>{salon.rating}</span>
                        <span className="text-[#666666] font-normal text-[10px]">({salon.reviewCount})</span>
                      </div>
                    </div>

                    {/* Address & Subway */}
                    <div className="space-y-1 text-xs text-[#CCCCCC] my-2.5">
                      <div className="flex items-center gap-1.5 text-[#CCCCCC]">
                        <MapPin className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                        <span className="truncate">{salon.address} ({salon.detailAddress})</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-[#888888]">
                        <Navigation className="w-3.5 h-3.5 text-[#888888] shrink-0" />
                        <span>{salon.nearestStation}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-[#888888]">
                        <Clock className="w-3.5 h-3.5 text-[#888888] shrink-0" />
                        <span>{salon.businessHours}</span>
                      </div>
                    </div>

                    {/* Feature badges */}
                    <div className="flex items-center gap-1.5 flex-wrap mb-3">
                      {salon.features.slice(0, 2).map((feat, idx) => (
                        <span
                          key={idx}
                          className="text-[10px] px-2 py-0.5 rounded bg-[#181818] text-[#888888] border border-[#262626]"
                        >
                          {feat}
                        </span>
                      ))}
                    </div>

                    {/* Action buttons */}
                    <div className="flex items-center gap-2 pt-2 border-t border-[#262626]">
                      <a
                        href={`tel:${salon.phone}`}
                        onClick={(e) => e.stopPropagation()}
                        className="p-2 rounded bg-[#181818] hover:bg-[#202020] text-[#CCCCCC] hover:text-[#F2F2F2] border border-[#262626] text-xs flex items-center justify-center gap-1 shrink-0"
                        title="전화 걸기"
                      >
                        <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
                        <span className="hidden sm:inline">{salon.phone}</span>
                      </a>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleShare(salon);
                        }}
                        className="p-2 rounded bg-[#181818] hover:bg-[#202020] text-[#CCCCCC] hover:text-[#F2F2F2] border border-[#262626] text-xs"
                        title="공유하기"
                      >
                        <Share2 className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onOpenReservation(salon.id);
                        }}
                        className="flex-1 py-2 px-3 rounded bg-[#D4AF37] hover:bg-[#e5c158] text-[#080808] text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1 shadow-md shadow-[#D4AF37]/20 cursor-pointer"
                      >
                        <Calendar className="w-3.5 h-3.5" />
                        <span>시술 예약하기</span>
                      </button>
                    </div>
                  </div>
                );
              })
            )}
          </div>

          {/* Right Column: Interactive Map Interface */}
          <div className="lg:col-span-7 rounded-xl bg-[#0e0e0e] border border-[#D4AF37]/30 overflow-hidden shadow-2xl relative flex flex-col h-[640px]">
            {/* Map Top Bar */}
            <div className="p-3.5 bg-[#121212] border-b border-[#262626] flex items-center justify-between z-10">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#D4AF37] animate-pulse" />
                <span className="text-xs font-bold text-[#F2F2F2] font-serif-luxury tracking-wide">
                  마스터키 전국 가맹점 라이브 맵 (K-MEDI MAP)
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex rounded bg-[#181818] p-0.5 border border-[#262626] text-[11px]">
                  <button
                    onClick={() => setMapViewType('standard')}
                    className={`px-2.5 py-1 rounded text-xs font-bold cursor-pointer ${
                      mapViewType === 'standard' ? 'bg-[#D4AF37] text-[#080808]' : 'text-[#888888] hover:text-[#F2F2F2]'
                    }`}
                  >
                    일반지도
                  </button>
                  <button
                    onClick={() => setMapViewType('satellite')}
                    className={`px-2.5 py-1 rounded text-xs font-bold cursor-pointer ${
                      mapViewType === 'satellite' ? 'bg-[#D4AF37] text-[#080808]' : 'text-[#888888] hover:text-[#F2F2F2]'
                    }`}
                  >
                    다크 뷰
                  </button>
                </div>
              </div>
            </div>

            {/* Custom Interactive Stylized Map Canvas View */}
            <div className="relative flex-1 bg-[#0a0a0a] overflow-hidden flex items-center justify-center p-4">
              {/* Map Grid and Topography Background Simulation */}
              <div className="absolute inset-0 bg-[radial-gradient(#D4AF37_0.75px,transparent_0.75px)] [background-size:24px_24px] opacity-15" />

              {/* Simulated Korea Map Regional Layout */}
              <div className="relative w-full h-full max-w-xl max-h-[500px] flex items-center justify-center">
                {/* SVG Korea Simplified Outline & Roads */}
                <svg className="w-full h-full opacity-30 pointer-events-none" viewBox="0 0 400 500">
                  <path
                    d="M120 40 Q180 30 220 80 T260 180 T280 320 T240 440 T150 420 T100 300 T80 180 Z"
                    fill="none"
                    stroke="#D4AF37"
                    strokeWidth="1.2"
                    strokeDasharray="4 4"
                  />
                  <circle cx="160" cy="120" r="40" fill="rgba(212, 175, 55, 0.08)" />
                  <circle cx="250" cy="380" r="30" fill="rgba(212, 175, 55, 0.08)" />
                  <line x1="160" y1="120" x2="250" y2="380" stroke="#333333" strokeWidth="1" />
                  <line x1="160" y1="120" x2="190" y2="260" stroke="#333333" strokeWidth="1" />
                </svg>

                {/* Region Labels on Map */}
                <div className="absolute top-16 left-28 text-[11px] font-bold text-[#D4AF37]/70 font-mono pointer-events-none">
                  수도권 (서울/경기)
                </div>
                <div className="absolute bottom-28 right-24 text-[11px] font-bold text-[#D4AF37]/70 font-mono pointer-events-none">
                  영남권 (부산/대구)
                </div>
                <div className="absolute top-52 left-36 text-[11px] font-bold text-[#D4AF37]/70 font-mono pointer-events-none">
                  충청권 (대전/세종)
                </div>

                {/* User Current Location Pin (if location enabled) */}
                {userLocation && (
                  (() => {
                    const userTop = ((37.6 - userLocation.lat) / (37.6 - 35.0)) * 75 + 10;
                    const userLeft = ((userLocation.lng - 126.8) / (129.3 - 126.8)) * 75 + 12;
                    return (
                      <div
                        style={{ top: `${userTop}%`, left: `${userLeft}%` }}
                        className="absolute -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-auto group"
                      >
                        {/* Radar Wave Pulse */}
                        <div className="relative flex items-center justify-center">
                          <span className="absolute w-12 h-12 rounded-full bg-blue-500/20 animate-ping pointer-events-none" />
                          <span className="absolute w-6 h-6 rounded-full bg-blue-400/30 animate-pulse pointer-events-none" />
                          
                          <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg shadow-blue-500/50 border-2 border-white cursor-pointer">
                            <LocateFixed className="w-4 h-4" />
                          </div>

                          {/* Hover Tooltip */}
                          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1.5 px-2 py-1 rounded bg-[#080808] border border-blue-500/60 text-blue-300 text-[10px] font-bold whitespace-nowrap shadow-xl">
                            내 위치 (기준점)
                          </div>
                        </div>
                      </div>
                    );
                  })()
                )}

                {/* Interactive Salon Pins */}
                {salons.map((salon) => {
                  const isSelected = activeSalon?.id === salon.id;

                  // Compute relative display positions based on lat/lng
                  // Korea approximate lat: 35.1 to 37.6, lng: 126.9 to 129.2
                  const topPercent = ((37.6 - salon.lat) / (37.6 - 35.0)) * 75 + 10;
                  const leftPercent = ((salon.lng - 126.8) / (129.3 - 126.8)) * 75 + 12;

                  return (
                    <div
                      key={salon.id}
                      style={{ top: `${topPercent}%`, left: `${leftPercent}%` }}
                      className="absolute -translate-x-1/2 -translate-y-1/2 z-20 group"
                    >
                      <button
                        onClick={() => setSelectedSalonId(salon.id)}
                        className={`relative p-2 rounded-full transition-transform duration-300 cursor-pointer ${
                          isSelected
                            ? 'scale-125 z-30'
                            : 'hover:scale-110 z-20'
                        }`}
                      >
                        {/* Pin Pulse Glow */}
                        {isSelected && (
                          <span className="absolute inset-0 rounded-full bg-[#D4AF37]/40 animate-ping pointer-events-none" />
                        )}

                        <div
                          className={`w-9 h-9 rounded-full flex items-center justify-center shadow-xl border-2 transition-all ${
                            isSelected
                              ? 'bg-[#D4AF37] text-[#080808] border-[#F2F2F2] shadow-[#D4AF37]/50'
                              : 'bg-[#121212] text-[#D4AF37] border-[#D4AF37]/60 hover:bg-[#D4AF37] hover:text-[#080808]'
                          }`}
                        >
                          <MapPin className="w-4 h-4 fill-current" />
                        </div>

                        {/* Pin Hover Badge */}
                        <div
                          className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-1 px-2 py-1 rounded bg-[#121212] text-[#F2F2F2] border border-[#D4AF37]/50 text-[10px] font-bold whitespace-nowrap shadow-lg transition-opacity pointer-events-none ${
                            isSelected ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                          }`}
                        >
                          {salon.name}
                        </div>
                      </button>
                    </div>
                  );
                })}
              </div>

              {/* Bottom Active Salon Card Floating Overlay on Map */}
              {activeSalon && (
                <div className="absolute bottom-4 left-4 right-4 z-30 p-4 rounded-xl bg-[#121212]/95 border border-[#D4AF37]/50 backdrop-blur-md shadow-2xl">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-[#D4AF37] text-[#080808]">
                          선택된 살롱
                        </span>
                        {activeSalon.distance !== null && activeSalon.distance !== undefined && (
                          <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded bg-[#D4AF37]/20 text-[#D4AF37] border border-[#D4AF37]/40">
                            <Navigation className="w-2.5 h-2.5 text-[#D4AF37]" />
                            {activeSalon.distance < 1
                              ? `${Math.round(activeSalon.distance * 1000)}m`
                              : `${activeSalon.distance.toFixed(1)}km`}
                          </span>
                        )}
                        <h4 className="text-sm sm:text-base font-bold text-[#F2F2F2] font-serif-luxury">
                          {activeSalon.name} ({activeSalon.branch})
                        </h4>
                      </div>
                      <p className="text-xs text-[#888888]">
                        {activeSalon.address} {activeSalon.detailAddress} · ☎ {activeSalon.phone}
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <a
                        href={`https://map.kakao.com/link/search/${encodeURIComponent(activeSalon.name + ' ' + activeSalon.address)}`}
                        target="_blank"
                        rel="noreferrer"
                        className="px-3 py-2 rounded bg-[#181818] border border-[#262626] hover:bg-[#202020] text-[#CCCCCC] hover:text-[#F2F2F2] text-xs font-semibold flex items-center gap-1"
                      >
                        <ExternalLink className="w-3.5 h-3.5 text-[#D4AF37]" />
                        <span>길찾기</span>
                      </a>
                      <button
                        onClick={() => onOpenReservation(activeSalon.id)}
                        className="px-4 py-2 rounded bg-[#D4AF37] text-[#080808] hover:bg-[#e5c158] text-xs font-bold uppercase tracking-wider flex items-center gap-1 shadow cursor-pointer"
                      >
                        <Calendar className="w-3.5 h-3.5" />
                        <span>시술 예약</span>
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Map Bottom Footer Info */}
            <div className="p-3 bg-[#121212] border-t border-[#262626] text-[11px] text-[#888888] flex items-center justify-between">
              <span>* 전국 마스터키 공인 살롱은 (주)케이메디플러스 공식 인증 현판을 보유하고 있습니다.</span>
              <span className="text-[#D4AF37] font-medium">원장님 가맹 문의: 1544-7890</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
