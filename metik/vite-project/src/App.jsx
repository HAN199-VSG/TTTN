import { useState } from "react";
import { Puck, Render } from "@measured/puck";
import "@measured/puck/puck.css";

// Import file cấu hình chứa các component kéo thả của bạn
import config from "./blocks/admin-puck-config";

// Khởi tạo dữ liệu trang trắng ban đầu
const defaultData = {
  content: [],
  root: {},
};

function App() {
  // Đọc dữ liệu đã lưu từ localStorage khi khởi động (nếu có)
  const [data, setData] = useState(defaultData);

  // Trạng thái để chuyển đổi giữa Editor và chế độ Xem trang (Preview)
  const [isPreview, setIsPreview] = useState(false);

  // Hàm xử lý khi người dùng bấm nút "Publish" trên giao diện
  const handlePublish = (newData) => {
    setData(newData);
    localStorage.setItem("puck-data", JSON.stringify(newData));
    alert("Đã xuất bản thành công! Hệ thống sẽ chuyển sang chế độ Xem Trang.");
    setIsPreview(true); // Chuyển sang chế độ xem
  };

  // Nếu đang ở chế độ xem trước (Preview Mode)
  if (isPreview) {
    return (
      <div className="relative min-h-screen">
        {/* Render component của Puck dùng để hiển thị giao diện đã tạo */}
        <Render config={config} data={data} />

        {/* Nút lơ lửng góc dưới bên phải để quay lại trình chỉnh sửa */}
        <button
          onClick={() => setIsPreview(false)}
          className="fixed bottom-6 right-6 bg-[#f4851a] text-white px-6 py-3 rounded-full font-bold shadow-xl hover:bg-orange-600 transition-all z-[9999] flex items-center gap-2"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"></path></svg>
          Quay lại Editor
        </button>
      </div>
    );
  }

  // Chế độ trình chỉnh sửa (Editor Mode)
  return (
    <div className="h-screen w-full">
      <Puck config={config} data={data} onPublish={handlePublish} />
    </div>
  );
}

export default App;
