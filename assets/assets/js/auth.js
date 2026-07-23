/**
 * auth.js - MyE Recharge Portal
 * Handles authentication state, login modal injection, header profile widget, and dropdown menus.
 */

document.addEventListener('DOMContentLoaded', function () {
    // 1. INJECT STYLES
    const styleElement = document.createElement('style');
    styleElement.textContent = `
        /* Logged-in Header Widget */
        .user-profile-header-wrap {
            position: relative;
            display: inline-block;
        }
        .user-profile-header {
            display: flex;
            align-items: center;
            gap: 10px;
            cursor: pointer;
            padding: 4px 10px;
            border-radius: 8px;
            transition: background 0.2s ease;
            user-select: none;
        }
        .user-profile-header:hover {
            background: #f0f2f9;
        }
        .header-avatar-img {
            width: 38px;
            height: 38px;
            object-fit: cover;
            border-radius: 50%;
        }
        .header-user-info {
            display: flex;
            flex-direction: column;
            line-height: 1.25;
            text-align: left;
        }
        .header-username {
            color: #FF6B00;
            font-weight: 700;
            font-size: 0.9rem;
        }
        .header-userid {
            color: #555577;
            font-size: 0.72rem;
        }
        .header-coin-balance {
            display: flex;
            align-items: center;
            gap: 6px;
            padding-left: 12px;
            border-left: 1.5px solid #e2e5ef;
            margin-left: 2px;
        }
        .header-coin-img {
            width: 20px;
            height: 20px;
            object-fit: contain;
        }
        .header-coin-amount {
            color: #1A4FBC;
            font-weight: 700;
            font-size: 0.95rem;
        }

        /* Dropdown Menu */
        .user-dropdown-menu {
            position: absolute;
            top: calc(100% + 8px);
            right: 0;
            width: 250px;
            background: #ffffff;
            border-radius: 12px;
            border: 1px solid #e2e5ef;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
            z-index: 1100;
            display: none;
            flex-direction: column;
            overflow: hidden;
            animation: dropdownFadeIn 0.2s ease;
        }
        @keyframes dropdownFadeIn {
            from { opacity: 0; transform: translateY(-10px); }
            to { opacity: 1; transform: translateY(0); }
        }
        .user-dropdown-menu.show {
            display: flex;
        }
        .dropdown-user-header {
            display: flex;
            align-items: center;
            gap: 12px;
            padding: 14px 16px;
            background: #ffffff;
            text-align: left;
        }
        .dropdown-avatar-img {
            width: 38px;
            height: 38px;
            object-fit: cover;
            border-radius: 50%;
        }
        .dropdown-user-details {
            display: flex;
            flex-direction: column;
            line-height: 1.25;
        }
        .dropdown-username {
            color: #1a1a2e;
            font-weight: 700;
            font-size: 0.9rem;
        }
        .dropdown-userid {
            color: #8888aa;
            font-size: 0.72rem;
        }
        .dropdown-divider {
            height: 1px;
            background: #e2e5ef;
            margin: 0;
        }
        .dropdown-item {
            display: flex;
            align-items: center;
            padding: 10px 16px;
            color: #4a4a6a;
            font-size: 0.85rem;
            font-weight: 600;
            text-decoration: none;
            transition: all 0.2s ease;
            cursor: pointer;
            text-align: left;
        }
        .dropdown-item:hover {
            background: #f4f5f8;
            color: #1A4FBC;
        }
        .dropdown-item-icon {
            font-size: 1rem;
            margin-right: 12px;
            color: #555577;
            transition: color 0.2s ease;
        }
        .dropdown-item:hover .dropdown-item-icon {
            color: #1A4FBC;
        }
        .dropdown-logout {
            color: #d32f2f;
        }
        .dropdown-logout:hover {
            background: #ffebee;
            color: #d32f2f;
        }
        .dropdown-logout:hover .dropdown-item-icon {
            color: #d32f2f;
        }
        .dropdown-footer {
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 12px;
            background: #f4f5f8;
        }
        .dropdown-footer-logo {
            height: 20px;
            width: auto;
        }

        /* Login Modal Styling */
        .mye-login-modal-overlay {
            position: fixed;
            inset: 0;
            background: rgba(6, 9, 26, 0.8);
            backdrop-filter: blur(4px);
            z-index: 2000;
            display: none;
            align-items: center;
            justify-content: center;
            opacity: 0;
            transition: opacity 0.3s ease;
        }
        .mye-login-modal-overlay.show {
            display: flex;
            opacity: 1;
        }
        .mye-login-modal-card {
            background: #0d1433;
            border: 2px solid #0056FF;
            border-radius: 16px;
            box-shadow: 0 15px 50px rgba(0, 86, 255, 0.3);
            width: 100%;
            max-width: 400px;
            padding: 32px;
            position: relative;
            transform: scale(0.9);
            transition: transform 0.3s ease;
            color: #ffffff;
            box-sizing: border-box;
            font-family: 'Be Vietnam Pro', sans-serif;
        }
        .mye-login-modal-overlay.show .mye-login-modal-card {
            transform: scale(1);
        }
        .mye-login-close {
            position: absolute;
            top: 16px;
            right: 16px;
            background: none;
            border: none;
            color: #8888aa;
            font-size: 1.5rem;
            cursor: pointer;
            transition: color 0.2s ease;
            line-height: 1;
        }
        .mye-login-close:hover {
            color: #ffffff;
        }
        .mye-login-title {
            font-size: 1.5rem;
            font-weight: 800;
            text-align: center;
            margin-top: 0;
            margin-bottom: 24px;
            background: linear-gradient(135deg, #FF6B00 0%, #F5C518 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }
        .mye-login-form-group {
            margin-bottom: 20px;
            text-align: left;
        }
        .mye-login-label {
            display: block;
            font-size: 0.85rem;
            font-weight: 600;
            margin-bottom: 8px;
            color: #cbd5e1;
        }
        .mye-login-input {
            width: 100%;
            background: #111a3e;
            border: 1.5px solid rgba(59, 130, 246, 0.3);
            border-radius: 8px;
            padding: 10px 14px;
            color: #ffffff;
            font-size: 0.9rem;
            outline: none;
            transition: all 0.3s ease;
            box-sizing: border-box;
        }
        .mye-login-input:focus {
            border-color: #00d4ff;
            box-shadow: 0 0 10px rgba(0, 212, 255, 0.3);
        }
        .mye-login-btn {
            width: 100%;
            background: linear-gradient(135deg, #FF6B00 0%, #F5C518 100%);
            color: #ffffff;
            border: none;
            border-radius: 8px;
            padding: 12px;
            font-weight: 800;
            font-size: 0.95rem;
            cursor: pointer;
            box-shadow: 0 6px 20px rgba(255, 107, 0, 0.3);
            transition: all 0.2s ease;
            margin-top: 10px;
        }
        .mye-login-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 25px rgba(255, 107, 0, 0.4);
        }
        .mye-login-btn:active {
            transform: translateY(0);
        }
        .mye-login-note {
            font-size: 0.78rem;
            color: #8888aa;
            text-align: center;
            margin-top: 16px;
            margin-bottom: 0;
        }
    `;
    document.head.appendChild(styleElement);

    // 2. INJECT MODAL HTML
    const modalDiv = document.createElement('div');
    modalDiv.id = 'mye-login-modal';
    modalDiv.className = 'mye-login-modal-overlay';
    modalDiv.innerHTML = `
        <div class="mye-login-modal-card">
            <button class="mye-login-close" id="mye-login-close-btn">&times;</button>
            <h3 class="mye-login-title">ĐĂNG NHẬP HỆ THỐNG</h3>
            <form id="mye-login-form">
                <div class="mye-login-form-group">
                    <label class="mye-login-label" for="login-username">Tên đăng nhập / Email</label>
                    <input type="text" id="login-username" class="mye-login-input" value="myepro01" placeholder="Nhập tên đăng nhập..." required>
                </div>
                <div class="mye-login-form-group">
                    <label class="mye-login-label" for="login-password">Mật khẩu</label>
                    <input type="password" id="login-password" class="mye-login-input" value="••••••••" placeholder="Nhập mật khẩu..." required>
                </div>
                <button type="submit" class="mye-login-btn">ĐĂNG NHẬP NGAY</button>
            </form>
            <p class="mye-login-note">Hệ sinh thái nạp game MyE chính thức</p>
        </div>
    `;
    document.body.appendChild(modalDiv);

    // Modal Control Elements
    const loginModal = document.getElementById('mye-login-modal');
    const closeBtn = document.getElementById('mye-login-close-btn');
    const loginForm = document.getElementById('mye-login-form');

    // 3. AUTHENTICATION LOGIC
    function checkLoginState() {
        const isLoggedIn = localStorage.getItem('mye_logged_in') === 'true';
        const username = localStorage.getItem('mye_username') || 'myepro01';
        const coinBalance = localStorage.getItem('mye_balance') || '1000';

        const loginBtn = document.getElementById('btn-dangky');
        const navAvatar = document.getElementById('user-avatar-nav');

        if (isLoggedIn) {
             // Create user profile element html
            const profileHTML = `
                <div class="user-profile-header-wrap" id="user-profile-header-wrap">
                    <div class="user-profile-header" id="user-profile-header-toggle">
                        <img src="../images/streamline-kameleon-color_tease-smiley.png" alt="Avatar" class="header-avatar-img">
                        <div class="header-user-info">
                            <span class="header-username">${username}</span>
                            <span class="header-userid">MyE ID: 00123</span>
                        </div>
                        <div class="header-coin-balance">
                            <img src="../images/MyE_Coin/coin_M.png" alt="coin" class="header-coin-img">
                            <span class="header-coin-amount">${coinBalance}</span>
                        </div>
                    </div>
                    <!-- Custom Dropdown Menu -->
                    <div class="user-dropdown-menu" id="user-profile-dropdown">
                        <div class="dropdown-user-header">
                            <img src="../images/streamline-kameleon-color_tease-smiley.png" alt="Avatar" class="dropdown-avatar-img">
                            <div class="dropdown-user-details">
                                <span class="dropdown-username">${username}01</span>
                                <span class="dropdown-userid">MyE ID: 00123</span>
                            </div>
                        </div>
                        <div class="dropdown-divider"></div>
                        <a href="Thong_tin_giao_dich.html" class="dropdown-item">
                            <i class="bi bi-credit-card-2-front dropdown-item-icon"></i>
                            Quản lý thanh toán
                        </a>
                        <a href="Tai_khoan.html" class="dropdown-item">
                            <i class="bi bi-person dropdown-item-icon"></i>
                            Quản lý tài khoản
                        </a>
                        <a href="#" class="dropdown-item dropdown-logout" id="dropdown-logout-btn">
                            <i class="bi bi-box-arrow-right dropdown-item-icon"></i>
                            Đăng xuất
                        </a>
                        <div class="dropdown-divider"></div>
                        <div class="dropdown-footer">
                            <img src="../images/logo.png" alt="myE" class="dropdown-footer-logo">
                        </div>
                    </div>
                </div>
            `;

            // Replace either the login button or the existing hardcoded avatar nav
            if (loginBtn) {
                const parent = loginBtn.parentElement;
                parent.innerHTML = profileHTML;
            } else if (navAvatar) {
                const parent = navAvatar.parentElement;
                parent.innerHTML = profileHTML;
            }

            // Bind events for the profile toggle and logout
            setTimeout(bindLoggedInEvents, 100);

            // Update specific details on Tai_khoan.html if present
            updateAccountPageDetails(username, coinBalance);
        } else {
            // Logged out: If navAvatar is present, replace it with the Login Button
            if (navAvatar) {
                const parent = navAvatar.parentElement;
                parent.innerHTML = `
                    <a href="#" class="btn-dangnhap-img" id="btn-dangky">
                        <img src="../images/Trang_Chu/button_dangnhap.png" alt="Đăng Nhập" class="btn-dangnhap-png">
                        <span class="btn-dangnhap-text">ĐĂNG NHẬP</span>
                    </a>
                `;
            }

            // Bind click event to login button
            const activeLoginBtn = document.getElementById('btn-dangky');
            if (activeLoginBtn) {
                activeLoginBtn.addEventListener('click', function (e) {
                    e.preventDefault();
                    showLoginModal();
                });
            }

            // If we are on Tai_khoan.html but not logged in, we can prompt or keep it default
            // Keeping it default is cleaner but showing the login button in header works
        }
    }

    function showLoginModal() {
        loginModal.classList.add('show');
    }

    function hideLoginModal() {
        loginModal.classList.remove('show');
    }

    function bindLoggedInEvents() {
        const toggle = document.getElementById('user-profile-header-toggle');
        const dropdown = document.getElementById('user-profile-dropdown');
        const logoutBtn = document.getElementById('dropdown-logout-btn');

        if (toggle && dropdown) {
            toggle.addEventListener('click', function (e) {
                e.stopPropagation();
                dropdown.classList.toggle('show');
            });
        }

        // Close dropdown when clicking outside
        document.addEventListener('click', function () {
            if (dropdown && dropdown.classList.contains('show')) {
                dropdown.classList.remove('show');
            }
        });

        if (logoutBtn) {
            logoutBtn.addEventListener('click', function (e) {
                e.preventDefault();
                localStorage.setItem('mye_logged_in', 'false');
                localStorage.removeItem('mye_username');
                // Reload page to reflect logged-out state
                window.location.reload();
            });
        }
    }

    function updateAccountPageDetails(username, balance) {
        // Elements in Tai_khoan.html
        const heroUsername = document.getElementById('hero-username');
        const heroUid = document.getElementById('hero-uid');
        const profileUsernameBig = document.getElementById('profile-username-big');
        const pfNameInput = document.getElementById('pf-name');
        const pfUidInput = document.getElementById('pf-uid');
        const balanceAmount = document.getElementById('balance-amount');
        const statTotalCoin = document.querySelector('#stat-total-coin .stat-value');
        const heroAvatarImg = document.querySelector('.hero-avatar-wrap img.hero-avatar');
        const navAvatarImg = document.querySelector('.user-avatar-nav img.nav-avatar-img');

        // Update if elements exist (meaning we are on Tai_khoan.html page)
        if (heroUsername) heroUsername.textContent = username;
        if (heroUid) heroUid.textContent = 'ID: #00123';
        if (profileUsernameBig) profileUsernameBig.textContent = username;
        if (pfNameInput) pfNameInput.value = username;
        if (pfUidInput) pfUidInput.value = '00123';
        if (balanceAmount) balanceAmount.textContent = Number(balance).toLocaleString();
        if (statTotalCoin) statTotalCoin.textContent = Number(balance).toLocaleString();
        
        // Update avatars to smiley face SVG
        if (heroAvatarImg) heroAvatarImg.src = '../images/avatar_smiley.svg';
        if (navAvatarImg) navAvatarImg.src = '../images/avatar_smiley.svg';

        // Pre-fill ID in Thong_tin_giao_dich.html if present
        const inputUid = document.getElementById('input-uid');
        if (inputUid) {
            inputUid.value = '00123';
            // Trigger input event to update summary user display
            const event = new Event('input', { bubbles: true });
            inputUid.dispatchEvent(event);
        }

        // Update elements in MyE_Coin.html if present
        const infoUsername = document.getElementById('info-username');
        const infoMyeid = document.getElementById('info-myeid');
        const infoBalance = document.getElementById('info-balance');
        if (infoUsername) infoUsername.textContent = username;
        if (infoMyeid) infoMyeid.textContent = '00123';
        if (infoBalance) infoBalance.textContent = Number(balance).toLocaleString();

        // Update elements in Thong_tin_giao_dich.html if present
        const txUsername = document.getElementById('tx-username');
        const txMyeid = document.getElementById('tx-myeid');
        if (txUsername) txUsername.textContent = username;
        if (txMyeid) txMyeid.textContent = '00123';
    }

    // Modal close listeners
    if (closeBtn) {
        closeBtn.addEventListener('click', hideLoginModal);
    }
    window.addEventListener('click', function (e) {
        if (e.target === loginModal) {
            hideLoginModal();
        }
    });

    // Form submit listener
    if (loginForm) {
        loginForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const usernameInput = document.getElementById('login-username').value.trim();
            
            // Set login state in localStorage
            localStorage.setItem('mye_logged_in', 'true');
            localStorage.setItem('mye_username', usernameInput);
            localStorage.setItem('mye_balance', '1000'); // Default balance as shown in mockup
            
            hideLoginModal();
            
            // Reload page to re-render all elements with authentication context
            window.location.reload();
        });
    }

    // Initial check
    checkLoginState();
});
