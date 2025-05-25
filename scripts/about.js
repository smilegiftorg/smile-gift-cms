// scripts/seedAboutPage.js
const strapiFactory =
  require("@strapi/strapi").default || require("@strapi/strapi");

const aboutHeader = {
  title: "Hành trình lan tỏa yêu thương bằng nghệ thuật",
  description:
    "Câu chuyện về CLB Thiện Nguyện Smile Gift và sứ mệnh kết nối những trái tim nhân ái",
};

const ourStoryData = {
  title: "Câu Chuyện Smile Gift",
  content:
    "<p>Bắt đầu từ vài bạn trẻ yêu sân khấu và mong muốn làm thiện nguyện, Smile Gift đã phát triển thành một CLB với hơn 100 TNV, tổ chức hơn 30 chương trình từ thiện, gây quỹ hơn 300 triệu đồng cho người nghèo và trẻ em khó khăn.</p><p>Chúng tôi tin rằng mỗi nụ cười, mỗi tiết mục hay, mỗi suất cơm tặng đi... đều có thể chạm vào trái tim người khác. Trong hành trình hơn 3 năm qua, chúng tôi tự hào đã tạo ra những tác động tích cực và lan tỏa giá trị tốt đẹp trong cộng đồng.</p>",
  highlightBox: {
    title: "Slogan",
    quote: "Đừng bao giờ từ chối nếu bạn vẫn còn cái để cho!",
    attribution: "",
  },
  // mainImage: 25, // media id
  quoteBox: {
    quote:
      "Mỗi chương trình của chúng tôi không chỉ là giúp đỡ vật chất, mà còn là sự sẻ chia tinh thần và lan tỏa năng lượng tích cực.",
    attribution: "Ban điều hành CLB",
  },
};

const missionAndValuesData = {
  title: "Sứ mệnh & Giá trị cốt lõi",
  description:
    "Chúng tôi hoạt động với những giá trị tốt đẹp và mục tiêu rõ ràng để tạo ra tác động tích cực đến cộng đồng.",
  missionItems: [
    {
      icon: "FaPeopleCarry",
      text: "Kết nối những trái tim nhân ái với những mảnh đời thiếu may mắn.",
    },
    {
      icon: "FaHandHoldingHeart",
      text: "Tạo sân khấu cho những bạn trẻ chưa từng có cơ hội đứng trên ánh đèn.",
    },
    {
      icon: "FaLightbulb",
      text: "Góp phần làm đẹp xã hội bằng hành động thiết thực.",
    },
  ],
  coreValues: [
    {
      icon: "FaHandshake",
      title: "Tình người",
      description: "Đặt con người và tình cảm chân thành lên hàng đầu",
    },
    {
      icon: "FaHandshake",
      title: "Chân thành",
      description: "Hoạt động với sự chân thật và minh bạch",
    },
    {
      icon: "FaHandshake",
      title: "Cống hiến",
      description: "Sẵn sàng trao đi và không ngừng nỗ lực",
    },
    {
      icon: "FaHandshake",
      title: "Chuyên nghiệp",
      description: "Tổ chức mọi hoạt động một cách bài bản",
    },
  ],
  button: {
    text: "Tham gia cùng chúng tôi",
    link: "/volunteer",
    variant: "primary",
    size: "lg",
  },
};

const teamData = {
  title: "Ban Điều Hành Smile Gift",
  description:
    "Gặp gỡ những con người đứng sau các chương trình đầy cảm hứng của chúng tôi.",
  members: [
    {
      name: "Nguyễn Văn An",
      role: "Chủ nhiệm CLB",
      facebookUrl: "https://www.facebook.com/nguyenvanan",
      email: "an.nguyen@example.com",
      image: 2, // media id for this member's image
    },
    {
      name: "Trần Thị Bình",
      role: "Phó chủ nhiệm",
      facebookUrl: "https://www.facebook.com/tranbinh",
      email: "binh.tran@example.com",
      image: 2,
    },
    {
      name: "Lê Minh Châu",
      role: "Trưởng ban Truyền Thông",
      facebookUrl: "https://www.facebook.com/leminhchau",
      email: "chau.le@example.com",
      image: 2,
    },
  ],
};

async function seed() {
  const app = await strapiFactory();
  await app.load();

  const existingAboutPages = await app.entityService.findMany(
    "api::page.page",
    {
      filters: { slug: "about" },
      populate: ["header", "sessions", "sessions.members.image"],
    }
  );

  const aboutSessions = [
    {
      __component: "sections.header",
      ...aboutHeader,
    },
    {
      __component: "sections.our-story",
      ...ourStoryData,
    },
    {
      __component: "sections.mission-and-values",
      ...missionAndValuesData,
    },
    {
      __component: "sections.team",
      ...teamData,
    },
  ];

  if (!existingAboutPages || existingAboutPages.length === 0) {
    await app.entityService.create("api::page.page", {
      data: {
        title: "Về chúng tôi",
        slug: "about",
        sessions: aboutSessions,
      },
    });
    console.log("About page created.");
  } else {
    const aboutPageId = existingAboutPages[0].id;
    await app.entityService.update("api::page.page", aboutPageId, {
      data: {
        sessions: aboutSessions,
      },
    });
    console.log("About page updated.");
  }

  await app.destroy();
}

seed();
