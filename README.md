# UIT Auto SSO Login

Tiện ích mở rộng (Chrome Extension) giúp tự động hóa quá trình đăng nhập vào các trang web của Trường Đại học Công nghệ Thông tin - ĐHQG-HCM (UIT) như **Courses (Moodle)** và **DAA**.

---

## 🌟 Tính năng nổi bật

- **Tự động chuyển hướng:** Tự động nhấn nút **UIT SSO** tại trang trung gian `courses.uit.edu.vn`.
- **Tự động điền & Đăng nhập:** Tự động nhập MSSV, Mật khẩu và kích hoạt nút đăng nhập.
- **Tự động tích chọn:** Tự chọn ô **"Ghi nhớ tôi"** (Remember Me) trên hệ thống Keycloak SSO.
- **Bảo mật cục bộ:** Dữ liệu tài khoản được lưu trữ an toàn trong `chrome.storage.local` trên máy tính cá nhân, không gửi dữ liệu ra máy chủ bên ngoài.

---

## 🚀 Hướng dẫn cài đặt

### Cách 1: Tải file ZIP (Dành cho người dùng thông thường)
1. Nhấn vào nút **Code** ở góc trên và chọn **Download ZIP**.
2. Giải nén file `.zip` vừa tải về thành một thư mục trên máy tính.

### Cách 2: Sử dụng Git (Dành cho nhà phát triển)
```bash
git clone [https://github.com/USERNAME/uit-auto-login.git](https://github.com/USERNAME/uit-auto-login.git)