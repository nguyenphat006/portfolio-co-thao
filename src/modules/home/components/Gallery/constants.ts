// ===== GALLERY SECTION CONSTANTS =====
// Images representing Phương Thảo's journey: Beauty Queen, MC, Educator

export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  // Grid positioning for organic layout
  colSpan: string;
  rowSpan: string;
  aspectRatio: string;
}

export const SECTION_CONTENT = {
  subtitle: "Khoảnh khắc",
  title: "Thư viện ảnh",
  description: "Hành trình từ sân khấu Hoa khôi đến giảng đường đại học",
} as const;

// Organic bento grid layout like the reference image
export const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1032&auto=format&fit=crop",
    alt: "Khoảnh khắc bên học viên",
    colSpan: "md:col-span-1",
    rowSpan: "md:row-span-2",
    aspectRatio: "aspect-[3/4]",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=870&auto=format&fit=crop",
    alt: "Thiên nhiên Việt Nam",
    colSpan: "md:col-span-2",
    rowSpan: "md:row-span-1",
    aspectRatio: "aspect-[16/9]",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=871&auto=format&fit=crop",
    alt: "Workshop đào tạo",
    colSpan: "md:col-span-1",
    rowSpan: "md:row-span-1",
    aspectRatio: "aspect-square",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=688&auto=format&fit=crop",
    alt: "Portrait",
    colSpan: "md:col-span-1",
    rowSpan: "md:row-span-1",
    aspectRatio: "aspect-[4/5]",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=870&auto=format&fit=crop",
    alt: "Sự kiện MC",
    colSpan: "md:col-span-1",
    rowSpan: "md:row-span-1",
    aspectRatio: "aspect-square",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=870&auto=format&fit=crop",
    alt: "Lớp học",
    colSpan: "md:col-span-1",
    rowSpan: "md:row-span-1",
    aspectRatio: "aspect-square",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=869&auto=format&fit=crop",
    alt: "Hội thảo",
    colSpan: "md:col-span-2",
    rowSpan: "md:row-span-1",
    aspectRatio: "aspect-[2/1]",
  },
];
