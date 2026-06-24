import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const AboutSpotlight = ({
  sectionTitle = "VỀ CHÚNG TÔI",
  sectionSubtitle = "KẾT NỐI DOANH NHÂN - LAN TỎA NGHĨA TÌNH",
  description = "Câu lạc bộ Doanh nhân Đồng Tháp tại TP. Hồ Chí Minh...",
  imageCorner = "https://webdemo.hexagon.xyz/medias/hoavanvct.png",
  spotlightTitle = "THƯỜNG TRỰC BCH TIÊU BIỂU",
  members = [],
  activeLang = "VN"
}) => {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section className="py-24 bg-gradient-to-b from-[#ece6ff]/40 via-[#e8f4ff]/50 to-[#f0e0ff]/30 relative z-10 overflow-hidden">
      
      {/* Background Decorative Pattern */}
      <div 
        className="absolute inset-0 bg-no-repeat bg-bottom bg-contain opacity-40 pointer-events-none z-0"
        style={{ backgroundImage: `url('https://webdemo.hexagon.xyz/medias/hoavanvct.png')` }}
      />

      <div className="max-w-[1400px] mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: About Us */}
          <div className="lg:col-span-6 flex flex-col gap-6 relative bg-white/65 p-8 md:p-10 rounded-[28px] border border-white/40 shadow-sm backdrop-blur-md group">
            <h2 className="text-[#0B5077] font-extrabold text-2xl md:text-3xl tracking-wide uppercase">
              {sectionTitle}
            </h2>
            <p className="text-xs md:text-sm text-[#0B355B] font-bold tracking-widest uppercase -mt-2">
              {sectionSubtitle}
            </p>
            <div className="w-16 h-1 bg-[#0072ff] rounded-full" />
            <p className="text-gray-700 text-sm md:text-base leading-relaxed whitespace-pre-line z-10 relative">
              {description}
            </p>

            {/* Decorative Floating Lotus in the corner */}
            {imageCorner && (
              <img 
                src={imageCorner} 
                alt="Hoa văn trang trí" 
                className="absolute -bottom-6 -left-6 w-52 h-auto opacity-80 pointer-events-none z-0 select-none transition-all duration-500 group-hover:scale-105 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            )}
          </div>

          {/* Right Column: Member Spotlight Slider */}
          <div className="lg:col-span-6 flex flex-col gap-6 w-full">
            <div className="flex items-center justify-between border-b border-white/20 pb-3">
              <h3 className="text-lg md:text-xl font-bold text-[#0B355B] tracking-wide uppercase">
                {spotlightTitle}
              </h3>
              
              {/* Custom Navigation buttons */}
              <div className="flex items-center gap-2">
                <button className="swiper-button-prev-custom w-9 h-9 rounded-lg bg-white/80 border border-slate-200 text-[#0B5077] flex items-center justify-center hover:bg-[#0B5077] hover:text-white transition-all shadow-sm active:scale-95 cursor-pointer">
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button className="swiper-button-next-custom w-9 h-9 rounded-lg bg-white/80 border border-slate-200 text-[#0B5077] flex items-center justify-center hover:bg-[#0B5077] hover:text-white transition-all shadow-sm active:scale-95 cursor-pointer">
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Swiper Slider */}
            {members && members.length > 0 ? (
              <div className="relative w-full overflow-visible">
                <Swiper
                  modules={[Navigation, Pagination, Autoplay]}
                  spaceBetween={20}
                  slidesPerView={1}
                  autoplay={{ delay: 5000, disableOnInteraction: false }}
                  navigation={{
                    nextEl: '.swiper-button-next-custom',
                    prevEl: '.swiper-button-prev-custom',
                  }}
                  pagination={{
                    el: '.swiper-pagination-custom',
                    clickable: true,
                    bulletClass: 'swiper-pagination-bullet-custom',
                    bulletActiveClass: 'swiper-pagination-bullet-active-custom'
                  }}
                  onSlideChange={(swiper) => setActiveIdx(swiper.realIndex)}
                  className="w-full"
                >
                  {members.map((member, idx) => (
                    <SwiperSlide key={idx} className="pb-4">
                      <div className="flex flex-col md:flex-row items-center gap-6 bg-white/80 border border-white/50 shadow-md p-6 md:p-8 rounded-[100px_24px_24px_100px] md:rounded-[100px_24px_24px_100px] hover:shadow-lg hover:bg-white/95 hover:-translate-y-1 transition-all duration-300 backdrop-blur-md group w-full">
                        
                        {/* Avatar Frame */}
                        <div className="shrink-0 w-28 h-28 md:w-36 md:h-36 rounded-full border-4 border-white shadow-md overflow-hidden relative group-hover:scale-103 transition-transform duration-300">
                          <img 
                            src={member.avatar || "https://via.placeholder.com/150"} 
                            alt={member.name} 
                            className="w-full h-full object-cover"
                          />
                        </div>

                        {/* Member Details */}
                        <div className="flex flex-col gap-2 text-center md:text-left select-text">
                          <h4 className="text-lg md:text-xl font-extrabold text-[#0B355B]">
                            {member.name}
                          </h4>
                          <div className="flex flex-col text-sm text-gray-600 gap-1 leading-relaxed">
                            <p>
                              <span className="font-bold text-[#0B5077]">{activeLang === "VN" ? "Chức vụ: " : "Role: "}</span> 
                              <span className="font-medium text-slate-800">{member.role}</span>
                            </p>
                            <p>
                              <span className="font-bold text-[#0B5077]">{activeLang === "VN" ? "Doanh nghiệp: " : "Enterprise: "}</span> 
                              <span className="font-medium text-slate-800">{member.company}</span>
                            </p>
                          </div>
                        </div>

                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>

                {/* Custom Pagination Container */}
                <div className="swiper-pagination-custom flex items-center justify-center gap-2 mt-4" />
              </div>
            ) : (
              <div className="bg-white/50 border border-slate-200/50 text-center py-12 rounded-2xl text-gray-500 text-sm">
                No members found. Add members in admin panel.
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSpotlight;
