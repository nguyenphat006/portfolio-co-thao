// ===== ABOUT SECTION CONSTANTS =====
// Data based on: Hoàng Thị Phương Thảo's professional background

import { Heart, Star, Award, type LucideIcon } from "lucide-react";

export interface Highlight {
  icon: LucideIcon;
  label: string;
  value: string;
}

export const ABOUT_CONTENT = {
  greeting: "Xin chào!",
  title: "Câu chuyện của tôi",
  description: `Tôi là Phương Thảo - Hoa khôi Nữ sinh viên Việt Nam duyên dáng 2014, cựu sinh viên Đại học Sư phạm TP.HCM. Từ việc vượt qua hơn 1.700 thí sinh để đăng quang ngôi vị cao nhất, tôi đã biến ước mơ trở thành giảng viên đại học thành hiện thực.

Hiện tại, tôi là Biên tập viên tại VTV9 với chương trình "Toàn cảnh 24h", đồng thời là Giảng viên tại FPT Polytechnic và trường Trung cấp Việt Giao. Với tấm bằng Thạc sĩ Quản lý Giáo dục từ ĐHQG TP.HCM, tôi tin rằng vẻ đẹp đích thực đến từ trí tuệ và sự tự tin.`,
  signature: "Phương Thảo",
  images: [
    // Professional portrait photos
    "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=688&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?q=80&w=687&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?q=80&w=870&auto=format&fit=crop",
  ],
} as const;

export const HIGHLIGHTS: Highlight[] = [
  { icon: Heart, label: "Đam mê", value: "Truyền cảm hứng" },
  { icon: Star, label: "Danh hiệu", value: "Hoa khôi VMU 2014" },
  { icon: Award, label: "Học vấn", value: "Thạc sĩ Giáo dục" },
];

// Achievements for potential use
export const ACHIEVEMENTS = [
  {
    title: "Hoa khôi VMU 2014",
    description: "Vượt qua 1.700+ thí sinh, nhận vương miện 800 triệu đồng",
  },
  {
    title: "Top 10 Én Vàng 2020",
    description: "Cuộc thi tìm kiếm tài năng MC uy tín nhất Việt Nam",
  },
  {
    title: "Chung kết HHVN 2016",
    description: "Lọt vào vòng Chung kết Hoa hậu Việt Nam",
  },
  {
    title: "Thạc sĩ Quản lý GD",
    description: "Tốt nghiệp ĐHQG TP.HCM năm 2021",
  },
] as const;
