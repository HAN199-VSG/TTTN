import React from 'react';
import AdminHeading from './components/admin-heading';
import AdminText from './components/admin-text';
import AdminImage from './components/admin-image';
import AdminSection from './components/admin-section';
import AdminHero from './components/admin-hero';
import AdminFeatures from './components/admin-features';
import AdminOrganization from './components/admin-organization';

// Định nghĩa cấu hình Background & Container dùng chung để tái sử dụng cho các component mới
const sharedBackgroundFields = {
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
          { label: 'Ảnh', value: 'image' }
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
  padding_y: { type: 'number', label: 'Padding dọc', min: 0, max: 16, default: 4 }
};

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
        }
      },
      defaultProps: { content: 'Tiêu đề', level: 2, align: 'left' },
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
        width: '100%', height: 'auto', borderRadius: '0', align: 'center'
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
                { label: 'Ảnh', value: 'image' }
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
        content: { type: 'slot' }
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
      label: 'Cụm Sen Hồng (Hero)',
      fields: {
        title: { type: 'text', label: 'Chữ tiêu đề (Title)' },
        titleColor: { type: 'text', label: 'Màu chữ tiêu đề (Mã màu hoặc tên màu)', default: '#ffffff' },
        titleSize: { 
          type: 'select', 
          label: 'Kích thước chữ tiêu đề',
          options: [
            { label: 'Nhỏ', value: 'sm' },
            { label: 'Vừa', value: 'md' },
            { label: 'Lớn', value: 'lg' },
            { label: 'Rất lớn', value: 'xl' }
          ],
          default: 'lg'
        },
        subtitle: { type: 'textarea', label: 'Chữ mô tả (Subtitle)' },
        subtitleColor: { type: 'text', label: 'Màu chữ mô tả', default: '#ffffff' },
        subtitleSize: { 
          type: 'select', 
          label: 'Kích thước chữ mô tả',
          options: [
            { label: 'Nhỏ', value: 'sm' },
            { label: 'Vừa', value: 'md' },
            { label: 'Lớn', value: 'lg' },
            { label: 'Rất lớn', value: 'xl' }
          ],
          default: 'lg'
        },
        // Cấu hình cho chiếc hộp kính mờ chứa chữ (Cụm Sen Hồng)
        contentBoxBg: { type: 'text', label: 'Màu nền hộp chứa chữ (Ví dụ: rgba(255,255,255,0.1) hoặc transparent)', default: 'transparent' },
        contentBoxRadius: { type: 'number', label: 'Độ bo góc hộp chứa chữ (px)', default: 0 },
        contentBoxPadding: { type: 'number', label: 'Khoảng cách trống trong hộp (px)', default: 16 },
        
        // Cấu hình vị trí nằm bên trái, bên phải hoặc ở giữa
        layout: {
          type: 'object',
          label: 'Cấu hình vị trí cụm',
          objectFields: {
            align: {
              type: 'select',
              label: 'Vị trí hiển thị',
              options: [
                { label: 'Bên Trái', value: 'left' },
                { label: 'Nằm Giữa', value: 'center' },
                { label: 'Bên Phải', value: 'right' }
              ],
              default: 'center'
            }
          }
        },
        // Cấu hình nền phía sau
        background: {
          type: 'object',
          label: 'Nền phía sau',
          objectFields: {
            type: {
              type: 'select',
              label: 'Loại nền',
              options: [
                { label: 'Nền Màu Đơn', value: 'color' },
                { label: 'Nền Hình Ảnh / GIF', value: 'image' },
                { label: 'Nền Gradient (Hòa trộn màu)', value: 'gradient' }
              ]
            },
            color: { type: 'text', label: 'Mã màu nền (Nếu chọn Màu Đơn)' },
            bg_image: { type: 'text', label: 'Link URL ảnh (.png, .jpg) hoặc ảnh động (.gif)' },
            direction: { type: 'text', label: 'Hướng Gradient (Ví dụ: to right)', default: 'to bottom right' },
            fromColor: { type: 'text', label: 'Màu bắt đầu Gradient' },
            toColor: { type: 'text', label: 'Màu kết thúc Gradient' }
          }
        },
        // Cấu hình danh sách các nút bấm động
        buttons: {
          type: 'array',
          label: 'Danh sách Nút bấm',
          arrayFields: {
            text: { type: 'text', label: 'Chữ trên nút' },
            url: { type: 'text', label: 'Đường dẫn liên kết (Link)' },
            style: {
              type: 'select',
              label: 'Kiểu nút',
              options: [
                { label: 'Nút màu đậm', value: 'primary' },
                { label: 'Nút viền trắng', value: 'outline' }
              ]
            },
            btnBg: { type: 'text', label: 'Màu nền nút (Ví dụ: #2563eb)' },
            btnTextColor: { type: 'text', label: 'Màu chữ trong nút', default: '#ffffff' },
            btnRadius: { type: 'number', label: 'Độ bo góc nút (px)', default: 8 }
          }
        }
      },
      defaultProps: {
        title: 'Sen Hồng',
        subtitle: 'CLB Doanh nhân Đồng Tháp tại TPHCM quy tụ những người con quê hương...',
        titleColor: '#facc15', // Mặc định màu vàng cho đẹp giống ảnh mẫu
        contentBoxBg: 'rgba(255, 255, 255, 0.15)', // Tạo nền kính mờ nhẹ
        contentBoxRadius: 24, // Bo góc cụm hộp giống thiết kế mẫu
        contentBoxPadding: 32,
        layout: { align: 'left' }, // Mặc định nằm bên trái như thiết kế mẫu
        background: { type: 'color', color: '#667eea' },
        buttons: [
          { text: 'Tham gia cộng đồng', style: 'primary', btnBg: '#1d4ed8', btnRadius: 20 }
        ]
      },
      render: (props) => <AdminHero {...props} />
    },

    // ==========================================
    // COMPONENT MỚI 1: CÁC BAN CHUYÊN MÔN (image_961036.png)
    // ==========================================
    Features: {
      label: 'Các Ban Chuyên Môn',
      fields: {
        ...sharedBackgroundFields,
        sectionTitle: { type: 'text', label: 'Tiêu đề lớn' },
        sectionSubtitle: { type: 'text', label: 'Tiêu đề nhỏ' },
        items: {
          type: 'array',
          label: 'Danh sách các Ban (Dấu + tự tăng số lượng)',
          arrayFields: {
            title: { type: 'text', label: 'Tên ban chuyên môn' },
            icon: { type: 'text', label: 'Link URL ảnh Icon' },
            btnText: { type: 'text', label: 'Chữ trên nút', default: 'Xem hoạt động' },
            btnRadius: { type: 'number', label: 'Bo góc nút', default: 20 },
            btnBg: { type: 'text', label: 'Màu nền nút', default: 'rgba(255,255,255,0.2)' },
            btnTextColor: { type: 'text', label: 'Màu chữ nút', default: '#ffffff' }
          },
          getItemSummary: (item) => item.title || 'Ban mới'
        }
      },
      defaultProps: {
        container: 'xl',
        sectionTitle: 'CÁC BAN CHUYÊN MÔN',
        sectionSubtitle: 'CLB DOANH NHÂN ĐỒNG THÁP TẠI TP. HỒ CHÍ MINH',
        background: { type: 'color', color: '#f8fafc' },
        items: [
          { title: 'Ban Kinh tế - Đầu tư', btnText: 'Xem hoạt động' },
          { title: 'Ban Văn hóa - Thể thao', btnText: 'Xem hoạt động' }
        ]
      },
      render: (props) => <AdminFeatures {...props} />
    },

    // ==========================================
    // COMPONENT MỚI 2: CƠ CẤU TỔ CHỨC / PHÂN KHỐI (image_961013.png)
    // ==========================================
    Organization: {
      label: 'Cơ Cấu Tổ Chức / Khối nhân sự',
      fields: {
        ...sharedBackgroundFields,
        blocks: {
          type: 'array',
          label: 'Danh sách Khối lớn (Cột)',
          arrayFields: {
            title: { type: 'text', label: 'Tiêu đề khối cột' },
            description: { type: 'textarea', label: 'Mô tả ngắn của khối' },
            members: {
              type: 'array',
              label: 'Thành viên thuộc khối này',
              arrayFields: {
                name: { type: 'text', label: 'Họ và tên thành viên' },
                avatar: { type: 'text', label: 'Link ảnh đại diện (Avatar URL)' },
                role: { type: 'text', label: 'Chức vụ' },
                company: { type: 'text', label: 'Tên công ty doanh nghiệp' }
              },
              getItemSummary: (member) => member.name || 'Thành viên mới'
            }
          },
          getItemSummary: (block) => block.title || 'Khối cột mới'
        }
      },
      defaultProps: {
        container: 'lg',
        background: { type: 'color', color: '#ffffff' },
        blocks: [
          { title: 'Ban Chấp Hành', description: 'Danh sách thường trực BCH nhiệm kỳ', members: [] }
        ]
      },
      render: (props) => <AdminOrganization {...props} />
    }
  },

  // Cập nhật Danh mục thanh Sidebar để gom nhóm 2 component mới vào mục "Nâng cao"
  categoryGroups: [
    { title: 'Cơ bản', components: ['Heading', 'Text', 'Image'] },
    { title: 'Layout', components: ['Section'] },
    { title: 'Nâng cao', components: ['Hero', 'Features', 'Organization'] }
  ],

  root: {
    render: ({ children }) => (
      <div className="min-h-screen">{children}</div>
    )
  }
};

export default puckConfig;