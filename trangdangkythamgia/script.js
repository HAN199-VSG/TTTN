/* State upload ảnh */
const uploaded = {
    mainPhoto: false, sub1: false, sub2: false, sub3: false,
    cmndFront: false, cmndBack: false
};

/* Map: inputId → previewId + stateKey */
const uploadMap = {
    mainPhotoInput: { prev: 'mainPhotoPreview', key: 'mainPhoto' },
    sub1:           { prev: 'subPrev1',          key: 'sub1'      },
    sub2:           { prev: 'subPrev2',          key: 'sub2'      },
    sub3:           { prev: 'subPrev3',          key: 'sub3'      },
    cmndFront:      { prev: 'cmndFrontPrev',     key: 'cmndFront' },
    cmndBack:       { prev: 'cmndBackPrev',      key: 'cmndBack'  },
};

/* ============================================================
   KHỞI TẠO KHI TRANG ĐÃ LOAD
============================================================ */
document.addEventListener('DOMContentLoaded', () => {

    /* Gắn sự kiện cho tất cả input file */
    Object.keys(uploadMap).forEach(id => {
        const el = document.getElementById(id);
        if (el) el.addEventListener('change', e => onFileChange(e, id));
    });

    /* Nút Thể Lệ */
    document.getElementById('rulesBtn')?.addEventListener('click', () => openModal('rulesModal'));
    /* Nút Hướng Dẫn */
    document.getElementById('guideBtn')?.addEventListener('click', () => openModal('guideModal'));
    /* Nút Tham Gia Ngay → cuộn xuống form */
    document.getElementById('joinNowBtn')?.addEventListener('click', () => {
        document.getElementById('registerSection')?.scrollIntoView({ behavior: 'smooth' });
    });

    /* Submit form */
    document.getElementById('registerForm')?.addEventListener('submit', onSubmit);

    /* Nhấn ngoài popup để đóng */
    document.querySelectorAll('.popup-overlay').forEach(o => {
        o.addEventListener('click', e => { if (e.target === o) closeModal(o.id); });
    });

    /* Nút đóng bảng đăng ký thành công */
    document.getElementById('successModalCloseBtn')?.addEventListener('click', () => closeModal('successModal'));


    /* Select khu vực — đổi màu chữ khi đã chọn */
    const sel = document.getElementById('regionSelect');
    if (sel) sel.addEventListener('change', function () {
        this.classList.toggle('filled', !!this.value);
    });
});

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
        const img  = document.getElementById(info.prev);
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

    /* 1. Kiểm tra giới tính */
    const gender = document.querySelector('input[name="gender"]:checked');
    if (!gender) { alert('Vui lòng chọn THÍ MISS hoặc THÍ MISTER!'); return; }

    /* 2. Kiểm tra đủ 4 ảnh dự thi */
    if (!uploaded.mainPhoto) { alert('Vui lòng tải lên Ảnh dự thi chính!'); return; }
    if (!uploaded.sub1 || !uploaded.sub2 || !uploaded.sub3) {
        alert('Vui lòng tải lên đủ 3 Ảnh dự thi phụ!'); return;
    }

    /* 3. Kiểm tra ảnh CMND */
    if (!uploaded.cmndFront || !uploaded.cmndBack) {
        alert('Vui lòng tải lên ảnh CMND/CCCD mặt trước và mặt sau!'); return;
    }

    /* 4. Kiểm tra các trường text */
    const fields = [
        { id: 'addressInput',  check: v => v.trim() !== '' },
        { id: 'phoneInput',    check: v => /^[0-9]{10,11}$/.test(v.trim()) },
        { id: 'regionSelect',  check: v => v !== '' },
        { id: 'introInput',    check: v => v.trim() !== '' },
        { id: 'videoInput',    check: v => v.trim() !== '' },
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

    /* Tất cả hợp lệ → thành công */
    openModal('successModal');
}

/* ============================================================
   RESET FORM
============================================================ */
function resetForm() {
    if (!confirm('Bạn có chắc muốn xóa toàn bộ thông tin đã nhập?')) return;

    document.getElementById('registerForm')?.reset();

    /* Reset radio giới tính */
    document.querySelectorAll('input[name="gender"]').forEach(r => r.checked = false);

    /* Reset select style */
    document.getElementById('regionSelect')?.classList.remove('filled');

    /* Reset upload state + preview */
    const defaults = {
        mainPhotoPreview: 'assets/themanh.png',
        subPrev1: 'assets/themanhnho.png',
        subPrev2: 'assets/themanhnho.png',
        subPrev3: 'assets/themanhnho.png',
        cmndFrontPrev: 'assets/mattruoc.png',
        cmndBackPrev:  'assets/matsau.png',
    };
    Object.entries(defaults).forEach(([id, src]) => {
        const img = document.getElementById(id);
        if (img) { img.src = src; img.style.border = ''; img.style.boxShadow = ''; }
    });
    Object.keys(uploaded).forEach(k => uploaded[k] = false);

    /* Xóa lỗi validation */
    document.querySelectorAll('.ibox.err').forEach(b => b.classList.remove('err'));
}
