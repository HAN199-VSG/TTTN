import React from 'react';

const containerMap = { sm: '640px', md: '768px', lg: '1024px', xl: '1280px' };

export const AdminOrganization = ({
  container = 'lg',
  background = {},
  padding_x = 4,
  padding_y = 4,
  blocks = []
}) => {
  const bgStyle = {};
  if (background.type === 'color') bgStyle.backgroundColor = background.color || 'transparent';
  if (background.type === 'image' && background.bg_image) {
    bgStyle.backgroundImage = `url(${background.bg_image})`;
    bgStyle.backgroundSize = 'cover';
  }

  return (
    <section style={{ ...bgStyle, padding: `${(padding_y || 0) * 4}px ${(padding_x || 0) * 4}px` }}>
      <div style={{ maxWidth: containerMap[container] || '1280px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: `repeat(${blocks.length || 2}, 1fr)`, gap: '40px' }}>
          {blocks.map((block, bIdx) => (
            <div key={bIdx} style={{ background: '#ffffff', padding: '32px', borderRadius: '16px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
              <h2 style={{ fontSize: '20px', fontWeight: 'bold', color: '#002060', textTransform: 'uppercase', marginBottom: '16px', borderBottom: '2px solid #002060', paddingBottom: '8px' }}>
                {block.title}
              </h2>
              <p style={{ fontSize: '14px', color: '#555555', lineHeight: '1.6', marginBottom: '24px' }}>
                {block.description}
              </p>
              
              {/* Danh sách nhân sự / thành viên */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {block.members && block.members.map((member, mIdx) => (
                  <div key={mIdx} style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '12px', background: '#f8fafc', borderRadius: '8px' }}>
                    <img src={member.avatar || 'https://via.placeholder.com/60'} alt={member.name} style={{ width: '60px', height: '60px', borderRadius: '50%', objectFit: 'cover' }} />
                    <div>
                      <h4 style={{ margin: '0 0 4px 0', fontSize: '15px', fontWeight: 'bold', color: '#333' }}>{member.name}</h4>
                      <p style={{ margin: '0', fontSize: '12px', color: '#666' }}><strong>Chức vụ:</strong> {member.role}</p>
                      <p style={{ margin: '0', fontSize: '12px', color: '#888' }}><strong>Doanh nghiệp:</strong> {member.company}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};