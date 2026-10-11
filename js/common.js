/* =========================================================
   MENU ĐIỀU HƯỚNG (dùng chung cho mọi trang)
   -----------------------------------------------------------
   Muốn thêm link vào menu: copy 1 dòng bên dưới, đổi "label"
   (chữ hiển thị) và "href" (đường dẫn). Menu sẽ tự cập nhật
   ở TẤT CẢ các trang có thẻ <nav id="navbar"></nav>.

   - Trang trong cùng project: href là tên file, vd "20-10.html"
   - Link ra ngoài: thêm external: true để mở tab mới
   ========================================================= */
const MENU_ITEMS = [
  { label: "Trang chủ", href: "index.html" },
  { label: "Happy 6-Month Anniversary", href: "6months.html" },
  // { label: "Kỷ niệm", href: "ky-niem.html" },
  // { label: "Bài hát", href: "https://www.youtube.com/...", external: true },
];

function renderNavbar() {
  const nav = document.getElementById("navbar");
  if (!nav) return;

  const current = location.pathname.split("/").pop() || "index.html";
  nav.innerHTML = "";

  MENU_ITEMS.forEach((item) => {
    const a = document.createElement("a");
    a.textContent = item.label;
    a.href = item.href;
    a.className = "nav-link";

    if (item.external) {
      a.target = "_blank";
      a.rel = "noopener noreferrer";
    } else if (item.href === current) {
      a.classList.add("active");
    }

    nav.appendChild(a);
  });
}

renderNavbar();

/* =========================================================
   CHẶN BÔI ĐEN / COPY / CHUỘT PHẢI
   -----------------------------------------------------------
   Chỉ chặn thao tác thông thường, người rành kỹ thuật vẫn có
   thể xem mã nguồn qua DevTools (F12).
   ========================================================= */
document.addEventListener("contextmenu", (e) => e.preventDefault());
document.addEventListener("copy", (e) => e.preventDefault());
document.addEventListener("cut", (e) => e.preventDefault());
document.addEventListener("dragstart", (e) => e.preventDefault());

document.addEventListener("keydown", (e) => {
  const key = e.key.toLowerCase();
  const isCtrlOrCmd = e.ctrlKey || e.metaKey;

  if (isCtrlOrCmd && (key === "c" || key === "u" || key === "s")) {
    e.preventDefault();
  }
});
