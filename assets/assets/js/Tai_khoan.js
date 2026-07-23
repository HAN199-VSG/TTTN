/**
 * Tai_khoan.js - MyE Website
 * Trang: Tài Khoản
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
    // 2. BANNER TAB NAVIGATION
    // ============================
    const bannerTabs = document.querySelectorAll('.banner-tab[data-tab]');
    const tabPanes = document.querySelectorAll('.tab-pane');

    bannerTabs.forEach(tab => {
        tab.addEventListener('click', function (e) {
            e.preventDefault();
            const targetTab = this.dataset.tab;

            // Update active link
            bannerTabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');

            // Show/hide panes
            tabPanes.forEach(pane => {
                if (pane.id === `tab-${targetTab}`) {
                    pane.style.display = 'block';
                    pane.style.animation = 'fadeInPanel 0.35s ease';
                } else {
                    pane.style.display = 'none';
                }
            });
        });
    });

    // Add animation keyframe
    const aniStyle = document.createElement('style');
    aniStyle.textContent = `
        @keyframes fadeInPanel {
            from { opacity: 0; transform: translateY(10px); }
            to   { opacity: 1; transform: translateY(0); }
        }
    `;
    document.head.appendChild(aniStyle);

    // ============================
    // 3. EDIT PROFILE TOGGLE (FLAT VS EDIT FIELDS)
    // ============================
    const btnEdit = document.getElementById('btn-edit-profile');
    const fieldsDisplay = document.getElementById('profile-fields-display');
    const fieldsEdit = document.getElementById('profile-fields-edit');
    const displayActions = document.getElementById('display-header-actions');
    const editActions = document.getElementById('edit-header-actions');
    let editMode = false;

    btnEdit?.addEventListener('click', function () {
        editMode = true;
        if (fieldsDisplay) fieldsDisplay.style.display = 'none';
        if (fieldsEdit) fieldsEdit.style.display = 'block';
        if (displayActions) displayActions.style.display = 'none';
        if (editActions) editActions.style.display = 'flex';
    });

    function cancelEdit() {
        editMode = false;
        if (fieldsDisplay) fieldsDisplay.style.display = 'block';
        if (fieldsEdit) fieldsEdit.style.display = 'none';
        if (displayActions) displayActions.style.display = 'block';
        if (editActions) editActions.style.display = 'none';
    }

    // Cancel button
    document.getElementById('btn-cancel-profile')?.addEventListener('click', cancelEdit);

    // Save button
    document.getElementById('btn-save-profile')?.addEventListener('click', function () {
        const name = document.getElementById('pf-name')?.value.trim();
        const gender = document.getElementById('pf-gender-select')?.value;
        const dob = document.getElementById('pf-dob')?.value.trim();
        const address = document.getElementById('pf-address')?.value.trim();

        if (!name) {
            showToast('Vui lòng nhập họ và tên!', 'warning');
            return;
        }

        this.innerHTML = 'ĐANG LƯU...';
        this.disabled = true;

        setTimeout(() => {
            // Update UI displays
            const dispName = document.getElementById('disp-name');
            const dispGender = document.getElementById('disp-gender');
            const dispDob = document.getElementById('disp-dob');
            const dispAddress = document.getElementById('disp-address');

            if (dispName) dispName.textContent = name;
            if (dispGender) dispGender.textContent = gender;
            if (dispDob) dispDob.textContent = dob;
            if (dispAddress) dispAddress.textContent = address;

            const heroUser = document.getElementById('hero-username');
            if (heroUser) heroUser.textContent = name;

            const navUser = document.querySelector('.nav-username');
            if (navUser) navUser.textContent = name;

            this.innerHTML = 'LƯU';
            this.disabled = false;

            cancelEdit();
            showToast('Thông tin đã được cập nhật!', 'success');
        }, 1200);
    });

    // ============================
    // 4. NOTIFICATIONS MARK READ
    // ============================
    const btnMarkRead = document.getElementById('btn-mark-read');
    btnMarkRead?.addEventListener('click', function () {
        document.querySelectorAll('.notif-item.unread').forEach(item => {
            item.classList.remove('unread');
            item.querySelector('.unread-dot')?.remove();
        });
        document.querySelector('.notif-badge')?.remove();
        showToast('Đã đánh dấu tất cả là đã đọc', 'success');
        this.disabled = true;
    });

    // ============================
    // 5. LOGOUT CONFIRMATION
    // ============================
    document.getElementById('snav-logout')?.addEventListener('click', function (e) {
        e.preventDefault();
        if (confirm('Bạn có chắc chắn muốn đăng xuất không?')) {
            localStorage.setItem('mye_logged_in', 'false');
            localStorage.removeItem('mye_username');
            showToast('Đang đăng xuất...', 'info');
            setTimeout(() => { window.location.href = 'Nap_game.html'; }, 1500);
        }
    });

    // ============================
    // 6. LEVEL BAR ANIMATION
    // ============================
    const levelBar = document.getElementById('level-bar');
    if (levelBar) {
        const targetWidth = levelBar.style.width;
        levelBar.style.width = '0%';
        setTimeout(() => {
            levelBar.style.width = targetWidth;
        }, 500);
    }

    // ============================
    // 7. STATS COUNTER ANIMATION
    // ============================
    const statValues = document.querySelectorAll('.stat-value');
    const counterObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const rawText = el.textContent;
                // Just add a subtle fade-in
                el.style.opacity = '0';
                el.style.transform = 'translateY(8px)';
                el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                setTimeout(() => {
                    el.style.opacity = '1';
                    el.style.transform = 'translateY(0)';
                }, 100);
                counterObserver.unobserve(el);
            }
        });
    }, { threshold: 0.5 });

    statValues.forEach(el => counterObserver.observe(el));

    // ============================
    // 8. TOAST NOTIFICATION
    // ============================
    function showToast(message, type = 'info') {
        const existing = document.getElementById('mye-toast');
        if (existing) existing.remove();

        const toast = document.createElement('div');
        toast.id = 'mye-toast';
        const colors = { warning: '#FF6B00', success: '#22c55e', info: '#3b82f6', error: '#ef4444' };
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
        style.textContent = `@keyframes toastIn { from { opacity:0; transform: translateY(20px); } to { opacity:1; transform: translateY(0); } }`;
        document.head.appendChild(style);

        setTimeout(() => {
            toast.style.opacity = '0';
            toast.style.transform = 'translateY(10px)';
            toast.style.transition = 'all 0.3s ease';
            setTimeout(() => toast.remove(), 350);
        }, 3000);
    }

    // ============================
    // 9. BALANCE COIN GLOW EFFECT
    // ============================
    const balanceCard = document.getElementById('balance-card');
    const balanceCoin = balanceCard?.querySelector('.balance-coin-img');
    if (balanceCoin) {
        balanceCard.addEventListener('mouseenter', () => {
            balanceCoin.style.filter = 'drop-shadow(0 0 15px rgba(245,197,24,0.7))';
        });
        balanceCard.addEventListener('mouseleave', () => {
            balanceCoin.style.filter = '';
        });
    }

    // ============================
    // 10. DYNAMIC PROVIDER & SYNC LOGIC (FB, GG, MYE)
    // ============================
    const syncHeader = document.getElementById('sync-header-toggle');
    const syncBody = document.getElementById('sync-body-content');
    const syncArrow = document.getElementById('sync-arrow-icon');
    const btnSyncAction = document.getElementById('btn-sync-action');
    const syncForm = document.getElementById('sync-form-container');
    const btnConfirmSync = document.getElementById('btn-confirm-sync');
    const syncSuccessBanner = document.getElementById('sync-success-banner');

    // 10.1 URL Query Parameter Parsing for Simulation Modes
    const urlParams = new URLSearchParams(window.location.search);
    const urlProvider = urlParams.get('provider');
    if (urlProvider && ['facebook', 'google', 'mye'].includes(urlProvider)) {
        const oldProvider = localStorage.getItem('mye_login_provider');
        if (oldProvider !== urlProvider) {
            localStorage.setItem('mye_login_provider', urlProvider);
            // Reset sync states so user can test the transition fresh for this provider
            localStorage.removeItem('mye_synced');
            localStorage.removeItem('mye_sync_username');
            localStorage.removeItem('mye_synced_social');
        }
    }

    // 10.2 Load Provider Details
    const provider = localStorage.getItem('mye_login_provider') || 'facebook'; // Default to Facebook on clean load
    const isSynced = localStorage.getItem('mye_synced') === 'true';
    const savedSyncUser = localStorage.getItem('mye_sync_username') || 'myepro456';
    const syncedSocial = localStorage.getItem('mye_synced_social') || 'none'; // For mye login case

    // Update Hero Banner and sync components based on provider
    const heroMetaAcc = document.getElementById('hero-meta-acc');
    const sourceIcon1 = document.getElementById('sync-source-icon-1');
    const sourceId1 = document.getElementById('sync-source-id-1');
    const sourceIcon2 = document.getElementById('sync-source-icon-2');
    const sourceId2 = document.getElementById('sync-source-id-2');
    const sourceIcon3 = document.getElementById('sync-source-icon-3');
    const sourceId3 = document.getElementById('sync-source-id-3');

    const googleSvg = `
        <svg viewBox="0 0 24 24" width="20" height="20">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
        </svg>
    `;

    // Set dynamic names based on local storage username
    const currentUsername = localStorage.getItem('mye_username') || 'myepro01';

    if (provider === 'google') {
        if (heroMetaAcc) heroMetaAcc.textContent = 'gg.112314335';

        // Update to Google
        if (sourceIcon1) { sourceIcon1.innerHTML = googleSvg; sourceIcon1.className = 'sync-platform-icon gg-color'; }
        if (sourceIcon2) { sourceIcon2.innerHTML = googleSvg; sourceIcon2.className = 'sync-platform-icon gg-color'; sourceIcon2.style.background = '#fff'; }
        if (sourceIcon3) { sourceIcon3.innerHTML = googleSvg; sourceIcon3.className = 'sync-platform-icon gg-color'; sourceIcon3.style.background = '#fff'; }

        if (sourceId1) sourceId1.textContent = 'gg.01020';
        if (sourceId2) sourceId2.textContent = 'gg.01020';
        if (sourceId3) sourceId3.textContent = 'gg.01020';
    } else if (provider === 'facebook') {
        if (heroMetaAcc) heroMetaAcc.textContent = 'fb.112314335';

        // Update to Facebook (defaults in HTML, but reset just in case)
        if (sourceIcon1) { sourceIcon1.innerHTML = '<i class="bi bi-facebook"></i>'; sourceIcon1.className = 'sync-platform-icon fb-color'; }
        if (sourceIcon2) { sourceIcon2.innerHTML = '<i class="bi bi-facebook"></i>'; sourceIcon2.className = 'sync-platform-icon fb-color'; }
        if (sourceIcon3) { sourceIcon3.innerHTML = '<i class="bi bi-facebook"></i>'; sourceIcon3.className = 'sync-platform-icon fb-color'; }

        if (sourceId1) sourceId1.textContent = 'fb.25124';
        if (sourceId2) sourceId2.textContent = 'fb.25124';
        if (sourceId3) sourceId3.textContent = 'fb.25124';
    } else if (provider === 'mye') {
        if (heroMetaAcc) heroMetaAcc.textContent = 'myepro1123';

        const collapsedRow = document.getElementById('sync-collapsed-status-row');
        if (collapsedRow) {
            // Initial view: Image 1 (2 boxes connected with ⇄ and "Không khả dụng" button)
            collapsedRow.innerHTML = `
                <p class="sync-intro-text text-start mb-3" style="font-size: 0.8rem; font-weight: 700; color: var(--text-dark);">Tài khoản hiện tại</p>
                <div class="sync-status-row">
                    <div class="sync-user-block">
                        <div class="sync-platform-icon mye-color" style="width: 40px; height: 40px; border-radius: 4px; background: #e8eefc; color: #0c359e; display: flex; align-items: center; justify-content: center; font-size: 1.1rem;">
                            <i class="bi bi-person-fill"></i>
                        </div>
                        <div class="sync-user-info-text text-start">
                            <span class="sync-user-name" style="font-weight: 700; color: var(--text-dark); font-size: 0.85rem;">Tài khoản MYE</span>
                            <span class="sync-user-id" style="color: #64748b; font-weight: 500; font-size: 0.75rem;">myepro1123</span>
                        </div>
                    </div>
                    
                    <div class="sync-arrows" style="color: #cbd5e1;">
                        <i class="bi bi-arrow-left-right"></i>
                    </div>
                    
                    <div class="sync-user-block" style="flex-grow: 2;">
                        <div class="sync-platform-icon mye-color" style="width: 40px; height: 40px; border-radius: 4px; background: #e8eefc; color: #0c359e; display: flex; align-items: center; justify-content: center; font-size: 1.1rem;">
                            <i class="bi bi-person-fill"></i>
                        </div>
                        <div class="sync-user-info-text text-start" style="max-width: 250px;">
                            <span class="sync-user-name" style="font-size: 0.72rem; color: #64748b; font-weight: 500; line-height: 1.35; display: inline-block;">Chỉ khả dụng với tài khoản đăng nhập qua Facebook hoặc Google.</span>
                        </div>
                    </div>
                    
                    <div class="sync-action-btn-wrap">
                        <button class="btn-sync-trigger" id="btn-mye-not-available" style="background: #e2e8f0; border-color: transparent; color: #94a3b8; cursor: pointer; font-weight: 700; font-size: 0.73rem; padding: 6px 14px; border-radius: 20px; transition: all 0.2s;">Không khả dụng</button>
                    </div>
                </div>
            `;

            // Transition to Image 2 on clicking "Không khả dụng"
            const btnMyeNotAvailable = document.getElementById('btn-mye-not-available');
            btnMyeNotAvailable?.addEventListener('click', (e) => {
                e.stopPropagation();

                collapsedRow.innerHTML = `
                    <p class="sync-intro-text text-start mb-3" style="font-size: 0.8rem; font-weight: 700; color: var(--text-dark);">Tài khoản hiện tại</p>
                    
                    <!-- Single identity MYE card -->
                    <div class="sync-fb-single-card mb-3" style="display: flex; align-items: center; justify-content: space-between; padding: 14px 24px; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; box-shadow: none; animation: toastIn 0.2s ease-out;">
                        <div class="d-flex align-items-center gap-3">
                            <div class="sync-platform-icon mye-color" style="width: 40px; height: 40px; border-radius: 4px; background: #e8eefc; color: #0c359e; display: flex; align-items: center; justify-content: center; font-size: 1.15rem;">
                                <i class="bi bi-person-fill"></i>
                            </div>
                            <span class="sync-user-name" style="font-weight: 700; color: var(--text-dark); font-size: 0.88rem;">Tài khoản MYE</span>
                        </div>
                        <span class="sync-user-id-right" style="color: #94a3b8; font-weight: 500; font-size: 0.8rem;">myepro1123</span>
                    </div>

                    <!-- Alert bar below -->
                    <div class="sync-info-alert-bar" style="background: #fffbeb; color: #1e293b; font-size: 0.75rem; font-weight: 600; padding: 14px 20px; border-radius: 8px; display: flex; align-items: center; justify-content: center; gap: 8px; text-align: center; margin-top: 15px; animation: toastIn 0.35s ease-out;">
                        <i class="bi bi-info-circle" style="color: #1d4ed8; font-size: 1rem; flex-shrink: 0; display: inline-flex; align-items: center;"></i>
                        <span>Tính năng đồng bộ chỉ khả dụng với tài khoản đăng nhập gốc được tạo qua Facebook hoặc Google</span>
                    </div>
                `;
            });
        }
    }

    // 10.3 Collapse/Expand Interaction State Machine
    let syncExpanded = false;

    // Toggle Collapse/Expand via Header Click
    syncHeader?.addEventListener('click', () => {
        if (provider === 'mye') return; // Disable expand/collapse for MYE native accounts
        syncExpanded = !syncExpanded;
        const arrowWrap = document.getElementById('sync-arrow-wrap');

        if (syncExpanded) {
            // Expand card
            if (arrowWrap) arrowWrap.classList.add('open');
            if (syncArrow) syncArrow.style.transform = 'rotate(90deg)';

            // Hide collapsed summary row
            const collapsedRow = document.getElementById('sync-collapsed-status-row');
            if (collapsedRow) collapsedRow.style.display = 'none';

            if (isSynced) {
                if (syncForm) syncForm.style.display = 'none';
                if (syncSuccessBanner) syncSuccessBanner.style.display = 'block';
            } else {
                if (syncForm) syncForm.style.display = 'block';
                if (syncSuccessBanner) syncSuccessBanner.style.display = 'none';
            }
        } else {
            // Collapse card
            if (arrowWrap) arrowWrap.classList.remove('open');
            if (syncArrow) syncArrow.style.transform = 'rotate(0deg)';

            // Show collapsed summary row
            const collapsedRow = document.getElementById('sync-collapsed-status-row');
            if (collapsedRow) collapsedRow.style.display = 'block';

            // Hide expanded components
            if (syncForm) syncForm.style.display = 'none';
            if (syncSuccessBanner) syncSuccessBanner.style.display = 'none';
        }
    });

    // Collapse button action trigger ("Chưa đồng bộ")
    btnSyncAction?.addEventListener('click', (e) => {
        e.stopPropagation();
        if (provider === 'mye') return; // Disable click action for MYE accounts
        if (isSynced) return;

        syncExpanded = true;
        const arrowWrap = document.getElementById('sync-arrow-wrap');
        if (arrowWrap) arrowWrap.classList.add('open');
        if (syncArrow) syncArrow.style.transform = 'rotate(90deg)';

        const collapsedRow = document.getElementById('sync-collapsed-status-row');
        if (collapsedRow) collapsedRow.style.display = 'none';
        if (syncForm) syncForm.style.display = 'block';
    });

    // Confirm Sync Form Submit (Only for FB / GG login case)
    btnConfirmSync?.addEventListener('click', () => {
        const usernameInput = document.getElementById('sync-mye-username').value.trim();
        const passwordInput = document.getElementById('sync-mye-password').value;
        const confirmPasswordInput = document.getElementById('sync-mye-confirm-password').value;

        if (usernameInput.length < 6) {
            showToast('Tên đăng nhập phải có tối thiểu 6 ký tự!', 'warning');
            return;
        }
        if (passwordInput.length < 8) {
            showToast('Mật khẩu phải có tối thiểu 8 ký tự!', 'warning');
            return;
        }
        if (passwordInput !== confirmPasswordInput) {
            showToast('Mật khẩu xác nhận không trùng khớp!', 'warning');
            return;
        }

        // Processing state
        btnConfirmSync.innerHTML = '<span class="spinner-border spinner-border-sm me-2"></span>Đang đồng bộ...';
        btnConfirmSync.disabled = true;

        setTimeout(() => {
            // Save state
            localStorage.setItem('mye_synced', 'true');
            localStorage.setItem('mye_sync_username', usernameInput);

            // Update UI details
            applySyncedUI(usernameInput);

            // Transition directly to expanded success state
            syncExpanded = true;
            const arrowWrap = document.getElementById('sync-arrow-wrap');
            if (arrowWrap) arrowWrap.classList.add('open');
            if (syncArrow) syncArrow.style.transform = 'rotate(90deg)';

            const collapsedRow = document.getElementById('sync-collapsed-status-row');
            if (collapsedRow) collapsedRow.style.display = 'none';
            if (syncForm) syncForm.style.display = 'none';
            if (syncSuccessBanner) syncSuccessBanner.style.display = 'block';

            showToast('Đồng bộ tài khoản thành công!', 'success');
        }, 1200);
    });

    function applySyncedUI(syncedUsername) {
        // Reset confirm button
        if (btnConfirmSync) {
            btnConfirmSync.innerHTML = 'Xác nhận đồng bộ';
            btnConfirmSync.disabled = false;
        }

        // 1. Update the Collapsed Status Row MyE Block Details
        const myeSide = document.getElementById('sync-mye-side');
        if (myeSide) {
            myeSide.innerHTML = `
                <div class="sync-platform-icon mye-color" style="width: 40px; height: 40px; border-radius: 4px; background: #e8eefc; color: #0c359e; display: flex; align-items: center; justify-content: center; font-size: 1.1rem;">
                    <i class="bi bi-person-fill"></i>
                </div>
                <div class="sync-user-info-text text-start">
                    <span class="sync-user-name" style="font-weight: 700; color: var(--text-dark); font-size: 0.85rem;">Tài khoản MYE</span>
                    <span class="sync-user-id" style="color: #64748b; font-weight: 500; font-size: 0.75rem;">${syncedUsername}</span>
                </div>
            `;
        }

        // 2. Update the Collapsed Status Row Action Button to "Đã đồng bộ" badge style
        if (btnSyncAction) {
            btnSyncAction.textContent = 'Đã đồng bộ';
            btnSyncAction.className = 'btn-sync-trigger synced';
            btnSyncAction.style.background = '#e2f0d9';
            btnSyncAction.style.borderColor = 'transparent';
            btnSyncAction.style.color = '#2e7d32';
            btnSyncAction.style.cursor = 'default';
            btnSyncAction.style.fontWeight = '700';
            btnSyncAction.style.fontSize = '0.73rem';
            btnSyncAction.style.padding = '6px 14px';
        }

        // 3. Update the Synced Success State username label
        const successMyeUser = document.getElementById('success-mye-username');
        if (successMyeUser) {
            successMyeUser.textContent = syncedUsername;
        }
    }

    // Initialize/Check Sync State on Load (Only for FB / GG case)
    if (provider !== 'mye' && isSynced) {
        applySyncedUI(savedSyncUser);
    }

    // ============================
    // 11. ACTIVITY HISTORY TOGGLE
    // ============================
    const activityHeader = document.getElementById('activity-header-toggle');
    const activityBody = document.getElementById('activity-body-content');
    const activityArrow = document.getElementById('activity-arrow-icon');
    let activityExpanded = false;

    activityHeader?.addEventListener('click', () => {
        activityExpanded = !activityExpanded;
        const arrowWrap = document.getElementById('activity-arrow-wrap');

        if (activityExpanded) {
            // Expand card
            if (arrowWrap) arrowWrap.classList.add('open');
            if (activityArrow) activityArrow.style.transform = 'rotate(90deg)';
            if (activityBody) {
                activityBody.style.display = 'block';
                activityBody.style.animation = 'fadeInPanel 0.35s ease';
            }
        } else {
            // Collapse card
            if (arrowWrap) arrowWrap.classList.remove('open');
            if (activityArrow) activityArrow.style.transform = 'rotate(0deg)';
            if (activityBody) activityBody.style.display = 'none';
        }
    });

    // Remove all sessions action
    document.getElementById('btn-remove-all-sessions')?.addEventListener('click', (e) => {
        e.stopPropagation();
        if (confirm('Bạn có chắc chắn muốn gỡ tất cả các phiên đăng nhập khác không? Các thiết bị đó sẽ bị đăng xuất lập tức.')) {
            showToast('Đang tiến hành gỡ các phiên đăng nhập...', 'info');
            setTimeout(() => {
                showToast('Đã gỡ tất cả các phiên đăng nhập thành công!', 'success');
            }, 1200);
        }
    });

});
