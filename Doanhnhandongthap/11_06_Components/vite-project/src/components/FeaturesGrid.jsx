import React from 'react';
import { ArrowRight } from 'lucide-react';

const FeaturesGrid = ({
  sectionTitle = "CÁC BAN CHUYÊN MÔN",
  sectionSubtitle = "CƠ CẤU HOẠT ĐỘNG CHUYÊN NGHIỆP HIỆU QUẢ",
  items = [],
  activeLang = "VN"
}) => {
  if (!items || items.length === 0) return null;

  return (
    <section className="py-24 bg-gradient-to-b from-[#f0e0ff] via-[#dce8ff] to-[#d4e0ff] text-center relative z-10 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        
        {/* Headings */}
        <div className="flex flex-col items-center gap-2 mb-16">
          <h2 className="text-[#0B5077] font-extrabold text-2xl md:text-3xl tracking-wide uppercase">
            {sectionTitle}
          </h2>
          <p className="text-xs md:text-sm text-[#1158a7] font-bold tracking-widest uppercase">
            {sectionSubtitle}
          </p>
          <div className="w-16 h-1 bg-[#0072ff] rounded-full mt-2" />
        </div>

        {/* Dynamic Grid */}
        <div className="flex flex-wrap justify-center gap-8">
          {items.map((item, index) => (
            <div 
              key={index} 
              className="w-full sm:w-[280px] md:w-[320px] lg:w-[340px] min-h-[270px] bg-gradient-to-b from-[#2CB2FF] to-[#0B5077] rounded-[60px_0_60px_0] p-8 flex flex-col items-center justify-between shadow-[0_15px_35px_rgba(12,74,115,0.2)] hover:shadow-[0_25px_45px_rgba(12,74,115,0.35)] hover:-translate-y-2 hover:from-[#21adff] hover:to-[#0e5685] transition-all duration-500 group relative select-none"
            >
              {/* Icon Frame */}
              <div className="w-24 h-24 flex items-center justify-center mb-4 bg-white/5 rounded-full border border-white/10 group-hover:scale-108 group-hover:bg-white/10 transition-all duration-500">
                <img 
                  src={item.icon || "https://cdn-icons-png.flaticon.com/512/3135/3135706.png"} 
                  alt={item.title} 
                  className="h-12 w-auto object-contain brightness-0 invert opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>

              {/* Title */}
              <h3 className="text-lg md:text-xl font-bold text-white mb-6 text-center tracking-wide leading-snug select-text">
                {item.title}
              </h3>

              {/* Action Button */}
              <button 
                className="flex items-center justify-center gap-2 px-6 py-2.5 text-xs font-bold text-white bg-white/15 border border-white/30 hover:bg-white hover:text-[#0b5077] hover:border-white transition-all duration-300 cursor-pointer group/btn"
                style={{ 
                  borderRadius: `${item.btnRadius || 24}px`,
                  backgroundColor: item.btnBg,
                  color: item.btnTextColor
                }}
              >
                <span>{item.btnText || (activeLang === "VN" ? "Xem hoạt động" : "View activities")}</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FeaturesGrid;
