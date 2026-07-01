// ===========================
// Fara Client - auth.js
// ===========================

// ثبت نام
function register() {

    const username = document.getElementById("regUsername").value.trim();
    const password = document.getElementById("regPassword").value;
    const password2 = document.getElementById("regPassword2").value;

    const error = document.getElementById("error");
    const success = document.getElementById("success");

    error.innerHTML = "";
    success.innerHTML = "";

    if (username === "" || password === "" || password2 === "") {
        error.innerHTML = "همه فیلدها را پر کنید.";
        return;
    }

    if (password !== password2) {
        error.innerHTML = "رمزها یکسان نیستند.";
        return;
    }

    const account = {
        username: username,
        password: password
    };

    localStorage.setItem("FaraAccount", JSON.stringify(account));

    success.innerHTML = "ثبت نام با موفقیت انجام شد.";

    setTimeout(() => {
        window.location.href = "login.html";
    }, 1000);

}



// ورود
function login() {

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value;

    const error = document.getElementById("error");

    error.innerHTML = "";

    const account = JSON.parse(localStorage.getItem("FaraAccount"));

    if (!account) {
        error.innerHTML = "ابتدا ثبت نام کنید.";
        return;
    }

    if (username !== account.username || password !== account.password) {
        error.innerHTML = "نام کاربری یا رمز عبور اشتباه است.";
        return;
    }

    const expire = Date.now() + (24 * 60 * 60 * 1000);

    localStorage.setItem("FaraLogin", JSON.stringify({
        username: username,
        expire: expire
    }));

    window.location.href = "index.html";

}



// بررسی لاگین
function isLoggedIn() {

    const login = JSON.parse(localStorage.getItem("FaraLogin"));

    if (!login) {
        return false;
    }

    if (Date.now() > login.expire) {

        localStorage.removeItem("FaraLogin");

        return false;

    }

    return true;

}



// دریافت نام کاربر
function getUsername() {

    const login = JSON.parse(localStorage.getItem("FaraLogin"));

    if (!login) {
        return "";
    }

    return login.username;

}



// دانلود
function downloadLauncher() {

    if (!isLoggedIn()) {

        alert("ابتدا وارد حساب خود شوید.");

        window.location.href = "login.html";

        return;

    }

    window.location.href =
        "https://github.com/amoalir24-source/Fara_Cheat/releases/download/v1/Cheat_Fara.V1.rar";

}



// خروج
function logout() {

    localStorage.removeItem("FaraLogin");

    window.location.href = "index.html";

}
