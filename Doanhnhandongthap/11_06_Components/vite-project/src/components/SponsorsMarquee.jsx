import React from 'react';

const SponsorsMarquee = ({ 
  title = "ĐỐI TÁC & NHÀ TÀI TRỢ TIÊU BIỂU", 
  items = [],
  speed = 25 
}) => {
  if (!items || items.length === 0) return null;

  // Nhân bản danh sách logo để tạo hiệu ứng cuộn vô tận mượt mà
  const marqueeItems = [...items, ...items, ...items, ...items];

  return (
    <section className="py-12 bg-gradient-to-b from-[#a8dfff]/40 to-[#cdeeff]/30 border-y border-[#cdeeff]/50 relative z-10 overflow-hidden select-none">
      <div className="max-w-[1400px] mx-auto px-4 mb-6 text-center">
        <h3 className="text-sm md:text-base font-extrabold text-[#0B355B] tracking-widest uppercase">
          {title}
        </h3>
      </div>

      {/* Marquee Container */}
      <div className="relative w-full overflow-hidden flex items-center">
        
        {/* Left/Right Fading Overlays */}
        <div className="absolute left-0 top-0 h-full w-20 md:w-32 bg-gradient-to-r from-[#eef7fc] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 h-full w-20 md:w-32 bg-gradient-to-l from-[#edf6fc] to-transparent z-10 pointer-events-none" />

        {/* Scrolling Track */}
        <div 
          className="flex gap-6 md:gap-8 w-max animate-marquee"
          style={{ 
            animationDuration: `${speed}s`,
            animationTimingFunction: 'linear',
            animationIterationCount: 'infinite'
          }}
        >
          {marqueeItems.map((item, idx) => (
            <div 
              key={idx} 
              className="bg-white rounded-xl px-6 py-4 w-40 md:w-48 h-20 md:h-24 flex items-center justify-center shadow-sm border border-slate-100 hover:shadow-md hover:-translate-y-1 hover:border-[#cdeeff] transition-all duration-300 shrink-0 group"
            >
              <img 
                src={item.logo || "https://webdemo.hexagon.xyz/medias/logo 2.png"} 
                alt={item.name} 
                className="max-h-12 md:max-h-16 max-w-full object-contain grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SponsorsMarquee;
