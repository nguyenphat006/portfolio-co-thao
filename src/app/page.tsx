import dynamic from "next/dynamic";
import { Header, Footer } from "@/components/shared";

// Lazy load HomePage module for better performance
const HomePage = dynamic(
  () => import("@/modules/home").then((mod) => ({ default: mod.HomePage })),
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
      <main>
        <HomePage />
      </main>
      <Footer />
    </>
  );
}
