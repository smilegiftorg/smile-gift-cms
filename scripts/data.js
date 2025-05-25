const heroData = {
  subtitle: "CLB Thiện Nguyện Smile Gift",
  title: "Không phải ai cũng có sân khấu để tỏa sáng",
  description:
    "<p>Smile Gift tạo ra sân khấu cho những trái tim biết cho đi. Cùng nhau lan tỏa yêu thương và chia sẻ tài năng.</p>",
  buttons: [
    {
      text: "Đăng ký tình nguyện viên",
      link: "/volunteer",
      variant: "secondary",
      icon: "FaPeopleCarry",
    },
    {
      text: "Ủng hộ hoạt động",
      link: "/donate",
      variant: "outline",
      icon: "FaHandHoldingHeart",
    },
    {
      text: "Xem các chương trình",
      link: "/programs",
      variant: "outline",
      icon: "FaCalendarAlt",
    },
  ],
};

const aboutPreviewData = {
  title: "Hành trình lan tỏa yêu thương bằng nghệ thuật",
  description: `
    CLB Thiện Nguyện Smile Gift ra đời từ tháng 9/2022 với sứ mệnh kết nối nghệ thuật và lòng nhân ái. 
    Chúng tôi là nơi tập hợp những bạn trẻ yêu thích diễn xuất, ca hát, tổ chức sân khấu và mong muốn dùng tài năng để trao đi yêu thương.
  `,
  quote: "Đừng bao giờ từ chối nếu bạn vẫn còn cái để cho!",
  coreValue: {
    title: "Giá trị cốt lõi",
    items: [
      { value: "Tình người" },
      { value: "Chân thành" },
      { value: "Cống hiến" },
      { value: "Chuyên nghiệp" },
    ],
  },
  button: {
    text: "Tìm hiểu về chúng tôi",
    link: "/about",
    variant: "primary",
    icon: "FaArrowRight",
  },
  stat: {
    title: "Từ khi thành lập",
    items: [
      { value: "30+", description: "Chương trình" },
      { value: "100+", description: "Tình nguyện viên" },
    ],
  },
};

const impactStatsData = {
  title: "Tác động của chúng tôi",
  stats: [
    {
      icon: "FaHandHoldingUsd",
      value: "300",
      unit: "triệu",
      description: "gây quỹ từ thiện",
    },
    {
      icon: "FaRegSmile",
      value: "500+",
      unit: "",
      description: "người thụ hưởng",
    },
    {
      icon: "FaTheaterMasks",
      value: "50+",
      unit: "",
      description: "buổi biểu diễn",
    },
    {
      icon: "FaPeopleCarry",
      value: "100+",
      unit: "",
      description: "tình nguyện viên",
    },
  ],
};

const programsData = {
  title: "Chương trình nổi bật",
  description:
    "<p>Khám phá các chương trình thiện nguyện nổi bật của chúng tôi.</p>",
  programs: [1, 2, 3],
  viewAllButton: {
    text: "Xem tất cả chương trình",
    link: "/programs",
    variant: "secondary",
    icon: "FaArrowRight",
  },
};

const galleryPreviewData = {
  title: "Khoảnh khắc từ trái tim",
  description:
    "<p>Mỗi hình ảnh là một câu chuyện, mỗi khoảnh khắc đều chứa đựng tình người và sự sẻ chia.</p>",
  galleryItems: [1, 2, 3, 4, 5],
  viewAllButton: {
    text: "Xem thêm hình ảnh & video",
    link: "/gallery",
    variant: "primary",
    icon: "FaImage",
  },
};

const testimonialData = {
  title: "Câu chuyện từ cộng đồng",
  description:
    "Những chia sẻ chân thành từ các tình nguyện viên, mạnh thường quân và người thụ hưởng.",
  testimonials: [1, 2, 3],
};

const newsPreviewData = {
  title: "Tin tức & Hoạt động",
  description:
    "<p>Cập nhật những hoạt động mới nhất của CLB Thiện Nguyện Smile Gift và các thông tin báo chí.</p>",
  newsItems: [1, 2, 3, 4],
  viewAllButton: {
    text: "Xem tất cả tin tức",
    link: "/news",
    variant: "primary",
    icon: "FaArrowRight",
  },
};

const volunteerCTAData = {
  title: "Trở thành Tình Nguyện Viên",
  description:
    "Tham gia cùng Smile Gift để tạo ra những tác động tích cực đến cộng đồng. Bạn sẽ được trải nghiệm, học hỏi và phát triển cùng những người bạn tuyệt vời.",
  roles: [1, 2, 3],
  benefits: [
    { text: "Cơ hội trải nghiệm thực tế các hoạt động cộng đồng" },
    { text: "Phát triển kỹ năng teamwork, tổ chức sự kiện" },
    { text: "Giấy chứng nhận cho các hoạt động" },
    { text: "Một gia đình đầy tiếng cười và sự tử tế" },
  ],
  button: {
    icon: "FaUserPlus",
    text: "Đăng ký tình nguyện viên",
    link: "/news",
    variant: "primary",
  },
};

const donationData = {
  title: "Trở thành Mạnh Thường Quân",
  description: `
<p>Đồng hành cùng Smile Gift trong hành trình lan tỏa yêu thương. Mỗi đóng góp của bạn đều mang ý nghĩa to lớn đối với những người có hoàn cảnh khó khăn.</p>
  `,
  sponsoredItems: [
    { label: "Trao học bổng" },
    { label: "Phát cơm từ thiện" },
    { label: "Phẫu thuật mắt" },
    { label: "Xây dựng thư viện" },
  ],
  bankInfo: {
    bankName: "BIDV Chi nhánh TP.HCM",
    accountNumber: "31410001234567",
    accountHolder: "CLB THIỆN NGUYỆN SMILE GIFT",
  },
  buttons: [
    {
      text: "Quyên góp ngay",
      variant: "secondary",
      icon: "FaCreditCard",
      url: "/donate",
    },
    {
      text: "Báo cáo tài chính",
      variant: "outline",
      icon: "FaFileAlt",
      url: "/reports",
    },
  ],
};

const seoData = {
  metaTitle: "CLB Thiện Nguyện Smile Gift",
  metaDescription:
    "Kết nối nghệ thuật và lòng nhân ái - Nơi tập hợp những bạn trẻ yêu thích nghệ thuật và mong muốn dùng tài năng để trao đi yêu thương.",
  keywords:
    "Smile Gift, thiện nguyện, nghệ thuật, câu lạc bộ, hoạt động xã hội",
  metaRobots: "index,follow",
  metaViewport: "width=device-width, initial-scale=1",
  canonicalURL: "https://smilegift.vn",
  structuredData: {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "CLB Thiện Nguyện Smile Gift",
    url: "https://smilegift.vn",
    description: "Kết nối nghệ thuật và lòng nhân ái",
  },
  metaSocial: [
    {
      socialNetwork: "Facebook",
      title: "Smile Gift trên Facebook",
      description:
        "Theo dõi hoạt động của CLB Thiện Nguyện Smile Gift trên Facebook.",
      // image: 1,
    },
    {
      socialNetwork: "Twitter",
      title: "Smile Gift trên Twitter",
      description: "Cập nhật tin tức từ CLB Smile Gift trên Twitter.",
      // image: 2,
    },
  ],
  // metaImage: 3,
};

module.exports = {
  heroData,
  aboutPreviewData,
  impactStatsData,
  programsData,
  galleryPreviewData,
  testimonialData,
  newsPreviewData,
  volunteerCTAData,
  donationData,
  seoData,
};
