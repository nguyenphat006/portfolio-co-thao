// ===== ABOUT PAGE CONSTANTS =====
// Based on Hoàng Thị Phương Thảo's journey

export const HERO_CONTENT = {
  greeting: "Xin chào, tôi là",
  name: "Hoàng Thị Phương Thảo",
  tagline: "Từ vương miện Hoa khôi đến giảng đường đại học",
  description: "Hành trình của tôi là minh chứng cho việc vẻ đẹp đích thực đến từ trí tuệ, sự nỗ lực không ngừng và khát vọng cống hiến cho xã hội.",
  image: "/about/IMG_2544.JPG",
} as const;

export const STATS = [
  { value: "1,700+", label: "Thí sinh vượt qua" },
  { value: "10+", label: "Năm kinh nghiệm" },
  { value: "2", label: "Bằng cấp (CN & ThS)" },
  { value: "3", label: "Vai trò chính" },
] as const;

// Timeline data for storytelling
export const TIMELINE_CHAPTERS = [
  {
    id: 1,
    year: "2014",
    chapter: "Chương 1",
    title: "The Beauty Queen",
    subtitle: "Hoa khôi Nữ sinh viên Việt Nam",
    description: `Năm 20 tuổi, khi còn là sinh viên Đại học Sư phạm TP.HCM, tôi đã vượt qua hơn 1.700 thí sinh từ khắp cả nước để đăng quang ngôi vị Hoa khôi Nữ sinh viên Việt Nam duyên dáng 2014.

Giải thưởng không chỉ là vương miện trị giá 800 triệu đồng, mà còn là sự công nhận cho "vẻ đẹp của sự thông minh" - câu trả lời ứng xử về vẻ đẹp đích thực đã chinh phục Ban giám khảo.`,
    achievements: [
      "Vương miện trị giá 800 triệu đồng",
      "Giải thưởng 200 triệu đồng tiền mặt",
      "Top thí sinh hùng biện tiếng Anh ấn tượng nhất",
    ],
    image: "/about/IMG_8049.WEBP",
    color: "brand-500",
  },
  {
    id: 2,
    year: "2016-2020",
    chapter: "Chương 2",
    title: "The Expert",
    subtitle: "MC Truyền hình & Doanh nhân",
    description: `Sau đăng quang, tôi không dừng lại ở ánh hào quang sân khấu. Tôi bắt đầu hành trình chinh phục lĩnh vực truyền hình từ năm 18 tuổi tại HTV, và trở thành gương mặt quen thuộc của bản tin "Toàn cảnh 24h" trên VTV9.

Song song với sự nghiệp MC, tôi đảm nhiệm vị trí Phó Tổng Giám đốc tại Vietnews Media - một bước tiến lớn trong lĩnh vực quản lý doanh nghiệp.`,
    achievements: [
      "Biên tập viên VTV9 - Toàn cảnh 24h",
      "Top 10 Én Vàng Nghệ Sĩ 2020",
      "Phó Tổng Giám đốc Vietnews Media",
      "Chung kết Hoa hậu Việt Nam 2016",
    ],
    image: "/about/IMG_3990.JPG",
    color: "navy-900",
  },
  {
    id: 3,
    year: "2021-Nay",
    chapter: "Chương 3",
    title: "The Educator",
    subtitle: "Giảng viên & Người truyền cảm hứng",
    description: `Ước mơ thuở nhỏ về việc trở thành giảng viên đại học cuối cùng cũng thành hiện thực. Năm 2021, tôi bảo vệ thành công luận văn Thạc sĩ chuyên ngành Quản lý Giáo dục tại ĐHQG TP.HCM.

Hiện tại, tôi đang giảng dạy tại FPT Polytechnic và trường Trung cấp Việt Giao, truyền đạt không chỉ kiến thức mà còn cả đam mê và cảm hứng cho thế hệ trẻ.`,
    achievements: [
      "Thạc sĩ Quản lý Giáo dục - ĐHQG TP.HCM",
      "Giảng viên FPT Polytechnic",
      "Giảng viên trường Trung cấp Việt Giao",
      "Đại sứ Áo dài Việt Nam",
    ],
    image: "/about/IMG_2546.JPG",
    color: "brand-300",
  },
] as const;

export const SOCIAL_IMPACT = {
  title: "Hoạt động xã hội",
  description: "Bên cạnh sự nghiệp, tôi luôn dành thời gian cho các hoạt động cộng đồng và thiện nguyện.",
  activities: [
    {
      icon: "Heart",
      title: "Thiện nguyện",
      description: "Dạy chữ cho trẻ em, phát thực phẩm từ thiện, thăm viện dưỡng lão nghệ sĩ",
    },
    {
      icon: "Sparkles",
      title: "Đại sứ Văn hóa",
      description: "Quảng bá tà áo dài truyền thống Việt Nam trong môi trường giáo dục",
    },
    {
      icon: "Award",
      title: "Giám khảo",
      description: "Giám khảo các cuộc thi sắc đẹp sinh viên tại nhiều trường đại học",
    },
  ],
} as const;

export const VIDEO_SECTION = {
  title: "Hành trình của tôi",
  description: "Từ Hoa khôi trở thành Giảng viên Đại học",
  videoId: "Q9W4KcV6yrs",
} as const;
