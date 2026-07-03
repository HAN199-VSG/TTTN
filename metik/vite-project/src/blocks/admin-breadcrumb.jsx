import React from 'react';

// Breadcrumb — đường dẫn điều hướng, ví dụ: "Trang chủ / Sản phẩm".
const AdminBreadcrumb = ({ items = [] }) => {
  if (!items || items.length === 0) return null;

  return (
    <nav className="w-full py-4 text-sm text-gray-500" aria-label="breadcrumb">
      <ol className="flex items-center flex-wrap gap-1">
        {items.map((item, idx) => {
          const isLast = idx === items.length - 1;
          return (
            <li key={idx} className="flex items-center gap-1">
              {isLast || !item.url ? (
                <span className="text-gray-700 font-semibold">{item.label}</span>
              ) : (
                <a href={item.url} className="hover:text-[#f4851a] transition-colors">
                  {item.label}
                </a>
              )}
              {!isLast && <span className="text-gray-400 mx-1">/</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default AdminBreadcrumb;
