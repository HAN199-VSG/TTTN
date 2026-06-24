import React from 'react';

const containerMap = { sm: '640px', md: '768px', lg: '1024px', xl: '1280px' };

export const AdminFeatures = ({
  container = 'lg',
  background = {},
  padding_x = 4,
  padding_y = 4,
  sectionTitle = 'CÁC BAN CHUYÊN MÔN',
  sectionSubtitle = 'CLB DOANH NHÂN ĐỒNG THÁP TẠI TP. HỒ CHÍ MINH',
  items = []
}) => {
  const bgStyle = {};
  if (background.type === 'color') bgStyle.backgroundColor = background.color || 'transparent';
  if (background.type === 'image' && background.bg_image) {
    bgStyle.backgroundImage = `url(${background.bg_image})`;
    bgStyle.backgroundSize = 'cover';
  }
  if (background.type === 'gradient') {
    bgStyle.background = `linear-gradient(${background.direction || 'to right'}, ${background.fromColor || '#667eea'}, ${background.toColor || '#764ba2'})`;
  }

  return (
    <section style={{ ...bgStyle, padding: `${(padding_y || 0) * 4}px ${(padding_x || 0) * 4}px` }}>
      <div style={{ maxWidth: containerMap[container] || '1280px', margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ fontSize: '24px', color: '#002060', margin: '0 0 4px 0', fontWeight: 'bold' }}>{sectionTitle}</h2>
        <p style={{ fontSize: '12px', color: '#002060', margin: '0 0 32px 0', letterSpacing: '1px' }}>{sectionSubtitle}</p>
        
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '24px' }}>
          {items.map((item, index) => (
            <div key={index} style={{
              width: '260px',
              background: 'linear-gradient(to bottom, #0088ff, #0044cc)',
              borderRadius: '24px 24px 4px 24px',
              padding: '24px',
              color: '#ffffff',
              boxShadow: '0 10px 20px rgba(0,0,0,0.15)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
              <div style={{ textAlign: 'center' }}>
                {item.icon && <img src={item.icon} alt={item.title} style={{ width: '48px', height: '48px', marginBottom: '16px' }} />}
                <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '16px' }}>{item.title}</h3>
              </div>
              <button style={{
                backgroundColor: item.btnBg || 'rgba(255,255,255,0.2)',
                color: item.btnTextColor || '#ffffff',
                border: '1px solid rgba(255,255,255,0.4)',
                borderRadius: `${item.btnRadius || 20}px`,
                padding: '6px 16px',
                fontSize: '12px',
                cursor: 'pointer'
              }}>
                {item.btnText || 'Xem hoạt động'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};