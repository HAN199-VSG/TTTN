import React from 'react';

const TimelineBlock = ({
  sectionTitle = "LỊCH SỬ HÌNH THÀNH & CỘT MỐC",
  sectionSubtitle = "HÀNH TRÌNH TỪ NHỮNG BƯỚC CHÂN ĐẦU TIÊN",
  items = []
}) => {
  if (!items || items.length === 0) return null;

  return (
    <section className="py-24 bg-gradient-to-b from-[#f2f4ff] via-[#ece6ff]/40 to-[#ffffff] relative z-10 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">
        
        {/* Headings */}
        <div className="flex flex-col items-center gap-2 mb-20 text-center select-none">
          <h2 className="text-[#0B5077] font-extrabold text-2xl md:text-3xl tracking-wide uppercase">
            {sectionTitle}
          </h2>
          <p className="text-xs md:text-sm text-[#1158a7] font-bold tracking-widest uppercase">
            {sectionSubtitle}
          </p>
          <div className="w-16 h-1 bg-[#0072ff] rounded-full mt-2" />
        </div>

        {/* Timeline Axis */}
        <div className="relative">
          {/* Central Vertical Line (Desktop only, left-aligned on mobile) */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[3px] bg-gradient-to-b from-[#0072ff] via-[#FAF390] to-[#0044cc]/20 -translate-x-[1.5px] z-0" />

          {/* Timeline Items */}
          <div className="flex flex-col gap-12 md:gap-16 relative z-10">
            {items.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <div 
                  key={index} 
                  className={`flex flex-col md:flex-row items-start md:items-center relative w-full ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  
                  {/* Glowing Node on Axis */}
                  <div className="absolute left-4 md:left-1/2 w-6 h-6 rounded-full bg-white border-4 border-[#0072ff] shadow-[0_0_12px_rgba(0,114,255,0.4)] -translate-x-1/2 z-20 flex items-center justify-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FAF390] animate-ping" />
                  </div>

                  {/* Empty Spacer Column for Desktop */}
                  <div className="hidden md:block w-1/2" />

                  {/* Content Card Column */}
                  <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-12 flex justify-start">
                    <div className="bg-white/90 border border-slate-100/80 shadow-md p-6 md:p-8 rounded-2xl hover:shadow-lg hover:-translate-y-1 hover:bg-white transition-all duration-300 backdrop-blur-md flex flex-col md:flex-row gap-6 items-start w-full group">
                      
                      {/* Image if available */}
                      {item.image && (
                        <div className="w-full md:w-32 h-32 rounded-xl overflow-hidden shrink-0 shadow-sm border border-slate-100/50 select-none">
                          <img 
                            src={item.image} 
                            alt={item.title} 
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>
                      )}

                      {/* Text */}
                      <div className="flex-grow flex flex-col gap-2">
                        {/* Year Badge */}
                        <span className="inline-block self-start text-xs md:text-sm font-extrabold text-[#0072ff] bg-blue-50 px-3 py-1 rounded-md tracking-wider shadow-sm border border-blue-100 select-none">
                          {item.year}
                        </span>
                        {/* Title */}
                        <h3 className="text-base md:text-lg font-bold text-[#0B355B] tracking-wide select-text">
                          {item.title}
                        </h3>
                        {/* Description */}
                        <p className="text-xs md:text-sm text-gray-500 leading-relaxed select-text">
                          {item.desc}
                        </p>
                      </div>

                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default TimelineBlock;
