// ===== GALLERY SECTION CONSTANTS =====
// Images representing Phương Thảo's journey: Beauty Queen, MC, Educator

export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  gridClass: string; // Combined grid positioning class
}

export const SECTION_CONTENT = {
  subtitle: "Khoảnh khắc",
  title: "Thư viện ảnh",
  description: "Hành trình từ sân khấu Hoa khôi đến giảng đường đại học",
} as const;

// Seamless bento grid layout
// Mobile: 4 rows x 12 cols (200px each row)
// Desktop: 2 rows x 12 cols (250px each row)
export const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1032&auto=format&fit=crop",
    alt: "Khoảnh khắc bên học viên",
    // Mobile: row 1-2, col 1-6 | Desktop: row 1-2, col 1-3
    gridClass: "col-span-6 row-span-2 md:col-span-3 md:row-span-2",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=870&auto=format&fit=crop",
    alt: "Thiên nhiên Việt Nam",
    // Mobile: row 1, col 7-12 | Desktop: row 1, col 4-9
    gridClass: "col-span-6 row-span-1 md:col-span-6 md:row-span-1",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=871&auto=format&fit=crop",
    alt: "Workshop đào tạo",
    // Mobile: row 2, col 7-12 | Desktop: row 1, col 10-12
    gridClass: "col-span-6 row-span-1 md:col-span-3 md:row-span-1",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=688&auto=format&fit=crop",
    alt: "Portrait",
    // Mobile: row 3, col 1-6 | Desktop: row 2, col 4-6
    gridClass: "col-span-6 row-span-1 md:col-span-3 md:row-span-1",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=870&auto=format&fit=crop",
    alt: "Sự kiện MC",
    // Mobile: row 3, col 7-12 | Desktop: row 2, col 7-9
    gridClass: "col-span-6 row-span-1 md:col-span-3 md:row-span-1",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=870&auto=format&fit=crop",
    alt: "Lớp học",
    // Mobile: row 4, col 1-12 | Desktop: row 2, col 10-12
    gridClass: "col-span-12 row-span-1 md:col-span-3 md:row-span-1",
  },
];
