// ===== SITE CONFIGURATION =====
// Based on: Hoàng Thị Phương Thảo - Hoa khôi VMU 2014

export const SITE_CONFIG = {
  name: "Phương Thảo",
  fullName: "Hoàng Thị Phương Thảo",
  title: "BTV • MC Truyền hình • Ths.Giảng viên",
  description: "Từ Hoa khôi Nữ sinh viên Việt Nam đến Giảng viên Đại học - Hành trình truyền cảm hứng và lan tỏa vẻ đẹp trí tuệ",
  email: "btvhoangphuongthao@gmail.com",
  phone: "0972263439 (Ms.Linh)",
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
  facebook: "https://www.facebook.com/thao.hoang.547389",
  instagram: "https://instagram.com/hoangthi_phuongthaoo",
  youtube: "https://www.youtube.com/channel/UCFp2gRlAN-MtNMGkVf90VIg?themeRefresh=1",
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

// ===== INSTRUCTOR INFO (Shared) =====
export const INSTRUCTOR_INFO = {
  name: "Hoàng Thị Phương Thảo",
  title: "Thạc sĩ - MC - BTV - Giảng viên",
  credentials: [
    "Top 10 người dẫn chương trình truyền hình TPHCM",
    "Biên tập viên, MC đài truyền hình VTV9, HTV7, Today TV",
    "Giảng viên đào tạo MC của Nhà Văn hóa Thanh niên TPHCM",
    "Giảng viên môn truyền thông báo chí, PR, Event, Kỹ năng dẫn chương trình",
    "Hơn 13 năm kinh nghiệm trong lĩnh vực truyền thanh, truyền hình, sự kiện",
    "MC nhiều sự kiện ngoại giao cấp cao của TPHCM và cả nước",
  ],
} as const;

// ===== REGISTRATION INFO (Shared) =====
export const REGISTRATION_INFO = {
  bankName: "VP Bank - Chi Nhánh Quận 2",
  accountName: "Hoàng Thị Phương Thảo",
  accountNumber: "197199999999",
  contact: {
    phone: "0972263439",
    name: "Ms Linh",
    zalo: true,
  },
} as const;




