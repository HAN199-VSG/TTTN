import React from 'react';

// Hero component — Đã nâng cấp để đáp ứng 100% yêu cầu tùy biến giao diện
const AdminHero = ({ 
  title, 
  subtitle, 
  buttons = [], 
  background = {}, 
  layout = {},
  // Bổ sung các props mới theo yêu cầu phân tích
  titleColor = '#ffffff',
  titleSize = '4xl',
  subtitleColor = '#ffffff',
  subtitleSize = 'lg',
  contentBoxBg = 'transparent', 
  contentBoxRadius = '0',       
  contentBoxPadding = '0'      
}) => {
  
  
  const alignClass = layout.align === 'left' ? 'text-left' : layout.align === 'right' ? 'text-right' : 'text-center';
  const alignFlex = layout.align === 'left' ? 'justify-start' : layout.align === 'right' ? 'justify-end' : 'justify-center';
  const alignItems = layout.align === 'left' ? 'items-start' : layout.align === 'right' ? 'items-end' : 'items-center';
  const getBackgroundStyle = () => {
    const bg = background || {};
    if (bg.type === 'gradient') {
      return { background: `linear-gradient(${bg.direction || 'to bottom right'}, ${bg.fromColor || '#667eea'}, ${bg.toColor || '#764ba2'})` };
    }
    if (bg.type === 'image' && bg.bg_image) {
      return { backgroundImage: `url('${bg.bg_image}')`, backgroundSize: 'cover', backgroundPosition: 'center' };
    }
    return { backgroundColor: bg.color || '#ffffff' };
  };
  
  const getTitleSizeClass = (size) => {
    switch (size) {
      case 'sm': return 'text-2xl md:text-3xl';
      case 'md': return 'text-3xl md:text-5xl';
      case 'lg': return 'text-4xl md:text-6xl';
      case 'xl': return 'text-5xl md:text-7xl';
      default: return 'text-4xl md:text-6xl';
    }
  };

  const getSubtitleSizeClass = (size) => {
    switch (size) {
      case 'sm': return 'text-sm md:text-base';
      case 'md': return 'text-base md:text-lg';
      case 'lg': return 'text-lg md:text-xl';
      case 'xl': return 'text-xl md:text-2xl';
      default: return 'text-lg md:text-xl';
    }
  };

  return (
    <section className="relative py-32 px-4 overflow-hidden" style={getBackgroundStyle()}>
      <div className={`relative mx-auto max-w-7xl flex flex-col ${alignItems}`}>
        
        {/* Cụm hộp chứa nội dung: Cho phép tùy biến màu nền, bo góc, căn lề lọt lòng */}
        <div 
          className={`w-full max-w-3xl ${alignClass} transition-all`}
          style={{
            backgroundColor: contentBoxBg,
            borderRadius: `${contentBoxRadius}px`,
            padding: `${contentBoxPadding}px`,
          }}
        >
          {/* Tùy biến Màu chữ và Kích thước chữ cho Title */}
          {title && (
            <h1 
              className={`${getTitleSizeClass(titleSize)} font-bold mb-4`}
              style={{ color: titleColor }}
            >
              {title}
            </h1>
          )}
          
          {/* Tùy biến Màu chữ và Kích thước chữ cho Subtitle */}
          {subtitle && (
            <p 
              className={`${getSubtitleSizeClass(subtitleSize)} mb-6 opacity-95`}
              style={{ color: subtitleColor }}
            >
              {subtitle}
            </p>
          )}
          
          {/* Cụm Nút bấm: Cho phép thay đổi bo góc nút, màu nút, màu chữ trong nút */}
          {buttons && buttons.length > 0 && (
            <div className={`flex flex-wrap ${alignFlex} gap-4`}>
              {buttons.map((btn, idx) => (
                <a 
                  key={idx} 
                  href={btn.url || '#'} 
                  className="inline-flex items-center gap-2 px-6 py-3 font-medium transition-all"
                  style={{
                    backgroundColor: btn.btnBg || '#2563eb', // Màu nền nút tự chọn
                    color: btn.btnTextColor || '#ffffff',    // Màu chữ trong nút tự chọn
                    borderRadius: `${btn.btnRadius || 8}px`, // Bo góc nút động (ví dụ: 20px)
                    border: btn.style === 'outline' ? '2px solid currentColor' : 'none'
                  }}
                >
                  {btn.text}
                </a>
              ))}
            </div>
          )}
        </div>

      </div>
    </section>
  );
};

export default AdminHero;