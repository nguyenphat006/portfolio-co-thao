// ===== COURSE SECTION CONSTANTS =====
// Based on Phương Thảo's expertise: MC, Public Speaking, Personal Branding

export interface Course {
  id: number;
  title: string;
  description: string;
  image: string;
  type: "Online" | "Offline";
  duration: string;
  students: string;
  rating: number;
  featured: boolean;
}

export const SECTION_CONTENT = {
  subtitle: "Học cùng tôi",
  title: "Khóa học tiêu biểu",
  description: "Những khóa học được thiết kế dựa trên kinh nghiệm MC truyền hình và giảng dạy đại học",
  ctaText: "Xem tất cả khóa học",
} as const;

export const COURSES: Course[] = [
  {
    id: 1,
    title: "Kỹ năng MC & Thuyết trình",
    description: "Làm chủ nghệ thuật dẫn chương trình và thuyết trình tự tin như một MC chuyên nghiệp",
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=870&auto=format&fit=crop",
    type: "Offline",
    duration: "3 ngày",
    students: "500+",
    rating: 4.9,
    featured: true,
  },
  {
    id: 2,
    title: "Personal Branding Mastery",
    description: "Xây dựng thương hiệu cá nhân từ A-Z, học từ hành trình Hoa khôi đến Giảng viên",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=871&auto=format&fit=crop",
    type: "Online",
    duration: "8 tuần",
    students: "1,200+",
    rating: 4.8,
    featured: false,
  },
  {
    id: 3,
    title: "Kỹ năng mềm cho Sinh viên",
    description: "Trang bị kỹ năng giao tiếp, ứng xử và tự tin cho hành trình đại học",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=870&auto=format&fit=crop",
    type: "Online",
    duration: "6 tuần",
    students: "2,000+",
    rating: 4.9,
    featured: false,
  },
];
