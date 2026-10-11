# 💌 Website bí mật tặng bạn gái

Một trang web tĩnh (HTML/CSS/JS thuần, không cần server) với màn hình
khóa bằng mật khẩu, sau khi nhập đúng sẽ hiện ảnh kỷ niệm và một lá thư.

## 📁 Cấu trúc project

```
love-site/
├── index.html          # Trang chính
├── css/
│   └── style.css       # Toàn bộ giao diện
├── js/
│   └── script.js       # Xử lý mật khẩu + hiệu ứng
└── images/
    ├── photo1.jpg       # Ảnh 1 (tự thay bằng ảnh của bạn)
    ├── photo2.jpg       # Ảnh 2
    └── photo3.jpg       # Ảnh 3
```

## 1️⃣ Đổi mật khẩu bí mật

Mật khẩu mặc định hiện tại là **`123456`** — bạn PHẢI đổi lại trước khi gửi cho bạn gái!

1. Mở `index.html` bằng trình duyệt (double click vào file cũng được).
2. Nhấn `F12` để mở DevTools → chọn tab **Console**.
3. Gõ dòng sau, thay `"matkhaucuaanh"` bằng mật khẩu bạn muốn (không dấu, không cách để tránh lỗi vặt, nhưng có dấu vẫn chạy được):

   ```js
   await sha256("matkhaucuaanh")
   ```

4. Console sẽ in ra một chuỗi hash, ví dụ:
   `3a7bd3e2360a3d...`

5. Mở file `js/script.js`, tìm dòng:

   ```js
   const CORRECT_HASH = "8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c9";
   ```

   Thay chuỗi đó bằng hash mới bạn vừa copy.

> Vì sao không viết thẳng mật khẩu vào code? Vì file JS trên GitHub Pages
> ai cũng xem được mã nguồn. Lưu dạng hash giúp mật khẩu không lộ ra ngay
> khi mở file, dù đây vẫn không phải là bảo mật tuyệt đối (không dùng
> cho dữ liệu nhạy cảm thật sự).

## 2️⃣ Thay ảnh của bạn gái

- Bỏ ảnh vào thư mục `images/`, đặt tên là `photo1.jpg`, `photo2.jpg`, `photo3.jpg`
  (hoặc đổi tên tùy ý, miễn khớp với `index.html`).
- Muốn thêm/bớt ảnh: mở `index.html`, tìm phần:

  ```html
  <div class="gallery" id="gallery">
    <img src="images/photo1.jpg" alt="Kỷ niệm 1" />
    <img src="images/photo2.jpg" alt="Kỷ niệm 2" />
    <img src="images/photo3.jpg" alt="Kỷ niệm 3" />
  </div>
  ```

  Thêm/xóa các dòng `<img>` tùy ý.
- **Mẹo:** nên nén ảnh trước (dùng [tinypng.com](https://tinypng.com) hoặc
  [squoosh.app](https://squoosh.app)) để web tải nhanh, đặc biệt nếu bạn
  gái xem trên điện thoại.

## 3️⃣ Sửa nội dung lá thư

Mở `index.html`, tìm phần:

```html
<div class="letter">
  <h2>Thư gửi em</h2>
  <p id="letter-text">
    Em thân yêu,<br /><br />
    ...
  </p>
</div>
```

Thay toàn bộ nội dung trong thẻ `<p>` bằng lời nhắn thật của bạn.
Dùng `<br /><br />` để xuống dòng/tạo đoạn văn mới.

## 4️⃣ Chạy thử ở máy tính (trước khi đăng)

Chỉ cần double-click `index.html` để mở bằng trình duyệt và thử luôn —
không cần cài gì thêm.

## 5️⃣ Đưa lên GitHub Pages (miễn phí, có link riêng)

1. Tạo tài khoản GitHub (nếu chưa có): https://github.com
2. Tạo một repository mới, ví dụ đặt tên `for-em` (tên gì cũng được).
3. Upload toàn bộ nội dung của thư mục `love-site/` vào repo đó
   (kéo thả file lên qua giao diện web GitHub, hoặc dùng Git nếu quen):

   ```bash
   git init
   git add .
   git commit -m "First love letter site"
   git branch -M main
   git remote add origin https://github.com/<ten-tai-khoan>/for-em.git
   git push -u origin main
   ```

4. Vào repo trên GitHub → **Settings** → mục **Pages** (menu bên trái).
5. Ở phần **Build and deployment** → **Source**, chọn **Deploy from a branch**.
6. Chọn branch `main`, thư mục `/ (root)` → **Save**.
7. Đợi khoảng 1–2 phút, GitHub sẽ cho bạn một link dạng:

   ```
   https://<ten-tai-khoan>.github.io/for-em/
   ```

8. Gửi link đó cho bạn gái, kèm theo mật khẩu (nói trực tiếp/nhắn tin
   riêng, đừng để lộ trên trang web).

## ⚠️ Lưu ý về quyền riêng tư

- Repository GitHub thông thường (public) thì **ai có link cũng xem được
  trang web**, nhưng chỉ ai biết mật khẩu mới xem được ảnh + thư.
- Cơ chế này chỉ mang tính "khóa cửa nhẹ", không phải mã hóa cấp bảo mật cao —
  người rành kỹ thuật vẫn có thể lấy được ảnh nếu cố tình. Vì đây là món quà
  tình cảm nên mức bảo vệ này thường là đủ. Nếu ảnh thật riêng tư/nhạy cảm,
  cân nhắc dùng repository **private** kèm GitHub Pages cho tài khoản trả phí,
  hoặc một dịch vụ chia sẻ ảnh riêng tư khác.

Chúc bạn có một món quà thật ý nghĩa! 💖

## 🧭 Menu điều hướng & thêm trang mới

- Menu được định nghĩa ở đầu file `js/common.js` (mảng `MENU_ITEMS`).
  Thêm link = thêm 1 dòng `{ label: "Tên", href: "duong-dan" }`
  (link ra ngoài thì thêm `external: true`).
- Trang nào muốn có menu chỉ cần có thẻ `<nav id="navbar" class="navbar"></nav>`
  và nạp `<script src="js/common.js"></script>` ở cuối `<body>`.
- Trang `20-10.html`: đặt ảnh `images/2010-1.jpg`, `images/2010-2.jpg`
  và sửa lời chúc trong file. Muốn thêm trang khác, copy `20-10.html`,
  đổi tên + nội dung, rồi thêm vào `MENU_ITEMS`.
- Các trang phụ có đoạn kiểm tra: chưa nhập mật khẩu ở trang chủ (trong
  cùng tab trình duyệt) thì sẽ bị đưa về trang chủ. Đây chỉ là khóa nhẹ
  phía trình duyệt, không phải bảo mật tuyệt đối.
