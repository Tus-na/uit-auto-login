document.addEventListener('DOMContentLoaded', () => {
  const userInput = document.getElementById('username');
  const passInput = document.getElementById('password');
  const saveBtn = document.getElementById('saveBtn');
  const status = document.getElementById('status');

  // Lấy dữ liệu đã lưu ra hiển thị lên ô input
  chrome.storage.local.get(['uit_user', 'uit_pass'], (data) => {
    if (data.uit_user) userInput.value = data.uit_user;
    if (data.uit_pass) passInput.value = data.uit_pass;
  });

  // Lưu thông tin khi bấm nút Save
  saveBtn.addEventListener('click', () => {
    const username = userInput.value.trim();
    const password = passInput.value;

    chrome.storage.local.set({ uit_user: username, uit_pass: password }, () => {
      status.textContent = 'Đã lưu thành công!';
      setTimeout(() => {
        status.textContent = '';
      }, 2000);
    });
  });
});