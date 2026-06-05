// Các hàm điều hướng toàn cục (để dùng với onclick trong HTML)
window.goToLogin = function() {
    window.location.href = "Dang_nhap.html";
};

// Hàm chuyển hướng đến trang đăng ký
window.goToRegister = function() {
    window.location.href = "dangky.html";
};

// Hàm xử lý đăng nhập và quay về trang chủ
window.login = function() {
    window.location.href = "../trochoi.html";
};

// Hàm hiện/ẩn mật khẩu
window.togglePassword = function(id = "password") {
    const passwordField = document.getElementById(id);
    if (passwordField) {
        passwordField.type = passwordField.type === "password" ? "text" : "password";
    }
};

document.addEventListener('DOMContentLoaded', function() {
    // Khởi tạo Captcha khi trang tải xong
    createCaptcha();

    // Xử lý sự kiện gửi form Đăng ký
    const registerForm = document.querySelector('.register-form');
    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Ngăn chặn hành vi gửi form mặc định (tải lại trang)

            // Lấy giá trị từ các trường nhập liệu
            // Lưu ý: Cần có ID hoặc selector cụ thể hơn nếu có nhiều input cùng placeholder
            let usernameInput = registerForm.querySelector('input[placeholder="Tên đăng nhập hoặc Email"]');
            let passwordInput = registerForm.querySelector('input[placeholder="Mật khẩu"]');
            let repasswordInput = registerForm.querySelector('input[placeholder="Nhập lại mật khẩu"]');
            let captchaInput = registerForm.querySelector('.captcha input[type="text"]');
            let displayedCaptcha = document.getElementById("captchaText").innerText;

            let username = usernameInput ? usernameInput.value.trim() : '';
            let password = passwordInput ? passwordInput.value.trim() : '';
            let repassword = repasswordInput ? repasswordInput.value.trim() : '';
            let enteredCaptcha = captchaInput ? captchaInput.value.trim() : '';

            // Kiểm tra các trường bắt buộc
            if (username === "" || password === "" || repassword === "" || enteredCaptcha === "") {
                alert("Vui lòng nhập đầy đủ thông tin!");
                return;
            }

            // Kiểm tra mật khẩu xác nhận
            if (password !== repassword) {
                alert("Mật khẩu xác nhận không khớp!");
                return;
            }

            // Kiểm tra mã xác thực
            if (enteredCaptcha !== displayedCaptcha) {
                alert("Mã xác thực không đúng!");
                createCaptcha(); // Tải lại captcha nếu nhập sai
                return;
            }

            // Lưu thông tin người dùng vào Local Storage (chỉ để minh họa)
            const user = {
                username: username,
                password: password
            };
            localStorage.setItem("user", JSON.stringify(user));

            alert("Đăng ký thành công! Bạn sẽ được chuyển đến trang đăng nhập.");
            window.location.href = "Dang_nhap.html";
        });
    }

    // Xử lý nút làm mới Captcha
    const captchaRefreshBtn = document.querySelector('.captcha button');
    if (captchaRefreshBtn) {
        captchaRefreshBtn.addEventListener('click', createCaptcha);
    }
});

// Hàm tạo mã Captcha
function createCaptcha() {
    const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ123456789";
    let captcha = "";
    for (let i = 0; i < 6; i++) {
        captcha += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    const captchaTextElement = document.getElementById("captchaText");
    if (captchaTextElement) {
        captchaTextElement.innerText = captcha;
    }
}