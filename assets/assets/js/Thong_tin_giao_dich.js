/**
 * Thong_tin_giao_dich.js - MyE Website
 * Trang: Thông Tin Giao Dịch
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
    // 2. LOAD SELECTIONS & CONSTANTS
    // ============================
    const coinImages = {
        '20': '../images/thong_tin_giao_dich/Chon_goi_nap/20_MYE_COIN.png',
        '50': '../images/thong_tin_giao_dich/Chon_goi_nap/50_MYE_COIN.png',
        '100': '../images/thong_tin_giao_dich/Chon_goi_nap/100_MYE_COIN.png',
        '500': '../images/thong_tin_giao_dich/Chon_goi_nap/500_MYE_COIN.png',
        '1000': '../images/thong_tin_giao_dich/Chon_goi_nap/1000_MYE_COIN.png',
        '2000': '../images/thong_tin_giao_dich/Chon_goi_nap/2000_MYE_COIN.png',
        '5000': '../images/thong_tin_giao_dich/Chon_goi_nap/5000_MYE_COIN.png',
        '10000': '../images/thong_tin_giao_dich/Chon_goi_nap/10000_MYE_COIN.png'
    };

    const methodNames = {
        momo: 'MoMo',
        zalopay: 'ZaloPay',
        atm: 'ATM/Banking',
        visa: 'Visa/Master',
        qr: 'QR Code',
        direct: 'Trực tiếp',
        identity: 'Định danh (1:1)'
    };

    const methodIcons = {
        momo: '<img src="../images/thong_tin_giao_dich/momo.png" style="width:20px;height:20px;object-fit:contain;border-radius:4px">',
        zalopay: '<img src="../images/MyE_Coin/Hinh_thuc_nap/ZaloPay.png" style="width:20px;height:20px;object-fit:contain;border-radius:4px">',
        atm: '<i class="bi bi-bank2" style="color:#1A4FBC;font-size:1.1rem"></i>',
        visa: '<i class="bi bi-credit-card-2-front-fill" style="color:#1A4FBC;font-size:1.1rem"></i>',
        qr: '<i class="bi bi-qr-code-scan" style="color:#1A4FBC;font-size:1.1rem"></i>',
        direct: '<i class="bi bi-cash-stack" style="color:#1A4FBC;font-size:1.1rem"></i>',
        identity: '<i class="bi bi-person-vcard-fill" style="color:#1A4FBC;font-size:1.1rem"></i>'
    };

    let selectedPkg = JSON.parse(sessionStorage.getItem('selectedPkg') || '{"amount":"500","price":"500000"}');
    let selectedMethod = sessionStorage.getItem('selectedMethod') || 'momo';

    // ============================
    // 3. UPDATE TRANSACTION CARD
    // ============================
    function updateTransactionCard() {
        const txCoins = document.getElementById('tx-coins');
        const txMethodName = document.getElementById('tx-method-name');
        const txMethodIcon = document.getElementById('tx-method-icon-container');
        const txTotalPrice = document.getElementById('tx-total-price');
        const heroCoinImg = document.getElementById('hero-coin-img');

        // Update package coins & price
        const amountNum = parseInt(selectedPkg.amount);
        const priceNum = parseInt(selectedPkg.price);

        if (txCoins) txCoins.textContent = `${amountNum.toLocaleString('vi-VN')} Coin`;
        if (txTotalPrice) txTotalPrice.textContent = `${priceNum.toLocaleString('vi-VN')} VNĐ`;

        // Update coin big illustration on left
        if (heroCoinImg) {
            heroCoinImg.src = coinImages[selectedPkg.amount] || coinImages['500'];
        }

        // Update payment method info
        if (txMethodName) {
            txMethodName.textContent = methodNames[selectedMethod] || selectedMethod;
        }
        if (txMethodIcon) {
            txMethodIcon.innerHTML = methodIcons[selectedMethod] || '<i class="bi bi-wallet2"></i>';
        }

        // Highlight corresponding mini card in grid if matches
        document.querySelectorAll('.pkg-card').forEach(card => {
            if (card.dataset.amount === selectedPkg.amount) {
                card.classList.add('selected');
            } else {
                card.classList.remove('selected');
            }
        });
    }

    // ============================
    // 4. BIND PACKAGE SELECTIONS
    // ============================
    const pkgCards = document.querySelectorAll('.pkg-card');
    pkgCards.forEach(card => {
        card.addEventListener('click', function () {
            selectedPkg = {
                amount: this.dataset.amount,
                price: parseInt(this.dataset.price)
            };
            sessionStorage.setItem('selectedPkg', JSON.stringify(selectedPkg));
            updateTransactionCard();
        });

        const btnBuy = card.querySelector('.btn-pkg-buy');
        if (btnBuy) {
            btnBuy.addEventListener('click', function (e) {
                e.preventDefault();
                e.stopPropagation();
                selectedPkg = {
                    amount: card.dataset.amount,
                    price: parseInt(card.dataset.price)
                };
                sessionStorage.setItem('selectedPkg', JSON.stringify(selectedPkg));
                updateTransactionCard();
                document.getElementById('hero-transaction').scrollIntoView({ behavior: 'smooth' });
            });
        }
    });

    // Change payment method redirect
    const btnChangeMethod = document.getElementById('btn-change-method');
    if (btnChangeMethod) {
        btnChangeMethod.addEventListener('click', () => {
            window.location.href = 'MyE_Coin.html';
        });
    }

    // ============================
    // 5. THANH TOÁN ACTION
    // ============================
    const btnPayNow = document.getElementById('btn-pay-now');
    if (btnPayNow) {
        btnPayNow.addEventListener('click', function () {
            btnPayNow.innerHTML = '<span class="spinner-border spinner-border-sm me-2"></span>XỬ LÝ...';
            btnPayNow.disabled = true;

            setTimeout(() => {
                btnPayNow.innerHTML = 'THANH TOÁN';
                btnPayNow.disabled = false;

                // Show Bootstrap Modal
                const successModalEl = document.getElementById('successModal');
                if (successModalEl) {
                    const orderIdStr = '#MYE' + Math.floor(100000 + Math.random() * 900000);
                    const modalOrderId = successModalEl.querySelector('.modal-order-id strong');
                    if (modalOrderId) modalOrderId.textContent = orderIdStr;

                    const modal = new bootstrap.Modal(successModalEl);
                    modal.show();
                }
            }, 1500);
        });
    }

    // Initialize display
    updateTransactionCard();

    // ============================
    // 6. ANIMATE PACKAGE CARDS
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
