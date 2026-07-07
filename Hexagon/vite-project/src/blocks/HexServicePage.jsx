import React from 'react';

const HexServicePage = ({
  title = 'Giải pháp công nghệ',
  description = 'Phát triển và triển khai các giải pháp phần mềm tùy chỉnh...',
  image = 'https://beta-api.hexagon.xyz/uploads/dv-3-1782723514885-362139381.jpg',
  ctaText = 'Liên hệ tư vấn',
  ctaUrl = '/#lien-he',
  solutionsTitle = 'Giải pháp nổi bật',
  solutionsItems = [
    { title: 'Phát triển phần mềm theo yêu cầu', content: 'Thiết kế và xây dựng phần mềm...' },
    { title: 'Giải pháp chuyển đổi số doanh nghiệp', content: 'Tích hợp công nghệ vào toàn bộ hoạt động...' },
    { title: 'Xây dựng hệ thống nền tảng & tích hợp', content: 'Phát triển hệ thống trung tâm...' }
  ],
  processTitle = 'Quy trình thực hiện',
  processDescription = 'Quy trình chuyên nghiệp, minh bạch và hiệu quả.',
  processItems = [
    { title: 'Khảo sát & phân tích yêu cầu', content: '' },
    { title: 'Thiết kế giải pháp & kiến trúc hệ thống', content: '' },
    { title: 'Phát triển & Thử nghiệm', content: '' },
    { title: 'Triển khai & Bảo trì', content: '' }
  ],
  readyTitle = 'Sẵn sàng triển khai?',
  readyDescription = 'Đừng để công nghệ làm rào cản. Hãy biến nó thành lợi thế cạnh tranh của bạn cùng Hexagon.',
  readyCta1 = 'Về trang chủ',
  readyCta1Url = '/#trang-chu',
  readyCta2 = 'Liên hệ ngay',
  readyCta2Url = '/#lien-he',
  lang = 'vi'
}) => {
  return (
    <div className="antialiased text-base bg-[#F8FAFC] min-h-screen">
      <main className="pt-28 md:pt-32">
        <div className="container mx-auto px-6 py-6">
          {/* Breadcrumb */}
          <section className="text-left mb-10 text-base">
            <nav className="text-sm mb-2 text-gray-400">
              <a href={lang === 'en' ? '/en/trang-chu' : '/'} className="hover:text-amber-500">
                {lang === 'en' ? 'Home' : 'Trang chủ'}
              </a>{' '}
              &gt;{' '}
              <a href={lang === 'en' ? '/en/trang-chu#dich-vu' : '/#dich-vu'} className="hover:text-amber-500">
                {lang === 'en' ? 'Services' : 'Dịch vụ'}
              </a>{' '}
              &gt;{' '}
              <span className="text-gray-700">{title}</span>
            </nav>
          </section>

          {/* Hero Section */}
          <section className="grid md:grid-cols-2 gap-12 items-center mb-20 lg:mb-32">
            <div className="text-left">
              <h1 className="text-4xl lg:text-5xl font-bold text-amber-500 mb-6 leading-tight">
                {title}
              </h1>
              <p className="max-w-xl text-lg text-gray-700 mb-10 leading-relaxed">
                {description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={ctaUrl}
                  className="px-8 py-3.5 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-lg transition-all shadow-lg shadow-amber-500/20 text-center"
                >
                  {ctaText}
                </a>
              </div>
            </div>
            <div className="relative max-w-[600px] mx-auto w-full">
              <div className="rounded-lg overflow-hidden shadow-2xl transition-transform hover:scale-[1.01] duration-500 aspect-[16/9]">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </section>

          {/* Solutions Section */}
          {solutionsItems && solutionsItems.length > 0 && (
            <section className="mb-20 lg:mb-32">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  {solutionsTitle}
                </h2>
                <div className="w-16 h-1 bg-amber-500 mx-auto rounded-full"></div>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                {solutionsItems.map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-white border border-gray-200 shadow-sm rounded-xl p-8 transition-all hover:shadow-md hover:border-amber-500/40 group text-left"
                  >
                    <div className="w-10 h-10 bg-green-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-green-500/20 transition-colors">
                      <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-4">
                      {item.title}
                    </h4>
                    {item.content && (
                      <p className="text-gray-700 text-base leading-relaxed">
                        {item.content}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Process Section */}
          {processItems && processItems.length > 0 && (
            <section className="mb-20 lg:mb-32">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  {processTitle}
                </h2>
                {processDescription && (
                  <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
                    {processDescription}
                  </p>
                )}
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                {processItems.map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm transition-all hover:shadow-md"
                  >
                    <div className="text-3xl font-bold text-amber-500 mb-4">
                      {String(idx + 1).padStart(2, '0')}
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2">
                      {item.title}
                    </h4>
                    {item.content && (
                      <p className="text-base text-gray-700 leading-relaxed">
                        {item.content}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Ready Banner Section */}
          <section className="bg-[#0D5939] bg-[linear-gradient(to_right,rgba(31,41,55,0.3),rgba(31,41,55,0.3))] rounded-2xl p-8 md:p-16 text-center border border-white/10 backdrop-blur-sm">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {readyTitle}
            </h2>
            <p className="text-white/80 mb-10 max-w-2xl mx-auto text-lg leading-relaxed">
              {readyDescription}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href={readyCta1Url}
                className="px-10 py-3.5 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold rounded-lg transition-all text-center"
              >
                {readyCta1}
              </a>
              <a
                href={readyCta2Url}
                className="px-10 py-3.5 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-lg transition-all shadow-lg shadow-amber-500/20 text-center"
              >
                {readyCta2}
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default HexServicePage;
