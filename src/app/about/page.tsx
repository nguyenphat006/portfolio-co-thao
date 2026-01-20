import dynamic from "next/dynamic";
import { Header, Footer } from "@/components/shared";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Về tôi | Phương Thảo - Hoa khôi VMU 2014",
    description: "Hành trình từ Hoa khôi Nữ sinh viên Việt Nam 2014 đến Giảng viên Đại học - Câu chuyện về vẻ đẹp của sự thông minh.",
};

// Lazy load AboutPage module
const AboutPage = dynamic(
    () => import("@/modules/about").then((mod) => ({ default: mod.AboutPage })),
    {
        loading: () => (
            <div className="min-h-screen flex items-center justify-center bg-white">
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
                    <AboutPage />
                </main>
                {/* <Footer /> */}
            </div>
        </>
    );
}
