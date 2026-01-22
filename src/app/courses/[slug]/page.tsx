import { Metadata } from "next";
import { notFound } from "next/navigation";
import { SITE_CONFIG } from "@/lib/constants";
import { COURSES_DATA } from "@/modules/courses/constants"
import { CourseDetailPage } from "@/modules/courses/course-detail-page";
import { Footer, Header } from "@/components/shared";

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Generate static params for all courses
export async function generateStaticParams() {
  return COURSES_DATA.map((course) => ({
    slug: course.slug,
  }));
}

// Generate metadata for each course
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const course = COURSES_DATA.find((c) => c.slug === slug);

  if (!course) {
    return {
      title: "Không tìm thấy khóa học",
    };
  }

  return {
    title: `${course.title} | ${SITE_CONFIG.name}`,
    description: course.description,
  };
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const course = COURSES_DATA.find((c) => c.slug === slug);

  if (!course) {
    notFound();
  }

  return (
    <>
        <Header />
        <div className="pt-16 md:pt-0 md:ml-20">
        <main>
            <CourseDetailPage slug={slug} />
        </main>
        <Footer />
        </div>
    </>
  );
}
