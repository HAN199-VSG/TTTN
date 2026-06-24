import React, { useState, useEffect, useRef } from 'react';

// Sub-component xử lý đếm số hoạt họa
const AnimatedNumber = ({ value, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);
  
  useEffect(() => {
    let start = 0;
    const end = parseInt(value, 10);
    if (isNaN(end) || end <= 0) {
      setCount(value);
      return;
    }

    const duration = 1500; // 1.5 giây hoạt họa
    const frameRate = 1000 / 60; // 60fps
    const totalFrames = Math.round(duration / frameRate);
    let frame = 0;

    const timer = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      
      // Lớp gia tốc EaseOut để đếm chậm dần về sau cho mượt
      const easeOutQuad = (t) => t * (2 - t);
      const currentCount = Math.round(end * easeOutQuad(progress));
      
      setCount(currentCount);

      if (frame >= totalFrames) {
        clearInterval(timer);
        setCount(end);
      }
    }, frameRate);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <span className="font-serif text-5xl md:text-6xl font-black text-[#0B2540] tracking-tight">
      {count}{suffix}
    </span>
  );
};

const StatsCounter = ({
  sectionTitle = "HÀNH TRÌNH KIẾN TẠO",
  items = []
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Chỉ đếm 1 lần khi cuộn qua
        }
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={containerRef}
      className="py-24 bg-gradient-to-b from-[#d4e0ff] via-[#e8d8ff] to-[#f5e0f8] relative z-10 overflow-hidden text-center"
    >
      {/* Decorative center mandala watermark */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] max-w-full h-full bg-no-repeat bg-center bg-contain mix-blend-screen opacity-75 pointer-events-none z-0"
        style={{ backgroundImage: `url('https://webdemo.hexagon.xyz/medias/hoa.webp')` }}
      />

      <div className="max-w-[1400px] mx-auto px-4 md:px-8 relative z-10">
        
        {/* Title */}
        <h2 className="text-[#0B5077] font-extrabold text-2xl md:text-3xl tracking-wider uppercase mb-16 select-none">
          {sectionTitle}
        </h2>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-6">
          {items.map((item, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center p-6 bg-white/10 border border-white/20 hover:bg-white/20 hover:-translate-y-1.5 rounded-2xl transition-all duration-300 backdrop-blur-sm"
            >
              {/* Animated number */}
              {isVisible ? (
                <AnimatedNumber value={item.number} suffix={item.suffix} />
              ) : (
                <span className="font-serif text-5xl md:text-6xl font-black text-[#0B2540] tracking-tight">
                  0{item.suffix}
                </span>
              )}

              {/* Decorative separator */}
              <div className="w-10 h-[2px] bg-[#0072ff]/50 rounded-full my-4" />

              {/* Description */}
              <p className="text-xs md:text-sm text-[#1e293b] font-semibold leading-relaxed max-w-[200px] select-text">
                {item.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default StatsCounter;
