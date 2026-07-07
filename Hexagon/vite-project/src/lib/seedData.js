// Dữ liệu mẫu cho trang Hexagon (trang chủ VI + EN)
const LOGO_URL = 'https://beta.hexagon.xyz/assets/images/logo-hhc.png';
const HERO_IMG = 'https://beta.hexagon.xyz/assets/images/logo-hhc.png';

const homepageVI = {
  content: [
    {
      type: 'HexNavbar',
      props: {
        id: 'navbar-vi',
        logoUrl: LOGO_URL,
        logoText: 'HEXAGON',
        menuItems: [
          { label: 'Trang chủ', url: '/#trang-chu' },
          { label: 'Giới thiệu', url: '/#gioi-thieu' },
          { label: 'Dịch vụ', url: '/#dich-vu' },
          { label: 'Tin tức', url: '/#tin-tuc' },
          { label: 'Liên hệ', url: '/#lien-he' },
        ],
        showLangSwitcher: true,
        background: { type: 'color', color: '#1A6B49' },
        textColor: '#ffffff',
      },
    },
    {
      type: 'HexHero',
      props: {
        id: 'hero-vi',
        tagline: 'Công nghệ tương lai',
        title: 'HEXAGON Solutions',
        subtitle:
          'Hexagon kiến tạo các giải pháp chuyển đổi số toàn diện, từ phần mềm, AI đến an ninh mạng, giúp doanh nghiệp bứt phá trong kỷ nguyên số.',
        typewriterItems: [
          { text: 'Giải pháp công nghệ' },
          { text: 'Giải pháp thi công & lắp đặt' },
          { text: 'Cung cấp thiết bị CNTT' },
          { text: 'Dịch vụ Công nghệ thông tin' },
        ],
        buttons: [
          { text: 'Khám phá Dịch vụ', url: '#dich-vu', style: 'primary' },
          { text: 'Liên hệ Tư vấn', url: '#lien-he', style: 'secondary' },
        ],
        imageUrl: '/globalmyc.webp',
        scrollLabel: 'Cuộn xuống để khám phá',
        scrollUrl: '#gioi-thieu',
        background: { type: 'gradient', from: '#135237', to: '#41b67d', direction: 'to bottom right' },
        animate: true,
      },
    },
    {
      type: 'HexAbout',
      props: {
        id: 'about-vi',
        title: 'Về Hexagon',
        description:
          'Hexagon Corporation – Công nghệ tiên phong, nơi chúng tôi không ngừng kiến tạo và đổi mới để mang đến những giá trị vượt trội trong kỷ nguyên số. Với tầm nhìn đa chiều và khát vọng vươn tầm, Hexagon tự hào là đối tác tin cậy, đồng hành cùng bạn trên hành trình chinh phục những đỉnh cao công nghệ.',
        imageUrl: 'https://beta.hexagon.xyz/assets/images/VPX16.jpg',
        quoteText: '"Làm ngày, làm đêm, làm thêm ngày nghỉ ^_^"',
        quoteAuthor: 'Hexagon Culture',
        cards: [
          { title: 'Sứ mệnh', content: 'Kiến tạo tương lai số bằng các giải pháp tiên tiến.' },
          { title: 'Tầm nhìn', content: 'Trở thành biểu tượng về hệ sinh thái công nghệ đổi mới.' },
          { title: 'Giá trị cốt lõi', content: 'Đổi mới - Đồng hành - Tiên phong - Minh bạch.' },
          { title: 'Nền tảng', content: 'Hệ sinh thái đa ngành, vững chắc và linh hoạt.' },
        ],
        accentColor: '#1D6A49',
        sectionId: 'gioi-thieu',
        background: { type: 'color', color: '#ffffff' },
      },
    },
    {
      type: 'HexServices',
      props: {
        id: 'services-vi',
        title: 'Lĩnh vực hoạt động',
        subtitle: 'Tại Hexagon, chúng tôi tập trung phát triển hệ sinh thái công nghệ toàn diện, bao gồm:',
        items: [
          {
            name: 'Giải pháp công nghệ',
            description: 'Phát triển và triển khai các giải pháp phần mềm tùy chỉnh, tối ưu vận hành doanh nghiệp, nâng cao hiệu suất, đáp ứng linh hoạt theo nhu cầu và định hướng phát triển dài hạn.',
            imageUrl: 'https://beta-api.hexagon.xyz/uploads/dv-3-1782723514885-362139381.jpg',
            url: '/giai-phap-cong-nghe',
          },
          {
            name: 'Giải pháp thi công & lắp đặt',
            description: 'Tư vấn chiến lược chuyển đổi số toàn diện, giúp doanh nghiệp tối ưu quy trình, nâng cao trải nghiệm khách hàng và tăng trưởng bền vững trong môi trường số hóa.',
            imageUrl: 'https://beta-api.hexagon.xyz/uploads/dv-4-1782723514901-308215051.jpg',
            url: '/giai-phap-thi-cong-lap-dat',
          },
          {
            name: 'Cung cấp thiết bị CNTT',
            description: 'Cung cấp giải pháp trí tuệ nhân tạo và phân tích dữ liệu, hỗ trợ ra quyết định thông minh, tự động hóa quy trình và khai thác tối đa giá trị từ dữ liệu doanh nghiệp.',
            imageUrl: 'https://beta-api.hexagon.xyz/uploads/dv-2-1782723514900-716634177.jpg',
            url: '/cung-cap-thiet-bi-cntt',
          },
          {
            name: 'Dịch vụ Công nghệ thông tin',
            description: 'Thi công và lắp đặt hệ thống camera giám sát, mạng wifi chuyên nghiệp, đảm bảo an ninh, ổn định kết nối và phù hợp với mọi quy mô doanh nghiệp.',
            imageUrl: 'https://beta-api.hexagon.xyz/uploads/dv-1-1782723514912-477828992.jpg',
            url: '/dich-vu-cong-nghe-thong-tin',
          },
        ],
        accentColor: '#1A6B49',
        sectionId: 'dich-vu',
        background: { type: 'color', color: '#f8fafc' },
        animate: true,
      },
    },

    {
      type: 'HexNews',
      props: {
        id: 'news-vi',
        title: 'Tin tức',
        subtitle: 'Cập nhật tin tức, sự kiện và thông tin mới nhất từ Hexagon Corporation.',
        readMoreLabel: 'Xem chi tiết',
        viewAllLabel: 'Xem tất cả bài viết',
        viewAllUrl: '/vi/bai-viet',
        items: [
          {
            imageUrl: 'https://beta-api.hexagon.xyz/uploads/teambuilding-01-1774341835079-253071961.jpg',
            title: 'Không khí tưng bừng tại Chương trình Teambuilding myH25 tại Ngôi nhà Hùng Hậu',
            excerpt: 'Cùng nhìn lại những khoảnh khắc đáng nhớ và đẹp nhất của đại gia đình HHC trong chương trình TEAMBUILDING MYH25, diễn ra tại khu nghỉ dưỡng Vinpearl Nha Trang.',
            date: '26 thg 6, 2026',
            url: '/hoat-dong/khong-khi-tung-bung-tai-chuong-trinh-teambuilding-myh25-tai-ngoi-nha-hung-hau',
          },
          {
            imageUrl: 'https://beta-api.hexagon.xyz/uploads/myc-dong-hanh-1-1774341526337-531129418.jpg',
            title: 'Đồng hành cùng sinh viên Đại học Văn Hiến tại Ngày hội sinh viên',
            excerpt: 'Công ty Cổ phần Lục Giác hân hạnh được đồng hành cùng các bạn sinh viên khoa Công nghệ Thông tin - Đại học Văn Hiến trong chương trình “VHE Startup Devote’’.',
            date: '26 thg 6, 2026',
            url: '/hoat-dong/dong-hanh-cung-sinh-vien-dai-hoc-van-hien-tai-ngay-hoi-sinh-vien',
          },
          {
            imageUrl: 'https://beta-api.hexagon.xyz/uploads/sam-tet-cong-nghe-1774343703442-177870451.jpg',
            title: 'Sắm tết công nghệ - Nâng cấp thiết bị, khởi đầu bứt phá',
            excerpt: 'Năm mới, vận hội mới, thiết bị cũng phải mới! Đầu tư cho công nghệ là đầu tư cho tương lai. Ghé ‘Lục Giác’ để chọn cho mình những siêu phẩm hỗ trợ đắc lực cho công việc và giải trí:',
            date: '26 thg 6, 2026',
            url: '/su-kien/sam-tet-cong-nghe-nang-cap-thiet-bi-khoi-dau-but-pha',
          },
          {
            imageUrl: 'https://beta-api.hexagon.xyz/uploads/phattrienphanmem-1773133089066-706455049.png',
            title: 'Bài viết 4',
            excerpt: 'Bài viết 4',
            date: '25 thg 6, 2026',
            url: '/tin-tuc/bai-viet-4',
          },
          {
            imageUrl: 'https://beta-api.hexagon.xyz/uploads/ai-phan-tich-du-lieu-1773291405655-118730188-1774254824600-959205718.jpg',
            title: 'Bài viết 5',
            excerpt: 'Bài viết 5',
            date: '25 thg 6, 2026',
            url: '/tin-tuc/bai-viet-5',
          },
        ],
        sectionId: 'tin-tuc',
        background: { type: 'color', color: '#ffffff' },
        animate: true,
      },
    },
    {
      type: 'HexPartners',
      props: {
        id: 'partners-vi',
        title: 'Các đối tác liên kết',
        logos: [
          { imageUrl: 'https://webdemo.hexagon.xyz/medias/Logo Khoi E.png', alt: 'Khối E' },
          { imageUrl: 'https://webdemo.hexagon.xyz/medias/Logo Khoi C.png', alt: 'Khối C' },
          { imageUrl: 'https://webdemo.hexagon.xyz/medias/Logo Khoi D.png', alt: 'Khối D' },
          { imageUrl: 'https://webdemo.hexagon.xyz/medias/Happy Food.png', alt: 'Happy Food' },
          { isSvg: true, svgType: 'ecobook', alt: 'ECOBOOK' },
          { isSvg: true, svgType: 'comoon', alt: 'COMOON' },
          { imageUrl: 'https://webdemo.hexagon.xyz/medias/B.png', alt: 'Binh Minh' },
          { imageUrl: 'https://webdemo.hexagon.xyz/medias/Logo Khoi F.png', alt: 'Khối F' },
        ],
        background: { type: 'gradient', from: '#0f826b', to: '#86efac', direction: 'to bottom' },
        animate: true,
      },
    },
    {
      type: 'HexContact',
      props: {
        id: 'contact-vi',
        title: 'Liên hệ với chúng tôi',
        description: 'Sẵn sàng cho dự án tiếp theo? Đội ngũ chuyên gia của Hexagon luôn ở đây để lắng nghe và đưa ra giải pháp tốt nhất cho bạn.',
        address: '615 Âu Cơ, Phường Tân Phú, TP. Hồ Chí Minh',
        email: 'contact@hexagon.xyz',
        phone: '096 446 0333',
        socialLinks: [
          { platform: 'Facebook', url: '#' },
          { platform: 'LinkedIn', url: '#' },
          { platform: 'YouTube', url: '#' },
          { platform: 'Zalo', url: '#' },
        ],
        mapEmbed: 'https://maps.google.com/maps?width=600&height=400&hl=vi&q=615+%C3%82u+C%C6%A1+T%C3%A2n+Ph%C3%BA&t=p&z=14&ie=UTF8&iwloc=B&output=embed',
        sectionId: 'lien-he',
        background: { type: 'color', color: '#f8fafc' },
      },
    },
    {
      type: 'HexFooter',
      props: {
        id: 'footer-vi',
        companyName: 'Hexagon Corporation',
        tagline: 'Hệ sinh thái Công nghệ Hexagon',
        copyright: 'Copyright 2026 ©',
        links: [],
        socialLinks: [
          { platform: 'Facebook', icon: 'facebook', url: '#' },
          { platform: 'LinkedIn', icon: 'linkedin', url: '#' },
          { platform: 'YouTube', icon: 'youtube', url: '#' },
        ],
        textColor: '#9ca3af',
        background: { type: 'color', color: '#0D5939' },
      },
    },
  ],
  root: { props: {} },
};

const homepageEN = {
  content: [
    {
      type: 'HexNavbar',
      props: {
        id: 'navbar-en',
        logoUrl: LOGO_URL,
        logoText: 'HEXAGON',
        menuItems: [
          { label: 'Home', url: '/en/trang-chu#trang-chu' },
          { label: 'About', url: '/en/trang-chu#gioi-thieu' },
          { label: 'Services', url: '/en/trang-chu#dich-vu' },
          { label: 'News', url: '/en/trang-chu#tin-tuc' },
          { label: 'Contact', url: '/en/trang-chu#lien-he' },
        ],
        showLangSwitcher: true,
        background: { type: 'color', color: '#1A6B49' },
        textColor: '#ffffff',
      },
    },
    {
      type: 'HexHero',
      props: {
        id: 'hero-en',
        tagline: 'Technology of the Future',
        title: 'HEXAGON Solutions',
        subtitle:
          'Hexagon builds comprehensive digital transformation solutions — from software and AI to cybersecurity — helping businesses thrive in the digital era.',
        typewriterItems: [
          { text: 'Technology Solutions' },
          { text: 'Construction & Installation Solutions' },
          { text: 'Providing IT Equipment' },
          { text: 'Information Technology Services' },
        ],
        buttons: [
          { text: 'Explore Services', url: '#dich-vu', style: 'primary' },
          { text: 'Contact Us', url: '#lien-he', style: 'secondary' },
        ],
        imageUrl: '/globalmyc.webp',
        scrollLabel: 'Scroll down to explore',
        scrollUrl: '#gioi-thieu',
        background: { type: 'gradient', from: '#135237', to: '#41b67d', direction: 'to bottom right' },
        animate: true,
      },
    },
    {
      type: 'HexAbout',
      props: {
        id: 'about-en',
        title: 'About Hexagon',
        description:
          'Hexagon Corporation – A pioneering technology company dedicated to creating and innovating to deliver outstanding values in the digital age. With a multidimensional vision and an ambition to reach new heights, Hexagon is proud to be a trusted partner on your journey to conquer technology frontiers.',
        imageUrl: 'https://beta.hexagon.xyz/assets/images/VPX16.jpg',
        quoteText: '"Work all day, work all night, work on weekends too ^_^"',
        quoteAuthor: 'Hexagon Culture',
        cards: [
          { title: 'Mission', content: 'Building the digital future through advanced solutions.' },
          { title: 'Vision', content: 'Becoming an icon of an innovative technology ecosystem.' },
          { title: 'Core Values', content: 'Innovation - Partnership - Pioneer - Transparency.' },
          { title: 'Foundation', content: 'A multi-sector ecosystem, robust and flexible.' },
        ],
        accentColor: '#1D6A49',
        sectionId: 'gioi-thieu',
        background: { type: 'color', color: '#ffffff' },
      },
    },
    {
      type: 'HexServices',
      props: {
        id: 'services-en',
        title: 'Our Services',
        subtitle: 'At Hexagon, we focus on developing a comprehensive technology ecosystem, including:',
        items: [
          {
            name: 'Technology Solutions',
            description: 'Develop and deliver customized software solutions to optimize business operations, enhance efficiency, and flexibly adapt to specific requirements and long-term growth strategies.',
            imageUrl: 'https://beta-api.hexagon.xyz/uploads/dv-3-1782723514885-362139381.jpg',
            url: '/en/giai-phap-cong-nghe',
          },
          {
            name: 'Construction & Installation Solutions',
            description: 'Comprehensive digital transformation consulting, helping businesses optimize processes, enhance customer experience and achieve sustainable growth in the digital environment.',
            imageUrl: 'https://beta-api.hexagon.xyz/uploads/dv-4-1782723514901-308215051.jpg',
            url: '/en/giai-phap-thi-cong-lap-dat',
          },
          {
            name: 'Providing IT Equipment',
            description: 'Offer AI and data analytics solutions to enable intelligent decision-making, automate processes, and unlock the full value of enterprise data assets.',
            imageUrl: 'https://beta-api.hexagon.xyz/uploads/dv-2-1782723514900-716634177.jpg',
            url: '/en/cung-cap-thiet-bi-cntt',
          },
          {
            name: 'Information Technology Services',
            description: 'Design and install professional camera surveillance and WiFi systems, ensuring security, stable connectivity, and scalability for businesses of all sizes.',
            imageUrl: 'https://beta-api.hexagon.xyz/uploads/dv-1-1782723514912-477828992.jpg',
            url: '/en/dich-vu-cong-nghe-thong-tin',
          },
        ],
        accentColor: '#1A6B49',
        sectionId: 'dich-vu',
        background: { type: 'color', color: '#f8fafc' },
        animate: true,
      },
    },

    {
      type: 'HexNews',
      props: {
        id: 'news-en',
        title: 'News',
        subtitle: 'Stay updated with the latest news, events, and announcements from Hexagon Corporation.',
        readMoreLabel: 'Read more',
        viewAllLabel: 'View all articles',
        viewAllUrl: '/en/news',
        items: [
          {
            imageUrl: 'https://beta-api.hexagon.xyz/uploads/teambuilding-01-1774341835079-253071961.jpg',
            title: 'A lively atmosphere at the myH25 Teambuilding Program at Hung Hau House.',
            excerpt: "Let's look back at the most beautiful and memorable moments of the HHC family during the MYH25 TEAMBUILDING, held at the Vinpearl Nha Trang resort.",
            date: 'Jun 26, 2026',
            url: '/en/hoat-dong/khong-khi-tung-bung-tai-chuong-trinh-teambuilding-myh25-tai-ngoi-nha-hung-hau',
          },
          {
            imageUrl: 'https://beta-api.hexagon.xyz/uploads/myc-dong-hanh-1-1774341526337-531129418.jpg',
            title: 'Accompanying Van Hien Univerity Students at the student festival',
            excerpt: 'Hexagon JSC. is honored to accompany the IT students at Van Hien University in the “VHE Startup Devote” competition.',
            date: 'Jun 26, 2026',
            url: '/en/hoat-dong/dong-hanh-cung-sinh-vien-dai-hoc-van-hien-tai-ngay-hoi-sinh-vien',
          },
          {
            imageUrl: 'https://beta-api.hexagon.xyz/uploads/sam-tet-cong-nghe-1774343703442-177870451.jpg',
            title: 'Upgrade your tech - Empower your new year breakthrough',
            excerpt: 'New Year, New Success, New Gear! Investing in technology is investing in your future.',
            date: 'Jun 26, 2026',
            url: '/en/su-kien/sam-tet-cong-nghe-nang-cap-thiet-bi-khoi-dau-but-pha',
          },
          {
            imageUrl: 'https://beta-api.hexagon.xyz/uploads/phattrienphanmem-1773133089066-706455049.png',
            title: '4',
            excerpt: '4',
            date: 'Jun 25, 2026',
            url: '/en/tin-tuc/bai-viet-4',
          },
          {
            imageUrl: 'https://beta-api.hexagon.xyz/uploads/ai-phan-tich-du-lieu-1773291405655-118730188-1774254824600-959205718.jpg',
            title: '5',
            excerpt: '5',
            date: 'Jun 25, 2026',
            url: '/en/tin-tuc/bai-viet-5',
          },
        ],
        sectionId: 'tin-tuc',
        background: { type: 'color', color: '#ffffff' },
        animate: true,
      },
    },
    {
      type: 'HexPartners',
      props: {
        id: 'partners-en',
        title: 'Our Partners',
        logos: [
          { imageUrl: 'https://webdemo.hexagon.xyz/medias/Logo Khoi E.png', alt: 'Block E' },
          { imageUrl: 'https://webdemo.hexagon.xyz/medias/Logo Khoi C.png', alt: 'Block C' },
          { imageUrl: 'https://webdemo.hexagon.xyz/medias/Logo Khoi D.png', alt: 'Block D' },
          { imageUrl: 'https://webdemo.hexagon.xyz/medias/Happy Food.png', alt: 'Happy Food' },
          { isSvg: true, svgType: 'ecobook', alt: 'ECOBOOK' },
          { isSvg: true, svgType: 'comoon', alt: 'COMOON' },
          { imageUrl: 'https://webdemo.hexagon.xyz/medias/B.png', alt: 'Binh Minh' },
          { imageUrl: 'https://webdemo.hexagon.xyz/medias/Logo Khoi F.png', alt: 'Block F' },
        ],
        background: { type: 'gradient', from: '#0f826b', to: '#86efac', direction: 'to bottom' },
        animate: true,
      },
    },
    {
      type: 'HexContact',
      props: {
        id: 'contact-en',
        title: 'Contact Us',
        description: 'Ready for your next project? Our team of experts at Hexagon is here to listen and provide the best solutions for you.',
        address: '615 Au Co, Tan Phu Ward, Ho Chi Minh City',
        email: 'contact@hexagon.xyz',
        phone: '+84 964 460 333',
        socialLinks: [
          { platform: 'Facebook', url: '#' },
          { platform: 'LinkedIn', url: '#' },
          { platform: 'YouTube', url: '#' },
        ],
        mapEmbed: 'https://maps.google.com/maps?width=600&height=400&hl=en&q=615+Au+Co+Tan+Phu&t=p&z=14&ie=UTF8&iwloc=B&output=embed',
        sectionId: 'lien-he',
        background: { type: 'color', color: '#f8fafc' },
      },
    },
    {
      type: 'HexFooter',
      props: {
        id: 'footer-en',
        companyName: 'Hexagon Corporation',
        tagline: 'Hexagon Technology Ecosystem',
        copyright: 'Copyright 2026 ©',
        links: [],
        socialLinks: [
          { platform: 'Facebook', icon: 'facebook', url: '#' },
          { platform: 'LinkedIn', icon: 'linkedin', url: '#' },
          { platform: 'YouTube', icon: 'youtube', url: '#' },
        ],
        textColor: '#9ca3af',
        background: { type: 'color', color: '#0D5939' },
      },
    },
  ],
  root: { props: {} },
};

const makeServicePageVI = (slug, title, description, image, solutions, process) => ({
  content: [
    {
      type: 'HexNavbar',
      props: {
        id: `navbar-${slug}-vi`,
        logoUrl: LOGO_URL,
        logoText: 'HEXAGON',
        menuItems: [
          { label: 'Trang chủ', url: '/#trang-chu' },
          { label: 'Giới thiệu', url: '/#gioi-thieu' },
          { label: 'Dịch vụ', url: '/#dich-vu' },
          { label: 'Tin tức', url: '/#tin-tuc' },
          { label: 'Liên hệ', url: '/#lien-he' },
        ],
        showLangSwitcher: true,
        background: { type: 'color', color: '#1A6B49' },
        textColor: '#ffffff',
      },
    },
    {
      type: 'HexServicePage',
      props: {
        title,
        description,
        image,
        ctaText: 'Liên hệ tư vấn',
        ctaUrl: '/#lien-he',
        solutionsTitle: 'Giải pháp nổi bật',
        solutionsItems: solutions,
        processTitle: 'Quy trình thực hiện',
        processDescription: 'Quy trình chuyên nghiệp, minh bạch và hiệu quả.',
        processItems: process,
        readyTitle: 'Sẵn sàng triển khai?',
        readyDescription: 'Đừng để công nghệ làm rào cản. Hãy biến nó thành lợi thế cạnh tranh của bạn cùng Hexagon.',
        readyCta1: 'Về trang chủ',
        readyCta1Url: '/',
        readyCta2: 'Liên hệ ngay',
        readyCta2Url: '/#lien-he',
        lang: 'vi',
      },
    },
    {
      type: 'HexFooter',
      props: {
        id: `footer-${slug}-vi`,
        companyName: 'Hexagon Corporation',
        tagline: 'Hệ sinh thái Công nghệ Hexagon',
        copyright: 'Copyright 2026 ©',
        links: [],
        socialLinks: [
          { platform: 'Facebook', icon: 'facebook', url: '#' },
          { platform: 'LinkedIn', icon: 'linkedin', url: '#' },
          { platform: 'YouTube', icon: 'youtube', url: '#' },
        ],
        textColor: '#9ca3af',
        background: { type: 'color', color: '#0D5939' },
      },
    },
  ],
  root: { props: {} },
});

const makeServicePageEN = (slug, title, description, image, solutions, process) => ({
  content: [
    {
      type: 'HexNavbar',
      props: {
        id: `navbar-${slug}-en`,
        logoUrl: LOGO_URL,
        logoText: 'HEXAGON',
        menuItems: [
          { label: 'Home', url: '/en/trang-chu#trang-chu' },
          { label: 'About', url: '/en/trang-chu#gioi-thieu' },
          { label: 'Services', url: '/en/trang-chu#dich-vu' },
          { label: 'News', url: '/en/trang-chu#tin-tuc' },
          { label: 'Contact', url: '/en/trang-chu#lien-he' },
        ],
        showLangSwitcher: true,
        background: { type: 'color', color: '#1A6B49' },
        textColor: '#ffffff',
      },
    },
    {
      type: 'HexServicePage',
      props: {
        title,
        description,
        image,
        ctaText: 'Contact for consultation',
        ctaUrl: '/en/trang-chu#lien-he',
        solutionsTitle: 'Outstanding solution',
        solutionsItems: solutions,
        processTitle: 'Implementation process',
        processDescription: 'The process is professional, transparent, and efficient.',
        processItems: process,
        readyTitle: 'Ready to deploy?',
        readyDescription: "Don't let technology be a barrier. Turn it into your competitive advantage with Hexagon.",
        readyCta1: 'Back to Homepage',
        readyCta1Url: '/en/trang-chu',
        readyCta2: 'Contact us now',
        readyCta2Url: '/en/trang-chu#lien-he',
        lang: 'en',
      },
    },
    {
      type: 'HexFooter',
      props: {
        id: `footer-${slug}-en`,
        companyName: 'Hexagon Corporation',
        tagline: 'Hexagon Technology Ecosystem',
        copyright: 'Copyright 2026 ©',
        links: [],
        socialLinks: [
          { platform: 'Facebook', icon: 'facebook', url: '#' },
          { platform: 'LinkedIn', icon: 'linkedin', url: '#' },
          { platform: 'YouTube', icon: 'youtube', url: '#' },
        ],
        textColor: '#9ca3af',
        background: { type: 'color', color: '#0D5939' },
      },
    },
  ],
  root: { props: {} },
});

// Seed Pages List
export const SEED_PAGES = [
  {
    id: 'seed-trang-chu-vi',
    title: 'Trang chủ',
    slug: 'trang-chu',
    seoTitle: 'Hexagon Corporation - Hệ sinh thái Công nghệ Hexagon',
    lang: 'vi',
    status: 'published',
    updatedAt: '06/07/2026',
    puckData: homepageVI,
  },
  {
    id: 'seed-trang-chu-en',
    title: 'Home',
    slug: 'trang-chu',
    seoTitle: 'Hexagon Corporation - Hexagon Technology Ecosystem',
    lang: 'en',
    status: 'published',
    updatedAt: '06/07/2026',
    puckData: homepageEN,
  },

  // ─── VIETNAMESE SUBPAGES ───
  {
    id: 'seed-giai-phap-cong-nghe-vi',
    title: 'Giải pháp công nghệ',
    slug: 'giai-phap-cong-nghe',
    seoTitle: 'Giải pháp công nghệ - Hexagon Corporation',
    lang: 'vi',
    status: 'published',
    updatedAt: '07/07/2026',
    puckData: makeServicePageVI(
      'giai-phap-cong-nghe',
      'Giải pháp công nghệ',
      'Phát triển và triển khai các giải pháp phần mềm tùy chỉnh, tối ưu vận hành doanh nghiệp, nâng cao hiệu suất, đáp ứng linh hoạt theo nhu cầu và định hướng phát triển dài hạn.',
      'https://beta-api.hexagon.xyz/uploads/dv-3-1782723514885-362139381.jpg',
      [
        { title: 'Phát triển phần mềm theo yêu cầu', content: 'Thiết kế và xây dựng phần mềm “đo ni đóng giày” theo quy trình vận hành riêng của doanh nghiệp, giúp tối ưu hiệu suất và tăng khả năng cạnh tranh.' },
        { title: 'Giải pháp chuyển đổi số doanh nghiệp', content: 'Tích hợp công nghệ vào toàn bộ hoạt động (quản lý, bán hàng, vận hành), giúp doanh nghiệp tự động hóa quy trình và nâng cao trải nghiệm khách hàng.' },
        { title: 'Xây dựng hệ thống nền tảng & tích hợp', content: 'Phát triển hệ thống trung tâm (CRM, ERP, Dashboard…) và kết nối các nền tảng hiện có thành một hệ sinh thái đồng bộ, dữ liệu xuyên suốt.' }
      ],
      [
        { title: 'Khảo sát & phân tích yêu cầu', content: '' },
        { title: 'Thiết kế giải pháp & kiến trúc hệ thống', content: '' },
        { title: 'Phát triển & Thử nghiệm', content: '' },
        { title: 'Triển khai & Bảo trì', content: '' }
      ]
    )
  },
  {
    id: 'seed-giai-phap-thi-cong-lap-dat-vi',
    title: 'Giải pháp thi công & lắp đặt',
    slug: 'giai-phap-thi-cong-lap-dat',
    seoTitle: 'Giải pháp thi công & lắp đặt - Hexagon Corporation',
    lang: 'vi',
    status: 'published',
    updatedAt: '07/07/2026',
    puckData: makeServicePageVI(
      'giai-phap-thi-cong-lap-dat',
      'Giải pháp thi công & lắp đặt',
      'Tư vấn chiến lược chuyển đổi số toàn diện, giúp doanh nghiệp tối ưu quy trình, nâng cao trải nghiệm khách hàng và tăng trưởng bền vững trong môi trường số hóa.',
      'https://beta-api.hexagon.xyz/uploads/dv-4-1782723514901-308215051.jpg',
      [
        { title: 'Đánh giá hiện trạng & mức độ trưởng thành số', content: 'Phân tích toàn diện hệ thống, quy trình và năng lực công nghệ hiện tại, từ đó xác định mức độ sẵn sàng chuyển đổi số của doanh nghiệp.' },
        { title: 'Xây dựng chiến lược chuyển đổi số tổng thể', content: 'Tư vấn lộ trình chuyển đổi số theo từng giai đoạn, phù hợp với mục tiêu kinh doanh, nguồn lực và ngành nghề của doanh nghiệp.' },
        { title: 'Tư vấn lựa chọn công nghệ & giải pháp triển khai', content: 'Đề xuất các nền tảng, công nghệ và mô hình triển khai tối ưu (Cloud, AI, Data, CRM, ERP…), đảm bảo hiệu quả đầu tư và khả năng mở rộng.' }
      ],
      [
        { title: 'Khảo sát & đánh giá doanh nghiệp', content: '' },
        { title: 'Xác định mục tiêu & định hướng chuyển đổi', content: '' },
        { title: 'Xây dựng lộ trình & giải pháp', content: '' },
        { title: 'Đồng hành triển khai & tối ưu', content: '' }
      ]
    )
  },
  {
    id: 'seed-cung-cap-thiet-bi-cntt-vi',
    title: 'Cung cấp thiết bị CNTT',
    slug: 'cung-cap-thiet-bi-cntt',
    seoTitle: 'Cung cấp thiết bị CNTT - Hexagon Corporation',
    lang: 'vi',
    status: 'published',
    updatedAt: '07/07/2026',
    puckData: makeServicePageVI(
      'cung-cap-thiet-bi-cntt',
      'Cung cấp thiết bị CNTT',
      'Cung cấp giải pháp trí tuệ nhân tạo và phân tích dữ liệu, hỗ trợ ra quyết định thông minh, tự động hóa quy trình và khai thác tối đa giá trị từ dữ liệu doanh nghiệp.',
      'https://beta-api.hexagon.xyz/uploads/dv-2-1782723514900-716634177.jpg',
      [
        { title: 'Xây dựng hệ thống dữ liệu tập trung', content: 'Thiết kế và triển khai hệ thống lưu trữ dữ liệu tập trung, giúp doanh nghiệp quản lý, đồng bộ và khai thác dữ liệu hiệu quả.' },
        { title: 'Phân tích dữ liệu & trực quan hóa', content: 'Khai thác dữ liệu thông qua báo cáo, dashboard và mô hình phân tích, hỗ trợ ra quyết định nhanh và chính xác.' },
        { title: 'Ứng dụng AI & Machine Learning', content: 'Triển khai các mô hình AI như dự đoán, phân loại, chatbot, nhận diện hình ảnh… giúp tự động hóa và tối ưu vận hành.' }
      ],
      [
        { title: 'Thu thập & chuẩn hóa dữ liệu', content: '' },
        { title: 'Thiết kế kiến trúc dữ liệu', content: '' },
        { title: 'Phát triển mô hình & hệ thống', content: '' },
        { title: 'Triển khai & tối ưu liên tục', content: '' }
      ]
    )
  },
  {
    id: 'seed-dich-vu-cong-nghe-thong-tin-vi',
    title: 'Dịch vụ Công nghệ thông tin',
    slug: 'dich-vu-cong-nghe-thong-tin',
    seoTitle: 'Dịch vụ Công nghệ thông tin - Hexagon Corporation',
    lang: 'vi',
    status: 'published',
    updatedAt: '07/07/2026',
    puckData: makeServicePageVI(
      'dich-vu-cong-nghe-thong-tin',
      'Dịch vụ Công nghệ thông tin',
      'Thi công và lắp đặt hệ thống camera giám sát, mạng wifi chuyên nghiệp, đảm bảo an ninh, ổn định kết nối và phù hợp với mọi quy mô doanh nghiệp.',
      'https://beta-api.hexagon.xyz/uploads/dv-1-1782723514912-477828992.jpg',
      [
        { title: 'Giải pháp hệ thống camera giám sát', content: 'Thiết kế và lắp đặt hệ thống camera an ninh cho văn phòng, nhà xưởng, cửa hàng… với khả năng giám sát từ xa, lưu trữ và cảnh báo thông minh.' },
        { title: 'Giải pháp mạng WiFi doanh nghiệp', content: 'Triển khai hệ thống WiFi phủ sóng ổn định, bảo mật cao, đáp ứng số lượng lớn người dùng và thiết bị trong môi trường doanh nghiệp.' },
        { title: 'Giải pháp hạ tầng mạng & tích hợp', content: 'Thi công hệ thống mạng tổng thể (LAN, Switch, Router, Server…), đồng bộ với camera và WiFi để đảm bảo vận hành xuyên suốt.' }
      ],
      [
        { title: 'Khảo sát & tư vấn giải pháp', content: '' },
        { title: 'Thiết kế sơ đồ & cấu hình hệ thống', content: '' },
        { title: 'Thi công & lắp đặt', content: '' },
        { title: 'Bàn giao & bảo trì', content: '' }
      ]
    )
  },

  // ─── ENGLISH SUBPAGES ───
  {
    id: 'seed-giai-phap-cong-nghe-en',
    title: 'Technology Solutions',
    slug: 'giai-phap-cong-nghe',
    seoTitle: 'Technology Solutions - Hexagon Corporation',
    lang: 'en',
    status: 'published',
    updatedAt: '07/07/2026',
    puckData: makeServicePageEN(
      'giai-phap-cong-nghe',
      'Technology solutions',
      'Develop and deliver customized software solutions to optimize business operations, enhance efficiency, and flexibly adapt to specific requirements and long-term growth strategies.',
      'https://beta-api.hexagon.xyz/uploads/dv-3-1782723514885-362139381.jpg',
      [
        { title: 'Custom Software Development', content: 'Design and build custom software tailored to your specific business processes, optimizing efficiency and competitiveness.' },
        { title: 'Digital Transformation', content: 'Integrate technology across operations (management, sales, operations) to automate workflows and elevate customer experiences.' },
        { title: 'Platform & System Integration', content: 'Develop core systems (CRM, ERP, Dashboards...) and connect existing platforms into a unified, seamless data ecosystem.' }
      ],
      [
        { title: 'Discovery & Analysis', content: '' },
        { title: 'Solution Design', content: '' },
        { title: 'Development & Testing', content: '' },
        { title: 'Deployment & Maintenance', content: '' }
      ]
    )
  },
  {
    id: 'seed-giai-phap-thi-cong-lap-dat-en',
    title: 'Construction & Installation Solutions',
    slug: 'giai-phap-thi-cong-lap-dat',
    seoTitle: 'Construction & Installation Solutions - Hexagon Corporation',
    lang: 'en',
    status: 'published',
    updatedAt: '07/07/2026',
    puckData: makeServicePageEN(
      'giai-phap-thi-cong-lap-dat',
      'Construction & Installation Solutions',
      'Comprehensive digital transformation consulting, helping businesses optimize processes, enhance customer experience and achieve sustainable growth in the digital environment.',
      'https://beta-api.hexagon.xyz/uploads/dv-4-1782723514901-308215051.jpg',
      [
        { title: 'Assessment of Current Status & Digital Maturity', content: 'Comprehensive analysis of systems, processes, and current technological capability to identify business readiness for digital transformation.' },
        { title: 'Comprehensive Digital Transformation Strategy', content: 'Phased digital transformation roadmap consulting aligned with business goals, resources, and industry standards.' },
        { title: 'Technology Selection & Deployment Consulting', content: 'Propose optimal platforms, technologies, and deployment models (Cloud, AI, Data, CRM, ERP...) ensuring investment efficiency and scalability.' }
      ],
      [
        { title: 'Survey & Business Assessment', content: '' },
        { title: 'Identify Goals & Transformation Direction', content: '' },
        { title: 'Roadmap & Solution Design', content: '' },
        { title: 'Deployment Support & Optimization', content: '' }
      ]
    )
  },
  {
    id: 'seed-cung-cap-thiet-bi-cntt-en',
    title: 'Providing IT Equipment',
    slug: 'cung-cap-thiet-bi-cntt',
    seoTitle: 'Providing IT Equipment - Hexagon Corporation',
    lang: 'en',
    status: 'published',
    updatedAt: '07/07/2026',
    puckData: makeServicePageEN(
      'cung-cap-thiet-bi-cntt',
      'Providing IT Equipment',
      'Offer AI and data analytics solutions to enable intelligent decision-making, automate processes, and unlock the full value of enterprise data assets.',
      'https://beta-api.hexagon.xyz/uploads/dv-2-1782723514900-716634177.jpg',
      [
        { title: 'Centralized Data System Building', content: 'Design and deploy centralized data storage systems, helping businesses manage, synchronize, and exploit data effectively.' },
        { title: 'Data Analysis & Visualization', content: 'Leverage data through reports, dashboards, and analytical models, supporting fast and accurate decision making.' },
        { title: 'AI & Machine Learning Applications', content: 'Deploy AI models such as prediction, classification, chatbots, and image recognition to automate and optimize operations.' }
      ],
      [
        { title: 'Data Collection & Standardization', content: '' },
        { title: 'Data Architecture Design', content: '' },
        { title: 'Model & System Development', content: '' },
        { title: 'Continuous Deployment & Optimization', content: '' }
      ]
    )
  },
  {
    id: 'seed-dich-vu-cong-nghe-thong-tin-en',
    title: 'Information Technology Services',
    slug: 'dich-vu-cong-nghe-thong-tin',
    seoTitle: 'Information Technology Services - Hexagon Corporation',
    lang: 'en',
    status: 'published',
    updatedAt: '07/07/2026',
    puckData: makeServicePageEN(
      'dich-vu-cong-nghe-thong-tin',
      'Information Technology Services',
      'Design and install professional camera surveillance and WiFi systems, ensuring security, stable connectivity, and scalability for businesses of all sizes.',
      'https://beta-api.hexagon.xyz/uploads/dv-1-1782723514912-477828992.jpg',
      [
        { title: 'Surveillance Camera System Solutions', content: 'Design and install security camera systems for offices, factories, shops... with remote monitoring, storage, and smart alert capabilities.' },
        { title: 'Enterprise WiFi Network Solutions', content: 'Deploy stable and highly secure WiFi systems, supporting a large number of users and devices in enterprise environments.' },
        { title: 'Network Infrastructure & Integration Solutions', content: 'Construct overall network system (LAN, Switch, Router, Server...), synchronized with cameras and WiFi to ensure seamless operation.' }
      ],
      [
        { title: 'Survey & Solution Consulting', content: '' },
        { title: 'Diagram Design & System Configuration', content: '' },
        { title: 'Construction & Installation', content: '' },
        { title: 'Handover & Maintenance', content: '' }
      ]
    )
  }
];

// ─── Article page helpers ─────────────────────────────────────────────────────

const makeArticlePageVI = (slug, title, date, category, contentHtml, relatedItems = []) => ({
  content: [
    {
      type: 'HexNavbar',
      props: {
        id: `navbar-${slug}-vi`,
        logoUrl: LOGO_URL,
        logoText: 'HEXAGON',
        menuItems: [
          { label: 'Trang chủ', url: '/#trang-chu' },
          { label: 'Giới thiệu', url: '/#gioi-thieu' },
          { label: 'Dịch vụ', url: '/#dich-vu' },
          { label: 'Tin tức', url: '/#tin-tuc' },
          { label: 'Liên hệ', url: '/#lien-he' },
        ],
        showLangSwitcher: true,
        background: { type: 'color', color: '#1A6B49' },
        textColor: '#ffffff',
      },
    },
    {
      type: 'HexArticlePage',
      props: {
        title,
        date,
        category,
        contentHtml,
        lang: 'vi',
        relatedTitle: 'Bài viết liên quan',
        relatedItems,
      },
    },
    {
      type: 'HexFooter',
      props: {
        id: `footer-${slug}-vi`,
        companyName: 'Hexagon Corporation',
        tagline: 'Hệ sinh thái Công nghệ Hexagon',
        copyright: 'Copyright 2026 ©',
        links: [],
        socialLinks: [
          { platform: 'Facebook', icon: 'facebook', url: '#' },
          { platform: 'LinkedIn', icon: 'linkedin', url: '#' },
          { platform: 'YouTube', icon: 'youtube', url: '#' },
        ],
        textColor: '#9ca3af',
        background: { type: 'color', color: '#0D5939' },
      },
    },
  ],
  root: { props: {} },
});

const makeArticlePageEN = (slug, title, date, category, contentHtml, relatedItems = []) => ({
  content: [
    {
      type: 'HexNavbar',
      props: {
        id: `navbar-${slug}-en`,
        logoUrl: LOGO_URL,
        logoText: 'HEXAGON',
        menuItems: [
          { label: 'Home', url: '/en/trang-chu#trang-chu' },
          { label: 'About', url: '/en/trang-chu#gioi-thieu' },
          { label: 'Services', url: '/en/trang-chu#dich-vu' },
          { label: 'News', url: '/en/trang-chu#tin-tuc' },
          { label: 'Contact', url: '/en/trang-chu#lien-he' },
        ],
        showLangSwitcher: true,
        background: { type: 'color', color: '#1A6B49' },
        textColor: '#ffffff',
      },
    },
    {
      type: 'HexArticlePage',
      props: {
        title,
        date,
        category,
        contentHtml,
        lang: 'en',
        relatedTitle: 'Related articles',
        relatedItems,
      },
    },
    {
      type: 'HexFooter',
      props: {
        id: `footer-${slug}-en`,
        companyName: 'Hexagon Corporation',
        tagline: 'Hexagon Technology Ecosystem',
        copyright: 'Copyright 2026 ©',
        links: [],
        socialLinks: [
          { platform: 'Facebook', icon: 'facebook', url: '#' },
          { platform: 'LinkedIn', icon: 'linkedin', url: '#' },
          { platform: 'YouTube', icon: 'youtube', url: '#' },
        ],
        textColor: '#9ca3af',
        background: { type: 'color', color: '#0D5939' },
      },
    },
  ],
  root: { props: {} },
});

// Common related items for cross-linking
const NEWS_RELATED_VI = [
  { title: 'Không khí tưng bừng tại Chương trình Teambuilding myH25', imageUrl: 'https://beta-api.hexagon.xyz/uploads/teambuilding-01-1774341835079-253071961.jpg', date: '26 tháng 6, 2026', url: '/hoat-dong/khong-khi-tung-bung-tai-chuong-trinh-teambuilding-myh25-tai-ngoi-nha-hung-hau' },
  { title: 'Đồng hành cùng sinh viên Đại học Văn Hiến', imageUrl: 'https://beta-api.hexagon.xyz/uploads/myc-dong-hanh-1-1774341526337-531129418.jpg', date: '26 tháng 6, 2026', url: '/hoat-dong/dong-hanh-cung-sinh-vien-dai-hoc-van-hien-tai-ngay-hoi-sinh-vien' },
  { title: 'Sắm tết công nghệ - Nâng cấp thiết bị, khởi đầu bứt phá', imageUrl: 'https://beta-api.hexagon.xyz/uploads/sam-tet-cong-nghe-1774343703442-177870451.jpg', date: '26 tháng 6, 2026', url: '/su-kien/sam-tet-cong-nghe-nang-cap-thiet-bi-khoi-dau-but-pha' },
];

const NEWS_RELATED_EN = [
  { title: 'A lively atmosphere at the myH25 Teambuilding Program', imageUrl: 'https://beta-api.hexagon.xyz/uploads/teambuilding-01-1774341835079-253071961.jpg', date: 'Jun 26, 2026', url: '/en/hoat-dong/khong-khi-tung-bung-tai-chuong-trinh-teambuilding-myh25-tai-ngoi-nha-hung-hau' },
  { title: 'Accompanying Van Hien University Students', imageUrl: 'https://beta-api.hexagon.xyz/uploads/myc-dong-hanh-1-1774341526337-531129418.jpg', date: 'Jun 26, 2026', url: '/en/hoat-dong/dong-hanh-cung-sinh-vien-dai-hoc-van-hien-tai-ngay-hoi-sinh-vien' },
  { title: 'Upgrade your tech - Empower your new year breakthrough', imageUrl: 'https://beta-api.hexagon.xyz/uploads/sam-tet-cong-nghe-1774343703442-177870451.jpg', date: 'Jun 26, 2026', url: '/en/su-kien/sam-tet-cong-nghe-nang-cap-thiet-bi-khoi-dau-but-pha' },
];

// Push 10 article pages into SEED_PAGES
SEED_PAGES.push(
  // ── Hoạt động 1: Teambuilding (VI) ──────────────────────────────
  {
    id: 'seed-teambuilding-myh25-vi',
    title: 'Không khí tưng bừng tại Chương trình Teambuilding myH25 tại Ngôi nhà Hùng Hậu',
    slug: 'khong-khi-tung-bung-tai-chuong-trinh-teambuilding-myh25-tai-ngoi-nha-hung-hau',
    seoTitle: 'Teambuilding myH25 tại Ngôi nhà Hùng Hậu - Hexagon Corporation',
    lang: 'vi',
    status: 'published',
    updatedAt: '26/06/2026',
    puckData: makeArticlePageVI(
      'teambuilding-myh25',
      'Không khí tưng bừng tại Chương trình Teambuilding myH25 tại Ngôi nhà Hùng Hậu',
      '26 tháng 6, 2026',
      'Hoạt động',
      `<p>Cùng nhìn lại những khoảnh khắc đáng nhớ và đẹp nhất của đại gia đình HHC trong chương trình TEAMBUILDING MYH25, diễn ra tại khu nghỉ dưỡng Vinpearl Nha Trang.</p>
<p><img src="https://beta-api.hexagon.xyz/uploads/teambuilding-01-1774341835079-253071961.jpg" alt="Teambuilding myH25"></p>
<p>Hòa chung không khí rực lửa, đại gia đình HHC đã cùng nhau tham gia các hoạt động tham quan, dã ngoại và tăng cường sự gắn kết tại vùng đảo xinh đẹp của Vinpearl Nha Trang. Tại đây, các thành viên cùng người thân đã được trải nghiệm những giây phút ý nghĩa, ấm áp và tận hưởng những giá trị xứng đáng.</p>
<p>Teambuilding không chỉ là hoạt động để gắn kết tình đồng đội mà còn là dịp để toàn thể các đơn vị, tập thể, và cá nhân cùng nhau nhìn lại và tự hào về những thành tựu đã gặt hái, cũng như những khó khăn, trở ngại mà chúng ta đã cùng nhau vượt qua. Đây chính là bước đà hoàn hảo để chuẩn bị cho một sự khởi đầu trọn vẹn niềm vui, hứa hẹn một hành trình mới với nhiều thắng lợi hơn nữa!</p>
<p>Tạm biệt Vinpearl Nha Trang với vô vàn kỷ niệm đẹp, chúng ta hãy cùng nhau mang nguồn năng lượng tích cực này trở lại công việc, tiếp tục đồng lòng, đoàn kết và vững bước tiến lên để chinh phục những mục tiêu lớn hơn.</p>
<p><strong>HHC - Sẵn sàng bứt phá!</strong></p>`,
      NEWS_RELATED_VI.filter(r => !r.url.includes('teambuilding'))
    ),
  },
  // ── Hoạt động 1: Teambuilding (EN) ──────────────────────────────
  {
    id: 'seed-teambuilding-myh25-en',
    title: 'A lively atmosphere at the myH25 Teambuilding Program at Hung Hau House',
    slug: 'khong-khi-tung-bung-tai-chuong-trinh-teambuilding-myh25-tai-ngoi-nha-hung-hau',
    seoTitle: 'myH25 Teambuilding at Hung Hau House - Hexagon Corporation',
    lang: 'en',
    status: 'published',
    updatedAt: '26/06/2026',
    puckData: makeArticlePageEN(
      'teambuilding-myh25',
      'A lively atmosphere at the myH25 Teambuilding Program at Hung Hau House',
      'Jun 26, 2026',
      'Activities',
      `<p>Let's look back at the most beautiful and memorable moments of the HHC family during the MYH25 TEAMBUILDING, held at the Vinpearl Nha Trang resort.</p>
<p><img src="https://beta-api.hexagon.xyz/uploads/teambuilding-01-1774341835079-253071961.jpg" alt="Teambuilding myH25"></p>
<p>In a vibrant atmosphere, the HHC family participated in sightseeing, outdoor activities, and bonding experiences at the beautiful Vinpearl Nha Trang island. Members and their families enjoyed meaningful, warm moments and earned well-deserved rewards.</p>
<p>Teambuilding is not only about strengthening team bonds, but also an opportunity for everyone to look back proudly on the achievements we have made together, as well as the challenges we have overcome. This is the perfect momentum for a joyful new start, promising a new journey with even greater victories!</p>
<p><strong>HHC - Ready to break through!</strong></p>`,
      NEWS_RELATED_EN.filter(r => !r.url.includes('teambuilding'))
    ),
  },

  // ── Hoạt động 2: Van Hien (VI) ───────────────────────────────────
  {
    id: 'seed-van-hien-vi',
    title: 'Đồng hành cùng sinh viên Đại học Văn Hiến tại Ngày hội sinh viên',
    slug: 'dong-hanh-cung-sinh-vien-dai-hoc-van-hien-tai-ngay-hoi-sinh-vien',
    seoTitle: 'Đồng hành sinh viên Đại học Văn Hiến - Hexagon Corporation',
    lang: 'vi',
    status: 'published',
    updatedAt: '26/06/2026',
    puckData: makeArticlePageVI(
      'van-hien',
      'Đồng hành cùng sinh viên Đại học Văn Hiến tại Ngày hội sinh viên',
      '26 tháng 6, 2026',
      'Hoạt động',
      `<p>Công ty Cổ phần Lục Giác hân hạnh được đồng hành cùng các bạn sinh viên khoa Công nghệ Thông tin - Đại học Văn Hiến trong chương trình "VHE Startup Devote".</p>
<p>Trong khuôn khổ cuộc thi, Lục Giác đã hỗ trợ các bạn sinh viên xây dựng mô hình kinh doanh thiết bị công nghệ điện tử, đồng thời chia sẻ phương pháp trình bày kế hoạch kinh doanh chuyên nghiệp và khả thi.</p>
<p><img src="https://beta-api.hexagon.xyz/uploads/myc-dong-hanh-1-1774341526337-531129418.jpg" alt="Đồng hành sinh viên Văn Hiến"></p>
<p>Với kinh nghiệm thực tế từ doanh nghiệp cùng sự sáng tạo và linh hoạt của các bạn sinh viên, đội myU đã xuất sắc chinh phục ban giám khảo và mang về giải thưởng cao nhất - <strong>Giải Nhất Khởi Nghiệp</strong>.</p>
<p>Thành công này không chỉ khẳng định sự chuyên nghiệp và tiềm năng của sinh viên Đại học Văn Hiến, mà còn thể hiện tầm nhìn phát triển mạnh mẽ của mô hình kinh doanh đến từ Lục Giác.</p>
<p>Lục Giác hy vọng sẽ tiếp tục đồng hành cùng các bạn sinh viên trong hành trình lan tỏa tinh thần khởi nghiệp trong kỷ nguyên số.</p>`,
      NEWS_RELATED_VI.filter(r => !r.url.includes('van-hien'))
    ),
  },
  // ── Hoạt động 2: Van Hien (EN) ───────────────────────────────────
  {
    id: 'seed-van-hien-en',
    title: 'Accompanying Van Hien University Students at the student festival',
    slug: 'dong-hanh-cung-sinh-vien-dai-hoc-van-hien-tai-ngay-hoi-sinh-vien',
    seoTitle: 'Van Hien University Student Festival - Hexagon Corporation',
    lang: 'en',
    status: 'published',
    updatedAt: '26/06/2026',
    puckData: makeArticlePageEN(
      'van-hien',
      'Accompanying Van Hien University Students at the student festival',
      'Jun 26, 2026',
      'Activities',
      `<p>Hexagon JSC. is honored to accompany the IT students at Van Hien University in the "VHE Startup Devote" competition.</p>
<p>During the competition, Hexagon supported students in building a business model for electronic technology devices, while sharing professional and feasible business plan presentation methods.</p>
<p><img src="https://beta-api.hexagon.xyz/uploads/myc-dong-hanh-1-1774341526337-531129418.jpg" alt="Van Hien University Student Festival"></p>
<p>With practical business experience combined with the creativity and flexibility of the students, the myU team impressively won over the judges and brought home the highest award - <strong>First Place in Entrepreneurship</strong>.</p>
<p>This success not only confirms the professionalism and potential of Van Hien University students, but also demonstrates the strong development vision of Hexagon's business model.</p>`,
      NEWS_RELATED_EN.filter(r => !r.url.includes('van-hien'))
    ),
  },

  // ── Sự kiện: Sắm Tết (VI) ────────────────────────────────────────
  {
    id: 'seed-sam-tet-vi',
    title: 'Sắm tết công nghệ - Nâng cấp thiết bị, khởi đầu bứt phá',
    slug: 'sam-tet-cong-nghe-nang-cap-thiet-bi-khoi-dau-but-pha',
    seoTitle: 'Sắm tết công nghệ - Hexagon Corporation',
    lang: 'vi',
    status: 'published',
    updatedAt: '26/06/2026',
    puckData: makeArticlePageVI(
      'sam-tet',
      'Sắm tết công nghệ - Nâng cấp thiết bị, khởi đầu bứt phá',
      '26 tháng 6, 2026',
      'Sự kiện',
      `<p>Năm mới, vận hội mới, thiết bị cũng phải mới! Đầu tư cho công nghệ là đầu tư cho tương lai. Ghé 'Lục Giác' để chọn cho mình những siêu phẩm hỗ trợ đắc lực cho công việc và giải trí:</p>
<ul>
  <li>Hiệu năng đỉnh cao.</li>
  <li>Thiết kế thời thượng.</li>
  <li>Giá tốt bất ngờ kèm quà tặng Tết giá trị.</li>
</ul>
<p><img src="https://beta-api.hexagon.xyz/uploads/sam-tet-cong-nghe-1774343703442-177870451.jpg" alt="Sắm tết công nghệ"></p>
<p>Đừng chỉ bắt đầu năm mới - hãy chinh phục nó với những công cụ phù hợp!</p>`,
      NEWS_RELATED_VI.filter(r => !r.url.includes('sam-tet'))
    ),
  },
  // ── Sự kiện: Sắm Tết (EN) ────────────────────────────────────────
  {
    id: 'seed-sam-tet-en',
    title: 'Upgrade your tech - Empower your new year breakthrough',
    slug: 'sam-tet-cong-nghe-nang-cap-thiet-bi-khoi-dau-but-pha',
    seoTitle: 'Upgrade Tech for the New Year - Hexagon Corporation',
    lang: 'en',
    status: 'published',
    updatedAt: '26/06/2026',
    puckData: makeArticlePageEN(
      'sam-tet',
      'Upgrade your tech - Empower your new year breakthrough',
      'Jun 26, 2026',
      'Events',
      `<p>New Year, New Success, New Gear! Investing in technology is investing in your future. Visit Hexagon to choose your perfect tech companion for work and entertainment:</p>
<ul>
  <li>Peak performance.</li>
  <li>Trendy design.</li>
  <li>Surprisingly great prices with valuable Tet gifts.</li>
</ul>
<p><img src="https://beta-api.hexagon.xyz/uploads/sam-tet-cong-nghe-1774343703442-177870451.jpg" alt="Tech New Year Shopping"></p>
<p>Don't just start the new year - conquer it with the right tools!</p>`,
      NEWS_RELATED_EN.filter(r => !r.url.includes('sam-tet'))
    ),
  },

  // ── Tin tức 4 (VI) ────────────────────────────────────────────────
  {
    id: 'seed-bai-viet-4-vi',
    title: 'Bài viết 4',
    slug: 'bai-viet-4',
    seoTitle: 'Bài viết 4 - Hexagon Corporation',
    lang: 'vi',
    status: 'published',
    updatedAt: '25/06/2026',
    puckData: makeArticlePageVI(
      'bai-viet-4',
      'Bài viết 4',
      '25 tháng 6, 2026',
      'Tin tức',
      `<p><img src="https://beta-api.hexagon.xyz/uploads/phattrienphanmem-1773133089066-706455049.png" alt="Phát triển phần mềm"></p>
<p>Nội dung bài viết 4 - Hexagon Corporation liên tục cập nhật các thông tin công nghệ mới nhất và hữu ích nhất dành cho doanh nghiệp của bạn.</p>`,
      NEWS_RELATED_VI
    ),
  },
  // ── Tin tức 4 (EN) ────────────────────────────────────────────────
  {
    id: 'seed-bai-viet-4-en',
    title: 'Article 4',
    slug: 'bai-viet-4',
    seoTitle: 'Article 4 - Hexagon Corporation',
    lang: 'en',
    status: 'published',
    updatedAt: '25/06/2026',
    puckData: makeArticlePageEN(
      'bai-viet-4',
      'Article 4',
      'Jun 25, 2026',
      'News',
      `<p><img src="https://beta-api.hexagon.xyz/uploads/phattrienphanmem-1773133089066-706455049.png" alt="Software Development"></p>
<p>Article 4 - Hexagon Corporation continuously updates the latest and most useful technology information for your business.</p>`,
      NEWS_RELATED_EN
    ),
  },

  // ── Tin tức 5 (VI) ────────────────────────────────────────────────
  {
    id: 'seed-bai-viet-5-vi',
    title: 'Bài viết 5',
    slug: 'bai-viet-5',
    seoTitle: 'Bài viết 5 - Hexagon Corporation',
    lang: 'vi',
    status: 'published',
    updatedAt: '25/06/2026',
    puckData: makeArticlePageVI(
      'bai-viet-5',
      'Bài viết 5',
      '25 tháng 6, 2026',
      'Tin tức',
      `<p><img src="https://beta-api.hexagon.xyz/uploads/ai-phan-tich-du-lieu-1773291405655-118730188-1774254824600-959205718.jpg" alt="AI phân tích dữ liệu"></p>
<p>Nội dung bài viết 5 - Tìm hiểu về ứng dụng AI và phân tích dữ liệu trong doanh nghiệp hiện đại cùng Hexagon Corporation.</p>`,
      NEWS_RELATED_VI
    ),
  },
  // ── Tin tức 5 (EN) ────────────────────────────────────────────────
  {
    id: 'seed-bai-viet-5-en',
    title: 'Article 5',
    slug: 'bai-viet-5',
    seoTitle: 'Article 5 - Hexagon Corporation',
    lang: 'en',
    status: 'published',
    updatedAt: '25/06/2026',
    puckData: makeArticlePageEN(
      'bai-viet-5',
      'Article 5',
      'Jun 25, 2026',
      'News',
      `<p><img src="https://beta-api.hexagon.xyz/uploads/ai-phan-tich-du-lieu-1773291405655-118730188-1774254824600-959205718.jpg" alt="AI Data Analysis"></p>
<p>Article 5 - Explore the application of AI and data analytics in modern businesses with Hexagon Corporation.</p>`,
      NEWS_RELATED_EN
    ),
  }
);

export { homepageVI, homepageEN };

