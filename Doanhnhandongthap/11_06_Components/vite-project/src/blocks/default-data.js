// Dữ liệu mặc định cho cả 3 trang của website CLB Doanh nhân Đồng Tháp tại TP.HCM

export const defaultRootProps = {
  logoUrl: "https://webdemo.hexagon.xyz/medias/logo 2.png",
  logoTexts: ["CÂU LẠC BỘ DOANH NHÂN ĐỒNG THÁP", "TẠI TP.HỒ CHÍ MINH"],
  menu: [
    { label: "Trang chủ", labelEn: "Home", url: "/" },
    { label: "Giới thiệu", labelEn: "About Us", url: "/gioi-thieu" },
    { label: "Hội viên", labelEn: "Members", url: "/hoi-vien" },
    { label: "Hoạt động Ban", labelEn: "Activities", url: "/#hoat-dong" },
    { label: "Tin tức & Sự kiện", labelEn: "News & Events", url: "/#tin-tuc" },
    { label: "Liên hệ", labelEn: "Contact", url: "/#lien-he" }
  ],
  footerContact: {
    address: "Văn phòng: Số 123 Đường số 4, Khu đô thị Sala, Quận 2, TP. Hồ Chí Minh",
    email: "lienhe@doanhnhandongthap.vn",
    phone: "0909.123.456 - (028) 3822.4567",
    facebook: "https://facebook.com/doanhnhandongthaptphcm",
    youtube: "https://youtube.com",
    website: "www.doanhnhandongthap.vn"
  }
};

// 1. TRANG CHỦ
export const defaultHomepageData = {
  root: {
    props: defaultRootProps
  },
  content: [
    {
      type: "Hero",
      props: {
        title: "Sen Hồng",
        titleColor: "#FAF390",
        titleSize: "xl",
        subtitle: "LAN TỎA GIÁ TRỊ ĐẤT",
        subtitleColor: "#ffffff",
        subtitleSize: "md",
        description: "CLB Doanh nhân Đồng Tháp tại TPHCM quy tụ những người con quê hương Đất Sen Hồng. Với tinh thần Hợp tác - Đổi mới - Phát triển, CLB đóng vai trò là cầu nối chiến lược, hợp tác, thúc đẩy giá trị kinh doanh và lan toả sẻ chia nghĩa tình quê hương.",
        descriptionColor: "#f1f5f9",
        contentBoxBg: "rgba(255, 255, 255, 0.19)",
        contentBoxStyle: "leaf", // 'standard' | 'leaf' | 'pill'
        contentBoxPadding: 48,
        layout: { align: "left" },
        background: {
          type: "image",
          bg_image: "https://webdemo.hexagon.xyz/medias/hieuunghero.webp"
        },
        buttons: [
          {
            text: "Tham gia cộng đồng",
            url: "/#dang-ky",
            style: "primary",
            btnBg: "#0072ff",
            btnTextColor: "#ffffff",
            btnRadius: 30
          }
        ]
      }
    },
    {
      type: "SponsorsMarquee",
      props: {
        title: "ĐỐI TÁC & NHÀ TÀI TRỢ TIÊU BIỂU",
        speed: 25,
        items: [
          { name: "Tập đoàn Sen Vàng", logo: "https://webdemo.hexagon.xyz/medias/logo 2.png" },
          { name: "Bất động sản Đất Sen", logo: "https://webdemo.hexagon.xyz/medias/logo 2.png" },
          { name: "Thực phẩm Đồng Tháp", logo: "https://webdemo.hexagon.xyz/medias/logo 2.png" },
          { name: "Du lịch Tràm Chim", logo: "https://webdemo.hexagon.xyz/medias/logo 2.png" },
          { name: "Dược phẩm Imexpharm", logo: "https://webdemo.hexagon.xyz/medias/logo 2.png" },
          { name: "Nông sản Sen Hồng", logo: "https://webdemo.hexagon.xyz/medias/logo 2.png" },
          { name: "Đầu tư Cao Lãnh", logo: "https://webdemo.hexagon.xyz/medias/logo 2.png" }
        ]
      }
    },
    {
      type: "AboutSpotlight",
      props: {
        sectionTitle: "VỀ CHÚNG TÔI",
        sectionSubtitle: "KẾT NỐI DOANH NHÂN - LAN TỎA NGHĨA TÌNH",
        description: "Câu lạc bộ Doanh nhân Đồng Tháp tại TP. Hồ Chí Minh là tổ chức tự nguyện quy tụ các doanh nhân, chủ doanh nghiệp, chuyên gia là người con quê hương Đồng Tháp hoặc có mối gắn kết mật thiết với vùng đất Sen Hồng. Thành lập với sứ mệnh hỗ trợ xúc tiến thương mại, chia sẻ kinh nghiệm quản trị và thúc đẩy tinh thần khởi nghiệp, CLB đồng thời là cầu nối nghĩa tình hướng về nguồn cội thông qua nhiều hoạt động an sinh xã hội thiết thực.",
        imageCorner: "https://webdemo.hexagon.xyz/medias/hoavanvct.png",
        spotlightTitle: "THƯỜNG TRỰC BCH TIÊU BIỂU",
        members: [
          {
            name: "Nguyễn Văn A",
            role: "Chủ tịch CLB",
            company: "Chủ tịch HĐQT Tập đoàn Sen Vàng",
            avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=150&q=80"
          },
          {
            name: "Trần Thị B",
            role: "Phó Chủ tịch Thường trực",
            company: "Tổng giám đốc Công ty CP Bất động sản Đất Sen",
            avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80"
          },
          {
            name: "Lê Văn C",
            role: "Phó Chủ tịch - Trưởng Ban Kinh tế",
            company: "Chủ tịch HĐQT Công ty Đầu tư Phát triển Sa Đéc",
            avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=150&q=80"
          },
          {
            name: "Phạm Minh D",
            role: "Tổng thư ký CLB",
            company: "Giám đốc điều hành Công ty Luật Đồng Tháp",
            avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80"
          }
        ]
      }
    },
    {
      type: "FeaturesGrid",
      props: {
        sectionTitle: "CÁC BAN CHUYÊN MÔN",
        sectionSubtitle: "CƠ CẤU HOẠT ĐỘNG CHUYÊN NGHIỆP HIỆU QUẢ",
        items: [
          {
            title: "Ban Kinh tế - Đầu tư",
            icon: "https://cdn-icons-png.flaticon.com/512/3135/3135706.png",
            btnText: "Xem hoạt động",
            btnBg: "rgba(255, 255, 255, 0.2)",
            btnTextColor: "#ffffff",
            btnRadius: 24
          },
          {
            title: "Ban Văn hóa - Xã hội",
            icon: "https://cdn-icons-png.flaticon.com/512/3135/3135722.png",
            btnText: "Xem hoạt động",
            btnBg: "rgba(255, 255, 255, 0.2)",
            btnTextColor: "#ffffff",
            btnRadius: 24
          },
          {
            title: "Ban Hội viên - Sự kiện",
            icon: "https://cdn-icons-png.flaticon.com/512/3135/3135789.png",
            btnText: "Xem hoạt động",
            btnBg: "rgba(255, 255, 255, 0.2)",
            btnTextColor: "#ffffff",
            btnRadius: 24
          },
          {
            title: "Ban Truyền thông - Sự nghiệp",
            icon: "https://cdn-icons-png.flaticon.com/512/3135/3135755.png",
            btnText: "Xem hoạt động",
            btnBg: "rgba(255, 255, 255, 0.2)",
            btnTextColor: "#ffffff",
            btnRadius: 24
          }
        ]
      }
    },
    {
      type: "StatsCounter",
      props: {
        sectionTitle: "HÀNH TRÌNH KIẾN TẠO",
        items: [
          { number: 350, label: "Hội viên chính thức", suffix: "+" },
          { number: 12, label: "Năm hình thành và phát triển", suffix: "" },
          { number: 45, label: "Chương trình kết nối giao thương", suffix: "+" },
          { number: 85, label: "Tỷ đồng tài trợ các hoạt động an sinh", suffix: " tỷ+" }
        ]
      }
    },
    {
      type: "NewsGrid",
      props: {
        sectionTitle: "TIN TỨC & SỰ KIỆN NỔI BẬT",
        items: [
          {
            title: "Hội nghị Xúc tiến Thương mại & Kết nối Giao thương TP.HCM - Đồng Tháp 2026",
            desc: "Chương trình quy tụ hơn 200 doanh nghiệp hội viên cùng trưng bày sản phẩm đặc sản OCOP thế mạnh và ký kết nhiều biên bản ghi nhớ hợp tác phát triển bền vững.",
            image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=600&q=80",
            category: "Sự kiện",
            date: "24 Tháng 06, 2026"
          },
          {
            title: "Hành trình Caravan Đất Sen Hồng: Kết nối yêu thương và hỗ trợ bà con nghèo",
            desc: "Đoàn xe Caravan của CLB Doanh nhân Đồng Tháp đã trao tặng hơn 500 phần quà, 5 căn nhà tình nghĩa và học bổng trị giá 500 triệu đồng cho học sinh nghèo vượt khó tại quê nhà.",
            image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=600&q=80",
            category: "Từ thiện",
            date: "18 Tháng 06, 2026"
          },
          {
            title: "Họp mặt Ban Chấp Hành mở rộng Quý II/2026: Đề ra phương hướng hoạt động cuối năm",
            desc: "Thảo luận sôi nổi về kế hoạch nâng cao chất lượng dịch vụ hội viên, đẩy mạnh đào tạo nội bộ và chuẩn bị cho Đại hội nhiệm kỳ mới sắp tới.",
            image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=400&q=80",
            category: "Tin nội bộ",
            date: "10 Tháng 06, 2026"
          },
          {
            title: "Chào đón 15 Doanh nghiệp mới gia nhập ngôi nhà chung CLB Doanh nhân Đồng Tháp",
            desc: "Buổi lễ kết nạp ấm cúng và đầy ý nghĩa đã mở rộng mạng lưới liên kết của CLB, hứa hẹn mang lại nhiều giá trị giao thương chéo.",
            image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=400&q=80",
            category: "Hội viên",
            date: "05 Tháng 06, 2026"
          },
          {
            title: "Giải Bóng đá Giao hữu Cup Sen Hồng lần thứ V: Nâng cao thể chất, thắt chặt tinh thần",
            desc: "Giải đấu thể thao truyền thống năm nay đã khởi tranh vô cùng hấp dẫn với sự tham gia của 8 đội bóng đại diện cho các khối ngành nghề của hội viên.",
            image: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=400&q=80",
            category: "Văn thể",
            date: "01 Tháng 06, 2026"
          }
        ]
      }
    }
  ]
};

// 2. TRANG GIỚI THIỆU
export const defaultGioiThieuData = {
  root: {
    props: defaultRootProps
  },
  content: [
    {
      type: "Hero",
      props: {
        title: "Hành trình & Cơ cấu",
        titleColor: "#FAF390",
        titleSize: "lg",
        subtitle: "GIỚI THIỆU CLB DOANH NHÂN ĐỒNG THÁP",
        subtitleColor: "#ffffff",
        subtitleSize: "sm",
        description: "Khám phá chặng đường hình thành phát triển lịch sử cùng cơ cấu tổ chức sơ đồ phân nhiệm chuyên nghiệp của Câu lạc bộ Doanh nhân Đồng Tháp tại TP. Hồ Chí Minh.",
        descriptionColor: "#f1f5f9",
        contentBoxBg: "rgba(11, 80, 119, 0.45)",
        contentBoxStyle: "leaf",
        contentBoxPadding: 40,
        layout: { align: "center" },
        background: {
          type: "gradient",
          direction: "to bottom",
          fromColor: "#0b5077",
          toColor: "#081d33"
        },
        buttons: []
      }
    },
    {
      type: "TimelineBlock",
      props: {
        sectionTitle: "LỊCH SỬ HÌNH THÀNH & CỘT MỐC",
        sectionSubtitle: "HÀNH TRÌNH TỪ NHỮNG BƯỚC CHÂN ĐẦU TIÊN",
        items: [
          {
            year: "2014",
            title: "Khởi nguồn ý tưởng",
            desc: "Một nhóm nhỏ doanh nhân tâm huyết gốc Đồng Tháp tại TP.HCM họp mặt, nhen nhóm ý định kết nối đồng hương làm kinh tế, hỗ trợ nhau vượt khó lập nghiệp.",
            image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=400&q=80"
          },
          {
            year: "2016",
            title: "Thành lập Ban vận động chính thức",
            desc: "Được sự ủng hộ của UBND tỉnh Đồng Tháp, Ban vận động chính thức được thành lập, xây dựng quy chế hoạt động lâm thời và tổ chức kết nạp những hội viên nòng cốt đầu tiên.",
            image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=400&q=80"
          },
          {
            year: "2018",
            title: "Đại hội nhiệm kỳ I (2018 - 2023)",
            desc: "Đại hội chính thức được tổ chức trọng thể tại TP.HCM với sự tham dự của Lãnh đạo tỉnh và hơn 150 doanh nhân. Bầu ra Ban Chấp Hành chính thức, mở ra thời kỳ phát triển quy mô.",
            image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=400&q=80"
          },
          {
            year: "2023",
            title: "Đại hội nhiệm kỳ II: Hợp tác - Đổi mới - Phát triển",
            desc: "Đại hội nhiệm kỳ mới khẳng định bước chuyển mình mạnh mẽ về công nghệ và mô hình kết nối. Đạt con số 300+ hội viên và mở rộng xúc tiến thương mại đa phương.",
            image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=400&q=80"
          }
        ]
      }
    },
    {
      type: "OrgChartBlock",
      props: {
        sectionTitle: "SƠ ĐỒ TỔ CHỨC & BỘ MÁY ĐIỀU HÀNH",
        sectionSubtitle: "SỰ PHÂN NHIỆM CHUYÊN NGHIỆP - RÕ RÀNG - CHẤT LƯỢNG",
        blocks: [
          {
            title: "Ban Thường Trực BCH",
            description: "Chịu trách nhiệm hoạch định chiến lược, phê duyệt kế hoạch năm và đưa ra các quyết sách quan trọng của Câu lạc bộ.",
            members: [
              {
                name: "Nguyễn Văn A",
                role: "Chủ tịch CLB",
                company: "Tập đoàn Sen Vàng",
                avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=150&q=80"
              },
              {
                name: "Trần Thị B",
                role: "Phó Chủ tịch Thường trực",
                company: "CP Bất động sản Đất Sen",
                avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80"
              }
            ]
          },
          {
            title: "Các Phó Chủ Tịch Chuyên Trách",
            description: "Trực tiếp chỉ đạo hoạt động điều hành của các ban chuyên môn chuyên biệt nhằm hiện thực hóa mục tiêu.",
            members: [
              {
                name: "Lê Văn C",
                role: "Phó Chủ tịch phụ trách Kinh tế - Đầu tư",
                company: "Công ty CP Phát triển Sa Đéc",
                avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=150&q=80"
              },
              {
                name: "Hoàng Văn D",
                role: "Phó Chủ tịch phụ trách Văn hóa - Thể thao",
                company: "Hệ thống Khách sạn Tràm Chim",
                avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80"
              }
            ]
          },
          {
            title: "Văn Phòng & Ban Thư Ký",
            description: "Bộ phận thường trực xử lý các công việc hành chính, tiếp nhận đăng ký hội viên mới và điều phối truyền thông kết nối hàng ngày.",
            members: [
              {
                name: "Phạm Minh D",
                role: "Tổng thư ký",
                company: "Công ty Luật Đồng Tháp",
                avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
              },
              {
                name: "Đỗ Thanh E",
                role: "Chánh Văn phòng CLB",
                company: "Văn phòng Thường trực CLB tại TP.HCM",
                avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
              }
            ]
          }
        ]
      }
    }
  ]
};

// 3. TRANG HỘI VIÊN
export const defaultHoiVienData = {
  root: {
    props: defaultRootProps
  },
  content: [
    {
      type: "Hero",
      props: {
        title: "Danh bạ Hội viên",
        titleColor: "#FAF390",
        titleSize: "lg",
        subtitle: "CỘNG ĐỒNG DOANH NHÂN ĐỒNG THÁP",
        subtitleColor: "#ffffff",
        subtitleSize: "sm",
        description: "Nơi kết nối và tra cứu thông tin của hàng trăm doanh nghiệp hội viên chính thức, kiến tạo cơ hội giao thương và chia sẻ hợp tác vững mạnh.",
        descriptionColor: "#f1f5f9",
        contentBoxBg: "rgba(11, 80, 119, 0.45)",
        contentBoxStyle: "leaf",
        contentBoxPadding: 40,
        layout: { align: "center" },
        background: {
          type: "gradient",
          direction: "to bottom",
          fromColor: "#0b5077",
          toColor: "#081d33"
        },
        buttons: []
      }
    },
    {
      type: "MembersDirectory",
      props: {
        sectionTitle: "MẠNG LƯỚI DOANH NGHIỆP HỘI VIÊN",
        sectionSubtitle: "TRA CỨU & KẾT NỐI HỢP TÁC THƯƠNG MẠI CHÉO",
        categories: [
          { id: "all", name: "Tất cả Hội viên" },
          { id: "vip", name: "Hội viên VIP" },
          { id: "diamond", name: "Hội viên Kim cương" },
          { id: "gold", name: "Hội viên Vàng" },
          { id: "silver", name: "Hội viên Bạc" }
        ],
        members: [
          {
            name: "Nguyễn Văn A",
            company: "Tập đoàn Sen Vàng",
            role: "Chủ tịch HĐQT",
            category: "vip",
            industry: "Bất động sản, Truyền thông & Sự kiện",
            phone: "0909.888.xxx",
            email: "anv@senvanggroup.vn",
            avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=150&q=80"
          },
          {
            name: "Trần Thị B",
            company: "Công ty CP Bất động sản Đất Sen",
            role: "Tổng giám đốc",
            category: "vip",
            industry: "Bất động sản & Xây dựng dân dụng",
            phone: "0903.777.xxx",
            email: "btt@datsenland.vn",
            avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80"
          },
          {
            name: "Lê Văn C",
            company: "Công ty Đầu tư Phát triển Sa Đéc",
            role: "Chủ tịch HĐQT",
            category: "diamond",
            industry: "Nông sản sạch, Hoa kiểng xuất khẩu",
            phone: "0918.666.xxx",
            email: "cle@sadecgroup.vn",
            avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=150&q=80"
          },
          {
            name: "Hoàng Văn D",
            company: "Hệ thống Khách sạn Tràm Chim",
            role: "Chủ tịch HĐQT",
            category: "diamond",
            industry: "Khách sạn, Resort & Du lịch sinh thái",
            phone: "0988.555.xxx",
            email: "dhoang@tramchimresort.vn",
            avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80"
          },
          {
            name: "Phạm Minh D",
            company: "Công ty Luật Đồng Tháp",
            role: "Giám đốc điều hành",
            category: "gold",
            industry: "Dịch vụ Pháp lý, Tư vấn Đầu tư Doanh nghiệp",
            phone: "0909.123.xxx",
            email: "dpham@dongthaplaw.vn",
            avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
          },
          {
            name: "Đỗ Thanh E",
            company: "Công ty CP Dược phẩm Đồng Tháp",
            role: "Phó Tổng giám đốc",
            category: "gold",
            industry: "Sản xuất Dược phẩm & Thiết bị Y tế",
            phone: "0912.444.xxx",
            email: "edothanh@dongthap-pharma.vn",
            avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
          },
          {
            name: "Nguyễn Thị F",
            company: "Công ty Nông sản Sen Hồng",
            role: "Giám đốc",
            category: "silver",
            industry: "Chế biến và Xuất khẩu các sản phẩm từ Sen",
            phone: "0955.333.xxx",
            email: "fnguyen@senhongagri.com",
            avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&q=80"
          },
          {
            name: "Trần Văn G",
            company: "Hợp tác xã Công nghệ Sa Đéc",
            role: "Chủ nhiệm HTX",
            category: "silver",
            industry: "Phát triển phần mềm, giải pháp IOT Nông nghiệp",
            phone: "0966.222.xxx",
            email: "gtran@sadechitech.vn",
            avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80"
          }
        ]
      }
    }
  ]
};

// Tổng hợp dữ liệu mẫu ban đầu để dễ dàng nạp
export const initialDataMap = {
  homepage: defaultHomepageData,
  gioithieu: defaultGioiThieuData,
  hoivien: defaultHoiVienData
};
