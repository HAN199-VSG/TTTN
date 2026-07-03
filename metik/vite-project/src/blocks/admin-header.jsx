import React from 'react';

const AdminHeader = ({ logoUrl, menuItems = [], socialLinks = [] }) => {
  const renderIcon = (platform) => {
    if (platform === 'facebook') return <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg>;
    if (platform === 'tiktok') return <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.01.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.12-3.44-3.17-3.8-5.46-.4-2.51.76-5.13 2.86-6.49 1.19-.74 2.58-1.07 3.98-1.05v4.11c-.51-.04-1.04.05-1.5.31-.96.53-1.52 1.6-1.42 2.68.08 1.01.69 1.94 1.63 2.29.98.34 2.06.19 2.89-.36.75-.49 1.25-1.33 1.34-2.22.06-2.92.02-5.85.03-8.77.01-2.93-.01-5.85.02-8.77z"/></svg>;
    if (platform === 'linkedin') return <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>;
    return null;
  };
  
  const getBgColor = (platform) => {
    if (platform === 'facebook') return 'bg-[#3b5998]';
    if (platform === 'tiktok') return 'bg-black';
    if (platform === 'linkedin') return 'bg-[#007bb5]';
    return 'bg-gray-500';
  };

  return (
    <header className="w-full bg-white shadow-sm z-50">
      <div className="max-w-[1250px] mx-auto px-4 h-[100px] flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex-shrink-0 cursor-pointer">
          <img src={logoUrl} alt="METIK Logo" className="h-[70px] md:h-[90px] object-contain" />
        </a>

        {/* Menu */}
        <nav className="hidden md:flex items-center gap-8 font-bold text-gray-700">
          {menuItems && menuItems.map((item, idx) => (
            <a 
              key={idx} 
              href={item.url} 
              className="relative uppercase tracking-wide hover:text-[#f4851a] transition-colors py-2 group text-[15px]"
            >
              {item.label}
              <span className="absolute left-0 bottom-0 w-full h-[3px] bg-[#f4851a] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
            </a>
          ))}
        </nav>

        {/* Social Icons */}
        <div className="hidden md:flex items-center gap-3">
          {socialLinks && socialLinks.map((social, idx) => (
            <div key={idx} className="relative group flex items-center justify-center">
              <a 
                href={social.url} 
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-transform hover:scale-110 ${getBgColor(social.platform)}`}
              >
                {renderIcon(social.platform)}
              </a>
              {/* Tooltip */}
              <div className="absolute top-full mt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 whitespace-nowrap bg-black text-white text-[13px] px-3 py-1.5 rounded-md shadow-lg font-medium">
                {social.tooltip}
                {/* Triangle */}
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[6px] border-r-[6px] border-b-[8px] border-transparent border-b-black"></div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <svg className="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;
