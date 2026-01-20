// ===== SITE CONFIGURATION =====
// Based on: Hoàng Thị Phương Thảo - Hoa khôi VMU 2014

export const SITE_CONFIG = {
  name: "Phương Thảo",
  fullName: "Hoàng Thị Phương Thảo",
  title: "MC • Giảng viên • Hoa khôi VMU 2014",
  description: "Từ Hoa khôi Nữ sinh viên Việt Nam đến Giảng viên Đại học - Hành trình truyền cảm hứng và lan tỏa vẻ đẹp trí tuệ",
  email: "contact@phuongthao.com",
  phone: "+84 xxx xxx xxx",
  // Thông tin cơ bản
  birthYear: 1994,
  height: "1m68",
  education: "Thạc sĩ Quản lý Giáo dục - ĐHQG TP.HCM",
  alma_mater: "Đại học Sư phạm TP.HCM",
} as const;

// ===== CAREER POSITIONS =====
export const POSITIONS = [
  {
    role: "Phó Tổng Giám đốc",
    company: "Vietnews Media",
    current: true,
  },
  {
    role: "Biên tập viên",
    company: "VTV9 - Toàn cảnh 24h",
    current: true,
  },
  {
    role: "Giảng viên",
    company: "FPT Polytechnic",
    current: true,
  },
  {
    role: "Giảng viên",
    company: "Trường Trung cấp Việt Giao",
    current: true,
  },
] as const;

// ===== ACHIEVEMENTS =====
export const ACHIEVEMENTS = [
  {
    year: "2014",
    title: "Hoa khôi Nữ sinh viên Việt Nam duyên dáng",
    description: "Vượt qua 1.700+ thí sinh, nhận vương miện 800 triệu đồng",
    highlight: true,
  },
  {
    year: "2016",
    title: "Chung kết Hoa hậu Việt Nam",
    description: "Lọt vào vòng Chung kết toàn quốc",
    highlight: false,
  },
  {
    year: "2020",
    title: "Top 10 Én Vàng Nghệ Sĩ",
    description: "Cuộc thi tìm kiếm tài năng MC uy tín nhất",
    highlight: false,
  },
  {
    year: "2021",
    title: "Thạc sĩ Quản lý Giáo dục",
    description: "Tốt nghiệp ĐHQG TP.HCM",
    highlight: true,
  },
] as const;

// ===== SOCIAL LINKS =====
export const SOCIAL_LINKS = {
  facebook: "https://facebook.com/",
  instagram: "https://instagram.com/",
  youtube: "https://www.youtube.com/watch?v=Q9W4KcV6yrs",
  tiktok: "https://tiktok.com/",
  linkedin: "https://linkedin.com/",
} as const;

// ===== NAVIGATION =====
export const NAV_LINKS = [
  { label: "Trang chủ", href: "/" },
  { label: "Về tôi", href: "/about" },
  { label: "Khóa học", href: "/courses" },
  { label: "Liên hệ", href: "/contact" },
] as const;

// ===== MEDIA PARTNERS (for backward compatibility) =====
export const MEDIA_PARTNERS = [
  { name: "VTV9", logo: "/partners/vtv.png" },
  { name: "HTV", logo: "/partners/htv.png" },
  { name: "Today TV", logo: "/partners/todaytv.png" },
  { name: "FPT Polytechnic", logo: "/partners/fpt.png" },
] as const;
