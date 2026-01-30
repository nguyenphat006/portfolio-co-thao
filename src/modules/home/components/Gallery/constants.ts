// ===== GALLERY SECTION CONSTANTS =====
// Images representing Phương Thảo's journey: Beauty Queen, MC, Educator

export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  type?: 'image' | 'video'; // Type of media
}

export const SECTION_CONTENT = {
  subtitle: "Khoảnh khắc",
  title: "Thư viện ảnh & video",
  description: "Hành trình từ sân khấu Hoa khôi đến giảng đường đại học",
} as const;

// Grid pattern that repeats every 10 items
// Mobile: 5 rows x 12 cols (200px each row)
// Desktop: 3 rows x 12 cols (250px each row)
export const GRID_PATTERNS = [
  "col-span-6 row-span-2 md:col-span-3 md:row-span-2", // 0: Large vertical
  "col-span-6 row-span-1 md:col-span-6 md:row-span-1", // 1: Wide horizontal
  "col-span-6 row-span-1 md:col-span-3 md:row-span-1", // 2: Medium square
  "col-span-12 row-span-1 md:col-span-6 md:row-span-2", // 3: Large horizontal (good for video)
  "col-span-6 row-span-1 md:col-span-3 md:row-span-1", // 4: Medium square
  "col-span-6 row-span-1 md:col-span-3 md:row-span-1", // 5: Medium square
  "col-span-6 row-span-1 md:col-span-3 md:row-span-1", // 6: Medium square
  "col-span-6 row-span-1 md:col-span-3 md:row-span-1", // 7: Medium square
  "col-span-6 row-span-1 md:col-span-3 md:row-span-1", // 8: Medium square
  "col-span-6 row-span-1 md:col-span-3 md:row-span-1", // 9: Medium square
];

// Gallery items - gridClass will be auto-assigned based on index
export const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: 1,
    src: "/about/Hoa_Khoi_2014.jpg",
    alt: "Hoa khôi 2014",
    type: 'image',
  },
  {
    id: 2,
    src: "/about/IMG_4550.PNG",
    alt: "Khoảnh khắc sự kiện",
    type: 'image',
  },
  {
    id: 3,
    src: "/about/IMG_2543.JPG",
    alt: "Workshop đào tạo",
    type: 'image',
  },
  {
    id: 4,
    src: "/video/Video_2.mp4",
    alt: "Video hoạt động",
    type: 'video',
  },
  {
    id: 5,
    src: "/about/IMG_5265.JPG",
    alt: "Sự kiện MC",
    type: 'image',
  },
  {
    id: 6,
    src: "/about/IMG_6771.JPG",
    alt: "Lớp học",
    type: 'image',
  },
  {
    id: 7,
    src: "/about/IMG_3989.JPG",
    alt: "Buổi đào tạo",
    type: 'image',
  },
  {
    id: 8,
    src: "/about/IMG_5321.JPG",
    alt: "Hoạt động giảng dạy",
    type: 'image',
  },
  {
    id: 9,
    src: "/about/IMG_8919.JPG",
    alt: "Sự kiện đặc biệt",
    type: 'image',
  },
  {
    id: 10,
    src: "/about/IMG_6847.JPG",
    alt: "Kỷ niệm đáng nhớ",
    type: 'image',
  },
  {
    id: 11,
    src: "/video/Video_3.mp4",
    alt: "MC Đài truyền hình",
    type: 'video',
  },
  {
    id: 12,
    src: "/about/IMG_6848.JPG",
    alt: "Buổi giao lưu",
    type: 'image',
  },
    {
    id: 13,
    src: "/about/IMG_8977.JPG",
    alt: "Buổi giao lưu",
    type: 'image',
  },
];
