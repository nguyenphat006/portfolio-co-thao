// ===== COURSE SECTION CONSTANTS =====
// Based on Phương Thảo's expertise: MC, Public Speaking, Personal Branding

export interface Course {
  id: number;
  title: string;
  description: string;
  image: string;
  duration: string;
}

export const SECTION_CONTENT = {
  label: "Chương trình",
  title: "Hành trình khám phá bản thân",
  subtitle: "cùng nghệ thuật thuyết trình",
  ctaText: "Xem tất cả khóa học",
} as const;

export const COURSES: Course[] = [
  {
    id: 1,
    title: "Kỹ năng MC chuyên nghiệp",
    description: "Khóa học toàn diện về kỹ năng dẫn chương trình, từ cơ bản đến nâng cao",
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=870&auto=format&fit=crop",
    duration: "8 tuần",
  },
  {
    id: 2,
    title: "Thuyết trình tự tin",
    description: "Làm chủ nghệ thuật thuyết trình và giao tiếp trước đám đông",
    image: "https://images.unsplash.com/photo-1560439514-4e9645039924?q=80&w=870&auto=format&fit=crop",
    duration: "3 ngày",
  },
  {
    id: 3,
    title: "Workshop cuối tuần",
    description: "Khóa học ngắn hạn dành cho những ai bận rộn",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=870&auto=format&fit=crop",
    duration: "2 ngày",
  },
];
