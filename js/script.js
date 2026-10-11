/* =========================================================
   CẤU HÌNH MẬT KHẨU
   -----------------------------------------------------------
   Vì lý do bảo mật, mật khẩu KHÔNG được lưu dạng chữ thường
   (plain text) trong code, mà lưu dưới dạng "hash" SHA-256.
   Điều này giúp ai đó mở file script.js lên cũng không đọc
   được ngay mật khẩu là gì.

   ĐỂ ĐỔI MẬT KHẨU:
   1. Mở file index.html trong trình duyệt (Chrome/Edge/Firefox).
   2. Bấm F12 để mở Console.
   3. Gõ đúng dòng sau (thay "matkhaucuaanh" bằng mật khẩu em muốn):

      await sha256("matkhaucuaanh")

   4. Console sẽ trả ra một chuỗi dài (hash). Copy chuỗi đó
      và dán thay vào biến CORRECT_HASH bên dưới.
   ========================================================= */

const CORRECT_HASH =
  "549f01b2ad5b123da8e0eafc786d80e82ce28f9001b39ca07a164a4787e10e64";
  // ^ Đây là hash mặc định của chữ "123456" - NHỚ ĐỔI LẠI!

/* Hàm băm SHA-256 bằng Web Crypto API (có sẵn trên trình duyệt) */
async function sha256(message) {
  const msgBuffer = new TextEncoder().encode(message);
  const hashBuffer = await crypto.subtle.digest("SHA-256", msgBuffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
}

/* =========================================================
   XỬ LÝ FORM NHẬP MẬT KHẨU
   ========================================================= */
const form = document.getElementById("password-form");
const input = document.getElementById("password-input");
const errorMsg = document.getElementById("error-msg");
const lockScreen = document.getElementById("lock-screen");
const mainContent = document.getElementById("main-content");
const lockCard = document.querySelector(".lock-card");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const value = input.value.trim();
  if (!value) return;

  const hash = await sha256(value);

  if (hash === CORRECT_HASH) {
    unlockContent();
  } else {
    showError();
  }
});

function showError() {
  errorMsg.textContent = "Sai mật khẩu rồi, thử lại xem nào 🥺";
  lockCard.classList.remove("shake");
  // reflow để animation chạy lại được
  void lockCard.offsetWidth;
  lockCard.classList.add("shake");
  input.value = "";
  input.focus();
}

function unlockContent() {
  // Lưu trạng thái để lần sau vào không cần nhập lại (tuỳ chọn)
  sessionStorage.setItem("unlocked", "true");

  lockScreen.classList.add("hidden");
  mainContent.classList.remove("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

/* Nếu muốn: tự động mở khóa nếu đã nhập đúng trong phiên này */
window.addEventListener("DOMContentLoaded", () => {
  if (sessionStorage.getItem("unlocked") === "true") {
    unlockContent();
  }
});
