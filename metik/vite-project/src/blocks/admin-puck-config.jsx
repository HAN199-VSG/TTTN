import React from 'react';
import AdminHeading from "./admin-heading";
import AdminText from "./admin-text";
import AdminImage from "./admin-image";
import AdminSection from "./admin-section";
import AdminHero from "./admin-hero";
import AdminHeader from "./admin-header";
import AdminSlider from "./admin-slider";
import AdminProductGrid from "./admin-product-grid";
import AdminTestimonial from "./admin-testimonial";
import AdminVideo from "./admin-video";
import AdminFooter from "./admin-footer";
import AdminBreadcrumb from "./admin-breadcrumb";
import AdminContactForm from "./admin-contact-form";
import AdminAboutMetik from "./admin-about";
//Config — đăng ký components với fields + defaultProps + render.

export const puckConfig = {
  components: {
    Heading: {
      label: 'Tiêu đề',
      fields: {
        content: { type: 'text', label: 'Nội dung', contentEditable: true },
        level: {
          type: 'select', label: 'Cấp độ',
          options: [
            { label: 'H1', value: 1 }, { label: 'H2', value: 2 },
            { label: 'H3', value: 3 }, { label: 'H4', value: 4 },
            { label: 'H5', value: 5 }, { label: 'H6', value: 6 }
          ]
        },
        align: {
          type: 'select', label: 'Căn lề',
          options: [
            { label: 'Trái', value: 'left' },
            { label: 'Giữa', value: 'center' },
            { label: 'Phải', value: 'right' }
          ]
        },
        variant: {
          type: 'select', label: 'Kiểu dáng',
          options: [
            { label: 'Mặc định', value: 'default' },
            { label: 'METIK Theme', value: 'metik' }
          ]
        }
      },
      defaultProps: { content: 'Tiêu đề', level: 2, align: 'left', variant: 'default' },
      render: (props) => <AdminHeading {...props} />
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
            { label: 'Đều', value: 'justify' }
          ]
        }
      },
      defaultProps: { content: 'Nhập văn bản ở đây...', align: 'left' },
      render: (props) => <AdminText {...props} />
    },

    Image: {
      label: 'Ảnh',
      fields: {
        src: { type: 'text', label: 'URL ảnh' },
        alt: { type: 'text', label: 'Alt text' },
        width: { type: 'text', label: 'Chiều rộng', default: '100%' },
        height: { type: 'text', label: 'Chiều cao', default: 'auto' },
        borderRadius: { type: 'text', label: 'Bo góc', default: '0' },
        align: {
          type: 'select', label: 'Căn lề',
          options: [
            { label: 'Trái', value: 'left' },
            { label: 'Giữa', value: 'center' },
            { label: 'Phải', value: 'right' }
          ]
        }
      },
      defaultProps: {
        src: 'https://via.placeholder.com/800x400',
        alt: 'Ảnh minh họa',
        width: '100%', height: 'auto', borderRadius: '30px', align: 'center'
      },
      render: (props) => <AdminImage {...props} />
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
            { label: 'XL (1280px)', value: 'xl' }
          ]
        },
        background: {
          type: 'object', label: 'Background',
          objectFields: {
            type: {
              type: 'select', label: 'Loại',
              options: [
                { label: 'Màu', value: 'color' },
                { label: 'Gradient', value: 'gradient' },
                { label: 'Ảnh', value: 'image' },
                { label: 'METIK Theme', value: 'metik-theme' }
              ]
            },
            color: { type: 'text', label: 'Màu nền', default: '#ffffff' },
            fromColor: { type: 'text', label: 'Gradient từ', default: '#667eea' },
            toColor: { type: 'text', label: 'Gradient đến', default: '#764ba2' },
            direction: { type: 'text', label: 'Hướng gradient', default: 'to right' },
            bg_image: { type: 'text', label: 'URL ảnh nền' },
            opacity: { type: 'number', label: 'Độ mờ', min: 0, max: 1, step: 0.1, default: 1 }
          }
        },
        padding_x: { type: 'number', label: 'Padding ngang', min: 0, max: 16, default: 4 },
        padding_y: { type: 'number', label: 'Padding dọc', min: 0, max: 16, default: 4 },
        content: { type: 'slot' } // Cho phép nested components
      },
      defaultProps: {
        container: 'lg',
        background: { type: 'color', color: '#ffffff' },
        padding_x: 4, padding_y: 4,
        content: []
      },
      render: (props) => <AdminSection {...props} />
    },

    Hero: {
      label: 'Hero Banner',
      fields: {
        title: { type: 'text', label: 'Tiêu đề', contentEditable: true },
        subtitle: { type: 'textarea', label: 'Mô tả ngắn', contentEditable: true },
        buttons: {
          type: 'array', label: 'Danh sách nút',
          arrayFields: {
            text: { type: 'text', label: 'Text nút', contentEditable: true },
            url: { type: 'text', label: 'URL' },
            style: {
              type: 'select', label: 'Style',
              options: [
                { label: 'Primary', value: 'primary' },
                { label: 'Secondary', value: 'secondary' },
                { label: 'Outline', value: 'outline' }
              ]
            }
          },
          getItemSummary: (item) => item.text
        },
        background: {
          type: 'object', label: 'Background',
          objectFields: {
            type: {
              type: 'select', label: 'Loại',
              options: [
                { label: 'Màu', value: 'color' },
                { label: 'Gradient', value: 'gradient' },
                { label: 'Ảnh', value: 'image' }
              ]
            },
            color: { type: 'text', label: 'Màu nền', default: '#ffffff' },
            gradientFrom: { type: 'text', label: 'Gradient từ', default: '#667eea' },
            gradientTo: { type: 'text', label: 'Gradient đến', default: '#764ba2' },
            gradientDirection: { type: 'text', label: 'Hướng', default: 'to bottom right' },
            imageUrl: { type: 'text', label: 'URL ảnh nền' }
          }
        },
        layout: {
          type: 'object', label: 'Bố cục',
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
        }
      },
      defaultProps: {
        title: 'Chào mừng đến với website',
        subtitle: 'Chúng tôi cung cấp những sản phẩm và dịch vụ tốt nhất',
        buttons: [
          { text: 'Tìm hiểu thêm', url: '#', style: 'primary' },
          { text: 'Liên hệ', url: '#contact', style: 'outline' }
        ],
        background: {
          type: 'gradient',
          gradientFrom: '#667eea', gradientTo: '#764ba2',
          gradientDirection: 'to bottom right'
        },
        layout: { align: 'center' }
      },
      render: (props) => <AdminHero {...props} />
    },

    Header: {
      label: 'Thanh điều hướng (Header)',
      fields: {
        logoUrl: { type: 'text', label: 'URL Logo' },
        menuItems: {
          type: 'array',
          label: 'Menu',
          arrayFields: {
            label: { type: 'text', label: 'Tên mục' },
            url: { type: 'text', label: 'Link' }
          },
          getItemSummary: (item) => item.label || 'Mục mới'
        },
        socialLinks: {
          type: 'array',
          label: 'Mạng xã hội',
          arrayFields: {
            platform: {
              type: 'select',
              label: 'Nền tảng',
              options: [
                { label: 'Facebook', value: 'facebook' },
                { label: 'TikTok', value: 'tiktok' },
                { label: 'LinkedIn', value: 'linkedin' }
              ]
            },
            url: { type: 'text', label: 'Link' },
            tooltip: { type: 'text', label: 'Tooltip' }
          },
          getItemSummary: (item) => item.platform || 'Social'
        }
      },
      defaultProps: {
        logoUrl: 'https://metik.vn/wp-content/uploads/2026/06/logometik.png',
        menuItems: [
          { label: 'TRANG CHỦ', url: '/' },
          { label: 'GIỚI THIỆU', url: '/gioi-thieu' },
          { label: 'SẢN PHẨM', url: '/san-pham' },
          { label: 'TIN TỨC', url: '/tin-tuc' },
          { label: 'LIÊN HỆ', url: '/lien-he' }
        ],
        socialLinks: [
          { platform: 'facebook', url: '#', tooltip: 'Theo dõi trên Facebook' },
          { platform: 'tiktok', url: '#', tooltip: 'Theo dõi trên TikTok' },
          { platform: 'linkedin', url: '#', tooltip: 'Theo dõi trên LinkedIn' }
        ]
      },
      render: (props) => <AdminHeader {...props} />
    },

    Slider: {
      label: 'Trình chiếu ảnh (Slider)',
      fields: {
        autoPlayInterval: {
          type: 'number',
          label: 'Tự động chạy (giây) - Nhập 0 để tắt',
          min: 0,
          max: 20,
          default: 4
        },
        slides: {
          type: 'array',
          label: 'Danh sách Slide',
          arrayFields: {
            imageUrl: { type: 'text', label: 'URL Ảnh' },
            url: { type: 'text', label: 'Link (khi bấm vào)' },
            altText: { type: 'text', label: 'Mô tả ảnh (Alt)' }
          },
          getItemSummary: (item, i) => item.altText || `Slide ${i + 1}`
        }
      },
      defaultProps: {
        autoPlayInterval: 4,
        slides: [
          { imageUrl: 'https://metik.vn/wp-content/uploads/2021/05/banner-metik.webp', url: '#', altText: 'Banner METIK 1' },
          { imageUrl: 'https://metik.vn/wp-content/uploads/2021/05/banner-metik-2-1-scaled.webp', url: '#', altText: 'Banner METIK 2' }
        ]
      },
      render: (props) => <AdminSlider {...props} />
    },

    // ====== BỔ SUNG MỚI ======

    ProductGrid: {
      label: 'Lưới sản phẩm',
      fields: {
        title: { type: 'text', label: 'Tiêu đề khối', contentEditable: true },
        columns: {
          type: 'select', label: 'Số cột',
          options: [
            { label: '2 cột', value: 2 },
            { label: '3 cột', value: 3 },
            { label: '4 cột', value: 4 }
          ]
        },
        borderRadiusDiag1: { type: 'number', label: 'Bo góc chéo chính ↖↘ (px)', min: 0, max: 100, step: 1 },
        borderRadiusDiag2: { type: 'number', label: 'Bo góc chéo phụ ↗↙ (px)', min: 0, max: 100, step: 1 },
        products: {
          type: 'array',
          label: 'Danh sách sản phẩm',
          arrayFields: {
            imageUrl: { type: 'text', label: 'URL ảnh' },
            name: { type: 'text', label: 'Tên sản phẩm' },
            price: { type: 'text', label: 'Giá (để trống nếu không hiển thị)' },
            url: { type: 'text', label: 'Link chi tiết' }
          },
          getItemSummary: (item, i) => item.name || `Sản phẩm ${i + 1}`
        }
      },
      defaultProps: {
        title: 'SẢN PHẨM MỚI',
        columns: 4,
        borderRadiusDiag1: 30,
        borderRadiusDiag2: 0,
        products: [
          { imageUrl: 'https://metik.vn/wp-content/uploads/2026/06/snack-vi-tao-bien.jpg', name: 'Snack vị Tảo biển', price: '', url: '/san-pham/snack-vi-tao-bien' },
          { imageUrl: 'https://metik.vn/wp-content/uploads/2026/06/snack-vi-bbq.jpg', name: 'Snack vị BBQ', price: '', url: '/san-pham/snack-vi-bbq' },
          { imageUrl: 'https://metik.vn/wp-content/uploads/2026/06/snack-vi-bap.jpg', name: 'Snack vị Bắp', price: '', url: '/san-pham/snack-vi-bap' },
          { imageUrl: 'https://metik.vn/wp-content/uploads/2026/06/snack-vi-pho-mai.webp', name: 'Snack vị Phô mai', price: '', url: '/san-pham/snack-vi-pho-mai' }
        ]
      },
      render: (props) => <AdminProductGrid {...props} />
    },

    Testimonial: {
      label: 'Đánh giá khách hàng',
      fields: {
        title: { type: 'text', label: 'Tiêu đề khối', contentEditable: true },
        autoPlayInterval: { type: 'number', label: 'Tự động chạy (giây) - 0 để tắt', min: 0, max: 20, default: 5 },
        items: {
          type: 'array',
          label: 'Danh sách đánh giá',
          arrayFields: {
            avatarUrl: { type: 'text', label: 'Ảnh đại diện' },
            quote: { type: 'textarea', label: 'Nội dung đánh giá' },
            name: { type: 'text', label: 'Tên khách hàng' }
          },
          getItemSummary: (item, i) => item.name || `Đánh giá ${i + 1}`
        }
      },
      defaultProps: {
        title: 'KHÁCH HÀNG NÓI GÌ?',
        autoPlayInterval: 5,
        items: [
          { avatarUrl: '', quote: 'Snack metik ăn vừa giòn, vừa ngon vừa cuốn miệng. Em thường lựa chọn để mang theo tới trường', name: 'Sinh viên Huỳnh Vĩnh, TP.HCM' },
          { avatarUrl: '', quote: 'metik gợi nhớ cho em rất nhiều kỉ niệm thời thơ ấu. Hy vọng nhãn hàng trong tương lai sẽ ra nhiều sản phẩm độc đáo hơn nữa.', name: 'Bạn Mỹ Duyên, Đồng Tháp' }
        ]
      },
      render: (props) => <AdminTestimonial {...props} />
    },

    Video: {
      label: 'Video giới thiệu',
      fields: {
        title: { type: 'text', label: 'Tiêu đề', contentEditable: true },
        description: { type: 'textarea', label: 'Mô tả (hỗ trợ HTML)' },
        videoUrl: { type: 'text', label: 'URL Video (mp4 hoặc Youtube embed)' },
        posterUrl: { type: 'text', label: 'Ảnh đại diện (poster)' },
        autoPlay: { type: 'radio', label: 'Tự động phát', options: [{ label: 'Có', value: true }, { label: 'Không', value: false }] },
        loop: { type: 'radio', label: 'Lặp lại', options: [{ label: 'Có', value: true }, { label: 'Không', value: false }] },
        controls: { type: 'radio', label: 'Hiện điều khiển', options: [{ label: 'Có', value: true }, { label: 'Không', value: false }] },
        borderRadiusDiag1: { type: 'number', label: 'Bo góc chéo chính ↖↘ (px)', min: 0, max: 100, step: 1 },
        borderRadiusDiag2: { type: 'number', label: 'Bo góc chéo phụ ↗↙ (px)', min: 0, max: 100, step: 1 }
      },
      defaultProps: {
        title: 'VỀ CHÚNG TÔI',
        description: 'Với tinh thần "Chạm mê tít – Snap into Joy", <strong>metik</strong> mong muốn trở thành người bạn đồng hành trong những khoảnh khắc vui vẻ hàng ngày. Từ những buổi gặp gỡ bạn bè, giờ giải lao, chuyến đi chơi đến những phút thư giãn tại nhà, <strong>metik</strong> mang đến trải nghiệm ăn vặt giòn ngon, trẻ trung và đầy cảm hứng.<br/><br/><strong>metik</strong> không chỉ là một sản phẩm snack, <strong>metik</strong> là cảm giác giòn vui khi mở gói, là hương vị để mê trong từng miếng bánh và là nguồn năng lượng tích cực cho những khoảnh khắc thường ngày.',
        videoUrl: 'https://metik.vn/wp-content/uploads/2026/06/METIK-ChamMeTit.mp4',
        posterUrl: '',
        autoPlay: false,
        loop: false,
        controls: true,
        borderRadiusDiag1: 16,
        borderRadiusDiag2: 16
      },
      render: (props) => <AdminVideo {...props} />
    },

    Breadcrumb: {
      label: 'Đường dẫn (Breadcrumb)',
      fields: {
        items: {
          type: 'array',
          label: 'Các mục',
          arrayFields: {
            label: { type: 'text', label: 'Tên hiển thị' },
            url: { type: 'text', label: 'Link (bỏ trống nếu là trang hiện tại)' }
          },
          getItemSummary: (item, i) => item.label || `Mục ${i + 1}`
        }
      },
      defaultProps: {
        items: [
          { label: 'Trang chủ', url: '/' },
          { label: 'Sản phẩm', url: '' }
        ]
      },
      render: (props) => <AdminBreadcrumb {...props} />
    },

    ContactForm: {
      label: 'Form liên hệ',
      fields: {
        title: { type: 'text', label: 'Tiêu đề', contentEditable: true },
        submitLabel: { type: 'text', label: 'Text nút gửi' },
        fields: {
          type: 'array',
          label: 'Các trường nhập',
          arrayFields: {
            name: { type: 'text', label: 'Tên trường (key)' },
            label: { type: 'text', label: 'Nhãn hiển thị' },
            type: {
              type: 'select', label: 'Loại',
              options: [
                { label: 'Văn bản', value: 'text' },
                { label: 'Email', value: 'email' },
                { label: 'Số điện thoại', value: 'tel' },
                { label: 'Đoạn văn (textarea)', value: 'textarea' }
              ]
            },
            required: { type: 'radio', label: 'Bắt buộc', options: [{ label: 'Có', value: true }, { label: 'Không', value: false }] }
          },
          getItemSummary: (item, i) => item.label || `Trường ${i + 1}`
        }
      },
      defaultProps: {
        title: 'Gửi liên hệ cho chúng tôi',
        submitLabel: 'Gửi liên hệ',
        fields: [
          { name: 'fullName', label: 'Họ và tên', type: 'text', required: true },
          { name: 'phone', label: 'Số điện thoại', type: 'tel', required: true },
          { name: 'email', label: 'Email', type: 'email', required: false },
          { name: 'message', label: 'Nội dung', type: 'textarea', required: true }
        ]
      },
      render: (props) => <AdminContactForm {...props} />
    },

    Footer: {
      label: 'Chân trang (Footer)',
      fields: {
        logoUrl: { type: 'text', label: 'URL Logo' },
        description: { type: 'textarea', label: 'Mô tả ngắn' },
        menuItems: {
          type: 'array',
          label: 'Menu',
          arrayFields: {
            label: { type: 'text', label: 'Tên mục' },
            url: { type: 'text', label: 'Link' }
          },
          getItemSummary: (item) => item.label || 'Mục mới'
        },
        socialLinks: {
          type: 'array',
          label: 'Mạng xã hội',
          arrayFields: {
            platform: {
              type: 'select', label: 'Nền tảng',
              options: [
                { label: 'Facebook', value: 'facebook' },
                { label: 'TikTok', value: 'tiktok' },
                { label: 'LinkedIn', value: 'linkedin' }
              ]
            },
            url: { type: 'text', label: 'Link' },
            tooltip: { type: 'text', label: 'Tooltip' }
          },
          getItemSummary: (item) => item.platform || 'Social'
        },
        phone: { type: 'text', label: 'Số điện thoại' },
        email: { type: 'text', label: 'Email' },
        address: { type: 'text', label: 'Địa chỉ' },
        copyrightText: { type: 'text', label: 'Text bản quyền' }
      },
      defaultProps: {
        logoUrl: 'https://metik.vn/wp-content/uploads/2026/06/logometik.png',
        description: 'METIK - một thế giới snack dành cho những ai yêu sự giòn giòn ngất ngây, hương vị trẻ trung, đầy cảm hứng để mỗi ngày đều căng tràn sức sống.',
        menuItems: [
          { label: 'Trang chủ', url: '/' },
          { label: 'Giới thiệu', url: '/gioi-thieu' },
          { label: 'Sản phẩm', url: '/san-pham' },
          { label: 'Liên hệ', url: '/lien-he' }
        ],
        socialLinks: [
          { platform: 'facebook', url: '#', tooltip: 'Theo dõi trên Facebook' },
          { platform: 'tiktok', url: '#', tooltip: 'Theo dõi trên TikTok' },
          { platform: 'linkedin', url: '#', tooltip: 'Theo dõi trên LinkedIn' }
        ],
        phone: '(+84) 79 721 3333',
        email: '[email protected]',
        address: 'Lô C3-1, Đường D2-N7, KCN Tân Phú Trung, Xã Củ Chi, TP.HCM.',
        copyrightText: 'Copyright 2026 © METIK. All rights reserved'
      },
      render: (props) => <AdminFooter {...props} />
    },

    AboutMetik: {
      label: 'Giới thiệu về METIK',
      fields: {
        title: { type: 'text', label: 'Tiêu đề', contentEditable: true },
        subtitle: { type: 'textarea', label: 'Mô tả ngắn' },
        blocks: {
          type: 'array',
          label: 'Khối nội dung',
          arrayFields: {
            imageUrl: { type: 'text', label: 'URL ảnh' },
            imageAlt: { type: 'text', label: 'Mô tả ảnh (alt)' },
            layout: {
              type: 'select',
              label: 'Vị trí ảnh',
              options: [
                { label: 'Ảnh bên trái', value: 'left' },
                { label: 'Ảnh bên phải', value: 'right' }
              ]
            },
            borderRadiusDiag1: { type: 'number', label: 'Bo góc chéo chính ↖↘ (px)', min: 0, max: 100, step: 1 },
            borderRadiusDiag2: { type: 'number', label: 'Bo góc chéo phụ ↗↙ (px)', min: 0, max: 100, step: 1 },
            content: { type: 'textarea', label: 'Nội dung (hỗ trợ HTML)' }
          },
          getItemSummary: (item, i) => item.imageAlt || `Khối ${i + 1}`
        }
      },
      defaultProps: {
        title: 'GIỚI THIỆU VỀ METIK',
        subtitle: 'metik là thương hiệu snack thuộc OCHAO, được phát triển trong hệ sinh thái HUNGHAU Holdings với định hướng mang đến những sản phẩm ăn vặt thơm ngon, vui tươi và phù hợp với nhịp sống hiện đại.',
        blocks: [
          {
            imageUrl: 'https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=600&h=400&fit=crop',
            imageAlt: 'Sản phẩm METIK',
            layout: 'left',
            borderRadiusDiag1: 40,
            borderRadiusDiag2: 0,
            content: 'Ra đời từ nền tảng sản xuất bánh kẹo của OCHAO, METIK kế thừa hệ thống nhà máy hiện đại, quy trình sản xuất khép kín và tiêu chuẩn kiểm soát chất lượng nghiêm ngặt. METIK tập trung phát triển các dòng snack giòn, nhẹ, dễ ăn và phù hợp với nhiều nhóm khách hàng. Sản phẩm được nghiên cứu với nhiều hương vị hấp dẫn như rong biển, bắp, phô mai, BBQ và các hương vị đặc trưng khác'
          },
          {
            imageUrl: 'https://images.unsplash.com/photo-1513828583688-c52646db42da?w=600&h=400&fit=crop',
            imageAlt: 'Nhà máy OCHAO',
            layout: 'right',
            borderRadiusDiag1: 40,
            borderRadiusDiag2: 0,
            content: '• Sử dụng nguyên liệu có nguồn gốc rõ ràng, phù hợp với tiêu chuẩn sản xuất thực phẩm.<br/>• Quy trình sản xuất hiện đại, khép kín và đảm bảo vệ sinh an toàn thực phẩm.<br/>• Kiểm soát chất lượng chặt chẽ trong từng công đoạn, từ nguyên liệu đầu vào đến thành phẩm.'
          },
          {
            imageUrl: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&h=400&fit=crop',
            imageAlt: 'Người dùng METIK',
            layout: 'left',
            borderRadiusDiag1: 40,
            borderRadiusDiag2: 0,
            content: 'Với hương vị hấp dẫn, phong cách trẻ trung và tinh thần vui nhơn, METIK hướng đến hình ảnh một thương hiệu snack năng động, gần gũi và dễ tạo thiện cảm với người tiêu dùng Việt Nam.'
          }
        ]
      },
      render: (props) => <AdminAboutMetik {...props} />
    }
  },

  // Sidebar categories
  categoryGroups: [
    { title: 'Cơ bản', components: ['Heading', 'Text', 'Image'] },
    { title: 'Layout', components: ['Header', 'Section', 'Footer', 'Breadcrumb'] },
    { title: 'Nâng cao', components: ['Hero', 'Slider', 'ProductGrid', 'Testimonial', 'Video', 'AboutMetik', 'ContactForm'] }
  ],

  // Root config
  root: {
    render: ({ children }) => (
      <div
        className="min-h-screen"
        style={{
          background: 'linear-gradient(to bottom, #ffffff 0%, #fffbeb 30%, #fef3c7 75%, #fde68a 100%)'
        }}
      >
        {children}
      </div>
    )
  }
};

export default puckConfig;
