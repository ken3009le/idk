const showMessage = (message, type = 'error') => {
    const msgBox = document.createElement('div');
    msgBox.textContent = message;
    msgBox.style.position = 'fixed';
    msgBox.style.top = '20px';
    msgBox.style.left = '50%';
    msgBox.style.transform = 'translateX(-50%)';
    msgBox.style.padding = '10px 20px';
    msgBox.style.borderRadius = '5px';
    msgBox.style.fontSize = '14px';
    msgBox.style.fontWeight = 'bold';
    msgBox.style.color = '#fff';
    msgBox.style.zIndex = '9999';
    msgBox.style.backgroundColor = type === 'success' ? '#00ff66' : 'red';
    document.body.appendChild(msgBox);
    setTimeout(() => msgBox.remove(), 3000);
};

const validateUsername = (username) => username.length >= 6 && username.length <= 18;
const validateEmail = (email) => /^[^ ]+@[^ ]+\.[a-z]{2,3}$/.test(email);
const validatePassword = (password) => password.length >= 6 && password.length <= 18;

const registerForm = document.getElementById('registerForm');
registerForm?.addEventListener('submit', function(event) {
    event.preventDefault();
    let username = document.getElementById('registerUsername').value.trim();
    let email = document.getElementById('registerEmail').value.trim();
    let password = document.getElementById('registerPassword').value;
    let confirmPassword = document.getElementById('confirmPassword').value;

    if (!validateUsername(username)) return showMessage('Tên đăng nhập phải từ 6 đến 18 ký tự.');
    if (!validateEmail(email)) return showMessage('Email không hợp lệ.');
    if (!validatePassword(password)) return showMessage('Mật khẩu phải từ 6 đến 18 ký tự.');
    if (password !== confirmPassword) return showMessage('Mật khẩu xác nhận không khớp.');

    showMessage('Đăng ký thành công!', 'success');
});

const loginForm = document.getElementById('loginForm');
loginForm?.addEventListener('submit', function(event) {
    event.preventDefault();
    let username = document.getElementById('loginUsername').value.trim();
    let password = document.getElementById('loginPassword').value;

    if (!validateUsername(username)) return showMessage('Tên đăng nhập phải từ 6 đến 18 ký tự.');
    if (!validatePassword(password)) return showMessage('Mật khẩu phải từ 6 đến 18 ký tự.');

    showMessage('Đăng nhập thành công!', 'success');
});
