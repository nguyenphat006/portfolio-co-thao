// ===== COURSES PAGE CONSTANTS =====

export interface CourseItem {
  id: number;
  title: string;
  description: string;
  image: string;
  duration: string;
  level: "Cơ bản" | "Nâng cao" | "Chuyên sâu";
  price?: string;
}

export const PAGE_CONTENT = {
  title: "Khóa học",
  subtitle: "Nâng tầm bản thân với nghệ thuật thuyết trình & MC",
  description: "Các chương trình đào tạo được thiết kế dựa trên kinh nghiệm thực tế từ MC chuyên nghiệp và giảng viên đại học.",
} as const;

export const COURSES_DATA: CourseItem[] = [
  {
    id: 1,
    title: "Kỹ năng MC chuyên nghiệp",
    description: "Khóa học toàn diện về kỹ năng dẫn chương trình, từ cơ bản đến nâng cao. Học cách làm chủ sân khấu và tạo ấn tượng với khán giả.",
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=870&auto=format&fit=crop",
    duration: "8 tuần",
    level: "Chuyên sâu",
    price: "Liên hệ",
  },
  {
    id: 2,
    title: "Thuyết trình tự tin",
    description: "Làm chủ nghệ thuật thuyết trình và giao tiếp trước đám đông. Phù hợp cho người mới bắt đầu.",
    image: "https://images.unsplash.com/photo-1560439514-4e9645039924?q=80&w=870&auto=format&fit=crop",
    duration: "3 ngày",
    level: "Cơ bản",
    price: "2.500.000đ",
  },
  {
    id: 3,
    title: "Workshop cuối tuần",
    description: "Khóa học ngắn hạn dành cho những ai bận rộn. Học thực hành ngay trong 2 ngày.",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=870&auto=format&fit=crop",
    duration: "2 ngày",
    level: "Cơ bản",
    price: "1.200.000đ",
  },
  {
    id: 4,
    title: "Personal Branding",
    description: "Xây dựng thương hiệu cá nhân mạnh mẽ. Định vị bản thân trong thời đại số.",
    image: "https://images.unsplash.com/photo-1552581234-26160f608093?q=80&w=870&auto=format&fit=crop",
    duration: "4 tuần",
    level: "Nâng cao",
    price: "Liên hệ",
  },
];
