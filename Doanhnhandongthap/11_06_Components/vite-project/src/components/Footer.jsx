import React from 'react';
import { Mail, Phone, MapPin, Globe } from 'lucide-react';

const FacebookIcon = () => (
  <svg className="w-4.5 h-4.5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1V12h3v3h-3v6.8c4.56-.93 8-4.96 8-9.8z"/>
  </svg>
);

const YoutubeIcon = () => (
  <svg className="w-4.5 h-4.5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.107C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.388.511a3.003 3.003 0 0 0-2.11 2.107C0 8.029 0 12 0 12s0 3.971.502 5.837a3.003 3.003 0 0 0 2.11 2.107c1.883.511 9.388.511 9.388.511s7.505 0 9.388-.511a3.003 3.003 0 0 0 2.11-2.107c.502-1.866.502-5.837.502-5.837s0-3.971-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

const Footer = ({ 
  logoUrl = "https://webdemo.hexagon.xyz/medias/logo 2.png",
  logoTexts = ["CÂU LẠC BỘ DOANH NHÂN ĐỒNG THÁP", "TẠI TP.HỒ CHÍ MINH"],
  footerContact = {},
  menu = [],
  onNavigate,
  activeLang = "VN"
}) => {
  const { address, email, phone, facebook, youtube, website } = footerContact;

  const handleLinkClick = (e, url) => {
    if (url.startsWith('/#') || url.startsWith('#')) {
      e.preventDefault();
      const id = url.split('#')[1];
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      if (onNavigate) {
        e.preventDefault();
        onNavigate(url);
      }
    }
  };

  return (
    <footer className="bg-[#081D33] text-gray-300 pt-16 pb-8 border-t border-white/5 relative z-10">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
        
        {/* Brand Column */}
        <div className="md:col-span-5 flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <img src={logoUrl} alt="Logo" className="h-12 w-auto object-contain" />
            <div className="flex flex-col leading-tight">
              {logoTexts.map((text, idx) => (
                <span key={idx} className="font-bold text-white text-[12px] md:text-[13px] tracking-wide block">
                  {text}
                </span>
              ))}
            </div>
          </div>
          <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
            {activeLang === "VN" 
              ? "Nơi kết nối, hội tụ và lan tỏa những giá trị tốt đẹp của con người và quê hương Đất Sen Hồng. Đồng hành cùng sự phát triển bền vững."
              : "Connecting, gathering, and spreading the good values of the people and homeland of the Pink Lotus. Accompanying sustainable development."
            }
          </p>
          
          {/* Social Icons */}
          <div className="flex items-center gap-4">
            {facebook && (
              <a 
                href={facebook} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-white transition-all hover:bg-[#0072ff] hover:scale-105"
              >
                <FacebookIcon />
              </a>
            )}
            {youtube && (
              <a 
                href={youtube} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-white transition-all hover:bg-red-600 hover:scale-105"
              >
                <YoutubeIcon />
              </a>
            )}
            {website && (
              <a 
                href={`http://${website}`} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-white transition-all hover:bg-[#00c6ff] hover:scale-105"
              >
                <Globe className="w-4.5 h-4.5" />
              </a>
            )}
          </div>
        </div>

        {/* Contact Info Column */}
        <div className="md:col-span-4 flex flex-col gap-6">
          <h4 className="text-white font-bold text-base tracking-wider border-b border-white/10 pb-2">
            {activeLang === "VN" ? "THÔNG TIN LIÊN HỆ" : "CONTACT INFORMATION"}
          </h4>
          <ul className="flex flex-col gap-4 text-sm">
            {address && (
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#FAF390] shrink-0 mt-0.5" />
                <span className="leading-relaxed text-gray-400">{address}</span>
              </li>
            )}
            {phone && (
              <li className="flex items-center gap-3">
                <Phone className="w-4.5 h-4.5 text-[#FAF390] shrink-0" />
                <a href={`tel:${phone.replace(/\./g, '')}`} className="text-gray-400 hover:text-white transition-colors">
                  {phone}
                </a>
              </li>
            )}
            {email && (
              <li className="flex items-center gap-3">
                <Mail className="w-4.5 h-4.5 text-[#FAF390] shrink-0" />
                <a href={`mailto:${email}`} className="text-gray-400 hover:text-white transition-colors">
                  {email}
                </a>
              </li>
            )}
          </ul>
        </div>

        {/* Quick Links Column */}
        <div className="md:col-span-3 flex flex-col gap-6">
          <h4 className="text-white font-bold text-base tracking-wider border-b border-white/10 pb-2">
            {activeLang === "VN" ? "LIÊN KẾT NHANH" : "QUICK LINKS"}
          </h4>
          <ul className="grid grid-cols-1 gap-3 text-sm">
            {menu.map((item, index) => {
              const label = activeLang === "VN" ? item.label : (item.labelEn || item.label);
              return (
                <li key={index}>
                  <a 
                    href={item.url} 
                    onClick={(e) => handleLinkClick(e, item.url)}
                    className="text-gray-400 hover:text-[#FAF390] transition-colors flex items-center gap-2"
                  >
                    <span className="text-[10px]">▶</span> {label}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

      </div>

      <div className="max-w-[1400px] mx-auto px-4 md:px-8 mt-12 pt-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
        <p>
          © {new Date().getFullYear()} {logoTexts[0]}. {activeLang === "VN" ? "Tất cả quyền được bảo lưu." : "All rights reserved."}
        </p>
        <p className="flex items-center gap-2">
          <span>Designed with 💙 for Đất Sen Hồng</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
