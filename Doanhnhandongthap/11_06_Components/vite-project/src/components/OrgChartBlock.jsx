import React from 'react';

const OrgChartBlock = ({
  sectionTitle = "SƠ ĐỒ TỔ CHỨC & BỘ MÁY ĐIỀU HÀNH",
  sectionSubtitle = "SỰ PHÂN NHIỆM CHUYÊN NGHIỆP - RÕ RÀNG - CHẤT LƯỢNG",
  blocks = []
}) => {
  if (!itemsCount(blocks)) return null;

  function itemsCount(arr) {
    return arr && arr.length > 0;
  }

  // Xác định số cột tự động phù hợp với số block
  const gridColsClass = blocks.length === 1 
    ? 'grid-cols-1 max-w-2xl mx-auto' 
    : blocks.length === 2 
      ? 'grid-cols-1 md:grid-cols-2 max-w-5xl mx-auto' 
      : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3';

  return (
    <section className="py-24 bg-gradient-to-b from-[#ffffff] via-[#f0f6fa] to-[#e8f4ff] relative z-10 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        
        {/* Headings */}
        <div className="flex flex-col items-center gap-2 mb-16 text-center select-none">
          <h2 className="text-[#0B5077] font-extrabold text-2xl md:text-3xl tracking-wide uppercase">
            {sectionTitle}
          </h2>
          <p className="text-xs md:text-sm text-[#1158a7] font-bold tracking-widest uppercase">
            {sectionSubtitle}
          </p>
          <div className="w-16 h-1 bg-[#0072ff] rounded-full mt-2" />
        </div>

        {/* Organizational Blocks Grid */}
        <div className={`grid ${gridColsClass} gap-8 md:gap-10`}>
          {blocks.map((block, bIdx) => (
            <div 
              key={bIdx} 
              className="bg-white border border-slate-100 shadow-md p-6 md:p-8 rounded-[28px] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Block Header */}
                <h3 className="text-lg md:text-xl font-bold text-[#002060] tracking-wide uppercase border-b-2 border-[#002060]/10 pb-3 mb-4 select-text">
                  {block.title}
                </h3>
                
                {/* Block Description */}
                {block.description && (
                  <p className="text-xs md:text-sm text-gray-500 leading-relaxed mb-6 select-text">
                    {block.description}
                  </p>
                )}

                {/* Block Members List */}
                <div className="flex flex-col gap-4">
                  {block.members && block.members.map((member, mIdx) => (
                    <div 
                      key={mIdx} 
                      className="flex items-center gap-4 p-4 bg-slate-50 border border-slate-100 rounded-xl hover:bg-slate-100/50 hover:scale-[1.01] transition-all duration-300 group"
                    >
                      {/* Avatar */}
                      <div className="w-16 h-16 rounded-full border-2 border-white shadow-sm overflow-hidden shrink-0 select-none">
                        <img 
                          src={member.avatar || "https://via.placeholder.com/64"} 
                          alt={member.name} 
                          className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-300"
                        />
                      </div>
                      
                      {/* Details */}
                      <div className="flex flex-col select-text leading-tight">
                        <h4 className="font-extrabold text-sm md:text-base text-gray-800 mb-1">
                          {member.name}
                        </h4>
                        <p className="text-xs text-[#0B5077] font-semibold mb-0.5">
                          {member.role}
                        </p>
                        {member.company && (
                          <p className="text-[11px] text-gray-400 font-medium line-clamp-1">
                            {member.company}
                          </p>
                        )}
                      </div>

                    </div>
                  ))}
                </div>
              </div>
              
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default OrgChartBlock;
