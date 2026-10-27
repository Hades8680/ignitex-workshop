# IGNITEX – ABSOFT LEARNING WORKSHOP LANDING PAGE

Website giới thiệu đội ngũ khởi nghiệp **IGNITEX** và đề tài EdTech: **"ABSOFT LEARNING – NỀN TẢNG HỌC TẬP CÙNG GIÁO VIÊN AI CÁ NHÂN HÓA"**.

---

## 🚀 HƯỚNG DẪN KHỞI CHẠY DỰ ÁN

### 1. Khởi chạy môi trường phát triển (Development):
```bash
cd IGNITEX
npm run dev
```
Trang web sẽ tự động mở tại `http://localhost:3000` (hoặc cổng hiển thị trong Terminal).

### 2. Đóng gói triển khai thực tế (Production Build):
```bash
npm run build
```
Mã nguồn tối ưu sẵn sàng deploy sẽ nằm trọn vẹn trong thư mục `dist/`.

### 3. Xem trước bản Production:
```bash
npm run preview
```

---

## 🎨 CLEAN ARCHITECTURE & HƯỚNG DẪN TÙY CHỈNH DỮ LIỆU

Toàn bộ dữ liệu của website được tách biệt 100% khỏi giao diện và quản lý tại file:
📁 **`src/data/siteData.js`**

### 1. Thay ảnh đại diện (Avatar) cho 6 thành viên:
1. Copy ảnh chân dung của thành viên vào thư mục: `public/avatars/` (ví dụ: `dung-le.jpg`, `thinh-le.jpg`...)
2. Mở file [siteData.js](file:///d:/Desktop/M%E1%BB%86T/Sinh%20vi%C3%AAn%20kinh%20doanh/IGNITEX/src/data/siteData.js), tìm đến mảng `teamMembers`.
3. Cập nhật đường dẫn tại trường `avatarUrl`:
   ```javascript
   // Thay link ảnh hoặc đường dẫn ảnh tại đây:
   avatarUrl: "/avatars/dung-le.jpg", // Hoặc link online https://...
   ```
*(Hệ thống đã tích hợp sẵn cơ chế Auto-Fallback hiển thị vector avatar cực đẹp nếu ảnh chưa tải hoặc bị lỗi mạng)*.

### 2. Nhật ký phát triển (Dev Log) nội bộ trong Code:
Nhật ký phát triển được lưu trữ trực tiếp trong code tại mảng `devLogs` ở file [siteData.js](file:///d:/Desktop/M%E1%BB%86T/Sinh%20vi%C3%AAn%20kinh%20doanh/IGNITEX/src/data/siteData.js) (không hiển thị lên giao diện Landing Page của khách hàng). Đội ngũ có thể ghi nhận các cột mốc commit/milestone kỹ thuật bằng cách thêm đối tượng:
```javascript
{
  id: 6,
  version: "v1.3",
  status: "in_progress", // 'completed' | 'in_progress' | 'planned'
  statusLabel: "Đang triển khai",
  date: "10/11/2026",
  title: "Tên cột mốc cập nhật",
  author: "Tên người phụ trách",
  role: "Vai trò",
  summary: "Tóm tắt kết quả đạt được",
  changelog: [
    "Hạng mục 1",
    "Hạng mục 2"
  ]
}
```

---

## 🌐 HƯỚNG DẪN DEPLOY LÊN TÊN MIỀN RIÊNG

Dự án đã được cấu hình chuẩn SEO, Title tags, OpenGraph và Favicon. Bạn có thể deploy nhanh chóng bằng một trong các phương án:

### Cách 1: Vercel (Khuyên dùng - Miễn phí & Cực nhanh)
1. Đẩy thư mục `IGNITEX` lên GitHub.
2. Truy cập [vercel.com](https://vercel.com) -> New Project -> Chọn repo vừa đẩy.
3. Nhấn **Deploy** (Vercel tự nhận diện Vite và React).
4. Vào mục **Settings** -> **Domains** -> Nhập tên miền riêng của IGNITEX (ví dụ: `ignitex.edu.vn` hoặc `ignitex.vn`).

### Cách 2: Netlify
1. Kéo thả thư mục `dist` sau khi chạy `npm run build` vào [Netlify Drop](https://app.netlify.com/drop).
2. Trỏ CNAME / DNS tên miền về Netlify.

---

## 👥 THÀNH VIÊN ĐỘI NGŨ IGNITEX (ĐẠI HỌC GIAO THÔNG VẬN TẢI)
1. **Lê Văn Dũng** – Team Leader
2. **Lê Quang Thịnh** – Core AI & Full-stack Developer (CNTT CLC K63 - UTC)
3. **Thành Đặng Hoàn** – System & Frontend/Backend Engineer (CNTT CLC K63 - UTC)
4. **Đào Quỳnh Anh** – Business Analyst & Market Research (QTKD K66 - UTC)
5. **Phạm Toàn Tiến** – Growth & Operations Strategy (QTKD K66 - UTC)
6. **Nguyễn Hồng Nhạn** – Product Experience & Partnership (QTKD CLC K66 - UTC)
