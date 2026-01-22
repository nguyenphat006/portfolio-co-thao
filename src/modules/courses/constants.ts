// ===== COURSES PAGE CONSTANTS =====
// Note: Main course data is now in @/lib/constants.ts (COURSE_DATA)
// This file is kept for backwards compatibility and potential future use
export const PAGE_CONTENT = {
  title: "Khóa học",
  subtitle: "Nâng tầm bản thân với nghệ thuật thuyết trình & MC",
  description: "Các chương trình đào tạo được thiết kế dựa trên kinh nghiệm thực tế từ MC chuyên nghiệp và giảng viên đại học.",
} as const;


// ===== COURSE TYPE =====
export interface CourseItem {
  id: number;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  price: string;
  priceNote: string;
  level: "Cơ bản" | "Nâng cao" | "Chuyên sâu";
  schedule: {
    days: string;
    time: string;
    format: string;
    sessions: string;
    startDate: string;
  };
  highlights: string[];
  transferNote: string;
}


// ===== COURSES DATA =====
export const COURSES_DATA: CourseItem[] = [
  {
    id: 1,
    slug: "train-your-voice",
    title: "Train Your Voice - Change Your Life",
    subtitle: "Rèn luyện giọng nói - Thay đổi cuộc đời",
    description: "Khóa học rèn luyện giọng nói dành cho người lớn và trẻ em. Phát triển kỹ năng nói trước công chúng, tự tin giao tiếp trong mọi tình huống.",
    image: "/courses/1/thumb.webp",
    price: "5.000.000đ",
    priceNote: "/ 1 người",
    level: "Cơ bản",
    schedule: {
      days: "Thứ 2, Thứ 4",
      time: "8:00 - 9:00",
      format: "Online",
      sessions: "5 buổi",
      startDate: "25/01/2026",
    },
    highlights: [
      "Thay đổi giọng nói trong 5 buổi học",
      "Học online linh hoạt",
      "Giảng viên 13+ năm kinh nghiệm",
      "Phù hợp người lớn và trẻ em",
    ],
    transferNote: "Họ tên + Lớp kỹ năng nói trước công chúng",
  },
];