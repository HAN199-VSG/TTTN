import React from 'react';
import AdminHeading from './admin-heading';
import AdminText from './admin-text';
import AdminImage from './admin-image';
import AdminSection from './admin-section';
import AdminHero from './admin-hero';
import HexNavbar from './HexNavbar';
import HexHero from './HexHero';
import HexAbout from './HexAbout';
import HexServices from './HexServices';
import HexNews from './HexNews';
import HexPartners from './HexPartners';
import HexContact from './HexContact';
import HexStats from './HexStats';
import HexBanner from './HexBanner';
import HexFooter from './HexFooter';
import HexServicePage from './HexServicePage';
import HexArticlePage from './HexArticlePage';
import { BACKGROUND_TYPES, GRADIENT_DIRECTIONS } from '../lib/constants';

// ─── Shared field sets ────────────────────────────────────────────────────────

const bgFields = {
  background: {
    type: 'object',
    label: 'Background',
    objectFields: {
      type: {
        type: 'select', label: 'Loại nền',
        options: BACKGROUND_TYPES,
      },
      color: { type: 'text', label: 'Màu nền (hex)' },
      from: { type: 'text', label: 'Gradient từ (hex)' },
      to: { type: 'text', label: 'Gradient đến (hex)' },
      direction: {
        type: 'select', label: 'Hướng gradient',
        options: GRADIENT_DIRECTIONS,
      },
      imageUrl: { type: 'text', label: 'URL hình ảnh nền' },
      overlayColor: { type: 'text', label: 'Màu phủ lên ảnh (rgba)' },
    },
  },
};

const animateField = { animate: { type: 'radio', label: 'Animation', options: [{ label: 'Bật', value: true }, { label: 'Tắt', value: false }] } };

// ─── puckConfig ───────────────────────────────────────────────────────────────

export const puckConfig = {
  components: {

    // ── Basic blocks (keep existing) ──────────────────────────────────────────

    Heading: {
      label: 'Tiêu đề',
      fields: {
        content: { type: 'text', label: 'Nội dung', contentEditable: true },
        level: {
          type: 'select', label: 'Cấp độ',
          options: [
            { label: 'H1', value: 1 }, { label: 'H2', value: 2 },
            { label: 'H3', value: 3 }, { label: 'H4', value: 4 },
          ],
        },
        align: {
          type: 'select', label: 'Căn lề',
          options: [
            { label: 'Trái', value: 'left' },
            { label: 'Giữa', value: 'center' },
            { label: 'Phải', value: 'right' },
          ],
        },
        variant: {
          type: 'select', label: 'Kiểu dáng',
          options: [
            { label: 'Mặc định', value: 'default' },
          ],
        },
      },
      defaultProps: { content: 'Tiêu đề', level: 2, align: 'left', variant: 'default' },
      render: (props) => <AdminHeading {...props} />,
    },

    Text: {
      label: 'Văn bản',
      fields: {
        content: { type: 'textarea', label: 'Nội dung', contentEditable: true },
        align: {
          type: 'select', label: 'Căn lề',
          options: [
            { label: 'Trái', value: 'left' },
            { label: 'Giữa', value: 'center' },
            { label: 'Phải', value: 'right' },
            { label: 'Đều', value: 'justify' },
          ],
        },
      },
      defaultProps: { content: 'Nhập văn bản ở đây...', align: 'left' },
      render: (props) => <AdminText {...props} />,
    },

    Image: {
      label: 'Ảnh',
      fields: {
        src: { type: 'text', label: 'URL ảnh' },
        alt: { type: 'text', label: 'Alt text' },
        width: { type: 'text', label: 'Chiều rộng' },
        height: { type: 'text', label: 'Chiều cao' },
        borderRadius: { type: 'text', label: 'Bo góc' },
        align: {
          type: 'select', label: 'Căn lề',
          options: [
            { label: 'Trái', value: 'left' },
            { label: 'Giữa', value: 'center' },
            { label: 'Phải', value: 'right' },
          ],
        },
      },
      defaultProps: { src: 'https://via.placeholder.com/800x400', alt: '', width: '100%', height: 'auto', borderRadius: '8px', align: 'center' },
      render: (props) => <AdminImage {...props} />,
    },

    Section: {
      label: 'Khoảng (Section)',
      fields: {
        container: {
          type: 'select', label: 'Chiều rộng',
          options: [
            { label: 'Small (640px)', value: 'sm' },
            { label: 'Medium (768px)', value: 'md' },
            { label: 'Large (1024px)', value: 'lg' },
            { label: 'XL (1280px)', value: 'xl' },
          ],
        },
        ...bgFields,
        padding_x: { type: 'number', label: 'Padding ngang', min: 0, max: 16 },
        padding_y: { type: 'number', label: 'Padding dọc', min: 0, max: 16 },
        content: { type: 'slot' },
      },
      defaultProps: { container: 'lg', background: { type: 'color', color: '#ffffff' }, padding_x: 4, padding_y: 4 },
      render: (props) => <AdminSection {...props} />,
    },

    // ── Hexagon-specific blocks ───────────────────────────────────────────────

    HexNavbar: {
      label: '🔹 Header / Thanh điều hướng',
      fields: {
        logoUrl: { type: 'text', label: 'URL Logo' },
        logoText: { type: 'text', label: 'Tên thương hiệu' },
        menuItems: {
          type: 'array', label: 'Menu',
          arrayFields: {
            label: { type: 'text', label: 'Tên mục', contentEditable: true },
            url: { type: 'text', label: 'Link' },
          },
          getItemSummary: (item) => item.label || 'Mục mới',
        },
        showLangSwitcher: { type: 'radio', label: 'Hiện chuyển ngôn ngữ', options: [{ label: 'Có', value: true }, { label: 'Không', value: false }] },
        ...bgFields,
        textColor: { type: 'text', label: 'Màu chữ menu' },
      },
      defaultProps: {
        logoUrl: 'https://beta.hexagon.xyz/assets/images/logo-hhc.png',
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
      render: (props) => <HexNavbar {...props} />,
    },

    HexHero: {
      label: '🔹 Hero Banner',
      fields: {
        tagline: { type: 'text', label: 'Tag nhỏ (vàng)', contentEditable: true },
        title: { type: 'text', label: 'Tiêu đề lớn', contentEditable: true },
        subtitle: { type: 'textarea', label: 'Mô tả ngắn', contentEditable: true },
        typewriterItems: {
          type: 'array',
          label: 'Danh sách đánh chữ tự động (Typewriter)',
          arrayFields: {
            text: { type: 'text', label: 'Dòng chữ' },
          },
          getItemSummary: (item) => item.text || 'Dòng chữ mới',
        },
        buttons: {
          type: 'array', label: 'Danh sách nút',
          arrayFields: {
            text: { type: 'text', label: 'Text nút', contentEditable: true },
            url: { type: 'text', label: 'Link' },
            style: {
              type: 'select', label: 'Kiểu nút',
              options: [
                { label: 'Primary (Gradient vàng)', value: 'primary' },
                { label: 'Secondary (Mờ)', value: 'secondary' },
                { label: 'Outline (Viền trắng)', value: 'outline' },
              ],
            },
          },
          getItemSummary: (item) => item.text || 'Nút mới',
        },
        imageUrl: { type: 'text', label: 'URL Hình ảnh bên phải' },
        scrollLabel: { type: 'text', label: 'Text cuộn xuống' },
        scrollUrl: { type: 'text', label: 'Link cuộn xuống' },
        ...bgFields,
        ...animateField,
      },
      defaultProps: {
        tagline: 'Công nghệ tương lai',
        title: 'HEXAGON Solutions',
        subtitle: 'Hexagon kiến tạo các giải pháp chuyển đổi số toàn diện, từ phần mềm, AI đến an ninh mạng, giúp doanh nghiệp bứt phá trong kỷ nguyên số.',
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
      render: (props) => <HexHero {...props} />,
    },

    HexAbout: {
      label: '🔹 Về chúng tôi',
      fields: {
        title: { type: 'text', label: 'Tiêu đề', contentEditable: true },
        description: { type: 'textarea', label: 'Mô tả', contentEditable: true },
        imageUrl: { type: 'text', label: 'URL Hình ảnh' },
        quoteText: { type: 'text', label: 'Quote nổi bật', contentEditable: true },
        quoteAuthor: { type: 'text', label: 'Tác giả quote', contentEditable: true },
        cards: {
          type: 'array', label: 'Các thẻ nội dung',
          arrayFields: {
            title: { type: 'text', label: 'Tiêu đề thẻ', contentEditable: true },
            content: { type: 'textarea', label: 'Nội dung thẻ', contentEditable: true },
          },
          getItemSummary: (item) => item.title || 'Thẻ mới',
        },
        accentColor: { type: 'text', label: 'Màu nhấn (hex)' },
        sectionId: { type: 'text', label: 'Section ID (anchor)' },
        ...bgFields,
      },
      defaultProps: {
        title: 'Về Hexagon',
        description: 'Hexagon Corporation – Công nghệ tiên phong, nơi chúng tôi không ngừng kiến tạo và đổi mới.',
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
      render: (props) => <HexAbout {...props} />,
    },

    HexServices: {
      label: '🔹 Lĩnh vực / Dịch vụ',
      fields: {
        title: { type: 'text', label: 'Tiêu đề', contentEditable: true },
        subtitle: { type: 'textarea', label: 'Mô tả ngắn', contentEditable: true },
        items: {
          type: 'array', label: 'Danh sách dịch vụ (tối đa 4)',
          arrayFields: {
            name: { type: 'text', label: 'Tên dịch vụ', contentEditable: true },
            description: { type: 'textarea', label: 'Mô tả', contentEditable: true },
            imageUrl: { type: 'text', label: 'URL ảnh nền card' },
            url: { type: 'text', label: 'Link chi tiết' },
          },
          getItemSummary: (item) => item.name || 'Dịch vụ mới',
        },
        accentColor: { type: 'text', label: 'Màu nhấn (hex)' },
        sectionId: { type: 'text', label: 'Section ID' },
        ...bgFields,
        ...animateField,
      },
      defaultProps: {
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
      render: (props) => <HexServices {...props} />,
    },

    HexNews: {
      label: '🔹 Tin tức',
      fields: {
        title: { type: 'text', label: 'Tiêu đề', contentEditable: true },
        subtitle: { type: 'textarea', label: 'Mô tả', contentEditable: true },
        readMoreLabel: { type: 'text', label: 'Nhãn nút Xem chi tiết' },
        viewAllLabel: { type: 'text', label: 'Nhãn nút Xem tất cả' },
        viewAllUrl: { type: 'text', label: 'Link trang Xem tất cả' },
        items: {
          type: 'array', label: 'Danh sách bài viết (tối đa 5)',
          arrayFields: {
            imageUrl: { type: 'text', label: 'URL ảnh' },
            title: { type: 'text', label: 'Tiêu đề bài', contentEditable: true },
            excerpt: { type: 'textarea', label: 'Tóm tắt', contentEditable: true },
            date: { type: 'text', label: 'Ngày đăng' },
            url: { type: 'text', label: 'Link bài viết' },
          },
          getItemSummary: (item) => item.title || 'Bài viết mới',
        },
        sectionId: { type: 'text', label: 'Section ID' },
        ...bgFields,
        ...animateField,
      },
      defaultProps: {
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
            url: 'https://beta.hexagon.xyz/vi/hoat-dong/khong-khi-tung-bung-tai-chuong-trinh-teambuilding-myh25-tai-ngoi-nha-hung-hau',
          },
          {
            imageUrl: 'https://beta-api.hexagon.xyz/uploads/myc-dong-hanh-1-1774341526337-531129418.jpg',
            title: 'Đồng hành cùng sinh viên Đại học Văn Hiến tại Ngày hội sinh viên',
            excerpt: 'Công ty Cổ phần Lục Giác hân hạnh được đồng hành cùng các bạn sinh viên khoa Công nghệ Thông tin - Đại học Văn Hiến trong chương trình “VHE Startup Devote’’.',
            date: '26 thg 6, 2026',
            url: 'https://beta.hexagon.xyz/vi/hoat-dong/dong-hanh-cung-sinh-vien-dai-hoc-van-hien-tai-ngay-hoi-sinh-vien',
          },
          {
            imageUrl: 'https://beta-api.hexagon.xyz/uploads/sam-tet-cong-nghe-1774343703442-177870451.jpg',
            title: 'Sắm tết công nghệ - Nâng cấp thiết bị, khởi đầu bứt phá',
            excerpt: 'Năm mới, vận hội mới, thiết bị cũng phải mới! Đầu tư cho công nghệ là đầu tư cho tương lai. Ghé ‘Lục Giác’ để chọn cho mình những siêu phẩm hỗ trợ đắc lực cho công việc và giải trí:',
            date: '26 thg 6, 2026',
            url: 'https://beta.hexagon.xyz/vi/su-kien/sam-tet-cong-nghe-nang-cap-thiet-bi-khoi-dau-but-pha',
          },
          {
            imageUrl: 'https://beta-api.hexagon.xyz/uploads/phattrienphanmem-1773133089066-706455049.png',
            title: 'Bài viết 4',
            excerpt: 'Bài viết 4',
            date: '25 thg 6, 2026',
            url: 'https://beta.hexagon.xyz/vi/tin-tuc/bai-viet-4',
          },
          {
            imageUrl: 'https://beta-api.hexagon.xyz/uploads/ai-phan-tich-du-lieu-1773291405655-118730188-1774254824600-959205718.jpg',
            title: 'Bài viết 5',
            excerpt: 'Bài viết 5',
            date: '25 thg 6, 2026',
            url: 'https://beta.hexagon.xyz/vi/tin-tuc/bai-viet-5',
          },
        ],
        sectionId: 'tin-tuc',
        background: { type: 'color', color: '#ffffff' },
        animate: true,
      },
      render: (props) => <HexNews {...props} />,
    },

    HexPartners: {
      label: '🔹 Đối tác (Logo Marquee)',
      fields: {
        title: { type: 'text', label: 'Tiêu đề', contentEditable: true },
        logos: {
          type: 'array', label: 'Danh sách logo',
          arrayFields: {
            imageUrl: { type: 'text', label: 'URL Logo' },
            alt: { type: 'text', label: 'Tên đối tác' },
          },
          getItemSummary: (item) => item.alt || 'Đối tác',
        },
        ...bgFields,
        ...animateField,
      },
      defaultProps: {
        title: 'Các đối tác liên kết',
        logos: [
          { imageUrl: 'https://webdemo.hexagon.xyz/medias/Logo Khoi E.png', alt: 'Khối E' },
          { imageUrl: 'https://webdemo.hexagon.xyz/medias/Logo Khoi C.png', alt: 'Khối C' },
          { imageUrl: 'https://webdemo.hexagon.xyz/medias/Logo Khoi D.png', alt: 'Khối D' },
          { imageUrl: 'https://webdemo.hexagon.xyz/medias/Happy Food.png', alt: 'Happy Food' },
          { imageUrl: 'https://webdemo.hexagon.xyz/medias/B.png', alt: 'Binh Minh' },
          { imageUrl: 'https://webdemo.hexagon.xyz/medias/Logo Khoi F.png', alt: 'Khối F' },
        ],
        background: { type: 'gradient', from: '#0f826b', to: '#86efac', direction: 'to bottom' },
        animate: true,
      },
      render: (props) => <HexPartners {...props} />,
    },

    HexContact: {
      label: '🔹 Liên hệ + Bản đồ',
      fields: {
        title: { type: 'text', label: 'Tiêu đề', contentEditable: true },
        description: { type: 'textarea', label: 'Mô tả', contentEditable: true },
        address: { type: 'text', label: 'Địa chỉ', contentEditable: true },
        email: { type: 'text', label: 'Email' },
        phone: { type: 'text', label: 'Hotline' },
        socialLinks: {
          type: 'array', label: 'Mạng xã hội',
          arrayFields: {
            platform: { type: 'text', label: 'Tên nền tảng' },
            url: { type: 'text', label: 'Link' },
          },
          getItemSummary: (item) => item.platform || 'Social',
        },
        mapEmbed: { type: 'text', label: 'Google Maps embed URL' },
        sectionId: { type: 'text', label: 'Section ID' },
        ...bgFields,
      },
      defaultProps: {
        title: 'Liên hệ với chúng tôi',
        description: 'Sẵn sàng cho dự án tiếp theo? Đội ngũ chuyên gia của Hexagon luôn ở đây để lắng nghe.',
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
      render: (props) => <HexContact {...props} />,
    },

    HexStats: {
      label: '🔹 Số liệu thống kê',
      fields: {
        items: {
          type: 'array', label: 'Số liệu',
          arrayFields: {
            number: { type: 'text', label: 'Con số', contentEditable: true },
            label: { type: 'text', label: 'Mô tả', contentEditable: true },
            icon: { type: 'text', label: 'Icon (emoji)' },
          },
          getItemSummary: (item) => item.label || 'Số liệu',
        },
        textColor: { type: 'text', label: 'Màu chữ' },
        ...bgFields,
        ...animateField,
      },
      defaultProps: {
        items: [
          { number: '50+', label: 'Dự án hoàn thành', icon: '🚀' },
          { number: '30+', label: 'Đối tác tin cậy', icon: '🤝' },
          { number: '5+', label: 'Năm kinh nghiệm', icon: '📅' },
          { number: '99%', label: 'Khách hàng hài lòng', icon: '⭐' },
        ],
        textColor: '#ffffff',
        background: { type: 'gradient', from: '#1A6B49', to: '#41b67d', direction: 'to right' },
        animate: true,
      },
      render: (props) => <HexStats {...props} />,
    },

    HexBanner: {
      label: '🔹 Banner CTA',
      fields: {
        title: { type: 'text', label: 'Tiêu đề', contentEditable: true },
        subtitle: { type: 'textarea', label: 'Mô tả', contentEditable: true },
        buttons: {
          type: 'array', label: 'Danh sách nút',
          arrayFields: {
            text: { type: 'text', label: 'Text nút', contentEditable: true },
            url: { type: 'text', label: 'Link' },
            style: {
              type: 'select', label: 'Kiểu nút',
              options: [
                { label: 'Vàng (primary)', value: 'primary' },
                { label: 'Viền trắng (outline)', value: 'outline' },
              ],
            },
          },
          getItemSummary: (item) => item.text || 'Nút mới',
        },
        textColor: { type: 'text', label: 'Màu chữ' },
        ...bgFields,
        ...animateField,
      },
      defaultProps: {
        title: 'Sẵn sàng bứt phá cùng Hexagon?',
        subtitle: 'Liên hệ ngay hôm nay để nhận tư vấn miễn phí từ đội ngũ chuyên gia.',
        buttons: [
          { text: 'Liên hệ ngay', url: '#lien-he', style: 'primary' },
        ],
        textColor: '#ffffff',
        background: { type: 'gradient', from: '#1A6B49', to: '#41b67d', direction: 'to right' },
        animate: true,
      },
      render: (props) => <HexBanner {...props} />,
    },

    HexFooter: {
      label: '🔹 Footer',
      fields: {
        companyName: { type: 'text', label: 'Tên công ty', contentEditable: true },
        tagline: { type: 'text', label: 'Slogan', contentEditable: true },
        copyright: { type: 'text', label: 'Copyright text' },
        links: {
          type: 'array', label: 'Links',
          arrayFields: {
            label: { type: 'text', label: 'Tên link', contentEditable: true },
            url: { type: 'text', label: 'Đường dẫn' },
          },
          getItemSummary: (item) => item.label || 'Link',
        },
        socialLinks: {
          type: 'array', label: 'Mạng xã hội',
          arrayFields: {
            platform: { type: 'text', label: 'Tên' },
            icon: {
              type: 'select', label: 'Icon',
              options: [
                { label: 'Facebook', value: 'facebook' },
                { label: 'LinkedIn', value: 'linkedin' },
                { label: 'YouTube', value: 'youtube' },
              ],
            },
            url: { type: 'text', label: 'Link' },
          },
          getItemSummary: (item) => item.platform || 'Social',
        },
        textColor: { type: 'text', label: 'Màu chữ phụ' },
        ...bgFields,
      },
      defaultProps: {
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
      render: (props) => <HexFooter {...props} />,
    },

    HexServicePage: {
      label: '🔹 Chi tiết Lĩnh vực (Service Page)',
      fields: {
        title: { type: 'text', label: 'Tiêu đề lớn', contentEditable: true },
        description: { type: 'textarea', label: 'Mô tả ngắn', contentEditable: true },
        image: { type: 'text', label: 'URL hình ảnh minh họa' },
        ctaText: { type: 'text', label: 'Text nút CTA', contentEditable: true },
        ctaUrl: { type: 'text', label: 'Link nút CTA' },
        solutionsTitle: { type: 'text', label: 'Tiêu đề Giải pháp nổi bật', contentEditable: true },
        solutionsItems: {
          type: 'array',
          label: 'Danh sách giải pháp',
          arrayFields: {
            title: { type: 'text', label: 'Tiêu đề giải pháp', contentEditable: true },
            content: { type: 'textarea', label: 'Nội dung chi tiết', contentEditable: true },
          },
          getItemSummary: (item) => item.title || 'Giải pháp mới',
        },
        processTitle: { type: 'text', label: 'Tiêu đề Quy trình thực hiện', contentEditable: true },
        processDescription: { type: 'text', label: 'Mô tả Quy trình', contentEditable: true },
        processItems: {
          type: 'array',
          label: 'Các bước quy trình',
          arrayFields: {
            title: { type: 'text', label: 'Tên bước', contentEditable: true },
            content: { type: 'textarea', label: 'Mô tả bước (nếu có)', contentEditable: true },
          },
          getItemSummary: (item) => item.title || 'Bước mới',
        },
        readyTitle: { type: 'text', label: 'Tiêu đề Sẵn sàng triển khai?', contentEditable: true },
        readyDescription: { type: 'textarea', label: 'Mô tả Sẵn sàng triển khai', contentEditable: true },
        readyCta1: { type: 'text', label: 'Text nút 1', contentEditable: true },
        readyCta1Url: { type: 'text', label: 'Link nút 1' },
        readyCta2: { type: 'text', label: 'Text nút 2', contentEditable: true },
        readyCta2Url: { type: 'text', label: 'Link nút 2' },
        lang: {
          type: 'select', label: 'Ngôn ngữ',
          options: [
            { label: 'Tiếng Việt', value: 'vi' },
            { label: 'English', value: 'en' },
          ],
        },
      },
      defaultProps: {
        title: 'Giải pháp công nghệ',
        description: 'Phát triển và triển khai các giải pháp phần mềm tùy chỉnh...',
        image: 'https://beta-api.hexagon.xyz/uploads/dv-3-1782723514885-362139381.jpg',
        ctaText: 'Liên hệ tư vấn',
        ctaUrl: '/#lien-he',
        solutionsTitle: 'Giải pháp nổi bật',
        solutionsItems: [
          { title: 'Phát triển phần mềm theo yêu cầu', content: 'Thiết kế và xây dựng phần mềm...' },
          { title: 'Giải pháp chuyển đổi số doanh nghiệp', content: 'Tích hợp công nghệ vào toàn bộ hoạt động...' },
          { title: 'Xây dựng hệ thống nền tảng & tích hợp', content: 'Phát triển hệ thống trung tâm...' }
        ],
        processTitle: 'Quy trình thực hiện',
        processDescription: 'Quy trình chuyên nghiệp, minh bạch và hiệu quả.',
        processItems: [
          { title: 'Khảo sát & phân tích yêu cầu', content: '' },
          { title: 'Thiết kế giải pháp & kiến trúc hệ thống', content: '' },
          { title: 'Phát triển & Thử nghiệm', content: '' },
          { title: 'Triển khai & Bảo trì', content: '' }
        ],
        readyTitle: 'Sẵn sàng triển khai?',
        readyDescription: 'Đừng để công nghệ làm rào cản. Hãy biến nó thành lợi thế cạnh tranh của bạn cùng Hexagon.',
        readyCta1: 'Về trang chủ',
        readyCta1Url: '/#trang-chu',
        readyCta2: 'Liên hệ ngay',
        readyCta2Url: '/#lien-he',
        lang: 'vi',
      },
      render: (props) => <HexServicePage {...props} />,
    },

    HexArticlePage: {
      label: '🔹 Chi tiết Bài viết (Article Page)',
      fields: {
        title: { type: 'text', label: 'Tiêu đề bài viết', contentEditable: true },
        date: { type: 'text', label: 'Ngày đăng', contentEditable: true },
        category: { type: 'text', label: 'Chuyên mục', contentEditable: true },
        coverImage: { type: 'text', label: 'URL hình ảnh bìa (Cover Image)' },
        contentHtml: { type: 'textarea', label: 'Nội dung HTML bài viết' },
        lang: {
          type: 'select',
          label: 'Ngôn ngữ',
          options: [
            { label: 'Tiếng Việt', value: 'vi' },
            { label: 'English', value: 'en' },
          ],
        },
        relatedTitle: { type: 'text', label: 'Tiêu đề bài viết liên quan', contentEditable: true },
        relatedItems: {
          type: 'array',
          label: 'Danh sách bài viết liên quan',
          arrayFields: {
            title: { type: 'text', label: 'Tiêu đề bài viết', contentEditable: true },
            imageUrl: { type: 'text', label: 'URL hình ảnh' },
            date: { type: 'text', label: 'Ngày đăng', contentEditable: true },
            url: { type: 'text', label: 'Link bài viết' },
          },
          getItemSummary: (item) => item.title || 'Bài viết mới',
        },
      },
      defaultProps: {
        title: 'Tiêu đề bài viết mẫu',
        date: '26 tháng 6, 2026',
        category: 'Hoạt động',
        coverImage: '',
        contentHtml: '<p>Đây là nội dung bài viết mẫu...</p>',
        lang: 'vi',
        relatedTitle: 'Bài viết liên quan',
        relatedItems: [],
      },
      render: (props) => <HexArticlePage {...props} />,
    },
  },

  // Sidebar categories
  categoryGroups: [
    { title: 'Cơ bản', components: ['Heading', 'Text', 'Image', 'Section'] },
    { title: 'Hexagon Blocks', components: ['HexNavbar', 'HexHero', 'HexAbout', 'HexServices', 'HexNews', 'HexPartners', 'HexContact', 'HexStats', 'HexBanner', 'HexFooter', 'HexServicePage', 'HexArticlePage'] },
  ],

  // Root config
  root: {
    render: ({ children }) => (
      <div className="min-h-screen">{children}</div>
    ),
  },
};

export default puckConfig;
