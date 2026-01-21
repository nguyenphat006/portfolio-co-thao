import dynamic from "next/dynamic";
import { Header, Footer } from "@/components/shared";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Khóa học | Hoàng Thị Phương Thảo - MC & Giảng viên",
  description: "Các khóa học MC, thuyết trình và personal branding từ Phương Thảo - Hoa khôi VMU 2014, MC chuyên nghiệp.",
};

// Lazy load CoursesPage module
const CoursesPage = dynamic(
  () => import("@/modules/courses").then((mod) => ({ default: mod.CoursesPage })),
  {
    loading: () => (
      <div className="min-h-screen flex items-center justify-center bg-brand-50">
        <div className="animate-pulse">
          <div className="w-16 h-16 border-4 border-brand-200 border-t-brand-500 rounded-full animate-spin" />
        </div>
      </div>
    ),
  }
);

export default function Page() {
  return (
    <>
      <Header />
      {/* Main content wrapper: pt-16 for mobile top bar, md:pt-0 md:ml-20 for desktop sidebar */}
      <div className="pt-16 md:pt-0 md:ml-20">
        <main>
          <CoursesPage />
        </main>
        <Footer />
      </div>
    </>
  );
}
