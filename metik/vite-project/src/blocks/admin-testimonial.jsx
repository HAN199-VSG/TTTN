import React from 'react';

// Testimonial — hiển thị đánh giá khách hàng theo layout 2 cột giống demo METIK.
const AdminTestimonial = ({
  title = 'KHÁCH HÀNG NÓI GÌ?',
  autoPlayInterval = 5,
  items = [],
}) => {
  if (!items || items.length === 0) {
    return (
      <div className="w-full py-16 flex items-center justify-center border-2 border-dashed border-gray-300 rounded-2xl">
        <p className="text-gray-400 font-bold">Chưa có đánh giá nào</p>
      </div>
    );
  }

  return (
    <div className="w-full py-12 px-4">
      <div className="max-w-[1100px] mx-auto">
        {title && (
          <div className="mb-10">
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

        {/* Lưới testimonial: tối đa 2 cột */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {items.map((item, idx) => (
            <div key={idx} className="flex items-start gap-4">
              {/* Avatar */}
              <div className="flex-shrink-0">
                {item.avatarUrl ? (
                  <img
                    src={item.avatarUrl}
                    alt={item.name || 'Khách hàng'}
                    className="w-20 h-20 rounded-full object-cover shadow-md border-2 border-white"
                  />
                ) : (
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center text-3xl shadow-md border-2 border-white"
                    style={{ background: '#fff3cd' }}
                  >
                    👤
                  </div>
                )}
              </div>

              {/* Nội dung */}
              <div className="flex-1">
                {/* Sao vàng */}
                <div className="flex gap-0.5 mb-2">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <svg
                      key={s}
                      className="w-4 h-4"
                      style={{ color: '#f59e0b' }}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Quote */}
                <p className="text-sm leading-relaxed text-gray-800 mb-3 italic">
                  &ldquo;{item.quote}&rdquo;
                </p>

                {/* Tên */}
                <p className="font-bold text-sm" style={{ color: '#2a7a2a' }}>
                  {item.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminTestimonial;
