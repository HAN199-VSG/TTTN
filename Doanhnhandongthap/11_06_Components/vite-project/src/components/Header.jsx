import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';

const Header = ({ 
  logoUrl = "https://webdemo.hexagon.xyz/medias/logo 2.png",
  logoTexts = ["CÂU LẠC BỘ DOANH NHÂN ĐỒNG THÁP", "TẠI TP.HỒ CHÍ MINH"],
  menu = [],
  currentPath = "/",
  onNavigate,
  activeLang = "VN",
  onChangeLang
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e, url) => {
    // Nếu là anchor link trên trang chủ
    if (url.startsWith('/#') || url.startsWith('#')) {
      e.preventDefault();
      const id = url.split('#')[1];
      if (currentPath !== '/') {
        if (onNavigate) onNavigate('/');
        // Đợi chuyển trang rồi cuộn
        setTimeout(() => {
          const el = document.getElementById(id);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 300);
      } else {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      if (onNavigate) {
        e.preventDefault();
        onNavigate(url);
      }
    }
    setIsOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-[#0B355B]/85 border-b border-white/10 shadow-lg py-3 backdrop-blur-xl' 
          : 'bg-[#2465B3]/95 md:bg-transparent py-5'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 flex items-center justify-between">
        
        {/* Logo & Club Name */}
        <a 
          href="/" 
          onClick={(e) => handleLinkClick(e, '/')}
          className="flex items-center gap-3 no-underline group"
        >
          <img 
            src={logoUrl} 
            alt="Logo CLB" 
            className="h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
          />
          <div className="flex flex-col leading-tight select-none">
            {logoTexts.map((text, idx) => (
              <span 
                key={idx} 
                className={`font-bold text-white text-[11px] md:text-[13px] tracking-wide block ${
                  idx === 0 ? 'opacity-100' : 'opacity-90 font-semibold'
                }`}
              >
                {text}
              </span>
            ))}
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {menu.map((item, index) => {
            const label = activeLang === "VN" ? item.label : (item.labelEn || item.label);
            const isActive = currentPath === item.url;
            return (
              <a
                key={index}
                href={item.url}
                onClick={(e) => handleLinkClick(e, item.url)}
                className={`text-sm font-medium tracking-wide transition-all duration-300 relative py-1 hover:text-[#FAF390] ${
                  isActive 
                    ? 'text-[#FAF390] font-semibold scale-105' 
                    : 'text-gray-100'
                }`}
              >
                {label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#FAF390] rounded-full animate-pulse" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right Controls (Language & Mobile Menu Toggle) */}
        <div className="flex items-center gap-4">
          
          {/* Language Selection Pill */}
          <div 
            onClick={() => onChangeLang(activeLang === 'VN' ? 'EN' : 'VN')}
            className="lang-toggle flex items-center bg-gradient-to-b from-[#CBA359] via-[#FAF390] to-[#FCAF14] rounded-full p-[3px] gap-[2px] cursor-pointer shadow-md select-none transition-all duration-300 hover:scale-105 active:scale-95"
            title={activeLang === 'VN' ? "Switch to English" : "Chuyển sang Tiếng Việt"}
          >
            <span 
              className={`text-[10px] md:text-[11px] font-extrabold tracking-wider w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 ${
                activeLang === 'VN' 
                  ? 'bg-[#5a3200] text-[#facc15]' 
                  : 'text-[#7a4e00]'
              }`}
            >
              VN
            </span>
            <span 
              className={`text-[10px] md:text-[11px] font-extrabold tracking-wider w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 ${
                activeLang === 'EN' 
                  ? 'bg-[#5a3200] text-[#facc15]' 
                  : 'text-[#7a4e00]'
              }`}
            >
              EN
            </span>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white hover:text-[#FAF390] focus:outline-none p-1 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      <div 
        className={`lg:hidden fixed top-[72px] left-0 w-full bg-[#0b355b]/95 backdrop-blur-xl border-t border-white/10 shadow-2xl overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-screen opacity-100 py-6' : 'max-h-0 opacity-0 py-0'
        }`}
      >
        <div className="flex flex-col px-6 gap-4">
          {menu.map((item, index) => {
            const label = activeLang === "VN" ? item.label : (item.labelEn || item.label);
            const isActive = currentPath === item.url;
            return (
              <a
                key={index}
                href={item.url}
                onClick={(e) => handleLinkClick(e, item.url)}
                className={`text-base font-semibold py-2 transition-all border-b border-white/5 last:border-none ${
                  isActive 
                    ? 'text-[#FAF390] pl-2 border-l-2 border-[#FAF390]' 
                    : 'text-gray-100 hover:text-[#FAF390]'
                }`}
              >
                {label}
              </a>
            );
          })}
        </div>
      </div>
    </header>
  );
};

export default Header;
