
# SOFTWARE REQUIREMENTS SPECIFICATION (SRS)

Project Name: Personal Branding Portfolio Website

Target Audience: Students, Partners, Media.

Vibe: Elegant, Feminine, Editorial (Magazine Style), Professional.

---

## 1. DESIGN SYSTEM & STYLING (GLOBAL)

### 1.1. Color Palette (Bảng màu)

Dựa trên phong cách "Costiera Pearl", sử dụng tông màu Hồng Pastel chủ đạo, phối với Trắng và Xám đậm.

* **Primary Backgrounds:**
  * `Rose Water` (Nền chính, xen kẽ): `#FFF1F2`
  * `Pure White` (Nền Card/Section): `#FFFFFF`
  * `Dusty Rose` (Nền điểm nhấn - About Section): `#E1B0B9` hoặc `#DFA5B0`
* **Text & Content:**
  * `Navy Charcoal` (Tiêu đề - Thay cho màu đen): `#1E293B`
  * `Slate Gray` (Nội dung bài viết): `#475569`
* **Accents (Nút bấm, Icon, Họa tiết):**
  * `Elegant Rose` (Primary Action): `#BE185D`
  * `Soft Pink` (Secondary/Border): `#FECDD3`

### 1.2. Typography (Phông chữ)

Cấu hình Global trong `layout.tsx` sử dụng `next/font/google`.

* **Heading Font (Serif):** `Playfair Display`
  * *Usage:* Các tiêu đề lớn (H1, H2), tạo cảm giác tạp chí, sang trọng.
  * *Style:* Thường dùng **UPPERCASE** (In hoa) cho các tiêu đề Section.
* **Body Font (Sans-serif):** `Inter` hoặc `Montserrat`
  * *Usage:* Văn bản dài, menu, nút bấm. Đảm bảo tính dễ đọc.
* **Accent Font (Handwriting):** `Dancing Script`
  * *Usage:* Các từ điểm nhấn như  *"Hi Gems!"* ,  *"Welcome"* , chữ ký.

### 1.3. Visual Style (Phong cách hiển thị)

* **Polaroid Effect:** Hình ảnh có viền trắng dày (`p-2 bg-white`), có `shadow-md` nhẹ.
* **Organic Layout:** Không chia lưới quá cứng nhắc. Hình ảnh có thể đè lên nhau (overlap) hoặc đè lên ranh giới giữa 2 section.
* **Rounded/Soft:** Các nút bấm, khung hình bo góc vừa phải (`rounded-md` hoặc `rounded-full`).

---

## 2. FUNCTIONAL REQUIREMENTS (NỘI DUNG & TÍNH NĂNG)

### 2.1. Homepage (Trang chủ)

Là trang quan trọng nhất, thiết kế dạng Single Page Landing.

1. **Hero Section:**
   * **Layout:** Split 50/50 (Text trái / Ảnh phải) hoặc Centered.
   * **Nội dung:** Tên thương hiệu, Slogan định vị, Ảnh chân dung chất lượng cao (tách nền hoặc bo khung tròn/vòm).
   * **CTA:** Nút "Xem khóa học" hoặc "Về tôi".
2. **Social Proof (Băng chuyền uy tín):**
   * **Hiển thị:** Logo các báo/đài/đối tác dạng Grayscale (Trắng đen).
   * **Quote:** 1 câu trích dẫn đắt giá từ bài báo.
3. **About Me (Tóm tắt):**
   * **Layout:** Bento Grid hoặc Asymmetric (Bất đối xứng).
   * **Nội dung:** Ảnh đời thường (style Polaroid), lời chào thân mật, chữ ký.
4. **Featured Courses (Khóa học tiêu biểu):**
   * **Layout:** Grid hoặc Carousel.
   * **Card:** Ảnh thumbnail, Tên khóa, Label (Online/Offline), Nút xem chi tiết.
5. **Gallery (Thư viện ảnh):**
   * **Style:** Masonry Grid (Xếp gạch so le).
   * **Nội dung:** Ảnh đứng lớp, ảnh sự kiện, ảnh đời thường (Lifestyle).
6. **Footer:** Newsletter form, Social Links.

### 2.2. Sub-pages (Trang con)

* **About Page:** Timeline sự nghiệp, chi tiết giải thưởng (ảnh bằng khen), sứ mệnh.
* **Courses Page:** Listing toàn bộ khóa học, bộ lọc đơn giản.
* **Contact Page:** Form liên hệ, thông tin booking.

---

## 3. TECHNICAL ARCHITECTURE (KIẾN TRÚC KỸ THUẬT)

### 3.1. Tech Stack

* **Framework:** Next.js 15 (App Router).
* **Language:** TypeScript.
* **Styling:** Tailwind CSS + Shadcn UI.
* **Animation:** Framer Motion.
* **Icons:** Lucide React.

### 3.2. Folder Structure (Feature-Based)

Áp dụng cấu trúc module hóa để dễ quản lý và scale.

**Plaintext**

```
src/
├── app/
│   ├── layout.tsx             # Global Layout (Fonts, Metadata)
│   ├── page.tsx               # Homepage Entry (Lazy loading modules)
│   └── globals.css            # Tailwind directives & CSS Variables
│
├── components/                # Shared UI (Atomic)
│   ├── ui/                    # Shadcn Base (Button, Card...)
│   └── shared/                # Global Layout Components (Header, Footer)
│
├── modules/                   # FEATURE MODULES
│   ├── home/                  # Toàn bộ logic trang chủ
│   │   ├── components/        # Các section con
│   │   │   ├── HeroSection/
│   │   │   │   ├── index.tsx
│   │   │   │   └── constants.ts  # Mock data (Text, Image config)
│   │   │   ├── AboutSection/
│   │   │   └── CourseSection/
│   │   ├── home-page.tsx      # File ghép các section lại
│   │   └── index.ts           # Export
│   │
│   └── courses/               # Logic trang khóa học
│
├── lib/
│   ├── utils.ts               # Helper functions (cn, clsx)
│   └── constants.ts           # Site Config (Social links, Site Name)
└── public/                    # Static Assets (Images, Fonts)
```

### 3.3. Performance & Optimization Rules

1. **Image Optimization:**
   * Bắt buộc dùng component `<Image />` của Next.js.
   * Ảnh Hero Section phải có prop `priority`.
   * Tất cả ảnh phải có thuộc tính `sizes` để browser tải đúng kích thước.
   * Ảnh trang trí/không quan trọng dùng `placeholder="blur"`.
2. **Code Splitting:**
   * Sử dụng `next/dynamic` để import module `HomePage` vào `app/page.tsx`.
   * Lazy load các section nặng ở dưới cùng (như Gallery) nếu cần.
3. **Rendering Strategy:**
   * Mặc định là  **Server Components** .
   * Chỉ dùng `'use client'` ở các component lá (Leaf components) có tương tác (Carousel, Form, Menu).

---

## 4. CONFIGURATION SNIPPETS (CẤU HÌNH MẪU)

### 4.1. `tailwind.config.ts` (Global Theme)

**TypeScript**

```
import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: ["./src/**/*.{ts,tsx}"],
    theme: {
    	extend: {
    		colors: {
    			brand: {
    				50: '#FFF1F2',  // Rose Water
    				100: '#FFE4E6',
    				200: '#FECDD3',
    				300: '#E1B0B9', // Dusty Rose
    				500: '#BE185D', // Elegant Rose
    				900: '#881337',
    			},
    			navy: {
    				900: '#1E293B', // Text Heading
    			}
    		},
    		fontFamily: {
    			serif: ['var(--font-playfair)', 'serif'],
    			sans: ['var(--font-inter)', 'sans-serif'],
    			handwriting: ['var(--font-dancing)', 'cursive'],
    		},
            // ...config borderRadius của Shadcn
    	}
    },
    plugins: [require("tailwindcss-animate")],
};
export default config;
```

### 4.2. `app/layout.tsx` (Global Fonts)

**TypeScript**

```
import { Playfair_Display, Inter, Dancing_Script } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const dancing = Dancing_Script({ subsets: ["latin"], variable: "--font-dancing" });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      <body className={`${playfair.variable} ${inter.variable} ${dancing.variable} font-sans antialiased bg-brand-50`}>
        {children}
      </body>
    </html>
  );
}
```

---

**Hướng dẫn sử dụng tài liệu này:**

1. **Bước 1:** Khởi tạo dự án Next.js & cài đặt ShadcnUI.
2. **Bước 2:** Copy cấu hình `tailwind.config.ts` và `layout.tsx` vào dự án.
3. **Bước 3:** Tạo cây thư mục theo phần  **3.2** .
4. **Bước 4:** Bắt đầu code component đầu tiên: `modules/home/components/HeroSection`.
