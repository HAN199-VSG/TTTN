/**
 * Nap_game.js - MyE Website
 * Trang: Nạp Game
 */

document.addEventListener('DOMContentLoaded', function () {

    // ============================
    // 1. STICKY HEADER SHADOW
    // ============================
    const header = document.getElementById('site-header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 10) {
            header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.35)';
        } else {
            header.style.boxShadow = '0 2px 12px rgba(0,0,0,0.25)';
        }
    }, { passive: true });

    // ============================
    // 2. FILTER TABS
    // ============================
    const tabs = document.querySelectorAll('.filter-tab');
    const gameItems = document.querySelectorAll('.game-item');

    tabs.forEach(tab => {
        tab.addEventListener('click', function () {
            // Active tab
            tabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');

            const genre = this.dataset.genre;

            // Filter cards
            gameItems.forEach((item, i) => {
                const itemGenre = item.dataset.genre;
                const show = genre === 'all' || itemGenre === genre;

                if (show) {
                    item.style.display = '';
                    // Stagger animation
                    item.style.animation = 'none';
                    item.offsetHeight; // reflow
                    item.style.animation = `fadeCard 0.3s ease ${i * 0.04}s both`;
                } else {
                    item.style.display = 'none';
                }
            });

            // Reset dots
            updateDots();
        });
    });

    // Keyframe for card animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeCard {
            from { opacity: 0; transform: translateY(14px) scale(0.97); }
            to   { opacity: 1; transform: translateY(0) scale(1); }
        }
    `;
    document.head.appendChild(style);

    // Initial stagger on load
    gameItems.forEach((item, i) => {
        item.style.animation = `fadeCard 0.35s ease ${i * 0.05}s both`;
    });

    // ============================
    // 3. SEARCH
    // ============================
    const searchInput = document.getElementById('game-search');
    if (searchInput) {
        searchInput.addEventListener('input', function () {
            const q = this.value.toLowerCase().trim();
            gameItems.forEach(item => {
                const name = item.querySelector('.game-name')?.textContent.toLowerCase() || '';
                item.style.display = (!q || name.includes(q)) ? '' : 'none';
            });
        });
    }

    // ============================
    // 4. PAGINATION DOTS (visual)
    // ============================
    const dots = document.querySelectorAll('.dot');
    let activeDot = 0;

    dots.forEach((dot, i) => {
        dot.addEventListener('click', function () {
            activeDot = i;
            updateDots();
        });
    });

    function updateDots() {
        dots.forEach((d, i) => {
            d.classList.toggle('active', i === activeDot);
        });
    }

    // ============================
    // 5. GAME CARD RIPPLE
    // ============================
    document.querySelectorAll('.game-card').forEach(card => {
        card.addEventListener('click', function (e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            Object.assign(ripple.style, {
                position: 'absolute',
                width: size + 'px',
                height: size + 'px',
                borderRadius: '50%',
                background: 'rgba(26,79,188,0.15)',
                left: (e.clientX - rect.left - size / 2) + 'px',
                top: (e.clientY - rect.top - size / 2) + 'px',
                transform: 'scale(0)',
                animation: 'rippleEffect 0.5s ease-out',
                pointerEvents: 'none',
                zIndex: 10,
            });
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            setTimeout(() => ripple.remove(), 550);
        });
    });

    const rippleStyle = document.createElement('style');
    rippleStyle.textContent = `@keyframes rippleEffect { to { transform: scale(2.5); opacity: 0; } }`;
    document.head.appendChild(rippleStyle);

});
