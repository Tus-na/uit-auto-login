function handleAutoLogin() {
  const currentUrl = window.location.href;

  // 1. Tự động click nút "UIT SSO" tại trang courses.uit.edu.vn
  if (currentUrl.includes("courses.uit.edu.vn")) {
    const ssoBtn = Array.from(document.querySelectorAll('a, button')).find(
      el => el.textContent.trim().toUpperCase() === "UIT SSO"
    );
    if (ssoBtn) {
      ssoBtn.click();
      return;
    }
  }

  // Lấy dữ liệu tài khoản từ chrome.storage
  chrome.storage.local.get(['uit_user', 'uit_pass'], (data) => {
    const { uit_user, uit_pass } = data;
    if (!uit_user || !uit_pass) return; // Nếu chưa lưu tài khoản thì dừng

    // 2. Tự động đăng nhập tại trang sso.uit.edu.vn
    if (currentUrl.includes("sso.uit.edu.vn")) {
      const userInput = document.querySelector('input[name="username"]') || document.querySelector('#username');
      const passInput = document.querySelector('input[name="password"]') || document.querySelector('#password');
      const rememberMeCheckbox = document.querySelector('input[name="rememberMe"]') || document.querySelector('#rememberMe');
      const loginBtn = document.querySelector('input[type="submit"]') || document.querySelector('#kc-login');

      if (userInput && passInput && loginBtn) {
        userInput.value = uit_user;
        passInput.value = uit_pass;

        if (rememberMeCheckbox && !rememberMeCheckbox.checked) {
          rememberMeCheckbox.checked = true;
        }

        loginBtn.click();
      }
    }

    // 3. Tự động đăng nhập tại trang daa.uit.edu.vn
    if (currentUrl.includes("daa.uit.edu.vn")) {
      const userInput = document.querySelector('#edit-name');
      const passInput = document.querySelector('#edit-pass');
      const loginBtn = document.querySelector('#edit-submit');

      if (userInput && passInput && loginBtn) {
        userInput.value = uit_user;
        passInput.value = uit_pass;
        loginBtn.click();
      }
    }
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", handleAutoLogin);
} else {
  handleAutoLogin();
}