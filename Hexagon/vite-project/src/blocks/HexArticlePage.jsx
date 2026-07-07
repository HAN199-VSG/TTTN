import React, { useState } from 'react';

// ─── Services mini-slider data ────────────────────────────────────────────────
const SERVICES_VI = [
  {
    title: 'Giải pháp Công nghệ',
    description:
      'Tư vấn và triển khai các giải pháp phần mềm theo yêu cầu, hệ thống ERP, CRM và chuyển đổi số toàn diện cho doanh nghiệp...',
    imageUrl: 'https://beta-api.hexagon.xyz/uploads/dv-3-1782723514885-362139381.jpg',
    learnMore: '/giai-phap-cong-nghe',
    ctaLabel: 'Tìm hiểu thêm',
  },
  {
    title: 'Cung cấp Thiết bị Công nghệ',
    description:
      'Cung cấp máy tính, laptop, máy chủ và các thiết bị CNTT chính hãng với chế độ bảo hành uy tín, hỗ trợ kỹ thuật tận nơi...',
    imageUrl: 'https://beta-api.hexagon.xyz/uploads/dv-4-1782723514901-308215051.jpg',
    learnMore: '/cung-cap-thiet-bi-cong-nghe',
    ctaLabel: 'Tìm hiểu thêm',
  },
  {
    title: 'Lắp đặt Hệ thống',
    description:
      'Thiết kế và lắp đặt hệ thống camera giám sát, mạng WiFi doanh nghiệp, đảm bảo an ninh, kết nối ổn định và khả năng mở rộng...',
    imageUrl: 'https://beta-api.hexagon.xyz/uploads/dv-2-1782723514900-716634177.jpg',
    learnMore: '/lap-dat-he-thong',
    ctaLabel: 'Tìm hiểu thêm',
  },
  {
    title: 'Dịch vụ Công nghệ Thông tin',
    description:
      'Tư vấn và cài đặt phần mềm, bảo trì hệ thống CNTT, đảm bảo hệ thống hoạt động ổn định và bảo mật cho doanh nghiệp...',
    imageUrl: 'https://beta-api.hexagon.xyz/uploads/dv-1-1782723514912-477828992.jpg',
    learnMore: '/dich-vu-cong-nghe-thong-tin',
    ctaLabel: 'Tìm hiểu thêm',
  },
];

const SERVICES_EN = [
  {
    title: 'Technology Solutions',
    description:
      'Consulting and deploying custom software solutions, ERP, CRM systems and comprehensive digital transformation for businesses...',
    imageUrl: 'https://beta-api.hexagon.xyz/uploads/dv-3-1782723514885-362139381.jpg',
    learnMore: '/en/giai-phap-cong-nghe',
    ctaLabel: 'Learn more',
  },
  {
    title: 'IT Equipment Supply',
    description:
      'Supplying computers, laptops, servers and genuine IT devices with reputable warranty and on-site technical support...',
    imageUrl: 'https://beta-api.hexagon.xyz/uploads/dv-4-1782723514901-308215051.jpg',
    learnMore: '/en/cung-cap-thiet-bi-cong-nghe',
    ctaLabel: 'Learn more',
  },
  {
    title: 'System Installation',
    description:
      'Design and install security camera surveillance systems, enterprise WiFi, ensuring security, stable connectivity and scalability...',
    imageUrl: 'https://beta-api.hexagon.xyz/uploads/dv-2-1782723514900-716634177.jpg',
    learnMore: '/en/lap-dat-he-thong',
    ctaLabel: 'Learn more',
  },
  {
    title: 'Information Technology Services',
    description:
      'Software consulting and installation, IT system maintenance, ensuring stable and secure system operation for businesses...',
    imageUrl: 'https://beta-api.hexagon.xyz/uploads/dv-1-1782723514912-477828992.jpg',
    learnMore: '/en/dich-vu-cong-nghe-thong-tin',
    ctaLabel: 'Learn more',
  },
];

// ─── Service Mini Slider Component ───────────────────────────────────────────
const ServiceMiniSlider = ({ lang }) => {
  const services = lang === 'en' ? SERVICES_EN : SERVICES_VI;
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + services.length) % services.length);
  const next = () => setCurrent((c) => (c + 1) % services.length);

  React.useEffect(() => {
    const timer = setInterval(() => {
      next();
    }, 4000);
    return () => clearInterval(timer);
  }, [services.length]);

  const service = services[current];
  const heading = lang === 'en' ? 'OUR SERVICES' : 'DỊCH VỤ CỦA CHÚNG TÔI';
  const allServicesLabel = lang === 'en' ? 'View all services' : 'Xem tất cả dịch vụ';
  const allServicesUrl = lang === 'en' ? '/en/trang-chu#dich-vu' : '/#dich-vu';

  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
      {/* Header */}
      <div className="bg-[#1A6B49] px-4 py-3 flex items-center justify-between">
        <h3 className="text-white text-xs font-bold tracking-wider uppercase">{heading}</h3>
        {/* Arrows */}
        <div className="flex items-center gap-1">
          <button
            onClick={prev}
            className="w-6 h-6 rounded-full bg-white/20 hover:bg-white/40 flex items-center justify-center transition"
          >
            <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={next}
            className="w-6 h-6 rounded-full bg-white/20 hover:bg-white/40 flex items-center justify-center transition"
          >
            <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Image */}
      <div className="aspect-[16/9] overflow-hidden bg-gray-100">
        <img
          src={service.imageUrl}
          alt={service.title}
          className="w-full h-full object-cover transition-all duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-4">
        <h4 className="font-bold text-gray-900 text-sm mb-2 leading-snug">{service.title}</h4>
        <p className="text-gray-500 text-xs leading-relaxed line-clamp-3 mb-3">{service.description}</p>
        <a
          href={service.learnMore}
          className="inline-flex items-center gap-1 text-xs font-semibold text-[#1A6B49] hover:text-yellow-600 transition-colors"
        >
          {service.ctaLabel}
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>

      {/* Dots */}
      <div className="flex items-center justify-center gap-1.5 pb-3">
        {services.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`rounded-full transition-all ${
              idx === current ? 'w-4 h-1.5 bg-[#1A6B49]' : 'w-1.5 h-1.5 bg-gray-300'
            }`}
          />
        ))}
      </div>

      {/* Footer link */}
      <div className="border-t border-gray-100 px-4 py-2.5">
        <a
          href={allServicesUrl}
          className="text-xs text-[#1A6B49] font-semibold hover:text-yellow-600 transition-colors flex items-center gap-1"
        >
          {allServicesLabel}
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </div>
  );
};

// ─── Main Article Page Component ──────────────────────────────────────────────
const HexArticlePage = ({
  title = 'Tiêu đề bài viết',
  date = '26 tháng 6, 2026',
  category = 'Hoạt động',
  coverImage = '',
  contentHtml = '<p>Nội dung bài viết...</p>',
  lang = 'vi',
  relatedTitle = 'Bài viết liên quan',
  relatedItems = [],
}) => {
  const backLabel = lang === 'en' ? 'Back to list' : 'Quay lại danh sách';
  const homeLabel = lang === 'en' ? 'Home' : 'Trang chủ';
  const blogLabel = lang === 'en' ? 'Articles' : 'Bài viết';

  return (
    <div className="antialiased text-base bg-[#F8FAFC] min-h-screen">
      <main className="pt-28 md:pt-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-400 mb-6 flex items-center gap-1.5 flex-wrap text-left">
            <a href={lang === 'en' ? '/en/trang-chu' : '/'} className="hover:text-yellow-500 transition-colors">
              {homeLabel}
            </a>
            <span>›</span>
            <a href={lang === 'en' ? '/en/trang-chu#tin-tuc' : '/#tin-tuc'} className="hover:text-yellow-500 transition-colors">
              {blogLabel}
            </a>
            <span>›</span>
            <span className="hover:text-yellow-500 transition-colors capitalize">{category}</span>
            <span>›</span>
            <span className="text-gray-600 line-clamp-1 max-w-xs">{title}</span>
          </nav>

          <div className="flex flex-col lg:flex-row gap-8 items-start">
            {/* Main Article Content */}
            <div className="flex-1 min-w-0 w-full">
              <article className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100 text-left">
                <div className="px-6 sm:px-10 pt-8 pb-6 border-b border-gray-100">
                  <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-4">
                    {title}
                  </h1>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
                    <span className="flex items-center gap-1.5">
                      <svg className="w-4 h-4 text-yellow-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <svg className="w-4 h-4 text-yellow-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {lang === 'en' ? '01:25' : '01:25'}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <svg className="w-4 h-4 text-yellow-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                      </svg>
                      {lang === 'en' ? 'English' : 'Tiếng Việt'}
                    </span>
                  </div>
                </div>

                {/* Cover image */}
                {coverImage && (
                  <div className="overflow-hidden">
                    <img
                      src={coverImage}
                      alt={title}
                      className="w-full object-cover max-h-[480px]"
                    />
                  </div>
                )}

                <div className="px-6 sm:px-10 py-10">
                  <div
                    className="prose prose-lg max-w-none article-content
                      prose-headings:text-gray-900 prose-headings:font-bold
                      prose-h2:text-2xl prose-h3:text-xl
                      prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6
                      prose-a:text-yellow-600 prose-a:no-underline hover:prose-a:underline
                      prose-strong:text-gray-900
                      prose-ul:text-gray-700 prose-ol:text-gray-700 prose-ul:list-disc prose-ul:pl-6
                      prose-li:my-1
                      prose-img:rounded-xl prose-img:shadow-md prose-img:mx-auto prose-img:my-6
                      prose-blockquote:border-l-yellow-400 prose-blockquote:text-gray-600"
                    dangerouslySetInnerHTML={{ __html: contentHtml }}
                  />
                </div>
              </article>
            </div>

            {/* Sidebar */}
            <aside className="w-full lg:w-72 xl:w-80 flex-shrink-0 lg:sticky lg:top-24 self-start text-left space-y-4">
              {/* Back link */}
              <a
                href={lang === 'en' ? '/en/trang-chu#tin-tuc' : '/#tin-tuc'}
                className="inline-flex items-center gap-2 text-yellow-600 font-semibold hover:gap-3 transition-all text-sm"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                {backLabel}
              </a>

              {/* Services slider */}
              <ServiceMiniSlider lang={lang} />
            </aside>
          </div>

          {/* Related Articles */}
          {relatedItems && relatedItems.length > 0 && (
            <section className="mt-12 pt-8 border-t border-gray-200 text-left">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <span className="w-1 h-7 bg-yellow-400 rounded-full inline-block flex-shrink-0" />
                {relatedTitle}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {relatedItems.map((item, idx) => (
                  <a
                    key={idx}
                    href={item.url || '#'}
                    className="group bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-md hover:border-yellow-300 transition-all block"
                  >
                    <div className="aspect-[16/9] overflow-hidden bg-gray-100">
                      <img
                        src={item.imageUrl}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4">
                      <h4 className="text-sm font-semibold text-gray-800 line-clamp-2 group-hover:text-yellow-600 transition-colors leading-snug">
                        {item.title}
                      </h4>
                      <p className="text-xs text-gray-400 mt-1.5">{item.date}</p>
                    </div>
                  </a>
                ))}
              </div>
            </section>
          )}
        </div>
      </main>
    </div>
  );
};

export default HexArticlePage;
