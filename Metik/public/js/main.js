document.addEventListener('DOMContentLoaded', () => {

  // --- STICKY HEADER ---
  const header = document.querySelector('.header-wrapper');
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
    // Trigger scroll check on load in case page is refreshed down
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    }
  }

  // --- MOBILE SIDEBAR DRAWER ---
  const menuToggle = document.querySelector('.menu-toggle');
  const sidebar = document.querySelector('.mobile-sidebar');
  const sidebarOverlay = document.querySelector('.mobile-sidebar-overlay');
  const sidebarClose = document.querySelector('.mobile-sidebar-close');

  if (menuToggle && sidebar && sidebarOverlay) {
    const openMenu = () => {
      sidebar.classList.add('show');
      sidebarOverlay.classList.add('show');
      document.body.style.overflow = 'hidden'; // Lock background scroll
    };

    const closeMenu = () => {
      sidebar.classList.remove('show');
      sidebarOverlay.classList.remove('show');
      document.body.style.overflow = 'auto'; // Unlock background scroll
    };

    menuToggle.addEventListener('click', openMenu);
    sidebarOverlay.addEventListener('click', closeMenu);
    if (sidebarClose) sidebarClose.addEventListener('click', closeMenu);
  }

  // --- HERO SLIDER ---
  const slides = document.querySelectorAll('.hero-slider-section .slide');
  const dots = document.querySelectorAll('.hero-slider-section .slider-dot');
  const nextBtn = document.querySelector('.hero-slider-section .slider-btn-next');
  const prevBtn = document.querySelector('.hero-slider-section .slider-btn-prev');
  let currentSlide = 0;
  let slideInterval;

  if (slides.length > 0) {
    const showSlide = (n) => {
      slides.forEach(s => s.classList.remove('active'));
      dots.forEach(d => d.classList.remove('active'));
      
      currentSlide = (n + slides.length) % slides.length;
      slides[currentSlide].classList.add('active');
      if (dots[currentSlide]) dots[currentSlide].classList.add('active');
    };

    const nextSlide = () => {
      showSlide(currentSlide + 1);
    };

    const prevSlide = () => {
      showSlide(currentSlide - 1);
    };

    if (nextBtn) nextBtn.addEventListener('click', () => { nextSlide(); resetInterval(); });
    if (prevBtn) prevBtn.addEventListener('click', () => { prevSlide(); resetInterval(); });

    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        showSlide(index);
        resetInterval();
      });
    });

    const startInterval = () => {
      slideInterval = setInterval(nextSlide, 5000);
    };

    const resetInterval = () => {
      clearInterval(slideInterval);
      startInterval();
    };

    startInterval();
  }

  // --- TESTIMONIALS SLIDER ---
  const testimonialSlides = document.querySelectorAll('.testimonials-slider-wrap .testimonial-slide');
  const testimonialDots = document.querySelectorAll('.testimonials-slider-wrap .testimonial-dot');
  let currentTestimonial = 0;
  let testimonialInterval;

  if (testimonialSlides.length > 0) {
    const container = document.querySelector('.testimonials-container');
    const showTestimonial = (n) => {
      testimonialDots.forEach(d => d.classList.remove('active'));
      currentTestimonial = (n + testimonialSlides.length) % testimonialSlides.length;
      
      if (container) {
        container.style.transform = `translateX(-${currentTestimonial * 100}%)`;
      }
      if (testimonialDots[currentTestimonial]) {
        testimonialDots[currentTestimonial].classList.add('active');
      }
    };

    testimonialDots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        showTestimonial(index);
        resetTestimonialInterval();
      });
    });

    const nextTestimonial = () => {
      showTestimonial(currentTestimonial + 1);
    };

    const startTestimonialInterval = () => {
      testimonialInterval = setInterval(nextTestimonial, 6000);
    };

    const resetTestimonialInterval = () => {
      clearInterval(testimonialInterval);
      startTestimonialInterval();
    };

    startTestimonialInterval();
  }

  // --- PRODUCT TAB SWITCHER ---
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabPanels = document.querySelectorAll('.tab-panel');

  if (tabBtns.length > 0) {
    tabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const target = btn.dataset.tab;
        
        tabBtns.forEach(b => b.classList.remove('active'));
        tabPanels.forEach(p => p.classList.remove('active'));

        btn.classList.add('active');
        const activePanel = document.getElementById(`tab-${target}`);
        if (activePanel) activePanel.classList.add('active');
      });
    });
  }

  // --- ANIMATE METRIC BARS ON SCROLL ---
  const metricBars = document.querySelectorAll('.flavor-metric-bar');
  if (metricBars.length > 0) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const bar = entry.target;
          const targetVal = bar.dataset.value;
          bar.style.width = `${targetVal}%`;
          observer.unobserve(bar); // Trigger once
        }
      });
    }, { threshold: 0.1 });

    metricBars.forEach(bar => {
      observer.observe(bar);
    });
  }

  // --- IMAGE ZOOM GALLERY MODAL ---
  const mainImage = document.querySelector('.product-detail-img-main img');
  if (mainImage) {
    // Create Zoom Modal elements dynamically
    const zoomOverlay = document.createElement('div');
    zoomOverlay.className = 'zoom-modal-overlay';
    
    const zoomImg = document.createElement('img');
    zoomImg.className = 'zoom-modal-img';
    
    const closeBtn = document.createElement('span');
    closeBtn.className = 'zoom-modal-close';
    closeBtn.innerHTML = '&times;';
    
    zoomOverlay.appendChild(zoomImg);
    zoomOverlay.appendChild(closeBtn);
    document.body.appendChild(zoomOverlay);

    mainImage.addEventListener('click', () => {
      zoomImg.src = mainImage.src;
      zoomOverlay.classList.add('show');
      document.body.style.overflow = 'hidden';
    });

    const closeZoom = () => {
      zoomOverlay.classList.remove('show');
      document.body.style.overflow = 'auto';
    };

    zoomOverlay.addEventListener('click', (e) => {
      if (e.target !== zoomImg) {
        closeZoom();
      }
    });
    closeBtn.addEventListener('click', closeZoom);
  }

  // --- CONTACT FORM SUBMIT & MODAL POPUP ---
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    // Create success modal elements dynamically
    const modalOverlay = document.createElement('div');
    modalOverlay.className = 'modal-overlay';
    
    modalOverlay.innerHTML = `
      <div class="modal-card">
        <div class="modal-icon">
          <i class="fas fa-check"></i>
        </div>
        <h3 class="modal-title">Gửi liên hệ thành công!</h3>
        <p class="modal-desc">Cảm ơn bạn đã quan tâm đến METIK. Chúng tôi sẽ phản hồi lại bạn trong thời gian sớm nhất.</p>
        <button class="btn btn-secondary modal-close-btn">Đóng</button>
      </div>
    `;
    document.body.appendChild(modalOverlay);

    const closeSuccessModal = () => {
      modalOverlay.classList.remove('show');
      document.body.style.overflow = 'auto';
    };

    modalOverlay.querySelector('.modal-close-btn').addEventListener('click', closeSuccessModal);
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) {
        closeSuccessModal();
      }
    });

    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // Basic validation
      const name = contactForm.querySelector('[name="name"]').value.trim();
      const email = contactForm.querySelector('[name="email"]').value.trim();
      const phone = contactForm.querySelector('[name="phone"]').value.trim();
      const message = contactForm.querySelector('[name="message"]').value.trim();

      if (!name || !email || !phone || !message) {
        alert('Vui lòng điền đầy đủ tất cả các trường.');
        return;
      }

      // Send data to backend API
      fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, phone, message })
      })
      .then(res => {
        if (res.ok) {
          // Show success modal
          document.body.style.overflow = 'hidden';
          modalOverlay.classList.add('show');
          contactForm.reset();
        } else {
          alert('Có lỗi xảy ra khi gửi tin nhắn. Vui lòng thử lại sau.');
        }
      })
      .catch(err => {
        console.error(err);
        alert('Không thể kết nối tới server. Vui lòng kiểm tra lại mạng.');
      });
    });
  }

  // --- COOKIE CONSENT BOX ---
  const cookieBox = document.getElementById('cookie-box');
  const cookieAcceptBtn = document.getElementById('cookie-accept-button');

  if (cookieBox && cookieAcceptBtn) {
    // Check if user already accepted cookies
    if (!localStorage.getItem('cookie_consent_accepted')) {
      setTimeout(() => {
        cookieBox.classList.add('show');
      }, 2000); // Delay show for nicer entry animation
    }

    cookieAcceptBtn.addEventListener('click', (e) => {
      e.preventDefault();
      localStorage.setItem('cookie_consent_accepted', 'true');
      cookieBox.classList.remove('show');
    });
  }

  // --- BACK TO TOP BUTTON ---
  const backToTopBtn = document.getElementById('top-link');
  if (backToTopBtn) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        backToTopBtn.style.opacity = '1';
        backToTopBtn.style.pointerEvents = 'auto';
        backToTopBtn.style.transform = 'translateY(0)';
      } else {
        backToTopBtn.style.opacity = '0';
        backToTopBtn.style.pointerEvents = 'none';
        backToTopBtn.style.transform = 'translateY(15px)';
      }
    });

    // Style button visibility transitions smoothly
    backToTopBtn.style.transition = 'all 0.3s ease';
    backToTopBtn.style.opacity = '0';
    backToTopBtn.style.pointerEvents = 'none';
    backToTopBtn.style.transform = 'translateY(15px)';
    
    // Smooth scroll is already defined on html, but let's click listener to be sure
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
});
