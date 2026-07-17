/* ============================================================
  DỮ LIỆU THÍ SINH MẪU
============================================================ */
const candidatesMiss = [
    { id: 1, name: 'Tên thí sinh - SBD 1234', server: 'Server 01 - Lý Bạch', score: 9999, photo: 'assets/card.png' },
    { id: 2, name: 'Tên thí sinh - SBD 1234', server: 'Server 01 - Lý Bạch', score: 9999, photo: 'assets/card.png' },
    { id: 3, name: 'Tên thí sinh - SBD 1234', server: 'Server 02 - Đỗ Phủ', score: 9999, photo: 'assets/card.png' },
    { id: 4, name: 'Tên thí sinh - SBD 1234', server: 'Server 01 - Lý Bạch', score: 9999, photo: 'assets/card.png' },
    { id: 5, name: 'Tên thí sinh - SBD 1234', server: 'Server 03 - Bạch Cư Dị', score: 9999, photo: 'assets/card.png' },
    { id: 6, name: 'Tên thí sinh - SBD 1234', server: 'Server 02 - Đỗ Phủ', score: 9999, photo: 'assets/card.png' },
    { id: 7, name: 'Tên thí sinh - SBD 1234', server: 'Server 01 - Lý Bạch', score: 9999, photo: 'assets/card.png' },
    { id: 8, name: 'Tên thí sinh - SBD 1234', server: 'Server 02 - Đỗ Phủ', score: 9999, photo: 'assets/card.png' },
    { id: 9, name: 'Tên thí sinh - SBD 1234', server: 'Server 03 - Bạch Cư Dị', score: 9999, photo: 'assets/card.png' },
    { id: 16, name: 'Tên thí sinh - SBD 1234', server: 'Server 01 - Lý Bạch', score: 9999, photo: 'assets/card.png' },
    { id: 17, name: 'Tên thí sinh - SBD 1234', server: 'Server 02 - Đỗ Phủ', score: 9999, photo: 'assets/card.png' },
    { id: 18, name: 'Tên thí sinh - SBD 1234', server: 'Server 03 - Bạch Cư Dị', score: 9999, photo: 'assets/card.png' },
    { id: 19, name: 'Tên thí sinh - SBD 1234', server: 'Server 01 - Lý Bạch', score: 8888, photo: 'assets/card.png' },
    { id: 20, name: 'Tên thí sinh - SBD 1234', server: 'Server 02 - Đỗ Phủ', score: 7777, photo: 'assets/card.png' },
    { id: 21, name: 'Tên thí sinh - SBD 1234', server: 'Server 03 - Bạch Cư Dị', score: 6666, photo: 'assets/card.png' },
    { id: 22, name: 'Tên thí sinh - SBD 1234', server: 'Server 01 - Lý Bạch', score: 5555, photo: 'assets/card.png' },
    { id: 23, name: 'Tên thí sinh - SBD 1234', server: 'Server 02 - Đỗ Phủ', score: 4444, photo: 'assets/card.png' },
    { id: 24, name: 'Tên thí sinh - SBD 1234', server: 'Server 03 - Bạch Cư Dị', score: 3333, photo: 'assets/card.png' },
];

const candidatesMister = [
    { id: 10, name: 'Tên thí sinh - SBD 1234', server: 'Server 01 - Lý Bạch', score: 9999, photo: 'assets/card.png' },
    { id: 11, name: 'Tên thí sinh - SBD 1234', server: 'Server 02 - Đỗ Phủ', score: 9999, photo: 'assets/card.png' },
    { id: 12, name: 'Tên thí sinh - SBD 1234', server: 'Server 03 - Bạch Cư Dị', score: 9999, photo: 'assets/card.png' },
    { id: 13, name: 'Tên thí sinh - SBD 1234', server: 'Server 01 - Lý Bạch', score: 8888, photo: 'assets/card.png' },
    { id: 14, name: 'Tên thí sinh - SBD 1234', server: 'Server 02 - Đỗ Phủ', score: 7777, photo: 'assets/card.png' },
    { id: 15, name: 'Tên thí sinh - SBD 1234', server: 'Server 03 - Bạch Cư Dị', score: 6666, photo: 'assets/card.png' },
];

/* ============================================================
   STATE
============================================================ */
const uploaded = {
    mainPhoto: false, sub1: false, sub2: false, sub3: false,
    cmndFront: false, cmndBack: false
};

const uploadMap = {
    mainPhotoInput: { prev: 'mainPhotoPreview', key: 'mainPhoto' },
    sub1: { prev: 'subPrev1', key: 'sub1' },
    sub2: { prev: 'subPrev2', key: 'sub2' },
    sub3: { prev: 'subPrev3', key: 'sub3' },
    cmndFront: { prev: 'cmndFrontPrev', key: 'cmndFront' },
    cmndBack: { prev: 'cmndBackPrev', key: 'cmndBack' },
};

let currentTab = 'miss';   // 'miss' | 'mister'
let currentPage = 1;
const perPage = 9;
let selectedCandidate = null;
let totalFlowers = 0;
let bxhTab = 'miss';
let voteHistory = [];

/* ============================================================
   KHỞI TẠO
============================================================ */
document.addEventListener('DOMContentLoaded', () => {

    /* Upload files */
    Object.keys(uploadMap).forEach(id => {
        const el = document.getElementById(id);
        if (el) el.addEventListener('change', e => onFileChange(e, id));
    });

    /* Nav buttons */
    document.getElementById('guideBtn')?.addEventListener('click', () => openModal('guideModal'));
    document.getElementById('hoaFreeBtn')?.addEventListener('click', () => openModal('hoaFreeModal'));

    /* Vote ngay → scroll xuống danh sách */
    document.getElementById('joinNowBtn')?.addEventListener('click', () => {
        document.getElementById('candidatesSection')?.scrollIntoView({ behavior: 'smooth' });
    });

    /* Submit form */
    document.getElementById('registerForm')?.addEventListener('submit', onSubmit);

    /* Đóng popup khi click ngoài */
    document.querySelectorAll('.popup-overlay').forEach(o => {
        o.addEventListener('click', e => { if (e.target === o) closeModal(o.id); });
    });

    /* Nút đóng popup thành công */
    document.getElementById('successModalCloseBtn')?.addEventListener('click', () => closeModal('successModal'));

    /* Select khu vực */
    const sel = document.getElementById('regionSelect');
    if (sel) sel.addEventListener('change', function () {
        this.classList.toggle('filled', !!this.value);
    });

    /* Render danh sách thí sinh */
    renderCandidates();

    /* Thêm bộ lắng nghe cho bộ lọc */
    const onFilterChange = () => {
        currentPage = 1;
        renderCandidates();
    };
    document.getElementById('filterSort')?.addEventListener('change', onFilterChange);
    document.getElementById('filterGender')?.addEventListener('change', onFilterChange);
    document.getElementById('filterServer')?.addEventListener('change', onFilterChange);

    document.getElementById('searchBtn')?.addEventListener('click', onFilterChange);
    document.getElementById('searchKeyword')?.addEventListener('keypress', e => {
        if (e.key === 'Enter') onFilterChange();
    });
    document.getElementById('searchKeyword')?.addEventListener('input', onFilterChange);

    /* Cập nhật thanh tích lũy */
    updateRewardBar();

    // Format input số hoa muốn tặng dạn 10.000
    const hoaAmountInput = document.getElementById('hoaAmount');
    if (hoaAmountInput) {
        hoaAmountInput.addEventListener('input', function () {
            let cleanVal = this.value.replace(/\D/g, '');
            if (cleanVal === '') {
                this.value = '';
                return;
            }
            let num = parseInt(cleanVal) || 0;
            this.value = formatNumberWithDots(num);
        });
    }
});

/* ============================================================
   DANH SÁCH THÍ SINH
============================================================ */
function getCurrentList() {
    // Kết hợp cả Mỹ Nữ và Mỹ Nam để hiển thị
    let list = [...candidatesMiss, ...candidatesMister];

    // Lọc theo giới tính dropdown
    const genderVal = document.getElementById('filterGender')?.value;
    if (genderVal) {
        if (genderVal === 'miss') {
            list = [...candidatesMiss];
        } else if (genderVal === 'mister') {
            list = [...candidatesMister];
        }
    }

    // Lọc theo máy chủ dropdown
    const serverVal = document.getElementById('filterServer')?.value;
    if (serverVal) {
        list = list.filter(c => {
            if (serverVal === 'S1') return c.server.includes('01') || c.server.includes('S1');
            if (serverVal === 'S2') return c.server.includes('02') || c.server.includes('S2');
            if (serverVal === 'S3') return c.server.includes('03') || c.server.includes('S3');
            return true;
        });
    }

    // Lọc theo Số báo danh hoặc tên
    const keyword = document.getElementById('searchKeyword')?.value.trim().toLowerCase();
    if (keyword) {
        list = list.filter(c => {
            // Kiểm tra khớp số báo danh (SBD) hoặc tên
            const nameMatch = c.name.toLowerCase().includes(keyword);
            const serverMatch = c.server.toLowerCase().includes(keyword);
            const idMatch = c.id.toString() === keyword;
            return nameMatch || serverMatch || idMatch;
        });
    }

    // Sắp xếp
    const sortVal = document.getElementById('filterSort')?.value;
    if (sortVal === 'score_desc') {
        list.sort((a, b) => b.score - a.score);
    } else if (sortVal === 'score_asc') {
        list.sort((a, b) => a.score - b.score);
    } else if (sortVal === 'name_asc') {
        list.sort((a, b) => a.name.localeCompare(b.name));
    }

    return list;
}

function renderCandidates() {
    const list = getCurrentList();
    const grid = document.getElementById('candidatesGrid');
    if (!grid) return;

    const totalPages = Math.max(1, Math.ceil(list.length / perPage));
    currentPage = Math.min(currentPage, totalPages);

    const start = (currentPage - 1) * perPage;
    const slice = list.slice(start, start + perPage);

    grid.innerHTML = slice.map((c, idx) => {
        const rank = start + idx + 1;
        return `
        <div class="candidate-card" onclick="openCandidatePopup(${c.id})">
            <div class="candidate-card-img-wrap">
                <img class="candidate-card-img" src="${c.photo}" alt="${c.name}">
                <div class="cc-rank-badge">
                    <img src="assets/xephang.png" class="cc-rank-icon" alt="rank">
                    <span class="cc-rank-num">${rank}</span>
                </div>
                <div class="cc-score-badge">
                    <span class="cc-score-num">${c.score}</span>
                    <img src="assets/hoa.png" class="cc-hoa-icon" alt="hoa">
                </div>
                <div class="candidate-card-body">
                    <p class="candidate-card-name">${c.name}</p>
                    <p class="candidate-card-server">${c.server}</p>
                </div>
            </div>
        </div>
    `}).join('');

    renderPagination(totalPages);
}

function renderPagination(totalPages) {
    const pagNumbers = document.getElementById('pagNumbers');
    if (!pagNumbers) return;

    let html = '';
    // Hiển thị tối đa 5 số trang xung quanh trang hiện tại
    const maxVisible = 5;
    let startP = Math.max(1, currentPage - Math.floor(maxVisible / 2));
    let endP = Math.min(totalPages, startP + maxVisible - 1);
    if (endP - startP < maxVisible - 1) startP = Math.max(1, endP - maxVisible + 1);

    for (let i = startP; i <= endP; i++) {
        html += `<button class="pag-number${i === currentPage ? ' active' : ''}" onclick="jumpPage(${i})">${i}</button>`;
    }
    pagNumbers.innerHTML = html;

    // Disable Trước/Đầu
    const pagFirst = document.getElementById('pagFirst');
    const pagPrev = document.getElementById('pagPrev');
    const pagNext = document.getElementById('pagNext');
    const pagLast = document.getElementById('pagLast');
    if (pagFirst) pagFirst.disabled = currentPage === 1;
    if (pagPrev) pagPrev.disabled = currentPage === 1;
    if (pagNext) pagNext.disabled = currentPage === totalPages;
    if (pagLast) pagLast.disabled = currentPage === totalPages;
}

function switchTab(tab) {
    currentTab = tab;
    currentPage = 1;
    const tabMiss = document.getElementById('tabMiss');
    const tabMister = document.getElementById('tabMister');
    if (tabMiss) tabMiss.classList.toggle('active', tab === 'miss');
    if (tabMister) tabMister.classList.toggle('active', tab === 'mister');
    renderCandidates();
}

function changePage(delta) {
    const list = getCurrentList();
    const totalPages = Math.max(1, Math.ceil(list.length / perPage));
    currentPage = Math.max(1, Math.min(totalPages, currentPage + delta));
    renderCandidates();
}

function goPage(action) {
    const list = getCurrentList();
    const totalPages = Math.max(1, Math.ceil(list.length / perPage));
    if (action === 'first') currentPage = 1;
    else if (action === 'prev') currentPage = Math.max(1, currentPage - 1);
    else if (action === 'next') currentPage = Math.min(totalPages, currentPage + 1);
    else if (action === 'last') currentPage = totalPages;
    renderCandidates();
}

function jumpPage(p) {
    currentPage = p;
    renderCandidates();
}

/* ============================================================
   POPUP THÍ SINH
============================================================ */
function openCandidatePopup(id) {
    const allCandidates = [...candidatesMiss, ...candidatesMister];
    const c = allCandidates.find(x => x.id === id);
    if (!c) return;
    selectedCandidate = c;

    // Main photo
    document.getElementById('popupCandidatePhoto').src = 'assets/anhto.png';

    // Sub photos (use candidate sub photos if available, else defaults)
    document.getElementById('popupSubPhoto1').src = c.sub1 || 'assets/anhnho1.png';
    document.getElementById('popupSubPhoto2').src = c.sub2 || 'assets/anhnho2.png';
    document.getElementById('popupSubPhoto3').src = c.sub3 || 'assets/anhnho3.png';

    // Name, SBD
    const nameParts = c.name.split(' - SBD ');
    document.getElementById('popupCandidateName').textContent = nameParts[0] || c.name;
    document.getElementById('popupCandidateSBD').textContent = nameParts[1] ? '0' + nameParts[1] : String(c.id).padStart(5, '0');

    // Server, guild
    document.getElementById('popupCandidateServer').textContent = c.server;
    const guildEl = document.getElementById('popupCandidateGuild');
    if (guildEl) guildEl.textContent = c.guild || 'Lạc Viên';

    // Intro
    const introEl = document.getElementById('popupCandidateIntro');
    if (introEl) introEl.textContent = c.intro || 'Xin chào, mình là [Tên nhân vật]. Mình tham gia Mister để lưu giữ lại kỉ niệm và những khoảnh khắc đẹp.';

    // Score & Rank
    document.getElementById('popupCandidateScore').textContent = c.score.toLocaleString('vi-VN');
    const rankEl = document.getElementById('popupCandidateRank');
    if (rankEl) {
        const allSorted = allCandidates.slice().sort((a, b) => b.score - a.score);
        rankEl.textContent = allSorted.findIndex(x => x.id === id) + 1;
    }

    // Reset flower input
    document.getElementById('hoaAmount').value = '10.000';

    openModal('candidateModal');
}

function formatNumberWithDots(val) {
    return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

function changeHoaAmount(delta) {
    const input = document.getElementById('hoaAmount');
    const current = parseInt(input.value.replace(/\./g, '')) || 0;
    const nextVal = Math.max(1, current + delta * 1000);
    input.value = formatNumberWithDots(nextVal);
}

function setMaxHoa() {
    document.getElementById('hoaAmount').value = "99.999";
}

function doVote() {
    const amountStr = document.getElementById('hoaAmount').value;
    const amount = parseInt(amountStr.replace(/\./g, ''));
    if (!selectedCandidate) return;
    if (!amount || amount < 1) { alert('Vui lòng nhập số hoa muốn tặng!'); return; }

    selectedCandidate.score += amount;
    totalFlowers += amount;

    document.getElementById('popupCandidateScore').textContent = selectedCandidate.score.toLocaleString('vi-VN');
    document.getElementById('totalFlowers').textContent = totalFlowers;
    document.getElementById('hoaAmount').value = '10.000';

    updateRewardBar();
    renderCandidates();

    // Thêm vào lịch sử tặng hoa
    const now = new Date();
    const timeStr = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')} - ${String(now.getDate()).padStart(2, '0')}/${String(now.getMonth() + 1).padStart(2, '0')}`;
    const nameParts = selectedCandidate.name.split(' - SBD ');
    const displayName = nameParts[0] || selectedCandidate.name;

    voteHistory.unshift({
        time: timeStr,
        candidateName: displayName,
        amount: amount
    });

    // Hiển thị popup tặng hoa thành công đè lên bảng thí sinh
    openModal('voteSuccessModal');
}

function viewHistory() {
    const listEl = document.getElementById('historyList');
    if (!listEl) return;

    if (voteHistory.length === 0) {
        listEl.innerHTML = `<div class="text-center text-secondary py-3">Chưa có lịch sử tặng hoa nào.</div>`;
    } else {
        listEl.innerHTML = voteHistory.map(item => `
            <div class="d-flex justify-content-between align-items-center border-bottom border-secondary pb-2 mb-1" style="border-color: rgba(255,255,255,0.1) !important;">
                <span class="text-secondary" style="font-size: 0.72rem; min-width: 90px;">${item.time}</span>
                <span class="fw-semibold text-truncate flex-grow-1 px-2" style="max-width: 180px;">${item.candidateName}</span>
                <span class="cp-gold fw-bold text-nowrap">+${item.amount.toLocaleString('vi-VN')} 🌸</span>
            </div>
        `).join('');
    }

    openModal('historyModal');
}

/* ============================================================
   THANH TÍCH LŨY
============================================================ */
function updateRewardBar() {
    const maxFlowers = 1000;
    const pct = Math.min(100, (totalFlowers / maxFlowers) * 100);
    const fill = document.getElementById('rewardFill');
    if (fill) fill.style.width = pct + '%';
    const el = document.getElementById('totalFlowers');
    if (el) el.textContent = totalFlowers;
}

/* ============================================================
   BXH TABS
============================================================ */
function switchBxhTab(tab) {
    bxhTab = tab;
    document.getElementById('bxhTabMiss').classList.toggle('active', tab === 'miss');
    document.getElementById('bxhTabMister').classList.toggle('active', tab === 'mister');
    document.getElementById('bxhTabGuild').classList.toggle('active', tab === 'guild');
    // Dữ liệu BXH có thể update ở đây
}

/* ============================================================
   UPLOAD ẢNH
============================================================ */
function triggerUpload(id) { document.getElementById(id)?.click(); }

function onFileChange(e, id) {
    const file = e.target.files[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
        alert('Chỉ chấp nhận tệp hình ảnh (JPG, PNG, WEBP...)!');
        e.target.value = '';
        return;
    }

    const reader = new FileReader();
    reader.onload = ev => {
        const info = uploadMap[id];
        const img = document.getElementById(info.prev);
        if (img) {
            img.src = ev.target.result;
            img.style.objectFit = 'cover';
            img.style.border = '2px solid #00f3ff';
            img.style.boxShadow = '0 0 10px rgba(0,243,255,.4)';
        }
        uploaded[info.key] = true;
    };
    reader.readAsDataURL(file);
}

/* ============================================================
   POPUP
============================================================ */
function openModal(id) {
    const el = document.getElementById(id);
    if (!el) return;
    el.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal(id) {
    const el = document.getElementById(id);
    if (!el) return;
    el.classList.remove('active');
    document.body.style.overflow = '';
}

/* ============================================================
   SUBMIT FORM
============================================================ */
function onSubmit(e) {
    e.preventDefault();

    const gender = document.querySelector('input[name="gender"]:checked');
    if (!gender) { alert('Vui lòng chọn THÍ MISS hoặc THÍ MISTER!'); return; }

    if (!uploaded.mainPhoto) { alert('Vui lòng tải lên Ảnh dự thi chính!'); return; }
    if (!uploaded.sub1 || !uploaded.sub2 || !uploaded.sub3) {
        alert('Vui lòng tải lên đủ 3 Ảnh dự thi phụ!'); return;
    }

    if (!uploaded.cmndFront || !uploaded.cmndBack) {
        alert('Vui lòng tải lên ảnh CMND/CCCD mặt trước và mặt sau!'); return;
    }

    const fields = [
        { id: 'addressInput', check: v => v.trim() !== '' },
        { id: 'phoneInput', check: v => /^[0-9]{10,11}$/.test(v.trim()) },
        { id: 'regionSelect', check: v => v !== '' },
        { id: 'introInput', check: v => v.trim() !== '' },
        { id: 'videoInput', check: v => v.trim() !== '' },
    ];

    let ok = true;
    fields.forEach(({ id, check }) => {
        const el = document.getElementById(id);
        const box = el?.closest('.ibox');
        const valid = check(el?.value ?? '');
        box?.classList.toggle('err', !valid);
        if (!valid) ok = false;
    });

    if (!ok) { alert('Vui lòng điền đầy đủ và đúng định dạng tất cả các ô thông tin!'); return; }

    openModal('successModal');
}

/* ============================================================
   RESET FORM
============================================================ */
function resetForm() {
    if (!confirm('Bạn có chắc muốn xóa toàn bộ thông tin đã nhập?')) return;

    document.getElementById('registerForm')?.reset();

    document.querySelectorAll('input[name="gender"]').forEach(r => r.checked = false);
    document.getElementById('regionSelect')?.classList.remove('filled');

    const defaults = {
        mainPhotoPreview: 'assets/themanh.png',
        subPrev1: 'assets/themanhnho.png',
        subPrev2: 'assets/themanhnho.png',
        subPrev3: 'assets/themanhnho.png',
        cmndFrontPrev: 'assets/mattruoc.png',
        cmndBackPrev: 'assets/matsau.png',
    };
    Object.entries(defaults).forEach(([id, src]) => {
        const img = document.getElementById(id);
        if (img) { img.src = src; img.style.border = ''; img.style.boxShadow = ''; }
    });
    Object.keys(uploaded).forEach(k => uploaded[k] = false);

    document.querySelectorAll('.ibox.err').forEach(b => b.classList.remove('err'));
}

/* ============================================================
   NHẬN HOA FREE
============================================================ */
function claimFreeFlowers(task, amount) {
    if (localStorage.getItem('claimed_' + task)) {
        alert('Nhiệm vụ này đã nhận hoa rồi!');
        return;
    }

    totalFlowers += amount;
    localStorage.setItem('claimed_' + task, 'true');

    const el = document.getElementById('totalFlowers');
    if (el) el.textContent = totalFlowers;

    updateRewardBar();
    alert(`Nhận thành công +${amount} hoa free!`);
}

/* ============================================================
   NHẬN CODE MỐC QUÀ
============================================================ */
function claimMilestone(milestone) {
    // Để tiện test giao diện, tạm thời bỏ qua kiểm tra số hoa tích lũy
    /*
    if (totalFlowers < milestone) {
        alert(`Đại Hiệp chưa đạt mốc tích lũy ${milestone} Hoa! Hiện tại mới tích lũy được ${totalFlowers} Hoa.`);
        return;
    }
    */



    // Sinh mã code tương ứng mốc
    const codeValEl = document.getElementById('codeValue');
    if (codeValEl) {
        let code = '';
        if (milestone === 50) {
            code = 'ABACA0145656'; // Khớp với ảnh thiết kế
        } else if (milestone === 150) {
            code = 'ABACA150HDHB';
        } else if (milestone === 500) {
            code = 'ABACA500MKMK';
        } else if (milestone === 1000) {
            code = 'ABACA1000VIP';
        }
        codeValEl.textContent = code;
    }

    openModal('codeRewardModal');
}

function copyGiftCode() {
    const codeValEl = document.getElementById('codeValue');
    if (!codeValEl) return;
    const text = codeValEl.textContent.trim();

    navigator.clipboard.writeText(text).then(() => {
        alert('Đã sao chép mã code: ' + text);
    }).catch(err => {
        // Fallback cho trình duyệt cũ
        const textarea = document.createElement('textarea');
        textarea.value = text;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        alert('Đã sao chép mã code: ' + text);
    });
}

