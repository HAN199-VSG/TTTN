import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';

const NewsGrid = ({
  sectionTitle = "TIN TỨC & SỰ KIỆN NỔI BẬT",
  items = [],
  activeLang = "VN"
}) => {
  if (!items || items.length === 0) return null;

  // Chia tách bài viết: 2 bài lớn và các bài viết nhỏ
  const largeArticles = items.slice(0, 2);
  const smallArticles = items.slice(2, 5);

  const handleLinkClick = (e) => {
    e.preventDefault();
    alert(activeLang === "VN" ? "Tính năng xem chi tiết tin tức đang được phát triển." : "Detail view feature is under development.");
  };

  return (
    <section className="py-24 bg-gradient-to-b from-[#f5e0f8] via-[#f8eeff] to-[#f2f4ff] relative z-10 overflow-hidden" id="tin-tuc">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        
        {/* News Header */}
        <div className="flex items-end justify-between border-b border-black/10 pb-4 mb-12">
          <div className="flex flex-col gap-2">
            <h2 className="text-[#0B5077] font-extrabold text-2xl md:text-3xl tracking-wide uppercase">
              {sectionTitle}
            </h2>
            <div className="w-12 h-1 bg-[#0072ff] rounded-full" />
          </div>
          <a 
            href="/#tin-tuc-tat-ca" 
            onClick={handleLinkClick}
            className="text-xs md:text-sm font-bold text-[#0b355b] hover:text-[#ff527b] flex items-center gap-1 transition-colors group/all"
          >
            <span>{activeLang === "VN" ? "Xem tất cả" : "View all"}</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/all:translate-x-1" />
          </a>
        </div>

        {/* 2+3 News Grid */}
        <div className="flex flex-col gap-8">
          
          {/* Top Row: 2 Large Articles */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {largeArticles.map((item, index) => (
              <div 
                key={index} 
                className="bg-white rounded-[20px] overflow-hidden shadow-sm hover:shadow-md border border-slate-100 hover:border-blue-100 hover:-translate-y-1.5 transition-all duration-300 flex flex-col group relative"
              >
                {/* Image Container */}
                <div className="relative w-full h-[240px] md:h-[280px] overflow-hidden shrink-0 select-none">
                  <img 
                    src={item.image || "https://via.placeholder.com/600x400"} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {item.category && (
                    <span className="absolute top-4 right-4 bg-gradient-to-r from-[#FAF390] to-[#FBC944] text-[#5a3200] text-[10px] md:text-xs font-bold px-3 py-1 rounded-full shadow-md">
                      {item.category}
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    {/* Date */}
                    <div className="flex items-center gap-1.5 text-xs text-gray-500 font-semibold mb-3">
                      <Calendar className="w-4 h-4 text-[#0B5077]" />
                      <span>{item.date}</span>
                    </div>
                    {/* Title */}
                    <h3 className="text-base md:text-lg font-bold text-[#0B5077] hover:text-[#ff527b] transition-colors leading-snug mb-3 select-text">
                      {item.title}
                    </h3>
                    {/* Description */}
                    <p className="text-xs md:text-sm text-gray-500 leading-relaxed line-clamp-3 mb-6 select-text">
                      {item.desc}
                    </p>
                  </div>
                  
                  {/* Read More Link */}
                  <a 
                    href="/#doc-them" 
                    onClick={handleLinkClick}
                    className="text-xs font-bold text-[#0B5077] hover:text-[#ff527b] flex items-center gap-1.5 transition-colors group/link mt-auto"
                  >
                    <span>{activeLang === "VN" ? "Đọc chi tiết" : "Read more"}</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/link:translate-x-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Row: 3 Smaller Articles */}
          {smallArticles.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {smallArticles.map((item, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-[20px] overflow-hidden shadow-sm hover:shadow-md border border-slate-100 hover:border-blue-100 hover:-translate-y-1.5 transition-all duration-300 flex flex-col group relative"
                >
                  {/* Image */}
                  <div className="relative w-full h-[180px] overflow-hidden shrink-0 select-none">
                    <img 
                      src={item.image || "https://via.placeholder.com/400x250"} 
                      alt={item.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {item.category && (
                      <span className="absolute top-3 right-3 bg-gradient-to-r from-[#FAF390] to-[#FBC944] text-[#5a3200] text-[9px] md:text-[10px] font-bold px-2.5 py-0.5 rounded-full shadow-md">
                        {item.category}
                      </span>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-5 flex-grow flex flex-col justify-between">
                    <div>
                      {/* Date */}
                      <div className="flex items-center gap-1.5 text-[11px] text-gray-500 font-semibold mb-2">
                        <Calendar className="w-3.5 h-3.5 text-[#0B5077]" />
                        <span>{item.date}</span>
                      </div>
                      {/* Title */}
                      <h3 className="text-sm md:text-base font-bold text-[#0B5077] hover:text-[#ff527b] transition-colors leading-snug mb-2 line-clamp-2 select-text">
                        {item.title}
                      </h3>
                      {/* Description */}
                      <p className="text-[11px] md:text-xs text-gray-500 leading-relaxed line-clamp-3 mb-4 select-text">
                        {item.desc}
                      </p>
                    </div>

                    {/* Read More */}
                    <a 
                      href="/#doc-them" 
                      onClick={handleLinkClick}
                      className="text-xs font-bold text-[#0B5077] hover:text-[#ff527b] flex items-center gap-1.5 transition-colors group/link mt-auto"
                    >
                      <span>{activeLang === "VN" ? "Đọc chi tiết" : "Read more"}</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/link:translate-x-1" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>

      </div>
    </section>
  );
};

export default NewsGrid;
