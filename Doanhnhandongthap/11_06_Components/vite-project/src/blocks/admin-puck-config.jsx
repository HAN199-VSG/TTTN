import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SponsorsMarquee from '../components/SponsorsMarquee';
import AboutSpotlight from '../components/AboutSpotlight';
import FeaturesGrid from '../components/FeaturesGrid';
import StatsCounter from '../components/StatsCounter';
import NewsGrid from '../components/NewsGrid';
import TimelineBlock from '../components/TimelineBlock';
import OrgChartBlock from '../components/OrgChartBlock';
import MembersDirectory from '../components/MembersDirectory';

// Thiết kế bo góc chiếc lá bất đối xứng mẫu
const leafStyle = {
  borderTopLeftRadius: '16px',
  borderTopRightRadius: '100px',
  borderBottomRightRadius: '16px',
  borderBottomLeftRadius: '100px',
};

// Component Hero hiển thị cả ở chế độ chỉnh sửa và hiển thị thực tế
const AdminHero = ({ 
  title = "Sen Hồng", 
  titleColor = "#FAF390",
  titleSize = "xl",
  subtitle = "LAN TỎA GIÁ TRỊ ĐẤT",
  subtitleColor = "#ffffff",
  subtitleSize = "md",
  description = "",
  descriptionColor = "#f1f5f9",
  contentBoxBg = "rgba(255, 255, 255, 0.19)",
  contentBoxStyle = "leaf", // 'standard' | 'leaf' | 'pill'
  contentBoxRadius = 20,
  contentBoxPadding = 48,
  layout = {},
  background = {},
  buttons = []
}) => {
  const alignClass = layout.align === 'left' ? 'text-left' : layout.align === 'right' ? 'text-right' : 'text-center';
  const alignFlex = layout.align === 'left' ? 'justify-start' : layout.align === 'right' ? 'justify-end' : 'justify-center';
  const alignItems = layout.align === 'left' ? 'items-start' : layout.align === 'right' ? 'items-end' : 'items-center';

  const getBackgroundStyle = () => {
    const bg = background || {};
    if (bg.type === 'gradient') {
      return { background: `linear-gradient(${bg.direction || 'to bottom right'}, ${bg.fromColor || '#0b5077'}, ${bg.toColor || '#081d33'})` };
    }
    if (bg.type === 'image' && bg.bg_image) {
      return { backgroundImage: `url('${bg.bg_image}')`, backgroundSize: 'cover', backgroundPosition: 'center' };
    }
    return { backgroundColor: bg.color || '#0B5077' };
  };

  const getTitleSizeClass = (size) => {
    switch (size) {
      case 'sm': return 'text-2xl md:text-3xl font-bold';
      case 'md': return 'text-3xl md:text-5xl font-extrabold';
      case 'lg': return 'text-4xl md:text-6xl font-black';
      case 'xl': return 'text-5xl md:text-7xl lg:text-[80px] font-black leading-[1.1]';
      default: return 'text-4xl md:text-6xl font-black';
    }
  };

  const getSubtitleSizeClass = (size) => {
    switch (size) {
      case 'sm': return 'text-xs md:text-sm tracking-widest';
      case 'md': return 'text-sm md:text-base tracking-widest';
      case 'lg': return 'text-base md:text-lg tracking-widest';
      default: return 'text-sm md:text-base tracking-widest';
    }
  };

  // Xác định bo góc của hộp kính mờ
  const getBoxStyle = () => {
    const baseStyle = {
      backgroundColor: contentBoxBg,
      padding: `${contentBoxPadding}px`,
      backdropFilter: 'blur(9px)',
      WebkitBackdropFilter: 'blur(9px)',
      outline: '1px solid rgba(255, 255, 255, 0.32)',
      outlineOffset: '-1px',
      boxShadow: '0 20px 50px rgba(0, 0, 0, 0.25)'
    };
    
    if (contentBoxStyle === 'leaf') {
      return { ...baseStyle, ...leafStyle };
    }
    if (contentBoxStyle === 'pill') {
      return { ...baseStyle, borderRadius: '50px' };
    }
    return { ...baseStyle, borderRadius: `${contentBoxRadius}px` };
  };

  return (
    <section className="relative min-h-[95vh] flex items-center pt-24 pb-32 px-4 overflow-hidden select-none" style={getBackgroundStyle()}>
      {/* Ribbon background blend overlay effect */}
      <div className="absolute inset-0 bg-[url('https://webdemo.hexagon.xyz/medias/hieuunghero.webp')] bg-cover bg-center mix-blend-screen opacity-15 pointer-events-none" />
      
      {/* Elegant bottom blur overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#a8dfff]/50 to-transparent pointer-events-none" />

      <div className={`relative mx-auto max-w-[1400px] w-full flex flex-col ${alignItems} z-10`}>
        
        {/* Glass Box Card */}
        <div 
          className={`w-full max-w-2xl ${alignClass} transition-all duration-500`}
          style={getBoxStyle()}
        >
          {/* Subtitle */}
          {subtitle && (
            <p 
              className={`${getSubtitleSizeClass(subtitleSize)} uppercase font-bold mb-4`}
              style={{ color: subtitleColor }}
            >
              {subtitle}
            </p>
          )}

          {/* Title */}
          {title && (
            <h1 
              className={`${getTitleSizeClass(titleSize)} mb-6 select-text`}
              style={{ 
                color: titleColor,
                textShadow: '0 0 12px rgba(255, 215, 0, 0.45)',
                background: `linear-gradient(135deg, #ffffff 40%, ${titleColor} 100%)`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              {title}
            </h1>
          )}

          {/* Description */}
          {description && (
            <p 
              className="text-xs md:text-sm leading-relaxed mb-8 opacity-90 select-text font-medium"
              style={{ color: descriptionColor }}
            >
              {description}
            </p>
          )}

          {/* Buttons */}
          {buttons && buttons.length > 0 && (
            <div className={`flex flex-wrap ${alignFlex} gap-4`}>
              {buttons.map((btn, idx) => (
                <a 
                  key={idx} 
                  href={btn.url || '#'} 
                  className="inline-flex items-center gap-2 px-8 py-4 text-xs md:text-sm font-bold shadow-md hover:scale-105 active:scale-95 hover:shadow-lg transition-all duration-300 select-none cursor-pointer"
                  style={{
                    backgroundColor: btn.btnBg || '#0072ff',
                    color: btn.btnTextColor || '#ffffff',
                    borderRadius: `${btn.btnRadius || 30}px`,
                    boxShadow: '0 10px 25px rgba(0, 114, 255, 0.3)'
                  }}
                >
                  {btn.text}
                </a>
              ))}
            </div>
          )}
        </div>

      </div>
    </section>
  );
};

// Định nghĩa cấu hình chung cho background
const sharedBackgroundFields = {
  type: {
    type: 'select', 
    label: 'Loại nền',
    options: [
      { label: 'Màu đơn', value: 'color' },
      { label: 'Gradient', value: 'gradient' },
      { label: 'Hình ảnh', value: 'image' }
    ]
  },
  color: { type: 'text', label: 'Màu đơn (Ví dụ: #ffffff)' },
  fromColor: { type: 'text', label: 'Màu bắt đầu Gradient' },
  toColor: { type: 'text', label: 'Màu kết thúc Gradient' },
  direction: { type: 'text', label: 'Hướng Gradient (Ví dụ: to bottom)', default: 'to bottom' },
  bg_image: { type: 'text', label: 'URL Ảnh nền' }
};

export const puckConfig = {
  components: {
    
    // 1. HERO BLOCK (Cụm Sen Hồng)
    Hero: {
      label: 'Cụm Sen Hồng (Hero)',
      fields: {
        title: { type: 'text', label: 'Chữ tiêu đề (Title)' },
        titleColor: { type: 'text', label: 'Màu tiêu đề', default: '#FAF390' },
        titleSize: {
          type: 'select', label: 'Kích thước tiêu đề',
          options: [
            { label: 'Nhỏ', value: 'sm' },
            { label: 'Vừa', value: 'md' },
            { label: 'Lớn', value: 'lg' },
            { label: 'Rất lớn', value: 'xl' }
          ]
        },
        subtitle: { type: 'text', label: 'Tiêu đề nhỏ (Subtitle)' },
        subtitleColor: { type: 'text', label: 'Màu tiêu đề nhỏ', default: '#ffffff' },
        subtitleSize: {
          type: 'select', label: 'Kích thước tiêu đề nhỏ',
          options: [
            { label: 'Nhỏ', value: 'sm' },
            { label: 'Vừa', value: 'md' },
            { label: 'Lớn', value: 'lg' }
          ]
        },
        description: { type: 'textarea', label: 'Đoạn văn mô tả (Description)' },
        descriptionColor: { type: 'text', label: 'Màu mô tả', default: '#f1f5f9' },
        contentBoxBg: { type: 'text', label: 'Nền kính mờ (rgba)', default: 'rgba(255,255,255,0.19)' },
        contentBoxStyle: {
          type: 'select', label: 'Kiểu hộp chứa',
          options: [
            { label: 'Bo góc chiếc lá Sen Hồng', value: 'leaf' },
            { label: 'Bo tròn đều', value: 'standard' },
            { label: 'Hình viên thuốc (Pill)', value: 'pill' }
          ]
        },
        contentBoxRadius: { type: 'number', label: 'Độ bo góc (nếu chọn Bo tròn đều)', default: 20 },
        contentBoxPadding: { type: 'number', label: 'Padding trong hộp (px)', default: 48 },
        layout: {
          type: 'object', label: 'Vị trí cụm chữ',
          objectFields: {
            align: {
              type: 'select', label: 'Căn lề',
              options: [
                { label: 'Trái', value: 'left' },
                { label: 'Giữa', value: 'center' },
                { label: 'Phải', value: 'right' }
              ]
            }
          }
        },
        background: {
          type: 'object', label: 'Cấu hình nền',
          objectFields: sharedBackgroundFields
        },
        buttons: {
          type: 'array',
          label: 'Danh sách nút bấm',
          arrayFields: {
            text: { type: 'text', label: 'Chữ trên nút' },
            url: { type: 'text', label: 'Đường dẫn (URL)' },
            btnBg: { type: 'text', label: 'Màu nền nút' },
            btnTextColor: { type: 'text', label: 'Màu chữ nút' },
            btnRadius: { type: 'number', label: 'Bo góc nút' }
          }
        }
      },
      defaultProps: {
        title: 'Sen Hồng',
        titleColor: '#FAF390',
        titleSize: 'xl',
        subtitle: 'LAN TỎA GIÁ TRỊ ĐẤT',
        subtitleColor: '#ffffff',
        subtitleSize: 'md',
        description: 'CLB Doanh nhân Đồng Tháp tại TPHCM quy tụ những người con quê hương...',
        descriptionColor: '#f1f5f9',
        contentBoxBg: 'rgba(255, 255, 255, 0.19)',
        contentBoxStyle: 'leaf',
        contentBoxPadding: 48,
        layout: { align: 'left' },
        background: { type: 'image', bg_image: 'https://webdemo.hexagon.xyz/medias/hieuunghero.webp' },
        buttons: [{ text: 'Tham gia cộng đồng', url: '#', btnBg: '#0072ff', btnTextColor: '#ffffff', btnRadius: 30 }]
      },
      render: (props) => <AdminHero {...props} />
    },

    // 2. SPONSORS MARQUEE (Nhà tài trợ)
    SponsorsMarquee: {
      label: 'Đối tác & Nhà tài trợ',
      fields: {
        title: { type: 'text', label: 'Tiêu đề khối' },
        speed: { type: 'number', label: 'Thời gian chạy 1 vòng (giây - càng nhỏ chạy càng nhanh)', default: 25 },
        items: {
          type: 'array',
          label: 'Danh sách Logo đối tác',
          arrayFields: {
            name: { type: 'text', label: 'Tên đối tác' },
            logo: { type: 'text', label: 'URL Ảnh Logo đối tác' }
          },
          getItemSummary: (item) => item.name || 'Đối tác mới'
        }
      },
      defaultProps: {
        title: 'ĐỐI TÁC & NHÀ TÀI TRỢ TIÊU BIỂU',
        speed: 25,
        items: []
      },
      render: (props) => <SponsorsMarquee {...props} />
    },

    // 3. ABOUT SPOTLIGHT (Giới thiệu & Thường trực tiêu biểu)
    AboutSpotlight: {
      label: 'Giới thiệu & Ban Thường Trực',
      fields: {
        sectionTitle: { type: 'text', label: 'Tiêu đề lớn' },
        sectionSubtitle: { type: 'text', label: 'Tiêu đề phụ' },
        description: { type: 'textarea', label: 'Đoạn văn giới thiệu' },
        imageCorner: { type: 'text', label: 'URL Ảnh hoa văn góc' },
        spotlightTitle: { type: 'text', label: 'Tiêu đề Slider nhân sự' },
        members: {
          type: 'array',
          label: 'Danh sách Thường trực BCH',
          arrayFields: {
            name: { type: 'text', label: 'Họ và tên' },
            role: { type: 'text', label: 'Chức vụ' },
            company: { type: 'text', label: 'Doanh nghiệp' },
            avatar: { type: 'text', label: 'URL Ảnh đại diện' }
          },
          getItemSummary: (item) => `${item.name} - ${item.role}`
        }
      },
      defaultProps: {
        sectionTitle: 'VỀ CHÚNG TÔI',
        sectionSubtitle: 'KẾT NỐI DOANH NHÂN - LAN TỎA NGHĨA TÌNH',
        description: '',
        imageCorner: 'https://webdemo.hexagon.xyz/medias/hoavanvct.png',
        spotlightTitle: 'THƯỜNG TRỰC BCH TIÊU BIỂU',
        members: []
      },
      render: (props) => <AboutSpotlight {...props} />
    },

    // 4. FEATURES GRID (Các Ban Chuyên Môn)
    FeaturesGrid: {
      label: 'Các Ban Chuyên Môn',
      fields: {
        sectionTitle: { type: 'text', label: 'Tiêu đề lớn' },
        sectionSubtitle: { type: 'text', label: 'Tiêu đề phụ' },
        items: {
          type: 'array',
          label: 'Danh sách các Ban chuyên môn',
          arrayFields: {
            title: { type: 'text', label: 'Tên Ban' },
            icon: { type: 'text', label: 'URL Ảnh Icon' },
            btnText: { type: 'text', label: 'Chữ trên nút', default: 'Xem hoạt động' },
            btnBg: { type: 'text', label: 'Màu nền nút' },
            btnTextColor: { type: 'text', label: 'Màu chữ nút' },
            btnRadius: { type: 'number', label: 'Bo góc nút', default: 24 }
          },
          getItemSummary: (item) => item.title || 'Ban mới'
        }
      },
      defaultProps: {
        sectionTitle: 'CÁC BAN CHUYÊN MÔN',
        sectionSubtitle: 'CƠ CẤU HOẠT ĐỘNG CHUYÊN NGHIỆP HIỆU QUẢ',
        items: []
      },
      render: (props) => <FeaturesGrid {...props} />
    },

    // 5. STATS COUNTER (Hành trình kiến tạo)
    StatsCounter: {
      label: 'Số liệu Thống kê',
      fields: {
        sectionTitle: { type: 'text', label: 'Tiêu đề lớn' },
        items: {
          type: 'array',
          label: 'Danh sách chỉ số thống kê',
          arrayFields: {
            number: { type: 'number', label: 'Số lượng' },
            suffix: { type: 'text', label: 'Ký tự đuôi (Ví dụ: + hoặc tỷ)' },
            label: { type: 'text', label: 'Mô tả chỉ số' }
          },
          getItemSummary: (item) => `${item.number}${item.suffix || ''} - ${item.label || ''}`
        }
      },
      defaultProps: {
        sectionTitle: 'HÀNH TRÌNH KIẾN TẠO',
        items: []
      },
      render: (props) => <StatsCounter {...props} />
    },

    // 6. NEWS GRID (Tin tức & Sự kiện)
    NewsGrid: {
      label: 'Tin tức & Sự kiện',
      fields: {
        sectionTitle: { type: 'text', label: 'Tiêu đề lớn' },
        items: {
          type: 'array',
          label: 'Danh sách bài viết (Hiển thị tối đa 5 bài theo bố cục 2+3)',
          arrayFields: {
            title: { type: 'text', label: 'Tiêu đề bài viết' },
            desc: { type: 'textarea', label: 'Tóm tắt nội dung' },
            image: { type: 'text', label: 'URL Ảnh bài viết' },
            category: { type: 'text', label: 'Thể loại (Badge)' },
            date: { type: 'text', label: 'Ngày đăng (Ví dụ: 24 Tháng 06, 2026)' }
          },
          getItemSummary: (item) => item.title || 'Bài viết mới'
        }
      },
      defaultProps: {
        sectionTitle: 'TIN TỨC & SỰ KIỆN NỔI BẬT',
        items: []
      },
      render: (props) => <NewsGrid {...props} />
    },

    // 7. TIMELINE BLOCK (Dòng thời gian - Trang Giới thiệu)
    TimelineBlock: {
      label: 'Tiến trình Lịch sử (Timeline)',
      fields: {
        sectionTitle: { type: 'text', label: 'Tiêu đề lớn' },
        sectionSubtitle: { type: 'text', label: 'Tiêu đề phụ' },
        items: {
          type: 'array',
          label: 'Danh sách các cột mốc lịch sử',
          arrayFields: {
            year: { type: 'text', label: 'Năm mốc' },
            title: { type: 'text', label: 'Tiêu đề mốc' },
            desc: { type: 'textarea', label: 'Chi tiết sự kiện' },
            image: { type: 'text', label: 'URL Ảnh tư liệu' }
          },
          getItemSummary: (item) => `${item.year} - ${item.title}`
        }
      },
      defaultProps: {
        sectionTitle: 'LỊCH SỬ HÌNH THÀNH & CỘT MỐC',
        sectionSubtitle: 'HÀNH TRÌNH TỪ NHỮNG BƯỚC CHÂN ĐẦU TIÊN',
        items: []
      },
      render: (props) => <TimelineBlock {...props} />
    },

    // 8. ORG CHART BLOCK (Cơ cấu tổ chức - Trang Giới thiệu)
    OrgChartBlock: {
      label: 'Sơ đồ Tổ chức (Org Chart)',
      fields: {
        sectionTitle: { type: 'text', label: 'Tiêu đề lớn' },
        sectionSubtitle: { type: 'text', label: 'Tiêu đề phụ' },
        blocks: {
          type: 'array',
          label: 'Danh sách Khối nhân sự lớn (Cột)',
          arrayFields: {
            title: { type: 'text', label: 'Tên khối' },
            description: { type: 'textarea', label: 'Mô tả ngắn khối' },
            members: {
              type: 'array',
              label: 'Thành viên thuộc khối này',
              arrayFields: {
                name: { type: 'text', label: 'Họ và tên' },
                role: { type: 'text', label: 'Chức danh trong CLB' },
                company: { type: 'text', label: 'Tên Doanh nghiệp' },
                avatar: { type: 'text', label: 'URL Ảnh đại diện' }
              },
              getItemSummary: (item) => `${item.name} - ${item.role}`
            }
          },
          getItemSummary: (item) => item.title || 'Khối mới'
        }
      },
      defaultProps: {
        sectionTitle: 'SƠ ĐỒ TỔ CHỨC & BỘ MÁY ĐIỀU HÀNH',
        sectionSubtitle: 'SỰ PHÂN NHIỆM CHUYÊN NGHIỆP - RÕ RÀNG - CHẤT LƯỢNG',
        blocks: []
      },
      render: (props) => <OrgChartBlock {...props} />
    },

    // 9. MEMBERS DIRECTORY (Danh bạ hội viên - Trang Hội viên)
    MembersDirectory: {
      label: 'Danh bạ Hội viên',
      fields: {
        sectionTitle: { type: 'text', label: 'Tiêu đề lớn' },
        sectionSubtitle: { type: 'text', label: 'Tiêu đề phụ' },
        categories: {
          type: 'array',
          label: 'Danh mục phân loại (Lọc)',
          arrayFields: {
            id: { type: 'text', label: 'Mã phân loại (Ví dụ: vip, gold)' },
            name: { type: 'text', label: 'Tên hiển thị' }
          },
          getItemSummary: (item) => item.name || 'Danh mục mới'
        },
        members: {
          type: 'array',
          label: 'Danh sách tất cả Hội viên',
          arrayFields: {
            name: { type: 'text', label: 'Họ và tên' },
            company: { type: 'text', label: 'Tên Doanh nghiệp' },
            role: { type: 'text', label: 'Chức danh doanh nghiệp (Ví dụ: Giám đốc)' },
            category: { type: 'text', label: 'Mã phân loại thẻ (Khớp với mã ở trên: vip/gold/silver...)' },
            industry: { type: 'text', label: 'Ngành nghề hoạt động' },
            phone: { type: 'text', label: 'Số điện thoại' },
            email: { type: 'text', label: 'Email liên hệ' },
            avatar: { type: 'text', label: 'URL Ảnh chân dung' }
          },
          getItemSummary: (item) => `${item.name} - ${item.company}`
        }
      },
      defaultProps: {
        sectionTitle: 'MẠNG LƯỚI DOANH NGHIỆP HỘI VIÊN',
        sectionSubtitle: 'TRA CỨU & KẾT NỐI HỢP TÁC THƯƠNG MẠI CHÉO',
        categories: [
          { id: "all", name: "Tất cả Hội viên" },
          { id: "vip", name: "Hội viên VIP" },
          { id: "diamond", name: "Hội viên Kim cương" },
          { id: "gold", name: "Hội viên Vàng" },
          { id: "silver", name: "Hội viên Bạc" }
        ],
        members: []
      },
      render: (props) => <MembersDirectory {...props} />
    }

  },

  // Phân loại gom nhóm bên Sidebar của Puck Editor
  categoryGroups: [
    { title: 'Nền tảng & Cấu trúc', components: ['Hero', 'SponsorsMarquee', 'AboutSpotlight'] },
    { title: 'Mảng chuyên môn & Số liệu', components: ['FeaturesGrid', 'StatsCounter', 'NewsGrid'] },
    { title: 'Trang Giới thiệu & Hội viên', components: ['TimelineBlock', 'OrgChartBlock', 'MembersDirectory'] }
  ],

  // Cấu hình ROOT để chỉnh sửa Header & Footer trực quan
  root: {
    fields: {
      logoUrl: { type: 'text', label: 'URL Logo ảnh', default: 'https://webdemo.hexagon.xyz/medias/logo 2.png' },
      logoTexts: {
        type: 'array',
        label: 'Tên CLB viết trên Logo (Mỗi dòng một ô)',
        arrayFields: {
          text: { type: 'text', label: 'Dòng chữ' }
        },
        getItemSummary: (item) => item.text || 'Dòng chữ trống'
      },
      menu: {
        type: 'array',
        label: 'Danh sách thanh Menu chính',
        arrayFields: {
          label: { type: 'text', label: 'Tên Tiếng Việt' },
          labelEn: { type: 'text', label: 'Tên Tiếng Anh (English)' },
          url: { type: 'text', label: 'Đường dẫn liên kết (URL)' }
        },
        getItemSummary: (item) => item.label || 'Menu item'
      },
      footerContact: {
        type: 'object',
        label: 'Thông tin liên hệ dưới Footer',
        objectFields: {
          address: { type: 'text', label: 'Địa chỉ trụ sở' },
          email: { type: 'text', label: 'Hộp thư Email' },
          phone: { type: 'text', label: 'Đường dây nóng (Phone)' },
          facebook: { type: 'text', label: 'Link trang Facebook' },
          youtube: { type: 'text', label: 'Link kênh Youtube' },
          website: { type: 'text', label: 'Tên miền Website' }
        }
      }
    },
    defaultProps: {
      logoUrl: 'https://webdemo.hexagon.xyz/medias/logo 2.png',
      logoTexts: [
        { text: 'CÂU LẠC BỘ DOANH NHÂN ĐỒNG THÁP' },
        { text: 'TẠI TP.HỒ CHÍ MINH' }
      ],
      menu: [
        { label: 'Trang chủ', labelEn: 'Home', url: '/' },
        { label: 'Giới thiệu', labelEn: 'About Us', url: '/gioi-thieu' },
        { label: 'Hội viên', labelEn: 'Members', url: '/hoi-vien' }
      ],
      footerContact: {
        address: 'Số 123 Đường số 4, Khu đô thị Sala, Quận 2, TP. Hồ Chí Minh',
        email: 'lienhe@doanhnhandongthap.vn',
        phone: '0909.123.456',
        facebook: 'https://facebook.com/doanhnhandongthaptphcm',
        youtube: 'https://youtube.com',
        website: 'www.doanhnhandongthap.vn'
      }
    },
    render: ({ children, logoUrl, logoTexts = [], menu = [], footerContact = {} }) => {
      const texts = logoTexts ? logoTexts.map(t => typeof t === 'string' ? t : (t.text || '')) : [];
      return (
        <div className="min-h-screen flex flex-col justify-between bg-[#f0f6fa]">
          
          {/* Nền hoạt họa gradient lụa toàn cục chạy ngầm chìm */}
          <div className="fixed inset-0 pointer-events-none z-0 mix-blend-soft-light opacity-60 bg-gradient-silk animate-gradientFlow" />

          {/* Header */}
          <Header 
            logoUrl={logoUrl} 
            logoTexts={texts} 
            menu={menu} 
            currentPath={window.location.pathname}
            activeLang="VN"
            onChangeLang={() => {}}
          />
          
          {/* Main content body */}
          <main className="flex-grow relative z-10">
            {children}
          </main>

          {/* Footer */}
          <Footer 
            logoUrl={logoUrl} 
            logoTexts={texts} 
            menu={menu} 
            footerContact={footerContact}
            activeLang="VN"
          />
        </div>
      );
    }
  }
};

export default puckConfig;