import React, { useState, useMemo } from 'react';
import { Search, Phone, Mail, Award, Briefcase } from 'lucide-react';

const MembersDirectory = ({
  sectionTitle = "MẠNG LƯỚI DOANH NGHIỆP HỘI VIÊN",
  sectionSubtitle = "TRA CỨU & KẾT NỐI HỢP TÁC THƯƠNG MẠI CHÉO",
  categories = [
    { id: "all", name: "Tất cả Hội viên" },
    { id: "vip", name: "Hội viên VIP" },
    { id: "diamond", name: "Hội viên Kim cương" },
    { id: "gold", name: "Hội viên Vàng" },
    { id: "silver", name: "Hội viên Bạc" }
  ],
  members = [],
  activeLang = "VN"
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCat, setSelectedCat] = useState('all');

  // Lọc hội viên theo tìm kiếm và phân loại
  const filteredMembers = useMemo(() => {
    return members.filter(member => {
      const matchCat = selectedCat === 'all' || member.category === selectedCat;
      const term = searchTerm.toLowerCase();
      const matchSearch = 
        (member.name || '').toLowerCase().includes(term) ||
        (member.company || '').toLowerCase().includes(term) ||
        (member.industry || '').toLowerCase().includes(term);
      return matchCat && matchSearch;
    });
  }, [members, searchTerm, selectedCat]);

  // Nhãn sắc thái màu cho từng loại hội viên
  const getCategoryBadge = (cat) => {
    switch (cat) {
      case 'vip':
        return {
          name: activeLang === "VN" ? "VIP" : "VIP",
          style: "bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-sm"
        };
      case 'diamond':
        return {
          name: activeLang === "VN" ? "Kim cương" : "Diamond",
          style: "bg-gradient-to-r from-blue-400 to-indigo-500 text-white shadow-sm"
        };
      case 'gold':
        return {
          name: activeLang === "VN" ? "Hạng Vàng" : "Gold Member",
          style: "bg-gradient-to-r from-yellow-400 to-amber-500 text-white shadow-sm"
        };
      case 'silver':
        return {
          name: activeLang === "VN" ? "Hạng Bạc" : "Silver Member",
          style: "bg-gradient-to-r from-slate-400 to-slate-500 text-white shadow-sm"
        };
      default:
        return {
          name: activeLang === "VN" ? "Hội viên" : "Member",
          style: "bg-slate-100 text-slate-700"
        };
    }
  };

  return (
    <section className="py-24 bg-gradient-to-b from-[#e8f4ff] via-[#ffffff] to-[#f0f6fa] relative z-10 overflow-hidden">
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

        {/* Search & Filter Toolbar */}
        <div className="flex flex-col lg:flex-row gap-6 items-center justify-between bg-white/70 border border-white/50 shadow-md p-6 rounded-3xl backdrop-blur-md mb-12 relative z-20">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 justify-center w-full lg:w-auto select-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCat(cat.id)}
                className={`px-4 py-2 text-xs md:text-sm font-bold rounded-xl transition-all cursor-pointer active:scale-95 ${
                  selectedCat === cat.id
                    ? 'bg-[#0B5077] text-white shadow-md'
                    : 'bg-white/50 text-gray-600 border border-slate-200/60 hover:bg-white hover:text-[#0B5077]'
                }`}
              >
                {activeLang === "VN" ? cat.name : (cat.name === "Tất cả Hội viên" ? "All Members" : cat.name)}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative w-full lg:w-[360px]">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder={activeLang === "VN" ? "Tìm theo tên, công ty, ngành nghề..." : "Search name, company, industry..."}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-11 pr-4 py-3 bg-white border border-slate-200 rounded-2xl text-sm focus:outline-none focus:border-[#0B5077] focus:ring-2 focus:ring-[#0B5077]/10 transition-all shadow-inner"
            />
          </div>

        </div>

        {/* Members Grid */}
        {filteredMembers.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 relative z-10">
            {filteredMembers.map((member, index) => {
              const badge = getCategoryBadge(member.category);
              return (
                <div 
                  key={index} 
                  className="bg-white border border-slate-100/80 shadow-sm hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300 rounded-[28px] p-6 flex flex-col justify-between group relative overflow-hidden"
                >
                  
                  {/* Top: Card Header & Avatar */}
                  <div>
                    <div className="flex items-center gap-4 mb-5">
                      {/* Avatar */}
                      <div className="w-16 h-16 rounded-full border-2 border-white shadow-sm overflow-hidden shrink-0 select-none">
                        <img 
                          src={member.avatar || "https://via.placeholder.com/64"} 
                          alt={member.name} 
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>

                      {/* Name & Category */}
                      <div className="flex flex-col leading-tight select-text">
                        <h3 className="font-extrabold text-base text-gray-800 mb-1.5 group-hover:text-[#0B5077] transition-colors">
                          {member.name}
                        </h3>
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md w-max select-none ${badge.style}`}>
                          {badge.name}
                        </span>
                      </div>
                    </div>

                    {/* Member Details */}
                    <div className="flex flex-col gap-3 text-xs md:text-sm text-gray-600 border-t border-slate-100 pt-4 select-text">
                      <p className="flex items-start gap-2 leading-relaxed">
                        <Award className="w-4.5 h-4.5 text-[#0B5077] shrink-0 mt-0.5" />
                        <span>
                          <strong className="font-bold text-gray-800">{member.role}</strong> tại <span className="font-medium text-slate-700">{member.company}</span>
                        </span>
                      </p>
                      {member.industry && (
                        <p className="flex items-start gap-2 leading-relaxed">
                          <Briefcase className="w-4.5 h-4.5 text-[#0B5077] shrink-0 mt-0.5" />
                          <span className="text-gray-500 line-clamp-2">
                            <strong>{activeLang === "VN" ? "Ngành nghề: " : "Industry: "}</strong>{member.industry}
                          </span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Bottom: Contact Buttons */}
                  <div className="flex items-center gap-2 mt-6 border-t border-slate-50 pt-4">
                    {member.phone && (
                      <a 
                        href={`tel:${member.phone}`} 
                        className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-slate-50 border border-slate-100 hover:bg-[#0072ff]/5 hover:border-[#0072ff]/30 text-[#0072ff] font-bold text-xs transition-all"
                      >
                        <Phone className="w-4 h-4" />
                        <span>{activeLang === "VN" ? "Gọi điện" : "Call"}</span>
                      </a>
                    )}
                    {member.email && (
                      <a 
                        href={`mailto:${member.email}`} 
                        className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-slate-50 border border-slate-100 hover:bg-emerald-50 hover:border-emerald-200 text-emerald-600 font-bold text-xs transition-all"
                      >
                        <Mail className="w-4 h-4" />
                        <span>Email</span>
                      </a>
                    )}
                  </div>

                </div>
              );
            })}
          </div>
        ) : (
          <div className="bg-white border border-slate-200/60 text-center py-16 rounded-3xl shadow-sm text-gray-400 font-medium text-sm select-none">
            {activeLang === "VN" 
              ? "Không tìm thấy hội viên nào phù hợp với từ khóa." 
              : "No members match your search keywords."}
          </div>
        )}

      </div>
    </section>
  );
};

export default MembersDirectory;
