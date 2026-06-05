document.addEventListener('DOMContentLoaded', function() {
    const loginBtn = document.querySelector('.btn-login');
    // Xử lý chuyển hướng cho nút Đăng ký ở Header và trong Form
    const signupBtn = document.querySelector('.btn-signup');
    const headerRegBtn = document.querySelector('.register-btn');

    if(loginBtn) {
        loginBtn.addEventListener('click', (e) => {
            e.preventDefault();
            // Sau khi đăng nhập xong thì quay về trang chủ
            window.location.href = '../trochoi.html';
        });
    }

    if(signupBtn) {
        signupBtn.addEventListener('click', () => {
            window.location.href = '../Dang_ky/dangky.html';
        });
    }
    if(headerRegBtn) {
        headerRegBtn.addEventListener('click', () => {
            window.location.href = '../Dang_ky/dangky.html';
        });
    }
});

function togglePassword() {

    const password =
        document.getElementById("password");

    if(password.type === "password"){
        password.type = "text";
    }
    else{
        password.type = "password";
    }
}