import React from 'react';

// AboutMetik — section giới thiệu với layout xen kẽ ảnh + text nhiều hàng.
const AdminAboutMetik = ({
  title = 'GIỚI THIỆU VỀ METIK',
  subtitle = 'metik là thương hiệu snack thuộc OCHAO, được phát triển trong hệ sinh thái HUNGHAU Holdings với định hướng mang đến những sản phẩm ăn vặt thơm ngon, vui tươi và phù hợp với nhịp sống hiện đại.',
  blocks = [],
}) => {
  return (
    <div className="w-full py-12 px-4">
      <div className="max-w-[1100px] mx-auto">
        {/* Tiêu đề */}
        {title && (
          <div className="mb-4">
            <div className="relative inline-block">
              <div 
                className="absolute bottom-1 left-0 h-3 bg-[#ffd000]" 
                style={{ width: '60%', zIndex: 0 }}
              />
              <h2
                className="relative z-10 text-xl md:text-2xl font-black uppercase tracking-wide m-0"
                style={{ color: '#2a7a2a' }}
              >
                {title}
              </h2>
            </div>
          </div>
        )}

        {/* Mô tả ngắn */}
        {subtitle && (
          <p className="text-sm text-gray-700 leading-relaxed mb-10 max-w-3xl">
            {subtitle}
          </p>
        )}

        {/* Các khối nội dung xen kẽ */}
        <div className="flex flex-col gap-10">
          {blocks.map((block, idx) => {
            const isReverse = block.layout === 'right'; // ảnh bên phải
            const toR = (val) => (typeof val === 'number' ? `${val}px` : val || '12px');
            const d1 = toR(block.borderRadiusDiag1 !== undefined ? block.borderRadiusDiag1 : 12);
            const d2 = toR(block.borderRadiusDiag2 !== undefined ? block.borderRadiusDiag2 : 12);
            const imageBorderRadius = `${d1} ${d2} ${d1} ${d2}`;
            return (
              <div
                key={idx}
                className={`flex flex-col md:flex-row items-center gap-8 ${isReverse ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Ảnh */}
                {block.imageUrl && (
                  <div className="w-full md:w-1/2 flex-shrink-0">
                    <img
                      src={block.imageUrl}
                      alt={block.imageAlt || `Hình ${idx + 1}`}
                      className="w-full h-auto object-cover shadow-md"
                      style={{ borderRadius: imageBorderRadius }}
                    />
                  </div>
                )}

                {/* Nội dung text */}
                <div className="w-full md:w-1/2">
                  {block.content && (
                    <div
                      className="text-sm text-gray-700 leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: block.content }}
                    />
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AdminAboutMetik;
