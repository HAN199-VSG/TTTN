import React from 'react';

// Video — layout 2 cột giống demo METIK: text trái (tiêu đề + mô tả) + video phải.
const AdminVideo = ({
  title = 'VỀ CHÚNG TÔI',
  description = '',
  videoUrl,
  posterUrl,
  autoPlay = false,
  loop = false,
  controls = true,
  borderRadiusDiag1 = 16,  // ↖ top-left  &  ↘ bottom-right
  borderRadiusDiag2 = 16,  // ↗ top-right &  ↙ bottom-left
}) => {
  // Tự thêm 'px' nếu giá trị là số
  const toR = (val) => (typeof val === 'number' ? `${val}px` : val);
  const d1 = toR(borderRadiusDiag1);
  const d2 = toR(borderRadiusDiag2);
  // CSS border-radius: top-left top-right bottom-right bottom-left
  const videoBorderRadius = `${d1} ${d2} ${d1} ${d2}`;

  const isEmbed =
    videoUrl &&
    (videoUrl.includes('youtube.com') ||
      videoUrl.includes('youtu.be') ||
      videoUrl.includes('vimeo.com'));

  // ⚠️ Render video trực tiếp (không dùng nested component) để tránh remount gây giật
  const renderVideo = () => {
    if (!videoUrl) {
      return (
        <div
          className="w-full aspect-video flex items-center justify-center bg-gray-200 border-2 border-dashed border-gray-400"
          style={{ borderRadius: videoBorderRadius }}
        >
          <p className="text-gray-500 font-bold">Chưa có video</p>
        </div>
      );
    }
    if (isEmbed) {
      return (
        <div
          className="relative w-full overflow-hidden shadow-xl"
          style={{ borderRadius: videoBorderRadius, paddingTop: '56.25%' }}
        >
          <iframe
            src={videoUrl}
            title="Video giới thiệu"
            className="absolute top-0 left-0 w-full h-full"
            style={{ borderRadius: videoBorderRadius }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      );
    }
    return (
      <video
        src={videoUrl}
        poster={posterUrl}
        autoPlay={autoPlay}
        loop={loop}
        controls={controls}
        muted={autoPlay}
        playsInline
        className="w-full h-auto shadow-xl"
        style={{ borderRadius: videoBorderRadius }}
      />
    );
  };

  return (
    <div className="w-full py-12 px-4">
      <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Cột trái: Tiêu đề + mô tả */}
        <div>
          {title && (
            <div className="mb-6">
              <div className="relative inline-block">
                <div 
                  className="absolute bottom-1 left-0 h-3 bg-[#ffd000]" 
                  style={{ width: '60%', zIndex: 0 }}
                />
                <h2
                  className="relative z-10 text-xl md:text-2xl font-black uppercase tracking-wide m-0"
                  style={{ color: '#2a7a2a' }}
                >
                  {title}
                </h2>
              </div>
            </div>
          )}
          {description && (
            <div
              className="text-sm text-gray-800 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: description }}
            />
          )}
        </div>

        {/* Cột phải: Video — gọi hàm thay vì render component để tránh remount */}
        <div>
          {renderVideo()}
        </div>
      </div>
    </div>
  );
};

export default AdminVideo;
