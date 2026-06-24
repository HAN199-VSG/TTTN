import React, { useState, useEffect } from 'react';
import { Puck, Render } from '@measured/puck';
import '@measured/puck/puck.css';

// Nhập cấu hình Puck và dữ liệu mẫu
import config from './blocks/admin-puck-config';
import { 
  defaultHomepageData, 
  defaultGioiThieuData, 
  defaultHoiVienData,
  defaultRootProps
} from './blocks/default-data';

// Nhập các component hiển thị
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  // 1. Quản lý định tuyến bằng State đồng bộ URL
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  const [activeLang, setActiveLang] = useState('VN');

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (path) => {
    window.history.pushState(null, '', path);
    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // 2. Quản lý dữ liệu kéo thả của 3 trang (Bọc try-catch phòng tránh dữ liệu cũ bị lỗi gây trắng trang)
  const [homeData, setHomeData] = useState(() => {
    try {
      const saved = localStorage.getItem('hhc_page_home');
      if (saved && saved !== 'undefined') {
        const parsed = JSON.parse(saved);
        if (parsed && parsed.content) return parsed;
      }
    } catch (e) {
      console.error("Lỗi đọc dữ liệu Trang chủ:", e);
    }
    return defaultHomepageData;
  });

  const [aboutData, setAboutData] = useState(() => {
    try {
      const saved = localStorage.getItem('hhc_page_about');
      if (saved && saved !== 'undefined') {
        const parsed = JSON.parse(saved);
        if (parsed && parsed.content) return parsed;
      }
    } catch (e) {
      console.error("Lỗi đọc dữ liệu Giới thiệu:", e);
    }
    return defaultGioiThieuData;
  });

  const [membersData, setMembersData] = useState(() => {
    try {
      const saved = localStorage.getItem('hhc_page_members');
      if (saved && saved !== 'undefined') {
        const parsed = JSON.parse(saved);
        if (parsed && parsed.content) return parsed;
      }
    } catch (e) {
      console.error("Lỗi đọc dữ liệu Hội viên:", e);
    }
    return defaultHoiVienData;
  });

  // Trang hiện đang được chỉnh sửa trong Admin Mode
  const [adminSelectedPage, setAdminSelectedPage] = useState('home'); // 'home' | 'about' | 'members'

  // Lưu dữ liệu khi nhấn Publish trong Puck
  const handlePublish = (data, pageKey) => {
    if (pageKey === 'home') {
      setHomeData(data);
      localStorage.setItem('hhc_page_home', JSON.stringify(data));
    } else if (pageKey === 'about') {
      setAboutData(data);
      localStorage.setItem('hhc_page_about', JSON.stringify(data));
    } else if (pageKey === 'members') {
      setMembersData(data);
      localStorage.setItem('hhc_page_members', JSON.stringify(data));
    }
    alert('Đã lưu cấu hình và xuất bản giao diện thành công.');
  };

  // Khôi phục dữ liệu mẫu
  const handleResetToDefault = (pageKey) => {
    const confirmReset = window.confirm('Bạn có chắc chắn muốn khôi phục giao diện trang này về mặc định ban đầu? Mọi chỉnh sửa chưa lưu sẽ bị xóa.');
    if (!confirmReset) return;

    if (pageKey === 'home') {
      setHomeData(defaultHomepageData);
      localStorage.setItem('hhc_page_home', JSON.stringify(defaultHomepageData));
    } else if (pageKey === 'about') {
      setAboutData(defaultGioiThieuData);
      localStorage.setItem('hhc_page_about', JSON.stringify(defaultGioiThieuData));
    } else if (pageKey === 'members') {
      setMembersData(defaultHoiVienData);
      localStorage.setItem('hhc_page_members', JSON.stringify(defaultHoiVienData));
    }
    alert('Đã khôi phục dữ liệu trang thành công.');
  };

  // Xuất dữ liệu cấu hình ra file JSON
  const handleExportJSON = (pageKey) => {
    let dataToExport = homeData;
    if (pageKey === 'about') dataToExport = aboutData;
    if (pageKey === 'members') dataToExport = membersData;

    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(dataToExport, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `clb_dong_thap_config_${pageKey}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  // Nhập dữ liệu từ file JSON
  const handleImportJSON = (e, pageKey) => {
    const fileReader = new FileReader();
    const file = e.target.files[0];
    if (!file) return;

    fileReader.onload = (event) => {
      try {
        const importedData = JSON.parse(event.target.result);
        if (!importedData.content || !importedData.root) {
          throw new Error('Định dạng file cấu hình Puck không hợp lệ.');
        }

        if (pageKey === 'home') {
          setHomeData(importedData);
          localStorage.setItem('hhc_page_home', JSON.stringify(importedData));
        } else if (pageKey === 'about') {
          setAboutData(importedData);
          localStorage.setItem('hhc_page_about', JSON.stringify(importedData));
        } else if (pageKey === 'members') {
          setMembersData(importedData);
          localStorage.setItem('hhc_page_members', JSON.stringify(importedData));
        }
        alert('Đã tải và áp dụng file cấu hình thành công.');
      } catch (error) {
        alert('Lỗi: File tải lên không đúng định dạng JSON cấu hình Puck.');
      }
    };
    fileReader.readAsText(file);
    // Reset file input để có thể upload tiếp cùng 1 file nếu muốn
    e.target.value = '';
  };

  // Lấy dữ liệu Puck hiện tại cho trang tương ứng
  const getActiveAdminData = () => {
    if (adminSelectedPage === 'about') return aboutData;
    if (adminSelectedPage === 'members') return membersData;
    return homeData;
  };

  // Lấy đường dẫn đích tương ứng với trang đang edit
  const getActiveAdminDestPath = () => {
    if (adminSelectedPage === 'about') return '/gioi-thieu';
    if (adminSelectedPage === 'members') return '/hoi-vien';
    return '/';
  };

  // Render giao diện người dùng
  const renderUserView = (data, path) => {
    const safeData = data || defaultHomepageData;
    const rootProps = safeData.root?.props || defaultRootProps;
    const texts = rootProps.logoTexts ? rootProps.logoTexts.map(t => typeof t === 'string' ? t : (t.text || '')) : [];
    const menu = rootProps.menu || defaultRootProps.menu;
    const footerContact = rootProps.footerContact || defaultRootProps.footerContact;

    return (
      <div className="min-h-screen flex flex-col justify-between relative bg-[#f0f6fa]">
        {/* Silk gradient background */}
        <div className="fixed inset-0 pointer-events-none z-0 mix-blend-soft-light opacity-60 bg-gradient-silk animate-gradientFlow" />

        {/* Header */}
        <Header 
          logoUrl={rootProps.logoUrl} 
          logoTexts={texts} 
          menu={menu} 
          currentPath={path}
          onNavigate={navigate}
          activeLang={activeLang}
          onChangeLang={setActiveLang}
        />
        
        {/* Main Content Render */}
        <main className="flex-grow relative z-10">
          <Render config={config} data={data} />
        </main>

        {/* Footer */}
        <Footer 
          logoUrl={rootProps.logoUrl} 
          logoTexts={texts} 
          menu={menu} 
          footerContact={footerContact}
          onNavigate={navigate}
          activeLang={activeLang}
        />
      </div>
    );
  };

  // ROUTING RENDER LOGIC
  if (currentPath === '/admin') {
    return (
      <div className="h-screen flex flex-col bg-slate-900 text-white overflow-hidden select-none">
        
        {/* Top Control Bar for Admin CMS */}
        <div className="bg-slate-950 border-b border-slate-800 px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4 shrink-0 z-50">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 bg-gradient-to-tr from-[#0072ff] to-[#FAF390] rounded-lg shadow-inner flex items-center justify-center">
              <span className="text-xs font-black text-slate-950">SH</span>
            </div>
            <h1 className="text-base font-extrabold tracking-wide">
              ADMIN CMS <span className="text-slate-500 font-medium">| CLB Doanh nhân Đồng Tháp</span>
            </h1>
          </div>

          {/* Page Selector Tabs */}
          <div className="flex bg-slate-900 border border-slate-800 rounded-xl p-[3px] gap-1">
            <button 
              onClick={() => setAdminSelectedPage('home')}
              className={`px-4 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                adminSelectedPage === 'home' 
                  ? 'bg-[#0b5077] text-white shadow-md' 
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              Trang chủ
            </button>
            <button 
              onClick={() => setAdminSelectedPage('about')}
              className={`px-4 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                adminSelectedPage === 'about' 
                  ? 'bg-[#0b5077] text-white shadow-md' 
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              Giới thiệu
            </button>
            <button 
              onClick={() => setAdminSelectedPage('members')}
              className={`px-4 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                adminSelectedPage === 'members' 
                  ? 'bg-[#0b5077] text-white shadow-md' 
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              Hội viên
            </button>
          </div>

          {/* Quick Action Tools */}
          <div className="flex items-center gap-3 flex-wrap">
            
            {/* Import JSON Input */}
            <label className="px-3 py-2 text-[11px] font-bold bg-slate-800 border border-slate-700 rounded-xl hover:bg-slate-700 transition-colors cursor-pointer text-slate-200">
              Nhập JSON
              <input 
                type="file" 
                accept=".json" 
                onChange={(e) => handleImportJSON(e, adminSelectedPage)}
                className="hidden" 
              />
            </label>
            
            <button 
              onClick={() => handleExportJSON(adminSelectedPage)}
              className="px-3 py-2 text-[11px] font-bold bg-slate-800 border border-slate-700 rounded-xl hover:bg-slate-700 transition-colors cursor-pointer text-slate-200"
            >
              Xuất JSON
            </button>

            <button 
              onClick={() => handleResetToDefault(adminSelectedPage)}
              className="px-3 py-2 text-[11px] font-bold bg-red-950/40 border border-red-900/40 text-red-200 rounded-xl hover:bg-red-900/40 transition-colors cursor-pointer"
            >
              Đặt lại mặc định
            </button>

            <button 
              onClick={() => navigate(getActiveAdminDestPath())}
              className="px-4 py-2 text-xs font-black bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-xl shadow-md hover:scale-103 transition-transform cursor-pointer"
            >
              Xem Website
            </button>
          </div>
        </div>

        {/* Puck Visual Canvas Editor */}
        <div className="flex-grow w-full relative">
          <Puck 
            key={adminSelectedPage} // Rerender Puck khi thay đổi trang để nạp dữ liệu sạch
            config={config} 
            data={getActiveAdminData()} 
            onPublish={(data) => handlePublish(data, adminSelectedPage)}
            headerPath="/admin"
          />
        </div>
      </div>
    );
  }

  // Khớp tuyến đường hiển thị cho người dùng
  if (currentPath === '/gioi-thieu') {
    return renderUserView(aboutData, '/gioi-thieu');
  }

  if (currentPath === '/hoi-vien') {
    return renderUserView(membersData, '/hoi-vien');
  }

  // Mặc định render Trang chủ (/)
  return renderUserView(homeData, '/');
}

export default App;