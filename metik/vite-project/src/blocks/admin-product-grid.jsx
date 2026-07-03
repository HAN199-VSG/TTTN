import React from 'react';

// ProductGrid — lưới sản phẩm (dùng cho "Sản phẩm mới" ở trang chủ và trang Sản phẩm).
const AdminProductGrid = ({
  title,
  columns = 4,
  products = [],
  borderRadiusDiag1 = 30,
  borderRadiusDiag2 = 0,
}) => {
  const colClass =
    columns === 2 ? 'sm:grid-cols-2' :
    columns === 3 ? 'sm:grid-cols-2 lg:grid-cols-3' :
    'sm:grid-cols-2 lg:grid-cols-4';

  const toR = (val) => (typeof val === 'number' ? `${val}px` : val || '12px');
  const d1 = toR(borderRadiusDiag1);
  const d2 = toR(borderRadiusDiag2);
  const imageBorderRadius = `${d1} ${d2} ${d1} ${d2}`;

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

        {(!products || products.length === 0) ? (
          <div className="w-full py-16 flex items-center justify-center bg-gray-100 border-2 border-dashed border-gray-300 rounded-2xl">
            <p className="text-gray-400 font-bold">Chưa có sản phẩm nào</p>
          </div>
        ) : (
          <div className={`grid grid-cols-1 ${colClass} gap-6 md:gap-8`}>
            {products.map((product, idx) => (
              <a
                key={idx}
                href={product.url || '#'}
                className="group flex flex-col items-center text-center bg-white rounded-2xl p-4 transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                <div 
                  className="w-full aspect-square overflow-hidden bg-gray-50 mb-4"
                  style={{ borderRadius: imageBorderRadius }}
                >
                  <img
                    src={product.imageUrl}
                    alt={product.name || `Sản phẩm ${idx + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <h3 className="font-bold text-gray-800 text-base md:text-lg group-hover:text-[#f4851a] transition-colors">
                  {product.name}
                </h3>
                {product.price && (
                  <span className="mt-1 text-[#f4851a] font-bold">{product.price}</span>
                )}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminProductGrid;
