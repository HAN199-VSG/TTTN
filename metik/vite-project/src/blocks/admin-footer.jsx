import React from 'react';

// Footer — chân trang theo đúng demo METIK: nền vàng, 2 cột, info liên hệ bên phải.
const AdminFooter = ({
  logoUrl,
  description,
  menuItems = [],
  socialLinks = [],
  phone,
  email,
  address,
  copyrightText,
}) => {
  return (
    <footer className="w-full" style={{ backgroundColor: '#f5c400' }}>
      {/* Nội dung chính */}
      <div className="max-w-[1250px] mx-auto px-8 py-10 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Cột trái: Logo + mô tả */}
        <div>
          {logoUrl && (
            <img
              src={logoUrl}
              alt="METIK Logo"
              className="h-20 object-contain mb-4"
            />
          )}
          {description && (
            <p className="text-sm leading-relaxed text-gray-800 max-w-sm">
              {description}
            </p>
          )}
        </div>

        {/* Cột phải: Thông tin liên hệ */}
        <div>
          <h4
            className="font-bold uppercase mb-5 tracking-wide text-base"
            style={{ color: '#2a6b2a' }}
          >
            THÔNG TIN LIÊN HỆ
          </h4>
          <ul className="space-y-4 text-sm text-gray-800">
            {phone && (
              <li className="flex items-center gap-3">
                {/* Phone icon */}
                <svg
                  className="w-5 h-5 flex-shrink-0"
                  style={{ color: '#2a6b2a' }}
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.61 21 3 13.39 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1.01l-2.2 2.21z" />
                </svg>
                <a
                  href={`tel:${phone.replace(/\s/g, '')}`}
                  className="hover:underline"
                  style={{ color: '#222' }}
                >
                  {phone}
                </a>
              </li>
            )}
            {email && (
              <li className="flex items-center gap-3">
                {/* Email icon */}
                <svg
                  className="w-5 h-5 flex-shrink-0"
                  style={{ color: '#2a6b2a' }}
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
                <a
                  href={`mailto:${email}`}
                  className="hover:underline"
                  style={{ color: '#222' }}
                >
                  {email}
                </a>
              </li>
            )}
            {address && (
              <li className="flex items-start gap-3">
                {/* Location icon */}
                <svg
                  className="w-5 h-5 flex-shrink-0 mt-0.5"
                  style={{ color: '#2a6b2a' }}
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 119.5 9 2.5 2.5 0 0112 11.5z" />
                </svg>
                <span style={{ color: '#222' }}>{address}</span>
              </li>
            )}
          </ul>
        </div>
      </div>

      {/* Thanh copyright */}
      <div
        className="py-3 text-center text-xs"
        style={{ backgroundColor: '#e6a800', color: '#5a3a00' }}
      >
        {copyrightText || 'Copyright 2026 © METIK. All rights reserved'}
      </div>
    </footer>
  );
};

export default AdminFooter;
