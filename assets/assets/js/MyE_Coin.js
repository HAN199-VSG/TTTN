/**
 * MyE_Coin.js - MyE Website
 * Trang: MyE Coin
 */

document.addEventListener('DOMContentLoaded', function () {

    // ============================
    // 1. STICKY HEADER
    // ============================
    const header = document.getElementById('site-header');
    window.addEventListener('scroll', () => {
        header.classList.toggle('scrolled', window.scrollY > 60);
    }, { passive: true });

    // ============================
    // 2. PAYMENT METHOD SELECTION
    // ============================
    const paymentCards = document.querySelectorAll('.payment-card');
    let selectedMethod = null;

    paymentCards.forEach(card => {
        card.addEventListener('click', function () {
            paymentCards.forEach(c => c.classList.remove('selected'));
            this.classList.add('selected');
            selectedMethod = this.dataset.method;
        });
    });

    // ============================
    // 3. PACKAGE SELECTION & BUY ACTION
    // ============================
    const pkgCards = document.querySelectorAll('.pkg-card');

    pkgCards.forEach(card => {
        // Select package card on click (visual highlight)
        card.addEventListener('click', function () {
            pkgCards.forEach(c => c.classList.remove('selected'));
            this.classList.add('selected');
        });

        // Click buy button
        const btnBuy = card.querySelector('.btn-pkg-buy');
        if (btnBuy) {
            btnBuy.addEventListener('click', function (e) {
                e.preventDefault();
                e.stopPropagation(); // Prevent triggering card click twice

                if (!selectedMethod) {
                    showToast('Vui lòng chọn hình thức nạp ở phía trên!', 'warning');
                    document.getElementById('payment-grid').scrollIntoView({ behavior: 'smooth' });
                    return;
                }

                const amount = card.dataset.amount;
                const price = card.dataset.price;
                const selectedPkg = { amount, price };

                // Store selections in sessionStorage to pass to checkout page
                sessionStorage.setItem('selectedPkg', JSON.stringify(selectedPkg));
                sessionStorage.setItem('selectedMethod', selectedMethod);

                showToast('Đang chuyển hướng đến trang thanh toán...', 'success');
                setTimeout(() => {
                    window.location.href = 'Thong_tin_giao_dich.html';
                }, 800);
            });
        }
    });

    // ============================
    // 4. TOAST NOTIFICATION
    // ============================
    function showToast(message, type = 'info') {
        const existing = document.getElementById('mye-toast');
        if (existing) existing.remove();

        const toast = document.createElement('div');
        toast.id = 'mye-toast';
        const colors = { warning: '#FF6B00', success: '#22c55e', info: '#3b82f6' };
        toast.style.cssText = `
            position: fixed;
            bottom: 30px;
            right: 30px;
            background: ${colors[type] || colors.info};
            color: white;
            padding: 14px 22px;
            border-radius: 12px;
            font-weight: 600;
            font-size: 0.9rem;
            z-index: 9999;
            animation: toastIn 0.3s ease;
            box-shadow: 0 8px 30px rgba(0,0,0,0.3);
            display: flex;
            align-items: center;
            gap: 10px;
            font-family: 'Be Vietnam Pro', sans-serif;
        `;
        const icons = { warning: 'exclamation-circle-fill', success: 'check-circle-fill', info: 'info-circle-fill' };
        toast.innerHTML = `<i class="bi bi-${icons[type] || 'info-circle-fill'}" style="font-size:1.1rem"></i>${message}`;
        document.body.appendChild(toast);

        const style = document.createElement('style');
        style.textContent = `
            @keyframes toastIn { from { opacity:0; transform: translateY(20px); } to { opacity:1; transform: translateY(0); } }
            @keyframes toastOut { from { opacity:1; } to { opacity:0; transform: translateY(10px); } }
        `;
        document.head.appendChild(style);

        setTimeout(() => {
            toast.style.animation = 'toastOut 0.3s ease forwards';
            setTimeout(() => toast.remove(), 350);
        }, 3000);
    }

    // ============================
    // 5. PACKAGE CARD ANIMATION
    // ============================
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, i) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, i * 50);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.05 });

    pkgCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
        observer.observe(card);
    });

});
